// Home with the doors leading. Order per Edward's law (17 Aug): identity
// handshake, then the sort - nothing arguing above the doors. The five
// icon story bars ARE the sorter; the old Start Anywhere rows are gone
// (same question, worse). Proof / terms / person hold the verification
// spine below. Not built yet on purpose: the four class questions (their
// placement is unresolved) and the mined door sub-lines. Door 5's title
// is the standing draft pending Edward's language call.
export default `
<section class="hero-rack">
  <div class="wrap hero-rack-inner">
    <div class="hero-copy">
      <div class="hero-sheet">
        <div class="sheet-row"><span>ULM &middot; Session Sheet</span><span>Est. 2012</span><span>Rev. 2026-08-17</span></div>
        <div class="sheet-row sheet-what"><span>Mixing &middot; Production &middot; Systems &middot; Teaching</span><span>Independent Artists</span><span>Remote &middot; Columbia SC</span></div>
        <div class="sheet-body">
          <h1 class="display hero-title"><span class="ln"><span>The Industry Is Undergoing</span></span><span class="ln"><span><em>Major Key Changes.</em></span></span></h1>
          <p class="hero-mission">One engineer &mdash; Edward Lidow, thirty years in rooms from Miami to LA, now working from Columbia SC and remote. Mixing and production for independent artists, studio systems work, and teaching aimed at the day you don&rsquo;t need me.</p>
        </div>
        <div class="sheet-row sheet-actions">
          <a class="btn primary" href="/contact"><span class="rec-dot" aria-hidden="true"></span>Send Me The Song</a>
          <a class="btn" href="/hierarchy-options">How It Works</a>
        </div>
      </div>
    </div>
  </div>
  <figure class="hero-panel">
    <img src="{{IMG:rack-ulm-front}}" alt="A studio rack seen head on: a Sonic Farm Creamer+ at the top, a pair of Undertone Audio MPEQ-1s, a Stam SA-T69 and an A-Designs Ventura SE, NPNG DMP-2NW preamps, a Retro 176, a red 19-inch panel reading UPPER LEVEL MUSIC, a Retro Sta-Level Gold Edition, and a Mamba XD8 patchbay below" fetchpriority="high" />
  </figure>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label reveal"><span class="unit-no">01</span><span>Start here</span><span class="unit-note">choose any door</span></div>
  </div>
  <div class="wrap doors-stack">

    <a class="db-bar" href="/contact" style="--i:0">
      <svg viewBox="0 0 720 120" role="img" aria-label="A cassette, then an EQ boost rising, shifting, narrowing and cutting, then a spinning master reel">
        <defs>
          <radialGradient id="dbMetal" cx="38%" cy="32%" r="80%">
            <stop offset="0%" stop-color="#c9ccd4"/><stop offset="55%" stop-color="#868d9c"/><stop offset="100%" stop-color="#4c525f"/>
          </radialGradient>
          <linearGradient id="dbTan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#b39d6e"/><stop offset="100%" stop-color="#7d6b48"/>
          </linearGradient>
          <linearGradient id="dbPanel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1b2232"/><stop offset="100%" stop-color="#10141f"/>
          </linearGradient>
        </defs>
        <g class="db-draw s1">
          <rect x="22" y="32" width="116" height="56" rx="5" fill="url(#dbTan)" pathLength="1"/>
          <rect x="42" y="50" width="76" height="20" rx="10" fill="#0b0d11" pathLength="1"/>
          <circle cx="58" cy="60" r="7" fill="none" pathLength="1"/>
          <circle cx="102" cy="60" r="7" fill="none" pathLength="1"/>
          <path d="M34,42 L126,42" class="db-tandark" pathLength="1"/>
        </g>
        <path class="db-arrow s2" d="M158,60 L186,60 M179,54 L186,60 L179,66" pathLength="1"/>
        <g class="db-draw s2">
          <path d="M206,88 L356,88" pathLength="1"/>
          <path d="M206,88 L206,32" pathLength="1" class="db-faint"/>
        </g>
        <g class="db-eqmove">
          <path class="db-bell" d="M220,88 C246,88 252,42 270,42 C288,42 294,88 320,88" pathLength="1"/>
        </g>
        <path class="db-cut db-hot" d="M328,50 L342,88" pathLength="1"/>
        <path class="db-arrow s3" d="M378,60 L406,60 M399,54 L406,60 L399,66" pathLength="1"/>
        <g class="db-reelwrap s3">
          <g class="db-reel">
            <circle cx="540" cy="60" r="46" fill="url(#dbTan)" stroke="#6b5d42" pathLength="1"/>
            <circle cx="540" cy="60" r="30" fill="#8f7c56" stroke="none"/>
            <circle cx="540" cy="35" r="9" fill="#0b0d11" stroke="none"/>
            <circle cx="518" cy="72" r="9" fill="#0b0d11" stroke="none"/>
            <circle cx="562" cy="72" r="9" fill="#0b0d11" stroke="none"/>
            <circle cx="540" cy="60" r="7" fill="#0b0d11" pathLength="1"/>
          </g>
        </g>
      </svg>
      <div class="db-foot"><h3 class="db-word">Complete The Project</h3></div>
    </a>

    <a class="db-bar" href="/contact" style="--i:1">
      <svg viewBox="0 0 720 120" role="img" aria-label="A microphone, a cable with a break, and a speaker the sound never reaches">
        <g class="db-draw s1">
          <rect x="30" y="20" width="38" height="56" rx="19" fill="url(#dbPanel)" pathLength="1"/>
          <path d="M37,36 L61,36 M37,46 L61,46 M37,56 L61,56" pathLength="1" class="db-faint"/>
          <path d="M49,76 L49,98 M35,98 L63,98" pathLength="1"/>
        </g>
        <path class="db-arrow s2" d="M92,60 L120,60 M113,54 L120,60 L113,66" pathLength="1"/>
        <g class="db-draw s2">
          <path d="M142,60 C176,34 200,84 234,60" pathLength="1"/>
          <path d="M282,60 C316,36 340,82 374,60" pathLength="1"/>
        </g>
        <path class="db-spark db-hot" d="M248,44 L262,60 L250,60 L266,78" pathLength="1"/>
        <path class="db-arrow s3" d="M398,60 L426,60 M419,54 L426,60 L419,66" pathLength="1"/>
        <g class="db-draw s3">
          <rect x="448" y="36" width="46" height="48" fill="url(#dbPanel)" pathLength="1"/>
          <path d="M494,46 L526,26 L526,94 L494,74 Z" fill="url(#dbPanel)" pathLength="1"/>
        </g>
        <g class="db-arcs">
          <path d="M544,44 C556,52 556,68 544,76" pathLength="1"/>
          <path d="M560,36 C576,48 576,72 560,84" pathLength="1"/>
          <path d="M576,28 C596,44 596,76 576,92" pathLength="1"/>
        </g>
      </svg>
      <div class="db-foot"><h3 class="db-word">Fix An Issue</h3></div>
    </a>

    <a class="db-bar" href="/contact" style="--i:2">
      <svg viewBox="0 0 720 120" role="img" aria-label="A small console, a question mark, a thick studio binder, then an analyzer moving">
        <g class="db-draw s1">
          <path d="M22,46 L36,32 L142,32 L128,46 Z" fill="#171d2b" pathLength="1"/>
          <path d="M128,46 L142,32 L142,72 L128,86 Z" fill="#0e1119" pathLength="1"/>
          <rect x="22" y="46" width="106" height="40" fill="url(#dbPanel)" pathLength="1"/>
          <path d="M40,52 L40,80 M64,52 L64,80 M88,52 L88,80 M112,52 L112,80" pathLength="1" class="db-faint"/>
          <rect x="34" y="64" width="12" height="5" fill="#a8adb8" stroke="none"/>
          <rect x="58" y="56" width="12" height="5" fill="#a8adb8" stroke="none"/>
          <rect x="82" y="72" width="12" height="5" fill="#a8adb8" stroke="none"/>
          <rect x="106" y="60" width="12" height="5" fill="#a8adb8" stroke="none"/>
        </g>
        <path class="db-arrow s2" d="M162,60 L190,60 M183,54 L190,60 L183,66" pathLength="1"/>
        <text class="gd-label db-q" x="208" y="76" style="font-size:46px">?</text>
        <path class="db-arrow s2" d="M254,60 L282,60 M275,54 L282,60 L275,66" pathLength="1"/>
        <g class="db-draw s3">
          <path d="M304,38 L318,26 L404,26 L390,38 Z" fill="#171d2b" pathLength="1"/>
          <path d="M390,38 L404,26 L404,82 L390,94 Z" fill="#0e1119" pathLength="1"/>
          <rect x="304" y="38" width="86" height="56" fill="url(#dbPanel)" pathLength="1"/>
          <circle cx="311" cy="52" r="4" fill="none" pathLength="1"/>
          <circle cx="311" cy="66" r="4" fill="none" pathLength="1"/>
          <circle cx="311" cy="80" r="4" fill="none" pathLength="1"/>
          <path d="M324,52 L378,52 M324,64 L378,64" pathLength="1" class="db-tanline"/>
        </g>
        <path class="db-arrow s4" d="M424,60 L452,60 M445,54 L452,60 L445,66" pathLength="1"/>
        <g class="db-anz">
          <rect class="a1" x="472" y="66" width="9" height="22" fill="#a8adb8" stroke="none"/>
          <rect class="a2" x="486" y="52" width="9" height="36" fill="#a8adb8" stroke="none"/>
          <rect class="a3" x="500" y="60" width="9" height="28" fill="#a8adb8" stroke="none"/>
          <rect class="a1" x="514" y="42" width="9" height="46" fill="#a8adb8" stroke="none"/>
          <rect class="a2" x="528" y="56" width="9" height="32" fill="#a8adb8" stroke="none"/>
          <rect class="a3" x="542" y="38" width="9" height="50" fill="#a8adb8" stroke="none"/>
          <rect class="a1" x="556" y="64" width="9" height="24" fill="#a8adb8" stroke="none"/>
          <rect class="a2" x="570" y="48" width="9" height="40" fill="#a8adb8" stroke="none"/>
          <rect class="a3" x="584" y="58" width="9" height="30" fill="#a8adb8" stroke="none"/>
          <rect class="a1" x="598" y="52" width="9" height="36" fill="#a8adb8" stroke="none"/>
          <path d="M466,88 L616,88" pathLength="1" class="db-faint"/>
        </g>
      </svg>
      <div class="db-foot"><h3 class="db-word">Learn The Craft</h3></div>
    </a>

    <a class="db-bar" href="/contact" style="--i:3">
      <svg viewBox="0 0 720 120" role="img" aria-label="A knob, a VU meter whose needle never passes halfway, a second knob out of sync, money, a spinner going nowhere, then a phone reading ULM and music">
        <g class="db-draw s1">
          <rect x="24" y="30" width="164" height="60" rx="3" fill="url(#dbPanel)" pathLength="1"/>
          <circle cx="46" cy="60" r="12" fill="url(#dbMetal)" pathLength="1"/>
          <rect x="68" y="38" width="76" height="44" rx="2" fill="#0e1119" pathLength="1"/>
          <path d="M80,72 A26,26 0 0 1 132,72" fill="none" pathLength="1" class="db-faint"/>
          <path d="M84,66 L88,63 M106,52 L106,46 M128,66 L124,63" pathLength="1" class="db-faint"/>
          <path d="M132,72 L138,66" class="db-hot" pathLength="1"/>
          <circle cx="166" cy="60" r="12" fill="url(#dbMetal)" pathLength="1"/>
        </g>
        <g class="db-knob1"><path d="M46,60 L46,49" pathLength="1"/></g>
        <g class="db-vu"><path d="M106,76 L106,48" pathLength="1"/></g>
        <g class="db-knob2"><path d="M166,60 L166,49" pathLength="1"/></g>
        <text class="gd-label db-cash" x="206" y="76" style="font-size:44px">$</text>
        <path class="db-arrow s2" d="M252,60 L280,60 M273,54 L280,60 L273,66" pathLength="1"/>
        <g class="db-spinner">
          <path d="M334,60 A18,18 0 1 1 316,42" fill="none" pathLength="1"/>
        </g>
        <path class="db-arrow s3" d="M368,60 L396,60 M389,54 L396,60 L389,66" pathLength="1"/>
        <g class="db-draw s3">
          <rect x="416" y="24" width="48" height="76" rx="9" fill="url(#dbPanel)" pathLength="1"/>
          <path d="M434,92 L446,92" pathLength="1" class="db-faint"/>
        </g>
        <text class="gd-label db-ulm" x="423" y="64" style="font-size:13px">ULM</text>
        <path class="db-arrow s4" d="M484,60 L512,60 M505,54 L512,60 L505,66" pathLength="1"/>
        <g class="db-notes">
          <g class="db-note n1"><ellipse cx="540" cy="76" rx="7" ry="5"/><path d="M547,74 L547,38 L562,34" pathLength="1"/></g>
          <g class="db-note n2"><ellipse cx="588" cy="62" rx="7" ry="5"/><path d="M595,60 L595,26 L610,22" pathLength="1"/></g>
          <g class="db-note n3"><ellipse cx="634" cy="72" rx="7" ry="5"/><path d="M641,70 L641,34" pathLength="1"/></g>
        </g>
      </svg>
      <div class="db-foot"><h3 class="db-word">Playback, Evaluate, Improve</h3></div>
    </a>

    <a class="db-bar" href="/contact" style="--i:4">
      <svg viewBox="0 0 720 120" role="img" aria-label="A scratched-out waveform, the talkback, the same waveform clean, then the mark of approval">
        <g class="db-draw s1">
          <path d="M26,60 L34,44 L41,72 L48,38 L56,78 L63,52 L70,64 L78,42 L86,70 L93,56 L100,60" pathLength="1"/>
        </g>
        <g class="db-scratch db-hot">
          <path d="M28,78 L98,40 M32,42 L96,76 M26,58 L102,62" pathLength="1"/>
        </g>
        <path class="db-arrow s2" d="M130,60 L158,60 M151,54 L158,60 L151,66" pathLength="1"/>
        <g class="db-talk s2">
          <circle cx="228" cy="60" r="28" fill="url(#dbPanel)" pathLength="1"/>
          <text class="gd-label db-talktext" x="209" y="65" style="font-size:12px">TALK</text>
        </g>
        <path class="db-arrow s3" d="M288,60 L316,60 M309,54 L316,60 L309,66" pathLength="1"/>
        <g class="db-cleanwave">
          <path d="M340,60 L348,44 L355,72 L362,38 L370,78 L377,52 L384,64 L392,42 L400,70 L407,56 L414,60 L422,48 L430,68 L437,54 L444,60" pathLength="1"/>
        </g>
        <path class="db-arrow s4" d="M474,60 L502,60 M495,54 L502,60 L495,66" pathLength="1"/>
        <g class="db-check">
          <circle cx="560" cy="60" r="27" fill="url(#dbPanel)" pathLength="1"/>
          <path class="db-hot" d="M546,60 L556,72 L576,44" pathLength="1"/>
        </g>
      </svg>
      <div class="db-foot"><h3 class="db-word">Explain It, Adapt, Solve It</h3></div>
    </a>

  </div>
  <div class="wrap router-note">
    <p>Whichever one it is, everything starts the same way: Edward reviews it and scopes it before any work or price is agreed. You do not need to know what it&rsquo;s called.</p>
  </div>
</section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label reveal"><span class="unit-no">02</span><span>The proof</span><span class="unit-note">ref: /work</span></div>
    <h2 class="unit-title">The Proof Is Checkable.</h2>
    <div class="unit-prose">
      <p>The credits on the Work page are worded the way the liner notes word them, and no bigger. Where the record says assistant, this site says assistant. You are right to verify &mdash; this business trained you to &mdash; so nothing here asks to be taken on faith.</p>
      <p>The stronger proof is coming: one artist&rsquo;s rough mix and finished mix under your own finger, level-matched and labeled as such. It stays off the page until that artist has said yes by name. Permission is part of the proof.</p>
    </div>
    <div class="needs-content"><strong>Fader slot &mdash; Push Up The Fader</strong>The signature interactive lives here once one artist&rsquo;s A/B pair is cleared: press play on their rough mix, push the fader, crossfade under your own finger into the finish. Level-matched and labeled as such. Blocked on Edward: the clips and the named permission.</div>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label reveal"><span class="unit-no">03</span><span>The terms</span><span class="unit-note">prices: /services</span></div>
    <h2 class="unit-title">The Terms, Out Loud.</h2>
    <div class="unit-prose">
      <p>Nothing here is sponsored. No affiliate links, no gear commissions, no partner codes. When a tool gets recommended, it is because it is right for your song, and the recommendation costs you the same either way: nothing.</p>
      <p>The paid work is mixing, production, studio systems and repair, and one-on-one teaching. The prices are on the Services page, with what they include, and independent budgets get met where they are.</p>
      <p>Messages come to me and get answered &mdash; there is nobody else here to answer them.</p>
    </div>
    <div class="needs-content"><strong>Response window &mdash; blocked on Edward</strong>The research says a stated, kept response time is the single best conversion lever on the whole site. The sentence above takes a number: &ldquo;answered within N.&rdquo; N must be a number Edward will actually keep &mdash; his call, then it goes here and on the contact form.</div>
  </div>
</section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label reveal"><span class="unit-no">04</span><span>The person</span><span class="unit-note">est. 2012</span></div>
    <h2 class="unit-title">A Person, Not A Platform.</h2>
    <div class="unit-prose">
      <p>Thirty years. Roughly seventy-five thousand studio hours. I got the coffee, ran the DAW, tuned the vocals, tracked, mixed, toured, built rooms, taught. Some of the records you know; the exact roles are on the Work page. When the buildings started closing, the knowledge didn&rsquo;t stop existing. It just stopped having anywhere to go.</p>
      <p class="unit-turn">This is where it goes.</p>
      <p>Why a site like this exists at all &mdash; the tools that reached everyone, the knowledge that never made the trip, Nebraska and the milk crate &mdash; is one click deep, on The Gap. The argument lives there so this page can just shake your hand.</p>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="wrap cta-inner">
    <div class="reveal">
      <span class="cta-dot" aria-hidden="true"></span>
      <h2>Either Way, You Now Have Us.</h2>
      <p>That is what this page is for. Not a funnel &mdash; a resource. Send the song that&rsquo;s fighting you. A rough, a voice memo, a photo of the room, or a question with no project attached at all. It comes to me &mdash; Edward, there is nobody else answering &mdash; and I answer everything.</p>
    </div>
    <div class="cta-doors reveal">
      <a class="btn primary" href="/contact"><span class="rec-dot" aria-hidden="true"></span>Send Me The Song</a>
      <p class="cta-alt">Or just keep reading &mdash; <a href="/contact">the knowledge stays free either way</a>.</p>
    </div>
  </div>
</section>

<div class="sheet-rev"><div class="wrap"><span>Home &middot; Rev. 2026-08-17</span><span>Maintained by Edward Lidow</span></div></div>
`;
