# ULM visual library — audit + five-door mapping

Audited 2026-08-21 against
`scratchpad/ulmvisuals/ulm-visuals/` (69 icons, 9 ui, 14 motion, manifest.json,
ulm-visuals.css, README.md, preview.html). Every claim below is from reading
the SVG source or from a command run against the tree; where a check was not
run, it says so.

---

## 1. Manifest and README vs disk — PASS

Programmatic diff (python set comparison of `manifest.json` arrays against
`os.listdir`): **icons 69/69, ui 9/9, motion 14/14 — no file on disk is
unlisted, no listed file is missing.**

Two documentation errors inside otherwise-correct docs:

- **manifest `spec.motion_viewbox: "0 0 480 300"` is violated by one file** —
  `anim-early-reflections.svg` is `viewBox="0 0 480 320"` (checked all 14; the
  other 13 are 480×300). Either normalise the file or note the exception.
  Layout consequence: in a shared `.ulm-anim` slot it renders ~6.7% shorter
  per unit width than its siblings.
- **README says two files use SMIL ("comb-filtering, polar-patterns"). There
  are three.** `anim-impedance-bridging.svg` also carries an
  `<animate attributeName="d">` path morph (grep across motion/: `<animate`
  present in comb-filtering, polar-patterns, impedance-bridging). See §3.

---

## 2. Source spot-check

Spot-checked in full: all 14 motion files (style blocks + element structure;
the two >60KB files read head/tail/animate rather than every path vertex), 18
icons (`reflection-point, acoustic-panel, clipping-wave, connector-xlr,
eq-curve, ground-loop, jitter, mic-condenser, monitor-pair, patchbay,
phase-invert, polar-cardioid, star-quad, summing-bus, meter-vu, gain-staging,
compressor-curve, bass-trap-corner`), 2 ui files; plus regex sweeps over **all
92 files** for tokens, viewBox, role/title/aria, keyframe names,
reduced-motion blocks, hardcoded colors, and `<text>`.

### Tokens — PASS
- Every color in every file is `var(--ulm-line|--ulm-dim|--ulm-accent, #hex)`.
  Sweep for hex colors outside a `var()` fallback: **zero hits** in all 92
  files. Sweep for `var(--ulm-*)` *without* a fallback: **zero hits**.
- Icons/ui: identical skeleton per file — root `stroke="var(--ulm-line,...)"`,
  inner `<style>.ulmi{stroke-width:var(--ulm-sw,2)}.ulmi .d{stroke-width:var(--ulm-swd,1.4)}</style>`.
  The style rules are document-global when inlined but byte-identical across
  files, so multiple inlined icons cannot conflict.
- One deviation: **`icon-reflection-point.svg` has a hardcoded
  `stroke-width="3"`** on the small accent tick (`<path d="M6 26h4" ... stroke-width="3"/>`).
  It will not track the optical-sizing table (`--sm` boosts everything else to
  2.5/1.75 while this stays 3). Only such case in the set.
- **Motion files do not use `--ulm-sw` at all** — strokes are constants
  (1.2–6). Defensible (fixed 480-unit compositions, labels compensate via
  `--ulm-anim-fs` instead), but manifest's `spec.stroke: "var(--ulm-sw,2)"`
  reads as if it covers motion too. Document the split or it will be
  "corrected" by a future session.

### viewBox — PASS with one exception
Icons and ui: 78/78 are `0 0 64 64`. Motion: 13/14 are `0 0 480 300`;
`anim-early-reflections` is 480×320 (see §1).

### Accessibility — PASS
All 92 files carry `role="img"`, a `<title>`, **and** a substantive
`aria-label` (e.g. clock-jitter: "A displaced sampling instant producing an
amplitude error proportional to the signal's slew rate"). Labels describe the
concept, not the picture. No names of people or artists anywhere in titles or
labels (credits-law clean).

### Keyframe namespacing — PASS
Every `@keyframes` name is file-prefixed; full prefix set (grep of all
`@keyframes`): `er- pc- cf- rm- cp- mp- hs- rv- gs- iz- sc- fd- sn- jt-`.
No prefix is shared by two files; any combination can be inlined on one page.
(README's list names 8 of the 14 with "etc." — accurate but incomplete.)

### prefers-reduced-motion — present in 14/14, but freeze quality splits three ways

**Freezes correctly to a legible, self-consistent state (8):**
- `early-reflections` — explicit static rules (all rays drawn, ticks up).
- `phase-cancellation` — explicit `scaleY(0.5)` mid-cancel state, null label hidden.
- `field-decay` — explicit: 3″ state, label 0 dB, bar full = 0 dB. Consistent.
- `room-modes` — explicit: mode 1 + its label shown, modes 2/3 hidden.
- `precedence-haas` — base = t0 state (image centred, dial at 0). Coherent.
- `gain-structure` — animation is only a stage-highlight sweep; all data static.
- `shield-current` — dash-flow stops; complete drawing remains.
- `clock-jitter` — displaced red samples freeze at base positions, which sit
  exactly on the true sample dots: the zero-jitter state. Legible.

**Freezes to a WRONG or self-contradicting state (3) — fix before shipping:**
- `anim-summing-noise` — `.sn-bar` is scaled by keyframes only
  (0.015→0.836); `animation:none` reverts it to base `scaleY(1)` = **full
  +18 dB bar**, while the frozen label reads "1 CHANNELS · FLOOR +0.0 dB".
  Bar and label contradict. Fix: add `.sn-bar{transform:scaleY(0.015)!important}`
  to the media block.
- `anim-compressor-envelope` — `.cp-gr` (GAIN REDUCTION bar, a 200-wide rect
  scaled from `scaleX(0)`) freezes at base `scaleX(1)` = **maximum gain
  reduction**, a state the program material never produces. Fix: pin a real
  value, e.g. `.cp-gr{transform:scaleX(0.377)!important}` (the attack peak).
- `anim-reverb-decay` — `.rv-env` (the accent decay-slope line, the point of
  the graphic) has base `stroke-dashoffset:520` → frozen **invisible**;
  `.rv-rt` (RT60 bracket) base `opacity:0` → frozen invisible. The frozen
  scene keeps the impulse raster but loses its accent statement entirely.
  Fix: `.rv-env{stroke-dashoffset:0!important}.rv-rt{opacity:1!important}`.

**Keeps moving under reduced-motion (3)** — the SMIL files, see §3.

### Motion byte sizes (inline budget 20KB)

| file | bytes | verdict |
|---|---:|---|
| anim-precedence-haas.svg | 2,262 | ok |
| anim-field-decay.svg | 3,308 | ok |
| anim-summing-noise.svg | 3,628 | ok |
| anim-shield-current.svg | 5,087 | ok |
| anim-gain-structure.svg | 5,740 | ok |
| anim-early-reflections.svg | 6,018 | ok |
| anim-phase-cancellation.svg | 6,923 | ok |
| anim-room-modes.svg | 8,359 | ok |
| anim-reverb-decay.svg | 12,252 | ok |
| anim-clock-jitter.svg | 14,135 | ok |
| anim-compressor-envelope.svg | 14,550 | ok |
| anim-polar-patterns.svg | 17,209 | ok, but 86% of budget |
| **anim-impedance-bridging.svg** | **62,501** | **3.1× over — flag** |
| **anim-comb-filtering.svg** | **97,330** | **4.9× over — flag** |

Total for all 14: 259,302 bytes; the two flagged files are 62% of it. Cause:
the SMIL `d`-morphs store a full ~160-vertex polyline **per keyframe**
(12 keyframes). Diet options: coarser sampling (2.5-unit steps → 8 would cut
~⅔), fewer morph keyframes, or replacing the morph with a CSS crossfade of a
few static paths (also fixes §3). Do not ship either file inlined as-is.

---

## 3. The SMIL files under reduced-motion — CONFIRMED, plus one the README missed

Confirmed by source: CSS `animation:none` cannot stop SMIL, so in these files
the CSS half freezes while the SMIL path morph keeps running — worse than
"keeps animating", the scene becomes **internally desynchronised**:

- `anim-polar-patterns` — reduced-motion pins the CSS label to "CARDIOID"
  (`.mp-l1{opacity:1}`) while the SMIL morph keeps cycling
  omni→cardioid→super→fig-8. **The frozen label is wrong three quarters of the
  time.**
- `anim-comb-filtering` — the CSS delay marker (`cf-mark`) freezes at 0.25 ms
  while the comb curve keeps morphing through the delay sweep.
- `anim-impedance-bridging` — undocumented third case: the CSS Zin marker
  (`iz-mark`) freezes at 150 Ω while the SMIL response curve keeps sweeping to
  10 kΩ. README must be corrected to name all three.

**What a reduced-motion-safe fallback needs** (no JS, keeps single-file rule):
1. A static path with the chosen frozen `d` baked in (cardioid for mp; one
   mid-sweep comb for cf; the 10 kΩ curve for iz), present in the file,
   hidden by default (`display:none`).
2. In the `prefers-reduced-motion` block: hide the SMIL-animated path
   (`display:none` — removing it from rendering also stops its cost) and show
   the static one.
3. The frozen `d` must agree with whatever CSS state the block already pins —
   label, marker position, and shape must tell the same story (cardioid label
   ⇒ cardioid curve ⇒ marker where a cardioid sits).
4. Better: rebuild all three the way room-modes/field-decay already work — N
   pre-drawn static paths crossfaded by namespaced CSS opacity keyframes. That
   removes SMIL entirely, freezes correctly by the existing mechanism, and
   collapses the two oversize files (§2) since each path is stored once, not
   once per keyframe.

---

## 4. Text and fonts inside the SVGs — PASS for icons, one integration warning

- **No `<text>` element exists in any icon or ui file** (sweep: 0 hits in
  78 files). Nothing in those sets depends on any font.
- All 14 motion files use `<text>`, but safely:
  `font-family:ui-monospace,SFMono-Regular,Menlo,monospace` (system stack, no
  webfont) and `font-size:var(--ulm-anim-fs,12px)` (fallback baked in). They
  render correctly inlined on a page with no library CSS.
- The real no-CSS risk is **color, not type**: every fallback is the
  dark-ground palette (`#E8E6E1` near-white lines). Inlined into a page that
  defines no `--ulm-*` tokens on a light background, the geometry is
  near-invisible. Any light-theme use must define the three color tokens;
  same applies to `<img src>` usage, where tokens can never apply.
- Cosmetic: motion labels are ui-monospace, the site's data face is Space Mono
  700. Two different monospaces will sit side by side (SVG kicker vs aux-tier
  kicker). Consider `font-family:'Space Mono',ui-monospace,...` inside the
  scenes so diagram labels join the type system — a mechanical swap, but
  re-check label fit afterwards (Space Mono runs wider).

---

## 5. Five-door mapping

Reuse is by design (README: "subject only, never a use case, so one file
serves several sections"). Each icon below has one **primary** home; (reuse)
marks a secondary appearance. Sizes: `--sm` 28px nav/inline links, `--md`
48px list rows, `--lg` 72px door/section marks, `--xl`/`--display` reserved
for at most one hero mark per page.

### Door 1 — Complete The Project
- **Door mark:** `icon-daw-timeline` (`--sm` in nav, `--lg` at section head).
- **Rows (`--md`):** `icon-console-desk`, `icon-mic-condenser`,
  `icon-stand-boom`, `icon-pop-filter`, `icon-di-reamp` (tracking) ·
  `icon-drum-kick`, `icon-guitar-amp`, `icon-piano-keys` (sources) ·
  `icon-eq-curve`, `icon-compressor-curve`, `icon-pan-pot`, `icon-gain-knob`,
  `icon-delay-taps`, `icon-reverb-decay`, `icon-insert-loop`,
  `icon-summing-bus` (mix) · `icon-meter-bars`, `icon-tape-reel`,
  `icon-file-bounce` (master/finish; pair `ui-download` `--sm` with
  deliverables copy).
- **Motion:** `anim-compressor-envelope` — the one scene that shows mix craft
  operating on program material. Fix its freeze defect (§2) first.

### Door 2 — Fix An Issue
- **Door mark:** `icon-phase-break` ("Phase problem") — the diagnosis glyph.
- **Rows (`--md`), by symptom cluster:**
  - *Hum/grounding:* `icon-ground-loop`, `icon-ground-earth`,
    `icon-pin-1-shell`, `icon-shield-drain`, `icon-star-quad`,
    `icon-balanced-power`, `icon-breaker-load`, `icon-power-sequencer`,
    `icon-external-psu`, `icon-em-field`, `icon-transformer`,
    `icon-optical-link`, `icon-saturation-curve`.
  - *Rooms that lie:* `icon-room-reflection`, `icon-reflection-point`,
    `icon-bass-trap-corner`, `icon-acoustic-panel`, `icon-diffuser`.
  - *Mixes that won't sit / level:* `icon-phase-invert`, `icon-clipping-wave`,
    `icon-impedance-bridge`.
  - *Systems:* `icon-patchbay`, `icon-tie-line`, `icon-normalling`,
    `icon-db25`, `icon-cable-coil`, `icon-connector-xlr`, `icon-jitter`,
    `icon-word-clock`.
- **Motion:** `anim-room-modes` (rooms that lie — its own closing line, "MOVE
  THE MIC, NOT THE EQ", is a diagnosis, which settles the Fix-vs-Learn
  question), `anim-shield-current` (hum: where pin 1 lands),
  `anim-field-decay` (hum: distance beats shielding),
  `anim-early-reflections` (argues the reflection-point treatment). Four
  scenes is a lot for one page — if Fix is split into symptom sub-pages, one
  scene each; if it stays one page, hold `anim-field-decay` in reserve and
  lead each cluster with a single scene.

### Door 3 — Learn The Craft
- **Door mark:** `icon-waveform-sine` — the fundamental.
- **Rows (`--md`):** `icon-waveform-transient`, `icon-polar-cardioid`,
  `icon-polar-figure8`, `icon-polar-omni`, `icon-stereo-pair`,
  `icon-mic-dynamic`, `icon-mic-ribbon`, `icon-converter-ad`,
  `icon-gain-staging`; (reuse) `icon-impedance-bridge`,
  `icon-reflection-point`.
- **Motion:** `anim-precedence-haas` (pure psychoacoustics — teaches, sells
  nothing: this is its only natural home), `anim-gain-structure`,
  `anim-polar-patterns` (after SMIL fix, §3), `anim-impedance-bridging`
  (**hold until dieted + SMIL-fixed** — 62KB).

### Door 4 — Playback, Evaluate, Improve
- **Door mark:** `icon-monitor-pair` ("Listening position") — exact fit.
- **Rows (`--md`):** `icon-speaker-monitor`, `icon-headphones`,
  `icon-meter-vu`, `icon-noise-floor` (headroom check),
  `icon-audio-interface`, `icon-rack-unit` (gear-purchase checks),
  `icon-check-circle` (the verdict; also Start).
- **Motion:** `anim-reverb-decay` (RT60 is literally a room-evaluation
  measurement — fix its freeze first, §2), `anim-clock-jitter` and
  `anim-summing-noise` (both are canonical gear-purchase checks: the external
  clock and the summing box; both quantify whether the purchase can matter).
  Alternate home for these two is Learn — keep them here only if the copy
  frames them as purchase checks.

### Door 5 — Translation (borrowed words → named mechanism)
- **Door mark:** `icon-note-eighth` — the client's vocabulary is musical, and
  translation is the walk from that word to the physics. The library has no
  purpose-built translation glyph; this is the honest nearest fit (small gap
  worth noting to Edward — a two-arrows/two-vocabularies mark would earn its
  place).
- **Rows (`--md`) — the symptom lexicon, all reuse:** "crunchy" →
  `icon-clipping-wave` · "boxy" → `icon-room-reflection` · "buzzy" →
  `icon-ground-loop` · "hollow/thin" → `icon-phase-break` · "hissy" →
  `icon-noise-floor` · "washy" → `icon-reverb-decay` · "echoey" →
  `icon-delay-taps`. The row *is* the translation: borrowed word left,
  mechanism icon + proper name right.
- **Motion:** `anim-phase-cancellation` (7KB, freeze-safe, and narrates the
  classic un-nameable symptom: same source, two arrivals, the sound thins and
  nobody knows why). `anim-comb-filtering` is the other natural tenant —
  **hold** until §2/§3 are fixed; at 97KB with a lying reduced-motion state it
  cannot ship.

### Pages
- **Proof:** rows (`--md`) reusing gear/room subjects next to the photos:
  `icon-console-desk`, `icon-tape-reel`, `icon-rack-unit`, `icon-patchbay`,
  `icon-mic-condenser`/`-dynamic`/`-ribbon`, `icon-monitor-pair`. **No motion
  on Proof** — proof is evidence (photos, plaques, credits); a narrated
  physics scene there is decoration, which the motion law forbids. Captions
  stay prose per CLAUDE.md; icon `<title>`s are already name-free.
- **Story:** at most `--sm` inline marks: `icon-tape-reel` (history),
  `icon-note-eighth` (musician), `icon-console-desk` (industry). No motion.
- **Start (intake):** `ui-mail`, `ui-arrow-right` (submit affordances),
  `ui-chevron-down` (section folds), `icon-check-circle` (confirmation), all
  `--sm`. No motion — nothing should compete with the form.
- **Global chrome:** `ui-menu`/`ui-close` (nav), `ui-external-link` (outbound),
  `ui-play`/`ui-pause` — recommend wiring these as a visible pause control
  beside every inlined scene (the library has no built-in pause, and looping
  scenes beside prose need one; it also partially mitigates §3 for SMIL by
  letting a reader stop the CSS half… but the real SMIL fix is still §3).

**Motion disposition summary (all 14):** Complete: compressor-envelope ·
Fix: room-modes, shield-current, early-reflections, field-decay (reserve) ·
Learn: precedence-haas, gain-structure, polar-patterns*, impedance-bridging*
(hold) · Evaluate: reverb-decay*, clock-jitter, summing-noise* ·
Translate: phase-cancellation, comb-filtering* (hold).
`*` = ship only after its §2/§3 defect is fixed. Nothing is homeless; two are
held (impedance-bridging, comb-filtering), both for the same size+SMIL cause.

---

## 6. Conflicts with the three laws

**Red accent = the one point only**
- Icons: broadly clean — 27 icons use no accent (fine: subjects with no single
  point), the rest put it on one idea. Borderline: `icon-bass-trap-corner`
  (3 accent strokes + accent dot ≈ 40% of the drawing — still one idea, but
  the densest accent in the set) and `icon-jitter` (accent on an entire second
  waveform). Watch them in situ at `--sm`.
- Motion: **every scene spends accent twice — on its red kicker text AND on
  its subject.** Cleanest self-contradiction: `anim-room-modes` legend says
  "RED = PRESSURE NULL" while its own title "ROOM MODES" is also red. If the
  page section already carries an `--aux-hot` kicker naming the scene, the
  in-SVG red kicker is a *third* red statement and a duplicate heading —
  recommend demoting in-file kickers to `--ulm-dim` (or removing them) when
  scenes are embedded under site headings. Heaviest accent load:
  `anim-gain-structure` (22 uses — defensible as "the signal is the one
  idea", but it is the ceiling, not the norm).
- Token alignment: `--ulm-accent #E03B3B` must equal the site's `--aux-hot`,
  or two near-identical reds will coexist. Not verified against
  `site/src/styles/site.css` — check at integration.

**Motion narrates**
- Pass: all 14 scenes narrate a computed mechanism; none is decorative. The
  discipline holds down to the numbers (README documents the math; spot-check
  of gain-structure/summing-noise/field-decay values is consistent with it).
  The mapping above keeps it that way by giving Proof, Story and Start no
  motion at all.

**Uniform detail level across siblings**
- Icons: strong pass — one grid, two stroke weights, identical skeleton.
  Exceptions to fix: `icon-reflection-point`'s hardcoded width-3 stroke (only
  weight in the set that ignores the sizing table); `icon-summing-bus` is the
  busiest drawing (five channel modules) and will clot below `--md` — keep it
  out of `--sm`/`--xs` slots.
- Motion: label density is uniform; the one *presentation* non-uniformity is
  `anim-early-reflections`' 480×320 box (§1) making it render shorter than
  every sibling at equal width.

**Copy nits (mechanical, fix freely):** "1 CHANNELS" in
`anim-summing-noise`'s first label; stray `stroke-dasharray="0"` in
`icon-jitter`; duplicated `<path class="rv-env">` drawn twice in
`anim-reverb-decay` (once inside the clip group, once outside — harmless,
8 bytes shy of intentional, but likely a leftover).

---

## Verdict

**Library: PASS with conditions.** Inventory, tokens, accessibility,
namespacing and icon discipline are genuinely excellent — better than most
shipped icon sets. Blocking issues before any page inlines motion:
the three wrong-state freezes (summing-noise, compressor-envelope,
reverb-decay), the three SMIL desyncs (polar-patterns, comb-filtering,
impedance-bridging — README undercounts them as two), and the two oversize
files (97KB comb-filtering, 62KB impedance-bridging). One spec break
(early-reflections 480×320) and one hardcoded stroke (reflection-point) are
minor. The red in-SVG kickers double-spend the accent and should be settled
against the site's aux-tier convention at integration time.
