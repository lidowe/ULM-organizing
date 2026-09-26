// Home — trial iteration, Claude's hierarchy on Lovable's look and language.
// The home page is the complete short version of the site:
//   5 seconds  — headline, one line, two routes (know it / don't)
//   20 seconds — the doors, each opening to its usual cause and its price
//   2 minutes  — judgment first (a case), then access (plaques, places)
//               then the person, then the argument in one statement
// Deeper pages hold the 10-minute version. One ask closes it.
export default `
<section class="sheet">
  <div class="wrap sheet-inner">
    <p class="sheet-meta"><span><b>ULM</b></span><span>Edward Lidow</span><span>Est. 2012</span><span>Columbia, South Carolina</span><span>Remote work available</span></p>
    <h1 class="sheet-title">The Industry is undergoing <a href="/why#industry">major key changes.</a></h1>
    <div class="sheet-foot">
      <div class="sheet-intro">
        <p class="sheet-deck"><strong>Upper Level Music is a new way of looking at what a recording studio provides.</strong> It&rsquo;s the people that produce audio and listen to music, so we left the building behind. ULM is about providing the service specific to you: at your tempo. Musical or technical, creative or learning, you pick the scale. Major project or minor tweak, we&rsquo;ll help you find what resolves. <strong class="sheet-close">Wherever you are in your journey, you will have a focused team working for you. Reach for the Upper Level, and we will give you a boost.</strong></p>
      </div>
      <div class="sheet-routes">
        <a class="route-card" href="#doors"><span class="route-k">I&rsquo;m not sure what I need</span><span class="route-h">Which one are you?</span><span class="route-go">Five doors, below &darr;</span></a>
        <a class="route-card" href="/services"><span class="route-k">I know what I need</span><span class="route-h">Services &amp; rates</span><span class="route-go">Every service, every price &rarr;</span></a>
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

<section class="spread home-proof">
  <div class="wrap">
    <div class="spread-head">
      <span class="spread-no">02 / The work shows</span>
      <h2 class="spread-h">Judgment first. Then the plaques.</h2>
    </div>
    <div class="spread-body">
      <p class="spread-note">What they said<br />What it was<br />What was done</p>
      <div>
        <article class="case">
          <div class="case-row"><span class="case-k">What they said</span><p>&ldquo;Make the guitar sound more purple.&rdquo;</p></div>
          <div class="case-row"><span class="case-k">What it was</span><p>Sound has very few words of its own. Hearing the word purple made me think of Prince, and Prince used a lot of chorus (the Roland Dimension D) and gentle doubler effects (the Eventide H3500 being his favorite).</p></div>
          <div class="case-row"><span class="case-k">What was done</span><p>I reached for a few chorusy effects and a gentle harmonizer, hit play, and they said &ldquo;yes! exactly.&rdquo;</p></div>
        </article>
        <p class="home-proof-note">A credit shows where the work happened. A case shows how the decisions get made. Both are on the record.</p>
        <div class="award-grid home-awards">
          <figure class="award-plaque"><img src="{{IMG:award-riaa-katy-teenage-dream}}" alt="RIAA multi-platinum plaque for Katy Perry, Teenage Dream" loading="lazy" /><figcaption>Katy Perry, <em>Teenage Dream</em>, RIAA 8&times; platinum</figcaption></figure>
          <figure class="award-plaque"><img src="{{IMG:award-billboard-willie-hires}}" alt="Billboard number one plaque for Willie Nelson, Band of Brothers" loading="lazy" /><figcaption>Willie Nelson, <em>Band of Brothers</em>, Billboard #1 Top Country Albums</figcaption></figure>
          <figure class="award-plaque"><img src="{{IMG:award-riaa-wayne-rebirth}}" alt="RIAA gold plaque for Lil Wayne, Rebirth" loading="lazy" /><figcaption>Lil Wayne, <em>Rebirth</em>, RIAA gold</figcaption></figure>
        </div>
        <p><a class="btn" href="/proof">The full record</a></p>
      </div>
    </div>
  </div>
</section>

<section class="ribbon-strip"><div class="ribbon-track">{{RIBBON}}</div></section>

<section class="spread home-person">
  <div class="wrap">
    <div class="spread-head">
      <span class="spread-no">03 / Who answers</span>
      <h2 class="spread-h">Musician first, engineer second.</h2>
    </div>
    <div class="spread-body">
      <figure class="home-person-photo"><img src="{{IMG:edward-thumbnail}}" alt="Edward Lidow at a recording console with studio monitors behind him" loading="lazy" /><figcaption>Edward Lidow at the console.</figcaption></figure>
      <div class="home-person-copy">
        <p>Upper Level Music was created in 2012 by Edward Lidow, musician, recording engineer, mixer, producer, studio owner and manager, acoustic consultant, and university instructor in audio engineering. There are few jobs in this industry he hasn&rsquo;t done at some point.</p>
        <p>I learned this trade the old way: as an intern and then an assistant at Hit Factory Criteria, standing behind people who had been doing it for thirty years. Every message sent through this site comes to me, and I answer it.</p>
        <p><a class="btn" href="/why">The whole story</a></p>
      </div>
    </div>
  </div>
</section>

<section class="slab home-gap">
  <div class="wrap">
    <div class="spread-head">
      <span class="spread-no">04 / Why this exists</span>
      <h2 class="spread-h">The gap.</h2>
    </div>
    <p class="slab-statement">The tools reached everyone. <span>The knowledge didn&rsquo;t.</span></p>
    <div class="spread-body">
      <p class="spread-note">The room<br />The people<br />The teamwork</p>
      <div class="spread-cols">
        <p>Technology and art have always weaved thru history together. Today, recording is easy. The tools reached everyone, but the knowledge and ability didn&rsquo;t. We at Upper Level see how sponsored content and targeted marketing has distorted the priorities of talent and creativity and left newer artists wondering why they feel stuck.</p>
        <p>We call it <b>the gap</b>. We live in a pivotal moment where technology and artistry are not aligned. One of Upper Level Music&rsquo;s missions is to help bridge The Gap so more and more talent rises to the top.</p>
      </div>
    </div>
    <figure class="gap-chain" role="img" aria-label="A signal chain reading left to right: the room, the people, and the teamwork, then a break, then the next record that doesn&rsquo;t receive it. The mix, interrupted.">
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
    <p><a class="btn" href="/why#gap">What&rsquo;s the gap?</a></p>
  </div>
</section>

<section class="cta-section">
  <div class="wrap cta-inner">
    <div class="reveal"><h2>Tell me what you&rsquo;re working on.</h2><p>A rough, a reference, a photo of the room, or a few sentences is enough.</p></div>
    <a class="btn primary reveal" href="/start">Start a project</a>
  </div>
</section>
`;
