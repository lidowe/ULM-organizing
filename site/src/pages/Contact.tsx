import { Brand } from "@/components/text/Brand";
import { ContactForm } from "@/components/forms/ContactForm";

export function ContactPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Contact</div>
          <h1 className="page-title">Tell us what you need.</h1>
          <div className="deck-frame">
            <p className="sr-only">
              A record, a voice, a mix, a room, or learning to do it yourself.
            </p>
            <div className="ticker" aria-hidden="true">
              <div className="ticker-track">
                <span>A record</span>
                <span>A voice</span>
                <span>A mix</span>
                <span>A room</span>
                <span>Learning to do it yourself</span>
                <span>A record</span>
                <span>A voice</span>
                <span>A mix</span>
                <span>A room</span>
                <span>Learning to do it yourself</span>
              </div>
            </div>
            <p className="deck-frame-note">
              You don’t need to know which one it is, or what it’s called.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap contact-grid">
          <aside className="contact-side reveal">
            <div className="kicker">
              <Brand>Upper Level Music</Brand>
            </div>
            <h2>Start with the problem, not the booking language.</h2>
            <p>
              A rough mix, a voice memo, a photo of the room, or a few sentences is plenty. The
              questions below just give us enough to answer properly instead of guessing.
            </p>
            <div className="contact-direct">
              <a href="mailto:edwardlidow@upperlevelmusic.com">edwardlidow@upperlevelmusic.com</a>
              <br />
              Columbia, South Carolina
              <br />
              By appointment · Remote work available
            </div>
            <p className="contact-aside-note">
              Not a project? Questions, press, or just talking shop, the same address works.
            </p>
          </aside>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
