import { Link } from "@tanstack/react-router";
import { Photo } from "@/components/media/Photo";
import { BoothTag } from "@/components/booths/BoothTag";

export function ServicesPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Services</div>
          <h1 className="page-title">We work across many fields of audio.</h1>
          <p className="page-deck">
            These are the services we get asked for most. If you have something unique, let us know.
          </p>
          <p className="page-deck page-deck-second">
            We know one missing piece can bring a project down. Every detail matters, and there is
            no harm in asking about it.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap services-stack">
          <div className="pricing-note reveal">
            <div>
              <h2>Priced to your situation.</h2>
            </div>
            <div>
              <p>
                We don’t keep a price list, because the solution is never the same twice. Every
                project is priced around its own situation, and we work on a sliding scale, because
                your economic situation shouldn’t lock you out of a chance at knowledge and help.
              </p>
              <p>Tell us what you’re working on and we’ll scope it before any price is agreed.</p>
            </div>
          </div>
          <div className="service-set reveal" data-set="0">
            <div className="service-group reveal">
              <h2>Review and diagnose</h2>
              <p>
                Start here when the problem has not been identified yet. Diagnosis comes before any
                recommendation.
              </p>
              <div className="booth-tags">
                <BoothTag id="technical" />
                <BoothTag id="chase" />
              </div>
            </div>
            <div className="service-grid">
              <article className="service-row reveal wide" id="consulting">
                <h2>Diagnosis, strategy and planning</h2>
                <div className="service-copy">
                  <Photo
                    name="bench-tech-repair"
                    fetchPriority="high"
                    className="row-thumb"
                    alt="A tech bench with a flight-cased rack and a circuit board laid out for repair"
                  />
                  <p>
                    A mix that will not sit, a session that keeps stalling, a record that is not
                    becoming what it was meant to be. We work out what is causing it before deciding
                    what to do about it.
                  </p>
                  <p>
                    Also project planning: what order to work in, what to fix now, and what to leave
                    alone.
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="service-set reveal" data-set="1">
            <div className="service-group reveal">
              <h2>Mix, edit and finish</h2>
              <p>The stages people ask for most, taken one at a time or together.</p>
              <div className="booth-tags">
                <BoothTag id="finish" />
                <BoothTag id="part" />
              </div>
            </div>
            <div className="service-grid">
              <article className="service-row reveal" id="mixing">
                <h2>Mixing</h2>
                <div className="service-copy">
                  <Photo
                    name="console-working"
                    className="row-thumb"
                    alt="Someone at the console with a laptop beside a large-format desk, mid-mix"
                    loading="lazy"
                  />
                  <p>
                    Analog and digital together. Balances, automation, and delivery in the formats
                    you need.
                  </p>
                  <p>Multiple songs lower the price per song.</p>
                </div>
              </article>
              <article className="service-row reveal" id="editing">
                <h2>Editing, tuning and timing</h2>
                <div className="service-copy">
                  <Photo
                    name="desk-monitors-control"
                    className="row-thumb"
                    alt="A desk with a controller, two sets of monitors and a rack beside it, set up for editing and mix work"
                    loading="lazy"
                  />
                  <p>
                    Comping, pitch correction to taste, time alignment, drum and sound replacement,
                    noise and click repair, mix prep.
                  </p>
                </div>
              </article>
              <article className="service-row reveal">
                <h2>Vocal production</h2>
                <div className="service-copy">
                  <Photo
                    name="superpower"
                    className="row-thumb"
                    alt="A singer at the microphone mid-phrase on a club stage, a second vocalist behind her"
                    loading="lazy"
                  />
                  <p>
                    Coaching, producing and helping a singer in the booth during their session:
                    direction on each take, performance, comping strategy, and arranging stacks and
                    ad-libs.
                  </p>
                  <p>Performance first. Tuning is a finishing decision, not a rescue.</p>
                </div>
              </article>
              <article className="service-row reveal" id="finish">
                <h2>Mastering</h2>
                <div className="service-copy">
                  <Photo
                    name="meter-digital"
                    className="row-thumb"
                    alt="A hardware loudness meter showing program loudness, range and correlation"
                    loading="lazy"
                  />
                  <p>
                    Final tone, level, consistency, release-ready delivery. Albums and EPs are taken
                    as a body of work rather than song by song.
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="service-set reveal" data-set="2">
            <div className="service-group reveal">
              <h2>Recording and production</h2>
              <p>Getting it made, whether that is one overdub or the whole record.</p>
              <div className="booth-tags">
                <BoothTag id="podcast" />
              </div>
            </div>
            <div className="service-grid">
              <article className="service-row reveal" id="recording">
                <h2>Recording & tracking</h2>
                <div className="service-copy">
                  <Photo
                    name="drums-overhead"
                    className="row-thumb"
                    alt="A drum kit seen from directly above, cymbals and a microphone boom in frame"
                    loading="lazy"
                  />
                  <p>
                    Overdubs, vocals, instruments, session engineering. Remote or in the room you
                    already work in.
                  </p>
                  <p>
                    Mic and chain get picked for the source in front of us, not from a template.
                  </p>
                </div>
              </article>
              <article className="service-row reveal" id="production">
                <h2>Production assistance & arrangement</h2>
                <div className="service-copy">
                  <Photo
                    name="guitars-rack-wall"
                    className="row-thumb"
                    alt="A rack of electric and acoustic guitars against the studio wall"
                    loading="lazy"
                  />
                  <p>
                    Song development, arrangement, parts, programming, and a second set of ears on
                    decisions already made.
                  </p>
                </div>
              </article>
              <article className="service-row reveal wide">
                <h2>Full-project development</h2>
                <div className="service-copy">
                  <p>
                    Early production through final delivery, with the same team on it the whole way.
                  </p>
                  <p>
                    The role shifts stage to stage, producer, engineer, mixer, advisor, without
                    handing the record to someone new.
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="service-set reveal" data-set="3">
            <div className="service-group reveal">
              <h2>Rooms and systems</h2>
              <p>
                The technical side, worked remotely where it can be measured and on-site where it
                cannot.
              </p>
              <div className="booth-tags">
                <BoothTag id="room" />
                <BoothTag id="listening" />
                <BoothTag id="worship" />
                <BoothTag id="business" />
              </div>
            </div>
            <div className="service-grid">
              <article className="service-row reveal" id="systems">
                <h2>Systems & signal flow</h2>
                <div className="service-copy">
                  <Photo
                    name="racks-preamp-loom"
                    className="row-thumb"
                    alt="A rack of preamps with a loom of cables running down the side"
                    loading="lazy"
                  />
                  <p>
                    Patchbay design and normalling, custom cabling, gain structure, converters and
                    clocking, and hum or grounding faults traced end to end. Power draw and
                    distribution planned alongside your licensed electrician; the panel is their
                    job.
                  </p>
                  <p>
                    Equipment guidance sits here too: what a piece will actually do before you
                    spend, and what you already own that is being wasted.
                  </p>
                  <p>
                    The same work covers a place of worship, a conference room or a venue: the
                    signal path is traced from microphone to speaker and the room is measured, not
                    guessed.
                  </p>
                </div>
              </article>
              <article className="service-row reveal" id="acoustics">
                <h2>Room & acoustics</h2>
                <div className="service-copy">
                  <Photo
                    name="acoustic-panels"
                    className="row-thumb"
                    alt="Absorption panels part built, mineral wool set into timber frames with one clamped while the glue sets"
                    loading="lazy"
                  />
                  <p>
                    Measurement, speaker placement, and a written treatment plan built around the
                    room and budget you have. A whole-room build, treatment through monitoring, is
                    available by arrangement for the right project.
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="service-set reveal" data-set="1">
            <div className="service-grid">
              <article className="service-row reveal wide" id="teaching">
                <h2>Educational services</h2>
                <div className="service-copy">
                  <div className="booth-tags">
                    <BoothTag id="learn" />
                  </div>
                  <Photo
                    name="classroom"
                    className="row-thumb"
                    alt="A teaching room set up with a projector screen, whiteboard, keyboard and drum pads"
                    loading="lazy"
                  />
                  <p>
                    One-on-one on any subject on this page: signal flow, recording, editing, mixing,
                    production judgment, mastering theory, acoustics, electronics, or running your
                    own setup.
                  </p>
                  <p>
                    Each person gets a personal curriculum that fits their needs and budget.
                    Sessions work on your material and your rig.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="wrap cta-inner">
          <div className="reveal">
            <h2>Choose your service.</h2>
            <p>
              Pick what fits, or describe something unique. One missing piece can bring a project
              down, and there is no harm in asking about it.
            </p>
          </div>
          <div className="cta-buttons reveal">
            <Link to="/contact" className="btn primary">
              Talk to your audio team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
