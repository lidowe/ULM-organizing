# Site review — 16 Aug 2026

Audited against `ULMbrief_aug_16.md` (scope, audiences, tiers) and
`ulmauditcontext.md` (posture, walk-throughs). Working tree at
`claude/upperlevelmusic-review-hod2rl`, branched from `origin/main`.
Method: full read of `site/src`, production build, all eight pages rendered
and screenshotted at 1400 and 390 through `wrangler dev` against the built
Worker. All pages return 200, zero console errors, zero failed requests.

Labels: **(a)** broken · **(b)** working but misaligned with intent ·
**(c)** taste.

One framing fact first: the amber "needs-content" panels are stripped from
production builds (`render-tokens.ts:65-69`, confirmed by grepping the served
HTML — zero occurrences). Every caution written into those panels is invisible
to visitors. Whatever is in the data files **is the claim the live site
makes**, unhedged.

---

## Tier 1 — factual exposure. Everything below this is cosmetic by comparison.

### 1. (b→a) The credit data layer systematically expands role language

`credits.ts:6-17` documents its own authoring rule:

> Mix Assistant work becomes "Mixing Engineer · Editing · Vocal Tuning ·
> Additional DAW Operation". Uncredited major-artist work reads "Various
> Engineering".

That is a credit upgrade written down as policy, and it renders live: the
Kevin Rudolf *In the City* card says **"Mixing Engineer"** where the public
credit that same file says it derives from is mix assistant. The Work page
deck promises the opposite — *"Precise roles where publicly credited"* — so
the page sets the standard its own data then breaks. A peer engineer who
checks Discogs (the page links to it two scrolls down) sees the gap
immediately, and that visitor is walk-through #3 in the audit context.

The conservative framing Edward actually wants is already on the site — the
home-page "Every role" unit ("Get them coffee, route signal flow…") is the
most credible credit copy on the site precisely because it doesn't inflate.
The card data contradicts it.

**Needed from Edward, per card:** the role words he is willing to defend to
someone holding the liner notes. The constants in `credits.ts:41-49` make the
sweep mechanical once the language is decided.

### 2. (b→a) The 50-name marquee roster renders unqualified

`credits.ts:206-284`: Bob Dylan, Madonna, Eminem, Dr. Dre, Coldplay, Justin
Bieber, Justin Timberlake, Timbaland… — ~50 names, each carrying "Various
Engineering", all rendered three ways: the Work artist index, the home-page
ribbon, and the MCP `list_credits` tool. The only qualifier a visitor sees is
"A partial list. Roles vary by artist and session." The in-source warning
("an inflated list undercuts the verified credits above") strips out of
production, so the live page makes the claim without the hedge.

Also: the *Pink Friday* card is flagged in-source as not matching any public
credit spelling (`work.ts:10`) — that flag strips too, so the card stands
unmarked, next to an RIAA Pink Friday plaque that visually corroborates it.

**Needed from Edward:** per name — keep with real role words, keep as
"session presence" under a differently-labeled list, or cut. This is the one
place the site can be *wrong* rather than unfinished, and it's live.

### 3. (b) Unconfirmed rates are live

Teaching $75–150/hr and the $100–150/hr technical rate render on /services
now; the confirm-before-publishing panel strips in production
(`services.ts:144`). Deposit terms, revision policy, day-rate contents remain
undefined anywhere on the site. Rate list, for the confirmation pass:
diagnosis $100–150/hr · mixing $400–900/song · editing $150–400 · vocal
production $150–400 · mastering $100–175 · tracking $65–100/hr, day from
$500 · systems $100–150/hr · acoustics $100–150/hr · teaching $75–150/hr.

---

## Tier 2 — broken mechanics. All cheap to fix, all currently silent.

### 4. (a) All 22 focal-point rules are dead in production — but alive in dev

`site.css:1160-1179` and `:1120-1121` match on `img[src$="/room-kid.jpg"]`
etc. In dev, Vite serves `/src/assets/room-kid.jpg` — matches, looks right.
In production, assets emit as `/assets/room-kid-BKg35Aet.jpg` (verified in
`.output/public/assets`) — never matches, every cropped photo centres. So the
brief's claim is confirmed, with the sharper point that **dev preview
actively hides it**. Fix is one mechanical edit: `src$=` → `src*="/room-kid"`
style substring matches (hashes append with a dash, so substring is safe), or
serve those images from the public copies that already exist.

### 5. (a) The responsive-image system is dead code

`render-tokens.ts:39` only enhances images whose src starts `/__l5e/` — the
old Lovable CDN prefix. Bundled asset URLs never match, so no image on the
site gets `srcset`/`sizes` (confirmed: zero `srcset` in served HTML), and the
`?w=` URLs it would emit are meaningless on static assets anyway. Consequence
measured: /work, /studio and /about each transfer **3.4MB at 390px wide** —
a phone downloads the full desktop images. The whole `enhanceImages` +
`WIDTHS`/`SIZES` block is CDN-era residue; honest options are (i) delete it
and pre-generate real size variants at build time, or (ii) route images back
through an image CDN. As-is it's dead weight that reads as if the site has
responsive images when it has none.

### 6. (a) About → "What Comes Next" opens onto nothing in production

`about.ts:108-112`: the panel's only content is a needs-content block, which
production strips. A visitor clicks the fourth accordion item and gets an
empty region. Remove the item from the accordion until the content exists, or
give the panel one real sentence.

### 7. (a) The closing CTA heading wraps one word per line

`.cta-section h2{max-width:9ch}` (`site.css:387`) forces "Tell Me What
You're Working On." into six stubby lines at every width, on home and About —
verified in all four screenshots. This is exactly the stale-`ch`-measure
failure CLAUDE.md documents; 9ch against Spectral fits ~1.5 words. Re-derive
(the sentence wants ~12–14ch for a 2–3 line lockup, or a wider cap and let
`text-wrap:balance` work).

### 8. (b) The Learn page opens on an illegible crop

`education.ts:3-5`: `mastering-list.jpg` (a photo of on-screen text) forced
through the 4/1 `edu-photo-band` crop renders as giant blurred letterforms —
"Clones.formas…" — as the first visual on the strategically most important
page. Any room photo survives a 4/1 crop; a text screenshot cannot. Swap the
image or drop the band.

### 9. (b) Every image ships twice; originals ship uncompressed

`site/public/` holds a full 29MB copy of the photo set and the bundler emits
another 30MB of hashed copies — ~60MB per deploy, double-maintained.
Individual files run to 940K (`session-bw.jpg`, also the OG image), 796K
plaque scans, etc. CLAUDE.md already mandates compression before shipping.
Consolidate to one location and batch-compress; with #5 fixed this is the
other half of the mobile-weight problem.

### 10. (b) Route/SEO residue

- `sitemap.xml` lists `/process`, which 301s to /services (verified); the
  `process` entry in `seo.ts:38-46` is dead metadata.
- `pages/process.ts` (124 lines of superseded copy) is still wired into
  `site-pages.ts` while its route redirects — the exact "old copy waiting to
  bleed back" pattern the archived/ removal was meant to end. Delete it and
  the seo entry together.
- The orphan-route question in the brief is otherwise **resolved**: /credits,
  /reach, /who-we-are are clean 301s. No decision left there.
- The brief's "19 distinct widths / unreachable px tokens" claim is **stale**:
  widths now come from four `--pw-*` tokens derived from the 1200px column
  (`site.css:154-157`) with per-source sharpness caps documented. Verified
  fixed; only the focal-point half of the photo-system finding survives.

### 11. (b) Type-system hygiene: dead declarations re-accumulating

The single TYPE SYSTEM block holds and wins, but earlier top-level rules
still declare face/weight/tracking that it silently overrides — e.g.
`.display` at `site.css:272` (weight 400, -.035em, line-height .92) vs the
authoritative block at `:1204-1218`. These are the same dead-text landmines
the consolidation commit removed once already; if the file order ever
shuffles, `.92` comes back — the exact regression the pixel-diff caught last
time. Worth a deletion pass while nothing depends on them.

---

## Tier 3 — the audience walk-throughs

**Prospective student/parent (8-second test): partial pass.** Above the fold,
Home offers a pun and a mission — what ULM *believes* arrives before what it
*does*. The router unit ("What Is Getting in the Way?") is genuinely good and
does the qualify-and-route job the brief demands, but it's a full viewport
down. The theory puns (major key, resolves, Root, accidentals) select for
musicians — defensible for audience #1, but a parent evaluating lessons
decodes none of it. Learn itself: no formats, lengths, or prices (known
scaffolding — the gap the brief already ranks as the biggest).

**Institutional contact: mixed.** The mission is coherent and the teaching
lineage (Hit Factory internship → instructor) is legible. Two frictions:
the industry critique runs hot in places ("the landscape has gone dystopian",
labels "manufacture a product") — an administrator deciding partnership-grade
may read grievance where Edward means diagnosis; and the roster inflation
(#2) is the kind of thing an institution quietly verifies. Copy is Edward's —
flagging the tension, not proposing wording.

**Peer engineer: currently fails, fixably.** The plaques, the Discogs and
AllMusic links, and the coffee-to-console honesty on Home are strong — this
visitor is *invited* to verify. Findings #1 and #2 are what verification then
finds. Fix those and this walk-through flips to the site's strongest.

---

## The code question Edward asked

**Verdict: better than "retooled a few times" implies. No overhaul needed.**
The architecture is unusual — pages as HTML strings in TS, a token renderer,
injected into a React/TanStack shell via `dangerouslySetInnerHTML` — but it
is small, coherent, one-source-of-truth-ed (credits, seo, photos), and easy
to hold in one head. Genuinely above-average for a site like this:
accessibility (skip link, correct accordion/dialog ARIA, substantive alt
text, `prefers-reduced-motion` throughout), the contact endpoint
(`api/public/inquiry.ts`: validation, honeypot, mailto fallback so the form
can never dead-end), and self-hosted subset fonts with preloads.

The real debt is not style, it's **migration residue**: the CDN-era seams
(#4, #5), duplicated assets (#9), and dead files (#10, #11). Clear those and
the codebase is clean. Two things worth confirming Edward-side, since this
container can't: that the Worker has `RESEND_API_KEY`/`INQUIRY_TO_EMAIL` (or
a webhook) set — otherwise every form submission falls back to opening the
visitor's mail app — and what `main`'s deployed tip is, by the
`modified_on`-vs-commit-timestamp method in CLAUDE.md.

Minor hygiene, noted not urgent: `studio.ts:8-9` opens `<section>` twice and
never closes one (browsers recover); Work's inline `style="margin-top:3rem"`
(`work.ts:21`); `/news` is reachable but in no nav (fine if deliberate while
empty).

### (c) Taste, take or leave

- Desktop nav links sit over the bright hero rack photo at 1400; legible but
  low-contrast at the STUDIO/ABOUT end.
- The open About accordion panel caps at 62ch and leaves the right half of a
  wide screen empty for its whole (long) height; the inline photos inside it
  render small for what they are.

---

## Suggested order of work

1. Edward: credit-language + roster vetting pass (#1, #2) and rate
   confirmation (#3) — nothing else on this list matters while the live site
   carries claims he hasn't signed off.
2. One mechanical commit: focal-point selectors (#4), CTA measure (#7), empty
   About panel (#6), Learn band image (#8), dead process page + sitemap
   (#10), dead type declarations (#11). All verifiable by pixel diff.
3. Image pipeline decision (#5 + #9 together): one asset location, build-time
   size variants, batch compression. This is the "highest visible improvement
   per effort" item once the factual layer is safe.
4. Then the brief's Tier 3 as already ranked: Learn build-out, Work cases,
   About reframe.
