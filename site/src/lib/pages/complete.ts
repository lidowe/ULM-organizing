// Door 1 — Complete The Project. The finishing door: full production or any
// single stage, handed over. Process copy (Sagan, the Root, the planning
// pair) lives here because the person handing a record over is the person
// who needs to know how it will be handled. Prices sit behind the reason
// for them.
export default `
<section class="page-hero door-hero"><div class="wrap">
  {{DOOR_MARK:complete}}
  <div class="eyebrow">Door 01 &middot; The finishing door</div>
  <h1 class="page-title">Complete The Project.</h1>
  <p class="page-deck">Full production from demo to master, or any single stage of it. Done right and on time &mdash; some people put it less politely, and that has been said too: <em>just f**king do it</em>. Heard.</p>
</div></section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">01</span><span>Getting started</span></div>
    <h2 class="unit-title">How Does This Whole Process Start, What Should I Expect?</h2>
    <figure class="sagan">
      <blockquote><p>In order to make a grilled cheese, first you must create the universe.</p></blockquote>
      <figcaption>paraphrasing Carl Sagan</figcaption>
    </figure>
    <div class="unit-prose">
      <p>Upper Level&rsquo;s process is not unlike that paraphrased quote. Even a small task requires learning about you and the universe your project is in.</p>
      <p>We start with the pickup notes into bar one: pre-planning and pre-production, centered around you. It&rsquo;s an open dialog where we ask a lot of questions in search of your signature voice, and pre-production is where we search.</p>
      <p class="unit-turn">Wondering why the 3rd degree? Well, we&rsquo;re trying to establish the Root.</p>
      <p>Upper Level Music&rsquo;s underlying theme is to empower the creator. The idea starts with you. We focus our attention on listening to your words and what rests between them, so the key signature is yours and we maintain the proper scale &hellip; without accidentals.</p>
    </div>
    <div class="plan-pair reveal">
      <div class="plan-part">
        <span class="plan-mark">First</span>
        <h3>Let&rsquo;s define who <em>you</em> are.</h3>
        <p>Just like any recording, the best outcome happens when you start from the source. Upper Level Music works from an artist-<em>is</em>-the-source mentality: we want to capture the project in your voice, listening to what lives behind the words.</p>
        <p>Understanding the motivations at the beginning is critical to ending with your voice intact. We don&rsquo;t want to lose the message or its authenticity, so a simple, informal Q&amp;A gives us the template. <a href="/pre-production">See a sample Q&amp;A.</a></p>
      </div>
      <div class="plan-part">
        <span class="plan-mark">Then</span>
        <h3>You set the destination.</h3>
        <p>We&rsquo;ll apply the gas and steer the vehicle. The brakes are yours if we miss the turn.</p>
        <p>Knowing the technical terminology isn&rsquo;t necessary. If we&rsquo;re describing a song&rsquo;s feel and you say &ldquo;the drums should have a real dreamy vibe &mdash; I want it to feel like we&rsquo;re floating in space&rdquo;, we know exactly what you mean, and we head that way. <a href="/purple">Sound&hellip; is described in borrowed words.</a></p>
      </div>
    </div>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">02</span><span>What this covers</span></div>
    <h2 class="unit-title">Hand It Over.</h2>
    <ul class="covers-list reveal">
      <li>{{ICON:tape-reel:md}}<span>Full production from demo to master, or any single stage of it</span></li>
      <li>{{ICON:mic-condenser:md}}<span>Recording and tracking, remote or in person, with engineers matched to the material</span></li>
      <li>{{ICON:pop-filter:md}}<span>Vocal production: direction, comping, tuning, timing, stacks and ad-libs</span></li>
      <li>{{ICON:console-desk:md}}<span>Mixing, including revisions, stems, instrumentals and TV mixes</span></li>
      <li>{{ICON:meter-bars:md}}<span>Mastering for streaming, vinyl prep, and sequenced album masters</span></li>
      <li>{{ICON:daw-timeline:md}}<span>Editing and repair: drum edits, tuning cleanup, noise and bleed removal</span></li>
      <li>{{ICON:file-bounce:md}}<span>Podcast and content audio, edited, leveled and delivered to spec</span></li>
      <li>{{ICON:check-circle:md}}<span>Twelve songs stalled at eighty percent, finished and consistent as a body of work</span></li>
    </ul>
    <p class="unit-turn reveal">One reviewed edit is a real job. We take small ones.</p>
    <div class="unit-prose reveal"><p>The craft, drawn to scale &mdash; a compressor&rsquo;s attack and release working program material. What it does to your song is decided by ear:</p></div>
    <figure class="scene reveal">
      {{ANIM:compressor-envelope}}
    </figure>
    <figure class="lead-photo reveal">
      <img src="{{IMG:drummer-engineer}}" alt="A drummer at the kit while an engineer works beside him in the same room" loading="lazy" />
    </figure>
  </div>
</section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">03</span><span>What each part costs</span></div>
    <h2 class="unit-title">The Stages, and What They Run.</h2>
    <p class="unit-lede">If you have something unique, let us know. One missing piece can bring a project down, and there is no harm in asking about it.</p>
  </div>
  <div class="wrap services-stack">
    <article class="service-row reveal" id="mixing"><h2>Mixing</h2><div class="service-copy"><p>Analog and digital together. Balances, automation, and delivery in the formats you need.</p></div><div class="service-price">$400&ndash;$900 / song<small>typical independent range</small></div></article>
    <article class="service-row reveal" id="editing"><h2>Editing, Tuning and Timing</h2><div class="service-copy"><p>Comping, pitch correction to taste, time alignment, drum and sound replacement, noise and click repair, mix prep.</p></div><div class="service-price">$150&ndash;$400 / song<small>based on scope</small></div></article>
    <article class="service-row reveal"><h2>Vocal Production</h2><div class="service-copy"><p>Direction in the session, arrangement of stacks and ad-libs, comping strategy, and the vocal sound itself.</p><p>Performance first. Tuning is a finishing decision, not a rescue.</p></div><div class="service-price">$150&ndash;$400 / song<small>based on scope</small></div></article>
    <article class="service-row reveal" id="mastering"><h2>Mastering</h2><div class="service-copy"><p>Final tone, level, consistency, release-ready delivery. Albums and EPs are taken as a body of work rather than song by song.</p></div><div class="service-price">$100&ndash;$175 / song<small>release packages quoted</small></div></article>
    <article class="service-row reveal" id="recording"><h2>Recording &amp; Tracking</h2><div class="service-copy"><p>Overdubs, vocals, instruments, session engineering. Remote or in the room you already work in.</p><p>Mic and chain get picked for the source in front of us, not from a template.</p></div><div class="service-price">$65&ndash;$100 / hr<small>day rates from $500</small></div></article>
    <article class="service-row reveal" id="production"><h2>Production Assistance &amp; Arrangement</h2><div class="service-copy"><p>Song development, arrangement, parts, programming, and a second set of ears on decisions already made.</p></div><div class="service-price">Project based<small>personalized quote</small></div></article>
    <article class="service-row reveal"><h2>Full-Project Development</h2><div class="service-copy"><p>Early production through final delivery, with the same person on it the whole way.</p><p>My role shifts stage to stage, producer, engineer, mixer, advisor, without handing the record to someone new.</p></div><div class="service-price">Project based<small>multi-stage scope</small></div></article>
    <div class="rate-panel reveal"><h2>Rates Are a Starting Point, Not a Judgment on the Project.</h2><div><p>Independent budgets are real. Where scope allows, I work on a sliding scale.</p><div class="needs-content"><strong>Confirm rates before publishing</strong>Carried over and unchanged: mixing, editing/tuning, vocal production, mastering, recording. Also confirm deposit terms, revision policy and what a day rate includes.</div><p>Ask. If the work is interesting and the scope is clear, the number is negotiable.</p></div></div>
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
    <div class="reveal"><h2>Bring the Record You Are Trying to Finish.</h2><p>A rough, a reference, or a few sentences is enough. Edward reviews and scopes it before any work or price is agreed.</p></div>
    <a class="btn primary reveal" href="/start">Send the rough</a>
  </div>
</section>
`;
