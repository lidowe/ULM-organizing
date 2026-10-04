import { Link } from "@tanstack/react-router";
import { Photo } from "@/components/media/Photo";
import { Brand } from "@/components/text/Brand";

export function AboutPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">About</div>
          <h1 className="page-title">
            <Brand>Upper Level Music</Brand>
          </h1>
          <p className="page-deck">
            Created in 2014 by Edward Lidow. A studio built around the person making the record.
          </p>
        </div>
      </section>
      <section className="section" id="person">
        <div className="wrap section-header reveal">
          <div className="kicker">01 / The person</div>
          <h2 className="section-title">Musician first, engineer second.</h2>
        </div>
        <div className="wrap remote-body">
          <figure className="inline-photo ph-side reveal">
            <Photo
              name="edward-thumbnail"
              fetchPriority="high"
              alt="Edward Lidow at a recording console with studio monitors behind him"
            />
            <figcaption>Edward Lidow at the console.</figcaption>
          </figure>
          <p>
            <Brand>Upper Level Music</Brand> was created in 2014 by Edward Lidow, musician,
            recording engineer, mixer, producer, studio owner and manager, acoustic consultant, and
            university instructor in audio engineering. There are few jobs in this industry he
            hasn’t done at some point.
          </p>
          <p>
            I found my place in audio as an engineer, but I started as a musician. Formally trained
            through high school jazz bands on saxophone and percussion, then years as an indie
            artist on drums, bass and guitar. That is where the technical side pulled me in, and
            where I started chasing the blend between the creative and the technical.
          </p>
          <figure className="inline-photo ph-side reveal">
            <Photo
              name="credits-kravitz"
              alt="Edward Lidow with Lenny Kravitz at a session"
              loading="lazy"
            />
          </figure>
          <p>
            After Clemson University and a media and communications degree, I went to SAE Miami and
            graduated valedictorian, which earned a rare internship at Hit Factory Criteria Miami,
            now Criteria Studios. Standing on the shoulders of giants there, I worked on
            Grammy-winning, platinum-selling records across every genre, and came to understand that
            everything we do is creative and collaborative. No musical project reaches success
            without a strong creative team.
          </p>
          <figure className="inline-photo ph-side reveal">
            <Photo
              name="hit-factory"
              alt="Five people standing under The Hit Factory neon sign outside the studio"
              loading="lazy"
            />
            <figcaption>Hit Factory Criteria, Miami, the internship that started it.</figcaption>
          </figure>
        </div>
      </section>
      <section className="section" id="industry">
        <div className="wrap section-header reveal">
          <div className="kicker">02 / The industry</div>
          <h2 className="section-title">The Music Industry and The Diminished Artist</h2>
        </div>
        <div className="wrap remote-body">
          <p>
            <em>
              The technology to create has never been so powerful, so why do I feel so powerless?
            </em>
          </p>
          <p>
            The record industry today is shifting the responsibilities of an entire team of
            specialized talents onto underfunded, overworked artists, asking them to own a dozen
            things that have nothing to do with why they were drawn to music in the first place. It
            is nearly impossible to make a record with the sound quality, the collaborative depth,
            and the specialized touch that a label can simply fund and hire.
          </p>
          <p>
            It used to run bottom to top. A label sent an A&R to a dive bar to see a band with a
            little local buzz, a write-up in a weekly, a tip from a friend of a friend, and the
            artist blew them away. The label then had to convince the artist to sign, so the label
            could support them.
          </p>
          <figure className="inline-photo ph-side reveal">
            <Photo
              name="jm-pretending"
              alt="A band posed in matching suits against a painted flat while a photographer shoots from a stepladder, lighting stand and props in frame"
              loading="lazy"
            />
          </figure>
          <p>
            Now it runs top to bottom. Labels are media conglomerates pushing artists they choose
            and shape toward radio, toward numbers that streaming will never pay an independent
            artist. For the creative-minded musician, engineer, or anyone who wants to be present
            while music gets made, the landscape has gone dystopian.
          </p>
        </div>
      </section>
      <section className="section freedom-section">
        <div className="wrap reveal freedom-inner">
          <blockquote className="freedom-quote">
            It is the artist who is vulnerable. It is the artist expressing their emotion, their
            story. That is where all of this starts, and the industry should be built to reflect it.
          </blockquote>
          <figure className="freedom-photo">
            <Photo
              name="jef-bear-weirdo"
              alt="A bassist performing in a full polar bear costume, drummer behind, mid-song"
              loading="lazy"
            />
          </figure>
        </div>
      </section>
      <section className="section room-band-section">
        <div className="wrap">
          <figure className="room-band">
            <Photo
              name="infamed"
              alt="A writing room mid-session: two violinists, a guitarist, someone working at a laptop, synths and keyboards around the table"
              loading="lazy"
            />
          </figure>
        </div>
      </section>
      <section className="section" id="why">
        <div className="wrap section-header reveal">
          <div className="kicker">03 / Why this exists</div>
          <h2 className="section-title">Control belongs to the person making the art.</h2>
        </div>
        <div className="wrap remote-body">
          <p>
            That feeling is what made me think there has to be a better way, not moving backward to
            how things were, but putting control back in the hands of the person making the art.
          </p>
          <p>
            <Brand>Upper Level Music</Brand> is an attempt, by me and the people I have met across a
            30-year career, to turn that around, so anyone who wants to express themselves sonically
            can do it and be sustained by it.
          </p>
          <p>
            This is where the creative spirit stands up and says this is not all on us. We want the
            social element back. We want collaboration. Music is not meant to be made alone, staring
            at a screen.
          </p>
        </div>
      </section>
      <section className="essay">
        <div className="wrap spread-body">
          <p className="spread-note">Every role</p>
          <div>
            <p className="essay-lead">
              No matter the task, we serve the process, we work in service to the song, and the ego
              stays outside.
            </p>
            <p>
              Various roles, various artists, whether the role was large or small or the artist
              famous or not, every job contributes to the ‘flow state’ every job asks 100% focus …
              yes, even the coffee can ruin an entire day, or fuel the magic later.
            </p>
            <p>
              Get them coffee, route signal flow and place mics, run the DAW or be the tape op, it
              all was part of a bigger picture and personal growth. Running cables became running
              sessions, tuning instruments became vocal tuning and production, production became
              tracking engineer, mix engineer, mastering, or going on tour with them.
            </p>
            <p>
              Relationships carried on, years go by and I’m asked to build their private studio
              after our work together commercially… by being their barista a decade earlier. Others
              continue as clients, friends and contemporaries to this day. The only thing that stays
              consistent is the dedication and effort put into every detail.
            </p>
            <p>
              <Link to="/work" className="btn">
                See the work
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="spread">
        <div className="wrap">
          <div className="spread-head">
            <span className="spread-no">What we believe</span>
            <h2 className="spread-h">Our values.</h2>
          </div>
          <div className="spread-body">
            <p className="spread-note">
              Service
              <br />
              Intention
              <br />
              Listening
            </p>
            <div className="spread-cols">
              <p>
                The artist is the one who is vulnerable. The social currency spent on a record is
                theirs, their story, their name, their risk. Our work belongs in service to the
                song.
              </p>
              <p>
                Before we begin, we want to hear about you: the concept, the intention. Then we
                translate that into the technical world, the gear, the sonic character.
              </p>
              <p>
                It is not the artist’s job to know whether an 1176 or a dbx 160VU will help express
                that. If you are an engineer who wants to know, we will travel that path as far as
                you want.
              </p>
              <p>It is better to listen to the artist in order to hear the song.</p>
            </div>
          </div>
          <details className="fold">
            <summary>
              <span className="fold-k">Remote work</span>
              <span className="fold-hint">Read</span>
            </summary>
            <div className="fold-body">
              <p>
                Most work happens through video calls, shared audio feeds, and real-time remote
                collaboration. That flexibility lets us work with artists anywhere, on any schedule.
              </p>
              <p>
                Nothing fully replaces being in the same space. We trade some of that for access,
                and we are honest about it.
              </p>
            </div>
          </details>
        </div>
      </section>
      <section className="rack-unit archive-unit">
        <div className="wrap">
          <div className="unit-label">
            <span className="unit-no">A</span>
            <span>The archive</span>
          </div>
          <h2 className="unit-title">Twenty years of rooms and the people in them.</h2>
        </div>
        <div className="wrap archive-strip">
          <figure>
            <Photo
              name="moonlight-bass"
              alt="A person playing an acoustic bass outdoors at night with a baby in a carrier"
              loading="lazy"
            />
            <figcaption>Music happens wherever you are.</figcaption>
          </figure>
          <figure>
            <Photo
              name="console-large"
              alt="An engineer behind a large-format recording console in a professional control room"
              loading="lazy"
            />
          </figure>
          <figure>
            <Photo
              name="session-redlit"
              alt="Two engineers at a console under red light during a session"
              loading="lazy"
            />
          </figure>
          <figure>
            <Photo
              name="archive-console-pair"
              alt="Two people standing beside a large console in a studio control room"
              loading="lazy"
            />
          </figure>
          <figure>
            <Photo
              name="archive-crew"
              alt="A group of people in a studio lounge after a session"
              loading="lazy"
            />
          </figure>
          <figure>
            <Photo
              name="archive-group"
              alt="Four people posing together in a studio hallway"
              loading="lazy"
            />
          </figure>
          <figure>
            <Photo
              name="session-redlit-2"
              alt="An engineer and an artist at a console in a dim control room"
              loading="lazy"
            />
          </figure>
          <figure>
            <Photo
              name="control-room-red"
              alt="A red-lit control room with a large console and monitors"
              loading="lazy"
            />
          </figure>
        </div>
      </section>
      <section className="cta-section">
        <div className="wrap cta-inner">
          <div className="reveal">
            <h2>Start a conversation.</h2>
            <p>Major-label experience, available at any stage and any scale.</p>
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
