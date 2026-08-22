# Verification harness

The scripts this project's visual checks run on. Committed because every
session was otherwise reinventing them, and because CLAUDE.md requires visual
changes to be *proven* rather than asserted.

Setup (once per session):

    cd tools/verify && npm init -y && npm i playwright pngjs

Then, with the dev server running (`cd site && npm run dev -- --host 127.0.0.1 --port 8080`):

| script | what it does |
|---|---|
| `shoot.mjs <outdir>` | Screenshots every page at 1400 and 390, full length. Forces images eager, waits for decode, disables animation, opens `<details>` and accordions, and fails if any request returns 400+. |
| `diff.mjs <dirA> <dirB>` | Pixel-diffs two screenshot sets and reports differing pixel counts and percentages per page. A refactor meant to change nothing must show zero. |
| `weigh.mjs <width>` | Sums actual image bytes transferred per page at a viewport width. Used to prove the responsive-image work. |
| `scene-test.html` | Renders all animated teaching scenes inline, twice — normally and with reduced motion — so freeze states can be checked for honesty. |

Chromium is preinstalled at `/opt/pw-browsers/chromium`; the scripts point at
it directly. Do not run `playwright install`.
