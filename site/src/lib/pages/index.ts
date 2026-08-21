// Home, rebuilt on the teardown's bedrock (hero handshake → the doors) and
// grown back deliberately: the doors are now open and each one leads to its
// page; the Gap argument gets a first move and a link instead of silence;
// the proof strip puts the plaques where a first visit can see them; the
// start strip is the only ask. Nothing argues above the doors.
export default `
<section class="hero-rack">
  <div class="wrap hero-rack-inner">
    <div class="hero-copy">
      <div class="hero-sheet">
        <div class="sheet-row"><span>ULM &middot; Session Sheet</span><span>Est. 2012</span><span>Rev. 2026-08-21</span></div>
        <div class="sheet-row sheet-what"><span>Mixing &middot; Production &middot; Systems &middot; Teaching</span><span>Independent Artists</span><span>Remote &middot; Columbia SC</span></div>
        <div class="sheet-body">
          <h1 class="display hero-title"><span class="ln"><span>The Industry Is Undergoing</span></span><span class="ln"><span><em>Major Key Changes.</em></span></span></h1>
          <p class="hero-mission">One engineer &mdash; Edward Lidow, thirty years in rooms from Miami to LA, now working from Columbia SC and remote. Mixing and production for independent artists, studio systems work, and teaching aimed at the day you don&rsquo;t need me.</p>
        </div>
      </div>
    </div>
  </div>
  <figure class="hero-panel">
    <img src="{{IMG:rack-ulm-front}}" alt="A studio rack seen head on: a Sonic Farm Creamer+ at the top, a pair of Undertone Audio MPEQ-1s, a Stam SA-T69 and an A-Designs Ventura SE, NPNG DMP-2NW preamps, a Retro 176, a red 19-inch panel reading UPPER LEVEL MUSIC, a Retro Sta-Level Gold Edition, and a Mamba XD8 patchbay below" fetchpriority="high" />
  </figure>
</section>

<section class="rack-unit doors-unit">
  <div class="wrap">
    <div class="unit-label reveal"><span class="unit-no">01</span><span>Start here</span><span class="unit-note">choose any door</span></div>
  </div>
  <div class="wrap doors-stack">
{{DOORS}}
  </div>
  <div class="wrap router-note">
    <p>Not sure which? That is a normal place to start. <a href="/start">Describe the problem in your own words</a> and we will work out what it is. Whichever one it is, everything starts the same way: Edward reviews it and scopes it before any work or price is agreed.</p>
  </div>
</section>

<section class="rack-unit unit-soft gap-teaser">
  <div class="wrap">
    <div class="unit-label reveal"><span class="unit-no">02</span><span>Why this exists</span></div>
    <h2 class="unit-title">The Tools Reached Everyone. The Knowledge Didn&rsquo;t.</h2>
    <div class="unit-prose">
      <p>For most of a century, knowledge moved through this trade the way signal moves through a patchbay: <em>normalled</em>. It flowed by default &mdash; engineer to assistant, assistant to the intern holding the coffee. The rooms were the schools. Nobody called it teaching. It was just how a record got made.</p>
      <p>Then the tools got small and cheap and went home with everyone. That part was good. But the power moved faster than the knowledge, and the knowledge was not included in the transfer.</p>
    </div>
    <figure class="gap-diagram reveal">
      <svg viewBox="0 0 720 130" role="img" aria-label="Diagram: the chain from engineer to assistant to intern to the next record, with the connection broken between assistant and intern">
        <path class="gd-flow" d="M70 48 H320" pathLength="1"/>
        <path class="gd-break" d="M348 34 L376 62 M376 34 L348 62"/>
        <path class="gd-faint" d="M404 48 H650"/>
        <circle class="gd-node" cx="70" cy="48" r="9"/><circle class="gd-node" cx="263" cy="48" r="9"/><circle class="gd-node gd-dim" cx="456" cy="48" r="9"/><circle class="gd-node gd-dim" cx="650" cy="48" r="9"/>
        <text class="gd-label" x="70" y="86" text-anchor="middle">Engineer</text>
        <text class="gd-label" x="263" y="86" text-anchor="middle">Assistant</text>
        <text class="gd-label" x="456" y="86" text-anchor="middle">Intern</text>
        <text class="gd-label" x="650" y="86" text-anchor="middle">The Next Record</text>
      </svg>
      <figcaption>The normal, interrupted: the tools kept moving; the knowledge didn&rsquo;t.</figcaption>
    </figure>
    <p class="gap-more"><a class="btn" href="/the-gap">The whole argument, and the patch around the interruption</a></p>
  </div>
</section>

<section class="rack-unit proof-strip">
  <div class="wrap">
    <div class="unit-label reveal"><span class="unit-no">03</span><span>On record</span></div>
    <h2 class="unit-title">Real Records. Real Roles.</h2>
    <p class="unit-lede">Major-label sessions and independent records, across genres. Precise roles where publicly credited.</p>
  </div>
  <div class="wrap award-grid reveal">
    <figure class="award-plaque"><img src="{{IMG:award-riaa-katy-teenage-dream}}" alt="RIAA multi-platinum plaque for Katy Perry, Teenage Dream" loading="lazy" /><figcaption>Katy Perry, <em>Teenage Dream</em>, RIAA 8&times; platinum</figcaption></figure>
    <figure class="award-plaque"><img src="{{IMG:award-billboard-willie-hires}}" alt="Billboard number one plaque for Willie Nelson, Band of Brothers" loading="lazy" /><figcaption>Willie Nelson, <em>Band of Brothers</em>, Billboard #1 Top Country Albums</figcaption></figure>
    <figure class="award-plaque"><img src="{{IMG:award-riaa-wayne-rebirth}}" alt="RIAA gold plaque for Lil Wayne, Rebirth" loading="lazy" /><figcaption>Lil Wayne, <em>Rebirth</em>, RIAA gold</figcaption></figure>
  </div>
  <div class="ribbon-strip"><div class="ribbon-track">{{RIBBON}}</div></div>
  <div class="wrap proof-actions reveal"><a class="btn" href="/proof">Every credit, with its exact role</a></div>
</section>

<section class="cta-section">
  <div class="wrap cta-inner">
    <div class="reveal"><h2>Tell Me What You&rsquo;re Working On.</h2><p>A rough, a reference, a photo of the room, or a few sentences is enough.</p></div>
    <a class="btn primary reveal" href="/start">Start here</a>
  </div>
</section>

<div class="sheet-rev"><div class="wrap"><span>Home &middot; Rev. 2026-08-21</span><span>Maintained by Edward Lidow</span></div></div>
`;
