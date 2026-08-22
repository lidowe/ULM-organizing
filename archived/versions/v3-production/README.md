# Upper Level Music v3

Client-facing multi-page static website for Upper Level Music / Edward Lidow.

## Pages
- index.html — artist-first home page
- work.html — selected credits and artist roster
- process.html — client-facing working philosophy
- studio.html — studio positioning and capabilities
- services.html — services and rate ranges
- about.html — Edward Lidow career story
- contact.html — project intake

## Technical notes
Each HTML page contains its own CSS and JavaScript so direct local previews do not lose styling. The site progressively uses same-origin cross-document View Transitions, an accessible native dialog menu, reduced-motion handling, canvas-based procedural hero art, semantic markup, keyboard focus states, and JSON-LD structured data.

The contact form currently drafts an email to edwardlidow@upperlevelmusic.com. Before public launch, connect the form to the chosen hosting/form endpoint if direct server-side submission is preferred.

## Content note
Selected discography role language was aligned to public credit listings reviewed during the build. The larger artist/client roster is based on the supplied artist document and is explicitly labeled as roles varying by project.


## Production structure

Shared visual and interaction code lives in `assets/css/site.css` and `assets/js/site.js`. All pages are real HTML documents and remain fully navigable without JavaScript; JavaScript adds motion, filtering, the dialog menu, and inquiry-email drafting.
