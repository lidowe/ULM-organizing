# Upper Level Music — working notes

Standing decisions for this repo. These were settled in conversation and kept
getting re-litigated or forgotten, which is the only reason this file exists.
If something here conflicts with what Edward says now, check to see if the change has thematic reduancy somewhere else on the working draft.  If found, specify and await further indtructions before proceeding.  

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
- Images live in `site/src/assets/` and are used as `<Photo name="…" alt="…" />`.
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

Three faces, one per role (Ed's 3 October 2026 decision):

| role | face | used for |
|---|---|---|
| headings | Space Grotesk 700, uppercase | page titles, section titles |
| text | IBM Plex Mono | all prose, labels, buttons |
| tags | Pixelify Sans 400 | small tags and numbers only, never bold or big |

Heading sizes come from the `--t-h1`, `--t-h2`, `--t-h3` and `--t-card` tokens in
`site/src/styles/tokens.css`. Change the token, not a component rule.

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

## If you are a new session starting work — read this first

Edward runs several sessions at once, on different jobs, sometimes on
different models. He should not have to manage branches, and he will not give
you branch instructions. Handle it yourself, without being asked:

**1. Make your own branch before you change anything.** Never work directly on
`main`. Name it for the job.

    git fetch origin main
    git checkout -B claude/<short-job-name> origin/main

Do this even for a one-line copy fix. Two sessions sharing a branch will
overwrite each other's work, and Edward will not find out until something he
approved has disappeared.

**2. Never merge or push to `main` unless Edward says to publish, in those
words, in this session.** `main` is the live site. Pushing to it puts your
work on the domain he sends to clients, within a couple of minutes, with no
staging step and no review. "It's finished" is not permission to publish.

**3. Commit as you go. Do not push unless asked.** A commit is a checkpoint he
can throw away. A push is not what he asked for and costs him nothing to wait
for.

**4. Show `git diff`, not a summary of it.** "I fixed the typo" is a claim.
The diff is the evidence, and for copy work it is the only thing that shows
whether a sentence was changed as well as corrected.

**5. Do not touch another session's branch.** If `git branch -a` shows other
`claude/*` branches, they belong to work in progress somewhere else. Branch
from `origin/main`, not from them.

**6. When your job is done, say so and stop.** Tell Edward the branch name and
what is on it. He decides what gets published and when.

## Where to change what

| To change | Edit |
|---|---|
| Words on a page | `site/src/pages/<Page>.tsx` (the copy is plain text inside the JSX) |
| Page titles, search descriptions, nav labels and order, email, location | `site/src/site/site.ts` (the registry: nav, menu, footer, "keep exploring", head tags and sitemap all read it) |
| A photo | drop `<name>.jpg` into `site/src/assets/`, then `<Photo name="<name>" alt="…" />`. The name is type-checked (`npm run dev`/`build` regenerate the list). Focal points: `site/src/lib/photos.ts` |
| Booths (titles, text, groups) | `site/src/components/booths/booths.ts`; drawings in `sketches.tsx`; a tag in copy is `<BoothTag id="room" />` |
| Credits, roster, places, ribbon | `site/src/lib/credits.ts` |
| Colours, sizes, spacing, textures | `site/src/styles/tokens.css` (the only place tokens are defined) |
| Header, menu, footer, newsletter band | `site/src/components/chrome/` |
| Contact form | `site/src/components/forms/ContactForm.tsx`; endpoint `site/src/routes/api/public/inquiry.ts` |
| Form delivery, redirects, security headers, rate limit | `site/src/lib/http/` and `site/src/server.ts` |
| Component styles | `site/src/styles/site.css`, then `concept.css`, then `system.css` (loaded in that order; later wins). These are being rewritten into per-component files; new rules never use `!important` and never define tokens. |

Every change: `npm run check` (types, lint, unit tests, build). Any visual change:
build, serve it (`npm run preview`), then `npm run capture -- --label after` and
`npm run compare -- --before <label> --after after`, and look at the report.

## Deployment

1. **Merging to `main` is publishing.** Workers Builds builds `main` and deploys it to
   the Worker `ulm-organizing`, which serves upperlevelmusic.com. There is no staging
   step. Never merge without Edward saying "publish" in the current session.
2. **Every other branch gets a preview.** A push builds a preview version with its own
   URL (`<branch>-ulm-organizing.upperlevelmusic.workers.dev`), marked noindex.
   Previews share the production secrets, so a preview form sends real email; its
   subject starts with `[PREVIEW]`.
3. **No hand deploys.** `wrangler deploy` from a laptop gets ahead of `main` and the
   next merge silently replaces it. Fix the build instead.
4. Secrets live only in the Worker (`npx wrangler versions secret put NAME`):
   `INQUIRY_WEBHOOK_URL` (the Google Apps Script in `site/ops/gmail-forwarder.gs`)
   and `FORWARDER_SECRET`. Never commit them; this repository is public.
5. Rollback: Cloudflare dashboard, Workers, `ulm-organizing`, Deployments, or
   `git revert` and merge.

## This repository is public

Internal notes (open questions, reviews, drafts, logo work, photos not yet on the
site) live outside the repository in `~/websiteulm/ULM-notes/`. Do not commit them.
The old static site is in history only (`git show 1b3f220 --stat`).

## Working preferences

- Do not push on every edit.
- Do not use the question/options UI — it has eaten his input. Ask in plain text.
- Any file he sends is to be read in full before responding to it.

## Before asserting

State the evidence, or state that you have not checked. Not "X is the case"
but "X, because `<the command and what it returned>`."

This has failed three separate ways in a single session:

- a page-order claim argued from assembled reasons before reading the source
  table, which said the opposite;
- a deploy claim read off a UI control, while a timestamp comparison one
  command away said the opposite;
- a "this refactor changes nothing" claim reasoned from the cascade, disproved
  by a pixel diff that found a 10px regression.

The rule is not "be careful". It is: if a check is available and cheap, run it
**before** the sentence, not after Edward pushes back. Reading a value in a UI,
reasoning about CSS specificity, and remembering what a file says are all
claims, not evidence.

Corollary for anything that touches the live site: the cheap check is always
cheaper than the incident. Confirm what is deployed, confirm what a config
holds, and confirm a "safe" change is safe by measuring it, before acting.
