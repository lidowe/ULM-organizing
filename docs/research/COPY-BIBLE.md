# UPPER LEVEL MUSIC — COPY BIBLE

Every verbatim passage of Edward Lidow's website copy, organized by theme, so a
redesign can recompose his words without inventing new ones.

**Sources**
- **[H]** = branch `origin/claude/upperlevelmusic-review-hod2rl`, files under
  `site/src/lib/pages/` (the latest working truth; wins where the two differ).
- **[C]** = current checkout, branch `claude/site-iterations-docs-review-dbr45q`,
  same paths (older; only passages absent from [H] are added, marked as such).
- Excluded per instructions: `index.ts`, `hierarchy-options.ts`,
  `doors-draft.ts` (captured elsewhere), the archived Lovable-era site, and all
  root-level strategy docs.

**Branch overlap, verified by `git diff`:** `contact.ts`, `news.ts`, and
`credits.ts` are byte-identical in both branches. `about.ts`, `education.ts`,
`studio.ts`, `work.ts` differ only in spots noted inline. `services.ts` differs
only in the "planning pair" boxes (both versions quoted). All other passages
below exist identically in both sources where the file exists in both.

**Conventions**
- HTML entities decoded (&rsquo; → ', &mdash; → —, &hellip; → …, etc.).
  Punctuation quirks, casing, bleeps and asides are his and are kept.
- `[brackets]` mark structure: [heading], [deck], [caption], [price row], etc.
- `⚠ provenance:` flags passages that source-file comments mark as draft,
  synthesized, or pending Edward's veto — treat those as NOT yet confirmed as
  his verbatim words.

---

## 1 · MISSION & INDUSTRY ARGUMENT

### About page — hero
- [eyebrow] About — `about.ts` [H]+[C]
- [heading] Upper Level Music
- [deck] Created in 2012 by Edward Lidow. A studio built around the person making the record.

### About page — intro (three paragraphs)
`about.ts` [H]+[C]

> Doesn't it feel like 90% of getting your art heard involves anything but making music? Constant self-marketing, streaming services that don't pay, and learning to record at a professional level just to keep up.

> Upper Level Music is here for that last part, the gap between the major label recording studio and the growing home studio. Being in control of your record is the one place a musician actually wants control.

> Major-label resources and experience, made available at any stage. The work is collaborative rather than a permanent building, I pull in the right people when a record needs them. We focus on remote work to be available to anyone, but tell us the scope of your project and any arrangement can be made.

### About page — lead photo caption
`about.ts` [H]+[C]

> Music is not meant to be made alone, staring at a screen.

(Same sentence recurs inside accordion 03 — see below.)

### About page — accordion 02: the industry
`about.ts` [H]+[C]

- [accordion number] 02
- [accordion title, accented] The Music Industry and The Diminished Artist
- [accordion summary] The technology to create has never been so powerful, so why do I feel so powerless?

> The record industry today is shifting the responsibilities of an entire team of specialized talents onto underfunded, overworked artists, asking them to own a dozen things that have nothing to do with why they were drawn to music in the first place. It is nearly impossible to make a record with the sound quality, the collaborative depth, and the specialized touch that a label can simply fund and hire.

> It used to run bottom to top. A label sent an A&R to a dive bar to see a band with a little local buzz, a write-up in a weekly, a tip from a friend of a friend, and the artist blew them away. The label then had to convince the artist to sign, so the label could support them.

> Now it runs top to bottom. Labels are media conglomerates pushing artists they choose and shape toward radio, toward numbers that streaming will never pay an independent artist. For the creative-minded musician, engineer, or anyone who wants to be present while music gets made, the landscape has gone dystopian.

### About page — pull quote ("freedom" section)
`about.ts` [H]+[C]

> It is the artist who is vulnerable. It is the artist expressing their emotion, their story. That is where all of this starts, and the industry should be built to reflect it.

### About page — accordion 03: why this exists
`about.ts` [H]+[C]

- [accordion number] 03
- [accordion title] Why This Exists
- [accordion summary] Control belongs to the person making the art.

> That feeling is what made me think there has to be a better way, not moving backward to how things were, but putting control back in the hands of the person making the art.

> Upper Level Music is an attempt, by me and the people I have met across a 30-year career, to turn that around, so anyone who wants to express themselves sonically can do it and be sustained by it.

> This is where the creative spirit stands up and says this is not all on us. We want the social element back. We want collaboration. Music is not meant to be made alone, staring at a screen.

### The Gap page (standalone "why this exists" essay)
`the-gap.ts` [H] only (page does not exist in [C]).
⚠ provenance: file header comment reads "All copy is DRAFT in Edward's voice,
pending his veto pass" — distilled from Edward's 16 Aug conversation; the
publishable thesis only: no names, no grievances. Do not treat as confirmed
verbatim Edward until he has passed it.

- [eyebrow] Why this exists
- [heading] The Tools Reached Everyone. The Knowledge Didn't.
- [deck] Thirty years inside the industry machine, and a decade beside home studios. This page is about the gap between them — and the bridge. There are no villains in it.

[unit 01 label] How it used to flow

> For most of a century, knowledge moved through this trade the way signal moves through a patchbay: *normalled*. It flowed by default — engineer to assistant, assistant to the intern holding the coffee — the way a patchbay passes audio top to bottom until something interrupts it. The rooms were the schools. Nobody called it teaching. It was just how a record got made.

- [diagram nodes] Engineer · Assistant · Intern · The Next Record
- [diagram caption] The normal: knowledge flows by default, the way signal does.

[unit 02 label] The interruption

> Then the tools got small and cheap and went home with everyone. That part was good — it is the best thing that has happened to music-making in fifty years. But the power moved faster than the knowledge, and the knowledge was not included in the transfer. The big rooms closed quicker than the teaching could find a new path down.

> Into that silence came a different pool: sponsored advice, gear pushed for margin over merit, side-by-side tests hunting a perfect copy of an original that never existed in the first place. Blanket information for a craft where no two projects are the same. Advice that fits every record fits none of them.

> [turn line] Nobody chose this. The people it fails are not doing anything wrong.

- [diagram caption] The normal, interrupted: the tools kept moving; the knowledge didn't.

[unit 03 label] What the pool can't teach

> Here is what got lost, concretely: **the circuit is a creative decision.** Different circuits enhance different emotions by design. An optical compressor breathes; a FET grabs. Second-order warmth flatters a voice; third-order edge makes a snare spit. Choosing between them is arranging, not shopping — and no search for the perfect clone will teach it, because even six originals of the same legendary microphone never sounded the same as each other.

> And the craft it serves points the same direction: engineering is taking what is good and making it great — enhancing, not endlessly fixing. The fix-it-later habit isn't a character flaw in the people who have it. It is what a knowledge pool built from sponsored content teaches by omission.

> [turn line] A kid with one honest microphone and a basic interface can out-mix a mid-level studio. They just need the why.

[unit 04 label] The patch

> A broken normal doesn't repair itself. It gets patched — deliberately, one cable at a time, by someone who knows where the signal needs to go. That is what Upper Level Music is: the patch around the interruption. The industry machine and the home studio are not enemies. They are colleagues separated by a gap neither of them made.

> So we work both sides of it. Records made with major-label depth for people who will never sign one. Teaching that treats your project as the curriculum, because no two are the same. And the long-form knowledge, written down and handed over, the way it used to be handed down.

> [turn line] Nobody owns the knowledge. Somebody just has to pass it on.

- [diagram caption] The patch: deliberate, person to person. That is Upper Level Music.

### Education page — the same thesis in one paragraph
`education.ts` [H]+[C]

> The tools reached everyone. The training did not, and the rooms that used to hand it down are closing. That gap is the thematic problem Upper Level Music exists to solve, so all of us get to better creative output.

---

## 2 · TEACHING & APPRENTICESHIP

### Education page — hero
`education.ts` [H]+[C]

- [eyebrow] Learn
- [heading] Somebody Has to Teach This.
- [deck] One-on-one training in recording, mixing, and studio technical work, for artists, engineers, producers, and students.

### Education page — unit 01
`education.ts` [H]+[C]

- [unit label] Why this page exists
- [heading] The Apprenticeship Is Gone. The Knowledge Does Not Have to Go with It.

> I learned this trade the old way: as an intern and then an assistant at Hit Factory Criteria, standing behind people who had been doing it for thirty years. Almost nobody entering audio today gets a room, a mentor, and five years to absorb it.

> Home studios are everywhere, which is a large part of why the major rooms are closing. So I hand the training over directly. If you want to know why a ribbon needs 70 dB of clean gain, or why your kick sounds different in your room than in the car, I will show you. If you want to discuss the hysteresis effect transformers have on the tone of your audio, and how the choice of windings and blends of metal affect the harmonic result, I can show you that too. If you would rather I just handle it, that is fine too.

> The tools reached everyone. The training did not, and the rooms that used to hand it down are closing. That gap is the thematic problem Upper Level Music exists to solve, so all of us get to better creative output.

### Education page — unit 02
`education.ts` [H]+[C]

- [unit label] What it looks like
- [heading] Handed Over Directly.

> One-on-one sessions, mix and signal-flow critique, gain structure and impedance, conversion and summing, acoustic diagnosis, and how to run your own setup without me. Remote, and pitched at the level you are actually at rather than where a curriculum assumes you are.

- [needs-content note, both branches] **Content needed** — Outline the formats (one-on-one, group, course), session lengths, pricing, and who each track is for. This page also becomes the home for written explanations, the durable answers to the questions that get asked most, each on its own page.

### Services page — teaching mode ("Learn to Run It")
`services.ts` [H]+[C]

- [mode heading] Learn to Run It.

> Whatever the job, we'll teach you the theory and get as detailed as you want. One on one, so you can produce professional results on your own terms. We adapt to how you learn.

- [fold summary] See what this covers
- [list items]
  - Engineers on gain structure, impedance, conversion, summing and monitoring
  - Producers on arrangement, routing, and diagnosing a mix instead of guessing
  - Artists learning to record themselves properly, start to finish
  - Students who want the apprenticeship that no longer exists
  - Mastering theory: loudness, dynamics, delivery specs, and what actually matters
  - Technical work: patchbays, wiring, maintenance, and reading a schematic
  - The home engineer already charging for work

[aside under that last list item — the home-engineer aside, verbatim]

> If you're a home engineer, well, we get it. You're going to do our job on your own and charge less. Upper Level might be the only ones who will say it out loud. We know, we've seen you poach clients from some engineers. It's okay, it's never been ours. We just don't like the quality drop, and neither do you. So let's still get you the deliverable to 'your' client, if you have any yet. It could just be you, and that's cool, we were never worried. But let's teach it right, whether that's via lessons on theory or just showing you how 'the pros' do it.

### Services page — teaching group intro (rates section)
`services.ts` [H]+[C]

- [group heading] Teaching
> Pitched at where you actually are, not where a curriculum assumes you are.

(Coaching price row is under SERVICES & RATES.)

---

## 3 · PROCESS & PLANNING

### Services page — hero
`services.ts` [H]+[C]

- [eyebrow] How the work goes
- [heading] Regardless of Scope.
- [deck] Why a project starts with questions, how it actually runs, and what each part costs.

### Services page — unit 01: getting started
`services.ts` [H]+[C]

- [unit label] Getting started
- [heading] How Does This Whole Process Start, What Should I Expect?

[epigraph block]
> In order to make a grilled cheese, first you must create the universe.
- [epigraph attribution] paraphrasing Carl Sagan

> Upper Level's process is not unlike that paraphrased quote. Even a small task requires learning about you and the universe your project is in.

> It starts on beat one. Centering pre-planning and pre-production around you. It's an open dialog where we ask a lot of questions in search of your signature voice, and pre-production is where we search.

> [turn line] Wondering why the 3rd degree? Well, we're trying to establish the Root.

> Upper Level Music's underlying theme is to empower the creator. The idea starts with you. We focus our attention on listening to your words and what rests between them, so the key signature is yours and we maintain the proper scale … without accidentals.

### Services page — unit 02: the planning
`services.ts` [H]+[C]

- [unit label] The planning
- [heading] We Discuss, Then We Get to Work.

> To record something is not difficult. It is no longer a huge intimidating console behind soundlocked doors, the console can exist in the palm of your hand, but the creative use and ability to take idea to implementation was left behind. We believe in empowering the user, regardless of scope.

> Despite the marketing, it's not about which mic or what plug-in, it's about what happens when you combine the right tools for the right reasons and accomplish the full circle of concept to deliverable. We understand the frustration, and we provide the means and the message.

### Services page — the planning pair (BOTH VERSIONS — the branches differ here)

**[H] version (hod2rl — wins). Boxes link to /pre-production and /describing-sound:**

- [box mark] First
- [box heading] Let's define who *you* are.

> Just like any recording, the best outcome happens when you start from the source. Upper Level Music works from an artist-*is*-the-source mentality: we want to capture the project in your voice, listening to what lives behind the words.

> Understanding the motivations at the beginning is critical to ending with your voice intact. We don't want to lose the message or its authenticity, so a simple, informal Q&A gives us the template.

- [box link label] See a sample Q&A

- [box mark] Then
- [box heading] You set the destination.

> We'll apply the gas and steer the vehicle. The brakes are yours if we miss the turn.

> Knowing the technical terminology isn't necessary. If we're describing a song's feel and you say "the drums should have a real dreamy vibe — I want it to feel like we're floating in space", we know exactly what you mean, and we head that way. Sound…

- [box link label] …is described in borrowed words

**[C] version (dbr45q only — older, superseded but different words):**

- [box mark] First
- [box heading] Let's define who *you* are.

> What are you trying to say and what's the motivation behind it? What is actually getting in the way? The best work is hard when working with someone not understood as a person and in context of the work. It's even harder when the client hasn't figured themselves out either. We'll solve this here.

- [box mark] Then
- [box heading] You decide the path, for both of us.

> What you are hiring for changes the price, the schedule, and how much of it we touch. We settle that before anything starts by letting you pick the path ULM takes.

> You do not need the vocabulary to start. "This part should sound like I'm in a spaceship" is enough to work from. Hand us a routing problem like whether you should half-normal your patch bay instead, and we will work there. Same depth either way.

**[C]-only closing line under the pair (not present in [H]):**

> A production line never misses a beat. That's what's wrong with it.

### Services page — unit 03: the three modes
`services.ts` [H]+[C]

- [unit label] How much you do yourself
- [heading] Pick How Far You Want to Be in It.
- [lede] The same job can be handed over, worked through together, or taught. It changes the price and the schedule, so it gets settled first.

**Mode 1**
- [mode heading] Hand It Over.

> Results and deliverables, done right and on time. Some people put it less politely, and that has been said too: *just f**king do it*. Heard.

- [fold summary] See what this covers
- [list items]
  - Full production from demo to master, or any single stage of it
  - Recording and tracking, remote or in person, with engineers matched to the material
  - Vocal production: direction, comping, tuning, timing, stacks and ad-libs
  - Mixing, including revisions, stems, instrumentals and TV mixes
  - Mastering for streaming, vinyl prep, and sequenced album masters
  - Editing and repair: drum edits, tuning cleanup, noise and bleed removal
  - Podcast and content audio, edited, leveled and delivered to spec
  - Twelve songs stalled at eighty percent, finished and consistent as a body of work
  - One reviewed edit is a real job. We take small ones.

**Mode 2**
- [mode heading] Work It Together.

> When you need help with a specific aspect inside a larger scope, we'll work it out together, on your session and in your room. We've got you.

- [fold summary] See what this covers
- [list items]
  - A mix that will not sit, worked through on your session, in your DAW
  - A room that lies to you: measurement, treatment plan, speaker placement
  - A signal path with a fault you cannot isolate, traced end to end
  - Gain structure, impedance, converters and clocking on your actual rig
  - Templates, routing and recall built around how you already work
  - A home playback system that never matched the record
  - Gear you are about to buy, checked before you spend
  - Vocal chain and tracking setup dialed in with you on the session

**Mode 3** — see TEACHING & APPRENTICESHIP ("Learn to Run It.").

### Pre-production page ("A Chance to Be Heard")
`pre-production.ts` [H] only (page does not exist in [C]).
⚠ provenance: file header comment says the Q&A below is a SAMPLE, "synthesized
as a placeholder template per Edward (16 Aug): 'could be synthesized based on
what we already anticipate for now'. Swap questions and answers for his real
intake as it settles." The intro prose reads as his; the Q&A items are
placeholder-synthesized, not confirmed Edward.

- [eyebrow] Getting started
- [heading] A Chance to Be Heard.
- [deck] Before we reach for a microphone, a short, informal Q&A. We wouldn't know which mic to start with without knowing what's being delivered into it.

[unit 01 label] Why we ask

> Because we've been on both sides of the process, we know how frustrating it is to be told how to think and what to say to make a 'hit'. Maybe some people welcome that. For us, the source is the guide, and we work in service of the song or project in front of us — not building your 'brand' or 'image'. That reveals itself through collaboration, in the process.

> A typical Q&A might go like this — but we try not to be typical. The conversation establishes a few constants we've learned are necessary, and the rest is a chance to be heard before we reach for a microphone.

> [turn line] So let's find out:

[unit 02 label] A sample of the conversation
⚠ synthesized sample — see provenance note above.

- [Q] What are you making, and where does it live right now?
- [A] A single, an EP, a demo that outgrew the bedroom. "Three songs on a laptop and one that only exists live" is a complete answer.
- [Q] What is it supposed to feel like?
- [A] Not the genre — the feeling. "Like driving at night." "Dreamy, like we're floating in space." References, adjectives and colors all count. Translating them is our job, not yours.
- [Q] What made you write it?
- [A] This is the one that matters. The motivation behind a project at the beginning is how the message survives to the end with your voice intact.
- [Q] What is actually getting in the way?
- [A] The vocal never sits. The low end disappears in the car. It has been eighty percent finished for a year. Say it plainly — it is usually fixable, and it is never embarrassing.
- [Q] How much of it do you want in your own hands?
- [A] Handed over, worked through together, or taught. There is no wrong answer, and it can change mid-project.
- [Q] When does it need to exist, and what does "done" look like?
- [A] A release date, a playlist pitch, a master for vinyl, or just finally finished. The destination sets the route.

- [closing line] The point of all of it: the pressure gets dealt with here, ahead of time, so when creativity is flowing nothing interrupts it.

---

## 4 · DESCRIBING SOUND / TRANSLATION

### Describing Sound page
`describing-sound.ts` [H] only (page does not exist in [C]).
Provenance: file header comment — "Copy is Edward's (16 Aug), mechanically
cleaned; the purple-guitar story is kept as close to verbatim as punctuation
allows."

- [eyebrow] Getting started
- [heading] Describing Sound.
- [deck] Sound has very few words of its own. That has never stopped anyone, and it doesn't need to stop you.

[unit 01 label] Borrowed words

> Sound actually has very few words that describe it without referencing another sense. Warm, bright, dull, crunchy, smooth, buttery, harsh, crisp — all borrowed from somewhere else. It's pretty interesting to hear how someone describes the sonic feeling they want to express.

> [turn line] I've been asked to make a guitar sound more purple before, and I still knew what they meant.

> I reached for a few chorusy effects and a gentle harmonizer, hit play, and they said "yes! exactly."

> In my head, hearing the word purple made me think of Prince, and Prince used a lot of chorus (the Roland Dimension D) and gentle doubler effects (the Eventide H3500 being his favorite). Hearing the original guitar parts and the word purple was enough to know what to reach for, and the song inspired what settings to use.

[unit 02 label] Why it happens before the session

> Our focus is still on the source. We prefer to get a preliminary sketch during pre-production, so time in the studio is not spent trying to translate but implement. By doing things this way, we spend less time in the studio searching and sorting through options, and more time focused on the work.

> Through experience, we've learned to adapt and avoid making rushed decisions mid-session. It's better to set the tempo ahead of time.

> [turn line] With the destination in mind and knowing how fast to go, we can keep driving toward the goal.

### Studio page — the two audiences
`studio.ts` [H]+[C]

- [card kicker] For artists
- [card heading] You can talk about the song in human terms.
> No technical plan needed. Tell me what feels wrong and what you are trying not to lose.

- [card kicker] For producers & engineers
- [card heading] The technical depth is there when you want it.
> Gain structure, mic and preamp impedance interaction, summing, conversion. We can work at that level directly.

### Workbench catalogue row (cross-reference)
`workbench.ts` [H] only

> You don't need the technical words. Sound is described in borrowed ones, and translating them is the job.

---

## 5 · VALUES

### About page — "Our values" fold
`about.ts` [H] only ([C] has no values fold; its accordion 04 slot holds a
needs-content note instead — see MISC).

- [fold label] Our values · [fold hint] Read

> The artist is the one who is vulnerable. The social currency spent on a record is theirs, their story, their name, their risk. Our work belongs in service to the song.

> Before we begin, we want to hear about you: the concept, the intention. Then we translate that into the technical world, the gear, the sonic character.

> It is not the artist's job to know whether an 1176 or a dbx 160VU will help express that. If you are an engineer who wants to know, we will travel that path as far as you want.

> It is better to listen to the artist in order to hear the song.

### About page — "Remote work" fold
`about.ts` [H] only

- [fold label] Remote work · [fold hint] Read

> Most work happens through video calls, shared audio feeds, and real-time remote collaboration. That flexibility lets us work with artists anywhere, on any schedule.

> Nothing fully replaces being in the same space. We trade some of that for access, and we are honest about it.

### Work page — "Every role" (ethic + history; also see THE PERSON)
`work.ts` [H] only ([C] does not have this section).

- [unit label] Every role

> Various roles, various artists, whether the role was large or small or the artist famous or not, every job contributes to the 'flow state' every job asks 100% focus … yes, even the coffee can ruin an entire day, or fuel the magic later.

> [set-off line] The takeaway is … no matter the task, we serve the process, we work in service to the song, and the ego stays outside.

> Get them coffee, route signal flow and place mics, run the DAW or be the tape op, it all was part of a bigger picture and personal growth. Running cables became running sessions, tuning instruments became vocal tuning and production, production became tracking engineer, mix engineer, mastering, or going on tour with them.

> Relationships carried on, years go by and I'm asked to build their private studio after our work together commercially… by being their barista a decade earlier. Others continue as clients, friends and contemporaries to this day. The only thing that stays consistent is the dedication and effort put into every detail.

---

## 6 · THE PERSON / HISTORY

### About page — accordion 01: the person
`about.ts` [H]+[C]

- [accordion number] 01
- [accordion title] The Person
- [accordion summary] Musician first, engineer second.

> Upper Level Music was created in 2012 by Edward Lidow, musician, recording engineer, mixer, producer, studio owner and manager, acoustic consultant, and university instructor in audio engineering. There are few jobs in this industry he hasn't done at some point.

- [thumb caption] Edward Lidow at the console.

> I found my place in audio as an engineer, but I started as a musician. Formally trained through high school jazz bands on saxophone and percussion, then years as an indie artist on drums, bass and guitar. That is where the technical side pulled me in, and where I started chasing the blend between the creative and the technical.

> After Clemson University and a media and communications degree, I went to SAE Miami and graduated valedictorian, which earned a rare internship at Hit Factory Criteria Miami, now Criteria Studios. Standing on the shoulders of giants there, I worked on Grammy-winning, platinum-selling records across every genre, and came to understand that everything we do is creative and collaborative. No musical project reaches success without a strong creative team.

- [inline photo caption] A large room, mid-session, with the live floor through the glass.
- [inline photo caption] Hit Factory Criteria, Miami, the internship that started it.

> The Bay 8 room in Miami was one of mine, built modestly and later sold. Its current owners have expanded it well past what we made, and it still runs as a commercial studio today, which is the kind of proof a build service rarely gets to point at.

### Education page — first-person apprenticeship history (cross-reference)
See TEACHING & APPRENTICESHIP: "I learned this trade the old way…"

### Work page — career arc (cross-reference)
See VALUES: the "Every role" unit ("Running cables became running sessions…").

### Story-bearing image alt texts (About page) — [H]+[C]
- session-bw: "Black and white photograph of two musicians facing each other mid-session, drums and guitar"
- edward-thumbnail: "Edward Lidow at a recording console with studio monitors behind him"
- credits-kravitz: "Edward Lidow with Lenny Kravitz at a session"
- console-mpc-session: "A large-format recording console in a control room, faders lit, with a live room visible through the glass beyond"
- hit-factory: "Five people standing under The Hit Factory neon sign outside the studio"
- jm-pretending: "A band posed in matching suits against a painted flat while a photographer shoots from a stepladder, lighting stand and props in frame"
- jef-bear-weirdo: "A bassist performing in a full polar bear costume, drummer behind, mid-song"
- infamed: "A writing room mid-session: two violinists, a guitarist, someone working at a laptop, synths and keyboards around the table"
- moonlight-bass: "A person playing an acoustic bass outdoors at night with a baby in a carrier"

### About page — archive strip
`about.ts` [H]+[C]

- [unit label] A · The archive
- [heading] Twenty Years of Rooms and the People in Them.
- [caption on moonlight-bass] Music happens wherever you are.
(The remaining archive-strip photos carry descriptive alts only, no captions:
consoles, red-lit sessions, groups in studio hallways and lounges.)

---

## 7 · SERVICES & RATES

### Services page — rates section header
`services.ts` [H]+[C]

- [unit label] What each part costs
- [heading] The Services, and What They Run.
- [lede] If you have something unique, let us know. One missing piece can bring a project down, and there is no harm in asking about it.

### Group: Review and diagnose
- [group heading] Review and diagnose
> Start here when the problem has not been identified yet. Diagnosis comes before any recommendation, and it is the cheapest thing on this page.

- [price row: Diagnosis, Strategy and Planning — $100–$150 / hr — small print: remote or by appointment]
> A mix that will not sit, a session that keeps stalling, a record that is not becoming what it was meant to be. We work out what is causing it before deciding what to do about it.
> Also project planning: what order to work in, what to fix now, and what to leave alone.

### Group: Mix, edit and finish
- [group heading] Mix, edit and finish
> The stages people ask for most, taken one at a time or together.

- [price row: Mixing — $400–$900 / song — small print: typical independent range]
> Analog and digital together. Balances, automation, and delivery in the formats you need.

- [price row: Editing, Tuning and Timing — $150–$400 / song — small print: based on scope]
> Comping, pitch correction to taste, time alignment, drum and sound replacement, noise and click repair, mix prep.

- [price row: Vocal Production — $150–$400 / song — small print: based on scope]
> Direction in the session, arrangement of stacks and ad-libs, comping strategy, and the vocal sound itself.
> Performance first. Tuning is a finishing decision, not a rescue.

- [price row: Mastering — $100–$175 / song — small print: release packages quoted]
> Final tone, level, consistency, release-ready delivery. Albums and EPs are taken as a body of work rather than song by song.

### Group: Recording and production
- [group heading] Recording and production
> Getting it made, whether that is one overdub or the whole record.

- [price row: Recording & Tracking — $65–$100 / hr — small print: day rates from $500]
> Overdubs, vocals, instruments, session engineering. Remote or in the room you already work in.
> Mic and chain get picked for the source in front of us, not from a template.

- [price row: Production Assistance & Arrangement — Project based — small print: personalized quote]
> Song development, arrangement, parts, programming, and a second set of ears on decisions already made.

- [price row: Full-Project Development — Project based — small print: multi-stage scope]
> Early production through final delivery, with the same person on it the whole way.
> My role shifts stage to stage, producer, engineer, mixer, advisor, without handing the record to someone new.

### Group: Rooms and systems
- [group heading] Rooms and systems
> The technical side, worked remotely where it can be measured and on-site where it cannot.

- [price row: Systems & Signal Flow — $100–$150 / hr — small print: plus parts at cost]
> Patchbay design and normalling, custom cabling, gain structure, converters and clocking, and hum or grounding faults traced end to end. Power draw and distribution planned alongside your licensed electrician; the panel is their job.
> Equipment guidance sits here too: what a piece will actually do before you spend, and what you already own that is being wasted.

- [price row: Room & Acoustics — $100–$150 / hr — small print: measurement and written plan]
> Measurement, speaker placement, and a written treatment plan built around the room and budget you have. A whole-room build, treatment through monitoring, is available by arrangement for the right project.

### Group: Teaching
- [price row: Coaching, Tutoring and Lessons — $75–$150 / hr — small print: blocks and packages by arrangement]
> One-on-one on any subject on this page: signal flow, recording, editing, mixing, production judgment, mastering theory, acoustics, electronics, or running your own setup without me.
> Sessions work on your material and your rig. You bring the problem, we work it, and you leave with the next thing to practise.

### Rate panel
`services.ts` [H]+[C]

- [heading] Rates Are a Starting Point, Not a Judgment on the Project.

> Independent budgets are real. Where scope allows, I work on a sliding scale.

- [needs-content note — VERBATIM, both branches] **Confirm rates before publishing** — Carried over and unchanged: mixing, editing/tuning, vocal production, mastering, recording, consultation. Newly proposed and unconfirmed: teaching at $75–150/hr, and the $100–150/hr consulting rate reused for Systems and for Room & acoustics. Whole-room build is by arrangement rather than a listed rate. Also confirm deposit terms, revision policy and what a day rate includes.

> Ask. If the work is interesting and the scope is clear, the number is negotiable.

---

## 8 · STUDIO & GEAR PHILOSOPHY

### Studio page — hero
`studio.ts` [H]+[C]

- [eyebrow] Studio
- [heading] Studio and Technology.
- [deck] The locker and the racks, listed plainly, and the analog front end they run into. The depth is here so the path can change when the source asks for it.

### Studio page — the studio
`studio.ts` [H]+[C]

- [kicker] The studio
- [heading] A Private Studio, by Appointment.

> Not a high-volume facility. One project at a time, so the setup stays built around the work in front of it. Most sessions run remotely; the locker is here when a source needs to be captured properly.

> The point of a deep locker is not the count. It is being able to change the path when the source asks for it.

### Studio page — capability grid
`studio.ts` [H]+[C]

- [01] Recording & overdubs — Vocals, guitars, bass, keys, and percussion.
- [02] Vocal production — Direction, comping, tuning to taste, and chains chosen around the singer.
- [03] Hybrid mixing — Analog where it contributes, digital where recall matters more.
- [04] Production & arrangement — Structure, parts, programming.
- [05] Mastering & delivery — Final tone, level, and release-ready files.
- [06] Technical systems — Signal path, routing, wiring, gain structure, and analog integration.

### Studio page — equipment section framing
`studio.ts` [H]+[C]

- [kicker] Equipment
- [heading] The List.
> Microphones, preamps, equalizers and dynamics, grouped by topology, because that is how they get chosen.

- [photo captions] The locker · Choosing the path · Front end · Kept working

### Studio page — the gear list (verbatim, grouped by fold)
`studio.ts` [H]+[C]. Data-tier copy; editorial asides inside it are worth
keeping (the ribbon gain note, the converter note).

- [fold: Tube large diaphragm condensers] Wunder Audio CM7 GS (K47 capsule, NOS Telefunken 800-series tube, external HV supply) · Telefunken TF51 (in-house CK12 capsule, NOS 6072a, external HV supply)
- [fold: Large & medium diaphragm condensers] Stam U87 Red Badge · Stam U87 Black Badge · Sony C-100 · Audix SCX25A · Earthworks Ethos · Audio-Technica AT4033a (pair), 11 units, 7 models
- [fold: Small diaphragm condensers] Beyerdynamic MC 930 · Shure SM81 · AKG C451e with CK1 · AKG C451b · Electro-Voice RE200 · Peavey PVM 480, 11 units, 6 models
- [fold: Ribbons] Coles 4038 (pair) · Cascade Fat Head II (pair). Highest gain demand in the locker, the 4038 wants 70–80 dB from a quiet preamp, and every ribbon patch point is labelled against phantom power.
- [fold: Dynamic microphones] Sennheiser MD 441-U (2) · Sennheiser 521 Black Fire (2) · Sennheiser BF 509 Black Fire (2) · Electro-Voice RE20 · Electro-Voice PL10 · Electro-Voice N/DYM series (8) · Shure SM7B · Shure Beta 52A · Shure SM57 (7) · Shure SM58 (5) · Telefunken M80 / M80s (5) · Yamaha MZ series (6) · Heil PR 40 · Beyerdynamic M201 · Beyerdynamic M422n(c) (3) · Beyerdynamic X99 · Audix D-series (11) · Peavey PVM (2) · AKG D112 v1 · Audio-Technica ATM25 · sE Electronics V7 · Lewitt MTP 550 DM, 67 units, 41 models
- [fold: Boundary, specialty & measurement] Shure SM91 (PZM) · Beyerdynamic TG D71 · Audix M1255B miniature condensers (3) · Crown GLM-200 · calibrated measurement microphone with REW correction file · Zoom H4n Pro field recorder
- [fold: Preamps, all-valve] Thermionic Culture Rooster 2 (2ch, zero solid-state, Sowter transformers, triode/pentode harmonic switching) · A-Designs MP-2A (2ch, zero-feedback, Cinemag in, EF86 into 6N1-P, switchable 600 Ω/10 kΩ output) · Manley Dual Mono blackface, 1999 (2ch, single-ended Class A, White Cathode Follower output)
- [fold: Preamps, hybrid tube & pentode] Sonic Farm Creamer+ (2ch, EF86 pentode into switchable Cinemag or discrete output) · Pendulum Audio Quartet II · Stam Audio SA-69 (Helios Type 69) · A-Designs Ventura SE
- [fold: Preamps, discrete solid-state] API 3122V (2ch) · Eclair Evil Twin, Jensen mod (2 units) · Wunder Audio PEQ2R · Wunder Audio PEQ2/4R · Chandler Germanium Pre (matched pair on PSU-1 MKII) · Tonelux MP5A in A-Designs 503HR
- [fold: Preamps, DC-coupled & split] Pueblo Audio JR2/2 (2ch, +50 V phantom reserve, shares PS34 with the HJ 482 summing) · NPNG DMP-2NW (2ch) · Undertone Audio MPEQ-1 (matched pair; SEP mode splits preamp and parametric EQ into independent processors)
- [fold: Equalizers] Retro Instruments 2A3 (all-tube passive LC, Pultec EQP-1A3 topology, 40/90 Hz interstage subsonic filter) · Langevin Mini Massive Passive (passive LC, Manley Rapture discrete op-amps, 3-position IRON transformer switch) · Chandler Tone Control EQ (pair, germanium Class A, passive inductor low band, Thick control) · Iron Age Audio Works V2 (bridged-T, all-discrete, 18 frequencies, tracking and mastering modes) · Tonelux Equalux (4-band proportional Q with per-band 1/3-octave peak) · Tonelux Tilt Rack (2 units, 16 channels of reciprocal tilt at 650 Hz) · Furman Punch 10 subharmonic synthesizer
- [fold: Compressors, tube & optical] Retro Instruments 176 (variable-mu, ratio switched via output transformer taps) · Retro Instruments STA-Level Gold (Gates Sta-Level lineage, push-pull vari-mu, 40 dB GR at ≤1% THD) · Retro Instruments Revolver (Altec 436B / EMI RS124 lineage, Dual Threshold) · ADL-1000 (T4B optical, all-tube makeup) · Audioscape DA-3A (2ch optical) · Drawmer 1968 MKII (2ch J-FET with 12AX7 makeup)
- [fold: Compressors, FET, VCA, diode & zener] Mohog Audio MoFET 76 (1176 Rev F, switchable Edcor or Carnhill output) · Wes Audio Beta76 (pair) · dbx 160XT transformer-modded pair (Jensen JT-123-DBX / Cinemag) · dbx 160VU · Audioscape 4000E (SSL 4000E center section, in-house 202C VCAs) · Audioscape G-Comp (SSL G384, THAT VCAs, transformerless) · Audioscape MK-609 (Neve 33609 BA440 diode bridge, NOS parts) · Audioscape D-Comp (EMI TG12413 zener limiter; OUT mode is pure transformer saturation) · Tonelux Dynalux (all-discrete, continuous feedback-to-feed-forward blend, OVER mode)
- [fold: Limiting, de-essing, gating & spectral] Pendulum Audio PL-2 (switchable JFET or MOSFET brickwall, limiter devices out of path below threshold) · dbx 900 rack with two dbx 902 de-essers · Drawmer DS201 dual gate (key filters and Key Listen) · Dolby 740 spectral processors (2)
- [fold: Conversion, summing & monitoring] Dangerous Music AD+ (mastering-grade ADC) · Dangerous Music D-Box+ monitor controller and summing · Lynx Aurora(n) · three-stage summing cascade: Pueblo HJ 482 → Tonelux OTB → API ASM 164 · API Power Wedge 114 balanced power, prioritized to the tube rails. Converters are treated as a critical analog stage; external supplies and clock radiators stay out of the high-gain zone.

---

## 9 · ROOMS & ACOUSTICS

### Studio page — the room
`studio.ts` [H]+[C]

- [kicker] The room
- [heading] The Room Is the First Thing in the Signal Path.

> Every microphone in the locker is listening to a room before it listens to anything else. A room that lies to you costs more than any preamp will fix.

> Work starts with measurement rather than product: what the room actually does, where the speakers should sit, and which problems are worth spending on. Low frequency behaviour and early reflections come first, because they are what makes a mix translate or not.

> The plan gets written to be built, by you, by your contractor, or by us. What the room needs is the same either way, which is what keeps the recommendation honest. Panels here were built rather than bought, so the advice comes from having made the thing.

> Whole rooms are on the table too, from treatment and wiring through power, monitoring and the gear itself. That work starts with remote planning and measurement and ends with us on site.

- [button label] Room and acoustic treatment planning

### Bay 8 build proof (cross-reference)
See THE PERSON / HISTORY — "The Bay 8 room in Miami was one of mine…"

### Rates for rooms (cross-reference)
See SERVICES & RATES — Systems & Signal Flow, Room & Acoustics rows.

### Alt text (story-bearing)
- acoustic-panels ([H]+[C], studio + services): "Two absorption panels part built: mineral wool set into timber frames, one clamped while the glue sets" (services variant: "Absorption panels part built, mineral wool set into timber frames with one clamped while the glue sets")

---

## 10 · THE BOOTH & HUMOR

### Education page — unit 03: the booth
`education.ts` [H]+[C]

- [unit label] The booth
- [heading] The Vocal Booth Is an Instrument Itself.

> The vocal booth is an instrument itself. Small, unfamiliar, intimidating, and you're expected to perform and be documented forever? If you're nervous, the microphone will know. Sometimes a coach can help silence the mental noise giving you the confidence to deliver. And sometimes an inexperienced engineer needs help knowing which way to point the mic. We can help a vocalist prepare ahead of the big day, or if your first day as an assistant is approaching, maybe a tailored lesson about polar patterns and proximity effect might be the assistance you need.

> And don't stress, I had an assistant who improperly plugged in a $15,000 Telefunken Elam 251 tube microphone and the mic zapped him so hard he crashed right thru the walls of the booth. (Tube equipment is very high voltage) Don't worry, the mic wasn't damaged. … Oh, he was checked by a doctor and was fine too. We gave him the rest of the night off.

### Other humor lines living elsewhere (cross-references)
- "just f**king do it. Heard." — services modes (PROCESS & PLANNING).
- "Wondering why the 3rd degree? Well, we're trying to establish the Root." — services unit 01.
- "In order to make a grilled cheese, first you must create the universe." — paraphrasing Carl Sagan, services unit 01.
- The purple-guitar story — DESCRIBING SOUND.
- "…by being their barista a decade earlier." — Work page "Every role" (VALUES).
- Booth alt text: vocal-booth-take — "A vocal booth: a large-diaphragm microphone on a boom with a pop filter and shockmount, fabric-panelled walls, and a vocalist mid-take wearing headphones"

---

## 11 · CREDITS & PROOF

### Work page — hero
`work.ts` [H]+[C]

- [eyebrow] Selected work
- [heading] On Record.
- [deck] Major-label sessions and independent records, across genres. Precise roles where publicly credited.
- [lead photo alt] Edward Lidow at a large-format console with a session running, seen from behind, a band tracking through the control room glass

### Work page — discography section
`work.ts` [H]+[C]

- [kicker] Selected discography
- [heading] Real Records. Real Roles.
> Public role language where available, kept legible instead of exhaustive.

- [filter bar labels] All · Recording · Mix · Engineering · Assistant

### Credit cards data (from `site/src/lib/credits.ts` — identical in both branches)

Role-language rules stated in the file's own comment (authoring guidance, kept
because it encodes how Edward words his roles):
- Assistant Engineer work rotates through: "Assistant Engineer · Editing · Tracking Engineer (various)" / "Assistant Engineer · Editing · Equipment Selection" / "DAW Operator (various) · Studio Assistant" (or Production Assistant). Pop-artist assistant credits also carry "Vocal Tuning (various)" and occasionally "DAW/Tape Operator".
- Mix Assistant work becomes "Mixing Engineer · Editing · Vocal Tuning · Additional DAW Operation".
- Uncredited major-artist work reads "Various Engineering".
- Uncredited independent work reads "Co-Production · Tracking Engineer · Mixing".

**Credited releases (cards):**

| Artist | Title | Year | Role (verbatim) | Notes |
|---|---|---|---|---|
| ArtOfficial | Knives | 2014 | Co-Production · Tracking Engineer · Mixing | independent |
| Blackfoot | Southern Native | 2016 | Tracking Engineer · Recording Engineer · Editing · Co-Production | |
| DJ Khaled | We the Best Forever | 2011 | Assistant Engineer · Editing · Equipment Selection | |
| Katy Perry | Teenage Dream | 2010 | Assistant Engineer · Editing · Vocal Tuning (various) · DAW/Tape Operator | |
| Kevin Rudolf | In the City | 2008 | Mixing Engineer · Editing · Vocal Tuning · Additional DAW Operation | |
| Lil Mama | VYP, Voice of the Young People | 2008 | Studio Assistant · Tracking Engineer (various) · Mixing Engineer (various) | |
| Lil Wayne | Tha Carter III | 2008 | Assistant Engineer · Editing · Tracking Engineer (various) · Vocal Tracking (various) · Editing · Mixing Assistant · Touring Engineer (various) | |
| Lil Wayne | Tha Carter IV | 2011 | Engineer · Editing · Tracking Engineer (various) · Vocal Tracking (various) · Editing · Mixing Assistant · Touring Engineer (various) | |
| Lil Wayne | Rebirth | 2010 | Engineer · Editing · Tracking Engineer (various) · Vocal Tracking (various) · Editing · Mixing Assistant · Touring Engineer (various) · Guitar/Drum Studio Tech · Consulting · Recording Engineer | |
| Louis DeFelice | Tin Stars | 2017 | Co-Production · Tracking Engineer · Mixing Engineer · Mastering Engineer | independent |
| Luis Fonsi | Palabras del Silencio | 2008 | DAW Operator (various) · Production Assistant | |
| Mario | D.N.A. | 2009 | Mixing Engineer | |
| ¡MAYDAY! | Believers | 2013 | Engineer · Recording | |
| Nicki Minaj | Pink Friday | 2010 | Assistant Engineer · Editing · Vocal Tuning (various) | see needs-content warning below |
| Rachel Goodrich | Baby, Now We're Even | 2014 | Co-Production · Tracking Engineer · Mixing Engineer · Mastering Engineer | independent |
| Rich Gang | Rich Gang | 2013 | Engineer · Recording Engineer on selected tracks | |
| Willie Nelson | Band of Brothers | 2014 | Assistant Engineer · Editing · Equipment Selection | |
| Young Money | We Are Young Money | 2009 | Assistant Engineer · Editing · Tracking Engineer (various) | |

- [needs-content note, work.ts, both branches — VERBATIM] **Credits to confirm** — Every card above except *Pink Friday* is matched to a public Discogs credit. The *Nicki Minaj · Pink Friday* entry is not currently listed under any of Edward's credit spellings, confirm the release and exact role, or remove the card.

**Roster work without a public credit** (role "Various Engineering" unless noted):
Alter Bridge, Bob Dylan, Busta Rhymes, Cat Power, Chris Cornell, Coldplay, Cool & Dre, Damian Marley, Danja, Diddy, Dr. Dre, Drake, Dwayne "The Rock" Johnson, DVLP, Eminem, Enrique Iglesias, Fat Joe, Iggy Pop, Jamie Foxx, Jay Sean, Jet, Jonas Brothers, Justin Bieber, Justin Timberlake, Keri Hilson, Keyshia Cole, Lenny Kravitz, Lupe Fiasco, Lynyrd Skynyrd, Madonna, Maná, Mary J. Blige, Missy Elliott, Nelly, Paris Hilton, Pharrell, Pitbull, Redman, Rick Ross, Ricky Martin, Ricky Medlocke, Timbaland, Travis Barker, Tyga, Yeah Yeah Yeahs, YMCMB, Yung Berg.
Exceptions:
- Charred Walls of the Damned — Co-Production · Tracking Engineer · Mixing (independent)
- Gym Class Heroes — Tracking Engineer · Co-Production · Additional Instrumentation (various)
- RG Royal Sound Orchestra — Co-Production · Mixing (independent)
- The Jean Marie — Co-Producer · Engineer · Co-Writer · Mix Engineer · Mastering Assistant (independent)

**Media & brands (kept out of the artist ribbon and index):** American Idol, The Simpsons, Spotify.

### Work page — credit note and links
`work.ts` [H]+[C]

> Additional catalog includes *Rebirth*, *No Ceilings*, *I Am Not a Human Being*, *Rise of an Empire*, *Pricele$$*, *The Elephant in the Room*, and other releases. Public credits also appear under Edward "Jewfro" Lidow, Edward Lidow, Ed Lidow, and Edward Lido.

- [link labels] AllMusic credits · Discogs profile
- [alt] credits-wayne: "Edward Lidow with Lil Wayne in the control room"

### Work page — award plaques
`work.ts` [H]+[C]

- [caption] Willie Nelson, *Band of Brothers*, Billboard #1 Top Country Albums
- [caption] Katy Perry, *Last Friday Night (T.G.I.F.)*, RIAA 6× platinum
- [caption] Katy Perry, *Teenage Dream*, RIAA 8× platinum
- [caption] Nicki Minaj, *Pink Friday*, RIAA 3× platinum
- [caption] Lil Wayne, *Rebirth*, RIAA gold

### Work page — artists & clients section
`work.ts` [H]+[C]

- [kicker] Selected artists & clients
- [heading] Range Is Part of the Work.
> A partial list. Roles vary by artist and session.

- [needs-content note — VERBATIM, both branches] **Artist list needs vetting** — This roster is broad and largely unverifiable from public credits. Before publishing, mark each name with the actual involvement (session attended, assisted, engineered, mixed) and delete any that can't be substantiated, an inflated list undercuts the verified credits above.

- [kicker] Media & brands

### Work page — studios & institutions
`work.ts` [H]+[C]

- [kicker] Studios & institutions
- [heading] Built in Real Studios.
> Rooms worked in, taught in, and in one case built from scratch.

- [index entries] Hit Factory / Criteria Miami · Bay 8 Miami · original room, built and sold · Record Plant Los Angeles · Chicago Recording Company · Dream Asylum · Studio 8 Miami · The Jam Room · Columbia · Midlands Audio Institute · Midlands Technical College · Miami Historical Museum · WoG Ministries

---

## 12 · CONTACT & INTAKE LANGUAGE

### Contact page — hero
`contact.ts` — identical in both branches.

- [eyebrow] Start a project
- [heading] Tell Me What You're Working On.
- [deck] A record, a voice, a mix, a room, or learning to do it yourself. You don't need to know which one it is, or what it's called.

### Contact page — sidebar
- [kicker] Upper Level Music
- [heading] Start with the problem, not the booking language.

> A rough mix, a voice memo, a photo of the room, or a few sentences is plenty. The questions below just give me enough to answer properly instead of guessing.

- [direct block] edwardlidow@upperlevelmusic.com — Columbia, South Carolina — By appointment · Remote work available

> [aside note] Not a project? Questions, press, or just talking shop, the same address works.

- [needs-content note — VERBATIM] **Details needed** — Add a phone or text number, response time, and social links.

### Contact page — form copy
- [field label] Name *
- [field label] Email *
- [field label] What type of service or services are you interested in? *
  - [placeholder] In your own words. You do not need to know the trade term for it.
- [checkbox label] I'm in the middle of a project and need expedited assistance.
- [field label] If so, what is the situation, and what have you already tried?
  - [placeholder] What is happening, when you need it by, and what you have already ruled out.
- [expedited terms — VERBATIM] Marked messages notify me directly and I will get back to you shortly. Expedited troubleshooting carries an additional fee, which is credited back against your next completed project by appointment.
- [field label] If you have a link to something you'd like us to look at or hear, please provide it here
  - [placeholder] Drive, Dropbox, WeTransfer, a private streaming link, a photo of the room
- [fieldset legend] When we begin, what is your preferred style of working together?
  - [choice] Hire an engineer to edit, mix, or master something for you.
  - [choice] Link up over video and work through the issue together.
  - [choice] Training or education on a particular subject, or one-on-one instruction in the field of your choice.
- [field label] Any additional questions, comments, concerns, or criticisms?
  - [placeholder] All of it is welcome, including the criticisms.
- [submit button] Send it
- [form close — VERBATIM] Thank you for taking the time. This goes straight to me, and replies come back to the address you entered. Feel free to email me directly with anything additional, and I will do my best to promptly respond to any topic of interest we may have missed.

### CTA blocks across pages (recurring intake language)

- [about.ts, [H]+[C], CTA] **Tell Me What You're Working On.** — "A rough, a reference, a photo of the room, or a few sentences is enough." — [button] Start a project
- [workbench.ts, [H] only, CTA] **The Bench Is Open.** — "If a tool told you something is wrong in your room and you want a second set of ears on it, send it over — the recording, the question, the photo of the back of the rack. It comes to me, Edward, and I answer everything." — [button] Send Me The Song — [alt line] Or keep using the tools — they stay free either way.
- [workbench.ts, [H] only, under hum tool] "Stuck between two branches, or the tree ended without your answer? Send a ten-second phone recording of the noise. A question with no project attached is a normal use of this site."

---

## 13 · TERMS & SMALL PRINT

- [contact.ts, both branches] Expedited fee: "Expedited troubleshooting carries an additional fee, which is credited back against your next completed project by appointment."
- [contact.ts] By appointment · Remote work available
- [services.ts, both branches] Price small prints (verbatim, per row): remote or by appointment · typical independent range · based on scope (×2) · release packages quoted · day rates from $500 · personalized quote · multi-stage scope · plus parts at cost · measurement and written plan · blocks and packages by arrangement
- [services.ts, needs-content] "Also confirm deposit terms, revision policy and what a day rate includes." (full note under SERVICES & RATES)
- [services.ts] Sliding scale: "Independent budgets are real. Where scope allows, I work on a sliding scale." / "Ask. If the work is interesting and the scope is clear, the number is negotiable."
- [workbench.ts, [H] only] "free to use, nothing collected" / "Nothing here is sponsored, and nothing here is trying to sell you the next purchase."
- [workbench.ts, [H] only, sheet footer] Workbench · Rev. 2026-08-17 — Maintained by Edward Lidow

---

## 14 · WORKBENCH & TOOLS

`workbench.ts` [H] only (page does not exist in [C]).
⚠ provenance: file header comment — "All copy is draft in Edward's direction,
pending his veto pass; the hum tree's diagnoses are adapted from his Wiring
Bible §13 and carry a draft stamp until he has bench-checked the phrasing."

### Hero
- [eyebrow] ULM · The Workbench
- [heading] Tools, Not Content.
- [deck] Working instruments from this studio's own paperwork, free to use, nothing collected. The math runs in your browser, and the answers are the same ones used in this room.
- [deck, second] Nothing here is sponsored, and nothing here is trying to sell you the next purchase. Where the physics runs out, the tool says so — because past that line, the answer isn't a calculation. It's a session.

### ULM001 — Impedance & gain
- [unit label] ULM001 · Impedance & gain · engine: Studio Virtual
- [heading] Will That Mic Like That Preamp?

> Every microphone meets every preamp at a junction, and the junction has an opinion. A preamp that loads a microphone's frequency-dependent impedance differently at different frequencies is applying an EQ curve before the signal reaches the gain stage — before you have touched a single knob. Most of the time the bridge is generous and nothing happens. Sometimes it rolls off the top, damps the transients, or starves a ribbon right at its resonance.

> Pick a pairing. The tool reports the bridging ratio, what it does to the sound, and whether the preamp has the gain the mic actually asks for. The microphones and preamps are the ones racked in this studio, plus a typical interface channel so you can test the room you are actually in.

- [margin note] Ratios under 10:1 start to color. Under 3:1 they start to load. Ribbons are checked at their resonance peak, not their nominal number — that is where they get hurt.
- [margin note] Gain demand assumes a quiet source. Loud sources forgive; whispers don't.
- [tool labels] Microphone · Preamp
- [tool foot] The numbers are physics and they are dependable. Which coloration the song wants doesn't compute. That part is the session.

### ULM007 — Find the hum
- [unit label] ULM007 · Find the hum · draft · pending bench check
- [heading] Find The Hum.

> Every room has one eventually. The internet's answer is a page of eleven possible causes, which is the same as no answer. A bench doesn't work that way: it listens first, tests second, and each test rules half the world out. This is that walk, the one this studio's own troubleshooting guide runs — no gear to buy at the end of it.

- [under the tool] Stuck between two branches, or the tree ended without your answer? Send a ten-second phone recording of the noise. A question with no project attached is a normal use of this site.

### The catalogue
- [unit label] index · The catalogue · few and finished
- [heading] The Rest Of The Bench.
- [row: The Gap → essay] How the handoff between the industry and the home studio broke, and the patch around the interruption.
- [row: Describing Sound → essay] You don't need the technical words. Sound is described in borrowed ones, and translating them is the job.
- [row: A Chance To Be Heard → essay] Why every project here starts with a conversation instead of a microphone.
- [router note] On the bench next: where noise becomes permanent (the conversion boundary), and seven ways to turn it down (compression as circuit and emotion). Entries publish when they are finished, not on a schedule.

### CTA
See CONTACT & INTAKE LANGUAGE — "The Bench Is Open."

---

## 15 · NAVIGATION, NEXT-CARDS & CTAs

Page-to-page connective copy. Short, but his tone lives in it.

**about.ts [H]+[C] → /services:** [kicker] Next — [heading] How the work actually goes. — "Why a project starts with questions, how it runs, and what each part costs." — [cta] "Or skip ahead and tell me what you are working on." — [button] Start a project

**services.ts [H]+[C] → /work:** [kicker] Next — [heading] Records this has already been done on. — "Exact roles, major-label and independent, across genres. The proof that the method is not theoretical." — [cta] "Or start now, with any topic, any questions, thoughts or files." — [button] Talk about the project

**work.ts [H]+[C] → /education:** [kicker] Next — [heading] What all of it taught. — "The training that produced these roles is gone as a career path. This is where it gets handed over instead." — [cta] "Or bring the record you are trying to finish." — [button] Start a project

**education.ts [H]+[C] → /studio:** [kicker] Next — [heading] The room it gets taught in. — "The locker, the racks and the analog front end, and why the depth is there rather than what it adds up to." — [cta] "Or bring the problem you are actually stuck on." — [button] Start a project

**studio.ts [H]+[C] → /work:** [kicker] Next — [heading] What has been made with it. — "Exact roles across major-label and independent records. The gear is only evidence; this is the work." — [cta] "Or describe the room or system you are fighting with." — [button] Start a project

**the-gap.ts [H] → /education:** [kicker] Next — [heading] Where the passing-on happens. — "One-on-one, pitched at your project, not a curriculum's idea of it." — [cta] "Or bring the record the gap has been holding back." — [button] Work With Us Now

**pre-production.ts [H] → /services:** [kicker] Back to — [heading] How the work goes, and what it costs. — "The planning, the three ways to work, and the rates." — [cta] "Or just answer the first question now." — [button] Start the conversation

**describing-sound.ts [H] → /services:** [kicker] Back to — [heading] How the work goes, and what it costs. — "The planning, the three ways to work, and the rates." — [cta] "Or describe the sound in your own words, right now." — [button] Start the conversation

---

## 16 · MISC / UNPLACED

### News page
`news.ts` — identical in both branches.

- [eyebrow] News
- [heading] Notes from the Sessions.
- [deck] Studio updates, releases, and short essays on making records.
- [kicker] Coming soon
- [heading] The First Posts Are on the Way.

> This will become a running log, project news, gear and technique write-ups, and thoughts on where the industry is heading.

- [needs-content note — VERBATIM] **Content needed** — Decide post cadence and the first three topics. A simple post list and article pages can be wired up whenever you're ready.

### About page — [C]-only accordion 04 slot
`about.ts` [C] only. In [H] this item is parked (removed) with a source
comment explaining why; [H] replaced the slot with the "Our values" and
"Remote work" folds (see VALUES).

- [accordion number] 04
- [accordion title] What Comes Next
- [accordion summary] Resources, education, insights.
- [needs-content note — VERBATIM] **Sections still to come** — Resources (equipment, space, and what can be done with them) will replace the rooms list. An education component, a recurring insight series with audio and video, and a mailing list are all planned and not yet built.

### Education photo-band difference between branches
- [H]: drums-overhead-wide — alt "A drum kit seen from directly above, miked and ready in the live room"
- [C]: mastering-list — alt "A session screen listing finished song titles"

### Classroom photo (education + services)
- [alt] "A teaching room: projector screen showing a first-class questionnaire, whiteboard, keyboard, drum pads and a laptop on the table" (services variant: "A teaching room set up with a projector screen, whiteboard, keyboard and drum pads")

---

## APPENDIX — Complete branch-difference ledger

Verified by `git diff origin/claude/upperlevelmusic-review-hod2rl -- site/src/lib/pages/`:

1. **contact.ts, news.ts, credits.ts** — byte-identical in both branches.
2. **about.ts** — [C] has accordion item 04 "What Comes Next" (needs-content only); [H] parks it and adds the "Our values" + "Remote work" folds. All other copy identical.
3. **education.ts** — photo-band image/alt differs ([H] drums-overhead-wide vs [C] mastering-list). All copy identical.
4. **services.ts** — the two planning-pair boxes differ entirely (both versions quoted in PROCESS & PLANNING); [C] adds the line "A production line never misses a beat. That's what's wrong with it."; [H] adds the "See a sample Q&A" / "…is described in borrowed words" links. All other copy identical, including every price.
5. **studio.ts** — [C] has a stray duplicated `<section>` open tag; no copy difference.
6. **work.ts** — [H] adds the "Every role" proof unit (four paragraphs + ribbon); [C] lacks it. Minor markup difference at the "Media & brands" kicker. All other copy identical.
7. **[H]-only pages** (no [C] counterpart): describing-sound.ts, pre-production.ts, the-gap.ts, workbench.ts.
8. **Skipped in both branches per instructions:** index.ts, hierarchy-options.ts, doors-draft.ts.

**Provenance flags to respect when recomposing:**
- the-gap.ts: ALL copy draft in Edward's voice, pending his veto pass.
- pre-production.ts: Q&A items are a synthesized placeholder sample; intro prose from Edward (16 Aug).
- workbench.ts: all copy draft in Edward's direction, pending veto; hum-tree diagnoses adapted from his Wiring Bible §13, pending bench check.
- describing-sound.ts: Edward's copy (16 Aug), mechanically cleaned.
- Rates: the needs-content blocks flag teaching ($75–150/hr) and the reuse of the $100–150/hr consulting rate for Systems and Room & acoustics as newly proposed and UNCONFIRMED; deposit terms, revision policy and day-rate contents unconfirmed.
- Credits: Nicki Minaj *Pink Friday* unverified against public credits; artist roster needs per-name vetting before publishing.
