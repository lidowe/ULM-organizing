#!/usr/bin/env python3
"""Generate ULM identity-concept SVG masters.

Type is outlined to paths from the site's own woff2 fonts so every SVG is
print-ready (no font dependencies). Marks are drawn programmatically so
variants/recolors are cheap.
"""
import math
import os
import random

from fontTools.misc.transform import Transform
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

FONTS = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "..", "site", "public", "fonts")
OUT = os.path.dirname(os.path.abspath(__file__))
os.makedirs(OUT, exist_ok=True)


class Face:
    def __init__(self, filename):
        self.font = TTFont(os.path.join(FONTS, filename))
        self.upem = self.font["head"].unitsPerEm
        self.glyphset = self.font.getGlyphSet()
        self.cmap = self.font.getBestCmap()
        self.hmtx = self.font["hmtx"]
        try:
            self.cap = self.font["OS/2"].sCapHeight / self.upem
        except Exception:
            self.cap = 0.7

    def text_path(self, text, size, tracking=0.0):
        """Return (svg_path_d, width). Baseline at y=0, y grows down."""
        scale = size / self.upem
        x = 0.0
        parts = []
        for ch in text:
            gname = self.cmap.get(ord(ch))
            if gname is None:
                x += size * 0.5
                continue
            glyph = self.glyphset[gname]
            pen = SVGPathPen(self.glyphset)
            tpen = TransformPen(pen, Transform(scale, 0, 0, -scale, x, 0))
            glyph.draw(tpen)
            d = pen.getCommands()
            if d:
                parts.append(d)
            x += self.hmtx[gname][0] * scale + tracking * size
        if text:
            x -= tracking * size  # no trailing track
        return " ".join(parts), x


MONO = Face("space-mono-700-latin.woff2")
GROTESK = Face("space-grotesk-400-latin.woff2")
SPECTRAL = Face("spectral-500-latin.woff2")

# palette
INK = "#0d0b09"          # near-black, warm (stone/wood ground)
BG_SITE = "#0b0d11"      # the site's blue-black
PAPER = "#eceae5"
RED = "#d8342b"
EMBER0, EMBER1 = "#ffb347", "#ff7a1a"
VERDIGRIS = "#2fe6c5"
VIOLET, MAGENTA, TEAL = "#8b5cf6", "#ec4899", "#22d3ee"
GREY_A, GREY_B = "#282b31", "#33373e"


def svg(name, w, h, body, bg=None):
    rect = f'<rect width="{w}" height="{h}" fill="{bg}"/>' if bg else ""
    doc = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
           f'width="{w}" height="{h}">{rect}{body}</svg>')
    with open(os.path.join(OUT, name), "w") as f:
        f.write(doc)
    print("wrote", name)


def text_el(face, text, size, x, y, fill, tracking=0.0, anchor="start"):
    d, w = face.text_path(text, size, tracking)
    if anchor == "middle":
        x -= w / 2
    elif anchor == "end":
        x -= w
    return f'<path transform="translate({x:.2f},{y:.2f})" d="{d}" fill="{fill}"/>', w


# ---------------------------------------------------------------- A. STRATA
def monolith(cx, base_y, w, h, rng, slit_y=None, slit_h=0):
    """An irregular standing stone; optional horizontal slit (carved channel)."""
    def jit(v, a):
        return v + rng.uniform(-a, a)
    top = base_y - h
    l, r = cx - w / 2, cx + w / 2
    # corner chips + slightly off-vertical sides
    pts_up = [(jit(l, w * .06), base_y),
              (jit(l - w * .04, w * .05), base_y - h * .45),
              (jit(l + w * .05, w * .05), top + h * .12),
              (jit(l + w * .18, w * .04), jit(top, h * .02)),
              (jit(r - w * .22, w * .04), jit(top + h * .03, h * .02)),
              (jit(r - w * .02, w * .05), top + h * .16),
              (jit(r + w * .03, w * .05), base_y - h * .5),
              (jit(r, w * .06), base_y)]
    def poly(points):
        return "M" + " L".join(f"{x:.1f},{y:.1f}" for x, y in points) + " Z"
    if slit_y is None or slit_y <= top or slit_y >= base_y:
        return [poly(pts_up)]
    # split the silhouette at the slit band
    y0, y1 = slit_y - slit_h / 2, slit_y + slit_h / 2
    def clip(points, keep_above):
        out = []
        for x, y in points:
            if keep_above:
                out.append((x, min(y, y0)))
            else:
                out.append((x, max(y, y1)))
        return out
    upper = clip(pts_up, True)
    lower = clip(pts_up, False)
    return [poly(lower), poly(upper)]


def concept_a(name, line_color, halo, bg=INK):
    rng = random.Random(7)
    W, H = 900, 640
    base = 470
    level_y = 210
    stones = [(190, 120, 200), (330, 96, 300), (470, 130, 380),
              (610, 100, 250), (750, 118, 335)]
    body = []
    fills = [GREY_A, GREY_B, "#2d3037", GREY_A, GREY_B]
    for (cx, w, h), fill in zip(stones, fills):
        slit = level_y if base - h < level_y - 24 else None
        for d in monolith(cx, base, w, h, rng, slit_y=slit, slit_h=30):
            body.append(f'<path d="{d}" fill="{fill}"/>')
    # the level line: halo then core, full width; carved slits are wider than
    # the halo so dark stone shows around the beam inside the tall stones
    body.append(f'<rect x="60" y="{level_y-4}" width="780" height="8" fill="{halo}" opacity="0.35" rx="4"/>')
    body.append(f'<rect x="60" y="{level_y-2}" width="780" height="4" fill="{line_color}" rx="2"/>')
    # ground hairline
    body.append(f'<rect x="60" y="{base}" width="780" height="2" fill="{PAPER}" opacity="0.25"/>')
    t, _ = text_el(MONO, "UPPER LEVEL MUSIC", 40, W / 2, 560, PAPER, tracking=0.24, anchor="middle")
    body.append(t)
    t2, _ = text_el(MONO, "EST. 2012", 17, W / 2, 604, "#8a8f99", tracking=0.30, anchor="middle")
    body.append(t2)
    svg(name, W, H, "".join(body), bg=bg)


# ----------------------------------------------------------------- B. RINGS
def wobble_ring(cx, cy, r, rng, wob, drift):
    """Closed slightly-irregular ring path (tree ring)."""
    n = 48
    pts = []
    ox, oy = rng.uniform(-drift, drift), rng.uniform(-drift, drift)
    phase = rng.uniform(0, math.tau)
    for i in range(n):
        a = math.tau * i / n
        rr = r * (1 + wob * (math.sin(3 * a + phase) * .5 + math.sin(5 * a + phase * 2) * .3
                             + rng.uniform(-.15, .15)))
        pts.append((cx + ox + rr * math.cos(a), cy + oy + rr * math.sin(a)))
    d = "M" + " L".join(f"{x:.1f},{y:.1f}" for x, y in pts) + " Z"
    return d


def concept_b(name, accent, ring_color=PAPER, bg=INK):
    rng = random.Random(11)
    W, H = 900, 700
    cx, cy, R = 450, 300, 210
    body = []
    radii = [210, 184, 158, 134, 92, 72, 52, 34]
    widths = [10, 3, 6, 3, 5, 3, 4, 2]
    accent_idx = 3  # one machined ring among the grown ones
    for i, (r, sw) in enumerate(zip(radii, widths)):
        if i == accent_idx:
            body.append(f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" '
                        f'stroke="{accent}" stroke-width="{sw+2}"/>')
        else:
            d = wobble_ring(cx, cy, r, rng, 0.035, r * .045)
            body.append(f'<path d="{d}" fill="none" stroke="{ring_color}" '
                        f'stroke-width="{sw}" opacity="{0.92 - i*0.04:.2f}"/>')
    body.append(f'<circle cx="{cx}" cy="{cy}" r="7" fill="{accent}"/>')  # spindle
    t, _ = text_el(SPECTRAL, "Upper Level Music", 64, W / 2, 600, PAPER, tracking=0.005, anchor="middle")
    body.append(t)
    t2, _ = text_el(MONO, "OLD GROWTH. NEW PRESSING.", 17, W / 2, 650, "#8a8f99", tracking=0.28, anchor="middle")
    body.append(t2)
    svg(name, W, H, "".join(body), bg=bg)


# ------------------------------------------------------------------ C. WAVE
def concept_c(name, stops, flat=None, bg="#08060c"):
    W, H = 900, 620
    cx, cy = 450, 240
    n = 27
    body = []
    if flat is None:
        grad = ('<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0">'
                + "".join(f'<stop offset="{o}" stop-color="{c}"/>' for o, c in stops)
                + "</linearGradient></defs>")
        body.append(grad)
        fill = "url(#g)"
    else:
        fill = flat
    total_w = 700
    bw = 12
    gap = (total_w - n * bw) / (n - 1)
    rng = random.Random(5)
    for i in range(n):
        t = i / (n - 1)
        env = (math.sin(t * math.pi) ** 1.2) * (0.55 + 0.45 * math.sin(t * math.pi * 3.1 + 1.2))
        hh = 24 + 300 * max(0.06, env) * (1 + rng.uniform(-.08, .08))
        x = (W - total_w) / 2 + i * (bw + gap)
        body.append(f'<rect x="{x:.1f}" y="{cy - hh/2:.1f}" width="{bw}" '
                    f'height="{hh:.1f}" rx="{bw/2}" fill="{fill}"/>')
    t1, w1 = text_el(GROTESK, "UPPER LEVEL MUSIC", 44, W / 2, 500, PAPER, tracking=0.42, anchor="middle")
    body.append(t1)
    body.append(f'<rect x="{(W-w1)/2:.1f}" y="522" width="{w1:.1f}" height="3" fill="{fill}"/>')
    t2, _ = text_el(MONO, "EST. 2012", 16, W / 2, 566, "#7d8492", tracking=0.30, anchor="middle")
    body.append(t2)
    svg(name, W, H, "".join(body), bg=bg)


# ----------------------------------------------------------------- D. PANEL
def concept_d(name, panel, text_fill, bg=None):
    W, H = 1100, 130  # closer to a true 1U rack-blank ratio
    body = [f'<rect x="0" y="0" width="{W}" height="{H}" rx="8" fill="{panel}"/>']
    # rack-ear obround slots: always dark, they are holes through to the rack
    for sx in (26, W - 54):
        for sy in (16, H - 30):
            body.append(f'<rect x="{sx}" y="{sy}" width="28" height="14" rx="7" '
                        f'fill="{INK}" opacity="0.88"/>')
    t, _ = text_el(MONO, "UPPER LEVEL MUSIC", 52, W / 2, H / 2 + MONO.cap * 52 / 2, text_fill,
                   tracking=0.24, anchor="middle")
    body.append(t)
    svg(name, W, H, "".join(body), bg=bg)


# ------------------------------------------------------- shared secondaries
def chip(name, fill, knockout=INK):
    W = H = 300
    body = [f'<rect width="{W}" height="{H}" rx="18" fill="{fill}"/>']
    t, _ = text_el(MONO, "ULM", 92, W / 2, H / 2 + MONO.cap * 92 / 2, knockout,
                   tracking=0.06, anchor="middle")
    body.append(t)
    svg(name, W, H, "".join(body))


def eyebrow(name, hot):
    segs = ["ULM", "EDWARD LIDOW", "EST. 2012"]
    size, track = 26, 0.16
    parts, x = [], 0.0
    for i, s in enumerate(segs):
        fill = hot if i == 0 else "#b3b8c2"
        el, w = text_el(MONO, s, size, x, 40, fill, tracking=track)
        parts.append(el)
        x += w + size * 0.6
        if i < len(segs) - 1:
            el, w = text_el(MONO, "/", size, x, 40, "#5d6473")
            parts.append(el)
            x += w + size * 0.6
    svg(name, math.ceil(x), 56, "".join(parts), bg=INK)


concept_a("a-strata-ember.svg", EMBER1, EMBER0)
concept_a("a-strata-verdigris.svg", VERDIGRIS, "#7ef5df")
concept_b("b-rings-ember.svg", EMBER1)
concept_b("b-rings-teal.svg", VERDIGRIS)
concept_c("c-wave-gradient.svg", [(0, TEAL), (0.5, VIOLET), (1, MAGENTA)])
concept_c("c-wave-flat.svg", [], flat=VIOLET)
concept_d("d-panel-red.svg", RED, PAPER)
concept_d("d-panel-ember.svg", EMBER1, INK)
concept_d("d-panel-teal.svg", VERDIGRIS, INK)
concept_d("d-panel-violet.svg", VIOLET, PAPER)
concept_d("d-panel-black.svg", "#16181d", RED)
chip("ulm-chip-red.svg", RED)
chip("ulm-chip-ember.svg", EMBER1)
chip("ulm-chip-teal.svg", VERDIGRIS)
chip("ulm-chip-violet.svg", VIOLET, PAPER)
eyebrow("eyebrow-red.svg", "#f05043")
print("done")


