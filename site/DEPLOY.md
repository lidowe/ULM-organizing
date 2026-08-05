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

1. Export / pull the latest from Lovable.
2. Copy it over `site/`, preserving `wrangler.jsonc`, and keeping
   `package.json` → `name` and `src/lib/mcp/index.ts` → `name`/`title`
   (Lovable resets these to `tanstack_start_ts` / `pixel-perfect-clone`).
3. Confirm `src/lib/site-pages.ts` uses `/studio-*.jpg`, not `/__l5e/…`, and
   that the three JPEGs are still in `public/`.
4. `npm run build`, then push (Option A) or `npx wrangler deploy` (Option B).

## Content notes — both in `src/lib/site-pages.ts`, both currently live

1. **The "Real equipment list needed" block is intentional — leave it.** The
   studio page renders a placeholder block saying the panels below describe
   categories rather than named gear. This ships deliberately; showing the work
   in progress is the editorial call, not an oversight. Do not "clean it up."
2. **Two-rack photo caption/alt is factually wrong** — still worth fixing.
   `studio-racks.jpg`'s alt text and caption name gear that is not in the shot
   (SansAmp, Chandler Germanium, Ampeg, Summit MP-2A). The photo is the main
   channel-strip rack beside a second rack of Drawmer 1968 MKII, API 2500,
   Tonelux Equalux and related mix processors. This one isn't a placeholder,
   it's an inaccurate description of a photo — and the alt text is what screen
   readers announce.
