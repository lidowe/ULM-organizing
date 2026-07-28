# Deploying upperlevelmusic.com

## How this is set up

The site is plain HTML/CSS/JS with **no build step**. It is served by a
Cloudflare Worker using [static assets](https://developers.cloudflare.com/workers/static-assets/):
Cloudflare uploads the files in this repo and serves them directly.

| Thing | Value |
| --- | --- |
| Worker name | `old-unit-7acb` |
| Assets directory | repo root (`./`) |
| Build command | none |
| Config | `wrangler.jsonc` |
| Exclusions | `.assetsignore` |

## ⚠️ Before you connect anything: check for drift

This site was originally edited **directly in the Cloudflare dashboard**, and
this repo was maintained separately. That means the live site and this repo may
not match.

**Connecting Git deploys will overwrite the live site with whatever is in this
repo.** If you made edits in the dashboard that never came back to your local
folder, those edits are lost.

So first:

1. Open the Worker in the Cloudflare dashboard and download / view the deployed
   files, or just visit <https://www.upperlevelmusic.com> and compare against
   your local pages.
2. If the live site is ahead, copy those changes into this repo and commit them
   **before** step 2 below.
3. Only once the repo matches (or is deliberately ahead) should you connect Git.

## One-time setup: connect this repo to Cloudflare

These steps happen in the Cloudflare dashboard — they can't be scripted from
here because they require authorising Cloudflare's GitHub app on your account.

1. Cloudflare dashboard → **Workers & Pages** → select **`old-unit-7acb`**.
2. **Settings** → **Build** → **Connect Git**.
3. Authorise Cloudflare to access the `lidowe/ULM-organizing` repository.
4. Set the production branch to **`main`**.
5. Leave **build command empty** and **root directory** as `/`.
   Cloudflare reads `wrangler.jsonc` for the rest.
6. Save, then push a commit to `main` to confirm it deploys.

Connecting the **existing** Worker (rather than creating a new project) is what
keeps the `upperlevelmusic.com` custom domain attached.

## Everyday workflow after that

```bash
git add -A
git commit -m "Update gear listings"
git push
```

Cloudflare builds and deploys within about 30 seconds. Every deploy is a
version you can roll back to from the dashboard, and every change has a commit
behind it.

Stop editing in the Cloudflare dashboard once this is connected — dashboard
edits will be silently overwritten by the next push.

## Optional: deploy manually from your machine

```bash
npx wrangler deploy
```

Uses the same `wrangler.jsonc`. Handy for testing, but prefer pushing to `main`
so the deployed site always has a matching commit.

## Renaming the Worker

`old-unit-7acb` is an auto-generated name. If you rename it, change `name` in
`wrangler.jsonc` **and** re-attach the `upperlevelmusic.com` custom domain to
the new Worker — otherwise Cloudflare creates a second Worker and the domain
keeps serving the old one.

## What gets published

Everything in this repo **except** what's listed in `.assetsignore`.

Note that this currently includes `versions/`, `recovered/`, and `v4-fresh/` —
roughly 2 MB of old drafts and recovered editor snapshots. That is deliberate:
`iterations.html` is in the site navigation and links into those folders, so
excluding them would break the public Iterations page.

If you'd rather keep old drafts off the public internet, uncomment the last
three lines of `.assetsignore` and remove the `Iterations` link from the nav in
each page.
