import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Photo } from "@/components/media/Photo";
import { CreditCards } from "@/components/credits/CreditCards";
import { ArtistIndex } from "@/components/credits/ArtistIndex";
import { MediaIndex } from "@/components/credits/MediaIndex";

const FILTERS = [
  ["all", "All"],
  ["recording", "Recording"],
  ["mix", "Mix"],
  ["engineering", "Engineering"],
  ["assistant", "Assistant"],
] as const;

export function WorkPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number][0]>("all");
  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Selected work</div>
          <h1 className="page-title">On record.</h1>
          <p className="page-deck">
            Major-label sessions and independent records, across genres. Precise roles where
            publicly credited.
          </p>
          <figure className="work-lead-photo">
            <Photo
              name="session-redlit-2"
              alt="Two people seated at a large-format console during a working session under red light"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>
      <section className="section">
        <div className="wrap section-header reveal">
          <div className="kicker">Selected discography</div>
          <div>
            <h2 className="section-title">Real records. Real roles.</h2>
            <div className="section-copy">
              <p>Role language follows the public credits, kept legible instead of exhaustive.</p>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="filter-bar reveal" aria-label="Filter selected work">
            {FILTERS.map(([value, label]) => (
              <button
                key={value}
                className={filter === value ? "active" : undefined}
                type="button"
                data-filter={value}
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="work-grid reveal">
            <CreditCards filter={filter} />
          </div>
          <figure className="credit-photo credit-photo-right reveal">
            <Photo
              name="credits-wayne"
              alt="Edward Lidow with Lil Wayne in the control room"
              loading="lazy"
            />
          </figure>
          <p className="credit-note reveal">
            Additional catalog includes <em>Rebirth</em>, <em>No Ceilings</em>,{" "}
            <em>I Am Not a Human Being</em>, <em>Rise of an Empire</em>, <em>Pricele$$</em>,{" "}
            <em>The Elephant in the Room</em>, and other releases. Public credits also appear under
            Edward “Jewfro” Lidow, Edward Lidow, Ed Lidow, and Edward Lido.
          </p>
          <div className="credit-links reveal">
            <a
              className="btn"
              href="https://www.allmusic.com/artist/edward-jewfro-lidow-mn0002394304"
              target="_blank"
              rel="noreferrer"
            >
              AllMusic credits
            </a>
            <a
              className="btn"
              href="https://www.discogs.com/artist/1268296-Edward-Lidow"
              target="_blank"
              rel="noreferrer"
            >
              Discogs profile
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap section-header reveal">
          <div className="kicker">Selected artists & clients</div>
          <div>
            <h2 className="section-title">Range is part of the work.</h2>
            <div className="section-copy">
              <p>A partial list. Roles vary by artist and session.</p>
            </div>
          </div>
        </div>
        <div className="wrap" />
        <div className="wrap artist-index reveal">
          <ArtistIndex />
        </div>
        <div className="wrap section-header reveal" style={{ marginTop: "3rem" }}>
          <div className="kicker">Media & brands</div>
        </div>
        <div className="wrap artist-index reveal">
          <MediaIndex />
        </div>
      </section>
      <section className="section">
        <div className="wrap section-header reveal">
          <div className="kicker">Studios & institutions</div>
          <div>
            <h2 className="section-title">Built in real studios.</h2>
            <div className="section-copy">
              <p>Rooms worked in, taught in, and in one case built from scratch.</p>
            </div>
          </div>
        </div>
        <div className="wrap artist-index reveal">
          <span>Hit Factory / Criteria Miami</span>
          <span>Bay 8 Miami · original room, built and sold</span>
          <span>Record Plant Los Angeles</span>
          <span>Chicago Recording Company</span>
          <span>Dream Asylum</span>
          <span>Studio 8 Miami</span>
          <span>The Jam Room · Columbia</span>
          <span>Midlands Audio Institute</span>
          <span>Midlands Technical College</span>
          <span>Miami Historical Museum</span>
          <span>WoG Ministries</span>
        </div>
      </section>
      <section className="cta-section">
        <div className="wrap cta-inner">
          <div className="reveal">
            <h2>The training behind these roles is gone as a career path.</h2>
            <p>This is where it gets handed over instead.</p>
          </div>
          <Link to="/education" className="btn primary reveal">
            How teaching works
          </Link>
        </div>
      </section>
    </div>
  );
}
