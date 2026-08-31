#!/usr/bin/env python3
"""Textured raster renders for ULM round-two identity concepts.

Everything is procedural: fBm noise for stone, gradient lighting from the
glow seams, additive halos, film grain. Output JPEGs sized for the canvas.
"""
import math
import os
import random

import numpy as np
from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont, ImageOps

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = HERE
os.makedirs(OUT, exist_ok=True)

EMBER = (255, 122, 26)
EMBER_HI = (255, 196, 110)


def fbm(w, h, seed, octaves=5, base=8):
    rng = np.random.default_rng(seed)
    acc = np.zeros((h, w), dtype=np.float64)
    amp, total = 1.0, 0.0
    for o in range(octaves):
        gw, gh = base * (2 ** o), base * (2 ** o)
        grid = rng.random((min(gh, h), min(gw, w)))
        img = Image.fromarray((grid * 255).astype(np.uint8)).resize((w, h), Image.BICUBIC)
        acc += amp * (np.asarray(img, dtype=np.float64) / 255.0)
        total += amp
        amp *= 0.55
    return acc / total


def np_to_img(a):
    return Image.fromarray(np.clip(a, 0, 255).astype(np.uint8))


def jitter_poly(pts, amount, seed):
    rng = random.Random(seed)
    out = []
    n = len(pts)
    for i in range(n):
        x0, y0 = pts[i]
        x1, y1 = pts[(i + 1) % n]
        segs = max(1, int(math.hypot(x1 - x0, y1 - y0) / 46))
        for s in range(segs):
            t = s / segs
            out.append((x0 + (x1 - x0) * t + rng.uniform(-amount, amount),
                        y0 + (y1 - y0) * t + rng.uniform(-amount, amount)))
    return out


def stone_layer(size, polys, seed, base_dark=(10, 11, 14), base_light=(88, 94, 104)):
    """Return (RGB stone image, mask) for the given polygons: high-contrast fBm
    with crack lines and strata banding, edge-lit from above."""
    w, h = size
    mask = Image.new("L", size, 0)
    d = ImageDraw.Draw(mask)
    for i, p in enumerate(polys):
        d.polygon(jitter_poly(p, 5, seed + i), fill=255)
    tex = fbm(w, h, seed, octaves=7, base=10)
    tex = np.clip((tex - 0.5) * 1.9 + 0.42, 0, 1)
    strata = fbm(w, h, seed + 99, octaves=2, base=3)
    band = 0.5 + 0.5 * np.sin(strata * 14.0 + np.linspace(0, 5, h)[:, None])
    tex = np.clip(0.7 * tex + 0.3 * band * tex, 0, 1)
    # cracks: ridged noise thresholded to thin dark seams
    ridge = np.abs(fbm(w, h, seed + 7, octaves=5, base=5) - 0.5)
    tex = np.where(ridge < 0.012, tex * 0.25, tex)
    g = (tex * 255).astype(np.uint8)
    stone = ImageOps.colorize(Image.fromarray(g), black=base_dark, white=base_light)
    hf = np.asarray(mask.filter(ImageFilter.GaussianBlur(6)), dtype=np.float64)
    gy, gx = np.gradient(hf)
    lit = np.clip(120 - gy * 2.1 - gx * 0.6, 0, 255)
    shade = np_to_img(lit).convert("L")
    stone = ImageChops.overlay(stone, Image.merge("RGB", (shade, shade, shade)))
    stone = stone.point(lambda v: int(v * 0.82))
    return stone, mask


def add_glow(img, glow_mask, color, halo=26, strength=1.0):
    solid = Image.new("RGB", img.size, color)
    core = Image.composite(solid, Image.new("RGB", img.size, 0), glow_mask)
    halo_img = core.filter(ImageFilter.GaussianBlur(halo))
    if strength != 1.0:
        halo_img = halo_img.point(lambda v: int(v * strength))
    out = ImageChops.add(img, halo_img)
    out = ImageChops.add(out, core.filter(ImageFilter.GaussianBlur(2)))
    return out


def grain_vignette(img, seed=1, grain=10, vig=0.42):
    w, h = img.size
    g = Image.effect_noise((w, h), grain).convert("L")
    img = ImageChops.soft_light(img, Image.merge("RGB", (g, g, g)))
    yy, xx = np.mgrid[0:h, 0:w]
    cx, cy = w / 2, h * 0.55
    r = np.sqrt(((xx - cx) / (w * 0.72)) ** 2 + ((yy - cy) / (h * 0.72)) ** 2)
    v = np.clip(1 - vig * np.clip(r - 0.55, 0, None) * 1.7, 0, 1)
    arr = np.asarray(img, dtype=np.float64) * v[..., None]
    return np_to_img(arr)


def background(size, seed, tone=(14, 12, 10), mottle=0.16):
    w, h = size
    base = fbm(w, h, seed, octaves=4, base=4)
    arr = np.zeros((h, w, 3))
    for c in range(3):
        arr[..., c] = tone[c] * (1 - mottle + mottle * 2 * base)
    return np_to_img(arr)


def save(img, name, width, quality=86):
    ratio = width / img.size[0]
    img = img.resize((width, int(img.size[1] * ratio)), Image.LANCZOS)
    path = os.path.join(OUT, name)
    img.save(path, "JPEG", quality=quality, optimize=True)
    print("wrote", name, f"{os.path.getsize(path)//1024}KB", img.size)


# ------------------------------------------------------------- 1. trilithon
def trilithon():
    W, H = 1800, 1350
    img = background((W, H), 3)
    seam = 430
    gap = 18
    lintel = [(540, 300), (1268, 316), (1252, seam - gap), (556, seam - gap - 10)]
    up_l = [(600, seam + gap), (760, seam + gap - 4), (786, 1120), (586, 1120)]
    up_r = [(1052, seam + gap - 6), (1214, seam + gap), (1226, 1120), (1032, 1120)]
    stone, mask = stone_layer((W, H), [lintel, up_l, up_r], seed=21)
    img = Image.composite(stone, img, mask)
    # the glow lives in the seam between the upper level and its supports
    glow = Image.new("L", (W, H), 0)
    dg = ImageDraw.Draw(glow)
    dg.line([(560, seam - 2), (1250, seam + 2)], fill=255, width=9)
    img = add_glow(img, glow, EMBER, halo=34)
    # warm bounce on the faces nearest the seam
    warm = Image.new("L", (W, H), 0)
    dw = ImageDraw.Draw(warm)
    dw.rectangle([540, seam - 120, 1270, seam + 120], fill=90)
    warm = warm.filter(ImageFilter.GaussianBlur(60))
    warm = ImageChops.multiply(warm, mask)
    img = ImageChops.add(img, ImageOps.colorize(warm, black=(0, 0, 0), white=(90, 40, 8)).convert("RGB"))
    # ground: faint line + contact shadows
    gr = ImageDraw.Draw(img)
    gr.line([(360, 1122), (1440, 1122)], fill=(52, 50, 46), width=3)
    img = grain_vignette(img, 5)
    save(img, "r-trilithon.jpg", 1240)


# --------------------------------------------------------- 2. floating stone
def floating():
    W, H = 1400, 1750
    img = background((W, H), 7)
    split = 700
    gap = 74
    bottom = [(560, split + gap), (852, split + gap + 14), (872, 1470), (596, 1490)]
    topcut = [(574, 330), (838, 348), (856, split - 8), (552, split + 12)]
    stone, mask = stone_layer((W, H), [bottom, topcut], seed=31)
    img = Image.composite(stone, img, mask)
    glow = Image.new("L", (W, H), 0)
    dg = ImageDraw.Draw(glow)
    dg.polygon([(560, split + 6), (860, split - 2), (856, split + gap + 4), (566, split + gap + 12)], fill=115)
    glow = glow.filter(ImageFilter.GaussianBlur(4))
    img = add_glow(img, glow, EMBER, halo=42, strength=0.9)
    core = Image.new("L", (W, H), 0)
    ImageDraw.Draw(core).line([(566, split + gap // 2 + 4), (858, split + gap // 2 - 4)], fill=255, width=6)
    img = add_glow(img, core, EMBER_HI, halo=18, strength=0.8)
    sh = Image.new("L", (W, H), 0)
    ImageDraw.Draw(sh).ellipse([540, 1480, 900, 1540], fill=110)
    sh = sh.filter(ImageFilter.GaussianBlur(24))
    img = ImageChops.subtract(img, Image.merge("RGB", (sh, sh, sh)))
    img = grain_vignette(img, 9)
    save(img, "r-floating.jpg", 1000)


# ------------------------------------------------------------ 3. into the red
def ttf(path_woff2, out_name):
    from fontTools.ttLib import TTFont
    p = os.path.join(HERE, out_name)
    if not os.path.exists(p):
        f = TTFont(path_woff2)
        f.flavor = None
        f.save(p)
    return p


def vu():
    S = 3
    W, H = 1500 * S // 3, 1120 * S // 3
    W, H = W * 3 // S * S // 3, H  # keep ints simple
    W, H = 1500, 1120
    img = Image.new("RGB", (W, H), (16, 15, 13))
    d = ImageDraw.Draw(img)
    # bezel + face
    d.rounded_rectangle([60, 60, W - 60, H - 60], 26, fill=(24, 23, 21))
    face_box = [110, 110, W - 110, H - 110]
    d.rounded_rectangle(face_box, 18, fill=(232, 221, 194))
    # face shading
    sh = fbm(W, H, 41, octaves=3, base=4)
    shade = np_to_img(210 + 45 * sh).convert("L")
    face_mask = Image.new("L", (W, H), 0)
    ImageDraw.Draw(face_mask).rounded_rectangle(face_box, 18, fill=255)
    warm_face = ImageOps.colorize(shade, black=(196, 182, 150), white=(238, 228, 202)).convert("RGB")
    img = Image.composite(warm_face, img, face_mask)
    d = ImageDraw.Draw(img)
    # arc geometry
    cx, cy, R = W / 2, H - 210, 620
    a0, a1 = math.radians(-142), math.radians(-38)
    red_from = math.radians(-53)  # red begins at the 0 VU tick
    mono = ImageFont.truetype(ttf(os.path.join(HERE, "..", "..", "..", "site", "public", "fonts", "space-mono-700-latin.woff2"), "sm700.ttf"), 40)
    mono_small = ImageFont.truetype(os.path.join(HERE, "sm700.ttf"), 30)
    labels = ["-20", "-10", "-7", "-5", "-3", "-1", "0", "+3"]
    for i, lab in enumerate(labels):
        a = a0 + (a1 - a0) * i / (len(labels) - 1)
        in_red = a >= red_from - 1e-6
        col = (196, 44, 34) if in_red else (38, 34, 30)
        x0, y0 = cx + (R - 46) * math.cos(a), cy + (R - 46) * math.sin(a)
        x1, y1 = cx + R * math.cos(a), cy + R * math.sin(a)
        d.line([(x0, y0), (x1, y1)], fill=col, width=7 if lab in ("0", "-20") else 5)
        lx, ly = cx + (R + 44) * math.cos(a), cy + (R + 44) * math.sin(a)
        d.text((lx, ly), lab, font=mono_small, fill=col, anchor="mm")
    # red band along the arc
    band = Image.new("L", (W, H), 0)
    db = ImageDraw.Draw(band)
    bbox = [cx - R + 20, cy - R + 20, cx + R - 20, cy + R - 20]
    db.arc(bbox, math.degrees(red_from), math.degrees(a1), fill=255, width=16)
    red = Image.new("RGB", (W, H), (206, 48, 36))
    img = Image.composite(red, img, band)
    d = ImageDraw.Draw(img)
    d.text((cx, cy - R * 0.42), "VU", font=mono, fill=(38, 34, 30), anchor="mm")
    d.text((cx, cy - R * 0.24), "UPPER LEVEL", font=mono_small, fill=(120, 108, 88), anchor="mm")
    # needle pinned into the red
    na = math.radians(-46)
    nx, ny = cx + (R - 20) * math.cos(na), cy + (R - 20) * math.sin(na)
    needle_sh = Image.new("L", (W, H), 0)
    ImageDraw.Draw(needle_sh).line([(cx + 12, cy + 12), (nx + 10, ny + 14)], fill=120, width=10)
    img = ImageChops.subtract(img, Image.merge("RGB", (needle_sh.filter(ImageFilter.GaussianBlur(6)),) * 3))
    d = ImageDraw.Draw(img)
    d.line([(cx, cy), (nx, ny)], fill=(52, 30, 24), width=9)
    d.ellipse([cx - 26, cy - 26, cx + 26, cy + 26], fill=(30, 27, 24))
    d.ellipse([cx - 10, cy - 10, cx + 10, cy + 10], fill=(88, 82, 74))
    # crop face region view
    img = grain_vignette(img, 13, grain=8, vig=0.3)
    save(img, "r-vu.jpg", 1150)


# --------------------------------------------------------- 4. the noise floor
def noisefloor():
    W, H = 1800, 1000
    img = background((W, H), 17, tone=(11, 11, 13), mottle=0.1)
    rng = np.random.default_rng(5)
    floor_top = 640
    arr = np.asarray(img, dtype=np.float64).copy()
    # a floor of hiss: dense strokes rising from the bottom up to the line
    for x in range(0, W, 3):
        top = int(floor_top + abs(rng.normal(0, 26)))
        top = min(top, H - 40)
        shade = 40 + rng.random() * 62
        arr[top:H - 30, x:x + 2, :] += shade * np.linspace(1.0, 0.55, H - 30 - top)[:, None, None]
    img = np_to_img(arr)
    # the clean signal, above the noise floor
    line = Image.new("L", (W, H), 0)
    dl = ImageDraw.Draw(line)
    pts = []
    for x in range(140, W - 140, 8):
        t = (x - 140) / (W - 280)
        y = 330 - 150 * math.sin(t * math.pi) * (0.6 + 0.4 * math.sin(t * 9))
        pts.append((x, y))
    dl.line(pts, fill=255, width=6, joint="curve")
    img = add_glow(img, line, EMBER, halo=30)
    # the floor line itself
    fl = ImageDraw.Draw(img)
    fl.line([(80, floor_top), (W - 80, floor_top)], fill=(90, 94, 102), width=2)
    img = grain_vignette(img, 19)
    save(img, "r-noisefloor.jpg", 1240)


trilithon()
floating()
vu()
noisefloor()
print("done")
