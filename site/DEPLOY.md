# Upper Level Music — deploying to upperlevelmusic.com

**Stack:** TanStack Start (SSR) built via Nitro, targeting Cloudflare Workers.
This deploys as a **Worker**, not a static Pages site. It has live server routes
(a read-only MCP server at `/mcp` plus a `.well-known` OAuth metadata endpoint),
so it needs a running server — a static-file host will not work.

Worker name: **`upperlevelmusic`** (pinned in `wrangler.jsonc`).

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

Cloudflare dashboard → **Workers & Pages → Create → Import a repository** →
pick `lidowe/ULM-organizing`, then:

| Field | Value |
|---|---|
| Root directory | `site` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Branch | whichever branch you merge this to |

Root directory **must** be `site` — the repo root is an archive of older static
HTML iterations, not this app. Redeploys on every push to that branch.

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

After the first successful deploy, the Worker is live on
`upperlevelmusic.<your-subdomain>.workers.dev`. To attach the real domain:

Cloudflare dashboard → the `upperlevelmusic` Worker → **Settings → Domains &
Routes → Add → Custom domain** → add **both**:

- `upperlevelmusic.com`
- `www.upperlevelmusic.com`

The zone already lives on the same Cloudflare account, so Cloudflare creates the
DNS records and issues the certificate itself — no manual DNS entry, no
third-party cert. Give it a few minutes for the cert to go active.

Adding `www` as a second custom domain serves the site on both hostnames. If you
would rather have one canonical hostname, add only the apex here and create a
**Redirect Rule** (Rules → Redirects) sending `www.upperlevelmusic.com/*` to
`https://upperlevelmusic.com/$1` with a 301.

## About `wrangler.jsonc`

Nitro regenerates `.output/server/wrangler.json` on every build and merges this
file into it. Two keys are pinned there deliberately:

- **`name`** — without it, nitro auto-derives the worker name from the git repo
  and folder, which produced `lidowe-ulm-organizing-site`. That string would
  have become the `*.workers.dev` hostname.
- **`compatibility_date`** — nitro otherwise defaults it to *the date the build
  ran*, so the Workers runtime semantics could shift under you on a later
  rebuild.

Do not add `main` or `assets` to that file; the build always overrides them and
will warn.

## Verified

Built and smoke-tested against the real Worker runtime (`wrangler dev --local`):
all seven routes (`/`, `/about`, `/services`, `/studio`, `/work`, `/process`,
`/contact`) return 200 with server-rendered HTML, all three studio JPEGs and the
favicon serve from `/`, and `/.mcp/list-tools` responds. No `/__l5e/` paths
remain in the rendered output.

## Syncing future Lovable edits

1. Export / pull the latest from Lovable.
2. Copy it over `site/`, preserving `wrangler.jsonc`, and keeping
   `package.json` → `name` and `src/lib/mcp/index.ts` → `name`/`title`
   (Lovable resets these to `tanstack_start_ts` / `pixel-perfect-clone`).
3. Confirm `src/lib/site-pages.ts` uses `/studio-*.jpg`, not `/__l5e/…`, and
   that the three JPEGs are still in `public/`.
4. `npm run build`, then push (Option A) or `npx wrangler deploy` (Option B).

## Open content items — both in `src/lib/site-pages.ts`, both currently live

1. **Placeholder editorial block ships to production.** The studio page renders
   a block reading "Real equipment list needed… Replace with the actual locker
   and rack." It is visible on the built site right now. Replace with the real
   equipment list or delete the block before pointing the domain at this.
2. **Two-rack photo caption/alt is wrong.** `studio-racks.jpg`'s alt text and
   caption name gear that is not in the shot (SansAmp, Chandler Germanium,
   Ampeg, Summit MP-2A). The photo is the main channel-strip rack beside a
   second rack of Drawmer 1968 MKII, API 2500, Tonelux Equalux and related mix
   processors. Rewrite to match.
