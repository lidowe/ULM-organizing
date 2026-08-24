// Door 2 — Fix An Issue. The diagnosis door: symptom-first, on the
// visitor's session and rig. The physics scenes narrate mechanisms
// ("state what happens, offer the ear test, never forecast the verdict");
// the room-modes scene closes with a diagnosis, which is why it lives here.
export default `
<section class="page-hero door-hero"><div class="wrap">
  {{DOOR_MARK:fix}}
  <div class="eyebrow">Door 02 &middot; The diagnosis door</div>
  <h1 class="page-title">Fix An Issue.</h1>
  <p class="page-deck">Something specific is wrong and you can hear it. Diagnosis comes before any recommendation, and it is the cheapest thing on this page.</p>
</div></section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">01</span><span>What this covers</span></div>
    <h2 class="unit-title">Work It Together.</h2>
    <p class="unit-lede">When you need help with a specific aspect inside a larger scope, we&rsquo;ll work it out together, on your session and in your room. We&rsquo;ve got you.</p>
    <ul class="covers-list reveal">
      <li>{{ICON:console-desk:md}}<span>A mix that will not sit, worked through on your session, in your DAW</span></li>
      <li>{{ICON:room-reflection:md}}<span>A room that lies to you: measurement, treatment plan, speaker placement</span></li>
      <li>{{ICON:phase-break:md}}<span>A signal path with a fault you cannot isolate, traced end to end</span></li>
      <li>{{ICON:gain-staging:md}}<span>Gain structure, impedance, converters and clocking on your actual rig</span></li>
      <li>{{ICON:patchbay:md}}<span>Templates, routing and recall built around how you already work</span></li>
      <li>{{ICON:monitor-pair:md}}<span>A home playback system that never matched the record</span></li>
      <li>{{ICON:mic-condenser:md}}<span>Vocal chain and tracking setup dialed in with you on the session</span></li>
    </ul>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">02</span><span>Rooms that lie</span></div>
    <h2 class="unit-title">The Room Is the First Thing in the Signal Path.</h2>
    <div class="unit-prose">
      <p>Every microphone in the locker is listening to a room before it listens to anything else. A room that lies to you costs more than any preamp will fix.</p>
      <p>Work starts with measurement rather than product: what the room actually does, where the speakers should sit, and which problems are worth spending on. Low frequency behaviour and early reflections come first, because they are what makes a mix translate or not.</p>
    </div>
    <figure class="scene reveal">
      {{ANIM:room-modes}}
    </figure>
    <div class="unit-prose">
      <p>The plan gets written to be built, by you, by your contractor, or by us. What the room needs is the same either way, which is what keeps the recommendation honest. Panels here were built rather than bought, so the advice comes from having made the thing.</p>
      <p>Whole rooms are on the table too, from treatment and wiring through power, monitoring and the gear itself. That work starts with remote planning and measurement and ends with us on site.</p>
    </div>
    <figure class="scene reveal">
      {{ANIM:reverb-decay}}
    </figure>
  </div>
</section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">03</span><span>Hums, buzzes and grounds</span></div>
    <h2 class="unit-title">The Fault Gets Traced, Not Guessed At.</h2>
    <div class="unit-prose">
      <p>Patchbay design and normalling, custom cabling, gain structure, converters and clocking, and hum or grounding faults traced end to end. Power draw and distribution planned alongside your licensed electrician; the panel is their job.</p>
      <p>Equipment guidance sits here too: what a piece will actually do before you spend, and what you already own that is being wasted.</p>
      <p>Every room has one eventually. The internet&rsquo;s answer is a page of eleven possible causes, which is the same as no answer. A bench doesn&rsquo;t work that way: it listens first, tests second, and each test rules half the world out. This is that walk, the one this studio&rsquo;s own troubleshooting guide runs &mdash; no gear to buy at the end of it.</p>
    </div>
    <div class="tool hum" data-hum-tree></div>
    <div class="tool-under"><p>Stuck between two branches, or the tree ended without your answer? Send a ten-second phone recording of the noise. A question with no project attached is a normal use of this site.</p></div>
    <figure class="scene reveal">
      {{ANIM:shield-current}}
    </figure>
    <figure class="lead-photo reveal">
      <img src="{{IMG:bench-tech-repair}}" alt="A circuit board mid-repair on the tech bench" loading="lazy" />
      <figcaption>The bench where it gets traced.</figcaption>
    </figure>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">04</span><span>What each part costs</span></div>
    <h2 class="unit-title">The Work, and What It Runs.</h2>
  </div>
  <div class="wrap services-stack">
    <article class="service-row reveal" id="diagnosis"><h2>Diagnosis, Strategy and Planning</h2><div class="service-copy"><p>A mix that will not sit, a session that keeps stalling, a record that is not becoming what it was meant to be. We work out what is causing it before deciding what to do about it.</p></div><div class="service-price">$100&ndash;$150 / hr<small>remote or by appointment</small></div></article>
    <article class="service-row reveal" id="systems"><h2>Systems &amp; Signal Flow</h2><div class="service-copy"><p>Patchbays, cabling, gain structure, clocking, grounding faults. Worked remotely where it can be measured and on-site where it cannot.</p></div><div class="service-price">$100&ndash;$150 / hr<small>plus parts at cost</small></div></article>
    <article class="service-row reveal" id="acoustics"><h2>Room &amp; Acoustics</h2><div class="service-copy"><img class="row-thumb" src="{{IMG:acoustic-panels}}" alt="Absorption panels part built, mineral wool set into timber frames with one clamped while the glue sets" loading="lazy" /><p>Measurement, speaker placement, and a written treatment plan built around the room and budget you have. A whole-room build, treatment through monitoring, is available by arrangement for the right project.</p></div><div class="service-price">$100&ndash;$150 / hr<small>measurement and written plan</small></div></article>
    <div class="rate-panel reveal"><h2>Rates Are a Starting Point, Not a Judgment on the Project.</h2><div><p>Independent budgets are real. Where scope allows, I work on a sliding scale.</p><div class="needs-content"><strong>Confirm rates before publishing</strong>The $100&ndash;150/hr consulting rate reused for Systems and for Room &amp; acoustics is newly proposed and unconfirmed. Whole-room build stays by arrangement rather than a listed rate.</div><p>Ask. If the work is interesting and the scope is clear, the number is negotiable.</p></div></div>
  </div>
</section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">05</span><span>The other doors</span></div>
    {{DOOR_RAIL}}
  </div>
</section>

<section class="cta-section">
  <div class="wrap cta-inner">
    <div class="reveal"><h2>Describe the Room or System You Are Fighting With.</h2><p>What is happening, when it started, and what you have already ruled out. A ten-second phone recording of the noise is a normal thing to send.</p></div>
    <a class="btn primary reveal" href="/start">Describe the problem</a>
  </div>
</section>
`;
