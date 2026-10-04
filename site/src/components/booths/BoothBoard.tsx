import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { BOOTHS, BOOTH_GROUPS, type Booth, type BoothId } from "./booths";
import { Sketch } from "./sketches";

function BoothDetail({ booth, group }: { booth: Booth; group: string }) {
  return (
    <div
      className="booth-detail"
      id={`booth-panel-${booth.id}`}
      role="region"
      aria-label={booth.name}
    >
      <Sketch id={booth.id} className="booth-detail-sketch" />
      <div className="booth-detail-copy">
        <p className="booth-kicker">{group}</p>
        <h3 className="booth-detail-name">{booth.name}</h3>
        <p className="booth-detail-line">{booth.line}</p>
        <p className="booth-detail-body">{booth.body}</p>
        <p className="booth-kicker booth-ifyou">This might be you if</p>
        <ul className="booth-symptoms">
          {booth.symptoms.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="booth-start">
          <b>How we start.</b> {booth.start}
        </p>
        <div className="booth-actions">
          <Link className="btn primary" to="/contact" search={{ booth: booth.id }}>
            Get help with this
          </Link>
          <a className="btn" href={booth.link.to}>
            {booth.link.label}
          </a>
        </div>
      </div>
    </div>
  );
}

export function BoothBoard() {
  const [openId, setOpenId] = useState<BoothId | null>(null);

  // /#booth-room (from the sketch tags on other pages) opens that booth.
  useEffect(() => {
    const fromHash = () => {
      const m = /^#booth-([a-z-]+)$/.exec(window.location.hash);
      const id = BOOTHS.find((b) => b.id === m?.[1])?.id;
      if (!id) return;
      setOpenId(id);
      requestAnimationFrame(() =>
        document
          .getElementById(`booth-${id}`)
          ?.scrollIntoView({ block: "center", behavior: "smooth" }),
      );
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  function toggle(id: BoothId) {
    setOpenId((cur) => {
      const next = cur === id ? null : id;
      if (next) {
        requestAnimationFrame(() =>
          document
            .getElementById(`booth-panel-${next}`)
            ?.scrollIntoView({ block: "nearest", behavior: "smooth" }),
        );
      }
      return next;
    });
  }

  return (
    <section className="spread booths" id="booths">
      <div className="wrap">
        <div className="spread-head">
          <span className="spread-no">02 / How we help</span>
          <h2 className="spread-h">
            <span className="ulm">Upper Level</span> offers award winning experience the modern way:
            access in the palm of your hand just like the modern studio
          </h2>
        </div>
        <div className="booths-intro">
          <p>
            We provide the experience and the people that lived in the studio, and now we offer it
            as a service to you to solve any number of audio needs. Having the freedom of modern
            collaborative technology, <span className="ulm">Upper Level Music</span> keeps what was
            the most important part of a major studio all along&hellip; the people.
          </p>
          <p>
            So let&rsquo;s get started and help those who need real solutions, not marketing,
            sponsored content or generic AI responses that never seem to fix <em>your</em> issue.
            There is no one answer in music, so we provide the service you need, at any scale, from
            anywhere, and it&rsquo;s by listening to the artist first that lets us hear the song and
            fill in the gap.
          </p>
          <p className="booths-pointer">
            Open the booth closest to your situation to see what it covers.
          </p>
        </div>
        {BOOTH_GROUPS.map((g) => {
          const booths = BOOTHS.filter((b) => b.group === g.id);
          const open = booths.find((b) => b.id === openId) ?? null;
          return (
            <div className="booth-group" data-group={g.id} key={g.id}>
              <p className="booth-group-label">{g.label}</p>
              <div className="booth-cards">
                {booths.map((b) => {
                  const isOpen = b.id === openId;
                  return (
                    <button
                      key={b.id}
                      id={`booth-${b.id}`}
                      type="button"
                      className="booth-card"
                      aria-expanded={isOpen}
                      aria-controls={`booth-panel-${b.id}`}
                      onClick={() => toggle(b.id)}
                    >
                      <Sketch id={b.id} />
                      <span className="booth-card-name">{b.name}</span>
                    </button>
                  );
                })}
              </div>
              {open && <BoothDetail booth={open} group={g.label} />}
            </div>
          );
        })}
        <div className="booths-close">
          <p>
            Problems are common, but people and their solutions are unique. If you fit more than one
            booth, or none of them, tell us what’s going on and we’ll work out the rest.
          </p>
          <Link className="btn primary" to="/contact">
            Tell us what’s going on
          </Link>
        </div>
      </div>
    </section>
  );
}
