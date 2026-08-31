#!/usr/bin/env python3
"""Flat vector marks for the round-two 'upper level, literally' concepts."""
import math
import os
import random

HERE = os.path.dirname(os.path.abspath(__file__))
CV = HERE
LOGO = HERE

INK = "#0d0b09"
PAPER = "#eceae5"
EMBER = "#ff7a1a"
EMBER_HI = "#ffb347"
GREY = "#33373e"
GREY_D = "#282b31"


def write(name, w, h, body, bg=INK):
    rect = f'<rect width="{w}" height="{h}" fill="{bg}"/>' if bg else ""
    doc = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}">'
           f"{rect}{body}</svg>")
    for dest in (HERE,):
        with open(os.path.join(dest, name), "w") as f:
            f.write(doc)
    print("wrote", name)


def rough_quad(x0, y0, x1, y1, seed, taper=4):
    rng = random.Random(seed)
    j = lambda v, a=3: v + rng.uniform(-a, a)
    return (f"M{j(x0+taper)},{j(y0)} L{j(x1-taper)},{j(y0)} "
            f"L{j(x1)},{j(y1)} L{j(x0)},{j(y1)} Z")


# trilithon: two uprights, a lintel on the upper level, light in the joint
body = []
body.append(f'<path d="{rough_quad(150, 90, 550, 168, 1)}" fill="{GREY}"/>')
body.append(f'<path d="{rough_quad(185, 196, 285, 480, 2)}" fill="{GREY_D}"/>')
body.append(f'<path d="{rough_quad(415, 196, 515, 480, 3)}" fill="{GREY}"/>')
body.append(f'<rect x="150" y="176" width="400" height="8" rx="4" fill="{EMBER_HI}" opacity="0.35"/>')
body.append(f'<rect x="150" y="178" width="400" height="4" rx="2" fill="{EMBER}"/>')
body.append(f'<rect x="120" y="482" width="460" height="2" fill="{PAPER}" opacity="0.25"/>')
write("t-trilithon-flat.svg", 700, 540, "".join(body))

# monolith with the molten seam: the upper section held above the light
body = []
body.append(f'<path d="{rough_quad(210, 60, 350, 250, 11)}" fill="{GREY}"/>')
body.append(f'<path d="{rough_quad(206, 296, 354, 620, 12)}" fill="{GREY_D}"/>')
body.append(f'<rect x="206" y="264" width="146" height="16" rx="8" fill="{EMBER_HI}" opacity="0.35"/>')
body.append(f'<rect x="206" y="268" width="146" height="7" rx="3.5" fill="{EMBER}"/>')
body.append(f'<rect x="160" y="622" width="240" height="2" fill="{PAPER}" opacity="0.25"/>')
write("t-monolith-flat.svg", 560, 680, "".join(body))

# meter: flat arc, red past zero, needle pinned
cx, cy, R = 350, 430, 300
a0, a1 = math.radians(-142), math.radians(-38)
zero = math.radians(-53)
body = []
for i in range(8):
    a = a0 + (a1 - a0) * i / 7
    hot = a >= zero - 1e-6
    col = EMBER if hot else PAPER
    x0, y0 = cx + (R - 26) * math.cos(a), cy + (R - 26) * math.sin(a)
    x1, y1 = cx + R * math.cos(a), cy + R * math.sin(a)
    body.append(f'<line x1="{x0:.0f}" y1="{y0:.0f}" x2="{x1:.0f}" y2="{y1:.0f}" '
                f'stroke="{col}" stroke-width="{6 if i in (0, 6) else 4}"/>')
steps = 20
arc = []
for s in range(steps + 1):
    a = zero + (a1 - zero) * s / steps
    arc.append(f"{cx + (R + 18) * math.cos(a):.0f},{cy + (R + 18) * math.sin(a):.0f}")
body.append(f'<polyline points="{" ".join(arc)}" fill="none" stroke="{EMBER}" stroke-width="9"/>')
na = math.radians(-46)
body.append(f'<line x1="{cx}" y1="{cy}" x2="{cx + (R - 12) * math.cos(na):.0f}" '
            f'y2="{cy + (R - 12) * math.sin(na):.0f}" stroke="{PAPER}" stroke-width="7"/>')
body.append(f'<circle cx="{cx}" cy="{cy}" r="16" fill="{PAPER}"/>')
write("t-meter-flat.svg", 700, 500, "".join(body))

# noise floor: hiss comb below, one clean line above
rng = random.Random(9)
body = []
for x in range(60, 640, 7):
    hgt = min(56, abs(rng.gauss(0, 26)) + 6)
    body.append(f'<line x1="{x}" y1="{330 - hgt:.0f}" x2="{x}" y2="330" '
                f'stroke="{PAPER}" stroke-width="3" opacity="{0.35 + rng.random() * 0.4:.2f}"/>')
pts = []
for x in range(60, 641, 10):
    t = (x - 60) / 580
    y = 150 - 70 * math.sin(t * math.pi) * (0.6 + 0.4 * math.sin(t * 9))
    pts.append(f"{x},{y:.0f}")
body.append(f'<polyline points="{" ".join(pts)}" fill="none" stroke="{EMBER}" '
            f'stroke-width="5" stroke-linecap="round"/>')
body.append(f'<rect x="60" y="330" width="580" height="2" fill="{PAPER}" opacity="0.3"/>')
write("t-noisefloor-flat.svg", 700, 400, "".join(body))
print("done")
