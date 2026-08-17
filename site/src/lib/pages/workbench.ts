// The Workbench: the studio's own paperwork, playable. Two live instruments
// (ULM001 impedance & gain, ULM007 find the hum) plus the catalogue index.
// The tools' logic and data live in components/site/workbench-tools.ts.
// All copy is draft in Edward's direction, pending his veto pass; the hum
// tree's diagnoses are adapted from his Wiring Bible §13 and carry a
// draft stamp until he has bench-checked the phrasing.
export default `
<section class="page-hero">
  <div class="wrap">
    <span class="eyebrow">ULM &middot; The Workbench</span>
    <h1 class="page-title display">Tools, Not Content.</h1>
    <p class="page-deck">Working instruments from this studio&rsquo;s own paperwork, free to use, nothing collected. The math runs in your browser, and the answers are the same ones used in this room.</p>
    <p class="page-deck page-deck-second">Nothing here is sponsored, and nothing here is trying to sell you the next purchase. Where the physics runs out, the tool says so &mdash; because past that line, the answer isn&rsquo;t a calculation. It&rsquo;s a session.</p>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label reveal"><span class="unit-no">ULM001</span><span>Impedance &amp; gain</span><span class="unit-note">engine: Studio Virtual</span></div>
    <h2 class="unit-title">Will That Mic Like That Preamp?</h2>
    <div class="prose-noted">
      <div class="unit-prose">
        <p>Every microphone meets every preamp at a junction, and the junction has an opinion. A preamp that loads a microphone&rsquo;s frequency-dependent impedance differently at different frequencies is applying an EQ curve before the signal reaches the gain stage &mdash; before you have touched a single knob. Most of the time the bridge is generous and nothing happens. Sometimes it rolls off the top, damps the transients, or starves a ribbon right at its resonance.</p>
        <p>Pick a pairing. The tool reports the bridging ratio, what it does to the sound, and whether the preamp has the gain the mic actually asks for. The microphones and preamps are the ones racked in this studio, plus a typical interface channel so you can test the room you are actually in.</p>
      </div>
      <aside class="margin-notes" aria-label="Bench notes">
        <p class="mnote">Ratios under 10:1 start to color. Under 3:1 they start to load. Ribbons are checked at their resonance peak, not their nominal number &mdash; that is where they get hurt.</p>
        <p class="mnote">Gain demand assumes a quiet source. Loud sources forgive; whispers don&rsquo;t.</p>
      </aside>
    </div>
    <div class="tool" data-imp-tool>
      <div class="tool-io">
        <label class="tool-field"><span class="tool-label">Microphone</span><select data-imp-mic aria-label="Choose a microphone"></select></label>
        <span class="tool-arrow" aria-hidden="true">&rarr;</span>
        <label class="tool-field"><span class="tool-label">Preamp</span><select data-imp-pre aria-label="Choose a preamp"></select></label>
      </div>
      <div class="tool-readout" data-imp-out aria-live="polite"></div>
      <div class="tool-foot"><p>The numbers are physics and they are dependable. Which coloration the song wants doesn&rsquo;t compute. That part is the session.</p></div>
    </div>
  </div>
</section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label reveal"><span class="unit-no">ULM007</span><span>Find the hum</span><span class="unit-note">draft &middot; pending bench check</span></div>
    <h2 class="unit-title">Find The Hum.</h2>
    <div class="unit-prose">
      <p>Every room has one eventually. The internet&rsquo;s answer is a page of eleven possible causes, which is the same as no answer. A bench doesn&rsquo;t work that way: it listens first, tests second, and each test rules half the world out. This is that walk, the one this studio&rsquo;s own troubleshooting guide runs &mdash; no gear to buy at the end of it.</p>
    </div>
    <div class="tool hum" data-hum-tree></div>
    <div class="tool-under"><p>Stuck between two branches, or the tree ended without your answer? Send a ten-second phone recording of the noise. A question with no project attached is a normal use of this site.</p></div>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label reveal"><span class="unit-no">index</span><span>The catalogue</span><span class="unit-note">few and finished</span></div>
    <h2 class="unit-title">The Rest Of The Bench.</h2>
  </div>
  <div class="wrap rack-rows">
    <a class="rack-row" href="/the-gap"><span class="no">ULM</span><h3>The Gap</h3><p>How the handoff between the industry and the home studio broke, and the patch around the interruption.</p><span class="dest">&rarr; essay</span></a>
    <a class="rack-row" href="/describing-sound"><span class="no">ULM</span><h3>Describing Sound</h3><p>You don&rsquo;t need the technical words. Sound is described in borrowed ones, and translating them is the job.</p><span class="dest">&rarr; essay</span></a>
    <a class="rack-row" href="/pre-production"><span class="no">ULM</span><h3>A Chance To Be Heard</h3><p>Why every project here starts with a conversation instead of a microphone.</p><span class="dest">&rarr; essay</span></a>
  </div>
  <div class="wrap router-note">
    <p>On the bench next: where noise becomes permanent (the conversion boundary), and seven ways to turn it down (compression as circuit and emotion). Entries publish when they are finished, not on a schedule.</p>
  </div>
</section>

<section class="cta-section">
  <div class="wrap cta-inner">
    <div class="reveal">
      <span class="cta-dot" aria-hidden="true"></span>
      <h2>The Bench Is Open.</h2>
      <p>If a tool told you something is wrong in your room and you want a second set of ears on it, send it over &mdash; the recording, the question, the photo of the back of the rack. It comes to me, Edward, and I answer everything.</p>
    </div>
    <div class="cta-doors reveal">
      <a class="btn primary" href="/contact"><span class="rec-dot" aria-hidden="true"></span>Send Me The Song</a>
      <p class="cta-alt">Or keep using the tools &mdash; they stay free either way.</p>
    </div>
  </div>
</section>

<div class="sheet-rev"><div class="wrap"><span>Workbench &middot; Rev. 2026-08-17</span><span>Maintained by Edward Lidow</span></div></div>
`;
