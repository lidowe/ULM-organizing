// On Record — the evidence layer, consolidated: credits with exact roles,
// the plaques, the artists (vetting caveat kept in source), the rooms, and
// the equipment. No motion here: proof is photographs, plaques and roles,
// and a narrated physics scene on this page would be decoration.
export default `
<section class="page-hero"><div class="wrap"><div class="eyebrow">On record</div><h1 class="page-title">Real Records. Real Roles.</h1><p class="page-deck">Major-label sessions and independent records, across genres. Precise roles where publicly credited.</p><figure class="work-lead-photo"><img src="{{IMG:ed-at-the-console}}" alt="Edward Lidow at a large-format console with a session running, seen from behind, a band tracking through the control room glass" fetchpriority="high" /></figure></div></section>

<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">Selected discography</div><div><h2 class="section-title">The Credits, With Their Exact Roles.</h2><div class="section-copy"><p>Role language follows the public credits.</p></div></div></div>
  <div class="wrap">
    <div class="filter-bar reveal" aria-label="Filter selected work"><button class="active" type="button" data-filter="all">All</button><button type="button" data-filter="recording">Recording</button><button type="button" data-filter="mix">Mix</button><button type="button" data-filter="engineering">Engineering</button><button type="button" data-filter="assistant">Assistant</button></div>
    <div class="work-grid reveal">
      {{CREDIT_CARDS}}
    </div>
    <div class="needs-content"><strong>Credits to confirm</strong>Every card above except <em>Pink Friday</em> is matched to a public Discogs credit. The <em>Nicki Minaj &middot; Pink Friday</em> entry is not currently listed under any of Edward&rsquo;s credit spellings, confirm the release and exact role, or remove the card.</div>
    <figure class="credit-photo credit-photo-right reveal"><img src="{{IMG:credits-wayne}}" alt="Edward Lidow with Lil Wayne in the control room" loading="lazy" /></figure>
    <p class="credit-note reveal">Additional catalog includes <em>Rebirth</em>, <em>No Ceilings</em>, <em>I Am Not a Human Being</em>, <em>Rise of an Empire</em>, <em>Pricele$$</em>, <em>The Elephant in the Room</em>, and other releases. Public credits also appear under Edward &ldquo;Jewfro&rdquo; Lidow, Edward Lidow, Ed Lidow, and Edward Lido.</p>
    <div class="credit-links reveal"><a class="btn" href="https://www.allmusic.com/artist/edward-jewfro-lidow-mn0002394304" target="_blank" rel="noreferrer">AllMusic credits</a><a class="btn" href="https://www.discogs.com/artist/1268296-Edward-Lidow" target="_blank" rel="noreferrer">Discogs profile</a></div>
    <div class="award-grid reveal"><figure class="award-plaque"><img src="{{IMG:award-billboard-willie-hires}}" alt="Billboard number one plaque for Willie Nelson, Band of Brothers" loading="lazy" /><figcaption>Willie Nelson, <em>Band of Brothers</em>, Billboard #1 Top Country Albums</figcaption></figure><figure class="award-plaque"><img src="{{IMG:award-riaa-katy-lfn}}" alt="RIAA multi-platinum plaque for Katy Perry, Last Friday Night" loading="lazy" /><figcaption>Katy Perry, <em>Last Friday Night (T.G.I.F.)</em>, RIAA 6&times; platinum</figcaption></figure><figure class="award-plaque"><img src="{{IMG:award-riaa-katy-teenage-dream}}" alt="RIAA multi-platinum plaque for Katy Perry, Teenage Dream" loading="lazy" /><figcaption>Katy Perry, <em>Teenage Dream</em>, RIAA 8&times; platinum</figcaption></figure><figure class="award-plaque"><img src="{{IMG:award-riaa-nicki-pink-friday}}" alt="RIAA multi-platinum plaque for Nicki Minaj, Pink Friday" loading="lazy" /><figcaption>Nicki Minaj, <em>Pink Friday</em>, RIAA 3&times; platinum</figcaption></figure><figure class="award-plaque"><img src="{{IMG:award-riaa-wayne-rebirth}}" alt="RIAA gold plaque for Lil Wayne, Rebirth" loading="lazy" /><figcaption>Lil Wayne, <em>Rebirth</em>, RIAA gold</figcaption></figure></div>
  </div>
</section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">01</span><span>Every role</span></div>
    <h2 class="unit-title">From the Coffee to the Console.</h2>
    <div class="unit-prose">
      <p>Various roles, various artists, whether the role was large or small or the artist famous or not, every job contributes to the &lsquo;flow state&rsquo; every job asks 100% focus &hellip; yes, even the coffee can ruin an entire day, or fuel the magic later.</p>
      <p class="unit-turn">The takeaway is &hellip; no matter the task, we serve the process, we work in service to the song, and the ego stays outside.</p>
      <p>Get them coffee, route signal flow and place mics, run the DAW or be the tape op, it all was part of a bigger picture and personal growth. Running cables became running sessions, tuning instruments became vocal tuning and production, production became tracking engineer, mix engineer, mastering, or going on tour with them.</p>
      <p>Relationships carried on, years go by and I&rsquo;m asked to build their private studio after our work together commercially&hellip; by being their barista a decade earlier. Others continue as clients, friends and contemporaries to this day. The only thing that stays consistent is the dedication and effort put into every detail.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">Selected artists &amp; clients</div><div><h2 class="section-title">Range Is Part of the Work.</h2><div class="section-copy"><p>A partial list. Roles vary by artist and session.</p></div></div></div>
  <div class="wrap"><div class="needs-content"><strong>Artist list needs vetting</strong>This roster is broad and largely unverifiable from public credits. Before publishing, mark each name with the actual involvement (session attended, assisted, engineered, mixed) and delete any that can&rsquo;t be substantiated, an inflated list undercuts the verified credits above.</div></div>
  <div class="wrap artist-index reveal">{{ARTIST_INDEX}}</div>
  <div class="wrap section-header reveal" style="margin-top:3rem"><div class="kicker">Media &amp; brands</div></div>
  <div class="wrap artist-index reveal">{{MEDIA_INDEX}}</div>
</section>

<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">Studios &amp; institutions</div><div><h2 class="section-title">Built in Real Studios.</h2><div class="section-copy"><p>Rooms worked in, taught in, and in one case built from scratch.</p></div></div></div>
  <div class="wrap artist-index reveal"><span>Hit Factory / Criteria Miami</span><span>Bay 8 Miami &middot; original room, built and sold</span><span>Record Plant Los Angeles</span><span>Chicago Recording Company</span><span>Dream Asylum</span><span>Studio 8 Miami</span><span>The Jam Room &middot; Columbia</span><span>Midlands Audio Institute</span><span>Midlands Technical College</span><span>Miami Historical Museum</span><span>WoG Ministries</span></div>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">02</span><span>The room here</span></div>
    <h2 class="unit-title">A Private Studio, by Appointment.</h2>
    <div class="unit-prose">
      <p>Not a high-volume facility. One project at a time, so the setup stays built around the work in front of it. Most sessions run remotely; the locker is here when a source needs to be captured properly.</p>
      <p>The point of a deep locker is not the count. It is being able to change the path when the source asks for it.</p>
    </div>
    <div class="studio-gallery reveal"><figure><img src="{{IMG:studio-racks}}" alt="Two rolling racks of outboard gear beside a large speaker cabinet, including SansAmp, Chandler Germanium preamps, an Ampeg head and an A-Designs MP-2A tube preamp" loading="lazy" /></figure><figure><img src="{{IMG:studio-drums}}" alt="Gretsch drum kit miked up on a patterned rug in the live area, surrounded by cymbals and boom stands" loading="lazy" /></figure></div>
  </div>
</section>

<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">Equipment</div><div><h2 class="section-title">The List.</h2><div class="section-copy"><p>Microphones, preamps, equalizers and dynamics, grouped by topology, because that is how they get chosen.</p></div></div></div>
  <div class="wrap photo-set four short reveal">
    <figure><img src="{{IMG:locker-shelves}}" alt="Shelves of microphone cases and boxes in the mic locker" loading="lazy" /><figcaption>The locker</figcaption></figure>
    <figure><img src="{{IMG:mics-fan-cab}}" alt="Five microphones fanned out in front of a guitar speaker cabinet" loading="lazy" /><figcaption>Choosing the path</figcaption></figure>
    <figure><img src="{{IMG:racks-preamp-loom}}" alt="Outboard preamps and a loom of patch cables behind the rack" loading="lazy" /><figcaption>Front end</figcaption></figure>
    <figure><img src="{{IMG:bench-tech-repair}}" alt="A circuit board mid-repair on the tech bench" loading="lazy" /><figcaption>Kept working</figcaption></figure>
  </div>
  <div class="wrap tools-details reveal">
    <details><summary>Tube large diaphragm condensers</summary><div class="detail-body">Wunder Audio CM7 GS (K47 capsule, NOS Telefunken 800-series tube, external HV supply) &middot; Telefunken TF51 (in-house CK12 capsule, NOS 6072a, external HV supply)</div></details>
    <details><summary>Large &amp; medium diaphragm condensers</summary><div class="detail-body">Stam U87 Red Badge &middot; Stam U87 Black Badge &middot; Sony C-100 &middot; Audix SCX25A &middot; Earthworks Ethos &middot; Audio-Technica AT4033a (pair), 11 units, 7 models</div></details>
    <details><summary>Small diaphragm condensers</summary><div class="detail-body">Beyerdynamic MC 930 &middot; Shure SM81 &middot; AKG C451e with CK1 &middot; AKG C451b &middot; Electro-Voice RE200 &middot; Peavey PVM 480, 11 units, 6 models</div></details>
    <details><summary>Ribbons</summary><div class="detail-body">Coles 4038 (pair) &middot; Cascade Fat Head II (pair). Highest gain demand in the locker, the 4038 wants 70&ndash;80 dB from a quiet preamp, and every ribbon patch point is labelled against phantom power.</div></details>
    <details><summary>Dynamic microphones</summary><div class="detail-body">Sennheiser MD 441-U (2) &middot; Sennheiser 521 Black Fire (2) &middot; Sennheiser BF 509 Black Fire (2) &middot; Electro-Voice RE20 &middot; Electro-Voice PL10 &middot; Electro-Voice N/DYM series (8) &middot; Shure SM7B &middot; Shure Beta 52A &middot; Shure SM57 (7) &middot; Shure SM58 (5) &middot; Telefunken M80 / M80s (5) &middot; Yamaha MZ series (6) &middot; Heil PR 40 &middot; Beyerdynamic M201 &middot; Beyerdynamic M422n(c) (3) &middot; Beyerdynamic X99 &middot; Audix D-series (11) &middot; Peavey PVM (2) &middot; AKG D112 v1 &middot; Audio-Technica ATM25 &middot; sE Electronics V7 &middot; Lewitt MTP 550 DM, 67 units, 41 models</div></details>
    <details><summary>Boundary, specialty &amp; measurement</summary><div class="detail-body">Shure SM91 (PZM) &middot; Beyerdynamic TG D71 &middot; Audix M1255B miniature condensers (3) &middot; Crown GLM-200 &middot; calibrated measurement microphone with REW correction file &middot; Zoom H4n Pro field recorder</div></details>
    <details><summary>Preamps, all-valve</summary><div class="detail-body">Thermionic Culture Rooster 2 (2ch, zero solid-state, Sowter transformers, triode/pentode harmonic switching) &middot; A-Designs MP-2A (2ch, zero-feedback, Cinemag in, EF86 into 6N1-P, switchable 600&thinsp;&Omega;/10&thinsp;k&Omega; output) &middot; Manley Dual Mono blackface, 1999 (2ch, single-ended Class A, White Cathode Follower output)</div></details>
    <details><summary>Preamps, hybrid tube &amp; pentode</summary><div class="detail-body">Sonic Farm Creamer+ (2ch, EF86 pentode into switchable Cinemag or discrete output) &middot; Pendulum Audio Quartet II &middot; Stam Audio SA-69 (Helios Type 69) &middot; A-Designs Ventura SE</div></details>
    <details><summary>Preamps, discrete solid-state</summary><div class="detail-body">API 3122V (2ch) &middot; Eclair Evil Twin, Jensen mod (2 units) &middot; Wunder Audio PEQ2R &middot; Wunder Audio PEQ2/4R &middot; Chandler Germanium Pre (matched pair on PSU-1 MKII) &middot; Tonelux MP5A in A-Designs 503HR</div></details>
    <details><summary>Preamps, DC-coupled &amp; split</summary><div class="detail-body">Pueblo Audio JR2/2 (2ch, +50&thinsp;V phantom reserve, shares PS34 with the HJ 482 summing) &middot; NPNG DMP-2NW (2ch) &middot; Undertone Audio MPEQ-1 (matched pair; SEP mode splits preamp and parametric EQ into independent processors)</div></details>
    <details><summary>Equalizers</summary><div class="detail-body">Retro Instruments 2A3 (all-tube passive LC, Pultec EQP-1A3 topology, 40/90&thinsp;Hz interstage subsonic filter) &middot; Langevin Mini Massive Passive (passive LC, Manley Rapture discrete op-amps, 3-position IRON transformer switch) &middot; Chandler Tone Control EQ (pair, germanium Class A, passive inductor low band, Thick control) &middot; Iron Age Audio Works V2 (bridged-T, all-discrete, 18 frequencies, tracking and mastering modes) &middot; Tonelux Equalux (4-band proportional Q with per-band 1/3-octave peak) &middot; Tonelux Tilt Rack (2 units, 16 channels of reciprocal tilt at 650&thinsp;Hz) &middot; Furman Punch 10 subharmonic synthesizer</div></details>
    <details><summary>Compressors, tube &amp; optical</summary><div class="detail-body">Retro Instruments 176 (variable-mu, ratio switched via output transformer taps) &middot; Retro Instruments STA-Level Gold (Gates Sta-Level lineage, push-pull vari-mu, 40&thinsp;dB GR at &le;1% THD) &middot; Retro Instruments Revolver (Altec 436B / EMI RS124 lineage, Dual Threshold) &middot; ADL-1000 (T4B optical, all-tube makeup) &middot; Audioscape DA-3A (2ch optical) &middot; Drawmer 1968 MKII (2ch J-FET with 12AX7 makeup)</div></details>
    <details><summary>Compressors, FET, VCA, diode &amp; zener</summary><div class="detail-body">Mohog Audio MoFET 76 (1176 Rev F, switchable Edcor or Carnhill output) &middot; Wes Audio Beta76 (pair) &middot; dbx 160XT transformer-modded pair (Jensen JT-123-DBX / Cinemag) &middot; dbx 160VU &middot; Audioscape 4000E (SSL 4000E center section, in-house 202C VCAs) &middot; Audioscape G-Comp (SSL G384, THAT VCAs, transformerless) &middot; Audioscape MK-609 (Neve 33609 BA440 diode bridge, NOS parts) &middot; Audioscape D-Comp (EMI TG12413 zener limiter; OUT mode is pure transformer saturation) &middot; Tonelux Dynalux (all-discrete, continuous feedback-to-feed-forward blend, OVER mode)</div></details>
    <details><summary>Limiting, de-essing, gating &amp; spectral</summary><div class="detail-body">Pendulum Audio PL-2 (switchable JFET or MOSFET brickwall, limiter devices out of path below threshold) &middot; dbx 900 rack with two dbx 902 de-essers &middot; Drawmer DS201 dual gate (key filters and Key Listen) &middot; Dolby 740 spectral processors (2)</div></details>
    <details><summary>Conversion, summing &amp; monitoring</summary><div class="detail-body">Dangerous Music AD+ (mastering-grade ADC) &middot; Dangerous Music D-Box+ monitor controller and summing &middot; Lynx Aurora(n) &middot; three-stage summing cascade: Pueblo HJ 482 &rarr; Tonelux OTB &rarr; API ASM 164 &middot; API Power Wedge 114 balanced power, prioritized to the tube rails. Converters are treated as a critical analog stage; external supplies and clock radiators stay out of the high-gain zone.</div></details>
  </div>
</section>

<section class="page-next">
  <div class="wrap next-grid">
    <a class="next-card" href="/learn">
      <span class="next-kicker">Next</span>
      <h3>What all of it taught.</h3>
      <p>The training that produced these roles is gone as a career path. This is where it gets handed over instead.</p>
    </a>
    <div class="next-cta">
      <p>Or bring the record you are trying to finish.</p>
      <a class="btn primary" href="/start">Start here</a>
    </div>
  </div>
</section>
`;
