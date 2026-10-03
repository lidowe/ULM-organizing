# Upper Level Music: type and colour theme

One look for the site, the newsletter, and anything else we send out.

## Typefaces (all free on Google Fonts)
- **Space Grotesk, 700, UPPERCASE**: titles, section headings, card titles.
- **IBM Plex Mono, 400**: every paragraph, list, caption and note. It carries IBM's typewriter heritage in cleaner, modern forms, so it reads about half typewriter and half a clean mono.
- **IBM Plex Mono, 600-700, UPPERCASE, wide letter-spacing**: buttons, nav, small labels.
- **Pixelify Sans, regular weight only**: the retro pixel tags (page labels, section numbers, small tags). Small, never bold, never large. A softer pixel face than a pure arcade font.
- Emphasis inside text is bold or red. No other typefaces.

On the site these are `--font-display`, `--font-text` and `--pixel` at the end of `src/styles/concept.css`; change them there to retheme everything.
For email, use the same faces with safe fallbacks: `'Space Grotesk', Helvetica, Arial, sans-serif`, `'IBM Plex Mono', 'Courier New', monospace`, and use the pixel face only for tiny tags (or skip it, since many email clients ignore web fonts).

## Colour
| Role | Hex |
|---|---|
| Page (aged parchment) | `#e5dac3` |
| Card / panel | `#ece1ca` / `#f0e7d1` |
| Ink (text) | `#141311` |
| Brand red (the name "Upper Level Music" is always red) | `#b5321f` (on dark: `#ee6a52`) |
| Navy accent | `#27406b` |
| Warm dark | `#3b3127` |
| Dark bands | `#26211a` |

## Rules
- "Upper Level Music" and "Upper Level" are always red.
- One primary button per page area: red, boxed, with an arrow and a hard shadow. Secondary buttons are parchment with the same outline.
- Plain language. No filler lines.
