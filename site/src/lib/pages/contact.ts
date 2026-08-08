export default `
<section class="page-hero"><div class="wrap"><div class="eyebrow">Start a project</div><h1 class="page-title">Tell me about the record.</h1><p class="page-deck">What you're making, where it is now, what's getting in the way.</p></div></section>
<section class="section">
  <div class="wrap contact-grid">
    <aside class="contact-side reveal"><div class="kicker">Upper Level Music</div><h2>Start with the basics, not the booking language.</h2><p>A rough mix, voice memo, or private link is plenty. The form just gives me context to answer well.</p><div class="contact-direct"><a href="mailto:edwardlidow@upperlevelmusic.com">edwardlidow@upperlevelmusic.com</a><br>Columbia, South Carolina<br>By appointment · Remote work available</div></aside>
    <form class="form reveal" data-project-form>
      <div class="form-row"><div class="field"><label for="name">Name *</label><input id="name" name="name" required autocomplete="name"></div><div class="field"><label for="email">Email *</label><input id="email" name="email" type="email" required autocomplete="email"></div></div>
      <div class="field"><label for="project">Artist / project name</label><input id="project" name="project" placeholder="Artist, band, project, or working title"></div>
      <div class="form-row"><div class="field"><label for="stage">Where is the project now?</label><select id="stage" name="stage"><option value="">Select one</option><option>Idea / writing stage</option><option>Demo or rough production</option><option>Tracking / recording</option><option>Vocals need work</option><option>Ready to mix</option><option>Mix is stuck</option><option>Ready for mastering</option><option>Technical / studio problem</option><option>Not sure yet</option></select></div><div class="field"><label for="need">What do you need help with? *</label><select id="need" name="need" required><option value="">Select one</option><option>Production &amp; arrangement</option><option>Recording &amp; tracking</option><option>Vocal production &amp; editing</option><option>Mixing</option><option>Mastering</option><option>Full-project development</option><option>Consultation / problem-solving</option><option>Studio systems / signal flow</option><option>Not sure yet</option></select></div></div>
      <div class="form-row"><div class="field"><label for="timeline">Timeline</label><input id="timeline" name="timeline" placeholder="Target date or general timing"></div><div class="field"><label for="budget">Budget / range</label><input id="budget" name="budget" placeholder="A rough range is useful"></div></div>
      <div class="field"><label for="links">Music / reference links</label><input id="links" name="links" type="url" inputmode="url" placeholder="Private streaming link, Drive, Dropbox, etc."></div>
      <div class="field"><label for="details">About the record *</label><textarea id="details" name="details" required placeholder="What are you trying to make? What matters most? What feels wrong or unfinished right now?"></textarea></div>
      <div class="field" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden"><label for="company">Company</label><input id="company" name="company" tabindex="-1" autocomplete="off"></div>
      <div class="form-actions"><button class="btn primary" type="submit">Send inquiry</button><div class="form-note">Sent straight to Edward. Replies go to the email you enter above.</div></div>
      <div class="form-status" data-form-status role="status" aria-live="polite"></div>
    </form>
  </div>
</section>
`;
