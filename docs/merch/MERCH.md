# Merch & identity spitball — working notes

First pass at an official logo, a color scheme, and a merch line, per Edward's
brief (Aug 2026): "we need an official logo, color scheme (tho some merch can
be any color), all product concept ideas visual and the logo / copy on them."
Constraint he set: a trick play on old wood / stone being futuristic and
audio-tech related, with more striking colors than brown and slate. No other
constraints.

**The visual boards live on the design canvas:**
<https://claude.ai/code/artifact/d3d0533a-cc4c-4efe-8b93-a1647552b5bb>
(two pages: Identity, Products; every board is editable and exports PNG/PDF).

Vector masters for all marks are in `logo/` beside this file, with the
`generate.py` that produced them (type outlined to paths from the site's own
woff2s in `site/public/fonts/`, so every SVG is print-ready with no font
dependency). Nothing here touches `site/` — adopting any of this on the live
site is a separate, later job.

The two old business cards Edward supplied are deliberately **not** committed
(they carry a personal phone number and email). They informed Concept C.

---

## The finding that shaped everything

Every identity this operation has ever run is **black + one saturated accent +
spaced caps**, and on both business cards, a waveform:

| era | accent | device |
|---|---|---|
| Ed Cota Music card | teal | vertical waveform, typewriter mono |
| First Upper Level card | violet/pink | gradient waveform, extended thin caps |
| The rack, today | red (#d8342b family) | red 1U blank, white extended caps |
| The site, today | red (#d8342b / #f05043) | typographic only, no mark |

The accent is the only thing that has ever changed. Edward has said the red
was "cause red was available" — so the accent is an open decision, and the
concepts treat it as the decision.

## Four concepts (full sheets on the canvas)

- **A. Strata — "The Level Line."** Standing stones as a meter bank; one
  laser-straight datum line marks the upper level, carved through the stones
  that rise past it. Ancient material, modern datum. Palettes: obsidian/basalt
  greys + ember (#ff7a1a), or + verdigris (#2fe6c5 — oxidized bronze, ancient
  metal that turned a striking color on its own). *Tradeoff: boldest and least
  audio-literal; the pun lands only with the name attached.*
  Files: `logo/a-strata-ember.svg`, `logo/a-strata-verdigris.svg`,
  `logo/a-mark-print.svg` (transparent, for garments).
- **B. Rings — "Old Growth, New Pressing."** Tree rings drawn as record
  grooves: every ring wobbles like grown wood except one, machined perfect, in
  color. Spindle hole = heartwood. Wood tones kept as background
  (#181410/#c9bfae), never the voice. *Tradeoff: fussiest artwork; needs a
  simplified cut below ~24 px.* Files: `logo/b-rings-ember.svg`,
  `logo/b-rings-teal.svg`, `logo/b-mark-paperless.svg` (warm colorway).
- **C. Wave — "Every Era, One Wave."** The business-card lineage reborn: one
  mirrored waveform sweeping teal → ultraviolet → magenta, extended caps with
  the underline off the 2010s card. *Tradeoff: most personal story, most
  conventional shape — waveform logos are everywhere in audio.* Files:
  `logo/c-wave-gradient.svg`, `logo/c-wave-flat.svg` (one-screen version).
- **D. Panel — "Already On the Rack."** The red 1U blank from the hero photo,
  digitized: panel, ear slots, spaced caps. Shown in red, black/red, and
  recolored in each other concept's accent — the panel survives any repaint,
  which is its argument. *Tradeoff: safest; says rack gear, says nothing about
  thirty years or wood-and-stone.* Files: `logo/d-panel-*.svg`.

Secondary marks shared by all concepts: the **ULM unit chip**
(`logo/ulm-chip-*.svg`, echoes the site's `.unit-no` blocks) and the **eyebrow
lockup** `ULM / EDWARD LIDOW / EST. 2012` (`logo/eyebrow-red.svg`; the boards
mostly run its short cut, `ULM / EST. 2012`).

## Round two — "upper level, literally" (canvas page: Round Two)

Edward's note on round one: nothing stood on an upper level from anything
else — the one thing the name promises was missing from the marks. Round two
puts elevation in every drawing, rendered in procedural texture and light
(`renders/generate_renders.py` rebuilds all four JPEGs) as well as flat cuts:

- **E. Trilithon — "The Lintel."** Two standing stones carrying one on the
  upper level; the ember light lives in the joint where the work meets the
  support. *Tradeoff: Stonehenge-adjacent; the single gate and the lit joint
  are what keep it ownable. Retires Strata if chosen.* Files:
  `renders/r-trilithon.jpg`, `logo/t-trilithon-flat.svg`.
- **F. Monolith — "The Molten Seam."** One stone split by a seam of light,
  the upper section held above it. Vertical by nature: sleeves, signage,
  masthead. *Tradeoff: most abstract; says nothing about audio until the name
  lands; 2001 comparisons inevitable.* Files: `renders/r-floating.jpg`,
  `logo/t-monolith-flat.svg`.
- **G. Into the Red — "Past Zero."** A cream VU meter with the needle pinned
  past 0 — the upper level of the meter, printed in red for decades, which
  quietly vindicates the rack panel's color. *Tradeoff: VU meters are audio's
  most-used badge; ownable only through the exact framing. Drops the
  wood/stone trick play.* Files: `renders/r-vu.jpg`, `logo/t-meter-flat.svg`.
- **H. Noise Floor — "Above the Noise Floor."** Hiss rising to a floor line,
  one clean signal above it. Comes with its own tagline (the masthead-slot
  candidate). *Tradeoff: more diagram than emblem; dies in a square avatar;
  best as the supporting graphic system behind whichever mark wins.* Files:
  `renders/r-noisefloor.jpg`, `logo/t-noisefloor-flat.svg`.

Plus six loose sketches on the "Six More Ways Up" board: the fader past
unity, strata rising as steps, the control room upstairs, the canopy, the
typographic lintel (UPPER riding a bar carried by LEVEL MUSIC), and the ULM
elevator button. Any of them can get the full treatment on request.

## Round three — brainstorm reset (canvas page: Round Three)

Edward's steer: too much reliance on the website — visually, pretend it does
not exist — and slow down, this is brainstorming, not deciding. Round three
drops the site's fonts, palette, and every prior visual; two boards of loose
sketches with hand-written captions, deliberately uncommitted:

- **Fresh Fields** (new ideas first, per his ask): birds on the wires as
  staff notation · the ridge line with the walked route · the eclipse ring ·
  a lighthouse keeper's badge · the rubber stamp · a rising constellation ·
  the speaker totem · the conductor's upbeat brushstroke.
- **ULM, Bent Nine Ways** (the letters as raw material): the overline ·
  road-case stencil with THIS SIDE UP · one uncut cable spelling ulm,
  plug to plug · a tape ribbon spelling as it runs · the stacked chop ·
  the three-ink overprint · the neon tube sign · the varsity arch · the
  punched block.

Nothing in round three is a proposal; it exists to be pointed at.

## Vetoes (Edward, from the round-three review)

- The **VU meter** (Into the Red) — no.
- The **wavy-line marks** — no. This kills the Wave concept; the Noise Floor
  signal line is assumed covered by the same veto (restorable if he only
  meant one of them).
- The **vertical stone** (Monolith) — no.
- The **trilithon** — the stone "pi" does nothing to connect it to audio.
  The lesson taken from that veto: **a mark should connect to audio on its
  own**, before the name arrives.

## Round four — ULM as things (canvas page: Round Four)

"Modulate ULM" clarified: invent a graphic out of the letters — use them as
objects, not as type. Nine sketches, audio-first: U as the shockmount
cradle · U as the tube filament · U as a vessel filled to its top line ·
L as the axes every recording is drawn into · L as the mic stand · M as
acoustic-foam wedge profile · M as headphones face-on · m as the tape path
over two guides · and the three-pictogram lockup (tube, stand, foam) that
says ULM without using a letter.

**Edward's mug idea, verbatim from chat (his copy — parked, not a pivot):**
outside face one, "Upper Level Music"; outside face two, "We'll Provide The
Uppers"; inside the cup, measuring-cup lines reading bottom to top: "Too
Low" → "Pour It Up More" → top line "Glad You're On Our Level"; ULM in some
form on the remaining outside face. Boarded on the Round Four page.

**Edward's tee, verbatim from chat (his copy — worked off round three's
stencil tile):** front says "This Side Up" and carries **no logo**, on
purpose; the back has a ULM (not the stencil one — whichever mark wins) and
says "This Side More Up", with the logo. Boarded beside the mug. Same play
works on anything with two faces: tote, mailer, road case.

## Copy bank

House rule kept: **nothing "proposed" ships until Edward says the words.**

**Verbatim from the site (already his, already public):**
"The Industry is undergoing *major key changes.*" · "Some of us refuse to put
our emotions on an assembly line." · "Music is not meant to be made alone,
staring at a screen." · "The gear is only evidence; this is the work." · "It
starts on beat one." · "Hand It Over. / Work It Together. / Learn to Run It."
· "A room that lies to you costs more than any preamp will fix." · "Tell Me
What You're Working On." · "Reach for the upper level, and we will give you a
boost."

**Retracted:** "A production line never misses a beat. That's what's wrong
with it." was in this list because it appears in the site copy
(`services.ts:307` and `process.ts:504`), but Edward disowns it — he never
wrote it and thinks the logic is backwards. Pulled from the boards and this
bank. It is still live on the site in those two places; whether it comes out
of the site copy is his call, flagged and awaiting his word.

**Proposed (mine — pick, veto, or rewrite):**

- Tagline candidates (the masthead slot is still deliberately empty; whatever
  wins should fill both masthead and merch or it reads as two brands):
  **Above the Noise Floor** · **Find Your Level** · **Old Growth. New
  Pressing.**
- Product lines: Take It from the Top (tee/mug) · HEADROOM (beanie, one word)
  · Gain Before Fader (mug) · Input Stage (mug rim) · Over. Under. Always.
  (cable tie) · Protect the monitors you were born with. (earplug tin) ·
  −20 dB. Your ears will thank you at load-out. (inside tin lid) · Contents:
  Tone. (pick tin) · The Sweet Spot (desk mat) · Trust Your Ears (sticker) ·
  Everything Is a Phase (sticker) · It's the Room. (sticker)

## Product line (research-backed)

What the merch market actually rewards, per 2025–26 trade sources: tees remain
the core seller (M/L are 60–70% of shirt sales); hoodies are the
highest-revenue item (read as outerwear, cross the $60 line); hats and
drinkware are staples; stickers/buttons/patches are the under-$5 impulse tier;
desk mats ride the fastest-growing print-on-demand category (home decor,
~24.5% CAGR); functional one-size items (cable ties, koozies, organizers) sell
because they get used. Sources: Hypebot merch-margin guide 2026, Bandzoogle,
Printway/AMZScout POD reports, Promo Hype band-merch roundup.

| product | art + copy | print notes |
|---|---|---|
| Tee — front | "Major key changes" headline, verbatim, italic red line | 2-screen: paper + red |
| Tee — back | Strata mark big between shoulders, chip on front chest | 3-screen: grey, ember, paper |
| Hoodie | rack panel as chest strip | 2-screen or embroidered strip |
| Beanie | HEADROOM on the cuff | embroidery; the joke is the point |
| Mugs | 01/02/03 three-mode set + Gain Before Fader | 11 oz ceramic; set or singles |
| Pick tin | Rings lid, "Contents: Tone." | offset lid print |
| Earplug tin | −20 dB lid, line inside the lid; pair of musician plugs | foam insert optional |
| Cable ties | silicone snap ×2 + debossed leather; "Over. Under. Always." | no velcro, as specified |
| Desk mat | faded fader banks, one channel in the red, The Sweet Spot | 900×400 stitched edge |
| Slipmat | Rings full-bleed — growth rings under actual vinyl | 12″ felt, dye-sub |
| Stickers | panel, chip, Trust Your Ears, Everything Is a Phase, It's the Room. | kiss-cut sheet or singles |
| Enamel pin | Strata mark at 32 mm (its smallest legibility test) | hard enamel |
| Poster | "Music is not meant to be made alone, staring at a screen." verbatim, panel footer | A2/A3, also runs reversed on paper stock |

Deliberately excluded, matching standing rules: **no artist names anywhere**
(credits rule; the Work roster is unvetted), **no people in imagery** (photo
rule), no generative alteration of photographs. All marks above are original
drawings.

## Open decisions (Edward's)

1. Which concept — or which pieces of which concepts. The chip and eyebrow
   work under any of them.
2. The accent: red (incumbent), ember, verdigris, or the ultraviolet sweep.
   "Some merch can be any color" is accommodated — garments can vary; the
   mark's accent should not.
3. Whether ULM or Upper Level Music leads on merch. The /attempts microsite
   went ULM-first; the main site is full-name-first. Boards show both.
4. Whether a tagline gets picked now (it would fill the empty masthead slot),
   or the slot stays deliberately empty.

## Round five — the escalation (canvas page: Round Five)

Edward's prompt: a play on an elevator and upper level, or things that
escalate in scope or quality where the highest escalation is the Upper
Level. Eight sketches: the lobby floor dial (needle past every floor) · the
button column with UL lit · elevator doors opening on light · B / L / UL
(the floor above the Lobby) · the size tag · good / better / Upper Level ·
the gear escalation (earbud → speaker → monitor → desk) · the media
escalation (cassette → 7" reel → 2" reel). The dial and the button panel
are also rendered with real materials (`renders/r5-dial.jpg`,
`renders/r5-buttons.jpg`, rebuilt by `renders/generate_round5.py`).

**The sleeper found inside his prompt: the size run.** On this brand's
shirts the size above L is not XL — it is **UL**. S, M, L, UL on the woven
tag. Works as the actual sizing on real garments, not just a graphic.

Also fixed on Round Four: the tape-path sketch redrawn (the previous
version had an unfortunate anatomy problem Edward spotted immediately).
