// On Record — trial iteration: case notes first (judgment), then the credits
// with plaques beside them (access), then Lovable's
// Studio page folded in, because the gear is evidence rather than the offer.
export default `

<section class="page-hero"><div class="wrap"><div class="eyebrow">Selected work</div><h1 class="page-title">On record.</h1><p class="page-deck">Major-label sessions and independent records, across genres. Precise roles where publicly credited.</p><figure class="work-lead-photo"><img src="{{IMG:session-redlit-2}}" alt="Two people seated at a large-format console during a working session under red light" fetchpriority="high" /></figure></div></section>
<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">Case notes</div><div><h2 class="section-title">What they said. What it was. What was done.</h2><div class="section-copy"><p>Credits show where the work happened. These show how the judgment works.</p></div></div></div>
  <div class="wrap case-list reveal">
    <article class="case">
      <div class="case-row"><span class="case-k">What they said</span><p>&ldquo;Make the guitar sound more purple.&rdquo;</p></div>
      <div class="case-row"><span class="case-k">What it was</span><p>Sound has very few words of its own. Hearing the word purple made me think of Prince, and Prince used a lot of chorus (the Roland Dimension D) and gentle doubler effects (the Eventide H3500 being his favorite).</p></div>
      <div class="case-row"><span class="case-k">What was done</span><p>I reached for a few chorusy effects and a gentle harmonizer, hit play, and they said &ldquo;yes! exactly.&rdquo;</p></div>
    </article>
    <div class="needs-content"><strong>Case notes needed</strong>Two or three more real sessions in this same three-line shape: the words the client used, what the problem turned out to be, and what fixed it. No names needed. This is the one place the site can show judgment rather than claim it.</div>
  </div>
</section>

<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">Selected discography</div><div><h2 class="section-title">Real records. Real roles.</h2><div class="section-copy"><p>Public role language where available, kept legible instead of exhaustive.</p></div></div></div>
  <div class="wrap">
    <div class="filter-bar reveal" aria-label="Filter selected work"><button class="active" type="button" data-filter="all">All</button><button type="button" data-filter="recording">Recording</button><button type="button" data-filter="mix">Mix</button><button type="button" data-filter="engineering">Engineering</button><button type="button" data-filter="assistant">Assistant</button></div>
    <div class="work-grid reveal">
      {{CREDIT_CARDS}}
    </div>
    <div class="needs-content"><strong>Credits to confirm</strong>Every card above except <em>Pink Friday</em> is matched to a public Discogs credit. The <em>Nicki Minaj · Pink Friday</em> entry is not currently listed under any of Edward’s credit spellings, confirm the release and exact role, or remove the card.</div>
    <figure class="credit-photo credit-photo-right reveal"><img src="{{IMG:credits-wayne}}" alt="Edward Lidow with Lil Wayne in the control room" loading="lazy" /></figure>
    <p class="credit-note reveal">Additional catalog includes <em>Rebirth</em>, <em>No Ceilings</em>, <em>I Am Not a Human Being</em>, <em>Rise of an Empire</em>, <em>Pricele$$</em>, <em>The Elephant in the Room</em>, and other releases. Public credits also appear under Edward “Jewfro” Lidow, Edward Lidow, Ed Lidow, and Edward Lido.</p>
    <div class="credit-links reveal"><a class="btn" href="https://www.allmusic.com/artist/edward-jewfro-lidow-mn0002394304" target="_blank" rel="noreferrer">AllMusic credits</a><a class="btn" href="https://www.discogs.com/artist/1268296-Edward-Lidow" target="_blank" rel="noreferrer">Discogs profile</a></div>
  </div>
</section>
<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">Selected artists &amp; clients</div><div><h2 class="section-title">Range is part of the work.</h2><div class="section-copy"><p>A partial list. Roles vary by artist and session.</p></div></div></div>
  <div class="wrap"><div class="needs-content"><strong>Artist list needs vetting</strong>This roster is broad and largely unverifiable from public credits. Before publishing, mark each name with the actual involvement (session attended, assisted, engineered, mixed) and delete any that can’t be substantiated, an inflated list undercuts the verified credits above.</div></div>
  <div class="wrap artist-index reveal">{{ARTIST_INDEX}}</div>
  <div class="wrap section-header reveal" style="margin-top:3rem"><div class="kicker">Media &amp; brands</div></div>
  <div class="wrap artist-index reveal">{{MEDIA_INDEX}}</div>
</section>
<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">Studios &amp; institutions</div><div><h2 class="section-title">Built in real studios.</h2><div class="section-copy"><p>Rooms worked in, taught in, and in one case built from scratch.</p></div></div></div>
  <div class="wrap artist-index reveal"><span>Hit Factory / Criteria Miami</span><span>Bay 8 Miami &middot; original room, built and sold</span><span>Record Plant Los Angeles</span><span>Chicago Recording Company</span><span>Dream Asylum</span><span>Studio 8 Miami</span><span>The Jam Room · Columbia</span><span>Midlands Audio Institute</span><span>Midlands Technical College</span><span>Miami Historical Museum</span><span>WoG Ministries</span></div>
</section>
<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">Studio</div><div><h2 class="section-title">Studio and technology.</h2><div class="section-copy"><p>The locker and the racks, listed plainly. 103 microphones, 64 models, and the analog front end they run into.</p></div></div></div>
  <div class="wrap"><figure class="studio-hero-photo reveal"><img src="{{IMG:desk-monitors-control}}" alt="The control room desk with nearfield monitors and outboard racks in daylight" loading="lazy" /></figure></div>
</section>

<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">The studio</div><div><h2 class="section-title">A private studio, by appointment.</h2><div class="section-copy"><p>Not a high-volume facility. One project at a time, so the setup stays built around the work in front of it. Most sessions run remotely; the locker is here when a source needs to be captured properly.</p><p>The point of a deep locker is not the count. It is being able to change the path when the source asks for it.</p></div></div></div>
  <div class="wrap studio-gallery reveal"><figure><img src="{{IMG:studio-racks}}" alt="Two rolling racks of outboard gear beside a large speaker cabinet, including SansAmp, Chandler Germanium preamps, an Ampeg head and an A-Designs MP-2A tube preamp" loading="lazy" /></figure><figure><img src="{{IMG:studio-drums}}" alt="Gretsch drum kit miked up on a patterned rug in the live area, surrounded by cymbals and boom stands" loading="lazy" /></figure></div>
  <div class="wrap capability-grid reveal"><article class="capability"><div class="kicker">01</div><h3>Recording &amp; overdubs</h3><p>Vocals, guitars, bass, keys, and percussion.</p></article><article class="capability"><div class="kicker">02</div><h3>Vocal production</h3><p>Direction, comping, tuning to taste, and chains chosen around the singer.</p></article><article class="capability"><div class="kicker">03</div><h3>Hybrid mixing</h3><p>Analog where it contributes, digital where recall matters more.</p></article><article class="capability"><div class="kicker">04</div><h3>Production &amp; arrangement</h3><p>Structure, parts, programming.</p></article><article class="capability"><div class="kicker">05</div><h3>Mastering &amp; delivery</h3><p>Final tone, level, and release-ready files.</p></article><article class="capability"><div class="kicker">06</div><h3>Technical systems</h3><p>Signal path, routing, wiring, gain structure, and analog integration.</p></article></div>
</section>
<section class="section">
  <div class="wrap audience-split">
    <article class="audience-card reveal"><div class="kicker">For artists</div><h3>You can talk about the song in human terms.</h3><p>No technical plan needed. Tell me what feels wrong and what you are trying not to lose.</p></article>
    <article class="audience-card reveal"><div class="kicker">For producers &amp; engineers</div><h3>The technical depth is there when you want it.</h3><p>Gain structure, mic and preamp impedance interaction, summing, conversion. We can work at that level directly.</p></article>
  </div>
</section>
<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">The room</div><div><h2 class="section-title">The room is the first thing in the signal path.</h2><div class="section-copy"><p>Every microphone in the locker is listening to a room before it listens to anything else. A room that lies to you costs more than any preamp will fix.</p></div></div></div>
  <div class="wrap acoustics-split reveal">
    <div class="acoustics-copy">
      <p>Work starts with measurement rather than product: what the room actually does, where the speakers should sit, and which problems are worth spending on. Low frequency behaviour and early reflections come first, because they are what makes a mix translate or not.</p>
      <p>The plan gets written to be built, by you, by your contractor, or by us. What the room needs is the same either way, which is what keeps the recommendation honest. Panels here were built rather than bought, so the advice comes from having made the thing.</p>
      <p>Whole rooms are on the table too, from treatment and wiring through power, monitoring and the gear itself. That work starts with remote planning and measurement and ends with us on site.</p>
      <p><a class="btn" href="/services#acoustics">Room and acoustic treatment planning</a></p>
    </div>
    <figure class="acoustics-photo"><img src="{{IMG:acoustic-panels}}" alt="Two absorption panels part built: mineral wool set into timber frames, one clamped while the glue sets" loading="lazy" /></figure>
  </div>
</section>
<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">Equipment</div><div><h2 class="section-title">The list.</h2><div class="section-copy"><p>103 microphones across 64 models. 19 preamps, 26 channels. 9 equalizers, 28 channels. 22 dynamics units, 36 channels. Grouped by topology, because that is how they get chosen.</p></div></div></div>
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
<section class="cta-section">
  <div class="wrap cta-inner">
    <div class="reveal"><h2>Tell me what you&rsquo;re working on.</h2><p>A rough, a reference, a photo of the room, or a few sentences is enough.</p></div>
    <a class="btn primary reveal" href="/start">Start a project</a>
  </div>
</section>
`;
