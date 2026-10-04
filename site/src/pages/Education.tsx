import { Link } from "@tanstack/react-router";
import { Photo } from "@/components/media/Photo";
import { BoothTag } from "@/components/booths/BoothTag";

export function EducationPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Educational services</div>
          <h1 className="page-title">
            The room is gone. The knowledge doesn’t have to go with it.
          </h1>
          <p className="page-deck">
            One-on-one teaching in recording, production, mixing and the technical side, built
            around what you are actually working on.
          </p>
          <p className="page-deck page-deck-second">
            Not a curriculum. The apprenticeship, handed over directly, at the level you are at
            today. <Link to="/the-gap">Why that path disappeared →</Link>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap section-header reveal">
          <div className="kicker">01 / What this is</div>
          <h2 className="section-title">The apprenticeship, handed over directly.</h2>
        </div>
        <div className="wrap remote-body reveal">
          <p className="booth-tags">
            <BoothTag id="learn" /> <BoothTag id="worship" />
          </p>
          <figure className="inline-photo ph-side reveal">
            <Photo
              name="classroom"
              fetchPriority="high"
              alt="A teaching room: projector screen, whiteboard, keyboard, drum pads and a laptop on the table"
            />
          </figure>
          <p>
            I learned this trade the old way: as an intern and then an assistant at Hit Factory
            Criteria, standing behind people who had been doing it for thirty years. Almost nobody
            entering audio today gets a room, a mentor, and five years to absorb it.
          </p>
          <p>
            So I hand it over directly: one person at a time, on real work, answering the question
            actually in front of you rather than the one a course assumed you would have this week.
          </p>
          <p>
            You do not need the vocabulary to start. “This should sound like I'm in a spaceship” is
            a real place to begin. So is “something in my chain is buzzing and I cannot find it.”
            Same depth either way.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="paths-head reveal">
            <h2>Who shows up, and what they leave with.</h2>
            <p>
              Five common starting points. Open the one closest to yours, or contact us and we’ll
              find it.
            </p>
          </div>
          <div className="path-stack">
            <div className="path reveal">
              <h4>The artist recording themselves.</h4>
              <p>
                You can write it and sing it. The recording keeps sounding smaller than the idea did
                in your head.
              </p>
              <details className="path-fold">
                <summary>See what this covers</summary>
                <div className="path-body">
                  <ul>
                    <li>
                      A vocal chain that suits your voice, set once, so you stop rebuilding it every
                      session
                    </li>
                    <li>
                      Mic technique and distance: what actually changes the tone, and what only
                      feels like it does
                    </li>
                    <li>
                      Recording a take you can use, then comping it without flattening the
                      performance
                    </li>
                    <li>
                      Arranging stacks and ad-libs so the chorus lifts instead of getting louder
                    </li>
                    <li>
                      Knowing when a take needs another pass and when it needs a different decision
                    </li>
                    <li>A rough mix good enough to send out without apologising for it</li>
                  </ul>
                </div>
              </details>
            </div>
            <div className="path reveal">
              <h4>The producer who wants to stop guessing.</h4>
              <p>
                The beat is right. The record is not, and the fixes are starting to feel like coin
                flips.
              </p>
              <details className="path-fold">
                <summary>See what this covers</summary>
                <div className="path-body">
                  <ul>
                    <li>Diagnosing a mix instead of reaching for the last plugin that worked</li>
                    <li>Arrangement as an audio decision: what to remove before reaching for EQ</li>
                    <li>
                      Routing, busses, parallel paths and gain staging inside your own template
                    </li>
                    <li>
                      Why the low end holds together on your speakers and collapses everywhere else
                    </li>
                    <li>
                      Reference listening that tells you something, rather than making you feel
                      worse
                    </li>
                    <li>Working with an engineer: what to ask for, in words they can act on</li>
                  </ul>
                </div>
              </details>
            </div>
            <div className="path reveal">
              <h4>The engineer filling in the theory.</h4>
              <p>
                You get good results. You want to know why, so the next room does not start you
                over.
              </p>
              <details className="path-fold">
                <summary>See what this covers</summary>
                <div className="path-body">
                  <ul>
                    <li>
                      Gain structure and impedance, on your rig, with the meters in front of you
                    </li>
                    <li>Conversion, clocking and summing: what is audible, what is folklore</li>
                    <li>
                      Transformers, saturation and what windings actually do to harmonic content
                    </li>
                    <li>
                      Compression by behaviour rather than preset: attack, release, detection,
                      program dependence
                    </li>
                    <li>
                      Monitoring and room interaction, and how to trust a room you did not build
                    </li>
                    <li>
                      Mastering theory: loudness, dynamics, delivery specs, and what matters after
                      the platform
                    </li>
                  </ul>
                </div>
              </details>
            </div>
            <div className="path reveal">
              <h4>The one chasing a problem.</h4>
              <p>
                Something is wrong and it is not a taste question. You want to find it yourself next
                time.
              </p>
              <details className="path-fold">
                <summary>See what this covers</summary>
                <div className="path-body">
                  <ul>
                    <li>
                      Tracing a noisy signal path end to end, in an order that eliminates rather
                      than shuffles
                    </li>
                    <li>Grounding, hum, RF and the difference between them by ear</li>
                    <li>
                      Patchbays: normalled, half-normalled, and wiring one you can read six months
                      later
                    </li>
                    <li>Reading a schematic well enough to ask a tech an intelligent question</li>
                    <li>Basic maintenance and safe bench practice, including what not to open</li>
                    <li>Measuring a room, and turning the measurement into a treatment plan</li>
                  </ul>
                </div>
              </details>
            </div>
            <div className="path reveal">
              <h4>The student, or the person teaching them.</h4>
              <p>
                School gives you the map. This is the part that used to happen in the hallway
                afterwards.
              </p>
              <details className="path-fold">
                <summary>See what this covers</summary>
                <div className="path-body">
                  <ul>
                    <li>
                      Session etiquette and the unwritten parts: how a room runs, and where you
                      stand in it
                    </li>
                    <li>
                      What an assistant is actually for, and how to make yourself worth keeping
                    </li>
                    <li>
                      Portfolio work reviewed honestly, with the fixes ranked by what will matter
                    </li>
                    <li>
                      Guest instruction, workshops and course support for programs and institutions
                    </li>
                    <li>
                      Houses of worship and AV teams: training the volunteers who run it every week
                    </li>
                    <li>Career questions answered by somebody with no course to sell you</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap section-header reveal">
          <div className="kicker">The booth</div>
          <h2 className="section-title">The vocal booth is an instrument itself.</h2>
        </div>
        <div className="wrap booth-story reveal">
          <figure className="inline-photo">
            <Photo
              name="vocal-booth-take"
              alt="A vocal booth: a large-diaphragm microphone on a boom with a pop filter, and a vocalist mid-take wearing headphones"
              loading="lazy"
            />
          </figure>
          <div className="booth-story-copy">
            <p>
              Small, unfamiliar, intimidating, and you’re expected to perform and be documented
              forever? If you’re nervous, the microphone will know. Sometimes a coach can help
              silence the mental noise, giving you the confidence to deliver. And sometimes an
              inexperienced engineer needs help knowing which way to point the mic.
            </p>
            <p>
              We can help a vocalist prepare ahead of the big day, or if your first day as an
              assistant is approaching, maybe a tailored lesson about polar patterns and proximity
              effect is the help you need.
            </p>
            <p>
              And don’t stress. I had an assistant who improperly plugged in a $15,000 Telefunken
              Elam 251 tube microphone, and the mic zapped him so hard he crashed right through the
              walls of the booth. (Tube equipment is very high voltage.) The mic wasn’t damaged. He
              was checked by a doctor and was fine too. We gave him the rest of the night off.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap section-header reveal">
          <div className="kicker">02 / How it runs</div>
          <h2 className="section-title">Your session, your room, your material.</h2>
        </div>
        <div className="wrap">
          <div className="plan-pair reveal">
            <div className="plan-part">
              <span className="plan-mark">Before</span>
              <h3>We work out what you are missing.</h3>
              <p>
                A short conversation first. What you are making, what keeps going wrong, and what
                you have already tried. Most people arrive thinking the problem is one thing and
                leave the first hour knowing it was another. That is not a wasted hour, it is the
                whole job.
              </p>
            </div>
            <div className="plan-part">
              <span className="plan-mark">Then</span>
              <h3>We use the work in front of you.</h3>
              <p>
                Lessons run on your session, in your DAW, through your speakers. Screen and audio
                shared, or in the room when that makes sense. Nothing is demonstrated on a file that
                behaves perfectly, because yours will not.
              </p>
            </div>
          </div>
          <div className="plan-pair reveal">
            <div className="plan-part">
              <span className="plan-mark">Pace</span>
              <h3>One session, or a run of them.</h3>
              <p>
                Some people come once with a specific question and leave with the answer. Others
                book a standing hour and work through a whole record. Both are normal, and there is
                no package you have to commit to before finding out which one you are.
              </p>
            </div>
            <div className="plan-part">
              <span className="plan-mark">After</span>
              <h3>Notes you can use without me.</h3>
              <p>
                You keep the settings, the routing, the reasoning, and a written note of what we
                decided and why. The point is that you can do it again alone, which is the only real
                test of whether the lesson worked.
              </p>
            </div>
          </div>
          <p className="rule-line reveal">
            <b>Physics describes. Ears decide.</b> Every lesson runs on the same rule as this site:
            state what happens, the ratio, the bandwidth, the noise, the facts about electrons, then
            listen. What it does to the song is decided in your ears, not on a spec sheet.
          </p>
          <div className="section-header reveal remote-head" id="remote-lesson">
            <div className="kicker">Remote lessons</div>
            <h3 className="section-title">How a remote lesson runs.</h3>
          </div>
          <p className="unit-note reveal">
            Live and one on one in a browser-based studio platform (Sessionwire). You get a link
            before your slot, and there is nothing to buy or install for a first session.
          </p>
          <div className="plan-pair plan-three reveal">
            <div className="plan-part">
              <span className="plan-mark">Before</span>
              <h3>Get set up.</h3>
              <p>
                Open Chrome, Brave or Edge (not Safari or Firefox), allow camera and mic, put
                headphones on and load your session. A device check runs before you enter. Sending
                stems? Trim them to a common start and upload them the day before.
              </p>
            </div>
            <div className="plan-part">
              <span className="plan-mark">During</span>
              <h3>Both screens, both cameras.</h3>
              <p>
                Your DAW’s audio arrives at full 48 kHz quality, not video-call audio. With your
                permission I can take control of your DAW to show something directly. Sessions can
                be recorded.
              </p>
            </div>
            <div className="plan-part">
              <span className="plan-mark">After</span>
              <h3>A note within the hour.</h3>
              <p>
                The recording if you asked for it, any reference or print files, and a short note on
                what we covered and what to do next.
              </p>
            </div>
          </div>
          <p className="unit-note reveal">
            <b>Demo or print.</b> A demo plays live through the ULM analog chain, or we walk the
            session in real time, and you get a reference file back. A print means stems sent ahead,
            processed at native resolution and returned aligned. It is a separate deliverable,
            scheduled separately.
          </p>
          <p className="unit-note reveal">
            Before we book, a short intake covers your computer, DAW, interface, headphones and
            connection.
          </p>
          <div className="hero-actions reveal">
            <Link to="/contact" search={{ booth: "learn" }} className="btn primary">
              Book a lesson
            </Link>
            <Link to="/services" className="btn">
              Choose your service
            </Link>
          </div>
        </div>
      </section>
      <section className="section slab">
        <div className="wrap closing-note reveal">
          <h2>The tools reached everyone. The training did not.</h2>
          <div className="closing-copy">
            <p>
              Home studios are everywhere, which is a large part of why the major rooms are closing,
              and those rooms were the schools. Needing to be taught this is not a failure. It is
              what happens when a whole chain of handing-down gets cut and nobody replaces it.
            </p>
            <p>
              If you want to know why a ribbon needs seventy decibels of clean gain, or why your
              kick sounds right here and wrong in the car, I will show you. If you would rather I
              just handle it, that is fine too, and it is on the same side of the same argument.
            </p>
            <p>
              <Link to="/the-gap">Read the whole argument: The Gap →</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
