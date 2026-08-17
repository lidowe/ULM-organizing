// MOTION DRAFT v2 — Edward's revision pass (17 Aug): reel spins with
// windows (no leader tape), binder gets physical depth (checklists are
// YouTube; the binder is deeper), analyzer replaces the long wave, the
// gear panel becomes knob -> VU (needle never past half) -> knob unsynced,
// Say It resolves scratched wave -> TALK -> clean wave -> check, arrows
// between every panel, compositions equal width, and restrained fills /
// metal / shading on top of the line grammar. Sequencer choreography
// unchanged: each bar solos 3s of a 15s loop; hover replays.
export default `
<section class="page-hero">
  <div class="wrap">
    <span class="eyebrow">ULM &middot; Motion Draft</span>
    <h1 class="page-title display">The Five Doors.</h1>
    <p class="page-deck">Each story plays alone, in turn, then the row repeats. Hover any bar to replay it. The line under each bar is a placeholder slot for the mined intake language &mdash; not a caption of the picture.</p>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap doors-stack">

    <div class="db-bar" style="--i:0">
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
        <!-- cassette -->
        <g class="db-draw s1">
          <rect x="22" y="32" width="116" height="56" rx="5" fill="url(#dbPanel)" pathLength="1"/>
          <rect x="42" y="50" width="76" height="20" rx="10" fill="#0b0d11" pathLength="1"/>
          <circle cx="58" cy="60" r="7" fill="none" pathLength="1"/>
          <circle cx="102" cy="60" r="7" fill="none" pathLength="1"/>
          <path d="M34,42 L126,42" class="db-tanline" pathLength="1"/>
        </g>
        <path class="db-arrow s2" d="M158,60 L186,60 M179,54 L186,60 L179,66" pathLength="1"/>
        <!-- EQ move -->
        <g class="db-draw s2">
          <path d="M206,88 L356,88" pathLength="1"/>
          <path d="M206,88 L206,32" pathLength="1" class="db-faint"/>
        </g>
        <g class="db-eqmove">
          <path class="db-bell" d="M220,88 C246,88 252,42 270,42 C288,42 294,88 320,88" pathLength="1"/>
        </g>
        <path class="db-cut db-hot" d="M328,50 L342,88" pathLength="1"/>
        <path class="db-arrow s3" d="M378,60 L406,60 M399,54 L406,60 L399,66" pathLength="1"/>
        <!-- master reel: tan disc, windows showing the background through -->
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
      <div class="db-foot"><span class="db-word">Finish</span><span class="db-line">( line pending &mdash; mined from real intake )</span></div>
    </div>

    <div class="db-bar" style="--i:1">
      <svg viewBox="0 0 720 120" role="img" aria-label="A microphone, a cable with a break, and a speaker the sound never reaches">
        <!-- mic -->
        <g class="db-draw s1">
          <rect x="30" y="20" width="38" height="56" rx="19" fill="url(#dbPanel)" pathLength="1"/>
          <path d="M37,36 L61,36 M37,46 L61,46 M37,56 L61,56" pathLength="1" class="db-faint"/>
          <path d="M49,76 L49,98 M35,98 L63,98" pathLength="1"/>
        </g>
        <path class="db-arrow s2" d="M92,60 L120,60 M113,54 L120,60 L113,66" pathLength="1"/>
        <!-- broken cable -->
        <g class="db-draw s2">
          <path d="M142,60 C176,34 200,84 234,60" pathLength="1"/>
          <path d="M282,60 C316,36 340,82 374,60" pathLength="1"/>
        </g>
        <path class="db-spark db-hot" d="M248,44 L262,60 L250,60 L266,78" pathLength="1"/>
        <path class="db-arrow s3" d="M398,60 L426,60 M419,54 L426,60 L419,66" pathLength="1"/>
        <!-- speaker -->
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
      <div class="db-foot"><span class="db-word">Fix</span><span class="db-line">( line pending &mdash; mined from real intake )</span></div>
    </div>

    <div class="db-bar" style="--i:2">
      <svg viewBox="0 0 720 120" role="img" aria-label="A small console, a question mark, a thick studio binder, then an analyzer moving">
        <!-- console with depth -->
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
        <!-- binder with depth -->
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
        <!-- analyzer: short, bands bounce during the solo -->
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
      <div class="db-foot"><span class="db-word">Learn</span><span class="db-line">( line pending &mdash; mined from real intake )</span></div>
    </div>

    <div class="db-bar" style="--i:3">
      <svg viewBox="0 0 720 120" role="img" aria-label="A knob, a VU meter whose needle never passes halfway, a second knob out of sync, money, a spinner going nowhere, then a phone reading ULM and music">
        <!-- gear: knob / VU / knob -->
        <g class="db-draw s1">
          <circle cx="44" cy="60" r="16" fill="url(#dbMetal)" pathLength="1"/>
        </g>
        <g class="db-knob1"><path d="M44,60 L44,46" pathLength="1"/></g>
        <g class="db-draw s1">
          <rect x="76" y="34" width="92" height="52" rx="3" fill="url(#dbPanel)" pathLength="1"/>
          <path d="M92,72 A34,34 0 0 1 152,72" fill="none" pathLength="1" class="db-faint"/>
          <path d="M96,66 L100,62 M122,50 L122,44 M148,66 L144,62" pathLength="1" class="db-faint"/>
          <path d="M152,72 L158,66" class="db-hot" pathLength="1"/>
        </g>
        <g class="db-vu"><path d="M122,78 L122,48" pathLength="1"/></g>
        <g class="db-draw s1">
          <circle cx="196" cy="60" r="16" fill="url(#dbMetal)" pathLength="1"/>
        </g>
        <g class="db-knob2"><path d="M196,60 L196,46" pathLength="1"/></g>
        <text class="gd-label db-cash" x="222" y="72" style="font-size:32px">$</text>
        <path class="db-arrow s2" d="M262,60 L290,60 M283,54 L290,60 L283,66" pathLength="1"/>
        <!-- spinner -->
        <g class="db-spinner">
          <path d="M348,60 A18,18 0 1 1 330,42" fill="none" pathLength="1"/>
        </g>
        <path class="db-arrow s3" d="M382,60 L410,60 M403,54 L410,60 L403,66" pathLength="1"/>
        <!-- phone -->
        <g class="db-draw s3">
          <rect x="430" y="24" width="48" height="76" rx="9" fill="url(#dbPanel)" pathLength="1"/>
          <path d="M448,92 L460,92" pathLength="1" class="db-faint"/>
        </g>
        <text class="gd-label db-ulm" x="437" y="64" style="font-size:13px">ULM</text>
        <path class="db-arrow s4" d="M498,60 L526,60 M519,54 L526,60 L519,66" pathLength="1"/>
        <!-- music out -->
        <g class="db-notes">
          <g class="db-note n1"><ellipse cx="552" cy="76" rx="7" ry="5"/><path d="M559,74 L559,38 L574,34" pathLength="1"/></g>
          <g class="db-note n2"><ellipse cx="600" cy="62" rx="7" ry="5"/><path d="M607,60 L607,26 L622,22" pathLength="1"/></g>
          <g class="db-note n3"><ellipse cx="646" cy="72" rx="7" ry="5"/><path d="M653,70 L653,34" pathLength="1"/></g>
        </g>
      </svg>
      <div class="db-foot"><span class="db-word">Listen</span><span class="db-line">( line pending &mdash; mined from real intake )</span></div>
    </div>

    <div class="db-bar" style="--i:4">
      <svg viewBox="0 0 720 120" role="img" aria-label="A scratched-out waveform, the talkback, the same waveform clean, then the mark of approval">
        <!-- frustration -->
        <g class="db-draw s1">
          <path d="M26,60 L34,44 L41,72 L48,38 L56,78 L63,52 L70,64 L78,42 L86,70 L93,56 L100,60" pathLength="1"/>
        </g>
        <g class="db-scratch db-hot">
          <path d="M28,78 L98,40 M32,42 L96,76 M26,58 L102,62" pathLength="1"/>
        </g>
        <path class="db-arrow s2" d="M130,60 L158,60 M151,54 L158,60 L151,66" pathLength="1"/>
        <!-- talkback -->
        <g class="db-talk s2">
          <circle cx="228" cy="60" r="28" fill="url(#dbPanel)" pathLength="1"/>
          <text class="gd-label db-talktext" x="209" y="65" style="font-size:12px">TALK</text>
        </g>
        <path class="db-arrow s3" d="M288,60 L316,60 M309,54 L316,60 L309,66" pathLength="1"/>
        <!-- the same wave, clean -->
        <g class="db-cleanwave">
          <path d="M340,60 L348,44 L355,72 L362,38 L370,78 L377,52 L384,64 L392,42 L400,70 L407,56 L414,60 L422,48 L430,68 L437,54 L444,60" pathLength="1"/>
        </g>
        <path class="db-arrow s4" d="M474,60 L502,60 M495,54 L502,60 L495,66" pathLength="1"/>
        <!-- confirmation -->
        <g class="db-check">
          <circle cx="560" cy="60" r="27" fill="url(#dbPanel)" pathLength="1"/>
          <path d="M546,60 L556,72 L576,44" pathLength="1"/>
        </g>
      </svg>
      <div class="db-foot"><span class="db-word">Say It</span><span class="db-line">( line pending &mdash; mined from real intake )</span></div>
    </div>

  </div>
  <div class="wrap router-note">
    <p>Draft v2 notes: fills, metal and shading over the 1px grammar; reel spins with its windows; binder carries depth; the analyzer bounces only during its solo; the VU needle works but never gets past halfway; the two knobs drift out of sync on purpose. Reduced-motion visitors see every bar resting on its final frame. The scan words are set; the lines wait for the real language.</p>
  </div>
</section>
`;
