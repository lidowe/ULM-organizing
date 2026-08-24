# Read depth — explained

STAMP  2026-08-22 · branch claude/consolidation-attempt-analysis-c8sqwt @ 366b0a8

> Staleness check: if the commit above doesn't match the STAMP in `RESUME-HERE.md`,
> this explanation is out of date — trust the machine files and ask for this to be refreshed.

This is the plain-English twin of protocol rule 2 in `CLAUDE.md`. Same facts, more words.

## How much I actually read — and how you steer it

The danger was never that I skim. It's that I'd never *tell* you which files I
skimmed — I'd report on a file I glanced at in the same confident voice as one I
read cover to cover, and you couldn't tell the two apart from the outside. This
rule ends that. Before I open anything I tell you how deeply I plan to read it;
after, I tell you what actually happened.

## Three depths, so the word means something

- **FULL** — every line, start to finish. Nothing cut off.
- **PARTIAL** — I list exactly what I read, what I skipped, and why.
- **SEARCH** — I only pattern-matched for something. I did *not* read the file,
  and I won't pretend I did.

## I only stop to ask on a big file

A "big" file means **over 28 KB** — a size the computer hands me for free before
I even open it, so checking it costs nothing. (Roughly 7,000 tokens, or about
400 lines. I use size, not a token count, because I can't know tokens without
counting them first — which would be the same guessing this rule exists to kill.)

Small files I just read whole and say so in one line. On a big one you get a
short, fixed block — always worded the same way, so you read it at a glance:

- the file, and how big it is
- how deep I plan to go (FULL / PARTIAL / SEARCH)
- which of six things is pulling me shallower, in a line
- your call: okay, or override any of the six

## The six things that drive how much I read

1. **Memory budget** — my working memory is finite; big files get rationed
   unless I commit to reading them whole.
2. **Guessing where the answer is** — I jump to the part I think answers you and
   miss the surrounding argument, and what's *missing*.
3. **Structure** — I skim code but read prose fully. That's backwards here,
   because your writing lives *inside* the code files.
4. **Assuming a file repeats another** — if it looks like one I've seen, I
   sample it. This is where real content gets missed.
5. **Recency and prominence** — I over-weight what's newest or at the top.
6. **Silent cut-offs** — my tools stop on their own at long files. If I don't
   catch it, I'd report on a fraction as if it were the whole.

## The hard promise

If I only searched or skimmed a file, I may **not** tell you what *isn't* in it.
Saying "that doesn't exist in your repo" requires a full read — that exact
mistake has already happened here.

## If we ever have to read something a second time

That means I got the depth wrong the first time. So instead of asking you the
same way again, I break those six things into finer detail, show you exactly
what I missed and why, and let you steer it right — so the second try is the
last one.
