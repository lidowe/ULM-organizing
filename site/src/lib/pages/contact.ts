export default `
<section class="page-hero"><div class="wrap"><div class="eyebrow">Start a project</div><h1 class="page-title">Tell me what you&rsquo;re working on.</h1><p class="page-deck">A record, a voice, a mix, a room, or learning to do it yourself. You don&rsquo;t need to know which one it is, or what it&rsquo;s called.</p></div></section>
<section class="section">
  <div class="wrap contact-grid">
    <aside class="contact-side reveal"><div class="kicker">Upper Level Music</div><h2>Start with the problem, not the booking language.</h2><p>A rough mix, a voice memo, a photo of the room, or a few sentences is plenty. The questions below just give me enough to answer properly instead of guessing.</p><div class="contact-direct"><a href="mailto:edwardlidow@upperlevelmusic.com">edwardlidow@upperlevelmusic.com</a><br>Columbia, South Carolina<br>By appointment &middot; Remote work available</div><p class="contact-aside-note">Not a project? Questions, press, or just talking shop, the same address works.</p><div class="needs-content"><strong>Details needed</strong>Add a phone or text number, response time, and social links.</div></aside>
    <form class="form reveal" data-project-form>
      <div class="form-row"><div class="field"><label for="name">Name *</label><input id="name" name="name" required autocomplete="name"></div><div class="field"><label for="email">Email *</label><input id="email" name="email" type="email" required autocomplete="email"></div></div>
      <div class="field"><label for="working">What are you working on? *</label><input id="working" name="working" required placeholder="A song, an album, a podcast, a room, a system, your own skills"></div>
      <div class="field"><label for="details">What is it doing that it shouldn&rsquo;t, or what do you want it to do? *</label><textarea id="details" name="details" required placeholder="Plain language is fine. &ldquo;The vocal disappears in the chorus.&rdquo; &ldquo;It sounds fine here and bad in the car.&rdquo; &ldquo;You can&rsquo;t understand anyone at the back of the room.&rdquo;"></textarea></div>
      <div class="field"><label for="tried">What have you already tried?</label><textarea id="tried" name="tried" rows="3" placeholder="Saves us both from going back over ground you have already covered."></textarea></div>
      <div class="field"><label for="links">Anything I can listen to or look at?</label><input id="links" name="links" placeholder="Private link, Drive, Dropbox, a photo of the room, whatever you have"></div>
      <div class="field"><label for="help">How would you rather work?</label><select id="help" name="help"><option value="">Not sure yet, that&rsquo;s fine</option><option>Just handle it for me</option><option>Work through it with me</option><option>Teach me how to do it</option></select></div>
      <div class="field"><label for="context">Anything else worth knowing?</label><textarea id="context" name="context" rows="2" placeholder="A deadline, a budget you need to stay inside, constraints on the room, whatever matters"></textarea></div>
      <div class="field" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden"><label for="company">Company</label><input id="company" name="company" tabindex="-1" autocomplete="off"></div>
      <div class="form-actions"><button class="btn primary" type="submit">Send it</button><div class="form-note">Sent straight to Edward. Replies go to the email you enter above.</div></div>
      <div class="form-status" data-form-status role="status" aria-live="polite"></div>
    </form>
  </div>
</section>
`;
