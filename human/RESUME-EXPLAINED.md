# Where things stand — written for Edward, in plain English

**Stamp: 21 August 2026, 7:48pm UTC · branch `claude/site-iterations-docs-review-dbr45q` · commit `05f1330`**

> **Staleness check, takes five seconds:** open `RESUME-HERE.md` (the short file in the
> main folder) and look at its stamp line. If the commit code there is not `05f1330`,
> then work has happened since this was written and *this* file is behind. Trust the
> short file, and ask for this one to be refreshed. No AI needs to check this for you.

---

## What this file is

This is the plain-English twin of `RESUME-HERE.md`. That file is written for the AI —
short, dense, no explanation, because every word it contains costs you credits every
time a session reads it. This file is written for you, and **AI sessions are blocked
from reading it**, so its length costs you nothing.

Same facts. Two registers. Think of it as the track sheet versus the liner notes.

---

## The short version

You have **two different websites** in play right now:

1. **The one the public sees.** upperlevelmusic.com still shows the older version of
   your site — the one with Services, Work, Studio, About and so on. It has not changed
   all week. Nothing that has been built recently has gone live.

2. **The one that was built on 21 August.** A complete rebuild around your five doors.
   It exists, it is finished, it is saved permanently, and it is visible at a private
   preview address. It is not public and will not become public until you say the word
   "publish".

That separation is deliberate and it is the safety net. Everything experimental happens
in the second place; the first place only changes when you decide it should.

---

## What happened on 21 August, in order

**Morning — the wrong target.** The session began by improving the *old* site, because
that is what was sitting in front of it. Three real fixes landed: photographs on the
live site had silently been showing un-cropped (a bug that only appeared in the public
version, never in testing), pages were downloading full-size camera files on phones, and
a dead page was still shipping. All three were fixed and proven with before-and-after
screenshots.

**Midday — finding the real frontier.** You pointed out this was the site you had
already condemned. That led to discovering an entire later body of work on another
branch: the teardown you did on 17–18 August, where the site was stripped back to
bedrock, plus the five door concept, the icon grammar, and a set of laws about how the
site should behave. That work was pulled in, and the rebuild started from there instead.

**Afternoon — the rebuild.** Ten pages, built around the doors: a visitor arrives with a
problem rather than a service name, picks the door that matches, and finds everything —
including prices — behind it. Your existing writing was used throughout; new connective
sentences were written to match your voice, using a profile assembled from your own
quotes and verdicts.

**Evening — your revision round.** New opening photograph (you at the console with an
engineer beside you), your pun restored as the mission line, a new section naming the
five kinds of person who might arrive, the two unfinished studio tools made live, six
broken animated diagrams repaired, and a new icon drawn for the fifth door.

**Late — two wrong guesses.** You flagged a section, twice, and both interpretations
were wrong. Both were reverted. The question is still open and is recorded so nobody
guesses at it again. That episode is the reason you asked for this whole audit system.

---

## The rule that now governs everything: dual permission

Nothing gets built, changed, saved, moved or removed until you have said yes
**twice** — once to the idea, and once to the specific thing about to happen.

In practice it works like this. First I propose: *"I'd like to move these old
documents into an archive folder."* You say yes or no to the idea. If yes, I
come back with exactly what I am about to do — the precise files, the precise
commands — and you confirm that specific thing before anything runs. One yes
is not two.

This exists because on 21 August a single approval got turned into an action
that was not what you meant, twice in a row, and both had to be undone. The
cost of asking twice is a few seconds. The cost of guessing is a round of work
and your trust.

What this does *not* cover: reading, searching, and reporting back. Looking at
files and telling you what is there changes nothing, so it needs no permission
— otherwise I could never gather enough to make a proposal in the first place.

The rule is written into the instructions file that every AI session loads
automatically, so it binds every future session and not just the one that
agreed to it.

---

## What is waiting on you

Nothing is blocked on the AI. Six things are blocked on you:

1. **Is the five-doors direction still what you want?** Everything in the coming cleanup
   depends on knowing what counts as current and what counts as superseded.
2. **Is anything unsaved anywhere else?** Another Claude session, Lovable, or a Copilot
   job holding work that has not been pushed. If so it should be pushed before cleanup.
3. **The "What this covers" section wording** on the Complete The Project page. State it
   exactly and it gets applied exactly — no interpreting.
4. **Prices.** Several rates on the site are proposed, not confirmed by you. They are
   marked as unconfirmed in the source so they cannot be published by accident.
5. **The artist list.** The roster of names is broad and mostly cannot be verified from
   public credits. This is the one place the site could say something factually wrong.
   It needs your pass before anything publishes.
6. **Door icon size.** They currently run full width. Your last recorded instinct was
   that they should be "tiny little side bars". Unresolved on purpose.

---

## Why none of this can be lost

Every piece of work is committed and pushed, which means it lives on GitHub's servers,
not on any temporary machine. The container this session runs in gets thrown away — the
saved work does not.

Git also does not overwrite history. Every version of every file from every day is still
retrievable. The only genuine ways to lose work are to force old history to be rewritten
(explicitly forbidden in the rules file, because Lovable is connected and would be
affected), or to leave work unsaved when a session dies (which is what the short resume
file exists to prevent).

The audit that comes next is also non-destructive by design: the reading stage only
looks, the labelling stage only adds, and anything that gets tidied away is bookmarked
permanently first.

---

## What happens next

The agreed plan, in order:

1. **This file and its twin** — done, that is what you are reading.
2. **Safety bookmarks** on every branch, so nothing can be misplaced regardless of what
   any tool does next.
3. **The full read** — every file, every note, every commit message, start to finish,
   with nothing summarised. This is the long, expensive stage.
4. **The two document layers** — a compact index for the AI, and a set of numbered
   plain-English files for you covering the story, the branches, the documents, a
   glossary, and how to move around.
5. **A cleanup proposal**, itemised, for you to approve or reject line by line. Nothing
   is removed without your yes.
6. **Execution** of only what you approved, proven by before-and-after screenshots.
7. **Guardrails** so this does not silently rot again.

---

## How to start a fresh chat and lose nothing

Open a new session and give it this:

> Read `RESUME-HERE.md` at the root of the repo first, then follow it. Do not read
> anything in `human/`. We are in the middle of the repo audit described there — pick up
> at the next unfinished step.

That is genuinely all it needs. Everything else it must know is in that file: the
branches, the warnings, the open questions, where every document lives, and how to build
and test the site.

If you also want it to read the entire history of the project — every document ever
written, including the eight archived older versions of the site — tell it so
explicitly, because that is a large job that it will not undertake on its own. The
resume file's **Source Manifest** section lists every location, so nothing gets missed.

**One thing worth knowing before you do:** four research documents from this session
(a complete catalogue of your writing, a profile of your voice, design research, and an
audit of your icon library) were written to temporary storage and are **not saved in
git**. They disappear when this session's machine is recycled. The voice profile is the
most valuable of them. If a future session needs that depth again it will have to
rebuild it — or, better, ask for those to be saved into the repo permanently next time.

---

## A few words you will keep seeing

**Repository (repo)** — the project's filing cabinet. Holds every file and every version
of every file, forever.

**Branch** — a parallel copy of the whole project where work can happen without touching
what is live. Like working on a copy of a session file rather than the master.

**Commit** — a saved checkpoint with a note explaining what changed and why. The notes
are the reason history is readable at all.

**Push** — uploading commits to GitHub, where they are safe. Unpushed work is the only
kind that can be lost.

**Tag** — a permanent bookmark on a moment in history so it can always be found again,
even years later.

**main** — the branch wired to your live domain. Anything merged into it goes public
within minutes. There is no staging step and no review.

**Pull request (PR)** — a formal proposal to merge one branch into another. PR #8 is an
old one, open since 16 August; you have said it stays set aside.

**Cloudflare Worker** — the service that actually serves your website to visitors. It
rebuilds from `main` automatically.

**Lovable** — the earlier tool used to build the original site. Still connected to this
repository, which is why rewriting history is forbidden.
