// FRONT DRAFT — the homepage restructured as one instrument (2026-08-28).
// Working surface: unlisted, noindex, reviewed on the preview URL. The real
// homepage (index.ts) is untouched; this page exists so the visual narrative
// can be judged before any words are settled.
//
// Structure: sheet hero carrying the era thesis → the patch bar (divider,
// thesis-in-motion, and the click-through to the full account) → the
// patchbay (identity presets one side, the five doors the other; arming
// presets re-describes the doors and draws converging cables) → proof floor
// → start CTA. Copy status: Edward's verbatim lines wherever one exists;
// connective sentences are DRAFT scaffold delivered for veto as a numbered
// list. Draft controls (type variants A/B/C, bank side L/R) are part of the
// working surface, not the design.
export default `
<div class="fd-page" data-fd data-font="a" data-side="left">

<div class="fd-controls" aria-label="Draft controls">
  <span class="fd-ctl-k">Draft controls</span>
  <span class="fd-ctl-group">Type
    <button type="button" data-fd-font="a" class="on">A</button>
    <button type="button" data-fd-font="b">B</button>
    <button type="button" data-fd-font="c">C</button>
  </span>
</div>

<section class="fd-hero">
  <div class="wrap">
    <div class="hero-sheet">
      <div class="sheet-row"><span>ULM &middot; Session Sheet</span><span>Est. 2012</span><span>Rev. 2026-08-28 &middot; FRONT DRAFT</span></div>
      <div class="sheet-row sheet-what"><span>Mixing &middot; Production &middot; Systems &middot; Teaching</span><span>Anyone, Anywhere</span><span>Remote &middot; Columbia SC</span></div>
      <div class="sheet-body fd-sheet-split">
        <div class="fd-sheet-copy">
          <h1 class="display fd-title"><span class="ln"><span>The Tools Reached Everyone.</span></span><span class="ln"><span><em>The Knowledge Didn&rsquo;t.</em></span></span></h1>
          <div class="fd-thesis">
            <p>For most of a century the console lived behind soundlocked doors, and the rooms behind them decided who learned the trade. Knowledge flowed the way signal moves through a patchbay &mdash; <em>normalled</em>, engineer to assistant to the intern holding the coffee. The rooms were the schools.</p>
            <p>Then the tools got small and cheap and went home with everyone. That part was good. But the console in the palm of your hand did not come with the knowledge, and the trade split into what feel like separate worlds &mdash; the studio, the home rig, the classroom, the venue. Colleagues, separated by a gap neither of them made.</p>
            <p class="fd-turn">The walls are gone. The sorting is leftover. What you need was never decided by which room you were standing in.</p>
          </div>
          <div class="fd-mission">
            <p class="fd-mission-line display">Control Belongs to the Person Making the Art.</p>
            <p class="fd-mission-sub">Major-label quality and talent for anyone, anywhere, without the overhead.</p>
          </div>
        </div>
        <figure class="fd-exhibit">
          <img src="{{IMG:ed-at-the-console}}" alt="Edward Lidow at a large-format console mid-session, working at the screen, an engineer beside him, the control room lit by the desk" loading="eager" />
          <figcaption>A large-format room, mid-session.</figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="fd-patchbar-band">
  <div class="wrap">
    <a class="fd-patchbar reveal" href="/the-gap" aria-label="The whole account: how the handoff broke, and the patch around the interruption">
      <svg viewBox="0 0 720 84" role="img" aria-hidden="true">
        <path class="gd-flow fd-pb-flow" d="M30 44 H300" pathLength="1"/>
        <path class="gd-break fd-pb-break" d="M324 32 L348 56 M348 32 L324 56"/>
        <path class="gd-faint" d="M372 44 H690"/>
        <path class="gd-patch fd-pb-patch" d="M240 40 C 300 -18, 420 -18, 480 40" pathLength="1"/>
        <path class="gd-flow fd-pb-patched" d="M480 44 H690" pathLength="1"/>
        <circle class="gd-node" cx="30" cy="44" r="8"/>
        <circle class="gd-node" cx="240" cy="44" r="8"/>
        <circle class="gd-node" cx="480" cy="44" r="8"/>
        <circle class="gd-node" cx="690" cy="44" r="8"/>
      </svg>
      <span class="fd-patchbar-foot">
        <span class="fd-patchbar-cap">How the handoff between the industry and the home studio broke, and the patch around the interruption.</span>
        <span class="fd-patchbar-k">The Whole Account &rarr;</span>
      </span>
    </a>
  </div>
</section>

<section class="rack-unit doors-unit">
  <div class="wrap">
    <div class="unit-label reveal"><span class="unit-no">01</span><span>The five doors</span><span class="unit-note">every path ends at one of these</span></div>
    <h2 class="unit-title">Choose Any Door.</h2>
  </div>
  <div class="wrap doors-stack">
{{DOORS}}
  </div>
  <div class="wrap router-note">
    <p>Not sure which? That is a normal place to start. <a href="/start">Describe the problem in your own words</a> and we will work out what it is. Whichever one it is, everything starts the same way: Edward reviews it and scopes it before any work or price is agreed.</p>
  </div>
</section>

<section class="rack-unit unit-soft fd-walkedin">
  <div class="wrap">
    <div class="unit-label reveal"><span class="unit-no">02</span><span>Whoever walked in</span></div>
    <h2 class="unit-title">Doors, Not Departments.</h2>
    <div class="unit-prose">
      <p>Some of you walked in holding a record: the artist carrying a dozen jobs nobody asked for, the home engineer already charging for the work, the student looking for the apprenticeship that no longer exists. Some of you walked in holding a room: the studio owner with a fault that will not show itself, the audiophile whose playback never matched the record, the venue, the sanctuary that is part concert hall, part broadcast studio, part classroom. And some of you walked in holding a deliverable &mdash; the podcast, the voiceover, the space that has to sound right.</p>
      <p>Different hats &mdash; not different worlds. The requests change with the hat, not the person, and every one of them comes down the same five doors: something to finish, something to fix, something to learn, something to hear with honest ears, something you can only say in your own words. That last one counts double here: you never need the vocabulary to start.</p>
      <p class="unit-turn">You could be three of these in the same week. The doors route the problem, not the title.</p>
    </div>
  </div>
</section>

<section class="rack-unit fd-ways">
  <div class="wrap">
    <div class="unit-label reveal"><span class="unit-no">03</span><span>Two ways in</span></div>
    <div class="fd-ways-grid reveal">
      <a class="fd-way" href="/start">
        <span class="fd-colmark">Now</span>
        <h3 class="display">Find The Service. Make Contact.</h3>
        <p>Describe the project or the problem in your own words. Edward reads it himself, and scopes it before any work or price is agreed.</p>
        <span class="btn primary">Start here</span>
      </a>
      <a class="fd-way" href="/app">
        <span class="fd-colmark">Alongside</span>
        <h3 class="display">Take The Depth With You.</h3>
        <p>The ULM app: working instruments, the teaching, and the deep dives &mdash; free to start, honest about its limits. In development; the first instrument already works.</p>
        <span class="btn">See the app</span>
      </a>
    </div>
  </div>
</section>

<section class="rack-unit proof-strip">
  <div class="wrap">
    <div class="unit-label reveal"><span class="unit-no">02</span><span>On record</span></div>
    <h2 class="unit-title">Real Records. Real Roles.</h2>
    <p class="unit-lede">Major-label sessions and independent records, across genres. Precise roles where publicly credited.</p>
  </div>
  <div class="ribbon-strip"><div class="ribbon-track">{{RIBBON}}</div></div>
  <div class="wrap proof-actions reveal"><a class="btn" href="/proof">See the full record</a></div>
</section>

<section class="cta-section">
  <div class="wrap cta-inner">
    <div class="reveal"><h2>Tell Me What You&rsquo;re Working On.</h2><p>A rough, a reference, a photo of the room, or a few sentences is enough.</p></div>
    <a class="btn primary reveal" href="/start">Start here</a>
  </div>
</section>

<div class="sheet-rev"><div class="wrap"><span>Front Draft &middot; Rev. 2026-08-28</span><span>Working surface &middot; not linked from navigation</span></div></div>

</div>
`;
