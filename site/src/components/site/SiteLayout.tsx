import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { initSiteBehaviors } from "./site-behaviors";
import { renderTokens } from "@/lib/render-tokens";

/**
 * Short, conventional labels. The site is already unusual in what it says;
 * making the navigation unusual too just adds decoding cost.
 * "Hire your audio team" is rendered separately as the highlighted action.
 */
const NAV: Array<{ to: string; hash?: string; label: string }> = [
  { to: "/the-gap", label: "The Gap" },
  { to: "/process", label: "Process" },
  { to: "/services", label: "Services" },
  { to: "/education", label: "Educational services" },
  { to: "/studio", label: "Studio" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
];

/** The logical reading order, used for the "next page" buttons at the foot of each page. */
const ORDER: Array<{ to: string; label: string }> = [
  { to: "/the-gap", label: "The Gap" },
  { to: "/process", label: "Process" },
  { to: "/services", label: "Services" },
  { to: "/education", label: "Educational services" },
  { to: "/studio", label: "Studio" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
];

function PageNext({ pathname }: { pathname: string }) {
  const i = ORDER.findIndex((o) => o.to === pathname);
  if (i < 0) return null;
  const prev = i > 0 ? ORDER[i - 1] : { to: "/", label: "Home" };
  const next =
    i < ORDER.length - 1 ? ORDER[i + 1] : { to: "/contact", label: "Hire your audio team" };
  return (
    <nav className="page-next-nav" aria-label="Next and previous pages">
      <div className="wrap">
        <p className="pn-label">Keep exploring</p>
        <div className="pn-row">
          <Link className="btn back" to={prev.to}>
            {prev.label}
          </Link>
          <Link className="btn primary" to={next.to}>
            {next.label}
          </Link>
        </div>
      </div>
    </nav>
  );
}

const MENU: Array<{ to: string; hash?: string; label: string; n: string }> = [
  { to: "/", label: "Home", n: "01" },
  { to: "/the-gap", label: "The Gap", n: "02" },
  { to: "/process", label: "Process", n: "03" },
  { to: "/services", label: "Services", n: "04" },
  { to: "/education", label: "Educational services", n: "05" },
  { to: "/studio", label: "Studio", n: "06" },
  { to: "/work", label: "Work", n: "07" },
  { to: "/about", label: "About", n: "08" },
  { to: "/contact", label: "Hire your audio team", n: "09" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const cleanup = initSiteBehaviors();
    return cleanup;
  }, [pathname]);

  return (
    <>
      {/* Roughens the booth sketches so they read as pen drawings. */}
      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
        aria-hidden="true"
        focusable="false"
      >
        <filter id="sk-wobble" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.035"
            numOctaves="2"
            seed="4"
            result="n"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale="2.6"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link to="/" className="brand" aria-label="Upper Level Music home">
            <strong>
              <span className="ulm">Upper Level Music</span>
            </strong>
            <span>Columbia, South Carolina</span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {NAV.map((item) => (
              <Link key={item.to + (item.hash ?? "")} to={item.to} hash={item.hash}>
                {item.label}
              </Link>
            ))}
            <Link className="project-link" to="/contact">
              Hire your audio team
            </Link>
          </nav>
          <button
            className="menu-button"
            type="button"
            data-open-menu
            aria-label="Open site menu"
            aria-expanded="false"
          >
            <span className="hamburger" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>Menu</span>
          </button>
        </div>
      </header>

      <dialog className="menu-dialog" data-menu-dialog aria-label="Site menu">
        <div className="menu-shell">
          <div className="menu-top">
            <Link to="/" className="brand" data-close-menu>
              <strong>
                <span className="ulm">Upper Level Music</span>
              </strong>
              <span>Columbia, South Carolina</span>
            </Link>
            <button className="menu-close" type="button" data-close-menu>
              Close
            </button>
          </div>
          <nav className="menu-links" aria-label="Menu navigation">
            {MENU.map((item) => (
              <Link key={item.to + (item.hash ?? "")} to={item.to} hash={item.hash} data-close-menu>
                <span>{item.n}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="menu-bottom">
            <span>Columbia, South Carolina · Remote work available</span>
            <a href="mailto:edwardlidow@upperlevelmusic.com">edwardlidow@upperlevelmusic.com</a>
          </div>
        </div>
      </dialog>

      <main id="main">{children}</main>

      <PageNext pathname={pathname} />

      <section className="newsletter" id="newsletter" aria-labelledby="newsletter-h">
        <div className="wrap newsletter-inner">
          <div>
            <h2 id="newsletter-h">Subscribe to our newsletter.</h2>
            <p>
              News and notes from <span className="ulm">Upper Level Music</span>, straight to your
              inbox.
            </p>
          </div>
          <form className="newsletter-form" data-newsletter-form noValidate>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
            <div className="field-trap" aria-hidden="true">
              <input name="company" tabIndex={-1} autoComplete="off" />
            </div>
            <button className="btn primary" type="submit">
              Subscribe
            </button>
            <p
              className="newsletter-status"
              data-newsletter-status
              role="status"
              aria-live="polite"
            />
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <div className="footer-brand">
              <span className="ulm">Upper Level Music</span> <span>·</span> Edward Lidow
            </div>
            <div className="footer-links">
              {NAV.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
              <Link to="/contact">Hire your audio team</Link>
              <a href="#newsletter">Newsletter</a>
            </div>
          </div>
          <div className="footer-meta">
            Columbia, South Carolina · Remote work available
            <br />
            <a href="mailto:edwardlidow@upperlevelmusic.com">edwardlidow@upperlevelmusic.com</a>
            <br />© 2026 <span className="ulm">Upper Level Music</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export function PageBody({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: renderTokens(html) }} />;
}
