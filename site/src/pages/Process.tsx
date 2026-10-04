import { Link } from "@tanstack/react-router";
import { Photo } from "@/components/media/Photo";
import { Brand } from "@/components/text/Brand";
import { BoothTag } from "@/components/booths/BoothTag";

export function ProcessPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">How the work goes</div>
          <h1 className="page-title">Regardless of scope.</h1>
          <p className="page-deck">
            Why a project starts with questions, and how it actually runs.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="plain-title reveal">
            How does this whole process start, and what should I expect?
          </h2>
          <figure className="sagan reveal">
            <blockquote>
              <p>In order to make a grilled cheese, first you must create the universe.</p>
            </blockquote>
            <figcaption>Paraphrasing Carl Sagan</figcaption>
          </figure>
          <div className="unit-prose reveal">
            <p>
              <Brand>Upper Level</Brand>’s process is not unlike that paraphrased quote. Even a
              small task requires learning about you and the universe your project is in.
            </p>
            <p>
              It starts on beat one. Centering pre-planning and pre-production around you. It’s an
              open dialog where we ask a lot of questions in search of your signature voice, and
              pre-production is where we search.
            </p>
            <p className="unit-turn">
              Wondering why the 3rd degree? Well, we’re trying to establish the Root.
            </p>
            <p>
              The idea starts with you. We focus our attention on listening to your words and what
              rests between them, so the key signature is yours and we maintain the proper scale …
              without accidentals.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="plain-title reveal">Planning. We discuss, then we get to work.</h2>
          <div className="unit-prose reveal">
            <p>
              To record something is not difficult. It is no longer a huge intimidating console
              behind soundlocked doors; the console can exist in the palm of your hand. What got
              left behind is the creative use of it, and the ability to take an idea all the way to
              implementation.
            </p>
            <p>
              Despite the marketing, it’s not about which mic or what plug-in. It’s about what
              happens when you combine the right tools for the right reasons and accomplish the full
              circle of concept to deliverable.
            </p>
          </div>
          <div className="plan-pair reveal">
            <a className="plan-part" href="#pre-production">
              <span className="plan-mark">First</span>{" "}
              <h3>
                Let’s define who <em>you</em> are.
              </h3>{" "}
              <p>
                Just like any recording, the best outcome happens when you start from the source.{" "}
                <Brand>Upper Level Music</Brand> works from an artist-<em>is</em>-the-source
                mentality: we want to capture the project in your voice, listening to what lives
                behind the words.
              </p>{" "}
              <p>
                Understanding the motivations at the beginning is critical to ending with your voice
                intact. We don’t want to lose the message or its authenticity, so a simple, informal
                Q&A gives us the template.
              </p>{" "}
              <span className="plan-more">How the first conversation goes</span>
            </a>
            <a className="plan-part" href="#describing-sound">
              <span className="plan-mark">Then</span> <h3>You set the destination.</h3>{" "}
              <p>
                We’ll apply the gas and steer the vehicle. The brakes are yours if we miss the turn.
              </p>{" "}
              <p>
                Knowing the technical terminology isn’t necessary. If you describe a song’s feel and
                say “the drums should have a real dreamy vibe, I want it to feel like we’re floating
                in space”, we know what you mean, and we head that way. Sound…
              </p>{" "}
              <span className="plan-more">…is described in borrowed words</span>
            </a>
          </div>
          <details className="fold plan-fold reveal" id="pre-production">
            <summary>
              <span className="fold-k">The first conversation</span>
              <span className="fold-hint">Read</span>
            </summary>
            <div className="fold-body">
              <p>
                Because we’ve been on both sides of the process, we know how frustrating it is to be
                told how to think and what to say to make a ‘hit’. Maybe some people welcome that.
                For us, the source is the guide, and we work in service of the song or project in
                front of us, not building your ‘brand’ or ‘image’. That reveals itself through
                collaboration, in the process.
              </p>
              <p>
                A typical Q&A might go like this, but we try not to be typical. The conversation
                establishes a few constants we’ve learned are necessary, and the rest is a chance to
                be heard before we reach for a microphone. We wouldn’t know which mic to start with
                without knowing what’s being delivered into it.
              </p>
              <ul className="qa-list">
                <li>
                  <b>What are you making, and where does it live right now?</b> A single, an EP, a
                  demo that outgrew the bedroom.
                </li>
                <li>
                  <b>What is it supposed to feel like?</b> Not the genre, the feeling. References,
                  adjectives and colors all count.
                </li>
                <li>
                  <b>What made you write it?</b> The motivation at the beginning is how the message
                  survives to the end with your voice intact.
                </li>
                <li>
                  <b>What is actually getting in the way?</b> Say it plainly. It’s usually fixable.
                </li>
                <li>
                  <b>How much of it do you want in your own hands?</b> Handed over, worked through
                  together, or taught. It can change mid-project.
                </li>
                <li>
                  <b>When does it need to exist, and what does “done” look like?</b> A release date,
                  a playlist pitch, a master for vinyl, or just finally finished.
                </li>
              </ul>
              <p>
                The pressure gets dealt with here, ahead of time, so when creativity is flowing
                nothing interrupts it.
              </p>
            </div>
          </details>
          <details className="fold plan-fold reveal" id="describing-sound">
            <summary>
              <span className="fold-k">Describing sound</span>
              <span className="fold-hint">Read</span>
            </summary>
            <div className="fold-body">
              <p className="booth-tags">
                <BoothTag id="part" />
              </p>
              <p>
                Sound actually has very few words that describe it without referencing another
                sense. Warm, bright, dull, crunchy, smooth, buttery, harsh, crisp: all borrowed from
                somewhere else. It’s pretty interesting to hear how someone describes the sonic
                feeling they want to express.
              </p>
              <p>
                I’ve been asked to make a guitar sound more purple before, and I still knew what
                they meant. I reached for a few chorusy effects and a gentle harmonizer, hit play,
                and they said “yes! exactly.” Hearing the word purple made me think of Prince, who
                used a lot of chorus (the Roland Dimension D) and gentle doubler effects (the
                Eventide H3500 being his favorite). Hearing the original guitar parts and the word
                purple was enough to know what to reach for.
              </p>
              <p>
                Our focus is still on the source. We prefer to get a preliminary sketch during
                pre-production, so time in the studio is spent implementing, not translating. We
                spend less time searching and sorting through options, and more time on the work.
                It’s better to set the tempo ahead of time.
              </p>
            </div>
          </details>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="paths-head reveal">
            <h2>Pick how far you want to be in it.</h2>
            <p>
              The same job can be handed over, worked through together, or taught. It changes the
              price and the schedule, so it gets settled first.
            </p>
          </div>
          <div className="path-stack">
            <div className="path reveal">
              <h4>Hand it over.</h4>
              <p>
                <Photo
                  name="control-desk-monitors"
                  fetchPriority="high"
                  className="row-thumb"
                  alt="A control room desk with a large format console, monitors and a rack behind it"
                />
                You want results and deliverables, done right and on time.
              </p>
              <p className="booth-tags">
                <BoothTag id="finish" /> <BoothTag id="podcast" />
              </p>
              <details className="path-fold">
                <summary>See what this covers</summary>
                <div className="path-body">
                  <ul>
                    <li>Full production from demo to master, or any single stage of it</li>
                    <li>
                      Recording and tracking, remote or in person, with engineers matched to the
                      material
                    </li>
                    <li>
                      Vocal production: direction, comping, tuning, timing, stacks and ad-libs
                    </li>
                    <li>Mixing, including revisions, stems, instrumentals and TV mixes</li>
                    <li>Mastering for streaming, vinyl prep, and sequenced album masters</li>
                    <li>Editing and repair: drum edits, tuning cleanup, noise and bleed removal</li>
                    <li>Podcast and content audio, edited, leveled and delivered to spec</li>
                    <li>
                      Twelve songs stalled at eighty percent, finished and consistent as a body of
                      work
                    </li>
                    <li>One reviewed edit is a real job. We take small ones.</li>
                  </ul>
                </div>
              </details>
            </div>
            <div className="path reveal">
              <h4>Work it together.</h4>
              <p>
                <Photo
                  name="racks-dense"
                  className="row-thumb"
                  alt="A dense rack of outboard gear, preamps and processors stacked floor to ceiling"
                  loading="lazy"
                />
                When you need help with a specific aspect inside a larger scope, we’ll work it out
                together, on your session and in your room. We’ve got you.
              </p>
              <p className="booth-tags">
                <BoothTag id="technical" /> <BoothTag id="chase" /> <BoothTag id="room" />{" "}
                <BoothTag id="listening" />
              </p>
              <details className="path-fold">
                <summary>See what this covers</summary>
                <div className="path-body">
                  <ul>
                    <li>A mix that will not sit, worked through on your session, in your DAW</li>
                    <li>A room that lies to you: measurement, treatment plan, speaker placement</li>
                    <li>A signal path with a fault you cannot isolate, traced end to end</li>
                    <li>Gain structure, impedance, converters and clocking on your actual rig</li>
                    <li>Templates, routing and recall built around how you already work</li>
                    <li>A home playback system that never matched the record</li>
                    <li>Gear you are about to buy, checked before you spend</li>
                    <li>Vocal chain and tracking setup dialed in with you on the session</li>
                  </ul>
                </div>
              </details>
            </div>
            <div className="path reveal">
              <h4>Learn to run it.</h4>
              <p>
                <Photo
                  name="classroom"
                  className="row-thumb"
                  alt="A teaching room with a projector screen, whiteboard, keyboard and drum pads"
                  loading="lazy"
                />
                Whatever the job, we’ll teach you the theory and get as detailed as you want. One on
                one, so you can produce professional results on your own terms. We adapt to how you
                learn.
              </p>
              <p className="booth-tags">
                <BoothTag id="learn" />
              </p>
              <details className="path-fold">
                <summary>See what this covers</summary>
                <div className="path-body">
                  <ul>
                    <li>
                      Engineers on gain structure, impedance, conversion, summing and monitoring
                    </li>
                    <li>
                      Producers on arrangement, routing, and diagnosing a mix instead of guessing
                    </li>
                    <li>Artists learning to record themselves properly, start to finish</li>
                    <li>Students who want the apprenticeship that no longer exists</li>
                    <li>
                      Mastering theory: loudness, dynamics, delivery specs, and what actually
                      matters
                    </li>
                    <li>Technical work: patchbays, wiring, maintenance, and reading a schematic</li>
                    <li>
                      The home engineer already charging for work{" "}
                      <span className="path-aside">
                        If you’re a home engineer, well, we get it. You’re going to do our job on
                        your own and charge less. <Brand>Upper Level</Brand> might be the only ones
                        who will say it out loud. We know, we’ve seen you poach clients from some
                        engineers. It’s okay, it’s never been ours. We just don’t like the quality
                        drop, and neither do you. So let’s still get you the deliverable to ‘your’
                        client, if you have any yet. It could just be you, and that’s cool, we were
                        never worried. But let’s teach it right, whether that’s via lessons on
                        theory or just showing you how ‘the pros’ do it.
                      </span>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="wrap cta-inner">
          <div className="reveal">
            <h2>Choose your path.</h2>
            <p>
              Hand it over, work it together, or learn to run it. We review the job and scope it
              before any work or price is agreed.
            </p>
          </div>
          <div className="cta-buttons reveal">
            <Link to="/contact" className="btn primary">
              Talk to your audio team
            </Link>
            <Link to="/services" className="btn">
              Choose your service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
