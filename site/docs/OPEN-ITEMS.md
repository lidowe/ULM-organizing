# Open items (removed from the visible site on 2026-10-01; still true)

The on-page reminders were dropped. These still need an answer from Ed before launch:

- **Prices:** removed from the site on 2026-10-03; Services now explains that pricing follows the situation and works on a sliding scale. Still to decide: deposit terms, revision policy, what a day rate includes, and whether the first listen is free.
- **Credits:** the Nicki Minaj · Pink Friday card is not matched to any Discogs credit spelling. Confirm the release and role, or remove it.
- **Artist roster (Work):** broad and largely unverifiable from public credits. Mark each name with real involvement or delete it.
- **Contact:** phone/text number, response time, social links.
- **Educational services:** session length, and whether blocks or group sessions are offered.
- **News:** post cadence and first topics (page exists but is not linked).
- **Founding year:** Home now says Est. 2014 and About says created in 2014 (it said 2012); confirm.
- **Claims to confirm:** "30-year career" (About), the remote-lesson platform details (Sessionwire, 48 kHz, DAW control).
- **Photos:** real `session-collab-wide` from Lovable (stand-in in use).
- **Newsletter:** the sign-up form on every page posts to `/api/public/subscribe`, which emails each address to INQUIRY_TO_EMAIL (or the INQUIRY_WEBHOOK_URL). Pick a real newsletter service (Mailchimp, Buttondown, Kit, etc.) and point the webhook at it.
- **Form delivery:** the live Worker has no email secrets set (checked 2026-10-03), so the contact form and newsletter box fall back to opening the visitor's email app. To deliver straight to edwardlidow@upperlevelmusic.com with no new service: deploy `docs/gmail-forwarder.gs` as a Google Apps Script web app, then set its URL as the Worker secret `INQUIRY_WEBHOOK_URL` (`npx wrangler secret put INQUIRY_WEBHOOK_URL --name ulm-organizing`).
