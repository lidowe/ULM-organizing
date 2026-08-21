# Proposals — 16 Aug 2026

What follows the fixes. Nothing here is built; each item is a decision for
Edward, sized so one "yes" or "no" unblocks it. Ordered by how much of the
"pieced together" feeling each one removes.

---

## 1. The image system, done properly

**Current state after the fixes:** one original per photo, compressed, focal
points working again via `data-photo`, but still: no responsive sizes (a
phone downloads the desktop file), a full duplicate of every photo in
`site/public/`, and crop/ratio/treatment decisions scattered across ~15 CSS
classes with three different aspect ratios and two different saturation
filters. The scatter is the inconsistency Edward is seeing.

**Proposal — one registry, one treatment, generated sizes:**

- Extend `src/lib/photos.ts` from a name→url map into a name→record map:
  `{ url, focal, role, caption? }`. One line per photograph, one place where
  every decision about that photograph lives. The `data-photo` stamping added
  today is the hook this plugs into — the renderer would emit focal point and
  size hints from the registry instead of CSS carrying 22 one-off rules.
- Give `role` three values and stop there — the CSS already names them in a
  comment but doesn't enforce them: **evidence** (natural aspect, no border,
  no caption, sits beside a claim), **index** (shared ratio, bordered,
  captioned, only in grids), **aside** (small, floated). Every photo gets
  classified once; pages stop inventing new treatments. This is the single
  biggest step toward "thematic consistency".
- Generate width variants at build time (`vite-imagetools` or a small sharp
  script writing a manifest) and have the same stamping pass emit
  `srcset`/`sizes`. Phones stop downloading 2MB pages.
- Delete the `site/public/` photo duplicates except `session-bw.jpg` (the
  social-share image) and `favicon.ico`. One copy of every photo, ~30MB off
  the deploy. Risk: any old external link straight to a root image 404s —
  acceptable unless Edward knows of shares that used those URLs.

Effort: one focused session. Visual change: none until roles are enforced,
then deliberate.

## 2. The contact form opens the visitor's mail app — only Edward can fix it

The code path is correct: the endpoint validates and delivers if configured,
and falls back to a mailto draft only when no delivery method exists. No
delivery method exists. In the Cloudflare dashboard → Workers →
`ulm-organizing` → Settings → Variables, set either:

- `INQUIRY_WEBHOOK_URL` — any webhook (Zapier/Make/n8n/Slack), simplest; or
- `RESEND_API_KEY` + `INQUIRY_TO_EMAIL` (+ optional verified
  `INQUIRY_FROM_EMAIL`) — inquiries arrive as email with reply-to set.

This container cannot reach the Cloudflare API, so it genuinely cannot be
done from here. Until it is set, every submission on the live site detours
through the visitor's email client, which is the single biggest leak in the
"attract them to fill out the form" path.

## 3. Copy: one audit, one decision pass, no word-by-word ping-pong

Proposal: a single numbered document covering every page — each entry is
*current text → verdict → proposed text (where warranted) → one-line reason*.
Verdicts limited to: **his-keep** (reads authored, stays), **flag** (probable
AI filler — the "ambiguous slop" he's smelling: sentences that assert mood
without content), **mechanical** (typo/entity, fixed without asking). Edward
replies with numbers to accept or reject; one round, done. The strongest
lines on the site (the coffee-to-console passage, "A production line never
misses a beat", the Sagan setup) set the bar the flagged lines get measured
against — the voice to keep is *specific, wry, credentialed by detail*.
Candidates already spotted: "we provide the means and the message", "We
understand the frustration", "so all of us get to better creative output" —
assertion-shaped sentences with no image in them.

## 4. Flow: one spine, told once

The incoherence has a specific source: **the mission is told four times**
(Home mission-band, Home unit 03 "Why this exists", About item 02, About item
03) and **the process is told twice** (Services units 01–03, plus echoes on
Home). Each retelling is slightly different, so pages feel like drafts of
each other — that is the "jumps incoherently" feeling.

Proposal, using only existing material (no new copy needed):
- **Home** = route + proof. Keep hero, router, one short stance, ribbon,
  CTA. Move "Why this exists" content into the planned standalone page it
  already says it wants to become, linked from Home and About.
- **About** = the person and the mission, told once, full-strength.
- **Services** = how it runs + what it costs (already right).
- **Work** = evidence; add 2–3 short cases when vetted (credits prove access,
  cases prove judgment — the brief already ranks this).
- **Learn** = the differentiator, built out per the brief.

Each page keeps its existing next-page handoff; the handoffs are already
good. This is a cut-and-move job, not a rewrite — but it moves his copy, so
it waits for a yes.

## 5. Clickability

Likely culprits (need Edward to confirm which he reached for): **work cards**
(hover-less article blocks that look like tiles), **service rows** (have
anchor ids and red prices, look like links), **capability/entry cards**, and
**ribbon names**. Two honest options per element: make it genuinely clickable
with a destination and a hover state, or visibly inert (no hover lift, cursor
default). The site rule worth adopting: red mono text = clickable or a price,
nothing else.

## 6. Does the site offer something new, and does it draw clients? — the straight answer

**The offer is real and rare.** Symptom-led intake ("describe it in your own
words, we route it") plus the three modes (hand it over / work it together /
learn to run it) plus apprenticeship-transfer teaching is a genuinely
differentiated package — competitors sell studio time and mixing; nobody in
reach sells *judgment with an education mission*. The router on Home and the
problem-first contact form are the right mechanisms and already built.

**What currently blunts it:**
1. The hero sells the mission before the offer. A first-time visitor gets a
   pun and a thesis; the router that actually serves them is a viewport down.
   (Fix candidates: pull the router up, or make the deck state the offer in
   one plain sentence — Edward's call, it's his headline.)
2. Learn is the differentiator and the thinnest page. The gap between claim
   and page is where "amateur" impressions come from.
3. The trust layer (roster/credits, Tier 1 from the review) — the exact
   visitor most likely to hire is the one most likely to verify.
4. The form works but its delivery isn't configured (item 2).
Fix those four and the answer to "does it draw and direct" moves from
"partially" to "yes".

## 7. The lost corrections

Edward mentioned a series of correction prompts that were lost because work
happened in a different directory. If those corrections were made in this
repo (e.g. the removed `archived/` tree or an abandoned branch), they are
recoverable from git history. Needed from Edward: roughly *what* was
corrected and *when*, and whether it happened in Lovable rather than here —
Lovable-side edits that never synced cannot be recovered from this repo, but
knowing what they said means they can be re-applied deliberately.

---

*Standing note recorded in CLAUDE.md: copy provenance is mixed (most his, not
all), and copy proposals go in one numbered batch, not word-by-word.*
