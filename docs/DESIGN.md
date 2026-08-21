# The redesign — locked decisions (2026-08-21)

Edward's mandate this session: total creative freedom, Claude as decider —
new hierarchy, visuals, interaction, copy composition included. Style and
process laws in CLAUDE.md may bend where the work needs it; the integrity
laws (credits never upgraded, captions never use people, no invented
technical claims, non-predatory asks) hold absolutely. New sentences written
in Edward's register ship as drafts and are listed for veto after each
build round.

## Why the doors won (the split, evaluated)

Four schemes were weighed for the primary navigation before the doors were
kept — Edward asked whether this was decided or inherited, so the record:

- **By service** (mixing / mastering / production — the industry default):
  rejected. The primary client "arrives with a symptom, not a purchase
  order, and often cannot name the service they want" (BRIEF §1), and the
  category thesis is that the service split is the problem. Service
  vocabulary still exists for search — inside the door pages, where the
  rates live.
- **By client identity** (artist / engineer / studio owner / student):
  rejected on the overlap the strategy notes flag — one person is all four
  at once, and identity routing forces self-labeling at the front door.
  Identity is addressed inside pages instead (the "for artists / for
  producers &amp; engineers" pairing).
- **By sector** (music / podcast / institutional): rejected — it would
  promote explicitly not-chased audiences to nav level.
- **By involvement mode** (hand it over / together / teach me): a real axis,
  but the second question, not the first. It lives at intake and inside
  door pages.

Problem-state routing wins on the merits, and it is the only scheme where
door 5 — the client who cannot name the problem — can exist at all. The
door language for 1–4 is kept because it is Edward's through five revision
rounds (authorship, not recency); door 5's name is this build's decision.
The old "Not sure which" entry survives as the router line under the bars.

## The concept

The site is a signal path. The visitor arrives as the source; the five
doors are the patch points; every path resolves at the same place — the
work beginning. Problems route people, not service names. The Gap is the
argument, Proof is the evidence, the physics library is the teaching made
visible before a lesson is ever booked.

## Architecture

| route | page | built from |
|---|---|---|
| `/` | Session-sheet hero → five clickable doors → The Gap teaser → evidence strip → start strip | hod2rl home + block 12 first move + plaques/ribbon |
| `/complete` | Complete The Project | blocks 07, 08 · services "Hand It Over" · mix/master/edit/vocal/production rows + rates |
| `/fix` | Fix An Issue | services "Work It Together" · systems/acoustics rows + rates · bench and build photos |
| `/learn` | Learn The Craft | block 01 (apprenticeship) · block 02 (booth + Telefunken story) · teaching list + rate · motion scenes |
| `/evaluate` | Playback, Evaluate, Improve | consulting/diagnosis row + rate · references, gear-purchase checks, playback systems |
| `/purple` | Make It More Purple — the translation door | block 10 (purple guitar, verbatim) · block 09 (why we ask) · block 08's spaceship line |
| `/the-gap` | The full argument | block 12 verbatim, patchbay diagrams animated |
| `/story` | The person, the industry, why this exists, values | blocks 03–06 + photos |
| `/proof` | On Record | credit cards, plaques, ribbon, artists (with vetting caveat), studios, rooms, gear folds |
| `/start` | The intake, rebuilt | symptom-first form · door chips · three working modes · urgent fold · terms out loud (block 11) |

Unlisted, kept: `/hierarchy-options` (working surface), `/doors-draft`
(icon lab). 301s: about→story · work→proof · studio→proof ·
education→learn · services→complete · contact→start · process→complete ·
news→/ · credits→proof · reach→start · who-we-are→story.

Door 5 is named **Make It More Purple** — Edward's own client story, the
one line that tells that exact visitor "this is your door." Fallback if
vetoed: the standing draft "Explain It, Adapt, Solve It."

## Visual system

The hod2rl dark system, unchanged at its core: bg `#0b0d11`, ink `#eceae5`,
red `#d8342b` carrying rank (the aux law), Spectral 500 / Space Grotesk /
Space Mono 700 in their settled roles. The ulm-visuals library maps onto the
same tokens (`--ulm-line→--paper-soft`, `--ulm-dim→--muted`,
`--ulm-accent→--amber`) — its palette was already within a hair of the
site's, so icons, diagrams, doors and type read as one system.

- Subject icons: `--sm` in rows/labels, `--md` as section marks. Never
  decorative — an icon appears only where it names the subject beside it.
- Motion scenes: panel-framed, hairline border, mono caption, max-width
  760px, at most one per section, scroll-revealed. They narrate physics —
  "state what happens, offer the ear test, never forecast the verdict."
- Doors: the sequencer bars, now clickable, each door page opening with its
  own bar as the page mark.
- Photos: focal-point registry, webp pipeline, dim rooms on dark ground.

## Door page template

door bar (page mark) → title + one-line meaning → what this covers
(verbatim lists) → how it runs (process copy slice) → what it costs (rates,
unconfirmed markers kept in source) → one photo or motion scene → door rail
(the other four) → start strip.

## Held back on purpose

Workbench playable tools (sprinkle later, after the core stands), the
news/blog surface, the specialists page, shop. Rates ship with the existing
confirm-before-publish markers; the artists roster keeps its vetting
caveat visible in source.
