// Services — trial iteration. One page, one section per door, so a door on the
// home page lands on its own section here. Copy is Lovable's Services and
// Process pages (the preferred wording), with the five-doors Sagan / Root
// passage where Lovable had none. The three paths (hand it over / work it
// together / learn to run it) are the second question, inside each section.
export default `
<section class="page-hero"><div class="wrap"><div class="eyebrow">Services &amp; rates</div><h1 class="page-title">We work across many fields of audio.</h1><p class="page-deck">These are the services we get asked for most. If you have something unique, let us know.</p><p class="page-deck page-deck-second">We know one missing piece can bring a project down. Every detail matters, and there is no harm in asking about it.</p></div></section>

<nav class="svc-index" aria-label="Sections on this page"><div class="wrap">
  <a href="#start"><span>00</span>How it starts</a>
  <a href="#finish"><span>01</span>I can&rsquo;t finish my record</a>
  <a href="#part"><span>02</span>My part won&rsquo;t land</a>
  <a href="#technical"><span>03</span>I can&rsquo;t get it technically right</a>
  <a href="#chase"><span>04</span>I&rsquo;m chasing a problem</a>
  <a href="#learn"><span>05</span>I want to learn how it works</a>
</div></nav>

<section class="section" id="start">
  <div class="wrap section-header reveal"><div class="kicker">00 / Process</div><h2 class="section-title">First I ask questions. Then we decide what my job is.</h2></div>
  <div class="wrap">
    <p class="plain-lead reveal">A production line never misses a beat. That&rsquo;s what&rsquo;s wrong with it.</p>
    <blockquote class="pull-quote small lead-quote reveal">
      <p>I like to start every project the same way. After the planning stage, no two projects remain that way. Audio often falls under the engineering umbrella, but it is a creative role at heart.</p>
    </blockquote>
    <div class="remote-body reveal">
      <p>In order to make a grilled cheese, first you must create the universe. <span class="svc-attrib">(paraphrasing Carl Sagan)</span> Upper Level&rsquo;s process is not unlike that paraphrased quote. Even a small task requires learning about you and the universe your project is in.</p>
      <p>Wondering why the 3rd degree? Well, we&rsquo;re trying to establish the Root.</p>
    </div>
    <div class="plan-pair reveal">
      <div class="plan-part">
        <span class="plan-mark">First</span>
        <h3>Let&rsquo;s define who <em>you</em> are.</h3>
        <p>What are you trying to say and what&rsquo;s the motivation behind it? What is actually getting in the way? The best work is hard when working with someone not understood as a person and in context of the work. It&rsquo;s even harder when the client hasn&rsquo;t figured themselves out either. We&rsquo;ll solve this here.</p>
      </div>
      <div class="plan-part">
        <span class="plan-mark">Then</span>
        <h3>You decide the path, for both of us.</h3>
        <p>What you are hiring for changes the price, the schedule, and how much of it we touch. We settle that before anything starts by letting you pick the path ULM takes.</p>
        <p>You do not need the vocabulary to start. &ldquo;This part should sound like I&rsquo;m in a spaceship&rdquo; is enough to work from. Hand us a routing problem like if you should half-normal your patch bay instead and we will work there. Same depth either way.</p>
      </div>
    </div>
    <div class="svc-paths reveal">
      <div class="svc-path"><span class="kicker">Path 1</span><h3>Hand it over.</h3><p>You want results and deliverables, done right and on time. Some people put it less politely, and that has been said too. Heard.</p></div>
      <div class="svc-path"><span class="kicker">Path 2</span><h3>Work it together.</h3><p>When you need help with a specific aspect inside a larger scope, we&rsquo;ll work it out together, on your session and in your room. We&rsquo;ve got you.</p></div>
      <div class="svc-path"><span class="kicker">Path 3</span><h3>Learn to run it.</h3><p>Whatever the job, we&rsquo;ll teach you the theory and get as detailed as you want. One on one, so you can produce professional results on your own terms. We adapt to how you learn.</p></div>
    </div>
  </div>
</section>

<section class="section svc-door" id="finish">
  <div class="wrap section-header reveal"><div class="kicker">01 / I can&rsquo;t finish my record</div><h2 class="section-title">Mix, edit and finish.</h2></div>
  <div class="wrap services-stack">
    <div class="service-group reveal"><p>The stages people ask for most, taken one at a time or together. The songs exist. The takes exist. What&rsquo;s missing is the last stretch, the part where decisions stop being creative and start being editorial. We come in at whatever point you&rsquo;ve reached and carry it the rest of the way.</p></div>
    <article class="service-row reveal" id="mixing"><h2>Mixing</h2><div class="service-copy"><p>Analog and digital together. Balances, automation, and delivery in the formats you need.</p></div><div class="service-price">$400–$900 / song<small>typical independent range</small></div></article>
    <article class="service-row reveal" id="editing"><h2>Editing, tuning and timing</h2><div class="service-copy"><p>Comping, pitch correction to taste, time alignment, drum and sound replacement, noise and click repair, mix prep.</p></div><div class="service-price">$150–$400 / song<small>based on scope</small></div></article>
    <article class="service-row reveal" id="mastering"><h2>Mastering</h2><div class="service-copy"><p>Final tone, level, consistency, release-ready delivery. Albums and EPs are taken as a body of work rather than song by song.</p></div><div class="service-price">$100–$175 / song<small>release packages quoted</small></div></article>
    <article class="service-row reveal"><h2>Full-project development</h2><div class="service-copy"><p>Early production through final delivery, with the same person on it the whole way.</p><p>My role shifts stage to stage, producer, engineer, mixer, advisor, without handing the record to someone new.</p></div><div class="service-price">Project based<small>multi-stage scope</small></div></article>
    <details class="path-fold reveal">
      <summary>Handed over: see what this covers</summary>
      <div class="path-body"><ul>
        <li>Full production from demo to master, or any single stage of it</li>
        <li>Mixing, including revisions, stems, instrumentals and TV mixes</li>
        <li>Mastering for streaming, vinyl prep, and sequenced album masters</li>
        <li>Editing and repair: drum edits, tuning cleanup, noise and bleed removal</li>
        <li>Podcast and content audio, edited, leveled and delivered to spec</li>
        <li>Twelve songs stalled at eighty percent, finished and consistent as a body of work</li>
        <li>One reviewed edit is a real job. We take small ones.</li>
      </ul></div>
    </details>
  </div>
</section>

<section class="section svc-door" id="part">
  <div class="wrap section-header reveal"><div class="kicker">02 / My part won&rsquo;t land</div><h2 class="section-title">Recording and production.</h2></div>
  <div class="wrap services-stack">
    <div class="service-group reveal"><p>Getting it made, whether that is one overdub or the whole record. Nothing is out of tune and nothing moves. That gap is a performance problem, not a plugin problem, and it gets solved in the room, with someone listening to what the song is actually asking for.</p></div>
    <article class="service-row reveal"><h2>Vocal production</h2><div class="service-copy"><p>Direction in the session, arrangement of stacks and ad-libs, comping strategy, and the vocal sound itself.</p><p>Performance first. Tuning is a finishing decision, not a rescue.</p></div><div class="service-price">$150–$400 / song<small>based on scope</small></div></article>
    <article class="service-row reveal" id="recording"><h2>Recording &amp; tracking</h2><div class="service-copy"><p>Overdubs, vocals, instruments, session engineering. Remote or in the room you already work in.</p><p>Mic and chain get picked for the source in front of us, not from a template.</p></div><div class="service-price">$65–$100 / hr<small>day rates from $500</small></div></article>
    <article class="service-row reveal" id="production"><h2>Production assistance &amp; arrangement</h2><div class="service-copy"><p>Song development, arrangement, parts, programming, and a second set of ears on decisions already made.</p></div><div class="service-price">Project based<small>personalized quote</small></div></article>
  </div>
</section>

<section class="section svc-door" id="technical">
  <div class="wrap section-header reveal"><div class="kicker">03 / I can&rsquo;t get it technically right</div><h2 class="section-title">Diagnosis before any recommendation.</h2></div>
  <div class="wrap services-stack">
    <div class="service-group reveal"><p>You know the moves. The moves aren&rsquo;t working. Usually that means the problem is upstream of where you&rsquo;re reaching, and the fix is a decision, not another processor.</p></div>
    <article class="service-row reveal" id="consulting"><h2>Diagnosis, strategy and planning</h2><div class="service-copy"><p>A mix that will not sit, a session that keeps stalling, a record that is not becoming what it was meant to be. We work out what is causing it before deciding what to do about it.</p><p>Also project planning: what order to work in, what to fix now, and what to leave alone.</p></div><div class="service-price">$100–$150 / hr<small>remote or by appointment</small></div></article>
    <details class="path-fold reveal">
      <summary>Worked together: see what this covers</summary>
      <div class="path-body"><ul>
        <li>A mix that will not sit, worked through on your session, in your DAW</li>
        <li>Gain structure, impedance, converters and clocking on your actual rig</li>
        <li>Templates, routing and recall built around how you already work</li>
        <li>Gear you are about to buy, checked before you spend</li>
        <li>Vocal chain and tracking setup dialed in with you on the session</li>
      </ul></div>
    </details>
  </div>
</section>

<section class="section svc-door" id="chase">
  <div class="wrap section-header reveal"><div class="kicker">04 / I&rsquo;m chasing a problem</div><h2 class="section-title">The room is the first thing in the signal path.</h2></div>
  <div class="wrap services-stack">
    <div class="service-group reveal"><p>Every microphone in the locker is listening to a room before it listens to anything else. A room that lies to you costs more than any preamp will fix. Faults hide in the boring places: a ground, a gain stage, a clock, a wall. We trace the chain from one end to the other until the noise has a name.</p></div>
    <article class="service-row reveal" id="acoustics"><h2>Room and acoustic treatment planning</h2><div class="service-copy"><img class="row-thumb" src="{{IMG:acoustic-panels}}" alt="Absorption panels part built, mineral wool set into timber frames with one clamped while the glue sets" loading="lazy" /><p>Measurement, speaker placement, and a treatment plan built around the room you have and the budget you have.</p><p>Plans are written to be built by you, by your contractor, or by us. What the room needs is the same either way, which is what keeps the recommendation honest.</p></div><div class="service-price">$100–$150 / hr<small>measurement and written plan</small></div></article>
    <article class="service-row reveal" id="systems"><h2>Studio systems and signal flow</h2><div class="service-copy"><p>Signal flow layout, patchbay design and normalling, custom cabling, gain structure, converters and clocking, and hum or grounding faults traced end to end.</p><p>Equipment guidance sits here too: what a piece will actually do for your work before you spend, and what you already own that is being wasted.</p></div><div class="service-price">$100–$150 / hr<small>plus parts at cost</small></div></article>
    <article class="service-row reveal" id="power"><h2>Power and load planning</h2><div class="service-copy"><p>Working out what a room's audio system will draw, how to distribute it cleanly, and where noise is entering through the electrical system.</p><p>Planning and specification, worked alongside your licensed electrician. Installation and anything inside the panel is their job, and we will say so.</p></div><div class="service-price">$100–$150 / hr<small>planning and specification</small></div></article>
    <article class="service-row reveal" id="build"><h2>Studio design and build</h2><div class="service-copy"><img class="row-thumb" src="{{IMG:bay8-build}}" alt="Two people painting out a room mid-build, a guitar leaning in the hallway behind" loading="lazy" /><p>The whole room: acoustic treatment, wiring and patchbay, power, monitoring and the gear it all runs into. Planning and measurement happen remotely first, then we come to you.</p><p>Materials can be sourced and delivered ahead of the visit. Advising your build and running it are different jobs at very different prices, and we will tell you which one you actually need.</p><p>The original Bay 8 room in Miami was ours, built modestly and later sold. Its current owners have expanded it well past what we made, but that is where it started.</p></div><div class="service-price">Project based<small>travel and materials quoted separately</small></div></article>
  </div>
</section>

<section class="section svc-door" id="learn">
  <div class="wrap section-header reveal"><div class="kicker">05 / I want to learn how it works</div><h2 class="section-title">Teaching.</h2></div>
  <div class="wrap services-stack">
    <div class="service-group reveal"><p>Pitched at where you actually are, not where a curriculum assumes you are.</p></div>
    <article class="service-row reveal" id="teaching"><h2>Coaching, tutoring and lessons</h2><div class="service-copy"><img class="row-thumb" src="{{IMG:classroom}}" alt="A teaching room set up with a projector screen, whiteboard, keyboard and drum pads" loading="lazy" /><p>One-on-one on any subject on this page: signal flow, recording, editing, mixing, production judgment, mastering theory, acoustics, electronics, or running your own setup without me.</p><p>Sessions work on your material and your rig. You bring the problem, we work it, and you leave with the next thing to practise.</p></div><div class="service-price">$75–$150 / hr<small>blocks and packages by arrangement</small></div></article>
    <details class="path-fold reveal">
      <summary>If you&rsquo;re a home engineer already charging for work</summary>
      <div class="path-body"><p class="path-aside">If you&rsquo;re a home engineer, well, we get it. You&rsquo;re going to do our job on your own and charge less. Upper Level might be the only ones who will say it out loud. We know, we&rsquo;ve seen you poach clients from some engineers. It&rsquo;s okay, it&rsquo;s never been ours. We just don&rsquo;t like the quality drop, and neither do you. So let&rsquo;s still get you the deliverable to &lsquo;your&rsquo; client, if you have any yet. It could just be you, and that&rsquo;s cool, we were never worried. But let&rsquo;s teach it right, whether that&rsquo;s via lessons on theory or just showing you how &lsquo;the pros&rsquo; do it.</p></div>
    </details>
    <p class="reveal"><a class="btn" href="/learn">Who shows up, and what they leave with</a></p>

    <div class="rate-panel reveal"><h2>Rates are a starting point, not a judgment on the project.</h2><div><p>Independent budgets are real. Where scope allows, I work on a sliding scale.</p><div class="needs-content"><strong>Confirm rates before publishing</strong>Carried over from the previous version and unchanged: mixing, editing/tuning, vocal production, mastering, recording, consultation. Newly proposed and unconfirmed: teaching at $75–150/hr, and the $100–150/hr consulting rate reused for acoustics, studio systems and power planning. Also confirm deposit terms, revision policy and what a day rate includes.</div><p>Ask. If the work is interesting and the scope is clear, the number is negotiable.</p></div></div>
  </div>
</section>

<section class="section">
  <div class="wrap photo-set two reveal">
    <figure><img src="{{IMG:guitars-rack-wall}}" alt="A rack of electric and acoustic guitars against the studio wall" loading="lazy" /><figcaption>Instruments on hand</figcaption></figure>
    <figure><img src="{{IMG:superpower}}" alt="A singer at the microphone mid-phrase on a club stage, a second vocalist behind her" loading="lazy" /><figcaption>The performance</figcaption></figure>
  </div>
</section>

<section class="cta-section"><div class="wrap cta-inner"><div class="reveal"><h2>You can start now.</h2><p>Any topic, any questions, thoughts, files, or hit me up just to talk shop. The industry is changing and it's your lead.</p></div><a class="btn primary reveal" href="/start">Talk about the project</a></div></section>
`;
