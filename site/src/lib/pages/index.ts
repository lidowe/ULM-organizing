// Home — trial iteration (paper edition). Lovable's opening sheet and copy,
// then the door board straight after the first plate: nothing argues above the
// doors. The Gap gets one short move and a link; it is told in full once, on
// its own page. Proof and one ask close the page.
export default `
<section class="sheet">
  <div class="wrap sheet-inner">
    <p class="sheet-meta"><span><b>ULM</b></span><span>Edward Lidow</span><span>Est. 2012</span><span>Columbia, South Carolina</span><span>Remote work available</span></p>
    <h1 class="sheet-title">The Industry is undergoing <a href="/story#industry">major key changes.</a></h1>
    <div class="sheet-foot">
      <div class="sheet-intro">
        <p class="sheet-deck"><strong>Upper Level Music is a new way of looking at what a recording studio provides.</strong> It&rsquo;s the people that produce audio and listen to music, so we left the building behind. ULM is about providing the service specific to you: at your tempo. Musical or technical, creative or learning, you pick the scale. Major project or minor tweak, we&rsquo;ll help you find what resolves. <strong class="sheet-close">Wherever you are in your journey, you will have a focused team working for you. Reach for the Upper Level, and we will give you a boost.</strong></p>
      </div>
    </div>
  </div>
  <div class="wrap">
    <figure class="plate opening-plate">
      <img src="{{IMG:ed-at-the-console}}" alt="Edward Lidow working at the console during a session" fetchpriority="high" />
      <figcaption>Plate 01 &mdash; At the console</figcaption>
    </figure>
  </div>
</section>

<!--DOORS-->

<section class="spread home-gap">
  <div class="wrap">
    <div class="spread-head">
      <span class="spread-no">03 / Why this exists</span>
      <h2 class="spread-h">The gap.</h2>
    </div>
    <div class="spread-body">
      <p class="spread-note">The room<br />The people<br />The teamwork</p>
      <div>
        <p class="sheet-gap-kicker">So why did the industry&rsquo;s constant changes and modulations cause mainstream music to be so &hellip; repetitive, and yet sonically still feel unobtainable?</p>
        <p class="home-gap-copy">Technology and art have always weaved thru history together. Today, recording is easy. The tools reached everyone, but the knowledge and ability didn&rsquo;t. We at Upper Level see how sponsored content and targeted marketing has distorted the priorities of talent and creativity and left newer artists wondering why they feel stuck. We call it <b>the gap</b>. We live in a pivotal moment where technology and artistry are not aligned. One of Upper Level Music&rsquo;s missions is to help bridge The Gap so more and more talent rises to the top.</p>
        <figure class="gap-chain" role="img" aria-label="A signal chain reading left to right: the room, the people, and the teamwork &mdash; the private place built to create, the people who create, and the sharing and observing that passes the knowledge &mdash; then a break, then the next record that doesn&rsquo;t receive it. The mix, interrupted.">
          <svg viewBox="-20 0 680 110" xmlns="http://www.w3.org/2000/svg">
            <line class="gc-solid" x1="79" y1="36" x2="201" y2="36" />
            <line class="gc-solid" x1="219" y1="36" x2="341" y2="36" />
            <line class="gc-dash" x1="465" y1="36" x2="551" y2="36" />
            <circle cx="70" cy="36" r="9" />
            <circle cx="210" cy="36" r="9" />
            <circle cx="350" cy="36" r="9" />
            <circle cx="560" cy="36" r="9" />
            <line class="gc-brk" x1="425" y1="22" x2="455" y2="50" />
            <line class="gc-brk" x1="455" y1="22" x2="425" y2="50" />
            <text x="70" y="82" text-anchor="middle">The room</text>
            <text x="210" y="82" text-anchor="middle">The people</text>
            <text x="350" y="82" text-anchor="middle">The teamwork</text>
            <text x="560" y="82" text-anchor="middle">The next record</text>
          </svg>
        </figure>
        <div class="sheet-actions">
          <a class="btn gap-cta" href="/the-gap">What&rsquo;s the gap?</a>
          <a class="btn primary" href="/start">Start a project</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="ribbon-strip"><div class="ribbon-track">{{RIBBON}}</div></section>

<section class="home-second-plate">
  <div class="wrap">
    <figure class="plate">
      <img src="{{IMG:drummer-engineer}}" alt="A drummer at the kit while an engineer works beside him in the same room" loading="lazy" />
      <figcaption>Plate 02 &mdash; Working out the part, kit and desk in one room</figcaption>
    </figure>
  </div>
</section>

<section class="spread essay-section">
  <div class="wrap spread-body">
    <p class="spread-note">04 / Every role</p>
    <div>
      <p class="essay-lead">No matter the task, we serve the process, we work in service to the song, and the ego stays outside.</p>
      <p>Various roles, various artists, whether the role was large or small or the artist famous or not, every job contributes to the &lsquo;flow state&rsquo; every job asks 100% focus &hellip; yes, even the coffee can ruin an entire day, or fuel the magic later.</p>
      <p>Get them coffee, route signal flow and place mics, run the DAW or be the tape op, it all was part of a bigger picture and personal growth. Running cables became running sessions, tuning instruments became vocal tuning and production, production became tracking engineer, mix engineer, mastering, or going on tour with them.</p>
      <p>Relationships carried on, years go by and I&rsquo;m asked to build their private studio after our work together commercially&hellip; by being their barista a decade earlier. Others continue as clients, friends and contemporaries to this day. The only thing that stays consistent is the dedication and effort put into every detail.</p>
      <div class="award-grid home-awards">
        <figure class="award-plaque"><img src="{{IMG:award-riaa-katy-teenage-dream}}" alt="RIAA multi-platinum plaque for Katy Perry, Teenage Dream" loading="lazy" /><figcaption>Katy Perry, <em>Teenage Dream</em>, RIAA 8&times; platinum</figcaption></figure>
        <figure class="award-plaque"><img src="{{IMG:award-billboard-willie-hires}}" alt="Billboard number one plaque for Willie Nelson, Band of Brothers" loading="lazy" /><figcaption>Willie Nelson, <em>Band of Brothers</em>, Billboard #1 Top Country Albums</figcaption></figure>
        <figure class="award-plaque"><img src="{{IMG:award-riaa-wayne-rebirth}}" alt="RIAA gold plaque for Lil Wayne, Rebirth" loading="lazy" /><figcaption>Lil Wayne, <em>Rebirth</em>, RIAA gold</figcaption></figure>
      </div>
      <p><a class="btn" href="/proof">See the work</a></p>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="wrap cta-inner">
    <div class="reveal"><h2>Tell me what you&rsquo;re working on.</h2><p>A rough, a reference, a photo of the room, or a few sentences is enough.</p></div>
    <a class="btn primary reveal" href="/start">Start a project</a>
  </div>
</section>
`;
