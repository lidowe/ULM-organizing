import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Brand } from "@/components/text/Brand";
import { useSiteBehaviour } from "@/components/behaviour/useSiteBehaviour";
import { NAV, MENU, SITE } from "@/site/site";
import { NewsletterBand } from "./NewsletterForm";

/** "Keep exploring": back and next buttons in the logical reading order. */
function PageNext({ pathname }: { pathname: string }) {
  const i = NAV.findIndex((p) => p.path === pathname);
  if (i < 0) return null;
  const prev =
    i > 0 ? { to: NAV[i - 1]!.path, label: NAV[i - 1]!.nav! } : { to: "/", label: "Home" };
  const next =
    i < NAV.length - 1
      ? { to: NAV[i + 1]!.path, label: NAV[i + 1]!.nav! }
      : { to: "/contact", label: "Contact" };
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

/** The site chrome around every page: header, menu, newsletter band and footer. */
export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });
  const dialog = useRef<HTMLDialogElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useSiteBehaviour(pathname, hash);

  const openMenu = () => {
    dialog.current?.showModal();
    setMenuOpen(true);
  };
  const closeMenu = () => dialog.current?.close();

  // Close the menu on navigation; keep aria-expanded true to the dialog's state (Esc included).
  useEffect(() => closeMenu(), [pathname]);

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
              <Brand />
            </strong>
            <span>{SITE.location}</span>
          </Link>
          <div className="rail-actions">
            <Link className="rail-btn rail-btn-primary" to="/contact">
              Talk to the team
            </Link>
            <Link className="rail-btn" to="/" hash="booths">
              Choose your service
            </Link>
          </div>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link to="/" activeOptions={{ exact: true }}>
              Home
            </Link>
            {NAV.map((p) => (
              <Link key={p.path} to={p.path}>
                {p.nav}
              </Link>
            ))}
            <Link className="project-link" to="/contact">
              Talk to the team
            </Link>
          </nav>
          <button
            className="menu-button"
            type="button"
            data-open-menu
            aria-label="Open site menu"
            aria-expanded={menuOpen ? "true" : "false"}
            onClick={openMenu}
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

      <dialog
        ref={dialog}
        className="menu-dialog"
        data-menu-dialog
        aria-label="Site menu"
        onClose={() => setMenuOpen(false)}
        onClick={(e) => e.target === dialog.current && closeMenu()}
      >
        <div className="menu-shell">
          <div className="menu-top">
            <Link to="/" className="brand" data-close-menu onClick={closeMenu}>
              <strong>
                <Brand />
              </strong>
              <span>{SITE.location}</span>
            </Link>
            <button className="menu-close" type="button" data-close-menu onClick={closeMenu}>
              Close
            </button>
          </div>
          <nav className="menu-links" aria-label="Menu navigation">
            {MENU.map((item) => (
              <Link key={item.path} to={item.path} data-close-menu onClick={closeMenu}>
                <span>{item.n}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="menu-bottom">
            <span>{SITE.location} · Remote work available</span>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
        </div>
      </dialog>

      <main id="main">{children}</main>

      <PageNext pathname={pathname} />

      <NewsletterBand />

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <div className="footer-brand">
              <Brand /> <span>·</span> {SITE.owner}
            </div>
            <div className="footer-links">
              {NAV.map((p) => (
                <Link key={p.path} to={p.path}>
                  {p.nav}
                </Link>
              ))}
              <Link to="/contact">Contact</Link>
              <a href="#newsletter">Newsletter</a>
            </div>
          </div>
          <div className="footer-meta">
            {SITE.location} · Remote work available
            <br />
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <br />© 2026 <Brand />
          </div>
        </div>
      </footer>
    </>
  );
}
