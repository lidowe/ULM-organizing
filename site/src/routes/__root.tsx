import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import resetCss from "../styles/reset.css?url";
import siteCss from "../styles/site.css?url";
import conceptCss from "../styles/concept.css?url";
import systemCss from "../styles/system.css?url";

function NotFoundComponent() {
  return (
    <main className="fallback-page">
      <p className="fallback-code">404</p>
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="btn primary">
        Go home
      </Link>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <main className="fallback-page">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try again or head back home.</p>
      <div className="fallback-actions">
        <button
          type="button"
          className="btn primary"
          onClick={() => {
            router.invalidate();
            reset();
          }}
        >
          Try again
        </button>
        <a href="/" className="btn">
          Go home
        </a>
      </div>
    </main>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#0a0a0a" },
      { title: "Upper Level Music · Recording, Mixing and Production" },
      {
        name: "description",
        content:
          "Major-label studio veterans offering recording, production, vocal production, mixing and mastering, remote or in person.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Upper Level Music" },
      { property: "og:title", content: "Upper Level Music" },
      {
        property: "og:description",
        content:
          "Major-label studio veterans offering recording, production, vocal production, mixing and mastering.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Pixelify+Sans:wght@400;500&display=swap",
      },

      { rel: "stylesheet", href: resetCss },
      { rel: "stylesheet", href: siteCss },
      { rel: "stylesheet", href: conceptCss },
      { rel: "stylesheet", href: systemCss },

      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          // Not MusicGroup: that declares a band, which sends search engines
          // looking for releases by "Upper Level Music" instead of a practice
          // that sells audio services.
          "@type": "ProfessionalService",
          name: "Upper Level Music",
          alternateName: "Upper Level Music Creative",
          url: "https://upperlevelmusic.com",
          email: "edwardlidow@upperlevelmusic.com",
          image: "https://upperlevelmusic.com/session-bw.jpg",
          foundingDate: "2014",
          founder: { "@type": "Person", name: "Edward Lidow" },
          areaServed: "Worldwide",
          serviceType: [
            "Audio mixing",
            "Audio mastering",
            "Audio editing and vocal tuning",
            "Recording and tracking",
            "Music production",
            "Audio consulting and troubleshooting",
            "Acoustic treatment planning",
            "Studio systems and signal flow",
            "Audio engineering instruction",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Columbia",
            addressRegion: "SC",
            addressCountry: "US",
          },
          knowsAbout: [
            "Recording",
            "Production",
            "Vocal production",
            "Mixing",
            "Mastering",
            "Audio engineering education",
          ],
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
