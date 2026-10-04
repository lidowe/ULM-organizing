import type { ImgHTMLAttributes } from "react";
import { photos } from "@/lib/photos";
import type { PhotoName } from "@/lib/photo-names.gen";

/**
 * One `sizes` hint: photos render full-bleed or inside the 1200px column, so
 * a single hint covers the layout. A browser over-fetches by at most one
 * variant step in narrower sub-columns.
 */
const SIZES = "(max-width: 700px) 100vw, (max-width: 1200px) 90vw, 1200px";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> & {
  name: PhotoName;
  alt: string;
};

/**
 * A photograph from the registry (src/lib/photos.ts): the bundled URL, the
 * generated srcset and the photo's focal point, under a name TypeScript checks.
 */
export function Photo({ name, alt, style, ...rest }: Props) {
  const entry = photos[name];
  return (
    <img
      data-photo={name}
      decoding="async"
      srcSet={entry?.srcset}
      sizes={entry?.srcset ? SIZES : undefined}
      style={entry?.focal && !style ? { objectPosition: entry.focal } : style}
      src={entry?.url}
      alt={alt}
      {...rest}
    />
  );
}
