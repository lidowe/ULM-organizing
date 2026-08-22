# Design research — Upper Level Music redesign

Date: 2026-08-21. Method note, per the repo's evidence rule: **WebFetch is egress-blocked
in this container for every external domain tried** (frontend.horse, nngroup.com,
linear.app, m2.material.io, baymard.com — all returned `EGRESS_BLOCKED`), so no live
site could be inspected directly. Evidence here is of three kinds, and each claim is
labelled:

- **[S]** sourced from WebSearch result content (URLs at the foot of each section);
- **[C]** computed in this session (WCAG contrast ratios and alpha-composite values,
  from a Python script run against the candidate palette — the numbers are exact);
- **[K]** professional synthesis from training knowledge of the named sites
  (Linear, Stripe, Vercel, Klim, Grilli Type etc.), **not verified by fetch today**.
  Treat [K] items as strong priors, not measurements.

Every recommendation is stated in values. Where a value is a judgment call the
reasoning is next to it.

---

## 1. Header / nav on dark sites

**What the field does.** [S] Consensus across 2025–26 sticky-header guidance: sticky
state 50–60px tall; if the initial header is larger (80–100px), shrink it after
~100px of scroll with a 150–200ms transition; the currently favoured pattern is
hide-on-scroll-down / reveal-on-scroll-up. Google's own guidance caps sticky
elements around 50px. Overloaded bars are the named failure. [K] The
developer-tool class runs very lean: Linear ~5 top-level items + one CTA, Vercel
~6 + two CTAs, Stripe is the outlier with mega-menus (and is the wrong model for a
one-person practice). Type foundries (Klim, Grilli) run 4–6 items, wordmark left,
no CTA button at all. One-person practice sites that win awards typically carry
3–5 items or none (nav lives in the footer).

**Recommendation for ULM**

- Height: **64px desktop, 56px mobile** initial; if sticky, shrink to **56px** —
  or skip shrinking entirely and use **hide-down/reveal-up** (`transform:
  translateY(-100%)`, 200ms ease-out, cancelled instantly on scroll-up). With five
  door-bars as the real navigation, the header is secondary wayfinding, not the
  primary nav — it can afford to get out of the way.
- Items: **4 maximum** plus wordmark. The five doors should NOT be duplicated as
  five nav links; the header carries at most: wordmark → (Work/Credits) →
  (Rates) → (Contact), with Contact as the single red item (`--aux-hot`), the
  only red in the bar. Everything else `--aux-cool`. This matches the existing
  aux-tier rule: rank by colour, never by size.
- Background: **not transparent-over-content**. `background: var(--bg-base)` at
  ~92–96% opacity + `backdrop-filter: blur(8px)`, with a **1px bottom hairline at
  rgba(255,255,255,0.08)** ([C] that alpha composites to #252525 on #121212,
  ratio 1.22:1 — visible as a line, silent as a surface). No drop shadow; shadows
  read poorly on dark (see §3).
- Mobile: with ≤4 items, **no hamburger**. Wordmark left, "Contact" right, and
  let the doors do the navigating. A hamburger hiding three links is a pattern
  imported from sites with 40 links.

Sources: parallelhq.com/blog/what-sticky-header; apprendreabloguer.com sticky
header examples 2026; css-tricks.com/how-to-create-a-shrinking-header-on-scroll.

## 2. Hero / first viewport

**What the field does.** [S] Hero occupies 60–100% of viewport height on desktop,
50–70% on mobile (≈500–700px) to encourage scrolling; headline must pass a
five-second comprehension test; ≤8 words on mobile; photo-led heroes appear on
~74% of professional music-producer sites; dedicated vertical crop for mobile
(~800×1200, focal point centred) rather than auto-scaling the landscape frame.
[K] The strongest dark editorial heroes (Klim's specimen pages, Commission
Studio, mouthwash.studio class) put the serif headline **on the base surface,
not on the photo** — the photo sits beside or below the text block, so the type
never fights the image for contrast and the image never needs a scrim.

**Recommendation for ULM — 1400px viewport**

- Hero height **~88–92vh**, not 100vh: the top edge of the first door-bar should
  be visibly cut by the fold. That sliver is the scroll cue; it replaces every
  "scroll down" arrow ever added to a dark site.
- Composition: headline block left/upper-left on `--bg-base`, **Spectral 500 at
  clamp(2.6rem, 1.2rem + 4.2vw, 4.5rem)** (re-derive the middle term against
  1400 real width per the CLAUDE.md rule), max-width ~18–22ch, line-height
  1.02–1.08. One Space Mono kicker above it (the only aux element in the hero).
  Photography occupies the right ~45% or a full-bleed band *below* the headline —
  dim console/red-light imagery at natural exposure, no gradient scrim, no text
  over faces or gear.
- Body: at most **two sentences** of Space Grotesk under the headline, then
  nothing. No CTA button in the hero — the doors are the CTA. A button here would
  compete with them and lose.
- **390px viewport**: headline (≤8 words), one sentence, top of door #1 visible.
  That is the whole fold. The photograph moves below the doors or into the first
  door's story; do not spend 60% of a 390×740 viewport on an image before the
  proposition is stated.

Sources: perfectafternoon.com/2025/hero-section-design; webflow.com/blog/
website-hero-image; createtoday.io music-producer examples.

## 3. Section rhythm and avoiding the "wall of dark"

**What the field does.** [S] Material's dark model: base surface **#121212**,
elevation expressed as a semi-transparent **white overlay from 0% (0dp) to 16%
(24dp)** — on dark, *lighter = closer*, because shadows are nearly invisible.
[K] The Linear-look toolkit (per the frontend.horse analysis and the sites that
copy it): 1px borders at `rgba(255,255,255,0.06–0.12)` instead of shadows;
occasional radial "light spill"; very thin rules everywhere. [S] Spacing
consensus: one base unit (8px), section padding as multiples, line-heights as
multiples of the base so long-form text keeps a rhythm.

**Recommendation for ULM**

- **Three surfaces only**, tokenised, [C]-verified:
  - `--bg-base` #0E0E10 (page)
  - `--bg-raised` #18181B (cards, door-bars at rest, form fields) — ratio vs base
    1.10:1, a felt shift, not a stripe
  - `--bg-high` #232326 (hover states, the single most elevated element per view)
  - plus `--hairline` rgba(255,255,255,0.08) and `--hairline-strong`
    rgba(255,255,255,0.14) ([C] 1.22:1 and 1.48:1 on base — both visible, neither
    shouting). **No box-shadows anywhere**; elevation is surface + hairline.
- **Spacing scale** (8px base): 8 / 16 / 24 / 40 / 64 / 96 / 144. Section padding
  desktop **96px** (6rem) default, **144px** (9rem) before a chapter-grade
  heading; mobile multiply by 0.6 (≈56/88px). Never invent a fourth intermediate
  value mid-build; that is how rhythm dies.
- **Density alternation, fixed cadence**: long-form argument prose (max-width
  ~65ch — re-measure in Space Grotesk ch, per CLAUDE.md) should never run more
  than **two consecutive 96px sections** without a texture change: a full-bleed
  photograph band, a diagram, a pull quote, or a credits band. The alternation is
  the anti-fatigue device — dark pages tire the eye through *sameness of
  luminance*, not darkness itself.
- Full-bleed photo bands are the strongest "elevation" available (a photo is a
  luminance event no overlay can match): budget **one per 3–4 sections**.
- Hairline rules `border-top: 1px solid var(--hairline)` between sibling
  sections that share a surface; omit the rule when the surface itself changes.
  Two separators at one seam is the classic dark-site tell.

Sources: medium.com/snapp-mobile design-for-the-dark-theme; codelabs.developers.
google.com design-material-darktheme; freecodecamp.org 8-point grid typography;
blog.logrocket.com/ux-design/linear-design.

## 4. Pricing without SaaS tiers

**What the field does.** [S] Day-rate literature: the rate is "the price of a
consultant's judgment applied to a client's problem"; half-day ≈ 60–65% of full
day, not 50%; single-number clarity is valued by both sides. [K] Craft practices
that publish rates well (independent studios, letterpress printers, some
recording studios) present them as a **rate card — a typographic table, not
cards**: service name, unit, number, one line of what's included. The SaaS smell
comes from three equal-width boxes, a "most popular" badge, per-feature
checkmark lists, and a CTA per tier — all four are deletable.

**Recommendation for ULM**

- Format: a **two-column definition-list table**, full-bleed hairline rules
  between rows. Left cell: service in Space Grotesk (a sentence, Edward's words,
  e.g. what "a mix" includes); right cell: the number in **Space Mono 700,
  `--aux-hot` red** — the only red in the band, which by the existing colour-rank
  rule makes the price the loudest data on the page without moving a font size.
- Units that fit the work: **per song / per day / per session-hour**, stated in
  the row. "From $X" is honest when scope varies; pair every "from" with the
  sentence that says what moves the number ("stems above 48 add a day").
  Never "Contact for pricing" on some rows and numbers on others — mixed
  disclosure reads as negotiation bait.
- No badges, no "popular", no per-tier buttons, no feature checkmarks, no
  toggle switches. **One** intake link after the table, not per row.
- Row count: keep it to **3–6 rows**. Sub-variants (attended vs unattended,
  half-day at 60–65%) go in the row's description line, not as new rows.
- Anchor the table with one plain-prose paragraph above it — how he works,
  revision policy — in Edward's own words. The paragraph is what stops the table
  from reading as a menu.

Sources: consultfees.com/blog/consultant-daily-rate; stafiz.com daily-rates-in-
consulting; ruul.io freelance-consultant-rates.

## 5. Credibility / evidence bands

**What the field does.** [S] Logo/credit walls: grayscale/monochrome for visual
consistency and a more premium read (optionally colour-on-hover); a short
headline above the wall so visitors know why the logos are there; group credits
by era/type when numerous; "put your most recognisable credits in a dedicated
Selected Work section"; each project gets a one-sentence description **of your
role**. [K] The tasteful ceiling for name-drops on engineer sites is the
*discography row* pattern: title — artist — role — year, set as data, not as
headline. The plaque photograph outperforms any typeset logo wall because it is
**evidence, not assertion**: a physical object awarded to a person.

**Recommendation for ULM** (constrained hard by the repo's credits rule: never
upgrade a credit, no marquee names in headings/captions)

- Lead with the **plaque photographs**, not a logo wall: one full-bleed or
  two-up band, captions describing the object and the duty ("RIAA certification,
  [record], [actual role]") — the caption states the role in Edward's
  conservative wording or omits the name entirely. Photograph captions stay in
  prose case, outside the aux tier (existing rule).
- Below it, a **credits table** in the same typographic form as the rate card:
  Space Mono for year/role columns, Space Grotesk for titles. Role column uses
  Edward's exact terms. No logos of labels/artists at all — a text credit
  under-claims by design and is therefore safe; a logo over-claims by
  association. This sidesteps the entire grayscale-logo-wall genre, which is a
  B2B convention anyway and reads as SaaS on a craft site.
- One-line kicker above the band ("Selected credits, 1994–2026" — Mono,
  `--aux-cool`), and a link to the full list. Grouping: **by era or by role**,
  not by artist fame; fame-ordering is a silent credit upgrade.
- Place one credibility band **inside the relevant door's story** (e.g. the
  translation door cites the major-label years) rather than one giant trophy
  section; evidence lands hardest adjacent to the claim it supports.

Sources: instago.ai best-practices-for-displaying-client-logos; sixleafdesign.com
how-to-showcase-client-logos; twine.net music-producer-portfolio-examples.

## 6. Inline diagrams and animation etiquette

**What the field does.** [S] NN/g (via search snippets; article itself
egress-blocked): scroll-triggered *text* animations measurably delay users;
motion is processed pre-attentively, so misplaced animation is guaranteed
distraction; scroll-fading is tolerable only when persistent (never re-fires),
responsive (tied to scroll position, cancellable), and sparse. Duration
consensus: **micro 100–300ms, transitions 200–500ms; >500ms reads sluggish,
<80ms reads broken; ease-out for entrances**. ~35% of users are motion-sensitive
per WebAIM 2026 figure quoted in the trade press. [K] The sites that make
diagrams feel like instruments rather than toys (Stripe docs-class, high-end
explainers) share: diagrams are **in the text column at prose width**, drawn in
the site's own stroke style, labelled in the site's data face, and their motion
*is the explanation* (a signal path lights up in the order the paragraph
describes it) — never looped idle motion.

**Recommendation for ULM** (monoline SVG library, motion-must-narrate rule)

- Stroke system: **1.5px stroke at rgba(255,255,255,0.65)** for structure, red
  (`--aux-hot`) reserved for the one path/node the adjacent paragraph is about;
  labels Space Mono, same size/tracking as the aux tier. The diagram must look
  like the site drew it, which the shared stroke+label spec guarantees.
- Reveal etiquette: animate **structure only, never text**; trigger at
  `IntersectionObserver` threshold ~0.4; draw-in via `stroke-dashoffset`
  **400–600ms total, ease-out, elements staggered ≤80ms apart**; fire **once**
  per page load, never re-fire on re-entry; nothing loops at idle. If the
  narration order matters, bind progress to scroll position within the figure's
  own height only (no jacking of page scroll).
- Text next to a diagram appears instantly, always. The measured harm is to
  reading, and reading is this site's whole argument.
- `prefers-reduced-motion: reduce` → diagram renders **complete and static**
  (final frame), with any sequential emphasis carried by the red accent alone.
  Same rule for the door-bars: reduced-motion users get finished doors.
- Budget: **one animated diagram per door story** is enough. The second one on a
  page halves the authority of both.

Sources: nngroup.com/articles/scroll-animations (snippet), nngroup.com/articles/
animation-duration (snippet); valhead.com how-fast-should-your-ui-animations-be;
equal.design 5-rules-for-motion-in-ui-transitions.

## 7. Forms / intake on dark

**What the field does.** [S] Field count dominates abandonment: completion drops
~4–6% per field beyond ~7–8; contact-form abandonment averages ~81% (Baymard,
2026 figure as quoted); optional phone fields measurably reduce abandonment;
what matters is fields *shown*, not steps. [K] Dark-form convention that works:
fields as `--bg-raised` surfaces with hairline borders (never pure-white
fields punched into a dark page), visible labels above the field (not
placeholder-as-label), focus ring in the accent colour.

**Recommendation for ULM — the "describe your problem" intake**

- **Four fields**: name, email, one `<select>` ("Which door brought you here?" —
  the five doors + "not sure", which routes triage *and* tells Edward which
  story sold), and one `<textarea>` ("What's the state of the project, and
  where is it stuck?"). No phone, no budget dropdown, no timeline picker, no
  file upload at first contact — ask for links/files in the reply email.
- Field styling: background `--bg-raised` #18181B, **1px border
  rgba(255,255,255,0.14)**, border-radius ≤6px, padding 12px 14px, input text at
  full reading colour (#DEDCD9), label above in the aux tier (Mono, `--aux-cool`),
  placeholder at rgba(255,255,255,0.35) and never carrying information. Focus:
  border-color → `--aux-hot`, plus `outline: 2px solid` same red offset 2px
  (WCAG 2.4.13-friendly, and [C] #E5484D-class red clears 3:1 non-text contrast
  on all three surfaces).
- Textarea: `min-height: 9rem`, and a sentence *above* it in prose setting
  expectations ("Two or three sentences is plenty — this starts a conversation,
  it isn't an application"). Stated informality is the abandonment-reducer for
  free-text fields; a big empty box with no norm reads as homework.
- One submit button. Button label in Edward's words, not "Submit" ("Send it
  over"— his call, per the copy rule: propose, don't write). Error messages
  inline under the field, red text at **#F2555A or lighter** ([C] #E5484D is
  4.70:1 on #141416 — passes 4.5:1 but with no margin at small sizes; #F2555A
  gives 5.45:1).

Sources: baymard.com checkout-flow-average-form-fields (snippet); formstory.io
form-abandonment-statistics; brixongroup.com B2B lead forms.

## 8. Typography on dark — specifics

**What the field does.** [S] Avoid #FFF-on-#000: halation makes light text glow
and smear; use off-whites (#E0E0E0–#EAEAEA cited) with secondary text around
60% white; light-on-dark reads **optically heavier-blurrier**, so favour
slightly more weight, slightly more tracking, slightly more line-height than the
same face needs on white. Material text emphasis: high 87% / medium 60% /
disabled 38% white. [C] Computed for this palette (all on #0E0E10 unless noted):

| token | value | ratio | use |
|---|---|---|---|
| `--text-bright` | #F2F0ED | 16.95:1 | display serif only |
| `--text-body` | #DEDCD9 | 14.09:1 | all prose |
| `--text-dim` | #B3B0AC | 8.93:1 | captions, `--aux-cool` candidates |
| `--text-faint` | #8A8884 | 5.45:1 | metadata floor — nothing dimmer carries words |
| `--aux-hot` | #E5484D | 4.93:1 | red data/labels — passes 4.5:1 at aux sizes |
| red on raised #18181B | #E5484D | 4.53:1 | still passes, barely — see note |

Notes with teeth:

- **Do not use #FFFFFF for anything.** 19.8:1 is glare, not quality. Ceiling is
  #F2F0ED, and only for Spectral display sizes.
- **Body text should be *dimmer* than many dark sites dare**: #DEDCD9 at 14:1 is
  already far above the 7:1 AAA bar; the common mistake is running body at
  #EDEDED+ (16:1) and wondering why long-form reading fatigues.
- **The red must be re-derived for dark.** A print/plaque red (#C41E1E class) is
  [C] 3.26:1 on this base — fails 4.5:1 for text. **#E5484D** is the darkest
  red that passes on all three surfaces at aux size; if the aux tier ever
  renders below ~14px, step to **#F2555A** (5.71:1 base). Deep brand red can
  survive as *fill* behind white text or as large solid shapes (3:1 non-text),
  never as small type.
- **Spectral on dark**: keep 500 for display (400 serif hairlines sparkle and
  break up on dark backgrounds); add `letter-spacing: 0.005–0.01em` at display
  sizes (dark reverses the tighten-when-large instinct — halation eats
  counters); `-webkit-font-smoothing: antialiased` is *correct* on dark (it
  thins the artificial boldening of light-on-dark rendering). Line-height for
  multi-line display 1.05–1.1, never below 1.0 on dark.
- **Space Mono 700 labels**: bold mono at 11–13px with wide tracking is safe on
  dark *because* of the weight — but tracking that was tuned on white can grow
  +0.01–0.02em on dark before letters visually detach. One value, in the TYPE
  SYSTEM block, per the repo rule.
- **Space Grotesk 400 prose**: 17–18px/1.6 at 65ch (re-measured). If 400 looks
  thin on the final display gamma, the fix is the 0.3px text-shadow trick never
  — it's moving body colour up one token, or licensing 450 via variable font.

Sources: designshack.net dark-mode-typography; uxplanet.org 8-tips-for-dark-
theme-design; medium.com/snapp-mobile design-for-the-dark-theme; ratios computed
in-session.

## 9. Footer for a small practice

**What the field does.** [S] Consensus: navigation echo, contact, legal,
copyright; the named failure is overcrowding; consistency with the page above;
footers with organised links measurably help (one case: +23.77% conversions
after reorganisation — single-case number, treat as directional). [K] The
one-person-practice pattern that reads best is the **colophon footer** (type
foundry lineage): a sentence about the practice, the contact email as a plain
`mailto` in large-ish type, a short nav echo, and a set-in-this-face colophon
line. It converts the footer from junk drawer to signature.

**Recommendation for ULM**

- Structure, top to bottom, on `--bg-base` with a `--hairline-strong` top rule:
  1. **The email address as the footer's headline** — Spectral, one size below
     h2, full reading colour. For a practice whose funnel is "describe your
     problem", the email *is* the product's front door; bury nothing.
  2. One row, Space Mono aux tier: nav echo (≤5 links: the doors' section, work,
     rates, contact) · location/timezone ("Miami, ET — remote worldwide" if
     that's Edward's wording) · © year Upper Level Music.
  3. Optional colophon line, `--text-faint`: "Set in Spectral, Space Grotesk &
     Space Mono." — the typographic self-awareness flag of a practice that chose
     its faces. (Propose to Edward; his call.)
- **No** newsletter box, no social icon row (a lone Instagram link can live as a
  text link in row 2), no sitemap columns, no "quick links". Column-grid footers
  signal an organisation; this site's argument is a person.
- Height: single screen-tenth, ~200–260px desktop, padding 64px top / 40px
  bottom. Mobile stacks to one column, same order.

Sources: uxpin.com footer-design-basics; curator.io footer-for-portfolio-website;
beetlebeetle.com modern-website-footer-design.

## 10. Failure modes of AI-generated dark sites — and the visible counter

**What the field says.** [S] The 2025–26 "AI slop" literature converges on the
same fingerprint: Inter/Poppins + centered everything; blue-purple gradient
hero; hero → three feature cards with Lucide/Hero icons → testimonials → pricing
table → footer, every time; averaged headlines ("Build the future of…"); the
buzzword set (unlock, empower, seamless, elevate, streamline); too-smooth
AI imagery. Sites with the fingerprint were reported converting drastically
worse. The five that matter for a dark craft site, each with its counter:

1. **The centered-stack layout** (everything centered, equal section heights,
   three-card grids). *Counter, visible in one screen:* asymmetric left-set
   headlines, a five-item **vertical** door stack instead of card triplets, prose
   columns that sit left with photography taking the counterweight.
2. **Gradient-and-glow as identity** (purple-blue wash, glassmorphism, glow
   borders — the degraded Linear copy). *Counter:* flat surfaces from a
   three-value elevation ramp, hairlines instead of glows, **one hue of accent
   and it's red**, photographs as the only luminance drama. No gradient anywhere
   is itself a signature in 2026.
3. **Averaged copy and icon-slop** (generic value-prop headlines; the same 24px
   Lucide icons as everyone). *Counter:* Edward's verbatim sentences (already
   repo law), headlines that could only belong to this practice, and the custom
   monoline library — drawn to one stroke spec (§6) so no icon on the site could
   be swapped in from a pack unnoticed.
4. **Fake evidence** (invented testimonials, stock "studio" imagery, urgency
   banners, inflated counters). *Counter:* plaque photographs of real objects,
   credits stated *below* their maximum defensible strength (§5), no
   testimonials at all unless real people wrote them, no counters, no "limited
   slots".
5. **Uniform luminance + decoration motion** (every section the same darkness;
   things fading in everywhere for no reason). *Counter:* the fixed density
   cadence of §3 (photo band every 3–4 sections), and the §6 motion contract —
   nothing moves unless the movement is the explanation, everything fires once,
   reduced-motion gets finished states. A site where the *only* motion is five
   doors and a handful of narrating diagrams is unmistakably art-directed.

The meta-counter: every one of these is a *specificity* failure. The audit
question for any new section is "could this block appear on another site
unchanged?" If yes, it isn't done.

Sources: originality.ai how-to-identify-ai-generated-websites; 925studios.co
ai-slop-web-design-guide; monet.design escape-ai-slop-landing-page-design;
blog.logrocket.com linear-design.

---

## Consolidated token sheet (proposed, [C]-verified)

```css
:root {
  /* surfaces */
  --bg-base:   #0E0E10;
  --bg-raised: #18181B;   /* 1.10:1 vs base */
  --bg-high:   #232326;   /* hover / single most-elevated element */
  --hairline:        rgba(255,255,255,0.08);  /* 1.22:1 on base */
  --hairline-strong: rgba(255,255,255,0.14);  /* 1.48:1 on base */

  /* text */
  --text-bright: #F2F0ED;  /* 16.95:1 — display only, never #fff */
  --text-body:   #DEDCD9;  /* 14.09:1 — all prose */
  --text-dim:    #B3B0AC;  /*  8.93:1 — captions */
  --text-faint:  #8A8884;  /*  5.45:1 — metadata floor */

  /* accent */
  --aux-hot:  #E5484D;     /* 4.93:1 base, 4.53:1 raised — text-safe at aux size */
  --aux-hot-small: #F2555A;/* if aux ever renders < ~14px */
  --aux-cool: #B3B0AC;
}
```

Motion contract: entrances 400–600ms ease-out, stagger ≤80ms, fire once,
IntersectionObserver ~0.4, text never animated, `prefers-reduced-motion` →
finished static states. Spacing: 8-base scale 8/16/24/40/64/96/144; sections
96px, chapter breaks 144px, mobile ×0.6.
