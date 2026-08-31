#!/usr/bin/env python3
"""Round six materials: chrome amp-badge script and engraved brass lozenge."""
import os

import numpy as np
from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = HERE


def fbm(w, h, seed, octaves=5, base=8):
    rng = np.random.default_rng(seed)
    acc = np.zeros((h, w))
    amp, total = 1.0, 0.0
    for o in range(octaves):
        g = rng.random((base * 2 ** o, base * 2 ** o))
        img = Image.fromarray((g * 255).astype(np.uint8)).resize((w, h), Image.BICUBIC)
        acc += amp * np.asarray(img, dtype=np.float64) / 255.0
        total += amp
        amp *= 0.55
    return acc / total


def np_to_img(a):
    return Image.fromarray(np.clip(a, 0, 255).astype(np.uint8))


def grain_vignette(img, seed=1, grain=9, vig=0.4):
    w, h = img.size
    g = Image.effect_noise((w, h), grain).convert("L")
    img = ImageChops.soft_light(img, Image.merge("RGB", (g, g, g)))
    yy, xx = np.mgrid[0:h, 0:w]
    r = np.sqrt(((xx - w / 2) / (w * 0.72)) ** 2 + ((yy - h * 0.5) / (h * 0.72)) ** 2)
    v = np.clip(1 - vig * np.clip(r - 0.55, 0, None) * 1.7, 0, 1)
    return np_to_img(np.asarray(img, dtype=np.float64) * v[..., None])


def save(img, name, width, quality=88):
    r = width / img.size[0]
    img = img.resize((width, int(img.size[1] * r)), Image.LANCZOS)
    p = os.path.join(OUT, name)
    img.save(p, "JPEG", quality=quality, optimize=True)
    print("wrote", name, f"{os.path.getsize(p)//1024}KB", img.size)


def chrome_fill(mask, y0, y1):
    """Map vertical position within [y0,y1] to a chrome band gradient."""
    stops = [(0.00, (238, 242, 248)), (0.34, (176, 184, 196)), (0.475, (74, 80, 92)),
             (0.525, (244, 247, 251)), (0.72, (154, 162, 174)), (1.00, (106, 112, 124))]
    h, w = mask.shape
    yy = np.clip((np.arange(h)[:, None] - y0) / max(1, y1 - y0), 0, 1)
    grad = np.zeros((h, 1, 3))
    for i in range(len(stops) - 1):
        t0, c0 = stops[i]
        t1, c1 = stops[i + 1]
        sel = (yy >= t0) & (yy <= t1)
        f = np.where(sel, (yy - t0) / (t1 - t0), 0)
        for c in range(3):
            grad[..., c] += np.where(sel[..., 0], c0[c] + (c1[c] - c0[c]) * f[..., 0], 0)[:, None]
    return np.broadcast_to(grad, (h, w, 3)).copy()


def script_badge():
    W, H = 1760, 980
    # black tolex: high-frequency bumpy noise, very dark
    bump = fbm(W, H, 5, octaves=6, base=24)
    arr = np.zeros((H, W, 3))
    for c, t in enumerate((17, 17, 18)):
        arr[..., c] = t * (0.65 + 0.85 * bump)
    img = np_to_img(arr)
    font = ImageFont.truetype(os.path.join(HERE, "mrdafoe.ttf"), 330)
    small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 44)
    mask_im = Image.new("L", (W, H), 0)
    dm = ImageDraw.Draw(mask_im)
    dm.text((W / 2, 400), "Upper Level", font=font, anchor="mm", fill=255)
    bbox = mask_im.getbbox()
    mask = np.asarray(mask_im, dtype=np.float64) / 255.0
    # drop shadow
    sh = mask_im.filter(ImageFilter.GaussianBlur(10))
    sh_arr = np.roll(np.asarray(sh, dtype=np.float64), (14, 8), (0, 1)) / 255.0 * 0.75
    base = np.asarray(img, dtype=np.float64) * (1 - sh_arr[..., None])
    # dark rim: dilate minus mask
    rim_im = mask_im.filter(ImageFilter.MaxFilter(9))
    rim = np.asarray(rim_im, dtype=np.float64) / 255.0
    base = base * (1 - rim[..., None]) + np.array((10, 11, 14)) * rim[..., None]
    # chrome faces
    chrome = chrome_fill(mask, bbox[1], bbox[3])
    out = base * (1 - mask[..., None]) + chrome * mask[..., None]
    # top specular: mask minus shifted-down mask
    spec = np.clip(mask - np.roll(mask, 5, axis=0), 0, 1)
    out = np.clip(out + spec[..., None] * np.array((90, 94, 100)), 0, 255)
    img = np_to_img(out)
    d = ImageDraw.Draw(img)
    d.text((W / 2, 640), "M  U  S  I  C", font=small, anchor="mm", fill=(158, 164, 174))
    d.line([(W / 2 - 190, 700), (W / 2 + 190, 700)], fill=(90, 95, 104), width=3)
    img = grain_vignette(img, 9, grain=7, vig=0.5)
    save(img, "r6-script.jpg", 1240)


def engraved_lozenge():
    W, H = 1520, 720
    plate_mask = Image.new("L", (W, H), 0)
    pts = [(56, 360), (292, 116), (1228, 116), (1464, 360), (1228, 604), (292, 604)]
    ImageDraw.Draw(plate_mask).polygon(pts, fill=255)
    pm = np.asarray(plate_mask, dtype=np.float64) / 255.0
    # dark backdrop
    bg = fbm(W, H, 3, octaves=4, base=5)
    arr = np.zeros((H, W, 3))
    for c, t in enumerate((13, 12, 11)):
        arr[..., c] = t * (0.8 + 0.4 * bg)
    # brushed brass: horizontal streak noise + sheen
    streak = np.asarray(Image.effect_noise((W, H), 30).filter(ImageFilter.GaussianBlur(0.5)), dtype=np.float64)
    pad = np.pad(streak, ((0, 0), (24, 24)), mode="edge")
    from numpy.lib.stride_tricks import sliding_window_view
    streak = sliding_window_view(pad, 49, axis=1).mean(axis=-1)
    sheen = 0.75 + 0.5 * np.exp(-((np.arange(H)[:, None] - 250) ** 2) / (2 * 160 ** 2))
    brass = np.zeros((H, W, 3))
    tone = np.clip(0.78 + (streak - streak.mean()) * 0.004, 0.6, 1.05) * sheen
    for c, t in enumerate((186, 148, 76)):
        brass[..., c] = t * tone
    # engraving mask from the rasterized SVG (black artwork on white)
    em = Image.open(os.path.join(HERE, "m3-mask.png")).convert("L").resize((W, H), Image.LANCZOS)
    eng = 1 - np.asarray(em, dtype=np.float64) / 255.0
    engraved = brass * 0.42
    top_sh = np.clip(np.roll(eng, 3, axis=0) - eng, 0, 1)    # bright lip below cuts
    bot_sh = np.clip(np.roll(eng, -3, axis=0) - eng, 0, 1)   # dark lip above cuts
    plate = brass * (1 - eng[..., None]) + engraved * eng[..., None]
    plate = np.clip(plate + top_sh[..., None] * np.array((70, 58, 30))
                    - bot_sh[..., None] * np.array((60, 52, 34)), 0, 255)
    # plate edge: bevel highlight along the top edges, shadow under plate
    edge_im = plate_mask.filter(ImageFilter.MaxFilter(5))
    drop = np.roll(np.asarray(plate_mask.filter(ImageFilter.GaussianBlur(16)), dtype=np.float64), 12, 0) / 255.0
    out = arr * (1 - drop[..., None] * 0.7)
    out = out * (1 - pm[..., None]) + plate * pm[..., None]
    rim = np.clip(pm - np.roll(pm, 4, axis=0), 0, 1)
    out = np.clip(out + rim[..., None] * np.array((90, 76, 40)), 0, 255)
    img = grain_vignette(np_to_img(out), 13, grain=8, vig=0.45)
    save(img, "r6-lozenge.jpg", 1240)


script_badge()
engraved_lozenge()
print("done")
