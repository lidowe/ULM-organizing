import { Photo } from "@/components/media/Photo";
import { releaseCredits } from "@/lib/credits";

/** The Work page's release cards. `filter` hides cards whose tags don't match. */
export function CreditCards({ filter = "all" }: { filter?: string }) {
  return (
    <>
      {releaseCredits().map((c) => (
        <article
          key={`${c.artist}-${c.title}`}
          className={c.art ? "work-card has-art" : "work-card"}
          data-year={c.year ?? ""}
          data-work-role={c.tags.join(" ")}
          hidden={filter !== "all" && !c.tags.includes(filter)}
        >
          {c.art && (
            <Photo
              name={c.art}
              className="work-art"
              alt={`${c.artist} — ${c.title ?? ""}`}
              loading="lazy"
            />
          )}
          <div>
            <div className="artist">
              {c.artist}
              {c.year ? ` · ${c.year}` : ""}
            </div>
            <h3>{c.title}</h3>
            <div className="role">{c.role}</div>
          </div>
          {c.plaques?.length ? (
            <div className="work-plaques">
              {c.plaques.map((p) => (
                <Photo
                  key={p.img}
                  name={p.img}
                  className="work-plaque"
                  alt={p.alt}
                  loading="lazy"
                />
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </>
  );
}
