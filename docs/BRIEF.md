# Upper Level Music — working brief

Current state and priorities. Conclusions only.

---

## 1. Audience, in priority order

**1. Independent artists funding their own records.** The primary buyer. They
arrive with a problem ("this mix won't sit", "I don't know what this needs"),
not a purchase order, and often cannot name the service they want. The site
must let them describe a symptom and be routed.

**2. Engineers, assistants and students who need training.** The strongest
differentiator and the least served by competitors. Nobody else in reach is
offering the apprenticeship knowledge directly. Currently the thinnest page.

**3. Home and project studio owners with technical problems.** Measurement,
signal flow, gain structure, clocking, treatment plans. Remote-first, since
most of it can be measured and specified at distance.

**4. Whole-room design and build.** Higher-ticket and selective. Taken by
arrangement for the right project. Never a lead offer, never a listed rate.

**Explicitly not chased:** labels; construction management; used-gear resale.
Shop is cables and merch only.

---

## 2. Site intent

**The site's job is to qualify and route, not to describe.** A visitor who
cannot name their problem should still land in the right place.

**Judgment is the product.** The gear list and the rooms are evidence that the
judgment is real. They are not the offer, and they do not sell on their own.

**Control belongs to the person making the art.** Major-label resource and
experience, made available at any stage, without the overhead or the loss of
control that a label deal carries. This is the mission line, and it is the
reason the site exists rather than a marketing frame.

**Remote-first and problem-led.** Columbia is where the work is delivered
from, not what the practice is. Geography is a delivery constraint stated as
fact on Contact and in the footer, never the leading identity.

**Conservative claims.** Every credit reflects an actual studio duty beyond
intern or casual presence. Photographs describe rooms and work, never people.
No photo is placed where it would argue for a service it is not evidence of.

---

## 3. Scaffolding vs finished

### Finished
- **Services** — Process merged in. Structure, copy and rates panel complete.
  *Blocked only on rate confirmation.*
- **Studio** — complete. No open markers.
- **About** — structurally complete; one forward-looking section noted.
- **Type system** — three faces, uniform auxiliary tier, one place setting
  face/weight/tracking. Done and verified.
- **Page-to-page journey** — every page has an exit and a handoff.

### Scaffolding
- **Learn** — formats, session lengths, pricing and audience tracks all
  undefined. Intended to become the home for long-form written explanations.
  *Biggest gap between strategic importance and current state.*
- **Work** — credits and artist roster are unvetted. Two open markers.
- **News** — empty. Cadence and first topics undecided.
- **Contact** — missing phone/text, response time, social links.
- **Home, unit 03** — placeholder awaiting Edward's full account.
- **Shop** — not built. Cables and merch only when it is.
- **Specialists** — not built. Deferred until recruiting starts.
- **Masthead tagline** — slot deliberately empty, unfilled.

### Unresolved page tree
Routes exist that are not in the navigation: `credits`, `reach`,
`who-we-are`. `process` is a redirect to `services`. Decide keep, merge or
remove before the next structural pass.

---

## 4. Audit layers, ranked by decision-relevance

**Tier 1 — blocks publishing.** Factual exposure. Nothing else matters until
these are settled.
1. **Work page credit and roster vetting.** The roster is broad and largely
   unverifiable from public credits. Each name needs its actual involvement
   marked, or removal. This is the only place the site can make a claim that
   is wrong rather than merely unpolished.
2. **Rate confirmation.** Teaching and the technical hourly rates are proposed
   and unconfirmed. Deposit terms, revision policy and what a day rate
   includes are undefined.

**Tier 2 — changes perceived quality everywhere, cheap to fix.**
3. **Photo system.** 41 images render at 19 distinct widths. The width tokens
   are absolute pixels against a fluid column, so they can never be reached.
   All 22 focal-point rules are dead — filename hashing means they never
   match, so every cropped photo is centred regardless of subject. Highest
   ratio of visible improvement to effort on the site.

**Tier 3 — adds capability, sequenced by strategic value.**
4. **Build out Learn.** Largest content hole against the strongest
   differentiator.
5. **Add cases to Work.** Credits prove access; cases prove judgment.
6. **Resolve the page tree.** Orphan routes above.
7. **Reframe About** from chronology toward judgment.
8. **Anti-generic copy filter**, site-wide.

**Tier 4 — triggered, not scheduled.**
9. Shop, when there is stock. Specialists, when recruiting starts.
   Disqualifiers into the contact intake next time that page is touched.

---

## 5. Operational facts

- Production branch is `main`. **Merging to `main` publishes**, live within
  minutes. There is no staging step.
- Non-production branches build with `wrangler versions upload` and produce a
  preview URL only. They do not reach the domain.
- Site content lives only in `site/src/lib/pages/`. Nothing outside `site/` is
  site content.
- Images drop into `site/src/assets/` and are available immediately as
  `{{IMG:filename}}`. No registration step.
- Copy is Edward's. Mechanical fixes are free; wording changes are proposed,
  not made.
