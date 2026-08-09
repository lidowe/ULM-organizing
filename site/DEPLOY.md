# Upper Level Music — deploying to upperlevelmusic.com

**Stack:** TanStack Start (SSR) built via Nitro, targeting Cloudflare Workers.
This deploys as a **Worker**, not a static Pages site. It has live server routes
(a read-only MCP server at `/mcp` plus a `.well-known` OAuth metadata endpoint),
so it needs a running server — a static-file host will not work.

Worker name: **`ulm-organizing`** (pinned in `wrangler.jsonc`, and it must keep
matching the Worker in the Cloudflare dashboard — see below).

## Where this code came from — read this first

This directory is the **deploy-ready export** of the Lovable project, not the
Lovable repo itself. They differ in one way that matters:

| | `lidowe/pixel-perfect-clone` (Lovable) | `site/` (here) |
|---|---|---|
| Studio photo `src` | `/__l5e/assets-v1/<uuid>/…jpg` | `/studio-*.jpg` |
| Photo files in `public/` | no (only `favicon.ico`) | yes, all three |

The `/__l5e/` paths only resolve inside Lovable's preview proxy. **Deploying the
Lovable repo directly to Cloudflare would ship a studio page with three broken
images.** The export rewrote those paths and bundled the actual JPEGs, which is
why this copy is the one to deploy.

Consequence: edits made in Lovable do **not** flow to the deployed site. To pick
up Lovable changes, re-export and re-apply that same rewrite (see "Syncing future
Lovable edits" below).

## Option A — Cloudflare Workers Builds (auto-redeploy on push)

The Worker already exists (`ulm-organizing`, imported from this repo). Its build
settings live at Worker → **Settings → Build**:

| Field | Value |
|---|---|
| Root directory | `site` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Branch control → production branch | `main` |

To connect a *new* Worker from scratch instead: **Workers & Pages → Create
application → Import a repository** → `lidowe/ULM-organizing`, then the same
four settings.

All four matter, and none is the default:

- **Root directory must be `site`.** Left blank, the build runs at the repo
  root — an archive of older static HTML iterations with no app in it, and no
  wrangler config. It will fail.
- **Build command must be set.** Without it nothing is compiled, so there is no
  `.output/` for wrangler to deploy.
- **Production branch must be `main`** (where PR #1 landed). Commits to any
  other branch build a *preview version* instead of deploying, so a Worker
  pointed at a `claude/…` branch quietly stops tracking real work.
- **The Worker's name must equal `name` in `wrangler.jsonc`** — currently
  `ulm-organizing`. Workers Builds hard-fails on a mismatch. If you ever
  recreate the Worker under a different name, change the config to match; a
  Worker cannot be renamed in place.

The custom domains attach themselves on the first successful deploy — see
"Custom domain" below. Every later push to `main` redeploys.

## Option B — deploy from your machine

```bash
cd site
npm install
npm run build          # emits .output/ + an auto-generated wrangler.json
npx wrangler deploy    # first run opens a browser to log into Cloudflare
```

`.wrangler/deploy/config.json` (created by the build) points wrangler at the
generated `.output/server/wrangler.json`, so `wrangler deploy` needs no flags.

## Custom domain

**This is automatic — there is no dashboard step.** `wrangler.jsonc` declares
both hostnames as Custom Domains:

```jsonc
"routes": [
  { "pattern": "upperlevelmusic.com",     "custom_domain": true },
  { "pattern": "www.upperlevelmusic.com", "custom_domain": true }
]
```

On the first successful deploy Cloudflare creates the DNS records and issues the
certificate itself — the zone is already on the same account, so there is no
manual DNS entry and no third-party cert. Allow a few minutes for the
certificate to go active; until it does, HTTPS on the apex may error.

`custom_domain: true` routes **all** paths of each hostname to this Worker, and
serving both means the site answers on the bare domain and on `www`. If you'd
rather have one canonical hostname, drop the `www` entry and add a **Redirect
Rule** (Rules → Redirects) sending `www.upperlevelmusic.com/*` to
`https://upperlevelmusic.com/$1` with a 301.

**If the deploy fails on this step**, the usual cause is an existing CNAME
record on the hostname — Cloudflare refuses to create a Custom Domain over one.
Delete the stale record under DNS → Records and redeploy. Note also that
attaching these domains takes over whatever is currently served there.

## About `wrangler.jsonc`

Nitro regenerates `.output/server/wrangler.json` on every build and merges this
file into it. Three things are set there deliberately:

- **`name`** — without it, nitro auto-derives the worker name from the git repo
  and folder, which produced `lidowe-ulm-organizing-site`. That string would
  have become the `*.workers.dev` hostname.
- **`compatibility_date`** — nitro otherwise defaults it to *the date the build
  ran*, so the Workers runtime semantics could shift under you on a later
  rebuild.
- **`routes`** — the two Custom Domains, so the domain attaches on deploy
  instead of by hand in the dashboard.

Do not add `main` or `assets` to that file; the build always overrides them and
will warn.

## Verified

Built and smoke-tested against the real Worker runtime (`wrangler dev --local`):
all seven routes (`/`, `/about`, `/services`, `/studio`, `/work`, `/process`,
`/contact`) return 200 with server-rendered HTML, all three studio JPEGs and the
favicon serve from `/`, and `/.mcp/list-tools` responds. No `/__l5e/` paths
remain in the rendered output.

The `routes` block was added after that smoke test and confirmed by a later
build: both Custom Domain patterns come through into
`.output/server/wrangler.json` intact, alongside the pinned `name` and
`compatibility_date`, with no override warnings.

## Syncing future Lovable edits

**This repo is the source of truth, not Lovable.** Lovable is a design tool
whose output gets pulled in here; the deployed site does not depend on Lovable
being alive (see "Leaving Lovable" below).

One command:

```bash
cd site
node scripts/sync-from-lovable.mjs ../path/to/pixel-perfect-clone
npm run build
```

Then commit and push to `main` — Cloudflare redeploys itself.

The script copies `src/` and the config files across, and re-applies every fix
that the copy would otherwise destroy: it rewrites Lovable's preview-only
`/__l5e/assets-v1/<uuid>/<file>` image URLs to `/<file>`, leaves `public/`,
`wrangler.jsonc` and this file alone, and restores the MCP server's name, which
Lovable resets to its own project name.

It then checks that every image the site references actually exists in
`public/` and **exits 2 with a WARNING listing any that don't**. That is the
one failure mode worth watching: Lovable keeps uploaded images on its own
servers and never commits them, so a photo added in Lovable arrives here as a
reference to a file that isn't in the repo. Download it from the Lovable editor
into `site/public/` under exactly the reported name. Text, layout and new pages
need no manual step.

Exit codes: `0` clean, `2` referenced images missing, `1` the path given is not
a Lovable checkout.

## Leaving Lovable

Cancelling Lovable does not take the site down, by design:

- The images are committed here, not hotlinked from Lovable. This is the whole
  reason the `/__l5e/` rewrite exists — deploying Lovable's own repo would have
  left the studio photos pointing at Lovable's servers.
- The build depends on `@lovable.dev/vite-tanstack-config` and
  `@lovable.dev/mcp-js`, but those are ordinary public npm packages. A cancelled
  subscription does not remove them, and `npm install` keeps working.

So the exit is simply: stop syncing. Nothing to migrate, nothing to switch off.

Stripping the Lovable packages out afterwards is optional and is a real
refactor, not a cleanup — `vite.config.ts` is built on their config wrapper, and
the `/mcp` and `.well-known` routes come from their MCP package. Leave it alone
unless there is a reason.

## Content notes

**Read this before "finishing" anything.** The site is being built in public,
live, across sessions — visible incompleteness is deliberate and runs with the
philosophy of the work. Placeholder copy, stand-in images and unfinished
sections are the current state on purpose, not a backlog.

So: do not smooth over rough edges, fill in blanks, or replace placeholder text
with plausible-sounding copy because it reads as unfinished. If something looks
like an oversight, ask before changing it. Actual defects — broken links, images
that 404, text that contradicts itself — are still worth fixing and reporting.

What that does **not** license is shipping editorial to-dos. The redesign
carried eight `needs-content` blocks — notes addressed to the owner, rendering
publicly. Three actively worked against the site: one told visitors every price
was a working draft, one described the client roster as "largely unverifiable"
and possibly inflated, and one named a specific artist credit as unconfirmed.
They were removed at the owner's direction — but they came back, because the
removal happened outside this repo and a later sync overwrote it. That is the
failure mode to design against, not the blocks themselves.

So they are now **gated instead of deleted**. `stripAuthoringNotes()` in
`src/lib/render-tokens.ts` removes every `<div class="needs-content">` from any
production build; they render only under `vite dev`. A sync can no longer put
one in front of a visitor, and the owner keeps the reminders while editing.

Consequence for anyone working here: writing a `needs-content` block is safe
and is the right place for a note to the owner. Writing a note to the owner in
*any other markup* is not, because nothing strips it.

The distinction that matters: *"The first posts are on the way"* is transparency
and belongs on the page. *"Confirm the hourly rate and deposit terms before
publishing"* is a note to self that leaked. Both look like placeholder text; only
one is addressed to the reader.

Where things stand now:

- The studio page carries the real equipment list — 103 microphones across 64
  models, preamps and dynamics grouped by topology. The old "Real equipment list
  needed" placeholder is gone.
- The 40 photographs are the owner's own. Earlier stand-ins are superseded.
- `news` and `education` are openly unfinished on purpose, and say so in their
  own voice. Leave them that way until the owner fills them in.
