// ULM app service worker — scope /app only (registered from the /app route
// with {scope:"/app"}), so the rest of the site stays a plain website.
// Strategy: network-first for the /app document (fresh when online, cached
// shell offline); cache-first for same-origin static assets the app page
// pulls (build chunks, fonts, manifest icons).
const CACHE = "ulm-app-v1";

self.addEventListener("install", (e) => {
  // Precache the shell at install, so the very first visit already leaves
  // an offline-capable copy (later online navigations refresh it).
  e.waitUntil(
    caches
      .open(CACHE)
      .then((c) => c.addAll(["/app", "/app.webmanifest", "/app-icon-192.png", "/app-icon-512.png"]))
      .catch(() => {}),
  );
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin || e.request.method !== "GET") return;

  if (e.request.mode === "navigate") {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
          return res;
        })
        .catch(() => caches.match(e.request)),
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(
      (hit) =>
        hit ||
        fetch(e.request).then((res) => {
          if (
            res.ok &&
            (url.pathname.startsWith("/_build/") ||
              url.pathname.startsWith("/fonts/") ||
              url.pathname.startsWith("/assets/") ||
              url.pathname.startsWith("/app-icon") ||
              url.pathname === "/app.webmanifest")
          ) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copy));
          }
          return res;
        }),
    ),
  );
});
