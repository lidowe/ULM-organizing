import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { initSiteBehaviors } from "./site-behaviors";
import { renderTokens } from "@/lib/render-tokens";

/**
 * THE REBUILD (2026-08-21): the doors are the primary navigation and live on
 * Home, so the bar stays at three items plus the brand — the doors are not
 * duplicated up here. "Start" is the bar's only hot item. The menu carries
 * everything, doors included, for anyone who arrives mid-site.
 */
const NAV: Array<{ to: string; hash?: string; label: string }> = [
  { to: "/proof", label: "Proof" },
  { to: "/story", label: "Story" },
];

const MENU: Array<{ to: string; hash?: string; label: string; n: string }> = [
  { to: "/", label: "Home · The Doors", n: "01" },
  { to: "/complete", label: "Complete The Project", n: "02" },
  { to: "/fix", label: "Fix An Issue", n: "03" },
  { to: "/learn", label: "Learn The Craft", n: "04" },
  { to: "/evaluate", label: "Playback, Evaluate, Improve", n: "05" },
  { to: "/purple", label: "Make It More Purple", n: "06" },
  { to: "/proof", label: "Proof", n: "07" },
  { to: "/story", label: "Story", n: "08" },
  { to: "/the-gap", label: "The Gap", n: "09" },
  { to: "/start", label: "Start", n: "10" },
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
            <Link className="project-link" to="/start">
              Start
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
              {MENU.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
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
