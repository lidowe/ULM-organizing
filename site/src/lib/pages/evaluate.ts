// Door 4 — Playback, Evaluate, Improve. The judgment door: a second set of
// experienced ears, project planning, and gear checked before money leaves.
// The clock-jitter scene is here as a purchase check, framed exactly that
// way — mechanism stated, verdict left to the ear.
export default `
<section class="page-hero door-hero"><div class="wrap">
  {{DOOR_MARK:evaluate}}
  <div class="eyebrow">Door 04 &middot; The listening door</div>
  <h1 class="page-title">Playback, Evaluate, Improve.</h1>
  <p class="page-deck">A second set of ears on decisions already made. Before you master it, release it, or spend on it &mdash; find out what an experienced ear hears.</p>
</div></section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">01</span><span>What this covers</span></div>
    <h2 class="unit-title">Played Back, Out Loud.</h2>
    <ul class="covers-list reveal">
      <li>{{ICON:monitor-pair:md}}<span>A record played front to back with notes: what translates, what fights itself, what to touch last</span></li>
      <li>{{ICON:daw-timeline:md}}<span>Project planning: what order to work in, what to fix now, and what to leave alone</span></li>
      <li>{{ICON:audio-interface:md}}<span>Gear you are about to buy, checked before you spend</span></li>
      <li>{{ICON:meter-vu:md}}<span>A mix compared against the references it wants to sit beside</span></li>
      <li>{{ICON:headphones:md}}<span>A home playback system that never matched the record</span></li>
    </ul>
    <p class="unit-turn reveal">Diagnosis comes before any recommendation, and it is the cheapest thing on this page.</p>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">02</span><span>Before you spend</span></div>
    <h2 class="unit-title">What a Piece Will Actually Do, Before You Spend.</h2>
    <div class="unit-prose">
      <p>Equipment guidance is evaluation too: what a piece will actually do in your chain, and what you already own that is being wasted. The answer is physics first &mdash; and where the physics runs out, the tool says so, because past that line the answer isn&rsquo;t a calculation. It&rsquo;s a session.</p>
      <p>One of the checks, drawn to scale &mdash; what an external clock actually changes:</p>
    </div>
    <figure class="scene reveal">
      {{ANIM:clock-jitter}}
    </figure>
  </div>
</section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">03</span><span>What it costs</span></div>
  </div>
  <div class="wrap services-stack">
    <article class="service-row reveal" id="consulting"><h2>Diagnosis, Strategy and Planning</h2><div class="service-copy"><p>A record that is not becoming what it was meant to be, played back and planned: what order to work in, what to fix now, and what to leave alone.</p></div><div class="service-price">$100&ndash;$150 / hr<small>remote or by appointment</small></div></article>
    <div class="rate-panel reveal"><h2>Rates Are a Starting Point, Not a Judgment on the Project.</h2><div><p>Independent budgets are real. Where scope allows, I work on a sliding scale.</p><p>Ask. If the work is interesting and the scope is clear, the number is negotiable.</p></div></div>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">04</span><span>The other doors</span></div>
    {{DOOR_RAIL}}
  </div>
</section>

<section class="cta-section">
  <div class="wrap cta-inner">
    <div class="reveal"><h2>Send the Mix You Want Honest Ears On.</h2><p>A rough, a reference, or the link to the piece you are about to buy. What comes back is what was heard, not what you hoped to hear.</p></div>
    <a class="btn primary reveal" href="/start">Start here</a>
  </div>
</section>
`;
