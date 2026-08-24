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
    <div class="unit-label"><span class="unit-no">02</span><span>Before you spend</span><span class="unit-note">engine: Studio Virtual</span></div>
    <h2 class="unit-title">Will That Mic Like That Preamp?</h2>
    <div class="prose-noted">
      <div class="unit-prose">
        <p>Every microphone meets every preamp at a junction, and the junction has an opinion. A preamp that loads a microphone&rsquo;s frequency-dependent impedance differently at different frequencies is applying an EQ curve before the signal reaches the gain stage &mdash; before you have touched a single knob. Most of the time the bridge is generous and nothing happens. Sometimes it rolls off the top, damps the transients, or starves a ribbon right at its resonance.</p>
        <p>Pick a pairing. The tool reports the bridging ratio, what it does to the sound, and whether the preamp has the gain the mic actually asks for. The microphones and preamps are the ones racked in this studio, plus a typical interface channel so you can test the room you are actually in.</p>
      </div>
      <aside class="margin-notes" aria-label="Bench notes">
        <p class="mnote">Ratios under 10:1 start to color. Under 3:1 they start to load. Ribbons are checked at their resonance peak, not their nominal number &mdash; that is where they get hurt.</p>
        <p class="mnote">Gain demand assumes a quiet source. Loud sources forgive; whispers don&rsquo;t.</p>
      </aside>
    </div>
    <div class="tool" data-imp-tool>
      <div class="tool-io">
        <label class="tool-field"><span class="tool-label">Microphone</span><select data-imp-mic aria-label="Choose a microphone"></select></label>
        <span class="tool-arrow" aria-hidden="true">&rarr;</span>
        <label class="tool-field"><span class="tool-label">Preamp</span><select data-imp-pre aria-label="Choose a preamp"></select></label>
      </div>
      <div class="tool-readout" data-imp-out aria-live="polite"></div>
      <div class="tool-foot"><p>The numbers are physics and they are dependable. Which coloration the song wants doesn&rsquo;t compute. That part is the session.</p></div>
    </div>
    <figure class="scene reveal">
      {{ANIM:impedance-bridging}}
    </figure>
  </div>
</section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">03</span><span>The clock question</span></div>
    <h2 class="unit-title">The Purchase Checks, Drawn to Scale.</h2>
    <div class="unit-prose">
      <p>Two of the most-asked purchases in the rack, stated as physics. The external clock: error = timing offset &times; slew rate, zero at the peaks, largest at the crossings. The summing box: equal, uncorrelated sources add as power, +3 dB of floor per doubling. State what happens, then listen.</p>
    </div>
    <figure class="scene reveal">
      {{ANIM:clock-jitter}}
    </figure>
    <figure class="scene reveal">
      {{ANIM:summing-noise}}
    </figure>
  </div>
</section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">04</span><span>What it costs</span></div>
  </div>
  <div class="wrap services-stack">
    <article class="service-row reveal" id="consulting"><h2>Diagnosis, Strategy and Planning</h2><div class="service-copy"><p>A record that is not becoming what it was meant to be, played back and planned: what order to work in, what to fix now, and what to leave alone.</p></div><div class="service-price">$100&ndash;$150 / hr<small>remote or by appointment</small></div></article>
    <div class="rate-panel reveal"><h2>Rates Are a Starting Point, Not a Judgment on the Project.</h2><div><p>Independent budgets are real. Where scope allows, I work on a sliding scale.</p><p>Ask. If the work is interesting and the scope is clear, the number is negotiable.</p></div></div>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">05</span><span>The other doors</span></div>
    {{DOOR_RAIL}}
  </div>
</section>

<section class="cta-section">
  <div class="wrap cta-inner">
    <div class="reveal"><h2>Send the Mix You Want Honest Ears On.</h2><p>A rough, a reference, or the link to the piece you are about to buy. What comes back is what was heard, not what you hoped to hear.</p></div>
    <a class="btn primary reveal" href="/start">Send the mix</a>
  </div>
</section>
`;
