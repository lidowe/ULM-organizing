import type { ReactElement } from "react";

/**
 * Line marks for the door board.
 *
 * Each mark is a small, palette-agnostic SVG stroked with `currentColor`, so it
 * inherits the paper-edition ink and picks up brass/oxblood from CSS. Motion is
 * CSS keyframes in concept.css, selected by `data-mark` (which door) and
 * `data-variant` (which symptom is under the cursor; -1 = idle loop).
 */

export type MarkName = "finish" | "part" | "technical" | "chase" | "learn";

type Props = {
  name: MarkName;
  /** -1 when no symptom is focused: the mark runs its idle loop. */
  variant?: number;
  className?: string;
};

function Finish() {
  // A take sheet with passes stacking up, one still being decided.
  return (
    <>
      <rect className="mk-frame" x="6" y="6" width="52" height="52" />
      <g className="mk-takes">
        <line x1="14" y1="20" x2="50" y2="20" />
        <line x1="14" y1="28" x2="44" y2="28" />
        <line x1="14" y1="36" x2="48" y2="36" />
        <line x1="14" y1="44" x2="36" y2="44" />
      </g>
      <circle className="mk-dot" cx="50" cy="44" r="3" />
    </>
  );
}

function Part() {
  // A breathing waveform: accurate, but does it move anybody?
  return (
    <>
      <line className="mk-axis" x1="4" y1="32" x2="60" y2="32" />
      <path
        className="mk-wave"
        d="M4 32 Q12 12 20 32 T36 32 T52 32 T60 32"
        fill="none"
      />
      <circle className="mk-dot" cx="20" cy="32" r="2.5" />
    </>
  );
}

function Technical() {
  // Stacked processing bands drifting, then locking into alignment.
  return (
    <>
      <rect className="mk-frame" x="6" y="10" width="52" height="44" />
      <g className="mk-bands">
        <line className="mk-band-1" x1="12" y1="22" x2="52" y2="22" />
        <line className="mk-band-2" x1="12" y1="32" x2="52" y2="32" />
        <line className="mk-band-3" x1="12" y1="42" x2="52" y2="42" />
      </g>
      <circle className="mk-dot" cx="32" cy="32" r="2.6" />
    </>
  );
}

function Chase() {
  // A signal dot travelling a chain of stages, stuttering at the fault.
  return (
    <>
      <path className="mk-path" d="M4 44 H18 V20 H32 V44 H46 V24 H60" fill="none" />
      <g className="mk-nodes">
        <circle cx="18" cy="20" r="2" />
        <circle cx="32" cy="44" r="2" />
        <circle cx="46" cy="24" r="2" />
      </g>
      <circle className="mk-runner" cx="4" cy="44" r="3.2" />
    </>
  );
}

function Learn() {
  // A turning page over a fixed rule: theory under the surface.
  return (
    <>
      <line className="mk-axis" x1="6" y1="54" x2="58" y2="54" />
      <rect className="mk-frame" x="10" y="8" width="44" height="42" />
      <path className="mk-page" d="M32 8 V50" fill="none" />
      <g className="mk-lines">
        <line x1="15" y1="20" x2="27" y2="20" />
        <line x1="15" y1="28" x2="27" y2="28" />
        <line x1="37" y1="20" x2="49" y2="20" />
        <line x1="37" y1="28" x2="49" y2="28" />
        <line x1="37" y1="36" x2="46" y2="36" />
      </g>
    </>
  );
}

const SHAPES: Record<MarkName, () => ReactElement> = {
  finish: Finish,
  part: Part,
  technical: Technical,
  chase: Chase,
  learn: Learn,
};

export function DoorMark({ name, variant = -1, className }: Props) {
  const Shape = SHAPES[name];
  return (
    <svg
      className={["door-mark", className].filter(Boolean).join(" ")}
      viewBox="0 0 64 64"
      role="presentation"
      aria-hidden="true"
      data-mark={name}
      data-variant={variant}
    >
      <Shape />
    </svg>
  );
}
