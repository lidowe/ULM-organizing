# ULM visual library

Three file classes.

- `icons/` — one subject per file, static, 64×64 viewBox.
- `ui/` — interface glyphs (arrows, play, close, mail) on the same grid so navigation matches the diagrams.
- `motion/` — one concept per file, animated, 480×300 viewBox, several elements composited into one scene.

`ulm-visuals.css` carries the tokens and size classes. `manifest.json` lists every file.

## Scaling

Icons are drawn on a 64 grid with no fixed pixel size baked into the render path: the wrapper gets the size, the SVG fills it. Stroke weight is a token, not a constant, so it can be compensated per size — a 2px stroke that reads correctly at 72px goes spidery at 180px and mushy at 20px.

```html
<span class="ulm-icon ulm-icon--sm"><!-- inlined svg --></span>
```

| class | box | `--ulm-sw` |
|---|---|---|
| `--xs` | 20 | 2.9 |
| `--sm` | 28 | 2.5 |
| `--md` | 48 | 2.1 |
| `--lg` | 72 | 2 |
| `--xl` | 120 | 1.7 |
| `--display` | fluid | 1.5 |

Motion files are fluid to their container via `.ulm-anim` (`max-width:760px`). Their labels are typed in `--ulm-anim-fs`, which steps up on narrow screens so the annotations stay readable when the whole scene shrinks to phone width.

## Color

Every stroke is written `var(--ulm-line,#E8E6E1)`. Inlined, your theme drives it; as `<img src>`, the baked fallback applies.

```
--ulm-line   #E8E6E1   primary geometry
--ulm-dim    #7C838E   structure, grids, labels
--ulm-accent #E03B3B   the one thing the graphic is about
--ulm-sw     2         primary stroke weight
--ulm-swd    1.4       secondary detail weight
--ulm-anim-fs 12px     motion label size
```

Accent is a scalpel. One idea per graphic gets it.

## Motion

CSS `@keyframes` inside each file — no JS, no external requests, no build step. Class names and keyframes are namespaced per file (`er-`, `pc-`, `cf-`, `rm-`, `cp-`, `mp-`, `hs-`, `rv-`), so several inlined scenes on one page never collide. Every file carries a `prefers-reduced-motion` block that freezes it on a legible state.

Two files (`comb-filtering`, `polar-patterns`) use a SMIL `<animate>` path morph, because the shape itself changes rather than transforming. Those keep running under reduced-motion; drop or swap them if that matters for a given page.

**Concepts (14):** early reflections · phase cancellation · comb filtering · room modes · compressor attack and release · polar patterns · precedence (Haas) · reverb decay to −60 dB · gain structure · impedance bridging · shield current and pin 1 · magnetic field decay · noise at the summing node · clock jitter

## What the numbers in the motion files mean

Every quantity drawn is computed, not sketched.

- **gain structure** — a 120 dB window, +24 dBu ceiling to −96 dBu floor, against a fixed −90 dBu equipment noise floor. Nominal +4 dBu gives 94 dB of ratio; running 30 dB low and making it up at the end gives 64 dB, because the makeup gain lifts the accumulated floor with the signal.
- **impedance bridging** — loss = 20 log (Zin / (Zsource + Zin)), swept from 150 Ω to 10 kΩ, against a source impedance modelled with a ribbon-style resonant rise (≈300 Ω nominal, ≈1300 Ω at resonance). The dip is the loading of that resonance, not a filter.
- **shield current** — the pin 1 problem as Muncy described it: the interference arrives on the shield either way; what changes is whether its return path crosses the audio reference.
- **field decay** — near-field magnetic dipole coupling, ∝ 1/r³, so −18 dB per doubling of distance. Holds beyond roughly one transformer dimension; closer than that the decay is slower.
- **summing noise** — equal, uncorrelated sources add as power: the floor rises 10 log N, +3 dB per doubling of channel count. Correlated content does not behave this way.
- **clock jitter** — error = timing offset × slew rate. Zero at the peaks where the slope is zero, largest at the zero crossings. The offset shown is exaggerated for legibility; the sample instant moves in time, the recorded value moves in amplitude.

## Naming

`icon-<subject>.svg` — subject only, never a use case, so one file serves several sections.
`ui-<action>.svg` — the action.
`anim-<concept>.svg` — the concept being taught.
