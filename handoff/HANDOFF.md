# HANDOFF — read this first, search nothing until you need it

For the next Claude instance on this project. Everything load-bearing is
here or one pointer away. Do not spelunk the conversation history or the
root strategy docs to "get context" — that is the token waste this file
exists to prevent.

## Who you work for

Edward Lidow. Grammy-credited engineer, ~30 years / ~75k studio hours
(Hit Factory Criteria intern → the whole industry), runs Upper Level
Music from Columbia SC, remote. Severe ADHD — he dumps and refills
working memory often ("good for perspective, bad for continuity");
your job includes holding continuity for him. He is not a coder. He is
the creative director and every word on the site is his or awaits his
veto. Read `CLAUDE.md` at repo root before touching anything — it holds
the standing laws (voice, photos, credits, type system, icon grammar,
deployment, evidence rule). Those laws are settled; do not re-litigate.

## Hard protocols (violating these is the cardinal sin)

- Work ONLY on branch `claude/upperlevelmusic-review-hod2rl` (PR #8).
  `main` = the LIVE site; merging/pushing to it publishes within
  minutes. Only Edward saying "publish" (that word) authorizes it.
- Commit as you go; push to the branch so his preview updates. Preview:
  https://claude-upperlevelmusic-review-hod2rl-ulm-organizing.upperlevelmusic.workers.dev
  (Cloudflare Worker `ulm-organizing`; branch pushes auto-build a
  preview ~2 min; tell him "refresh in ~2 minutes" after pushing.)
- Never the question/options UI — plain text questions only.
- Talk decisions out BEFORE coding. He said: "you don't have to get to
  coding each chat iteration; we can complete the thought thread and
  then code." Constant push-per-message eats his credits.
- Never rewrite his sentences. Never invent copy in his voice and call
  it final — drafts are delivered as numbered veto lists. His typed
  chat casing is NOT canon; the every-word-caps heading law is.
- No technical claim on the site unless it is his sentence quoted or a
  number computed from his data. One wrong gear fact = "years wasted
  in a flash."
- Evidence rule: state the check you ran, or state that you didn't
  check. Screenshot 1400+390 before claiming any visual change works.
- Verify builds locally: `cd site && npm run build`, then
  `cd .output && npx wrangler dev --port 4173 --local` (start via
  nohup+disown; foreground pkill chains exit 144 — harmless).

## State of the site (after the 17-18 Aug teardown)

Edward tore the site down to bedrock. The live production site (main)
is UNTOUCHED old state; the branch is the working truth:

- **`/` (Home)**: session-sheet hero (H1 pun "Major Key Changes" =
  his, keep) + one button (How It Works → /hierarchy-options) + the
  five icon door bars (UNCLICKABLE on purpose — intake was trashed) +
  revision stamp. Nothing else. Law: nothing argues above the doors.
- **`/hierarchy-options`**: THE working surface. 11 accordions = every
  surviving copy block from the teardown, titles as they stood, text
  verbatim, source + photo filenames noted per block. Edward will rank
  these; the rebuild grows from his ranking. Not indexed, in nav.
- **`/doors-draft`**: unlisted icon lab (the five door stories at
  large scale with the sequencer animation). For icon revisions only.
- Everything else 404s: Studio, Learn, About, Work, Services, News,
  The Gap, Workbench, pre-production, describing-sound, Contact.
  Their modules still sit in `site/src/lib/pages/` UNIMPORTED (the
  archive) — recoverable to the word, plus full git history.
- "Send Me The Song" is BANNED — reads predatory ("send me something
  so I can steal your IP"). The only contact surface is the plain
  footer email. The intake gets rebuilt from scratch later.

## The five doors (settled language + icon grammar)

Titles: Complete The Project / Fix An Issue / Learn The Craft /
Playback, Evaluate, Improve / [door 5 UNDECIDED — standing draft
"Explain It, Adapt, Solve It"]. Meaning in one line: 1 finishes, 2
repairs, 3 teaches, 4 judges, 5 translates (door 5 = the words are the
problem; purple-guitar door). Icons: see `/doors-draft` + the icon
grammar section in CLAUDE.md (objects have bodies / signals stay lines
/ one colour one meaning / motion is narration / uniform detail).
Edward's verdict on the big-bars Home experiment: icons were "supposed
to be tiny little side bars" — scale/role still open for his call.

## Open threads (the actual to-do, all blocked on Edward)

1. His ranking of the 11 Hierarchy Options blocks → drives the rebuild.
2. Door 5 language (translation leads; words are his to give).
3. Icon revision pass (after language) + icon scale-on-Home decision.
4. The four class questions (Create/Enjoy/Hear/Learn, his verbatim
   text is in the conversation archive; placement unresolved — do NOT
   build without solving the "pushes icons downstream" objection).
5. Mined intake lines: real first-sentences from his inbox — never
   arrived; door sub-lines wait for them.
6. Intake/contact rebuilt from scratch (show-don't-tell, non-predatory).
7. Assets: he holds a zip of all 102 photos (given 18 Aug); photo
   integration re-decided during rebuild.

## What NOT to do

- Do not treat the root strategy docs (REVIEW-aug-16, PROPOSALS,
  CONCEPT-BRIEF, REBUILD-DRAFT, CLEAN-ROOM, BIBLE-MAP, TASTE-MAP,
  COPY-AUDIT) as plans. Edward's verdict: the research "gave us a map
  with no legend" and led miles off course. They are reference ONLY if
  he asks. The legend is his ranking, nothing else.
- Do not add pages, tools, or interactives. The Workbench tools
  (impedance checker etc.) were judged "tiny bits to sprinkle" — they
  live in the archive until the core stands.
- Do not restore anything from the archive without his explicit ask.
- Do not run multi-agent research workflows. That era is over.

## Key paths

- Copy/pages: `site/src/lib/pages/*.ts` (HTML strings; archive included)
- Registry: `site/src/lib/site-pages.ts` (only imported pages build)
- Routes: `site/src/routes/*.tsx` · SEO/sitemap: `site/src/lib/seo.ts`
- Layout/nav: `site/src/components/site/SiteLayout.tsx`
- Behaviors: `site/src/components/site/site-behaviors.ts`
- CSS: `site/src/styles/site.css` — faces/weights ONLY in THE TYPE
  SYSTEM block at the foot; doors animation block mid-file
- Photos: `site/src/assets/` (glob-registered via `site/src/lib/photos.ts`)
- His engineering corpus (Wiring Bible etc.): summarized in BIBLE-MAP.md;
  originals were session-scratchpad only — ask him to re-upload if needed.
