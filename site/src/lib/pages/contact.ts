export default `
<section class="page-hero"><div class="wrap"><div class="eyebrow">Start a project</div><h1 class="page-title">Tell me what you&rsquo;re working on.</h1><p class="page-deck">A record, a voice, a mix, a room, or learning to do it yourself. You don&rsquo;t need to know which one it is, or what it&rsquo;s called.</p></div></section>
<section class="section">
  <div class="wrap contact-grid">
    <aside class="contact-side reveal"><div class="kicker">Upper Level Music</div><h2>Start with the problem, not the booking language.</h2><p>A rough mix, a voice memo, a photo of the room, or a few sentences is plenty. The questions below just give me enough to answer properly instead of guessing.</p><div class="contact-direct"><a href="mailto:edwardlidow@upperlevelmusic.com">edwardlidow@upperlevelmusic.com</a><br>Columbia, South Carolina<br>By appointment &middot; Remote work available</div><p class="contact-aside-note">Not a project? Questions, press, or just talking shop, the same address works.</p><div class="needs-content"><strong>Details needed</strong>Add a phone or text number, response time, and social links.</div></aside>
    <form class="form reveal" data-project-form>
      <div class="form-row"><div class="field"><label for="name">Name *</label><input id="name" name="name" required autocomplete="name"></div><div class="field"><label for="email">Email *</label><input id="email" name="email" type="email" required autocomplete="email"></div></div>

      <div class="field"><label for="services">What type of service or services are you interested in? *</label><textarea id="services" name="services" required rows="4" placeholder="In your own words. You do not need to know the trade term for it."></textarea></div>

      <div class="urgent-box">
        <label class="urgent-check" for="expedited"><input type="checkbox" id="expedited" name="expedited" value="yes"><span>I&rsquo;m in the middle of a project and need expedited assistance.</span></label>
        <div class="field"><label for="situation">If so, what is the situation, and what have you already tried?</label><textarea id="situation" name="situation" rows="4" placeholder="What is happening, when you need it by, and what you have already ruled out."></textarea></div>
        <p class="urgent-terms">Marked messages notify me directly and I will get back to you shortly. Expedited troubleshooting carries an additional fee, which is credited back against your next completed project by appointment.</p>
      </div>

      <div class="field"><label for="send">If you have a link to something you&rsquo;d like us to look at or hear, please provide it here</label><input id="send" name="send" placeholder="Drive, Dropbox, WeTransfer, a private streaming link, a photo of the room"></div>

      <fieldset class="field choice-set">
        <legend>When we begin, what is your preferred style of working together?</legend>
        <div class="choice-group">
          <label class="choice"><input type="radio" name="style" id="style-mix" value="Hire an engineer to do the work"><span>Hire an engineer to edit, mix, or master something for you.</span></label>
          <label class="choice"><input type="radio" name="style" id="style-together" value="Work through it together over video"><span>Link up over video and work through the issue together.</span></label>
          <label class="choice"><input type="radio" name="style" id="style-training" value="Training or education"><span>Training or education on a particular subject, or one-on-one instruction in the field of your choice.</span></label>
        </div>
      </fieldset>

      <div class="field"><label for="notes">Any additional questions, comments, concerns, or criticisms?</label><textarea id="notes" name="notes" rows="3" placeholder="All of it is welcome, including the criticisms."></textarea></div>

      <div class="field" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden"><label for="company">Company</label><input id="company" name="company" tabindex="-1" autocomplete="off"></div>
      <div class="form-actions"><button class="btn primary" type="submit">Send it</button></div>
      <div class="form-status" data-form-status role="status" aria-live="polite"></div>
      <p class="form-close">Thank you for taking the time. This goes straight to me, and replies come back to the address you entered. Feel free to <a href="mailto:edwardlidow@upperlevelmusic.com">email me directly</a> with anything additional, and I will do my best to promptly respond to any topic of interest we may have missed.</p>
    </form>
  </div>
</section>
`;
