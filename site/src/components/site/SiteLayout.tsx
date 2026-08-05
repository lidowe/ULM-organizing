import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { initSiteBehaviors } from "./site-behaviors";

const NAV = [
  { to: "/work", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/studio", label: "Studio" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Edward" },
] as const;

const MENU = [
  { to: "/", label: "Home", n: "01" },
  { to: "/work", label: "Work", n: "02" },
  { to: "/process", label: "Process", n: "03" },
  { to: "/studio", label: "Studio", n: "04" },
  { to: "/services", label: "Services", n: "05" },
  { to: "/about", label: "Edward", n: "06" },
  { to: "/contact", label: "Start a project", n: "07" },
] as const;

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
            <span>Edward Lidow · Columbia, SC</span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {NAV.map((item) => (
              <Link key={item.to} to={item.to}>
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
          >
            Menu
          </button>
        </div>
      </header>

      <dialog className="menu-dialog" data-menu-dialog aria-label="Site menu">
        <div className="menu-shell">
          <div className="menu-top">
            <Link to="/" className="brand" data-close-menu>
              <strong>Upper Level Music</strong>
              <span>Edward Lidow</span>
            </Link>
            <button className="menu-close" type="button" data-close-menu>
              Close
            </button>
          </div>
          <nav className="menu-links" aria-label="Menu navigation">
            {MENU.map((item) => (
              <Link key={item.to} to={item.to} data-close-menu>
                <span>{item.n}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="menu-bottom">
            <span>Private studio · Columbia, South Carolina</span>
            <a href="mailto:edwardlidow@upperlevelmusic.com">
              edwardlidow@upperlevelmusic.com
            </a>
          </div>
        </div>
      </dialog>

      <div className="tape-deck" data-tape-deck aria-hidden="true">
        <span className="reel" />
        <span className="tape-span" />
        <span className="reel" />
        <span className="tape-readout">
          Reel
          <b data-tape-count>00:00</b>
        </span>
      </div>

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
            Columbia, South Carolina · By appointment
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
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
