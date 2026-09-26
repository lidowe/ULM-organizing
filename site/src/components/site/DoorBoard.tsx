import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { DoorMark } from "./DoorMark";
import { DOORS, DOORS_REASSURANCE, type Door } from "./door-board-data";

function DoorDetail({
  door,
  variant,
  onVariant,
}: {
  door: Door;
  variant: number;
  onVariant: (v: number) => void;
}) {
  return (
    <div className="door-detail" role="region" aria-label={door.name}>
      <DoorMark name={door.mark} variant={variant} className="door-mark-lg" />
      <p className="door-detail-who">
        {door.n} · {door.who}
      </p>
      <h3 className="door-detail-name">{door.name}</h3>
      <p className="door-detail-body">{door.body}</p>
      <p className="door-usually">
        <span>What it usually turns out to be</span>
        {door.usually}
      </p>
      <ul className="door-symptoms">
        {door.symptoms.map((s, i) => (
          <li key={s}>
            <button
              type="button"
              className={variant === i ? "is-active" : undefined}
              onMouseEnter={() => onVariant(i)}
              onFocus={() => onVariant(i)}
              onMouseLeave={() => onVariant(-1)}
              onBlur={() => onVariant(-1)}
              onClick={() => onVariant(variant === i ? -1 : i)}
            >
              <span className="door-symptom-no">{String(i + 1).padStart(2, "0")}</span>
              {s}
            </button>
          </li>
        ))}
      </ul>
      <p className="door-price">{door.price}</p>
      <div className="door-detail-actions">
        <Link className="btn" to={door.link.to} hash={door.link.hash}>
          {door.link.label}
        </Link>
        <Link className="btn primary" to="/start">
          Start a project
        </Link>
      </div>
    </div>
  );
}

export function DoorBoard() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [variant, setVariant] = useState(-1);
  const rows = useRef<Record<string, HTMLDivElement | null>>({});

  const open = DOORS.find((d) => d.id === openId) ?? null;

  function toggle(id: string) {
    setVariant(-1);
    setOpenId((cur) => {
      const next = cur === id ? null : id;
      if (next) {
        // Keep the row you just tapped where you can see it, so the accordion
        // opening below never shoves your place on the page around.
        requestAnimationFrame(() => {
          rows.current[next]?.scrollIntoView({ block: "start", behavior: "smooth" });
        });
      }
      return next;
    });
  }

  return (
    <section className="spread doors" id="doors">
      <div className="wrap">
        <div className="spread-head">
          <span className="spread-no">01 / Start here</span>
          <h2 className="spread-h">Which one are you?</h2>
        </div>
        <div className="doors-body">
          <div className="doors-list">
            {DOORS.map((door) => {
              const isOpen = door.id === openId;
              return (
                <div
                  key={door.id}
                  ref={(el) => {
                    rows.current[door.id] = el;
                  }}
                  className={isOpen ? "door is-open" : "door"}
                >
                  <button
                    type="button"
                    className="door-row"
                    aria-expanded={isOpen}
                    onClick={() => toggle(door.id)}
                  >
                    <DoorMark
                      name={door.mark}
                      variant={isOpen ? -1 : -1}
                      className="door-mark-sm"
                    />
                    <span className="door-no">{door.n}</span>
                    <span className="door-name">{door.name}</span>
                    <span className="door-line">{door.line}</span>
                    <span className="door-go" aria-hidden="true">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                  {/* Small screens: the detail opens in place, under its row. */}
                  {isOpen && (
                    <div className="door-inline">
                      <DoorDetail door={door} variant={variant} onVariant={setVariant} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {/* Desktop: the detail opens in the fixed panel on the right. */}
          <div className="doors-panel" aria-live="polite">
            {open ? (
              <DoorDetail door={open} variant={variant} onVariant={setVariant} />
            ) : (
              <div className="doors-panel-empty">
                <DoorMark name="chase" className="door-mark-lg" />
                <p>
                  Most people who find this page are one of these five.
                  <br />
                  Open the one that sounds like you.
                </p>
              </div>
            )}
          </div>
        </div>
        <p className="doors-note">{DOORS_REASSURANCE}</p>
        <p className="doors-router">
          None of these? That is a normal place to start.{" "}
          <Link to="/start">Say it in your own words</Link>, and we will work out what it is.
        </p>
      </div>
    </section>
  );
}
