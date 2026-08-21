# Website Strategy and Architecture Notes

> **Accuracy review, 2026-08-21.** The framework in this document holds up, and
> most of Part II is already implemented on the live TanStack site — the home
> page runs orient → problem routing → category stance → evidence → CTA today.
> What was stale has been corrected in place, each marked **[Corrected]**:
>
> 1. **The audience matrix (§4)** did not match the settled audience list in
>    `docs/BRIEF.md` — it had no priority order, included audiences that are
>    not chased (institutions, labels), and omitted the settled ranking:
>    independent artists first, then training, then studio technical work,
>    then whole-room design by arrangement.
> 2. **The information architecture (§7)** proposed a hypothetical nav. The
>    actual nav is settled: Services, Work, Learn, Studio, About, with Contact
>    as the persistent CTA. "How I Work" (Process) was deliberately merged
>    into Services; the old URLs 301-redirect.
> 3. **The page audit list (§11)** named pages that do not exist (FAQ,
>    separate per-service pages, Team) and missed ones that do (Studio, Work,
>    News). Replaced with the real page tree.
> 4. **"Why It Exists" (Part II)** stated one thesis where the site settled
>    two: the mission line is *control back in the hands of the person making
>    the art*; *access outpaced understanding* is the education thesis ("The
>    tools reached everyone. The training did not." — the Learn page).
> 5. Added the **standing constraints** (§2a) that bound every choice in this
>    document but were absent from it: copy ownership, conservative credits,
>    caption policy, and the not-chased list.

## Purpose of This Document

This document expands a basic website-change outline into a professional working framework. It also addresses a more unusual strategic problem: the business has multiple, sometimes contradictory objectives and is not merely competing within an established category, but attempting to create a new lane.

The core sequence is:

> **Business model and category definition → Strategy → Audience → Messaging → Evidence → Information architecture → User journeys → Pages → Content → Design system → UX → Conversion → Technical implementation → SEO → Analytics → QA and change management**

The original outline—`Home → hierarchy / layout / images / font / copy`—sits in the middle of this process. The layers above it determine whether those page-level choices are correct.

---

# Part I — Professional Website-Change Framework

## 1. Business Model and Category Definition

For a category-creating business, this layer must come before conventional site strategy.

- What existing category does the visitor initially assume the business belongs to?
- What categories do competitors occupy?
- What assumptions come with those categories?
- Which assumptions are wrong for this business model?
- What does the business combine that the market normally separates?
- What does it refuse to separate?
- What common principle connects all services?
- What problem does the new category solve?
- What familiar language can explain it without flattening it?
- How much category education is necessary before someone can buy?
- What must a visitor understand immediately?
- What can be learned later?
- What can remain implicit until deeper engagement?

## 2. Site Strategy

- Primary business objective
- Secondary objectives
- Desired visitor action
- Target client groups
- Priority of those client groups
- Client intent on arrival
- Client objections and uncertainties
- What must be understood in the first 5–10 seconds
- Core value proposition
- Differentiation
- Credibility and proof strategy
- Conversion strategy
- Geographic versus remote positioning

## 2a. Standing Constraints [Corrected — added]

These are settled decisions (see `CLAUDE.md` and `docs/BRIEF.md`) that bound
everything below:

- **The copy is Edward's.** Wording changes are proposed, not made. Mechanical
  fixes (typos, entities, markup) are free.
- **Conservative credits.** Every listed credit reflects an actual studio duty
  beyond intern or casual presence. Never upgraded, never implied by placement.
- **Captions describe the room and the work, never the people.** No photo is
  placed where it argues for a service it is not evidence of.
- **Remote-first.** Columbia, SC is where the work is delivered from, stated
  as fact on Contact and in the footer, never the leading identity.
- **Not chased:** labels, construction management, used-gear resale. Shop, if
  built, is cables and merch only.

## 3. Business Objectives and Their Tensions

Do not force contradictory objectives into one fixed priority order. Record the tension explicitly:

- Objective A
- Objective B
- Tension between them
- Which objective wins at 5 seconds
- Which wins at 30 seconds
- Which wins at 3 minutes
- Which wins at inquiry stage

The priority order should change with visitor state:

- **First contact:** orient.
- **Early engagement:** differentiate.
- **Mid-engagement:** reframe the problem.
- **Deep engagement:** establish authority.
- **Commercial stage:** convert the appropriate visitor.

## 4. Audience Architecture

Maintain an audience matrix rather than relying on one vague idea of “the client.”

**[Corrected]** The original matrix here had no priority order and included
audiences the practice does not chase (institutions, labels, non-music
clients as a target group). The settled list, in priority order
(`docs/BRIEF.md` §1):

| # | Audience | What they want | What worries them | What proves competence |
|---|---|---|---|---|
| 1 | Independent artists funding their own records | A better record; to be routed from a symptom, not a service name | Cost, chemistry, losing control of the record | Credits, experience, the mission being real |
| 2 | Engineers, assistants and students who need training | The apprenticeship knowledge that no longer exists as a career path | Being talked down to | Technical specificity, teaching history |
| 3 | Home and project studio owners | A system and room that work | Buying the wrong gear | Diagnosis first, measurement, practical results |
| 4 | Whole-room design and build (by arrangement only) | A specialist who has built rooms | Risk | Bay 8, the build work; never a lead offer, never a listed rate |

**Explicitly not chased:** labels, construction management, used-gear resale.

This matrix should influence hierarchy, copy, imagery, and navigation—not merely wording.

For this business, customer identity may be too rigid. A single person can be an artist, engineer, home-studio owner, and learner at once. Problem-state routing may work better:

- I need to make something better.
- I need to understand what is wrong.
- I need to build or improve a system.
- I need to learn how this works.
- I need another experienced perspective.

## 5. Messaging Architecture

Define the hierarchy before writing individual paragraphs:

- Master proposition
- Supporting proposition
- Three to five principal differentiators
- Proof for each differentiator
- Audience-specific proposition
- Service-specific proposition
- Supporting claims
- Calls to action

Test every piece of copy against this structure.

## 6. Argument and Evidence Structure

The site is not only advertising services. It is also making a substantive argument about audio practice, expertise, access versus understanding, and why this approach exists. That argument needs its own architecture rather than being scattered across pages.

Distinguish among:

- Assertion
- Explanation
- Demonstration
- Evidence
- Third-party validation

These are not psychologically equivalent.

Possible credibility elements include:

- Career history
- Credits
- Named affiliations
- Testimonials and peer statements
- Photographs
- Equipment and facility evidence
- Technical demonstrations
- Case studies
- Educational material
- Published technical arguments
- Before-and-after examples, where permissible
- External verification
- Collaborator credentials

## 7. Information Architecture

- Overall hierarchy
- Navigation hierarchy
- Page hierarchy
- Section hierarchy within pages
- What deserves its own page
- What should be consolidated
- What should be removed
- Cross-linking between services and topics
- Footer architecture
- Mobile navigation
- Breadcrumbs and orientation, where appropriate
- Search, filtering, or category systems, if needed

Keep navigation legible even when the business concept is unusual.

**[Corrected]** The structure is no longer hypothetical; it is settled and
live:

- Home
- Services — with Process ("How I Work") deliberately merged in, so prices
  sit behind the reasoning for them
- Work
- Learn (`/education`) — the intended home for long-form written material
- Studio
- About
- Contact — persistent CTA rather than a nav destination
- News — reachable, not in the primary nav

Legacy URLs (`/process`, `/credits`, `/reach`, `/who-we-are`) 301-redirect to
their new homes.

The innovation can live in the content architecture. Visitors should not have to learn both what the business is and how to operate the website at the same time.

## 8. User Journeys

Map paths rather than thinking only page by page. Examples:

- Artist → understands the offer → sees proof → explores recording or mixing → inquiry
- Engineer → recognizes technical competence → explores consulting or services → inquiry
- Home-studio owner → identifies a problem → understands consulting → intake
- Institutional or business client → bypasses artist-centric messaging → finds applicable services → verifies credibility → contact
- Returning referral → immediately finds the person, service, or contact route

For each journey, define:

- Entry point
- First question
- Next logical question
- Required proof
- Appropriate CTA
- Exit and failure points

## 9. Content Architecture

Content architecture is distinct from copywriting. Inventory and classify everything the site may communicate:

- Who you are
- What you do
- Who it is for
- Problems you solve
- How you work
- Why the approach differs
- Technical capability
- Creative capability
- Experience and credentials
- Facilities and equipment
- Collaborators
- Geographic reach and remote capability
- Educational ability
- Philosophy
- Evidence and testimonials
- Case studies
- Rates or engagement model
- Process
- FAQs

Then decide where each item belongs and how many times it is allowed to appear. This prevents multiple sections from making essentially the same argument in different language.

## 10. Global Design System

- Brand identity and visual tone
- Color system
- Typography
  - Display type
  - Headings
  - Body copy
  - Labels
  - Technical or data text
- Type scale
- Spacing system
- Grid
- Maximum content widths
- Alignment rules
- Corner radii, borders, and shadows
- Iconography
- Illustration style
- Photography style
- Motion and animation language
- Button hierarchy
- Link styling
- Forms
- Cards
- Reusable components
- Desktop, tablet, and mobile behavior

## 11. Page-by-Page Audit

Repeat the following audit for every major page.

### Purpose

- What is the page supposed to accomplish?
- Who is the primary visitor?
- Who are the secondary visitors?
- What is the desired next action?

### Hierarchy

- Hero
- Immediate supporting proposition
- Audience or problem routing
- Differentiation
- Evidence
- Services
- Process
- Credentials
- Philosophy
- Testimonials or third-party proof
- CTA
- Footer

### Layout

- Section sequence
- Width and density
- Whitespace
- Visual rhythm
- Alignment
- Scroll length
- Desktop and mobile restructuring

### Copy

- Headline and subhead
- Section headings
- Body copy
- CTA language
- Labels and microcopy
- Redundancy
- Jargon level
- Tone by audience
- Claims that require evidence

### Images and Visual Media

- Hero imagery
- Studio photography
- Equipment imagery
- Portraits
- Diagrams and explanatory graphics
- Animation and SVGs
- Decorative versus informational imagery
- Image sequence
- Crops and aspect ratios
- Mobile treatment
- Captions

### Typography

- Hierarchy
- Readability
- Line length and spacing
- Weights
- Contrast
- Responsive sizing

### Interaction

- Hover and focus states
- Scroll behavior
- Motion
- Expandable sections
- Navigation behavior
- Buttons and links

### Conversion

- Primary and secondary CTAs
- CTA timing
- Form length
- Contact friction
- Qualification before inquiry
- What happens after clicking

Apply this audit to the pages that actually exist. **[Corrected]** — the
original list assumed separate per-service pages, a FAQ, and a Team page,
none of which exist; services are one consolidated page by design:

- Home / landing
- Services (consolidated: process, modes of working, all service rows, rates)
- Work (credits, artists, studios; the proof layer)
- Learn (`/education`; the largest gap between strategic importance and current state)
- Studio (rooms, equipment, acoustics)
- About (the person, the industry argument, why this exists)
- Contact and intake
- News (empty; cadence undecided)

## 12. UX and Usability Audit

- Can users tell what the business does?
- Can they identify whether it serves someone like them?
- Can they find the appropriate service?
- Is navigation terminology obvious?
- Does anything depend on insider knowledge?
- Is there too much reading before orientation?
- Are there dead ends?
- Are CTAs clear?
- Are important elements buried?
- Does mobile preserve the intended hierarchy?
- Is the site accessible?
  - Contrast
  - Keyboard behavior
  - Alternative text
  - Readable type
  - Touch-target sizes

## 13. Conversion Architecture

- Primary conversion action
- Secondary conversion actions
- CTA placement and timing
- High-intent shortcuts
- Low-pressure persistent CTA
- Inquiry qualification
- Form length and friction
- Post-submission experience
- Referral visitor path

## 14. Technical and Performance Layer

- Responsive behavior
- Page speed
- Image optimization
- Video loading
- Animation performance
- Cumulative layout shift
- Metadata
- Structured data
- Sitemap
- Redirects
- Canonical URLs
- Analytics
- Conversion events
- Form tracking
- Accessibility
- Browser compatibility

## 15. SEO and Discoverability

- Search intent
- Page and topic targeting
- Page titles
- Meta descriptions
- H1 and H2 structure
- Internal linking
- Local relevance
- Geographic pages, if justified
- Service pages
- Schema
- Index and no-index decisions
- Duplicate copy
- Semantic coverage

## 16. Analytics and Measurement

### Before the Change

- Current traffic
- Entry pages
- Referral sources
- Device mix
- Scroll depth
- CTA clicks
- Form starts and completions
- Abandonment
- Geographic distribution

### After the Change

- Conversion rate
- CTA engagement
- Movement through service pages
- Qualified inquiries
- Time to conversion
- Audience and path behavior

## 17. Change Management

Every proposed change should record:

- Page
- Section or component
- Current problem
- Evidence or reason
- Proposed change
- Intended effect
- Priority
- Dependency
- Status
- Desktop and mobile applicability

Example:

> **Home → Hero → Copy**  
> Problem: positioning is too abstract.  
> Change: establish service and relevance before expanding into philosophy.  
> Objective: improve immediate comprehension.  
> Priority: P0.

This makes the document actionable rather than a collection of opinions.

---

# Part II — Dual Objectives and Category Creation

## The Strategic Problem

If the business deliberately creates a new category, the conventional pattern—state the service immediately, prove it, and present a CTA—can work against it.

The problem is not simply “too many objectives.” The objectives operate on different time horizons and at different levels of abstraction:

1. **Commercial objective:** generate qualified work.
2. **Comprehension objective:** teach the visitor what kind of business this is.
3. **Category-creation objective:** change the visitor’s model of what the problem and solution are.

These objectives can conflict. Explaining the new category thoroughly improves understanding but delays the offer. Showing familiar services immediately improves orientation but can make the business look like an ordinary studio, consultant, or educator before its difference is understood.

The solution is not to choose one objective. The site should let them run in parallel.

## Recommended Experience Sequence

> **Immediate orientation → Intriguing contradiction → Recognizable services → New framework → Evidence → Deeper argument → Conversion**

This is neither a conventional commercial site nor a manifesto site.

**[Corrected — status note]** The current home page already runs this
sequence: hero (orientation) → mission band (the contradiction) → "What Is
Getting in the Way?" (problem-state routing) → "What this is" (the category
stance) → "Why this exists" (the argument, with the full account deferred to
its own future page) → "Every role" plus the credits ribbon (evidence) →
"Tell Me What You're Working On" (conversion). This section is a record of
the reasoning behind that page, not a to-do list.

The opening screen does not need to explain the whole philosophy. It only needs to establish enough coordinates that the visitor is not lost:

### What This Is

Audio work, systems, production, technical problem-solving, and education.

### Why It Exists

**[Corrected]** The original draft put one thesis here: *access to tools has
increased faster than understanding.* The site settled on two, at different
depths, both in Edward's words:

- **The mission line (home page):** control back in the hands of the person
  making the art — major-label quality and talent for anyone, anywhere,
  without the overhead.
- **The education thesis (Learn page):** "The tools reached everyone. The
  training did not." This is the access-versus-understanding argument, and it
  lives with the teaching offer rather than in the hero.

### What Makes It Different

The business works across the artificial boundaries between creative, technical, educational, and systems problems.

The visitor now has a map without being forced through the complete argument.

## Two Payloads, Delivered Together

The payload is not necessarily the list of services. The deeper payload may be the realization:

> “The problem I thought I had belongs to a larger system, and this person works on that system rather than only selling the conventional service attached to it.”

If that realization is central to the hiring decision, hiding it halfway down the page is also a mistake. The homepage therefore needs to deliver two payloads almost simultaneously:

- **Concrete payload:** Here are the kinds of things I can do for you.
- **Conceptual payload:** Here is why those things belong together and why this business exists.

## Progressive Disclosure

Do not require every visitor to read the entire thesis before accessing the business. Provide multiple depths:

- **5 seconds:** What is this, and is it relevant to me?
- **20 seconds:** Why is this not just another studio, consultant, teacher, or technical service?
- **1–2 minutes:** What is the model behind it?
- **5–10 minutes:** Show me the evidence, philosophy, examples, methodology, and technical depth.

Also provide a separate high-intent route:

> **I already know and trust this person → Show me services or contact immediately.**

The navigation and hierarchy must work for both the skeptical first-time visitor and the high-intent referral.

## Contradictory Objectives as Design Requirements

| Objective | Risk if overemphasized | Architectural response |
|---|---|---|
| Explain the new category | Too much exposition | Layer the explanation |
| Generate inquiries | Premature sales language | Use a persistent but low-pressure CTA |
| Demonstrate technical depth | Alienates a nontechnical visitor | Provide optional deep-dive branches |
| Demonstrate creative sensitivity | Technical audiences may perceive vagueness | Pair claims with concrete examples |
| Serve multiple client types | Messaging becomes generic | Route by problem rather than identity |
| Challenge industry assumptions | The tone becomes combative | Demonstrate rather than attack |
| Be unconventional | The visitor becomes disoriented | Keep navigation conventional |
| Show breadth | The business appears unfocused | Unify services under one operating model |

The conceptual model can be unusual while the interface remains highly legible.

## The Category Thesis

The business may not create a new lane by inventing a completely novel service. It may create one by removing boundaries between services the existing market treats as separate.

The industry typically organizes expertise by service:

- Recording
- Mixing
- Production
- Studio design
- Consulting
- Education

This business can instead organize work by problem:

> **What is preventing the intended result?**

The appropriate combination of creative, technical, educational, or system-level work follows from the diagnosis.

That is the category thesis. It explains breadth without making it appear accidental.

## Working Principle

The website should make the unusual business proposition understandable without charging the visitor an “explanation tax” before they know whether it is relevant.

In practice:

- Orient before elaborating.
- Show recognizable services without allowing them to define the whole business.
- Introduce the category argument early, but in layers.
- Route visitors by their problem state when identities overlap.
- Pair conceptual claims with concrete evidence.
- Keep navigation familiar.
- Make deeper technical and philosophical material optional but accessible.
- Maintain a direct path to services and contact for high-intent visitors.

---

# Recommended Master Working Tree

1. Business model and category definition
2. Business objectives and tensions
3. Site strategy
4. Audience architecture and problem-state routing
5. Messaging architecture
6. Argument and evidence structure
7. Information architecture
8. User journeys
9. Content architecture
10. Global design system
11. Page-by-page audits
12. UX and accessibility
13. Conversion architecture
14. Technical implementation and performance
15. SEO and discoverability
16. Analytics and measurement
17. QA and change management

This structure can serve as the master outline for planning, auditing, redesigning, and implementing the website.
