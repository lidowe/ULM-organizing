# Upper Level Music — working notes

Standing decisions for this repo. These were settled in conversation and kept
getting re-litigated or forgotten, which is the only reason this file exists.
If something here conflicts with what Edward says now, he wins — update the file.

## Whose words these are

The copy is Edward's. Do not rewrite his sentences into house style, do not
"tighten" his phrasing, and do not invent copy in his voice. If a passage needs
to change, propose it and let him decide the wording. Restoring his verbatim
text after an unrequested rewrite has already had to happen once.

Fix mechanical things freely: capitalisation, typos, entities, markup.

## Photographs and captions

- **Captions describe the room and the work, never the people.** No names, no
  personal detail, nothing that puts someone in the public eye who did not ask
  to be there. Edward has permission to use the photos he supplies; that is not
  the same as a licence to use people for reach.
- **No generative alteration of his photographs.** Cropping, resizing and
  compression are fine. Adding, removing or synthesising content is not.
- A photo must not imply a claim the work does not support. A picture placed
  beside a service is read as evidence of that service. Do not put a personal
  or incidental photo in a position where it argues for paid work.
- Images live in `site/src/assets/`. The registry in `site/src/lib/photos.ts`
  globs that folder automatically, so a file dropped there is immediately
  available as `{{IMG:<filename-without-extension>}}`. No registration step.
- Camera originals are multi-megabyte. Compress before shipping.

## Credits

Edward's standard, in his terms: every credit listed reflects an actual studio
duty beyond intern or casual presence. Being in the room at a major session is
not itself a credit, and he does not claim it as one.

So: never upgrade a credit. Do not describe him as lead, principal or sole
engineer on anything unless he has said those words about that specific record.
Do not name a marquee artist in a caption or heading where it would read as a
credit. When in doubt, describe the work and leave the name out — he has
consistently chosen the more conservative wording when asked.

## Typography

Three faces, one per role. The whole point is recognition before a word is read.

| role | face | used for |
|---|---|---|
| display | Spectral 500 | headings, pull quotes, mission lines |
| reading | Space Grotesk 400 | all prose |
| data | Space Mono 700 | labels, kickers, prices, specs, quotes |

Rules that keep getting broken:

- **One place sets face, weight and tracking**: the `THE TYPE SYSTEM` block at
  the foot of `site/src/styles/site.css`. Sizes stay with their components,
  because size is layout. There were once three such blocks at top-level
  specificity, so the last silently won and the other two were dead text.
- **The auxiliary tier is uniform.** Every sub-title, kicker, label, number,
  price, spec, button and nav link is one face, one weight, one size, one
  tracking. Rank is carried by **colour only** — `--aux-hot` red is
  load-bearing, `--aux-cool` grey is supporting. Nothing in the tier grows to
  signal importance. If it needs to matter more, it turns red.
- **Headings are Title Case**, written into the copy, not forced by
  `text-transform`. "Major" must keep its capital for the pun, and a transform
  would also capitalise "and" and "the".
- **Prose is one size.** A deck and the body under it are the same; separating
  them by a size step made every deck read as a second heading.
- **A quote never outranks the heading it sits under.**
- Photo captions stay **out** of the aux tier. They are sentences; uppercasing
  them would be uppercasing prose.

### Changing a typeface

A face swap invalidates every measure tuned to the previous face — `ch` is the
width of a zero in the current font, so every `max-width` in `ch` changes
meaning. Re-derive the measures as part of the swap. Carrying them over is what
produced a pull quote breaking into four stubby lines.

Same for `clamp()`: derive the middle term against a real viewport width. A
coefficient that is too small pins the value to its floor at every realistic
width while the token claims otherwise.

## Verifying visual changes

For any change to typography or layout, screenshot every page at 1400 and 390
before and after, and diff the images. Do not rely on a clean build or on
reading the CSS — a build log says nothing about how a page looks.

Split refactors from redesigns into separate commits. A refactor that is meant
to change nothing should be **proven** to change nothing by pixel diff before
the visual change lands on top of it. This has already caught a real
regression that reasoning had missed: removing `.display{line-height:.92}`
looked safe because `.display` sets the same value earlier in the file, but the
hero `h1` carries both `.display` and `.hero-title` at equal specificity, so
source order was the only thing deciding between them.

When capturing: force `loading="eager"` on all images and wait for them to
decode, disable animations and transitions, and confirm the dev server is
serving assets (`200`, not `404`) before trusting a single screenshot. A stale
server holding the port silently invalidates a whole comparison.

## Deployment

- The site is a **Cloudflare Worker** named `ulm-organizing`, not Pages.
- **Pushing to `main` deploys to upperlevelmusic.com.** Pushing to any other
  branch does not build or deploy anything.
- `site/wrangler.jsonc` binds `upperlevelmusic.com` and `www.` as custom
  domains. Any preview deploy must strip `routes` and use a different Worker
  name, or it takes over the live domain.
- Agent containers cannot reach `api.cloudflare.com` — the proxy rejects it.
  Deploys and preview deploys have to happen from Edward's side.

## Working preferences

- Do not push on every edit.
- Do not use the question/options UI — it has eaten his input. Ask in plain text.
- Any file he sends is to be read in full before responding to it.
- Verify before agreeing. Assembling reasons for a conclusion before checking
  the data is worse than saying "let me look".
