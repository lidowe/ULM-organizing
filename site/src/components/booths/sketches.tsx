// The booth sketches: one pen drawing per booth, drawn in currentColor and
// roughened by the #sk-wobble filter defined once in the site chrome.
import type { ReactNode } from "react";
import type { BoothId } from "./booths";

const SKETCHES: Record<BoothId, ReactNode> = {
  finish: (
    <>
      <circle cx="68" cy="64" r="42" />
      <circle cx="68" cy="64" r="33" opacity=".45" />
      <circle cx="68" cy="64" r="24" opacity=".45" />
      <circle cx="68" cy="64" r="12" />
      <circle cx="68" cy="64" r="2.4" fill="currentColor" />
      <path d="M40 38 A32 32 0 0 1 60 29" opacity=".7" />
      <circle cx="128" cy="20" r="6" />
      <path d="M128 26 L128 66 Q128 74 120 78" />
      <path d="M112 78 l9 -5 l5 9 l-9 5z" className="acc" />
    </>
  ),
  part: (
    <>
      <rect x="58" y="12" width="44" height="60" rx="22" />
      <path d="M62 30 H98 M60 42 H100 M60 54 H100" opacity=".55" />
      <path d="M46 46 Q46 90 80 90 Q114 90 114 46" />
      <path d="M80 90 V108 M62 108 H98" />
      <path d="M30 40 q-6 11 0 22 M20 32 q-11 19 0 38" className="acc" />
      <path d="M130 40 q6 11 0 22 M140 32 q11 19 0 38" opacity=".5" />
    </>
  ),
  technical: (
    <>
      <rect x="12" y="14" width="136" height="36" rx="3" />
      <circle cx="34" cy="32" r="8" />
      <path d="M34 32 l4 -5" />
      <circle cx="60" cy="32" r="8" />
      <path d="M60 32 l-3 -6" />
      <circle cx="86" cy="32" r="8" />
      <path d="M86 32 l5 2" className="acc" />
      <rect x="106" y="23" width="32" height="18" rx="2" />
      <path d="M110 37 Q122 25 134 37" opacity=".7" />
      <rect x="12" y="58" width="136" height="36" rx="3" />
      <path d="M30 66 V86 M54 66 V86 M78 66 V86 M102 66 V86 M126 66 V86" opacity=".45" />
      <rect x="25" y="72" width="10" height="6" rx="1" />
      <rect x="49" y="78" width="10" height="6" rx="1" />
      <rect x="73" y="70" width="10" height="6" rx="1" />
      <rect x="97" y="76" width="10" height="6" rx="1" />
      <rect x="121" y="74" width="10" height="6" rx="1" />
      <path d="M22 94 C22 112 52 114 60 104 S96 112 104 100 S128 108 134 94" />
    </>
  ),
  chase: (
    <>
      <path d="M6 68 Q16 48 26 68 T46 68 T66 68" />
      <path d="M66 68 L72 68 L78 34 L86 100 L92 68 L100 68" className="acc" />
      <path d="M100 68 Q110 48 120 68 T140 68 T156 68" />
      <circle cx="84" cy="66" r="26" />
      <path d="M103 86 L132 112" strokeWidth="4" />
    </>
  ),
  room: (
    <>
      <path d="M80 24 V98 M80 24 L14 8 M80 24 L146 8 M80 98 L14 76 M80 98 L146 76 M14 8 V76 M146 8 V76" />
      <path d="M24 22 L46 28 L46 70 L24 64 Z" opacity=".7" />
      <path d="M52 30 L70 35 L70 76 L52 71 Z" opacity=".7" />
      <rect x="104" y="54" width="24" height="34" rx="2" />
      <circle cx="116" cy="64" r="5" />
      <circle cx="116" cy="77" r="8" />
      <path d="M96 62 q-7 9 0 18 M88 55 q-13 16 0 32" className="acc" />
    </>
  ),
  listening: (
    <>
      <rect x="8" y="22" width="24" height="46" rx="2" />
      <circle cx="20" cy="34" r="4" />
      <circle cx="20" cy="54" r="9" />
      <rect x="128" y="22" width="24" height="46" rx="2" />
      <circle cx="140" cy="34" r="4" />
      <circle cx="140" cy="54" r="9" />
      <path d="M62 78 Q62 60 80 60 Q98 60 98 78" />
      <path d="M56 80 H104 V102 H56 Z" />
      <path d="M56 84 Q50 84 50 92 Q50 100 56 100 M104 84 Q110 84 110 92 Q110 100 104 100" />
      <path d="M20 68 L80 58 L140 68" strokeDasharray="3 6" className="acc" />
      <path d="M20 68 L80 98 L140 68" strokeDasharray="3 6" opacity=".6" />
    </>
  ),
  worship: (
    <>
      <path d="M48 104 V52 Q48 26 80 8 Q112 26 112 52 V104" />
      <path d="M60 104 V56 Q60 36 80 24 Q100 36 100 56 V104" opacity=".6" />
      <path d="M80 40 C72 54 68 62 80 76 C92 62 88 54 80 40 Z" className="acc" />
      <path d="M80 58 C76 64 77 69 80 71 C83 69 84 64 80 58" className="acc" />
      <path d="M24 14 V38 M14 24 H34" />
      <path d="M24 54 L33.5 70.5 H14.5 Z M24 76 L14.5 59.5 H33.5 Z" />
      <path d="M138 14 A12 12 0 1 0 138 38 A9.5 9.5 0 1 1 138 14 Z" />
      <path d="M144.0 21.8 L145.0 24.6 L148.0 24.7 L145.6 26.5 L146.5 29.4 L144.0 27.7 L141.5 29.4 L142.4 26.5 L140.0 24.7 L143.0 24.6 Z" />
      <circle cx="136" cy="66" r="11" />
      <circle cx="136" cy="66" r="3" />
      <path d="M139.0 66.0 L147.0 66.0 M138.1 68.1 L143.8 73.8 M136.0 69.0 L136.0 77.0 M133.9 68.1 L128.2 73.8 M133.0 66.0 L125.0 66.0 M133.9 63.9 L128.2 58.2 M136.0 63.0 L136.0 55.0 M138.1 63.9 L143.8 58.2" />
      <path d="M8 106 H152 M18 96 H40 M120 96 H142 M12 101 H44 M116 101 H148" opacity=".6" />
    </>
  ),
  business: (
    <>
      <rect x="40" y="12" width="84" height="46" rx="2" />
      <path d="M52 26 H112 M52 36 H98 M52 46 H84" opacity=".55" />
      <circle cx="20" cy="14" r="8" />
      <circle cx="20" cy="14" r="3" />
      <path d="M12 26 q8 8 16 0 M7 33 q13 12 26 0" className="acc" />
      <path d="M18 88 H142 L132 100 H28 Z" />
      <circle cx="54" cy="68" r="6" />
      <circle cx="80" cy="66" r="6" />
      <circle cx="106" cy="68" r="6" />
      <path d="M46 88 q8 -12 16 0 M72 88 q8 -12 16 0 M98 88 q8 -12 16 0" />
      <path d="M44 100 V110 M116 100 V110" />
    </>
  ),
  podcast: (
    <>
      <rect x="14" y="8" width="16" height="10" rx="2" />
      <path d="M22 18 L74 28 L102 48" />
      <rect x="98" y="32" width="28" height="48" rx="14" />
      <path d="M102 46 H122 M102 56 H122 M102 66 H122" opacity=".5" />
      <path d="M92 38 q-12 20 0 42" opacity=".6" />
      <path d="M112 80 V108 M98 108 H126" />
      <path d="M22 108 V96 Q22 74 54 74 Q86 74 86 96 V108" className="acc" />
      <rect x="14" y="94" width="14" height="20" rx="6" />
      <rect x="80" y="94" width="14" height="20" rx="6" />
    </>
  ),
  learn: (
    <>
      <path d="M80 30 Q54 16 16 22 V94 Q54 88 80 100 Q106 88 144 94 V22 Q106 16 80 30 Z" />
      <path d="M80 30 V100" />
      <path
        d="M26 38 Q48 34 70 40 M26 50 Q48 46 70 52 M26 62 Q48 58 70 64 M26 74 Q48 70 70 76"
        opacity=".5"
      />
      <path d="M92 64 Q100 44 108 64 T124 64 T138 64" className="acc" />
    </>
  ),
};

export function Sketch({ id, className }: { id: BoothId; className?: string }) {
  return (
    <span className={className ? `sk-wrap ${className}` : "sk-wrap"}>
      <SketchSvg id={id} />
    </span>
  );
}

export function SketchSvg({ id }: { id: BoothId }) {
  return (
    <svg className="sk" viewBox="0 0 160 120" aria-hidden="true" focusable="false">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#sk-wobble)"
      >
        {SKETCHES[id]}
      </g>
    </svg>
  );
}
