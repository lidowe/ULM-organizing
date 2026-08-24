// Door 3 — Learn The Craft. The apprenticeship door: the strongest
// differentiator on the site. The physics scenes teach here — mechanism
// stated, ear test offered, verdict never forecast. The booth story stays,
// zap and all.
export default `
<section class="page-hero door-hero"><div class="wrap">
  {{DOOR_MARK:learn}}
  <div class="eyebrow">Door 03 &middot; The teaching door</div>
  <h1 class="page-title">Somebody Has to Teach This.</h1>
  <p class="page-deck">One-on-one training in recording, mixing, and studio technical work, for artists, engineers, producers, and students.</p>
</div></section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">01</span><span>Why this door exists</span></div>
    <h2 class="unit-title">The Apprenticeship Is Gone. The Knowledge Does Not Have to Go with It.</h2>
    <div class="unit-prose">
      <p>I learned this trade the old way: as an intern and then an assistant at Hit Factory Criteria, standing behind people who had been doing it for thirty years. Almost nobody entering audio today gets a room, a mentor, and five years to absorb it.</p>
      <p>Home studios are everywhere, which is a large part of why the major rooms are closing. So I hand the training over directly. If you want to know why a ribbon needs 70 dB of clean gain, or why your kick sounds different in your room than in the car, I will show you. If you want to discuss the hysteresis effect transformers have on the tone of your audio, and how the choice of windings and blends of metal affect the harmonic result, I can show you that too. If you would rather I just handle it, that is fine too.</p>
      <p>The tools reached everyone. The training did not, and the rooms that used to hand it down are closing. That gap is <a href="/the-gap">the thematic problem Upper Level Music exists to solve</a>.</p>
    </div>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">02</span><span>What it looks like</span></div>
    <h2 class="unit-title">Handed Over Directly.</h2>
    <p class="unit-lede">One-on-one, remote, on your material and your rig, pitched at the level you are actually at rather than where a curriculum assumes you are. You bring the problem, we work it, and you leave with the next thing to practise.</p>
    <ul class="covers-list reveal">
      <li>{{ICON:gain-staging:md}}<span>Engineers on gain structure, impedance, conversion, summing and monitoring</span></li>
      <li>{{ICON:daw-timeline:md}}<span>Producers on arrangement, routing, and diagnosing a mix instead of guessing</span></li>
      <li>{{ICON:mic-dynamic:md}}<span>Artists learning to record themselves properly, start to finish</span></li>
      <li>{{ICON:tape-reel:md}}<span>Students who want the apprenticeship that no longer exists</span></li>
      <li>{{ICON:meter-bars:md}}<span>Mastering theory: loudness, dynamics, delivery specs, and what actually matters</span></li>
      <li>{{ICON:patchbay:md}}<span>Technical work: patchbays, wiring, maintenance, and reading a schematic</span></li>
    </ul>
    <details class="path-fold reveal">
      <summary>If you&rsquo;re a home engineer already charging for work</summary>
      <div class="path-body"><p class="path-aside">If you&rsquo;re a home engineer, well, we get it. You&rsquo;re going to do our job on your own and charge less. Upper Level might be the only ones who will say it out loud. We know, we&rsquo;ve seen you poach clients from some engineers. It&rsquo;s okay, it&rsquo;s never been ours. We just don&rsquo;t like the quality drop, and neither do you. So let&rsquo;s still get you the deliverable to &lsquo;your&rsquo; client, if you have any yet. It could just be you, and that&rsquo;s cool, we were never worried. But let&rsquo;s teach it right, whether that&rsquo;s via lessons on theory or just showing you how &lsquo;the pros&rsquo; do it.</p></div>
    </details>
  </div>
</section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">03</span><span>How the teaching sounds</span></div>
    <h2 class="unit-title">Physics Describes. Ears Decide.</h2>
    <div class="unit-prose">
      <p>Every lesson runs on the same rule as this site: state what happens, the ratio, the bandwidth, the noise, facts about electrons &hellip; then listen. What it does to the song is decided in your ears, not on a spec sheet. Three of the mechanisms, drawn to scale:</p>
    </div>
    <figure class="scene reveal">
      {{ANIM:gain-structure}}
    </figure>
    <figure class="scene reveal">
      {{ANIM:precedence-haas}}
    </figure>
    <figure class="scene reveal">
      {{ANIM:comb-filtering}}
    </figure>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">04</span><span>The booth</span></div>
    <h2 class="unit-title">The Vocal Booth Is an Instrument Itself.</h2>
    <div class="expo reveal">
      <figure>
        <img src="{{IMG:vocal-booth-take}}" alt="A vocal booth: a large-diaphragm microphone on a boom with a pop filter and shockmount, fabric-panelled walls, and a vocalist mid-take wearing headphones" loading="lazy" />
      </figure>
      <div class="expo-copy">
        <p>The vocal booth is an instrument itself. Small, unfamiliar, intimidating, and you&rsquo;re expected to perform and be documented forever? If you&rsquo;re nervous, the microphone will know. Sometimes a coach can help silence the mental noise giving you the confidence to deliver. And sometimes an inexperienced engineer needs help knowing which way to point the mic. We can help a vocalist prepare ahead of the big day, or if your first day as an assistant is approaching, maybe a tailored lesson about polar patterns and proximity effect might be the assistance you need.</p>
        <p>And don&rsquo;t stress, I had an assistant who improperly plugged in a $15,000 Telefunken Elam 251 tube microphone and the mic zapped him so hard he crashed right thru the walls of the booth. (Tube equipment is very high voltage) Don&rsquo;t worry, the mic wasn&rsquo;t damaged. &hellip; Oh, he was checked by a doctor and was fine too. We gave him the rest of the night off.</p>
      </div>
    </div>
    <figure class="scene reveal">
      {{ANIM:polar-patterns}}
    </figure>
  </div>
</section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">05</span><span>What it costs</span></div>
  </div>
  <div class="wrap services-stack">
    <article class="service-row reveal" id="teaching"><h2>Coaching, Tutoring and Lessons</h2><div class="service-copy"><img class="row-thumb" src="{{IMG:classroom}}" alt="A teaching room set up with a projector screen, whiteboard, keyboard and drum pads" loading="lazy" /><p>One-on-one on any subject behind any door: signal flow, recording, editing, mixing, production judgment, mastering theory, acoustics, electronics, or running your own setup without me.</p><p>Sessions work on your material and your rig. You bring the problem, we work it, and you leave with the next thing to practise.</p></div><div class="service-price">$75&ndash;$150 / hr<small>blocks and packages by arrangement</small></div></article>
    <div class="rate-panel reveal"><h2>Rates Are a Starting Point, Not a Judgment on the Project.</h2><div><p>Independent budgets are real. Where scope allows, I work on a sliding scale.</p><div class="needs-content"><strong>Confirm rates before publishing</strong>Teaching at $75&ndash;150/hr is newly proposed and unconfirmed. Session lengths, blocks and packages also need Edward&rsquo;s numbers.</div><p>Ask. If the work is interesting and the scope is clear, the number is negotiable.</p></div></div>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">06</span><span>The other doors</span></div>
    {{DOOR_RAIL}}
  </div>
</section>

<section class="cta-section">
  <div class="wrap cta-inner">
    <div class="reveal"><h2>Bring the Problem You Are Actually Stuck On.</h2><p>The first session starts from your question, not a syllabus.</p></div>
    <a class="btn primary reveal" href="/start">Ask the first question</a>
  </div>
</section>
`;
