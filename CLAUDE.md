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

## Deployment

The three ways to break the live site, in order of how easily they happen:

1. **Merging to `main` is publishing.** There is no staging step between the
   two. A merge is live within a couple of minutes, on the domain Edward sends
   to clients.
2. **Repointing the production branch in the dashboard.** One careless save
   publishes whatever that branch holds. See the combobox note below.
3. **Deploying any Worker that still carries `routes`.** The custom domains are
   bound in config, so a preview built from the unmodified config takes over
   upperlevelmusic.com.

The details:

- The site is a **Cloudflare Worker** named `ulm-organizing`, not Pages.
- **The production branch is `main`.** Verified by correlation, not by reading
  the dashboard: `main`'s tip 21cfe76 was committed 2026-08-15 19:29:37 and the
  Worker's `modified_on` is 19:30:40 — 63 seconds later. Branches that are not
  the production branch do not deploy.
- **A dashboard field is not the saved setting.** The Production branch control
  is a combobox: clicking near it can display a different branch while the
  stored value is unchanged. This nearly caused a save that would have
  repointed production at `claude/cloudflare-domain-hosting-b36p1n`, a branch
  49 commits behind, publishing a week-old site over the live domain. Never
  read a form control as the current state, and never save a settings page to
  find out what it does.
- To confirm what is actually deployed, compare the Worker's `modified_on`
  against commit timestamps. That is evidence; the UI is a claim.
- With "Builds for non-production branches" on, those branches build with the
  **Version command** (`npx wrangler versions upload`), producing a preview
  version and its own URL. Only the production branch runs the Deploy command
  (`npx wrangler deploy`) and reaches upperlevelmusic.com.
- `site/wrangler.jsonc` binds `upperlevelmusic.com` and `www.` as custom
  domains. Any preview deploy must strip `routes` and use a different Worker
  name, or it takes over the live domain.
- Agent containers cannot reach `api.cloudflare.com` — the proxy rejects it.
  Deploys and preview deploys have to happen from Edward's side.

## The old site is not in this tree

There used to be an `archived/` folder holding eight complete copies of the
pre-TanStack static site — v1, v2, v3, v3-2, v3-3, v3-production, v4-fresh and
recovered — plus its blog, css and js. Nothing referenced it, nothing built it,
and having six versions of every heading sitting next to the real ones is how
old Lovable-era copy kept bleeding back into current work.

It is removed from the working tree and preserved in history. To read or
restore any of it:

    git show 1b3f220 --stat            # what was archived
    git checkout 1b3f220 -- archived   # bring the whole folder back

If you are looking for the current copy of a page, it is in
`site/src/lib/pages/`. Nothing outside `site/` is site content.

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
