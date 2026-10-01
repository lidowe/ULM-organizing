# Upper Level Music: deploy notes

**Stack:** TanStack Start (SSR) built with Nitro for Cloudflare Workers. This is a Worker, not a static Pages site.

**Worker:** `ulm-organizing` (pinned in `wrangler.jsonc`; it must match the Worker name in the Cloudflare dashboard, because Workers Builds fails on a mismatch). The custom domains `upperlevelmusic.com` and `www.upperlevelmusic.com` are attached through `routes` in `wrangler.jsonc`.

## Deploy

- **Automatic:** a push to `main` runs Workers Builds (`npm run build`, then `npx wrangler deploy`).
- **From a machine:** `npm install && npm run build && npx wrangler deploy` (first run needs `npx wrangler login`).
- **Roll back:** Cloudflare dashboard, Workers, `ulm-organizing`, Deployments; or `npx wrangler rollback <version-id>`.

## Where things live

- Page copy: `src/lib/pages/*.ts` (HTML strings; tokens `{{IMG:name}}`, `{{BOOTH:id}}`, `{{RIBBON}}`, `{{CREDIT_CARDS}}`).
- Booths and their sketches: `src/components/site/booths.ts`, `BoothBoard.tsx`.
- Photos: `src/assets/*.jpg`, bundled and resized by `vite-imagetools`; per-photo focal points are in `src/lib/photos.ts`.
- Styles: `src/styles/site.css`, then `src/styles/concept.css` (the "Paper Edition" layer, loaded last).
- Static extras kept from the earlier site: `public/attempts/` and `public/alternatevisualAug27/` (they use `public/fonts/`).
- Open pre-launch items: `docs/OPEN-ITEMS.md`.
