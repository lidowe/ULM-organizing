export default `
<section class="page-hero"><div class="wrap"><div class="eyebrow">Selected work</div><h1 class="page-title">On record.</h1><p class="page-deck">Major-label sessions and independent records, across genres.</p></div></section>
<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">Selected discography</div><div><h2 class="section-title">Precise roles. Real records.</h2><div class="section-copy"><p>Public role language where available, kept legible instead of exhaustive.</p></div></div></div>
  <div class="wrap">
    <div class="filter-bar reveal" aria-label="Filter selected work"><button class="active" type="button" data-filter="all">All</button><button type="button" data-filter="recording">Recording</button><button type="button" data-filter="mix">Mix</button><button type="button" data-filter="engineering">Engineering</button><button type="button" data-filter="assistant">Assistant</button></div>
    <div class="work-grid reveal">
      {{CREDIT_CARDS}}
    </div>
    <div class="needs-content"><strong>Credits to confirm</strong>Every card above except <em>Pink Friday</em> is matched to a public Discogs credit. The <em>Nicki Minaj · Pink Friday</em> entry is not currently listed under any of Edward’s credit spellings, confirm the release and exact role, or remove the card.</div>
    <p class="credit-note reveal">Additional catalog includes <em>Rebirth</em>, <em>No Ceilings</em>, <em>I Am Not a Human Being</em>, <em>Rise of an Empire</em>, <em>Pricele$$</em>, <em>The Elephant in the Room</em>, and other releases. Public credits also appear under Edward “Jewfro” Lidow, Edward Lidow, Ed Lidow, and Edward Lido.</p>
    <div class="credit-links reveal"><a class="btn" href="https://www.allmusic.com/artist/edward-jewfro-lidow-mn0002394304" target="_blank" rel="noreferrer">AllMusic credits</a><a class="btn" href="https://www.discogs.com/artist/1268296-Edward-Lidow" target="_blank" rel="noreferrer">Discogs profile</a></div>
  </div>
</section>
<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">Selected artists &amp; clients</div><div><h2 class="section-title">Range is part of the work.</h2><div class="section-copy"><p>A partial list. Roles vary by artist and session.</p></div></div></div>
  <div class="needs-content"><strong>Artist list needs vetting</strong>This roster is broad and largely unverifiable from public credits. Before publishing, mark each name with the actual involvement (session attended, assisted, engineered, mixed) and delete any that can’t be substantiated, an inflated list undercuts the verified credits above.</div>
    <div class="wrap artist-index reveal">{{ARTIST_INDEX}}
  </div>
  <div class="wrap section-header reveal" style="margin-top:3rem"><div class="kicker">Media &amp; brands</div></div>
  <div class="wrap artist-index reveal">{{MEDIA_INDEX}}</div>
</section>
<section class="section">
  <div class="wrap section-header reveal"><div class="kicker">Studios &amp; institutions</div><div><h2 class="section-title">Built in real studios.</h2></div></div>
  <div class="wrap artist-index reveal"><span>Hit Factory / Criteria Miami</span><span>Record Plant Los Angeles</span><span>Chicago Recording Company</span><span>Dream Asylum</span><span>Studio 8 Miami</span><span>The Jam Room · Columbia</span><span>Midlands Audio Institute</span><span>Midlands Technical College</span><span>Miami Historical Museum</span><span>WoG Ministries</span></div>
</section>
`;
