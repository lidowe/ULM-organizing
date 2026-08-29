// THE APP — working preview (/app), 2026-08-28. The companion the front
// page's second call to action points at. Per docs/research/APP-STUDY.md:
// the free tier is the open hand, the subscription is the apprenticeship,
// and every tool states its own limits ("physics describes; ears decide").
//
// COPY STATUS: draft scaffold for Edward's veto. The working name ("The
// ULM Workbench") is explicitly his to replace. No prices appear — rates
// law. The one working instrument (Room Mode Explorer) uses textbook
// axial-mode arithmetic (f = n*c/2d, c = 343 m/s), verified by hand;
// everything requiring Edward's bench check ships only after he checks it.
export default `
<section class="page-hero"><div class="wrap">
  <div class="eyebrow">ULM &middot; The App</div>
  <h1 class="page-title">The Workbench, In Your Pocket.</h1>
  <p class="page-deck">Working instruments, the teaching, and the deep dives &mdash; built to be honest about what a phone can and cannot measure. Free to start.</p>
  <p class="page-deck page-deck-second">In development. This page is the working preview, and the first instrument below already works.</p>
</div></section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label reveal"><span class="unit-no">01</span><span>The open hand</span></div>
    <h2 class="unit-title">Free, And Actually Useful.</h2>
    <p class="unit-lede">The knowledge used to be handed down in rooms. This is the hand, open. Every instrument states its own limits, because a tool that flatters you is a tool that lies.</p>
    <ul class="covers-list reveal">
      <li>{{ICON:room-reflection:md}}<span>The Room Mode Explorer &mdash; working, below</span></li>
      <li>{{ICON:patchbay:md}}<span>The signal-chain advisor, rebuilt from this studio&rsquo;s own wiring bible &mdash; after the bench check</span></li>
      <li>{{ICON:ground-loop:md}}<span>The hum walk, question by question &mdash; after the bench check</span></li>
      <li>{{ICON:translation:md}}<span>Describing Sound: borrowed words, translated to mechanisms</span></li>
      <li>{{ICON:headphones:md}}<span>One complete lesson thread, free, start to finish</span></li>
    </ul>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label reveal"><span class="unit-no">02</span><span>ULM011 &middot; Room modes &middot; working</span></div>
    <h2 class="unit-title">What Notes Does Your Room Play?</h2>
    <div class="unit-prose">
      <p>Every room reinforces some low notes and swallows others, decided by nothing but its dimensions &mdash; the room resonates between its parallel surfaces the way a string resonates between its ends. Type your room. These are the frequencies it argues about.</p>
    </div>
    <div class="tool rm" data-room-modes></div>
    <div class="tool-under"><p>Axial modes only &mdash; the strongest family; tangential and oblique modes exist too, and are weaker. A furnished, occupied room is measured, not computed: the numbers here are the argument&rsquo;s starting positions, not its outcome.</p></div>
  </div>
</section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label reveal"><span class="unit-no">03</span><span>The apprenticeship</span></div>
    <h2 class="unit-title">The Deep End, By Subscription.</h2>
    <div class="unit-prose">
      <p>For the ones who want the why, on a cadence: lesson paths pitched at where you actually are, with practice that follows you. Deep solvers for the problems the free tools only name &mdash; wiring and grounding worked step by step, acoustic treatment planned against your real room with graphics a website cannot carry, measurement workflows built for a calibrated microphone.</p>
      <p>And a line that knows when to stop being an app: when your problem crosses from the general to the particular, it routes to a person.</p>
      <p class="unit-turn">Pricing unconfirmed &mdash; set when it ships, said out loud when it is.</p>
    </div>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label reveal"><span class="unit-no">04</span><span>Where the calculation ends</span></div>
    <div class="unit-prose">
      <p>Every instrument here draws the same line: the numbers are physics and they are dependable, and past a certain point the answer isn&rsquo;t a calculation. It&rsquo;s a session.</p>
    </div>
    <p class="gap-more reveal"><a class="btn primary" href="/start">Bring the particular</a></p>
  </div>
</section>

<section class="rack-unit unit-soft fd-install">
  <div class="wrap">
    <div class="unit-label reveal"><span class="unit-no">05</span><span>Put it in your pocket</span></div>
    <div class="unit-prose">
      <p>On a phone, this page installs: <strong>Share &rarr; Add to Home Screen</strong>. It opens full-screen like any app, and the instruments keep working with no signal.</p>
    </div>
  </div>
</section>

<div class="sheet-rev"><div class="wrap"><span>The App &middot; Working Preview &middot; Rev. 2026-08-28</span><span>Name and copy are draft &middot; not linked from navigation</span></div></div>
`;
