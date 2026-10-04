import { Link } from "@tanstack/react-router";
import { Photo } from "@/components/media/Photo";
import { Brand } from "@/components/text/Brand";
import { BoothTag } from "@/components/booths/BoothTag";

export function TheGapPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">The Gap</div>
          <h1 className="page-title">The tools reached everyone. The knowledge didn’t.</h1>
          <div className="deck-stack">
            <p className="page-deck">
              Doesn’t it feel like 90% of getting your art heard involves anything but making music?
              Constant self-marketing, streaming services that don’t pay, and learning to record at
              a professional level just to keep up.
            </p>
            <p className="page-deck">
              <Brand>Upper Level Music</Brand> is here for that last part, the gap between the major
              label recording studio and the growing home studio. Being in control of your record is
              the one place a musician actually wants control.
            </p>
            <p className="page-deck">
              Major-label resources and experience, made available at any stage. The work is
              collaborative rather than a permanent building, and the real world knowledge can sit
              in your back pocket now too.
            </p>
          </div>
          <figure className="inline-photo gap-hero-photo reveal">
            <Photo
              name="session-color"
              fetchPriority="high"
              alt="A drummer at the kit on the left and an acoustic guitar player seated on the right, working out a part together"
            />
          </figure>
        </div>
      </section>
      <section className="section">
        <div className="wrap section-header reveal">
          <div className="kicker">01 / Why this exists</div>
          <h2 className="section-title">The chain, interrupted.</h2>
        </div>
        <div className="wrap remote-body reveal">
          <p>
            For most of a century, knowledge moved through this trade the way signal moves through a
            patchbay: from one stage to the next, by default. Not through a curriculum, but through
            the mix: the private place built to create, the people who create, and the teamwork of
            sharing and observing that carried the craft from one record to the next. The room was
            the school. Nobody called it teaching. It was just how a record got made.
          </p>
          <p>
            That chain was how every working engineer you have ever heard of learned. Nobody paid
            for a course. You swept the floor, you wrapped cables, you watched and you listened.
            Years of that, in a real room, behind people who had done it for thirty years.
          </p>
          <p>
            Then the tools got small and cheap and went home with everyone. That part was good — a
            recording studio that fits in the palm of your hand is arguably one of the greatest
            things to happen in audio. But the power moved faster than the knowledge, and the
            knowledge was not included in the transfer.
          </p>
          <figure
            className="gap-chain reveal"
            role="img"
            aria-label="A signal chain reading left to right: the room, the people, and the teamwork — the private place built to create, the people who create, and the sharing and observing that passes the knowledge — then a break, then the next record that doesn’t receive it. The mix, interrupted."
          >
            <svg viewBox="-20 0 680 110" xmlns="http://www.w3.org/2000/svg">
              <line className="gc-solid" pathLength="1" x1="79" y1="36" x2="201" y2="36" />
              <line className="gc-solid" pathLength="1" x1="219" y1="36" x2="341" y2="36" />
              <line className="gc-dash" x1="465" y1="36" x2="551" y2="36" />
              <circle cx="70" cy="36" r="9" />
              <circle cx="210" cy="36" r="9" />
              <circle cx="350" cy="36" r="9" />
              <circle cx="560" cy="36" r="9" />
              <line className="gc-brk" x1="425" y1="22" x2="455" y2="50" />
              <line className="gc-brk" x1="455" y1="22" x2="425" y2="50" />
              <text x="70" y="82" textAnchor="middle">
                The room
              </text>
              <text x="210" y="82" textAnchor="middle">
                The people
              </text>
              <text x="350" y="82" textAnchor="middle">
                The teamwork
              </text>
              <text x="560" y="82" textAnchor="middle">
                The next record
              </text>
            </svg>
            <figcaption>
              The signal path of a record: the room, the people and the teamwork carry what was
              learned to the next record. Break any link and the next record starts from scratch.
            </figcaption>
          </figure>
          <p>
            The mix that made the record — the room built to create, the people who create, the
            teamwork that passes the knowledge — broke. The next record gets made without it.
          </p>
          <p>
            So the questions that used to get answered by osmosis now land on one person, alone, at
            midnight. Why does the kick sound right here and wrong in the car? Why does a ribbon mic
            need 70 dB of clean gain, and what happens to the low end when it doesn’t get it? Why
            did the take sound huge in the room and small on the phone? These are not stupid
            questions and they are not rare. They are exactly the questions the intern used to
            absorb by standing in the room. The room is gone. The questions stayed.
          </p>
          <p>
            Into that silence came a different pool: sponsored advice, gear pushed for margin over
            merit, side-by-side tests hunting a perfect copy of an original that never existed in
            the first place. Blanket information for a craft where no two projects are the same.
            Advice that fits every record fits none of them.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap section-header reveal">
          <div className="kicker">02 / The industry</div>
          <h2 className="section-title">The assembly line.</h2>
        </div>
        <div className="wrap remote-body reveal">
          <p>
            The technology to create has never been so powerful — so why does everyone feel so
            powerless?
          </p>
          <figure className="inline-photo ph-side reveal">
            <Photo
              name="wild-drunk-jordan"
              alt="A guitarist on his back on the stage floor, still playing, the rest of the band around him mid-song"
              loading="lazy"
            />
          </figure>
          <p>
            It used to run bottom to top. A label sent an A&R to a dive bar to see a band with a
            little local buzz, a write-up in a weekly, a tip from a friend of a friend, and the
            artist blew them away. The label then had to convince the artist to sign, so the label
            could support them. The artist’s job was the music.
          </p>
          <p>
            Now it runs top to bottom. Labels are media conglomerates pushing artists they choose
            and shape toward numbers that streaming will never pay back to an independent artist.
            Record labels stopped listening to the music or the fans and started calculating risk
            and cost analysis. Art is hard to calculate, so they took it out of the equation. Some
            of us refuse to put our emotions on an assembly line.
          </p>
          <figure className="inline-photo ph-side reveal">
            <Photo
              name="jm-pretending"
              alt="A band posed in matching suits against a painted flat while a photographer shoots from a stepladder, lighting stand and props in frame"
              loading="lazy"
            />
          </figure>
          <p>
            Here is what that looks like from the artist’s chair. The jobs that used to belong to a
            team — A&R, producer, engineer, mixer, mastering, art direction, marketing, radio,
            management — now have one name on them: yours. You write the song, track it in the
            bedroom, learn mixing from forty contradicting videos, master it yourself because the
            budget is gone, shoot the cover on a phone, cut the vertical clips, and pitch the
            playlist. Every one of those was once a career.
          </p>
          <p>
            If you feel like you are doing every job and still falling behind, that is not you
            failing. That is a whole team’s job description landing on one person. The answer was
            never to work harder at all twelve jobs. It is to know which of them you should actually
            be doing — and to have people in your corner for the rest.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap section-header reveal">
          <div className="kicker">03 / Beyond music</div>
          <h2 className="section-title">The gap doesn’t stop at the studio door.</h2>
        </div>
        <div className="wrap remote-body reveal">
          <p className="booth-tags">
            <BoothTag id="worship" /> <BoothTag id="business" /> <BoothTag id="podcast" />{" "}
            <BoothTag id="listening" />
          </p>
          <p>
            The same transfer broke everywhere sound matters. The gear got cheaper and everywhere;
            the understanding stayed scarce.
          </p>
          <p>
            The conference room where the whole company can see the slide deck and nobody past the
            third row can hear the presenter — because the ceiling speakers were wired by whoever
            happened to be on the ladder that day, and the microphone was chosen from a catalog
            photo. The fix is rarely a bigger speaker. It is knowing that intelligibility lives in
            the midrange, and that the room, not the wattage, is doing most of the damage.
          </p>
          <p>
            The house of worship, whatever the faith, where the congregation has faith but can’t
            hear the message — a beautiful room, hard surfaces, a volunteer doing their best on a
            console with more channels than training. The music sounds fine because music forgives.
            Speech doesn’t. A service lives or dies on whether the words land, and that is a
            solvable problem: microphone choice and placement, gain structure, a few panels in the
            right places, and someone who knows why.
          </p>
          <p>
            The restaurant where dinner conversation dies under a system tuned by ear in an empty
            room. The podcast recorded on good microphones in a bad-sounding spare bedroom,
            wondering why it never sounds like the shows it admires. Different rooms, different
            budgets — the same missing piece.
          </p>
          <p>
            And the fix is not a one-size-fits-all sponsored product. It is knowing what the right
            tool for the right job is — and understanding why. That understanding is the thing that
            didn’t transfer. Handing it over is the whole point.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap section-header reveal">
          <div className="kicker">04 / The patch around the interruption</div>
          <h2 className="section-title">Collaboration, not competition.</h2>
        </div>
        <div className="wrap remote-body reveal">
          <p>
            The pivot left many creators feeling alone, forced to scream to be heard.{" "}
            <Brand>Upper Level Music</Brand> exists to close that divide — for the performer,
            writer, producer, engineer, audiophile, and the student too. Whether you identify with
            one title or many, you are an artist given an endless palette but no canvas.
          </p>
          <p>
            A broken chain doesn't repair itself. It gets patched, deliberately, one cable at a
            time, by someone who knows where the signal needs to go. That is what{" "}
            <Brand>Upper Level Music</Brand> is: the patch around the interruption. The industry
            machine and the home studio are not enemies. They are colleagues separated by a gap
            neither of them made.
          </p>
          <p>
            Our core belief: your unique sound carries farthest with a team working in harmony with
            you. The help differs; the position doesn't. Nobody owns the knowledge. Somebody just
            has to pass it on.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn primary">
              Talk to your audio team
            </Link>
            <Link to="/" hash="booths" className="btn">
              Choose your service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
