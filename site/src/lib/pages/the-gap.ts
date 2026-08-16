// "The Gap" — the standalone Why This Exists page, distilled from Edward's
// 16 Aug conversation. The publishable thesis only: no names, no grievances.
// The diagrams use his own metaphor — a patchbay normal, broken, then
// patched. All copy is DRAFT in Edward's voice, pending his veto pass.
export default `
<section class="page-hero"><div class="wrap"><div class="eyebrow">Why this exists</div><h1 class="page-title">The Tools Reached Everyone. The Knowledge Didn&rsquo;t.</h1><p class="page-deck">Thirty years inside the industry machine, and a decade beside home studios. This page is about the gap between them &mdash; and the bridge. There are no villains in it.</p></div></section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">01</span><span>How it used to flow</span></div>
    <div class="unit-prose">
      <p>For most of a century, knowledge moved through this trade the way signal moves through a patchbay: <em>normalled</em>. It flowed by default &mdash; engineer to assistant, assistant to the intern holding the coffee &mdash; the way a patchbay passes audio top to bottom until something interrupts it. The rooms were the schools. Nobody called it teaching. It was just how a record got made.</p>
    </div>
    <figure class="gap-diagram reveal">
      <svg viewBox="0 0 720 130" role="img" aria-label="Diagram: knowledge flowing by default from engineer to assistant to intern to the next record, like a normalled patchbay connection">
        <path class="gd-flow" d="M70 48 H650" pathLength="1"/>
        <circle class="gd-node" cx="70" cy="48" r="9"/><circle class="gd-node" cx="263" cy="48" r="9"/><circle class="gd-node" cx="456" cy="48" r="9"/><circle class="gd-node" cx="650" cy="48" r="9"/>
        <text class="gd-label" x="70" y="86" text-anchor="middle">Engineer</text>
        <text class="gd-label" x="263" y="86" text-anchor="middle">Assistant</text>
        <text class="gd-label" x="456" y="86" text-anchor="middle">Intern</text>
        <text class="gd-label" x="650" y="86" text-anchor="middle">The Next Record</text>
      </svg>
      <figcaption>The normal: knowledge flows by default, the way signal does.</figcaption>
    </figure>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">02</span><span>The interruption</span></div>
    <div class="unit-prose">
      <p>Then the tools got small and cheap and went home with everyone. That part was good &mdash; it is the best thing that has happened to music-making in fifty years. But the power moved faster than the knowledge, and the knowledge was not included in the transfer. The big rooms closed quicker than the teaching could find a new path down.</p>
      <p>Into that silence came a different pool: sponsored advice, gear pushed for margin over merit, side-by-side tests hunting a perfect copy of an original that never existed in the first place. Blanket information for a craft where no two projects are the same. Advice that fits every record fits none of them.</p>
      <p class="unit-turn">Nobody chose this. The people it fails are not doing anything wrong.</p>
    </div>
    <figure class="gap-diagram reveal">
      <svg viewBox="0 0 720 130" role="img" aria-label="Diagram: the same chain with the connection broken between assistant and intern - the tools kept moving, the knowledge stopped">
        <path class="gd-flow" d="M70 48 H320" pathLength="1"/>
        <path class="gd-break" d="M348 34 L376 62 M376 34 L348 62"/>
        <path class="gd-faint" d="M404 48 H650"/>
        <circle class="gd-node" cx="70" cy="48" r="9"/><circle class="gd-node" cx="263" cy="48" r="9"/><circle class="gd-node gd-dim" cx="456" cy="48" r="9"/><circle class="gd-node gd-dim" cx="650" cy="48" r="9"/>
        <text class="gd-label" x="70" y="86" text-anchor="middle">Engineer</text>
        <text class="gd-label" x="263" y="86" text-anchor="middle">Assistant</text>
        <text class="gd-label" x="456" y="86" text-anchor="middle">Intern</text>
        <text class="gd-label" x="650" y="86" text-anchor="middle">The Next Record</text>
      </svg>
      <figcaption>The normal, interrupted: the tools kept moving; the knowledge didn&rsquo;t.</figcaption>
    </figure>
  </div>
</section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">03</span><span>What the pool can&rsquo;t teach</span></div>
    <div class="unit-prose">
      <p>Here is what got lost, concretely: <strong>the circuit is a creative decision.</strong> Different circuits enhance different emotions by design. An optical compressor breathes; a FET grabs. Second-order warmth flatters a voice; third-order edge makes a snare spit. Choosing between them is arranging, not shopping &mdash; and no search for the perfect clone will teach it, because even six originals of the same legendary microphone never sounded the same as each other.</p>
      <p>And the craft it serves points the same direction: engineering is taking what is good and making it great &mdash; enhancing, not endlessly fixing. The fix-it-later habit isn&rsquo;t a character flaw in the people who have it. It is what a knowledge pool built from sponsored content teaches by omission.</p>
      <p class="unit-turn">A kid with one honest microphone and a basic interface can out-mix a mid-level studio. They just need the why.</p>
    </div>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">04</span><span>The patch</span></div>
    <div class="unit-prose">
      <p>A broken normal doesn&rsquo;t repair itself. It gets patched &mdash; deliberately, one cable at a time, by someone who knows where the signal needs to go. That is what Upper Level Music is: the patch around the interruption. The industry machine and the home studio are not enemies. They are colleagues separated by a gap neither of them made.</p>
      <p>So we work both sides of it. Records made with major-label depth for people who will never sign one. Teaching that treats your project as the curriculum, because no two are the same. And the long-form knowledge, written down and handed over, the way it used to be handed down.</p>
      <p class="unit-turn">Nobody owns the knowledge. Somebody just has to pass it on.</p>
    </div>
    <figure class="gap-diagram reveal">
      <svg viewBox="0 0 720 130" role="img" aria-label="Diagram: an amber patch cable routed around the break, reconnecting the chain">
        <path class="gd-flow" d="M70 48 H320" pathLength="1"/>
        <path class="gd-break" d="M348 34 L376 62 M376 34 L348 62"/>
        <path class="gd-faint" d="M404 48 H650"/>
        <path class="gd-patch" d="M263 44 C 300 -14, 424 -14, 456 44" pathLength="1"/>
        <path class="gd-flow gd-patched" d="M456 48 H650" pathLength="1"/>
        <circle class="gd-node" cx="70" cy="48" r="9"/><circle class="gd-node" cx="263" cy="48" r="9"/><circle class="gd-node" cx="456" cy="48" r="9"/><circle class="gd-node" cx="650" cy="48" r="9"/>
        <text class="gd-label" x="70" y="86" text-anchor="middle">Engineer</text>
        <text class="gd-label" x="263" y="86" text-anchor="middle">Assistant</text>
        <text class="gd-label" x="456" y="86" text-anchor="middle">Intern</text>
        <text class="gd-label" x="650" y="86" text-anchor="middle">The Next Record</text>
      </svg>
      <figcaption>The patch: deliberate, person to person. That is Upper Level Music.</figcaption>
    </figure>
  </div>
</section>

<section class="page-next">
  <div class="wrap next-grid">
    <a class="next-card" href="/education">
      <span class="next-kicker">Next</span>
      <h3>Where the passing-on happens.</h3>
      <p>One-on-one, pitched at your project, not a curriculum&rsquo;s idea of it.</p>
    </a>
    <div class="next-cta">
      <p>Or bring the record the gap has been holding back.</p>
      <a class="btn primary" href="/contact">Work With Us Now</a>
    </div>
  </div>
</section>
`;
