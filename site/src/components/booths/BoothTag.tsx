import { BOOTHS, type BoothId } from "./booths";
import { SketchSvg } from "./sketches";

/** The small linked sketch used inside page copy to point at a booth on Home. */
export function BoothTag({ id }: { id: BoothId }) {
  const b = BOOTHS.find((x) => x.id === id)!;
  return (
    <a className="booth-tag" href={`/#booth-${b.id}`} title={b.name}>
      <span className="booth-tag-mark">
        <SketchSvg id={b.id} />
      </span>
      <span className="booth-tag-label">{b.short}</span>
    </a>
  );
}
