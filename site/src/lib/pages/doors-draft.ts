// MOTION DRAFT — not linked from anywhere, noindex. The five door story
// bars for the new Home, drawn in the site's 1px diagram grammar, animated
// as a sequencer: each bar plays one cycle alone, in order, then the loop
// repeats. Stories specified by Edward (17 Aug): Finish, Fix, Learn,
// Listen, Say It. Sub-lines are placeholders pending his mined intake
// language — deliberately NOT translations of the images.
export default `
<section class="page-hero">
  <div class="wrap">
    <span class="eyebrow">ULM &middot; Motion Draft</span>
    <h1 class="page-title display">The Five Doors.</h1>
    <p class="page-deck">Each story plays alone, in turn, then the row repeats. Hover any bar to hold it. Labels are the two scan-words; the line under each is a placeholder slot &mdash; it takes your mined intake language, and it is not a caption of the picture.</p>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap doors-stack">

    <div class="db-bar" style="--i:0">
      <svg viewBox="0 0 640 120" role="img" aria-label="A cassette tape, then an EQ boost rising, shifting, narrowing and cutting, then a master tape reel">
        <!-- cassette -->
        <g class="db-draw s1">
          <rect x="22" y="32" width="108" height="56" rx="5" pathLength="1"/>
          <circle cx="52" cy="60" r="10" pathLength="1"/>
          <circle cx="100" cy="60" r="10" pathLength="1"/>
          <path d="M62,60 L90,60" pathLength="1"/>
          <path d="M34,78 L118,78" pathLength="1" class="db-faint"/>
        </g>
        <path class="db-arrow s2" d="M150,60 L182,60 M174,54 L182,60 L174,66" pathLength="1"/>
        <!-- EQ move: axis, bell that rises/shifts/narrows, then the cut -->
        <g class="db-draw s2">
          <path d="M204,88 L344,88" pathLength="1"/>
          <path d="M204,88 L204,30" pathLength="1" class="db-faint"/>
        </g>
        <g class="db-eqmove">
          <path class="db-bell" d="M216,88 C242,88 248,42 266,42 C284,42 290,88 316,88" pathLength="1"/>
        </g>
        <path class="db-cut db-hot" d="M318,50 L332,88" pathLength="1"/>
        <path class="db-arrow s3" d="M360,60 L392,60 M384,54 L392,60 L384,66" pathLength="1"/>
        <!-- master reel -->
        <g class="db-draw s3">
          <circle cx="470" cy="60" r="40" pathLength="1"/>
          <path d="M508,74 L600,88" pathLength="1"/>
        </g>
        <g class="db-spokes">
          <circle cx="470" cy="60" r="8" pathLength="1"/>
          <path d="M470,52 L470,26 M463,64 L441,77 M477,64 L499,77" pathLength="1"/>
        </g>
      </svg>
      <div class="db-foot"><span class="db-word">Finish</span><span class="db-line">( line pending &mdash; mined from real intake )</span></div>
    </div>

    <div class="db-bar" style="--i:1">
      <svg viewBox="0 0 640 120" role="img" aria-label="A microphone, a cable with a break in the path, and a speaker with the sound not arriving">
        <!-- mic -->
        <g class="db-draw s1">
          <rect x="34" y="22" width="36" height="54" rx="18" pathLength="1"/>
          <path d="M40,38 L64,38 M40,48 L64,48" pathLength="1" class="db-faint"/>
          <path d="M52,76 L52,98 M38,98 L66,98" pathLength="1"/>
        </g>
        <!-- cable, broken -->
        <g class="db-draw s2">
          <path d="M92,60 C140,28 170,92 224,60" pathLength="1"/>
          <path d="M268,60 C316,32 340,86 384,60" pathLength="1"/>
        </g>
        <path class="db-spark db-hot" d="M236,46 L248,60 L238,60 L252,76" pathLength="1"/>
        <!-- speaker, nothing arrives -->
        <g class="db-draw s3">
          <rect x="404" y="34" width="46" height="52" pathLength="1"/>
          <path d="M450,44 L482,24 L482,96 L450,76" pathLength="1"/>
        </g>
        <g class="db-arcs">
          <path d="M500,42 C512,52 512,68 500,78" pathLength="1"/>
          <path d="M516,34 C532,48 532,72 516,86" pathLength="1"/>
          <path d="M532,26 C552,44 552,76 532,94" pathLength="1"/>
        </g>
      </svg>
      <div class="db-foot"><span class="db-word">Fix</span><span class="db-line">( line pending &mdash; mined from real intake )</span></div>
    </div>

    <div class="db-bar" style="--i:2">
      <svg viewBox="0 0 640 120" role="img" aria-label="A small mixing console, a question mark, a studio binder, then a complex sound wave moving">
        <!-- tiny console -->
        <g class="db-draw s1">
          <rect x="24" y="40" width="102" height="46" pathLength="1"/>
          <path d="M40,50 L40,78 M62,50 L62,78 M84,50 L84,78 M106,50 L106,78" pathLength="1" class="db-faint"/>
          <path d="M35,64 L45,64 M57,56 L67,56 M79,70 L89,70 M101,60 L111,60" pathLength="1"/>
        </g>
        <text class="gd-label db-q" x="162" y="74" style="font-size:44px">?</text>
        <!-- binder -->
        <g class="db-draw s2">
          <rect x="222" y="28" width="72" height="66" pathLength="1"/>
          <circle cx="234" cy="44" r="4" pathLength="1"/>
          <circle cx="234" cy="61" r="4" pathLength="1"/>
          <circle cx="234" cy="78" r="4" pathLength="1"/>
          <path d="M250,46 L282,46 M250,58 L282,58" pathLength="1" class="db-faint"/>
        </g>
        <path class="db-arrow s3" d="M316,60 L348,60 M340,54 L348,60 L340,66" pathLength="1"/>
        <!-- complex wave, moving -->
        <path class="db-wave s3" d="M368,60 L376,40 L383,74 L389,30 L397,82 L404,50 L410,66 L418,36 L426,78 L433,55 L440,62 L448,42 L456,72 L463,34 L471,80 L478,52 L485,64 L493,44 L501,70 L508,58 L516,62 L524,46 L532,70 L540,38 L548,76 L556,54 L564,62 L572,48 L580,66 L588,58 L596,60" pathLength="1"/>
      </svg>
      <div class="db-foot"><span class="db-word">Learn</span><span class="db-line">( line pending &mdash; mined from real intake )</span></div>
    </div>

    <div class="db-bar" style="--i:3">
      <svg viewBox="0 0 640 120" role="img" aria-label="Gear and money, a spinner going nowhere, a phone with ULM on the screen, then music">
        <!-- gear + $ -->
        <g class="db-draw s1">
          <rect x="24" y="36" width="92" height="48" pathLength="1"/>
          <circle cx="44" cy="60" r="7" pathLength="1"/>
          <circle cx="70" cy="60" r="7" pathLength="1"/>
          <circle cx="96" cy="60" r="7" pathLength="1"/>
        </g>
        <text class="gd-label db-cash" x="128" y="72" style="font-size:34px">$</text>
        <!-- spinner -->
        <g class="db-spinner">
          <path d="M228,60 A18,18 0 1 1 210,42" fill="none" pathLength="1"/>
        </g>
        <!-- phone with ULM -->
        <g class="db-draw s2">
          <rect x="272" y="24" width="48" height="76" rx="9" pathLength="1"/>
          <path d="M290,92 L302,92" pathLength="1" class="db-faint"/>
        </g>
        <text class="gd-label db-ulm" x="279" y="64" style="font-size:13px">ULM</text>
        <!-- music out -->
        <g class="db-notes">
          <g class="db-note n1"><ellipse cx="372" cy="76" rx="7" ry="5" pathLength="1"/><path d="M379,74 L379,38 L394,34" pathLength="1"/></g>
          <g class="db-note n2"><ellipse cx="428" cy="62" rx="7" ry="5" pathLength="1"/><path d="M435,60 L435,26 L450,22" pathLength="1"/></g>
          <g class="db-note n3"><ellipse cx="484" cy="72" rx="7" ry="5" pathLength="1"/><path d="M491,70 L491,34" pathLength="1"/></g>
        </g>
      </svg>
      <div class="db-foot"><span class="db-word">Listen</span><span class="db-line">( line pending &mdash; mined from real intake )</span></div>
    </div>

    <div class="db-bar" style="--i:4">
      <svg viewBox="0 0 640 120" role="img" aria-label="A scratched-out waveform, a talkback button, then a confirmation mark">
        <!-- frustration: the scratched-out wave -->
        <g class="db-draw s1">
          <path d="M28,60 L36,44 L43,72 L50,38 L58,78 L65,52 L72,64 L80,42 L88,70 L95,56 L102,60" pathLength="1"/>
        </g>
        <g class="db-scratch db-hot">
          <path d="M30,78 L100,40 M34,42 L98,76 M28,58 L104,62" pathLength="1"/>
        </g>
        <path class="db-arrow s2" d="M132,60 L164,60 M156,54 L164,60 L156,66" pathLength="1"/>
        <!-- talkback -->
        <g class="db-talk s2">
          <circle cx="234" cy="60" r="28" pathLength="1"/>
          <text class="gd-label db-talktext" x="215" y="65" style="font-size:12px">TALK</text>
        </g>
        <path class="db-arrow s3" d="M296,60 L328,60 M320,54 L328,60 L320,66" pathLength="1"/>
        <!-- confirmation -->
        <g class="db-draw s3">
          <circle cx="392" cy="60" r="28" pathLength="1"/>
          <path d="M378,60 L388,72 L408,44" pathLength="1"/>
        </g>
      </svg>
      <div class="db-foot"><span class="db-word">Say It</span><span class="db-line">( line pending &mdash; mined from real intake )</span></div>
    </div>

  </div>
  <div class="wrap router-note">
    <p>Draft notes: strokes and colours are the gap-diagram grammar; each bar solos for three seconds in a fifteen-second loop; hovering a bar replays it immediately. Reduced-motion visitors see every bar resting on its final frame. The two scan-words are set; the lines underneath wait for the real language.</p>
  </div>
</section>
`;
