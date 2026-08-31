#!/usr/bin/env python3
"""Round six: custom-drawn ULM monogram, roundel, and lozenge plate masters.

The letterforms are designed geometry, not typed type: cap height 240,
stroke 58, one chamfer quirk on the L, and a fader cap floating high in the
U's counter - the only audio tell, hidden in the letter itself.
"""
import math
import os

HERE = os.path.dirname(os.path.abspath(__file__))
CV = HERE
LOGO = HERE

INK = "#14130f"
BONE = "#ece8dd"
CREAM = "#f2eee6"
NIGHT = "#101014"
RED = "#b0492e"


def monogram_paths(cap_fill=None):
    """Return list of (d, fill_key) for the ULM letterforms, 642x240 box."""
    u = ("M0,0 L0,145 A95,95 0 0 0 190,145 L190,0 L132,0 L132,145 "
         "A37,37 0 0 1 58,145 L58,0 Z")
    cap = "M71,22 L119,22 A8,8 0 0 1 127,30 L127,44 A8,8 0 0 1 119,52 L71,52 A8,8 0 0 1 63,44 L63,30 A8,8 0 0 1 71,22 Z"
    l = "M226,0 L284,0 L284,182 L362,182 L376,196 L376,240 L226,240 Z"
    m = ("M412,240 L412,0 L488,0 L527,118 L566,0 L642,0 L642,240 L584,240 "
         "L584,84 L545,200 L509,200 L470,84 L470,240 Z")
    return [(u, "ink"), (cap, cap_fill or "ink"), (l, "ink"), (m, "ink")]


def monogram_group(scale, tx, ty, ink, cap_color=None):
    parts = []
    for d, key in monogram_paths("cap" if cap_color else None):
        fill = cap_color if key == "cap" and cap_color else ink
        parts.append(f'<path d="{d}" fill="{fill}"/>')
    return (f'<g transform="translate({tx},{ty}) scale({scale})">'
            + "".join(parts) + "</g>")


def write(name, w, h, body, bg=None):
    rect = f'<rect width="{w}" height="{h}" fill="{bg}"/>' if bg else ""
    doc = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}">'
           f"{rect}{body}</svg>")
    for dest in (HERE,):
        with open(os.path.join(dest, name), "w") as f:
            f.write(doc)
    print("wrote", name)


# plain marks
write("m1-monogram.svg", 760, 340, monogram_group(0.9, 91, 62, INK), bg=CREAM)
write("m1-monogram-dark.svg", 760, 340, monogram_group(0.9, 91, 62, BONE), bg=NIGHT)
write("m1-monogram-redcap.svg", 760, 340, monogram_group(0.9, 91, 62, INK, cap_color=RED), bg=CREAM)

# roundel with calibration ticks
body = []
cx = cy = 300
body.append(f'<circle cx="{cx}" cy="{cy}" r="284" fill="none" stroke="{BONE}" stroke-width="11"/>')
body.append(f'<circle cx="{cx}" cy="{cy}" r="258" fill="none" stroke="{BONE}" stroke-width="3"/>')
for i in range(48):
    a = math.tau * i / 48
    major = i % 12 == 0
    r0, r1, sw = (236, 256, 5) if major else (245, 256, 2)
    body.append(f'<line x1="{cx + r0 * math.cos(a):.1f}" y1="{cy + r0 * math.sin(a):.1f}" '
                f'x2="{cx + r1 * math.cos(a):.1f}" y2="{cy + r1 * math.sin(a):.1f}" '
                f'stroke="{BONE}" stroke-width="{sw}"/>')
sc = 380 / 642
body.append(monogram_group(sc, cx - 190, cy - 240 * sc / 2 - 14, BONE))
body.append(f'<rect x="{cx-95}" y="{cy+92}" width="190" height="4" fill="{BONE}"/>')
write("m2-roundel-dark.svg", 600, 600, "".join(body), bg=NIGHT)
write("m2-roundel.svg", 600, 600, "".join(body).replace(BONE, INK), bg=CREAM)

# lozenge instrument plate
def lozenge(ink, bg):
    b = []
    pts = [(28, 180), (146, 58), (614, 58), (732, 180), (614, 302), (146, 302)]
    d = "M" + " L".join(f"{x},{y}" for x, y in pts) + " Z"
    b.append(f'<path d="{d}" fill="none" stroke="{ink}" stroke-width="10"/>')
    pts2 = [(52, 180), (156, 76), (604, 76), (708, 180), (604, 284), (156, 284)]
    d2 = "M" + " L".join(f"{x},{y}" for x, y in pts2) + " Z"
    b.append(f'<path d="{d2}" fill="none" stroke="{ink}" stroke-width="3"/>')
    sc = 400 / 642
    b.append(monogram_group(sc, 380 - 200, 180 - 240 * sc / 2, ink))
    for x in (76, 684):
        b.append(f'<line x1="{x-14}" y1="180" x2="{x+14}" y2="180" stroke="{ink}" stroke-width="4"/>')
    return "".join(b)

write("m3-lozenge.svg", 760, 360, lozenge(INK, CREAM), bg=CREAM)
write("m3-lozenge-dark.svg", 760, 360, lozenge(BONE, NIGHT), bg=NIGHT)

# high-res letter mask for the engraver (letters + keylines only, black on white)
mask = lozenge("#000000", "#ffffff")
doc = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360">'
       f'<rect width="760" height="360" fill="#ffffff"/>{mask}</svg>')
with open(os.path.join(HERE, "m3-mask.svg"), "w") as f:
    f.write(doc)
print("wrote m3-mask.svg")
print("done")
