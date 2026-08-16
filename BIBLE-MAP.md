# The Studio Wiring Bible → the ULM Catalogue

What exists, what's missing, what publishes, in what order. Marks:
**PUBLISH** (public Learn entry after your review) · **EXCERPT** (one idea
publishes, the rest stays internal) · **INTERNAL** (studio ops, not site
content) · **MISSING** (referenced by the others but not in what you sent).

## Inventory

| Doc | State | Verdict |
|---|---|---|
| A — Microphone Locker V2 (103 mics) | MISSING (referenced by H) | rebuildable: `microphones.ts` in the app is its skeleton |
| B — Preamplification & Power | MISSING (referenced by C/D/F/H) | rebuildable: `preamps.ts` is its skeleton |
| C — Equalizers | complete, 1.7k words | EXCERPT |
| D — Compression & Dynamics | complete, 3.7k words | PUBLISH (its essay), tables EXCERPT |
| E — Power & Magnetic Reference | complete, 4.1k words | INTERNAL (one EXCERPT) |
| F — Rack Layout, Part 1 | complete, 2k words (Part 2 never made) | INTERNAL (one EXCERPT) |
| G — The Conversion Boundary | complete, 4.7k words | PUBLISH (its argument) |
| H — Signal Chain Engineering | complete, 4.3k words | PUBLISH — the flagship |
| dbx feedback paper | third-party (Brandon Graham / dbx) | reference only, never on site |

## The catalogue, in launch order

**ULM001 — "Impedance Is A Tone Control."** From H Part I. The thesis
sentence already exists: *"A preamp that loads a microphone's
frequency-dependent impedance differently at different frequencies is
applying an EQ curve before the signal reaches the gain stage."* Universal,
checkable, useful to a kid with one mic — and it carries the site's first
**interactive fragment**: your app's impedance engine (25 lines, already
written) driving the mic→preamp map from H 1.2, ending with the admission
line: the physics is teachable; the choosing is the session.

**ULM002 — "Where Noise Becomes Permanent."** From G §1–2. The false
dichotomy, the converter at war with itself, and the one finding every
bedroom producer can use tonight: *the USB/Thunderbolt cable is the single
most significant conducted-noise path in the studio* — the computer's
ground domain bridged straight into the interface's analog plane. Nobody in
the advice pool teaches this.

**ULM003 — "Seven Ways To Turn It Down."** From D's topology essay:
vari-mu breathes because a tube's transfer function is continuous; FET
grabs because resistance changes near-instantly; opto's multi-stage release
is the physics of a photocell, not a design choice; diode-bridge distortion
IS the Neve glue. Circuit-as-emotion, fully argued, already written.

**ULM004 — "The First Stage Wins."** From H Part II. The noise-budget
frame and the myth-buster: *insert processors' noise specs almost never
matter downstream of a preamp* — the first gain stage already set the
floor. Plus the inversion at the mix bus. Saves real people real money.

**ULM005 — "Wide Without Falling Apart."** From H Part III. M-S math in
plain terms, why widening trades away mono safety, the 1976/1973 ordering
lesson generalized to plugins — every conclusion transfers to a laptop.

**ULM006 — "The EQ You Choose Before You Boost."** From C's topology
interaction note: passive LC vs active parametric vs tilt as *different
philosophies of touching tone*, expanded with D-style depth.

**EXCERPT (Studio page) — "Designed From The Listening Chair Outward."**
F's cognitive-zone concept: quietest gear nearest the ears, *"session
momentum is sacred — technical access must never kill creative flow."*
That's a public philosophy statement wearing a floor plan. The rack-by-rack
detail stays internal.

**EXCERPT (colophon/changelog) — the corrections discipline.** D opens by
listing six errors it found in its own earlier inventory, by name. Publish
that habit: the site's changelog inherits it. Nothing signals trust like
correcting yourself in public, precisely.

## What stays internal

E's power budgets, breaker profiles and outlet maps; F's U-by-U rack
assignments. They're your ops manual — and partly a security matter (a
public map of every unit in your home). One idea each escapes (above); the
rest serves the studio, not the site.

## Process per entry (your "outdated" caveat honored)

Each entry: (1) I adapt the appendix text — de-table it into prose where
needed, add musician/engineer/technician lenses from the app's
`perspectives` data where they exist, margin notes carry the specs; (2)
flag anything that smells current-state-dependent for your check against
the 2026 room; (3) numbered veto list to you; (4) publish only on your
numbers. One entry at a time, ULM001 first.

## The missing volumes

A and B exist as references in the others and as skeletons in the app's
data files. If the full documents live in another tool's project, recover
them when convenient; if not, B regenerates from `preamps.ts` + your
review, A from `microphones.ts` the same way. No blocker either way.
