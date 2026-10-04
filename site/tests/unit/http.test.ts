import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { env } from "cloudflare:workers";
import { canonicalRedirect, withSecurityHeaders } from "../../src/lib/http/security";
import { guardFormRequest } from "../../src/lib/http/guard";
import { cleanSubject, deliver } from "../../src/lib/http/deliver";

const bindings = env as Record<string, unknown>;

afterEach(() => {
  for (const key of Object.keys(bindings)) delete bindings[key];
  vi.unstubAllGlobals();
});

describe("canonicalRedirect", () => {
  const cases: Array<[string, string | null]> = [
    ["http://upperlevelmusic.com/about", "https://upperlevelmusic.com/about"],
    ["http://www.upperlevelmusic.com/work?x=1", "https://upperlevelmusic.com/work?x=1"],
    ["https://www.upperlevelmusic.com/", "https://upperlevelmusic.com/"],
    ["https://upperlevelmusic.com/", null],
    ["http://localhost:5173/", null],
    ["http://127.0.0.1:8787/", null],
    ["https://claude-v4-ulm-organizing.example.workers.dev/", null],
  ];
  for (const [from, to] of cases) {
    it(`${from} → ${to ?? "no redirect"}`, () => {
      const res = canonicalRedirect(new Request(from));
      if (to === null) expect(res).toBeNull();
      else {
        expect(res?.status).toBe(301);
        expect(res?.headers.get("location")).toBe(to);
      }
    });
  }
});

describe("withSecurityHeaders", () => {
  it("adds headers and HSTS on production", () => {
    const res = withSecurityHeaders(new Response("x"), new Request("https://upperlevelmusic.com/"));
    expect(res.headers.get("x-content-type-options")).toBe("nosniff");
    expect(res.headers.get("x-frame-options")).toBe("SAMEORIGIN");
    expect(res.headers.get("strict-transport-security")).toContain("max-age=31536000");
    expect(res.headers.get("x-robots-tag")).toBeNull();
  });
  it("marks previews noindex and skips HSTS", () => {
    const res = withSecurityHeaders(new Response("x"), new Request("https://x.workers.dev/"));
    expect(res.headers.get("x-robots-tag")).toContain("noindex");
    expect(res.headers.get("strict-transport-security")).toBeNull();
  });
  it("works on responses with immutable headers", () => {
    const redirect = Response.redirect("https://upperlevelmusic.com/", 301);
    const res = withSecurityHeaders(redirect, new Request("https://upperlevelmusic.com/a"));
    expect(res.status).toBe(301);
    expect(res.headers.get("referrer-policy")).toBe("strict-origin-when-cross-origin");
  });
});

function post(
  headers: Record<string, string>,
  url = "https://upperlevelmusic.com/api/public/inquiry",
) {
  return new Request(url, { method: "POST", headers, body: "{}" });
}

describe("guardFormRequest", () => {
  const ok = { origin: "https://upperlevelmusic.com", "content-type": "application/json" };

  it("passes a same-origin JSON post", async () => {
    expect(await guardFormRequest(post(ok))).toBeNull();
  });
  it("rejects a cross-site origin", async () => {
    const res = await guardFormRequest(post({ ...ok, origin: "https://evil.example" }));
    expect(res?.status).toBe(403);
  });
  it("rejects cross-site fetch metadata without an origin", async () => {
    const res = await guardFormRequest(
      post({ "content-type": "application/json", "sec-fetch-site": "cross-site" }),
    );
    expect(res?.status).toBe(403);
  });
  it("rejects a text/plain body", async () => {
    const res = await guardFormRequest(post({ ...ok, "content-type": "text/plain" }));
    expect(res?.status).toBe(415);
  });
  it("rejects an oversized body", async () => {
    const res = await guardFormRequest(post({ ...ok, "content-length": "999999" }));
    expect(res?.status).toBe(413);
  });
  it("rate limits through the binding", async () => {
    bindings.FORM_LIMITER = { limit: async () => ({ success: false }) };
    const res = await guardFormRequest(post({ ...ok, "cf-connecting-ip": "1.2.3.4" }));
    expect(res?.status).toBe(429);
  });
});

describe("deliver", () => {
  const request = new Request("https://upperlevelmusic.com/api/public/inquiry");
  const message = { subject: "Upper Level Music inquiry: Pat", text: "hello", replyTo: "p@x.com" };

  beforeEach(() => {
    bindings.INQUIRY_WEBHOOK_URL = "https://script.example/exec";
    bindings.FORWARDER_SECRET = "s3cret";
  });

  it("succeeds only when the forwarder says ok: true", async () => {
    const fetchMock = vi.fn(async () => Response.json({ ok: true }));
    vi.stubGlobal("fetch", fetchMock);
    expect(await deliver(message, request)).toEqual({ ok: true, via: "webhook" });
    const sent = JSON.parse(
      (fetchMock.mock.calls[0] as unknown as [string, RequestInit])[1].body as string,
    );
    expect(sent.secret).toBe("s3cret");
    expect(sent.email).toBe("p@x.com");
  });
  it("fails on a 200 that says ok: false", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => Response.json({ ok: false, error: "quota" })),
    );
    expect(await deliver(message, request)).toEqual({ ok: false, reason: "failed" });
  });
  it("fails on a 200 HTML error page", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response("<html>Script error</html>")),
    );
    expect(await deliver(message, request)).toEqual({ ok: false, reason: "failed" });
  });
  it("fails when the network throws", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => Promise.reject(new Error("down"))),
    );
    expect(await deliver(message, request)).toEqual({ ok: false, reason: "failed" });
  });
  it("reports not-configured with no delivery method", async () => {
    delete bindings.INQUIRY_WEBHOOK_URL;
    vi.stubEnv("INQUIRY_WEBHOOK_URL", "");
    expect(await deliver(message, request)).toEqual({ ok: false, reason: "not-configured" });
    vi.unstubAllEnvs();
  });
  it("marks preview subjects", async () => {
    const fetchMock = vi.fn(async () => Response.json({ ok: true }));
    vi.stubGlobal("fetch", fetchMock);
    await deliver(message, new Request("https://x.workers.dev/api/public/inquiry"));
    const sent = JSON.parse(
      (fetchMock.mock.calls[0] as unknown as [string, RequestInit])[1].body as string,
    );
    expect(sent.subject.startsWith("[PREVIEW] ")).toBe(true);
  });
});

describe("cleanSubject", () => {
  it("removes line breaks and control characters", () => {
    expect(cleanSubject("Hi\r\nBcc: x@y.com\u0000")).toBe("Hi Bcc: x@y.com");
  });
  it("caps the length", () => {
    expect(cleanSubject("a".repeat(500))).toHaveLength(200);
  });
});
