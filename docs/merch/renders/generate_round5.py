#!/usr/bin/env python3
"""Round five renders: the elevator floor dial and the lit UL button panel."""
import math
import os

import numpy as np
from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = HERE
os.makedirs(OUT, exist_ok=True)

SANS_B = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
SERIF_B = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"


def fbm(w, h, seed, octaves=5, base=8):
    rng = np.random.default_rng(seed)
    acc = np.zeros((h, w))
    amp, total = 1.0, 0.0
    for o in range(octaves):
        g = rng.random((base * 2 ** o, base * 2 ** o))
        img = Image.fromarray((g * 255).astype(np.uint8)).resize((w, h), Image.BICUBIC)
        acc += amp * (np.asarray(img, dtype=np.float64) / 255.0)
        total += amp
        amp *= 0.55
    return acc / total


def np_to_img(a):
    return Image.fromarray(np.clip(a, 0, 255).astype(np.uint8))


def add_glow(img, glow_mask, color, halo=26, strength=1.0):
    solid = Image.new("RGB", img.size, color)
    core = Image.composite(solid, Image.new("RGB", img.size, 0), glow_mask)
    halo_img = core.filter(ImageFilter.GaussianBlur(halo))
    if strength != 1.0:
        halo_img = halo_img.point(lambda v: int(v * strength))
    return ImageChops.add(ImageChops.add(img, halo_img), core.filter(ImageFilter.GaussianBlur(2)))


def grain_vignette(img, seed=1, grain=9, vig=0.4):
    w, h = img.size
    g = Image.effect_noise((w, h), grain).convert("L")
    img = ImageChops.soft_light(img, Image.merge("RGB", (g, g, g)))
    yy, xx = np.mgrid[0:h, 0:w]
    r = np.sqrt(((xx - w / 2) / (w * 0.72)) ** 2 + ((yy - h * 0.52) / (h * 0.72)) ** 2)
    v = np.clip(1 - vig * np.clip(r - 0.55, 0, None) * 1.7, 0, 1)
    return np_to_img(np.asarray(img, dtype=np.float64) * v[..., None])


def save(img, name, width, quality=87):
    r = width / img.size[0]
    img = img.resize((width, int(img.size[1] * r)), Image.LANCZOS)
    p = os.path.join(OUT, name)
    img.save(p, "JPEG", quality=quality, optimize=True)
    print("wrote", name, f"{os.path.getsize(p)//1024}KB", img.size)


# ------------------------------------------------- the floor indicator dial
def dial():
    W, H = 1500, 1000
    # deep lacquered-green lobby wall
    tex = fbm(W, H, 11, octaves=4, base=5)
    arr = np.zeros((H, W, 3))
    for c, t in enumerate((16, 26, 22)):
        arr[..., c] = t * (0.85 + 0.3 * tex)
    img = np_to_img(arr)
    d = ImageDraw.Draw(img)
    cx, cy, R = W / 2, 760, 520
    # brass half-disc plate, layered for depth
    for rr, col in ((R + 46, (74, 56, 24)), (R + 34, (128, 96, 40)),
                    (R + 26, (166, 128, 58)), (R + 18, (196, 158, 84))):
        d.pieslice([cx - rr, cy - rr, cx + rr, cy + rr], 180, 360, fill=col)
    d.pieslice([cx - R - 6, cy - R - 6, cx + R + 6, cy + R + 6], 180, 360, fill=(52, 40, 20))
    d.pieslice([cx - R, cy - R, cx + R, cy + R], 180, 360, fill=(31, 27, 22))
    # brass sheen sweep on the plate rim
    sheen = Image.new("L", (W, H), 0)
    ds = ImageDraw.Draw(sheen)
    ds.pieslice([cx - R - 40, cy - R - 40, cx + R + 40, cy + R + 40], 205, 250, fill=70)
    sheen = sheen.filter(ImageFilter.GaussianBlur(30))
    img = ImageChops.add(img, Image.merge("RGB", (sheen, sheen.point(lambda v: int(v * .8)),
                                                  sheen.point(lambda v: int(v * .4)))))
    d = ImageDraw.Draw(img)
    # floor stops
    stops = ["1", "2", "3", "4", "UL"]
    f_lab = ImageFont.truetype(SERIF_B, 56)
    f_ul = ImageFont.truetype(SERIF_B, 66)
    a0, a1 = math.radians(-165), math.radians(-15)
    for i, s in enumerate(stops):
        a = a0 + (a1 - a0) * i / (len(stops) - 1)
        x0, y0 = cx + (R - 74) * math.cos(a), cy + (R - 74) * math.sin(a)
        x1, y1 = cx + (R - 26) * math.cos(a), cy + (R - 26) * math.sin(a)
        hot = s == "UL"
        col = (255, 196, 110) if hot else (196, 158, 84)
        d.line([(x0, y0), (x1, y1)], fill=col, width=9 if hot else 6)
        lx, ly = cx + (R - 132) * math.cos(a), cy + (R - 132) * math.sin(a)
        d.text((lx, ly), s, font=f_ul if hot else f_lab, fill=col, anchor="mm")
    # lamp bloom behind UL
    gm = Image.new("L", (W, H), 0)
    ax = math.radians(-15)
    ImageDraw.Draw(gm).ellipse([cx + (R - 132) * math.cos(ax) - 46, cy + (R - 132) * math.sin(ax) - 46,
                                cx + (R - 132) * math.cos(ax) + 46, cy + (R - 132) * math.sin(ax) + 46], fill=120)
    img = add_glow(img, gm.filter(ImageFilter.GaussianBlur(18)), (255, 150, 40), halo=50, strength=0.7)
    d = ImageDraw.Draw(img)
    # ornate needle pointing at UL
    na = math.radians(-19)
    tipx, tipy = cx + (R - 170) * math.cos(na), cy + (R - 170) * math.sin(na)
    perp = na + math.pi / 2
    wx, wy = 22 * math.cos(perp), 22 * math.sin(perp)
    d.polygon([(tipx, tipy), (cx + wx, cy + wy), (cx - 60 * math.cos(na), cy - 60 * math.sin(na)),
               (cx - wx, cy - wy)], fill=(20, 16, 12))
    d.polygon([(tipx, tipy), (cx + wx * 0.5, cy + wy * 0.5), (cx - wx * 0.5, cy - wy * 0.5)],
              fill=(240, 210, 140))
    # hub rosette
    for rr, col in ((54, (166, 128, 58)), (44, (52, 40, 20)), (30, (196, 158, 84)), (12, (31, 27, 22))):
        d.ellipse([cx - rr, cy - rr, cx + rr, cy + rr], fill=col)
    # deco fan lines under the hub
    for k in range(-3, 4):
        d.line([(cx + k * 34, cy + 4), (cx + k * 58, H)], fill=(128, 96, 40), width=5)
    img = grain_vignette(img, 3, vig=0.5)
    save(img, "r5-dial.jpg", 1240)


# ------------------------------------------------------ the UL button panel
def buttons():
    W, H = 950, 1500
    # brushed steel: noise blurred vertically
    n = Image.effect_noise((W, H), 34).filter(ImageFilter.GaussianBlur(0.6))
    arr = np.asarray(n, dtype=np.float64)
    k = np.ones((41, 1)) / 41
    from numpy.lib.stride_tricks import sliding_window_view
    pad = np.pad(arr, ((20, 20), (0, 0)), mode="edge")
    arr = sliding_window_view(pad, 41, axis=0).mean(axis=-1)
    base = 44 + (arr - arr.mean()) * 0.5
    img_arr = np.stack([base * 0.96, base, base * 1.06], axis=-1)
    # horizontal light band falloff
    yy = np.linspace(0, 1, H)[:, None, None]
    img_arr *= (0.85 + 0.45 * np.exp(-((yy - 0.22) ** 2) / 0.08))
    img = np_to_img(img_arr)
    d = ImageDraw.Draw(img)
    # panel plate
    d.rounded_rectangle([170, 90, W - 170, H - 90], 38, outline=(96, 100, 108), width=4)
    d.rounded_rectangle([176, 96, W - 176, H - 96], 34, outline=(20, 21, 24), width=3)
    for sx, sy in ((216, 136), (W - 216, 136), (216, H - 136), (W - 216, H - 136)):
        d.ellipse([sx - 13, sy - 13, sx + 13, sy + 13], fill=(30, 31, 35))
        d.line([(sx - 8, sy - 4), (sx + 8, sy + 4)], fill=(120, 124, 132), width=3)
    f_num = ImageFont.truetype(SANS_B, 44)
    f_ul = ImageFont.truetype(SANS_B, 52)
    order = ["UL", "4", "3", "2", "1"]
    cx = W / 2
    for i, s in enumerate(order):
        cy = 300 + i * 232
        hot = s == "UL"
        # button well
        d.ellipse([cx - 78, cy - 78, cx + 78, cy + 78], fill=(26, 27, 30))
        d.ellipse([cx - 70, cy - 70, cx + 70, cy + 70], fill=(58, 61, 68))
        d.arc([cx - 70, cy - 70, cx + 70, cy + 70], 200, 340, fill=(140, 145, 154), width=4)
        if hot:
            d.ellipse([cx - 58, cy - 58, cx + 58, cy + 58], fill=(228, 138, 36))
            d.ellipse([cx - 58, cy - 58, cx + 58, cy + 58], outline=(255, 214, 150), width=3)
            d.text((cx, cy), s, font=f_ul, fill=(46, 22, 4), anchor="mm")
        else:
            d.ellipse([cx - 58, cy - 58, cx + 58, cy + 58], fill=(38, 40, 45))
            d.text((cx, cy), s, font=f_num, fill=(132, 137, 146), anchor="mm")
    # glow for the lit button
    gm = Image.new("L", (W, H), 0)
    ImageDraw.Draw(gm).ellipse([cx - 58, 300 - 58, cx + 58, 300 + 58], fill=150)
    img = add_glow(img, gm.filter(ImageFilter.GaussianBlur(10)), (255, 140, 30), halo=60, strength=0.55)
    img = grain_vignette(img, 7, vig=0.42)
    save(img, "r5-buttons.jpg", 860)


dial()
buttons()
print("done")
