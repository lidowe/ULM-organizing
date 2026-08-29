# Various Attempts — standalone deployment

A self-contained little site: the one-page, accordion "Various Attempts" page,
deployed on its **own** Cloudflare Worker so it has no neighbors. Nothing else
is reachable from it — chopping the URL lands on the page itself (or nothing),
never the work-in-progress site.

## What's here

```
attempts-deploy/
  public/
    index.html      the page (root of the deployment → served at "/")
    attempts.css
    robots.txt      Disallow: / (kept out of search)
  wrangler.jsonc    its own Worker name, NO routes, assets-only
```

## Deploy (from your machine, where Cloudflare is reachable)

```
cd attempts-deploy
npx wrangler deploy
```

That publishes to:

```
https://ulm-attempts.<your-account>.workers.dev
```

Share **that** URL. It serves only this page.

## Safety notes

- **It cannot touch the live site.** The config has its own Worker `name`
  (`ulm-attempts`) and **no `routes`/custom domain**, so it never binds
  `upperlevelmusic.com` and never overwrites the `ulm-organizing` Worker.
- To update the page later: edit `public/index.html`, run `npx wrangler deploy`
  again from this folder.
- To take it down: `npx wrangler delete` from this folder.
- If you later want it off `.workers.dev`, add a custom domain
  (e.g. `attempts.upperlevelmusic.com`) in the Cloudflare dashboard for this
  Worker — that's the only change needed, and it still won't affect the main
  site.
```
