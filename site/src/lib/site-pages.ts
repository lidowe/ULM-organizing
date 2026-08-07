/**
 * Page bodies as HTML strings.
 *
 * Tokens: {{RIBBON}}, {{CREDIT_CARDS}}, {{ARTIST_INDEX}}, {{MEDIA_INDEX}}
 * and {{IMG:name}} for CDN photos (see src/lib/photos.ts).
 */
export const pages: Record<string, string> = {
  "index": `
<section class="hero-rack">
  <div class="wrap hero-rack-inner">
    <div class="hero-copy">
      <p class="hero-eyebrow"><span>Upper Level Music</span><span>Columbia, South Carolina</span><span>Est. 2006</span></p>
      <h1 class="display hero-title"><span class="ln"><span>The industry is undergoing</span></span><span class="ln"><span><em>major key changes.</em></span></span></h1>
      <p class="hero-deck">Now is the time to switch modes. Musical or technical, creative or still learning, you set the scale. I&rsquo;ll help you find the resolve.</p>
      <div class="hero-actions">
        <a class="btn primary" href="/contact">Start a project</a>
        <a class="btn" href="/process">See the process</a>
      </div>
      <div class="hero-services"><span>Recording</span><span>Production</span><span>Vocal production</span><span>Mixing</span><span>Mastering</span></div>
    </div>
    <figure class="hero-panel">
      <img src="{{IMG:rack-panel-alt}}" alt="A red 19-inch rack panel reading UPPER LEVEL MUSIC in blocky lettering, bolted between a Pendulum Quartet II and a Retro Revolver" fetchpriority="high" />
    </figure>
  </div>
</section>

<section class="rack-unit stance-unit">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">01</span><span>What this is</span></div>
    <p class="stance-lead">Upper Level Music is not exactly a recording studio, nor a production house or record label. It has been my company since I started engineering professionally, and most of the work is still mine &mdash; so you have one consistent point of contact. As it has grown I have brought in people I trust who share the same vision, and we divide work by who genuinely specializes in what you are asking for.</p>
    <div class="stance-body">
      <p>Doesn&rsquo;t it feel like 90% of getting your art heard involves anything but making music? Constant self-marketing, streaming services that don&rsquo;t pay, and learning to record at a professional level just to keep up.</p>
      <p>Upper Level Music is here for that last part &mdash; the gap between the major label recording studio and the growing home studio. Being in control of your record is the one place a musician actually wants control.</p>
      <p>Major-label resources and experience, made available at any stage. The work is collaborative rather than a permanent building &mdash; I pull in the right people when a record needs them. Most sessions run remotely.</p>
    </div>
  </div>
</section>

<section class="rack-unit anywhere-unit">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">02</span><span>The setups</span></div>
    <h2 class="unit-title">Records get made in all of these.</h2>
  </div>
  <div class="wrap anywhere-grid">
    <figure><img src="{{IMG:drums-overhead}}" alt="Drum kit miked with overheads in a large professional live room" loading="lazy" /><figcaption>A commercial live room.</figcaption></figure>
    <figure><img src="{{IMG:room-living}}" alt="A band playing guitars and bass in a carpeted living room beside a floor lamp" loading="lazy" /><figcaption>A client&rsquo;s living room.</figcaption></figure>
    <figure><img src="{{IMG:room-kid}}" alt="A child playing a keyboard in a blue-lit room with a drum kit behind" loading="lazy" /><figcaption>Somebody&rsquo;s first setup.</figcaption></figure>
  </div>
</section>


<section class="rack-unit start-here">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">03</span><span>Where to start</span></div>
    <h2 class="unit-title">Down to business.</h2>
  </div>
  <div class="wrap rack-rows">
    <a class="rack-row" href="/process"><span class="no">01</span><h3>Process</h3><p>How the conversation starts and what happens after it.</p></a>
    <a class="rack-row" href="/services"><span class="no">02</span><h3>Available Services</h3><p>Production, recording, vocal production, mixing, mastering, teaching, troubleshooting.</p></a>
    <a class="rack-row" href="/studio"><span class="no">03</span><h3>Studio and Technology</h3><p>The mic locker, the racks, the conversion, the signal path.</p></a>

    <a class="rack-row" href="/who-we-are"><span class="no">04</span><h3>Who We Are</h3><p>Edward Lidow and the people behind the work.</p></a>
    <a class="rack-row" href="/education"><span class="no">05</span><h3>Educational Services</h3><p>Training and technical guidance for artists and engineers.</p></a>
    <a class="rack-row" href="/news"><span class="no">06</span><h3>News and Thoughts</h3><p>Notes on sessions, technique, and the industry.</p></a>
    <a class="rack-row" href="/credits"><span class="no">07</span><h3>Credits</h3><p>Major-label and independent records, with precise roles.</p></a>
    <a class="rack-row live" href="/contact"><span class="no">08</span><h3>Start a project</h3><p>Send a rough, a reference, or a few sentences.</p></a>
  </div>
</section>

<section class="rack-unit more-section">
  <div class="wrap">
    <details class="fold">
      <summary><span class="fold-k">My values</span><span class="fold-hint">Read</span></summary>
      <div class="fold-body">
        <p>The artist is the one who is vulnerable. The social currency spent on a record is theirs &mdash; their story, their name, their risk. The work belongs in service to the song.</p>
        <p>Before we begin, I want to hear about you: the concept, the intention. Then we translate that into the technical world &mdash; the gear, the sonic character.</p>
        <p>It is not the artist&rsquo;s job to know whether an 1176 or a dbx 160VU will help express that. If you are an engineer who wants to know, I will travel that path as far as you want.</p>
        <p>It is better to listen to the artist in order to hear the song.</p>
      </div>
    </details>
    <details class="fold">
      <summary><span class="fold-k">Remote work</span><span class="fold-hint">Read</span></summary>
      <div class="fold-body">
        <p>Most work happens through video calls, shared audio feeds, and real-time remote collaboration. That flexibility lets me work with artists anywhere, on any schedule.</p>
        <p>Nothing fully replaces being in the same space. I trade some of that for access, and I am honest about it.</p>
      </div>
    </details>
    <details class="fold">
      <summary><span class="fold-k">Security and confidentiality</span><span class="fold-hint">Read</span></summary>
      <div class="fold-body">
        <p>All work happens on the same secure system here at Upper Level Music. When a project takes me to you, the work and the intellectual property still live on ULM drives &mdash; I insist on that, because it is the only way to know exactly where your material is.</p>
        <p>Releasing any file requires your signed approval. Nobody sees or hears a work in progress without your express permission.</p>
        <p>In thirty years, no file I have been responsible for has been leaked or accessed without authorization.</p>
      </div>
    </details>
  </div>
</section>

<section class="rack-unit proof-unit">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">04</span><span>Proof</span></div>
    <h2 class="unit-title">Records that went out into the world.</h2>
  </div>
  <div class="ribbon-strip"><div class="ribbon-track">{{RIBBON}}</div></div>
  <div class="wrap proof-actions"><a class="btn" href="/credits">All credits</a></div>
</section>

<section class="cta-section">
  <div class="wrap cta-inner">
    <div class="reveal"><h2>Tell me about the record.</h2><p>A rough, a reference, or a few sentences is enough.</p></div>
    <a class="btn primary reveal" href="/contact">Start a project</a>
  </div>
</section>
`,

  "process": `
<section class="page-hero"><div class="wrap"><div class="eyebrow">Process</div><h1 class="page-title">First I ask questions. Then we decide what my job is.</h1><p class="page-deck">Every project starts the same way and then stops being the same. Here is the order I actually work in.</p></div></section>
<section class="process-photo-band">
  <figure><img src="{{IMG:console-working}}" alt="An engineer standing at a mixing console during a session" loading="lazy" /></figure>
  <figure><img src="{{IMG:room-halfbuilt}}" alt="A room mid-setup with a pedalboard half built on the carpet and cases open" loading="lazy" /></figure>
</section>
<section class="section">
  <div class="wrap">
    <div class="process-line reveal"><div class="process-no">01</div><div class="process-content"><h2>We talk first.</h2><p>Before anything technical, I want to know who you are and why you make music at all. What is underneath it. What you are trying to say. I have never been able to do good work for someone I do not understand.</p></div></div>
    <div class="process-line reveal"><div class="process-no">02</div><div class="process-content"><h2>Three questions.</h2><p>What do you struggle to achieve? What do you feel connected to? What do you wish you could accomplish? The answers usually tell me more about the record than a reference track does.</p></div></div>
    <div class="process-line reveal"><div class="process-no">03</div><div class="process-content"><h2>We decide what you are hiring me for.</h2><p>Do you want me to do the work, teach you how to do it, guide you to the finish, or sit in as an advisor? Am I the engineer, the educator, or the resource? People hire me for all four and the answer changes the price, the schedule, and how much of it you touch.</p></div></div>
    <div class="process-line reveal"><div class="process-no">04</div><div class="process-content"><h2>We scope the gap.</h2><p>I get hired to fill a gap, and the gap is different every time. Acoustic problems in the space you already record in. A technical fault you cannot isolate. A vocal that will not sit. Twelve songs that stalled at 80 percent. A chain you want explained rather than handed to you.</p></div></div>
    <div class="process-line reveal"><div class="process-no">05</div><div class="process-content"><h2>Nothing moves without your approval.</h2><p>You hear it, you sign off, we go on. No request is too small and no question is beneath asking. If you want a single edit reviewed, that is a real job and I will take it.</p></div></div>
  </div>
</section>
<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">Why I work this way</div><div><h2 class="section-title">The apprenticeship is gone. The knowledge does not have to go with it.</h2><div class="section-copy"><p>I learned this trade the old way: as an intern and then an assistant at Hit Factory Criteria, standing behind people who had been doing it for thirty years. That path barely exists now. Almost nobody entering audio today will get a room, a mentor, and five years to absorb it.</p><p>So I hand it over directly. If you want to know why a ribbon needs 70 dB of clean gain, or why your kick sounds different in your room than in the car, I will tell you and show you. If you would rather I just handle it, that is fine too.</p></div></div></div>
</section>
<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">Who hires me</div><div><h2 class="section-title">Not only people finishing a song.</h2><div class="section-copy"><p>Artists, engineers, producers, students, podcasters, content creators, and people who simply want to get better at a craft that touches audio. The service is bridging the gap in front of you, whatever it happens to be.</p></div></div></div>
  <div class="wrap entry-grid reveal"><article class="entry"><div class="tiny">Artists</div><h3>Make the record</h3><p>Production, tracking, vocal production, mixing, mastering, or one stage of it.</p></article><article class="entry"><div class="tiny">Engineers &amp; producers</div><h3>Go deeper</h3><p>Gain structure, impedance, conversion, summing, routing, room treatment, mix diagnosis.</p></article><article class="entry"><div class="tiny">Students</div><h3>Learn it properly</h3><p>Lessons and mentorship at the level you are actually at, not the level a curriculum assumes.</p></article><article class="entry"><div class="tiny">Podcast &amp; content</div><h3>Sound like you mean it</h3><p>Mic choice, chain setup, editing, cleanup, and a workflow you can repeat without me.</p></article></div>
</section>
<section class="section">
  <div class="wrap terminology-panel reveal"><h2>You do not need the vocabulary to start.</h2><p>&ldquo;It sounds too polite.&rdquo; &ldquo;It does not sound like me.&rdquo; That is enough for me to work from. Hand me a routing problem instead and we will work there. Same depth either way.</p></div>
</section>

`,

  "studio": `
<section class="page-hero"><div class="wrap"><div class="eyebrow">Upper Level Music</div><h1 class="page-title">Studio and Technology</h1><p class="page-deck">The locker and the racks, listed plainly. 103 microphones, 64 models, and the analog front end they run into.</p><figure class="studio-hero-photo reveal"><img src="{{IMG:racks-dense}}" alt="Racks of outboard preamps, compressors and equalizers stacked in the control room" loading="lazy" /></figure></div></section>
<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">The studio</div><div><h2 class="section-title">A private studio, by appointment.</h2><div class="section-copy"><p>Not a high-volume facility. One project at a time, so the setup stays built around the work in front of it. Most sessions run remotely; the locker is here when a source needs to be captured properly.</p><p>The point of a deep locker is not the count. It is being able to change the path when the source asks for it.</p></div></div></div>
  <div class="wrap studio-gallery reveal"><figure><img src="/studio-racks.jpg" alt="Two rolling racks of outboard gear beside a large speaker cabinet, including SansAmp, Chandler Germanium preamps, an Ampeg head and an A-Designs MP-2A tube preamp" loading="lazy" /></figure><figure><img src="/studio-drums.jpg" alt="Gretsch drum kit miked up on a patterned rug in the live area, surrounded by cymbals and boom stands" loading="lazy" /></figure></div>
  <div class="wrap capability-grid reveal"><article class="capability"><div class="kicker">01</div><h3>Recording &amp; overdubs</h3><p>Vocals, guitars, bass, keys, and percussion.</p></article><article class="capability"><div class="kicker">02</div><h3>Vocal production</h3><p>Direction, comping, tuning to taste, and chains chosen around the singer.</p></article><article class="capability"><div class="kicker">03</div><h3>Hybrid mixing</h3><p>Analog where it contributes, digital where recall matters more.</p></article><article class="capability"><div class="kicker">04</div><h3>Production &amp; arrangement</h3><p>Structure, parts, programming.</p></article><article class="capability"><div class="kicker">05</div><h3>Mastering &amp; delivery</h3><p>Final tone, level, and release-ready files.</p></article><article class="capability"><div class="kicker">06</div><h3>Technical systems</h3><p>Signal path, routing, wiring, gain structure, and analog integration.</p></article></div>
</section>
<section class="section">
  <div class="wrap audience-split">
    <article class="audience-card reveal"><div class="kicker">For artists</div><h3>You can talk about the song in human terms.</h3><p>No technical plan needed. Tell me what feels wrong and what you are trying not to lose.</p></article>
    <article class="audience-card reveal"><div class="kicker">For producers &amp; engineers</div><h3>The technical depth is there when you want it.</h3><p>Gain structure, mic and preamp impedance interaction, summing, conversion. We can work at that level directly.</p></article>
  </div>
</section>
<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">Equipment</div><div><h2 class="section-title">The list.</h2><div class="section-copy"><p>103 microphones across 64 models. 19 preamps, 26 channels. 9 equalizers, 28 channels. 22 dynamics units, 36 channels. Grouped by topology, because that is how they get chosen.</p></div></div></div>
  <div class="wrap tools-details reveal">
    <details><summary>Tube large diaphragm condensers</summary><div class="detail-body">Wunder Audio CM7 GS (K47 capsule, NOS Telefunken 800-series tube, external HV supply) &middot; Telefunken TF51 (in-house CK12 capsule, NOS 6072a, external HV supply)</div></details>
    <details><summary>Large &amp; medium diaphragm condensers</summary><div class="detail-body">Stam U87 Red Badge &middot; Stam U87 Black Badge &middot; Sony C-100 &middot; Audix SCX25A &middot; Earthworks Ethos &middot; Audio-Technica AT4033a (pair) &mdash; 11 units, 7 models</div></details>
    <details><summary>Small diaphragm condensers</summary><div class="detail-body">Beyerdynamic MC 930 &middot; Shure SM81 &middot; AKG C451e with CK1 &middot; AKG C451b &middot; Electro-Voice RE200 &middot; Peavey PVM 480 &mdash; 11 units, 6 models</div></details>
    <details><summary>Ribbons</summary><div class="detail-body">Coles 4038 (pair) &middot; Cascade Fat Head II (pair). Highest gain demand in the locker &mdash; the 4038 wants 70&ndash;80 dB from a quiet preamp, and every ribbon patch point is labelled against phantom power.</div></details>
    <details><summary>Dynamic microphones</summary><div class="detail-body">Sennheiser MD 441-U (2) &middot; Sennheiser 521 Black Fire (2) &middot; Sennheiser BF 509 Black Fire (2) &middot; Electro-Voice RE20 &middot; Electro-Voice PL10 &middot; Electro-Voice N/DYM series (8) &middot; Shure SM7B &middot; Shure Beta 52A &middot; Shure SM57 (7) &middot; Shure SM58 (5) &middot; Telefunken M80 / M80s (5) &middot; Yamaha MZ series (6) &middot; Heil PR 40 &middot; Beyerdynamic M201 &middot; Beyerdynamic M422n(c) (3) &middot; Beyerdynamic X99 &middot; Audix D-series (11) &middot; Peavey PVM (2) &middot; AKG D112 v1 &middot; Audio-Technica ATM25 &middot; sE Electronics V7 &middot; Lewitt MTP 550 DM &mdash; 67 units, 41 models</div></details>
    <details><summary>Boundary, specialty &amp; measurement</summary><div class="detail-body">Shure SM91 (PZM) &middot; Beyerdynamic TG D71 &middot; Audix M1255B miniature condensers (3) &middot; Crown GLM-200 &middot; calibrated measurement microphone with REW correction file &middot; Zoom H4n Pro field recorder</div></details>
    <details><summary>Preamps &mdash; all-valve</summary><div class="detail-body">Thermionic Culture Rooster 2 (2ch, zero solid-state, Sowter transformers, triode/pentode harmonic switching) &middot; A-Designs MP-2A (2ch, zero-feedback, Cinemag in, EF86 into 6N1-P, switchable 600&thinsp;&Omega;/10&thinsp;k&Omega; output) &middot; Manley Dual Mono blackface, 1999 (2ch, single-ended Class A, White Cathode Follower output)</div></details>
    <details><summary>Preamps &mdash; hybrid tube &amp; pentode</summary><div class="detail-body">Sonic Farm Creamer+ (2ch, EF86 pentode into switchable Cinemag or discrete output) &middot; Pendulum Audio Quartet II &middot; Stam Audio SA-69 (Helios Type 69) &middot; A-Designs Ventura SE</div></details>
    <details><summary>Preamps &mdash; discrete solid-state</summary><div class="detail-body">API 3122V (2ch) &middot; Eclair Evil Twin, Jensen mod (2 units) &middot; Wunder Audio PEQ2R &middot; Wunder Audio PEQ2/4R &middot; Chandler Germanium Pre (matched pair on PSU-1 MKII) &middot; Tonelux MP5A in A-Designs 503HR</div></details>
    <details><summary>Preamps &mdash; DC-coupled &amp; split</summary><div class="detail-body">Pueblo Audio JR2/2 (2ch, +50&thinsp;V phantom reserve, shares PS34 with the HJ 482 summing) &middot; NPNG DMP-2NW (2ch) &middot; Undertone Audio MPEQ-1 (matched pair; SEP mode splits preamp and parametric EQ into independent processors)</div></details>
    <details><summary>Equalizers</summary><div class="detail-body">Retro Instruments 2A3 (all-tube passive LC, Pultec EQP-1A3 topology, 40/90&thinsp;Hz interstage subsonic filter) &middot; Langevin Mini Massive Passive (passive LC, Manley Rapture discrete op-amps, 3-position IRON transformer switch) &middot; Chandler Tone Control EQ (pair, germanium Class A, passive inductor low band, Thick control) &middot; Iron Age Audio Works V2 (bridged-T, all-discrete, 18 frequencies, tracking and mastering modes) &middot; Tonelux Equalux (4-band proportional Q with per-band 1/3-octave peak) &middot; Tonelux Tilt Rack (2 units, 16 channels of reciprocal tilt at 650&thinsp;Hz) &middot; Furman Punch 10 subharmonic synthesizer</div></details>
    <details><summary>Compressors &mdash; tube &amp; optical</summary><div class="detail-body">Retro Instruments 176 (variable-mu, ratio switched via output transformer taps) &middot; Retro Instruments STA-Level Gold (Gates Sta-Level lineage, push-pull vari-mu, 40&thinsp;dB GR at &le;1% THD) &middot; Retro Instruments Revolver (Altec 436B / EMI RS124 lineage, Dual Threshold) &middot; ADL-1000 (T4B optical, all-tube makeup) &middot; Audioscape DA-3A (2ch optical) &middot; Drawmer 1968 MKII (2ch J-FET with 12AX7 makeup)</div></details>
    <details><summary>Compressors &mdash; FET, VCA, diode &amp; zener</summary><div class="detail-body">Mohog Audio MoFET 76 (1176 Rev F, switchable Edcor or Carnhill output) &middot; Wes Audio Beta76 (pair) &middot; dbx 160XT transformer-modded pair (Jensen JT-123-DBX / Cinemag) &middot; dbx 160VU &middot; Audioscape 4000E (SSL 4000E center section, in-house 202C VCAs) &middot; Audioscape G-Comp (SSL G384, THAT VCAs, transformerless) &middot; Audioscape MK-609 (Neve 33609 BA440 diode bridge, NOS parts) &middot; Audioscape D-Comp (EMI TG12413 zener limiter; OUT mode is pure transformer saturation) &middot; Tonelux Dynalux (all-discrete, continuous feedback-to-feed-forward blend, OVER mode)</div></details>
    <details><summary>Limiting, de-essing, gating &amp; spectral</summary><div class="detail-body">Pendulum Audio PL-2 (switchable JFET or MOSFET brickwall, limiter devices out of path below threshold) &middot; dbx 900 rack with two dbx 902 de-essers &middot; Drawmer DS201 dual gate (key filters and Key Listen) &middot; Dolby 740 spectral processors (2)</div></details>
    <details><summary>Conversion, summing &amp; monitoring</summary><div class="detail-body">Dangerous Music AD+ (mastering-grade ADC) &middot; Dangerous Music D-Box+ monitor controller and summing &middot; Lynx Aurora(n) &middot; three-stage summing cascade: Pueblo HJ 482 &rarr; Tonelux OTB &rarr; API ASM 164 &middot; API Power Wedge 114 balanced power, prioritized to the tube rails. Converters are treated as a critical analog stage; external supplies and clock radiators stay out of the high-gain zone.</div></details>

  </div>
</section>

`,

  "services": `
<section class="page-hero"><div class="wrap"><div class="eyebrow">Services &amp; rates</div><h1 class="page-title">Tell me where the record is stuck.</h1><p class="page-deck">Book one stage, bring one problem, or scope the whole record. No request is too small.</p></div></section>
<section class="section"><div class="wrap services-stack">
  <article class="service-row reveal" id="recording"><h2>Recording &amp; tracking</h2><div class="service-copy"><p>Overdubs, vocals, instruments, session engineering. Remote or in the room you already work in.</p><p>Mic and chain get picked for the source in front of us, not from a template.</p></div><div class="service-price">$65–$100 / hr<small>day rates from $500</small></div></article>
  <article class="service-row reveal"><h2>Vocal production &amp; editing</h2><div class="service-copy"><p>Direction, comping, tuning to taste, editing, mix prep.</p><p>Range reflects scope — a clean comp versus a dense stack.</p></div><div class="service-price">$150–$400 / song<small>based on scope</small></div></article>
  <article class="service-row reveal" id="mixing"><h2>Mixing</h2><div class="service-copy"><p>Analog and digital together. Balances, automation, and delivery in the formats you need.</p><p>Track count, editing, alternates, and turnaround affect the quote.</p></div><div class="service-price">$400–$900 / song<small>typical independent range</small></div></article>
  <article class="service-row reveal" id="finish"><h2>Mastering</h2><div class="service-copy"><p>Final tone, level, consistency, release-ready delivery.</p><p>Albums and EPs quoted as a body of work.</p></div><div class="service-price">$100–$175 / song<small>release packages quoted</small></div></article>
  <article class="service-row reveal" id="production"><h2>Production &amp; arrangement</h2><div class="service-copy"><p>Song development, arrangement, parts, programming.</p><p>One song or an ongoing role, quoted by the assignment rather than the hour.</p></div><div class="service-price">Project based<small>personalized quote</small></div></article>
  <article class="service-row reveal"><h2>Full-project development</h2><div class="service-copy"><p>Early production through final delivery, with the same person on it the whole way.</p><p>My role shifts stage to stage &mdash; producer, engineer, mixer, advisor &mdash; without handing the record to someone new.</p></div><div class="service-price">Project based<small>multi-stage scope</small></div></article>
  <article class="service-row reveal"><h2>Consultation &amp; studio systems</h2><div class="service-copy"><p>Session strategy, mix diagnosis, signal flow, wiring, gain structure, troubleshooting.</p></div><div class="service-price">$100–$150 / hr<small>remote or by appointment</small></div></article>
  <div class="rate-panel reveal"><h2>Rates are a starting point, not a judgment on the project.</h2><div><p>Independent budgets are real. Where scope allows, I work on a sliding scale.</p><p>Ask. If the work is interesting and the scope is clear, the number is negotiable.</p></div></div>
</div></section>
<section class="rack-unit">
  <div class="wrap detail-grid two">
    <figure><img src="{{IMG:guitars}}" alt="A collection of electric guitars on a wall rack" loading="lazy" /></figure>
    <figure><img src="{{IMG:guitar-amp}}" alt="An electric guitar leaning against an amplifier beside a window" loading="lazy" /></figure>
  </div>
</section>
<section class="cta-section"><div class="wrap cta-inner"><div class="reveal"><h2>You can start now.</h2><p>Any topic, any questions, thoughts, files, or hit me up just to talk shop. The industry is changing and it's your lead.</p></div><a class="btn primary reveal" href="/contact">Talk about the project</a></div></section>
`,

  "contact": `
<section class="page-hero"><div class="wrap"><div class="eyebrow">Start a project</div><h1 class="page-title">Tell me about the record.</h1><p class="page-deck">What you're making, where it is now, what's getting in the way.</p></div></section>
<section class="section">
  <div class="wrap contact-grid">
    <aside class="contact-side reveal"><div class="kicker">Upper Level Music</div><h2>Start with the music, not the booking language.</h2><p>A rough mix, voice memo, or private link is plenty. The form just gives me context to answer well.</p><div class="contact-direct"><a href="mailto:edwardlidow@upperlevelmusic.com">edwardlidow@upperlevelmusic.com</a><br>Columbia, South Carolina<br>By appointment · Remote work available</div></aside>
    <form class="form reveal" data-project-form>
      <div class="form-row"><div class="field"><label for="name">Name *</label><input id="name" name="name" required autocomplete="name"></div><div class="field"><label for="email">Email *</label><input id="email" name="email" type="email" required autocomplete="email"></div></div>
      <div class="field"><label for="project">Artist / project name</label><input id="project" name="project" placeholder="Artist, band, project, or working title"></div>
      <div class="form-row"><div class="field"><label for="stage">Where is the project now?</label><select id="stage" name="stage"><option value="">Select one</option><option>Idea / writing stage</option><option>Demo or rough production</option><option>Tracking / recording</option><option>Vocals need work</option><option>Ready to mix</option><option>Mix is stuck</option><option>Ready for mastering</option><option>Technical / studio problem</option><option>Not sure yet</option></select></div><div class="field"><label for="need">What do you need help with? *</label><select id="need" name="need" required><option value="">Select one</option><option>Production &amp; arrangement</option><option>Recording &amp; tracking</option><option>Vocal production &amp; editing</option><option>Mixing</option><option>Mastering</option><option>Full-project development</option><option>Consultation / problem-solving</option><option>Studio systems / signal flow</option><option>Not sure yet</option></select></div></div>
      <div class="form-row"><div class="field"><label for="timeline">Timeline</label><input id="timeline" name="timeline" placeholder="Target date or general timing"></div><div class="field"><label for="budget">Budget / range</label><input id="budget" name="budget" placeholder="A rough range is useful"></div></div>
      <div class="field"><label for="links">Music / reference links</label><input id="links" name="links" type="url" inputmode="url" placeholder="Private streaming link, Drive, Dropbox, etc."></div>
      <div class="field"><label for="details">About the record *</label><textarea id="details" name="details" required placeholder="What are you trying to make? What matters most? What feels wrong or unfinished right now?"></textarea></div>
      <div class="form-actions"><button class="btn primary" type="submit">Draft inquiry email</button><div class="form-note">This drafts the inquiry in your email app.</div></div>
      <div class="form-status" data-form-status>Opening your email app with the project details drafted. If nothing opens, email Edward directly at edwardlidow@upperlevelmusic.com.</div>
    </form>
  </div>
</section>
`,

  "who-we-are": `
<section class="page-hero"><div class="wrap"><div class="eyebrow">Who We Are</div><h1 class="page-title">Upper Level Music</h1><p class="page-deck">Created in 2006 by Edward Lidow. A studio built around the person making the record.</p></div></section>
<section class="lead-photo-section">
  <div class="wrap">
    <figure class="lead-photo">
      <img src="{{IMG:session-bw}}" alt="Black and white photograph of two musicians facing each other mid-session, drums and guitar" loading="lazy" />
      <figcaption>Music is not meant to be made alone, staring at a screen.</figcaption>
    </figure>
  </div>
</section>
<section class="section wwa-reveal-section">
  <div class="wrap wwa-accordion" data-accordion>
    <article class="wwa-item" data-accordion-item>
      <h2 class="wwa-head">
        <button class="wwa-trigger" type="button" aria-expanded="true" aria-controls="wwa-panel-01" id="wwa-btn-01">
          <span class="wwa-no">01</span>
          <span class="wwa-heading"><span class="wwa-title">The person</span><span class="wwa-summary">Musician first, engineer second.</span></span>
          <span class="wwa-mark" aria-hidden="true"></span>
        </button>
      </h2>
      <div class="wwa-panel" id="wwa-panel-01" role="region" aria-labelledby="wwa-btn-01">
        <div class="wwa-panel-inner">
          <p class="person-copy">I created Upper Level Music in 2006. Musician, recording engineer, mixer, producer, studio owner, acoustic consultant, and university instructor in audio engineering &mdash; there are few jobs in this industry I haven&rsquo;t done at some point.</p>
          <p class="person-copy">I found my place in audio as an engineer, but I started as a musician. Formally trained through high school jazz bands on saxophone and percussion, then years as an indie artist on drums, bass and guitar. That is where the technical side pulled me in, and where I started chasing the blend between the creative and the technical.</p>
          <p class="person-copy">After Clemson University and a media and communications degree, I went to SAE Miami and graduated valedictorian, which earned a rare internship at Hit Factory Criteria Miami &mdash; now Criteria Studios. Standing on the shoulders of giants there, I worked on Grammy-winning, platinum-selling records across every genre, and came to understand that everything we do is creative and collaborative. No musical project reaches success without a strong creative team.</p>
          <figure class="inline-photo">
            <img src="{{IMG:hit-factory}}" alt="Five people standing under The Hit Factory neon sign outside the studio" loading="lazy" />
            <figcaption>Hit Factory Criteria, Miami &mdash; the internship that started it.</figcaption>
          </figure>
        </div>
      </div>
    </article>
    <article class="wwa-item" data-accordion-item>
      <h2 class="wwa-head">
        <button class="wwa-trigger" type="button" aria-expanded="false" aria-controls="wwa-panel-02" id="wwa-btn-02">
          <span class="wwa-no">02</span>
          <span class="wwa-heading"><span class="wwa-title">The industry as it stands</span><span class="wwa-summary">The team got smaller. The list of jobs didn&rsquo;t.</span></span>
          <span class="wwa-mark" aria-hidden="true"></span>
        </button>
      </h2>
      <div class="wwa-panel" id="wwa-panel-02" role="region" aria-labelledby="wwa-btn-02">
        <div class="wwa-panel-inner">
          <p class="person-copy">The record industry today is shifting the responsibilities of an entire team of specialized talents onto underfunded, overworked artists &mdash; asking them to own a dozen things that have nothing to do with why they were drawn to music in the first place. It is nearly impossible to make a record with the sound quality, the collaborative depth, and the specialized touch that a label can simply fund and hire.</p>
          <p class="person-copy">It used to run bottom to top. A label sent an A&amp;R to a dive bar to see a band with a little local buzz &mdash; a write-up in a weekly, a tip from a friend of a friend &mdash; and the artist blew them away. The label then had to convince the artist to sign, so the label could support them.</p>
          <p class="person-copy">Now it runs top to bottom. Labels are media conglomerates pushing artists they choose and shape toward radio, toward numbers that streaming will never pay an independent artist. For the creative-minded musician, engineer, or anyone who wants to be present while music gets made, the landscape has gone dystopian.</p>
        </div>
      </div>
    </article>
  </div>
</section>
<section class="section freedom-section">
  <div class="wrap reveal freedom-inner">
    <blockquote class="freedom-quote">It is the artist who is vulnerable. It is the artist expressing their emotion, their story. That is where all of this starts, and the industry should be built to reflect it.</blockquote>
  </div>
</section>
<section class="section wwa-reveal-section">
  <div class="wrap wwa-accordion" data-accordion>
    <article class="wwa-item" data-accordion-item>
      <h2 class="wwa-head">
        <button class="wwa-trigger" type="button" aria-expanded="false" aria-controls="wwa-panel-03" id="wwa-btn-03">
          <span class="wwa-no">03</span>
          <span class="wwa-heading"><span class="wwa-title">Why this exists</span><span class="wwa-summary">Control belongs to the person making the art.</span></span>
          <span class="wwa-mark" aria-hidden="true"></span>
        </button>
      </h2>
      <div class="wwa-panel" id="wwa-panel-03" role="region" aria-labelledby="wwa-btn-03">
        <div class="wwa-panel-inner">
          <p class="person-copy">That feeling is what made me think there has to be a better way &mdash; not moving backward to how things were, but putting control back in the hands of the person making the art.</p>
          <p class="person-copy">Upper Level Music is an attempt, by me and the people I have met across a 30-year career, to turn that around, so anyone who wants to express themselves sonically can do it and be sustained by it.</p>
          <p class="person-copy">This is where the creative spirit stands up and says this is not all on us. We want the social element back. We want collaboration. Music is not meant to be made alone, staring at a screen.</p>
        </div>
      </div>
    </article>
    <article class="wwa-item" data-accordion-item>
      <h2 class="wwa-head">
        <button class="wwa-trigger" type="button" aria-expanded="false" aria-controls="wwa-panel-04" id="wwa-btn-04">
          <span class="wwa-no">04</span>
          <span class="wwa-heading"><span class="wwa-title">What comes next</span><span class="wwa-summary">Resources, education, insights.</span></span>
          <span class="wwa-mark" aria-hidden="true"></span>
        </button>
      </h2>
      <div class="wwa-panel" id="wwa-panel-04" role="region" aria-labelledby="wwa-btn-04">
        <div class="wwa-panel-inner">
        </div>
      </div>
    </article>
  </div>
</section>
<section class="rack-unit archive-unit">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">A</span><span>The archive</span></div>
    <h2 class="unit-title">Twenty years of rooms and the people in them.</h2>
  </div>
  <div class="wrap archive-strip">
    <figure><img src="{{IMG:moonlight-bass}}" alt="A person playing an acoustic bass outdoors at night with a baby in a carrier" loading="lazy" /><figcaption>Music happens wherever you are.</figcaption></figure>
    <figure><img src="{{IMG:console-large}}" alt="An engineer behind a large-format recording console in a professional control room" loading="lazy" /></figure>
    <figure><img src="{{IMG:session-redlit}}" alt="Two engineers at a console under red light during a session" loading="lazy" /></figure>
    <figure><img src="{{IMG:archive-console-pair}}" alt="Two people standing beside a large console in a studio control room" loading="lazy" /></figure>
    <figure><img src="{{IMG:archive-crew}}" alt="A group of people in a studio lounge after a session" loading="lazy" /></figure>
    <figure><img src="{{IMG:archive-group}}" alt="Four people posing together in a studio hallway" loading="lazy" /></figure>
    <figure><img src="{{IMG:session-redlit-2}}" alt="An engineer and an artist at a console in a dim control room" loading="lazy" /></figure>
    <figure><img src="{{IMG:control-room-red}}" alt="A red-lit control room with a large console and monitors" loading="lazy" /></figure>

  </div>
</section>
<section class="cta-section">
  <div class="wrap cta-inner">
    <div class="reveal"><h2>Tell me about the record.</h2><p>A rough, a reference, or a few sentences is enough.</p></div>
    <a class="btn primary reveal" href="/contact">Start a project</a>
  </div>
</section>
`,

  "credits": `
<section class="page-hero"><div class="wrap"><div class="eyebrow">Credits</div><h1 class="page-title">On record.</h1><p class="page-deck">Selected discography. Precise roles where publicly credited.</p></div></section>
<section class="section"><div class="wrap section-header reveal"><div class="kicker">Selected discography</div><div><h2 class="section-title">Real records. Real roles.</h2><div class="section-copy"><p>Verified credits from public databases, kept legible instead of exhaustive.</p></div></div></div><div class="wrap"><div class="filter-bar reveal" aria-label="Filter credits"><button class="active" type="button" data-filter="all">All</button><button type="button" data-filter="recording">Recording</button><button type="button" data-filter="mix">Mix</button><button type="button" data-filter="engineering">Engineering</button><button type="button" data-filter="assistant">Assistant</button></div><div class="work-grid reveal">{{CREDIT_CARDS}}</div><p class="credit-note reveal">Additional catalog includes <em>Rebirth</em>, <em>No Ceilings</em>, <em>I Am Not a Human Being</em>, <em>Rise of an Empire</em>, <em>Pricele$$</em>, <em>The Elephant in the Room</em>, and other releases. Public credits also appear under Edward “Jewfro” Lidow, Edward Lidow, Ed Lidow, and Edward Lido.</p><div class="credit-links reveal"><a class="btn" href="https://www.allmusic.com/artist/edward-jewfro-lidow-mn0002394304" target="_blank" rel="noreferrer">AllMusic credits</a><a class="btn" href="https://www.discogs.com/artist/1268296-Edward-Lidow" target="_blank" rel="noreferrer">Discogs profile</a></div></div></section>
<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">Selected artists &amp; clients</div><div><h2 class="section-title">Range is part of the work.</h2><div class="section-copy"><p>A partial list. Roles vary by artist and session.</p></div></div></div>
    <div class="wrap artist-index reveal">{{ARTIST_INDEX}}
  </div>
  <div class="wrap section-header reveal" style="margin-top:3rem"><div class="kicker">Media &amp; brands</div></div>
  <div class="wrap artist-index reveal">{{MEDIA_INDEX}}</div>
</section>
<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">Studios &amp; institutions</div><div><h2 class="section-title">Built in real studios.</h2></div></div>
  <div class="wrap artist-index reveal"><span>Hit Factory / Criteria Miami</span><span>Record Plant Los Angeles</span><span>Chicago Recording Company</span><span>Dream Asylum</span><span>Studio 8 Miami</span><span>The Jam Room · Columbia</span><span>Midlands Audio Institute</span><span>Midlands Technical College</span><span>Miami Historical Museum</span><span>WoG Ministries</span></div>
</section>
`,

  "education": `
<section class="page-hero"><div class="wrap"><div class="eyebrow">Educational Services</div><h1 class="page-title">Somebody has to teach this.</h1><p class="page-deck">One-on-one training in recording, mixing, and studio technical work &mdash; for artists, engineers, producers, and students.</p></div></section>
<section class="edu-photo-band">
  <img src="{{IMG:mastering-list}}" alt="A session screen listing finished song titles" loading="lazy" />
</section>
<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">What this is</div><h2 class="section-title">The apprenticeship, handed over directly.</h2></div>
  <div class="wrap remote-body reveal">
    <p>Most people entering audio now will never get the intern-to-assistant path through a major room. I did, and this is how I hand it over: one-on-one sessions, mix and signal-flow critique, gain structure and impedance, conversion and summing, acoustic diagnosis, and how to run your own setup without me. Remote, and pitched at the level you are actually at rather than where a curriculum assumes you are.</p>
    <div class="hero-actions"><a class="btn primary" href="/contact">Start a project</a></div>
  </div>
</section>
`,

  "news": `
<section class="page-hero"><div class="wrap"><div class="eyebrow">News and Thoughts</div><h1 class="page-title">Notes from the sessions.</h1><p class="page-deck">Studio updates, releases, and short essays on making records.</p></div></section>
<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">Coming soon</div><h2 class="section-title">The first posts are on the way.</h2></div>
  <div class="wrap remote-body reveal">
    <p>This will become a running log — project news, gear and technique write-ups, and thoughts on where the industry is heading.</p>
  </div>
</section>
`,

  "reach": `
<section class="page-hero"><div class="wrap"><div class="eyebrow">Contact</div><h1 class="page-title">Get in touch.</h1><p class="page-deck">For anything that isn’t a project inquiry — questions, press, or just saying hello.</p></div></section>
<section class="section">
  <div class="wrap remote-body reveal">
    <div class="contact-direct"><a href="mailto:edwardlidow@upperlevelmusic.com">edwardlidow@upperlevelmusic.com</a><br>Columbia, South Carolina<br>By appointment · Remote work available</div>
    <p>Starting a record? Use the project form so we have the details up front.</p>
    <div class="hero-actions"><a class="btn primary" href="/contact">Start a project</a></div>
  </div>
</section>
`,
};
