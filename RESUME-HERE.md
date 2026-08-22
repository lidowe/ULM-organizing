# RESUME HERE — machine-facing state file

READ THIS FIRST, EVERY SESSION. UPDATE IT LAST, BEFORE STOPPING.
Terse by design. Human translation: `human/RESUME-EXPLAINED.md` — DO NOT READ IT.

```
STAMP    2026-08-21 19:48 UTC · claude-opus-5 · branch claude/site-iterations-docs-review-dbr45q @ 05f1330
OWNER    Edward Lidow (lidowe). Not a coder. Creative director. Full authority granted to Claude (CLAUDE.md "The mandate").
LIVE     main @ c6bc9ac -> upperlevelmusic.com. Runs the OLD pre-doors site. NOT the work below.
PREVIEW  https://claude-site-iterations-docs-review-dbr45q-ulm-organizing.upperlevelmusic.workers.dev
```

## STATE

```
DONE     Five-doors rebuild, complete + pushed, 54 commits ahead of main. Never published.
DOING    Repo-wide audit + cleanup. PLAN APPROVED, PHASE 0 IN PROGRESS (this file is step 1).
NEXT     1. safety tags on all branch tips  2. full read of every file  3. docs/INDEX.md + human/ files
         4. consolidation proposal  5. execute approved items  6. guardrails in CLAUDE.md
BLOCKED  Nothing. Two unanswered questions under DECISIONS.
```

## NEVER DO

```
- Publish to main / merge to main. main = live site, no staging, live in ~2 min. Only on Edward's word "publish".
- Touch PR #8 (claude/upperlevelmusic-review-hod2rl -> main, open since Aug 16). Edward: "should remain set aside".
- Rewrite pushed history (force-push, rebase, amend, squash). Lovable is connected to this repo and syncs.
- Read human/** . Blocked in .claude/settings.json. Written for Edward, costs tokens, tells you nothing new.
- Use the question/options UI. Plain-text questions only (it has eaten his input before).
- Interpret an ambiguous instruction. Ask. Two wrong guesses cost a round on 2026-08-21 (see DECISIONS #3).
```

## DECISIONS OPEN (ask Edward, do not guess)

```
1. Is the five-doors architecture still the intended direction? (Audit hierarchy depends on it. Assumed YES.)
2. Any unpushed work in another session/Lovable/Copilot right now? Should be pushed before cleanup.
3. /complete "What this covers" section wording. Two interpretations tried, both wrong, both reverted.
   Verbatim ask: "Covering The Deliverables." + "standard industry services above standard quality".
   Current state = "We'll Take It From Here." Ask him to state exactly what he wants. See docs/NEXT-SESSION.md.
4. Rates unconfirmed (teaching $75-150/hr; $100-150/hr reused for systems + acoustics; deposit/revision/day-rate terms).
5. Work/Proof artist roster unvetted — broad, largely unverifiable from public credits. Blocks publishing.
6. Door icon scale: full-width bars shipped; his last recorded instinct was "tiny little side bars". Unresolved.
```

## BRANCHES (10 remote)

```
main                                      c6bc9ac  LIVE. Old site. + 6 manual .md edits by Edward 2026-08-21.
claude/site-iterations-docs-review-dbr45q 05f1330  ACTIVE. The five-doors rebuild. All current work.
claude/upperlevelmusic-review-hod2rl      d575858  Aug 18. Teardown + doors origin. MERGED into active. PR #8. Keep.
claude/cloudflare-domain-hosting-b36p1n   Aug 09.  Stale, 56 behind.
claude/website-hosting-migration-33e40z   Jul 28.  Stale, 56 behind.
claude/ulm-organizing-agent-review-6arfy1 Aug 21.  1 commit, README edit by Edward.
copilot/clean-up-repository-for-tanstack-start  Aug 05. Abandoned, 56 behind.
copilot/preservesite-...-five-doors-full          EMPTY (0 commits ahead of main)
copilot/preservesite-...-five-doors-full-again    EMPTY
copilot/preservesite-...-five-doors-full-another-one EMPTY
```

## SITE STATE (active branch)

```
LIVE PAGES  / (doors) · /complete · /fix · /learn · /evaluate · /purple · /the-gap · /story · /proof · /start
            · /pre-production · (unlisted: /hierarchy-options, /doors-draft)
REDIRECTS   about->story · work->proof · studio->proof · education->learn · services->complete · contact->start
            · describing-sound->purple · credits,process,reach,who-we-are,news -> /  <-- 4 of these are a DEFECT,
              should point at real destinations, not homepage. Fix during cleanup.
ORPHANED    site/src/lib/pages/{about,contact,describing-sound,education,news,services,studio,work,workbench}.ts
            = unimported archive of the pre-doors site. Recoverable, not built.
DEFECT      site/AGENTS.md is 1 byte on main (was a Lovable "don't rewrite history" warning). Restore or confirm.
TOOLS LIVE  Impedance+gain tool on /evaluate · hum-tree on /fix (both from workbench-tools.ts, verified working)
VISUALS     src/visuals/ = 70 icons + 9 ui + 14 motion scenes. All 14 ship. 6 were repaired 2026-08-21
            (honest reduced-motion freezes; SMIL morphs -> CSS crossfade; comb-filtering 97KB->7.7KB,
            impedance-bridging 62KB->6.9KB, polar-patterns 17KB->7KB). icon-translation.svg is new (door 5).
```

## SOURCE MANIFEST — everything ever written, and where it is

```
CURRENT LAW      CLAUDE.md (root, active branch) — standing decisions + "The mandate" (full authority, 21 Aug)
                 docs/BRIEF.md — audience priority, site intent, what's finished vs scaffolding
                 docs/DESIGN.md — the redesign's locked decisions + why doors beat service/client/sector splits
RESEARCH (this session, scratch — NOT in git, regenerate if needed):
                 COPY-BIBLE.md · VOICE-PROFILE.md · DESIGN-RESEARCH.md · VISUALS-AUDIT.md
                 were written to the session scratchpad and are LOST when this container dies.
                 VOICE-PROFILE.md is the highest-value one: Edward's quotes, humor, metaphor engine, anti-slop list.
SUPERSEDED REF   (root, active branch) BIBLE-MAP.md · CLEAN-ROOM.md · CONCEPT-BRIEF.md · COPY-AUDIT-aug-16.md
                 PROPOSALS-aug-16.md · REBUILD-DRAFT.md · REVIEW-aug-16.md · TASTE-MAP.md
                 Prior session's verdict (handoff/HANDOFF.md): "a map with no legend", led "miles off course".
                 Reference only. Do not treat as plans.
HANDOFFS (stale) handoff/HANDOFF.md (Aug 18) · docs/NEXT-SESSION.md (Aug 21). Both superseded by THIS file.
UPLOADED         docs/website-strategy-and-architecture-notes.md — Edward's uploaded framework, corrected in place
                 (commits 5564462 verbatim, then 715103d with [Corrected] markers)
OLD SITE         8 archived iterations (v1,v2,v3,v3-2,v3-3,v3-production,v4-fresh,recovered) removed from tree,
                 preserved in history: `git show 92e2f30 --stat` / `git checkout 92e2f30 -- archived`
                 CONTAMINATION WARNING: Lovable-era copy. Old wording kept bleeding back into current work.
DEPLOY           site/DEPLOY.md — Cloudflare Worker `ulm-organizing`, production branch = main
CONVERSATION     Everything else lives only in chat transcripts, which git does not hold.
```

## POINTERS

```
CONTENT    site/src/lib/pages/*.ts (HTML strings) · registry: site/src/lib/site-pages.ts (only imported = built)
ROUTES     site/src/routes/*.tsx · SEO/sitemap: site/src/lib/seo.ts
DOORS      site/src/lib/doors.ts (5 door SVGs, one source, 3 renderings)
VISUALS    site/src/lib/visuals.ts + site/src/visuals/{icons,ui,motion}
PHOTOS     site/src/assets/ + registry site/src/lib/photos.ts (focal points as data) — 102 photos
CSS        site/src/styles/site.css — faces/weights ONLY in THE TYPE SYSTEM block at the foot
BUILD      cd site && npm install && npm run build
DEV        cd site && npm run dev -- --host 127.0.0.1 --port 8080   (default port 8080 fails on ::, needs IPv4)
SCREENSHOT playwright installed per-session; chromium at /opt/pw-browsers/chromium (do NOT run playwright install)
```
