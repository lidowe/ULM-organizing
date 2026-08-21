// Door 5 — Make It More Purple. The translation door: for the visitor who
// cannot name the problem, which is most of them. Built from Edward's
// Describing Sound copy (his purple-guitar story, near-verbatim) plus a
// borrowed-words lexicon that pairs the words people actually use with the
// mechanism each one usually names. Door title is this build's decision,
// pending veto; the standing draft was "Explain It, Adapt, Solve It".
export default `
<section class="page-hero door-hero"><div class="wrap">
  {{DOOR_MARK:purple}}
  <div class="eyebrow">Door 05 &middot; The translation door</div>
  <h1 class="page-title">Make It More Purple.</h1>
  <p class="page-deck">Sound has very few words of its own. That has never stopped anyone, and it doesn&rsquo;t need to stop you.</p>
</div></section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">01</span><span>Borrowed words</span></div>
    <h2 class="unit-title">Sound Is Described in Borrowed Words.</h2>
    <div class="unit-prose">
      <p>Sound actually has very few words that describe it without referencing another sense. Warm, bright, dull, crunchy, smooth, buttery, harsh, crisp &mdash; all borrowed from somewhere else. It&rsquo;s pretty interesting to hear how someone describes the sonic feeling they want to express.</p>
      <p class="unit-turn">I&rsquo;ve been asked to make a guitar sound more purple before, and I still knew what they meant.</p>
      <p>I reached for a few chorusy effects and a gentle harmonizer, hit play, and they said &ldquo;yes! exactly.&rdquo;</p>
      <p>In my head, hearing the word purple made me think of Prince, and Prince used a lot of chorus (the Roland Dimension D) and gentle doubler effects (the Eventide H3500 being his favorite). Hearing the original guitar parts and the word purple was enough to know what to reach for, and the song inspired what settings to use.</p>
    </div>
    <figure class="lead-photo reveal">
      <img src="{{IMG:pedalboard-overhead}}" alt="A pedalboard seen from above, effects pedals wired in a row" loading="lazy" />
    </figure>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">02</span><span>The lexicon</span></div>
    <h2 class="unit-title">The Words People Bring, and What They Usually Name.</h2>
    <p class="unit-lede">Your word on the left. The mechanism it most often turns out to be on the right. Usually &mdash; the song gets the final say, which is why the translation is a conversation and not a chart.</p>
    <ul class="lexicon-list reveal">
      <li><span class="lex-word">&ldquo;crunchy&rdquo;</span>{{ICON:clipping-wave:md}}<span class="lex-mech">clipping, or saturation doing its job</span></li>
      <li><span class="lex-word">&ldquo;boxy&rdquo;</span>{{ICON:room-reflection:md}}<span class="lex-mech">the room answering back in the low mids</span></li>
      <li><span class="lex-word">&ldquo;buzzy&rdquo;</span>{{ICON:ground-loop:md}}<span class="lex-mech">a ground loop, hunted end to end</span></li>
      <li><span class="lex-word">&ldquo;thin&rdquo;</span>{{ICON:phase-break:md}}<span class="lex-mech">two arrivals of the same source, cancelling</span></li>
      <li><span class="lex-word">&ldquo;washy&rdquo;</span>{{ICON:reverb-decay:md}}<span class="lex-mech">a reverb tail longer than the tempo wants</span></li>
      <li><span class="lex-word">&ldquo;echoey&rdquo;</span>{{ICON:delay-taps:md}}<span class="lex-mech">discrete repeats, or a hard wall too close</span></li>
      <li><span class="lex-word">&ldquo;hissy&rdquo;</span>{{ICON:noise-floor:md}}<span class="lex-mech">the noise floor, lifted somewhere it shouldn&rsquo;t be</span></li>
    </ul>
    <div class="unit-prose">
      <p>The classic un-nameable one &mdash; the sound thins out and nobody knows why. Same source, two arrivals:</p>
    </div>
    <figure class="scene reveal">
      {{ANIM:phase-cancellation}}
    </figure>
  </div>
</section>

<section class="rack-unit unit-soft">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">03</span><span>Why we ask first</span></div>
    <h2 class="unit-title">Why It Happens Before the Session.</h2>
    <div class="unit-prose">
      <p>Because we&rsquo;ve been on both sides of the process, we know how frustrating it is to be told how to think and what to say to make a &lsquo;hit&rsquo;. Maybe some people welcome that. For us, the source is the guide, and we work in service of the song or project in front of us &mdash; not building your &lsquo;brand&rsquo; or &lsquo;image&rsquo;. That reveals itself through collaboration, in the process.</p>
      <p>Our focus is still on the source. We prefer to get a preliminary sketch during pre-production, so time in the studio is not spent trying to translate but implement. Through experience, we&rsquo;ve learned to adapt and avoid making rushed decisions mid-session. It&rsquo;s better to set the tempo ahead of time.</p>
      <p class="unit-turn">With the destination in mind and knowing how fast to go, we can keep driving toward the goal.</p>
    </div>
  </div>
</section>

<section class="rack-unit">
  <div class="wrap">
    <div class="unit-label"><span class="unit-no">04</span><span>The other doors</span></div>
    {{DOOR_RAIL}}
  </div>
</section>

<section class="cta-section">
  <div class="wrap cta-inner">
    <div class="reveal"><h2>Describe It in Your Own Words.</h2><p>&ldquo;This part should sound like I&rsquo;m in a spaceship&rdquo; is enough to work from. Translating it is the job.</p></div>
    <a class="btn primary reveal" href="/start">Start here</a>
  </div>
</section>
`;
