import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { initSiteBehaviors } from "./site-behaviors";
import { renderTokens } from "@/lib/render-tokens";

/**
 * Short, conventional labels. The site is already unusual in what it says;
 * making the navigation unusual too just adds decoding cost.
 * "Start a project" is rendered separately as the highlighted action.
 */
const NAV: Array<{ to: string; hash?: string; label: string }> = [
  { to: "/services", label: "Services" },
  { to: "/learn", label: "Learn" },
  { to: "/proof", label: "On Record" },
  { to: "/why", label: "Why ULM" },
];

const MENU: Array<{ to: string; hash?: string; label: string; n: string }> = [
  { to: "/", label: "Home", n: "01" },
  { to: "/services", label: "Services", n: "02" },
  { to: "/learn", label: "Learn", n: "03" },
  { to: "/proof", label: "On Record", n: "04" },
  { to: "/why", label: "Why ULM", n: "05" },
  { to: "/start", label: "Start a project", n: "06" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const cleanup = initSiteBehaviors();
    return cleanup;
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link to="/" className="brand" aria-label="Upper Level Music home">
            <strong>Upper Level Music</strong>
            <span>Columbia, South Carolina</span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {NAV.map((item) => (
              <Link key={item.to + (item.hash ?? "")} to={item.to} hash={item.hash}>
                {item.label}
              </Link>
            ))}
            <Link className="project-link" to="/start">
              Start a project
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
              <strong>Upper Level Music</strong>
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
            <a href="mailto:edwardlidow@upperlevelmusic.com">
              edwardlidow@upperlevelmusic.com
            </a>
          </div>
        </div>
      </dialog>

      <main id="main">{children}</main>

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <div className="footer-brand">
              Upper Level Music <span>·</span> Edward Lidow
            </div>
            <div className="footer-links">
              {NAV.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
              <Link to="/start">Start a project</Link>
            </div>
          </div>
          <div className="footer-meta">
            Columbia, South Carolina · Remote work available
            <br />
            <a href="mailto:edwardlidow@upperlevelmusic.com">
              edwardlidow@upperlevelmusic.com
            </a>
            <br />
            © 2026 Upper Level Music
          </div>
        </div>
      </footer>
    </>
  );
}

export function PageBody({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: renderTokens(html) }} />;
}
