import { Link } from "@tanstack/react-router";
import { Photo } from "@/components/media/Photo";

export function StudioPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Studio</div>
          <h1 className="page-title">Studio and technology.</h1>
          <p className="page-deck">
            The locker and the racks, listed plainly, and the analog front end they run into.
          </p>
          <figure className="studio-hero-photo reveal">
            <Photo
              name="desk-monitors-control"
              fetchPriority="high"
              alt="The control room desk with nearfield monitors and outboard racks in daylight"
            />
          </figure>
        </div>
      </section>
      <section className="section">
        <div className="wrap section-header reveal">
          <div className="kicker">The studio</div>
          <div>
            <h2 className="section-title">A private studio, by appointment.</h2>
            <div className="section-copy">
              <p>
                Not a high-volume facility. One project at a time, so the setup stays built around
                the work in front of it. Most sessions run remotely; the locker is here when a
                source needs to be captured properly.
              </p>
              <p>
                The point of a deep locker is not the count. It is being able to change the path
                when the source asks for it.
              </p>
            </div>
          </div>
        </div>
        <div className="wrap studio-gallery reveal">
          <figure>
            <Photo
              name="studio-racks"
              alt="Two rolling racks of outboard gear beside a large speaker cabinet, including SansAmp, Chandler Germanium preamps, an Ampeg head and an A-Designs MP-2A tube preamp"
              loading="lazy"
            />
          </figure>
          <figure>
            <Photo
              name="studio-drums"
              alt="Gretsch drum kit miked up on a patterned rug in the live area, surrounded by cymbals and boom stands"
              loading="lazy"
            />
          </figure>
        </div>
        <div className="wrap capability-grid reveal">
          <article className="capability">
            <div className="kicker">01</div>
            <h3>Recording & overdubs</h3>
            <p>Vocals, guitars, bass, keys, and percussion.</p>
          </article>
          <article className="capability">
            <div className="kicker">02</div>
            <h3>Vocal production</h3>
            <p>Direction, comping, tuning to taste, and chains chosen around the singer.</p>
          </article>
          <article className="capability">
            <div className="kicker">03</div>
            <h3>Hybrid mixing</h3>
            <p>Analog where it contributes, digital where recall matters more.</p>
          </article>
          <article className="capability">
            <div className="kicker">04</div>
            <h3>Production & arrangement</h3>
            <p>Structure, parts, programming.</p>
          </article>
          <article className="capability">
            <div className="kicker">05</div>
            <h3>Mastering & delivery</h3>
            <p>Final tone, level, and release-ready files.</p>
          </article>
          <article className="capability">
            <div className="kicker">06</div>
            <h3>Technical systems</h3>
            <p>Signal path, routing, wiring, gain structure, and analog integration.</p>
          </article>
        </div>
      </section>
      <section className="section">
        <section className="section">
          <div className="wrap audience-split">
            <article className="audience-card reveal">
              <div className="kicker">For artists</div>
              <h3>You can talk about the song in human terms.</h3>
              <p>
                No technical plan needed. Tell me what feels wrong and what you are trying not to
                lose.
              </p>
            </article>
            <article className="audience-card reveal">
              <div className="kicker">For producers & engineers</div>
              <h3>The technical depth is there when you want it.</h3>
              <p>
                Gain structure, mic and preamp impedance interaction, summing, conversion. We can
                work at that level directly.
              </p>
            </article>
          </div>
        </section>
        <section className="section">
          <div className="wrap section-header reveal">
            <div className="kicker">The room</div>
            <div>
              <h2 className="section-title">The room is the first thing in the signal path.</h2>
              <div className="section-copy">
                <p>
                  Every microphone in the locker is listening to a room before it listens to
                  anything else. A room that lies to you costs more than any preamp will fix.
                </p>
              </div>
            </div>
          </div>
          <div className="wrap acoustics-split reveal">
            <div className="acoustics-copy">
              <p>
                Work starts with measurement rather than product: what the room actually does, where
                the speakers should sit, and which problems are worth spending on. Low frequency
                behaviour and early reflections come first, because they are what makes a mix
                translate or not.
              </p>
              <p>
                The plan gets written to be built, by you, by your contractor, or by us. What the
                room needs is the same either way, which is what keeps the recommendation honest.
                Panels here were built rather than bought, so the advice comes from having made the
                thing.
              </p>
              <p>
                Whole rooms are on the table too, from treatment and wiring through power,
                monitoring and the gear itself. That work starts with remote planning and
                measurement and ends with us on site.
              </p>
              <p>
                <Link to="/services" hash="acoustics" className="btn">
                  Room and acoustic treatment planning
                </Link>
              </p>
            </div>
            <figure className="acoustics-photo">
              <Photo
                name="acoustic-panels"
                alt="Two absorption panels part built: mineral wool set into timber frames, one clamped while the glue sets"
                loading="lazy"
              />
            </figure>
          </div>
        </section>
        <section className="section">
          <div className="wrap section-header reveal">
            <div className="kicker">Equipment</div>
            <div>
              <h2 className="section-title">The list.</h2>
              <div className="section-copy">
                <p>
                  Grouped by topology, because that is how they get chosen. The gear is only
                  evidence; this is the work.
                </p>
              </div>
            </div>
          </div>
          <div className="wrap photo-set four short reveal">
            <figure>
              <Photo
                name="locker-shelves"
                alt="Shelves of microphone cases and boxes in the mic locker"
                loading="lazy"
              />
            </figure>
            <figure>
              <Photo
                name="mics-fan-cab"
                alt="Five microphones fanned out in front of a guitar speaker cabinet"
                loading="lazy"
              />
            </figure>
            <figure>
              <Photo
                name="racks-preamp-loom"
                alt="Outboard preamps and a loom of patch cables behind the rack"
                loading="lazy"
              />
            </figure>
            <figure>
              <Photo
                name="bench-tech-repair"
                alt="A circuit board mid-repair on the tech bench"
                loading="lazy"
              />
            </figure>
          </div>
          <div className="wrap tools-details reveal">
            <details>
              <summary>Tube large diaphragm condensers</summary>
              <div className="detail-body">
                Wunder Audio CM7 GS (K47 capsule, NOS Telefunken 800-series tube, external HV
                supply) · Telefunken TF51 (in-house CK12 capsule, NOS 6072a, external HV supply)
              </div>
            </details>
            <details>
              <summary>Large & medium diaphragm condensers</summary>
              <div className="detail-body">
                Stam U87 Red Badge · Stam U87 Black Badge · Sony C-100 · Audix SCX25A · Earthworks
                Ethos · Audio-Technica AT4033a (pair)
              </div>
            </details>
            <details>
              <summary>Small diaphragm condensers</summary>
              <div className="detail-body">
                Beyerdynamic MC 930 · Shure SM81 · AKG C451e with CK1 · AKG C451b · Electro-Voice
                RE200 · Peavey PVM 480
              </div>
            </details>
            <details>
              <summary>Ribbons</summary>
              <div className="detail-body">
                Coles 4038 (pair) · Cascade Fat Head II (pair). Highest gain demand in the locker,
                the 4038 wants 70–80 dB from a quiet preamp, and every ribbon patch point is
                labelled against phantom power.
              </div>
            </details>
            <details>
              <summary>Dynamic microphones</summary>
              <div className="detail-body">
                Sennheiser MD 441-U (2) · Sennheiser 521 Black Fire (2) · Sennheiser BF 509 Black
                Fire (2) · Electro-Voice RE20 · Electro-Voice PL10 · Electro-Voice N/DYM series (8)
                · Shure SM7B · Shure Beta 52A · Shure SM57 (7) · Shure SM58 (5) · Telefunken M80 /
                M80s (5) · Yamaha MZ series (6) · Heil PR 40 · Beyerdynamic M201 · Beyerdynamic
                M422n(c) (3) · Beyerdynamic X99 · Audix D-series (11) · Peavey PVM (2) · AKG D112 v1
                · Audio-Technica ATM25 · sE Electronics V7 · Lewitt MTP 550 DM
              </div>
            </details>
            <details>
              <summary>Boundary, specialty & measurement</summary>
              <div className="detail-body">
                Shure SM91 (PZM) · Beyerdynamic TG D71 · Audix M1255B miniature condensers (3) ·
                Crown GLM-200 · calibrated measurement microphone with REW correction file · Zoom
                H4n Pro field recorder
              </div>
            </details>
            <details>
              <summary>Preamps, all-valve</summary>
              <div className="detail-body">
                Thermionic Culture Rooster 2 (2ch, zero solid-state, Sowter transformers,
                triode/pentode harmonic switching) · A-Designs MP-2A (2ch, zero-feedback, Cinemag
                in, EF86 into 6N1-P, switchable 600 Ω/10 kΩ output) · Manley Dual Mono blackface,
                1999 (2ch, single-ended Class A, White Cathode Follower output)
              </div>
            </details>
            <details>
              <summary>Preamps, hybrid tube & pentode</summary>
              <div className="detail-body">
                Sonic Farm Creamer+ (2ch, EF86 pentode into switchable Cinemag or discrete output) ·
                Pendulum Audio Quartet II · Stam Audio SA-69 (Helios Type 69) · A-Designs Ventura SE
              </div>
            </details>
            <details>
              <summary>Preamps, discrete solid-state</summary>
              <div className="detail-body">
                API 3122V (2ch) · Eclair Evil Twin, Jensen mod (2 units) · Wunder Audio PEQ2R ·
                Wunder Audio PEQ2/4R · Chandler Germanium Pre (matched pair on PSU-1 MKII) · Tonelux
                MP5A in A-Designs 503HR
              </div>
            </details>
            <details>
              <summary>Preamps, DC-coupled & split</summary>
              <div className="detail-body">
                Pueblo Audio JR2/2 (2ch, +50 V phantom reserve) · NPNG DMP-2NW (2ch) · Undertone
                Audio MPEQ-1 (matched pair; SEP mode splits preamp and parametric EQ into
                independent processors)
              </div>
            </details>
            <details>
              <summary>Equalizers</summary>
              <div className="detail-body">
                Retro Instruments 2A3 (all-tube passive LC, Pultec EQP-1A3 topology, 40/90 Hz
                interstage subsonic filter) · Langevin Mini Massive Passive (passive LC, Manley
                Rapture discrete op-amps, 3-position IRON transformer switch) · Chandler Tone
                Control EQ (pair, germanium Class A, passive inductor low band, Thick control) ·
                Iron Age Audio Works V2 (bridged-T, all-discrete, 18 frequencies, tracking and
                mastering modes) · Tonelux Equalux (4-band proportional Q with per-band 1/3-octave
                peak) · Tonelux Tilt Rack (2 units, 16 channels of reciprocal tilt at 650 Hz) ·
                Furman Punch 10 subharmonic synthesizer
              </div>
            </details>
            <details>
              <summary>Compressors, tube & optical</summary>
              <div className="detail-body">
                Retro Instruments 176 (variable-mu, ratio switched via output transformer taps) ·
                Retro Instruments STA-Level Gold (Gates Sta-Level lineage, push-pull vari-mu, 40 dB
                GR at ≤1% THD) · Retro Instruments Revolver (Altec 436B / EMI RS124 lineage, Dual
                Threshold) · ADL-1000 (T4B optical, all-tube makeup) · Audioscape DA-3A (2ch
                optical) · Drawmer 1968 MKII (2ch J-FET with 12AX7 makeup)
              </div>
            </details>
            <details>
              <summary>Compressors, FET, VCA, diode & zener</summary>
              <div className="detail-body">
                Mohog Audio MoFET 76 (1176 Rev F, switchable Edcor or Carnhill output) · Wes Audio
                Beta76 (pair) · dbx 160XT transformer-modded pair (Jensen JT-123-DBX / Cinemag) ·
                dbx 160VU · Audioscape 4000E (SSL 4000E center section, in-house 202C VCAs) ·
                Audioscape G-Comp (SSL G384, THAT VCAs, transformerless) · Audioscape MK-609 (Neve
                33609 BA440 diode bridge, NOS parts) · Audioscape D-Comp (EMI TG12413 zener limiter;
                OUT mode is pure transformer saturation) · Tonelux Dynalux (all-discrete, continuous
                feedback-to-feed-forward blend, OVER mode)
              </div>
            </details>
            <details>
              <summary>Limiting, de-essing, gating & spectral</summary>
              <div className="detail-body">
                Pendulum Audio PL-2 (switchable JFET or MOSFET brickwall, limiter devices out of
                path below threshold) · dbx 900 rack with two dbx 902 de-essers · Drawmer DS201 dual
                gate (key filters and Key Listen) · Dolby 740 spectral processors (2)
              </div>
            </details>
            <details>
              <summary>Conversion, summing & monitoring</summary>
              <div className="detail-body">
                Dangerous Music AD+ (mastering-grade ADC) · Dangerous Music D-Box+ monitor
                controller and summing · Lynx Aurora(n) · three-stage summing cascade: Pueblo HJ 482
                → Tonelux OTB → API ASM 164 · API Power Wedge 114 balanced power, prioritized to the
                tube rails. Converters are treated as a critical analog stage; external supplies and
                clock radiators stay out of the high-gain zone.
              </div>
            </details>
          </div>
        </section>
      </section>
    </div>
  );
}
