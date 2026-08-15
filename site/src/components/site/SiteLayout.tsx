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
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/education", label: "Learn" },
  { to: "/studio", label: "Studio" },
  { to: "/about", label: "About" },
];

const MENU: Array<{ to: string; hash?: string; label: string; n: string }> = [
  { to: "/", label: "Home", n: "01" },
  { to: "/work", label: "Work", n: "02" },
  { to: "/services", label: "Services", n: "03" },
  { to: "/process", label: "Process", n: "04" },
  { to: "/education", label: "Learn", n: "05" },
  { to: "/studio", label: "Studio", n: "06" },
  { to: "/about", label: "About", n: "07" },
  { to: "/contact", label: "Start a project", n: "08" },
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
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {NAV.map((item) => (
              <Link key={item.to + (item.hash ?? "")} to={item.to} hash={item.hash}>
                {item.label}
              </Link>
            ))}
            <Link className="project-link" to="/contact">
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
              <Link to="/contact">Start a project</Link>
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
