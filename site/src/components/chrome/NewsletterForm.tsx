import { useState, type FormEvent } from "react";
import { Brand } from "@/components/text/Brand";
import { SITE } from "@/site/site";

/** The newsletter band above the footer. Posts to /api/public/subscribe; falls back to an email draft. */
export function NewsletterBand() {
  const [status, setStatus] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "");
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }
    setStatus("Subscribing...");
    fetch("/api/public/subscribe", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, company }),
    })
      .then(async (res) => {
        const body = (await res.json().catch(() => ({}))) as { ok?: boolean };
        if (res.ok && body.ok) {
          form.reset();
          setStatus("Thank you, you're on the list.");
          return;
        }
        if (res.status === 400) {
          setStatus("Please enter a valid email address.");
          return;
        }
        setStatus(`Opening an email to subscribe you. If nothing opens, write to ${SITE.email}.`);
        window.location.href =
          `mailto:${SITE.email}?subject=` +
          encodeURIComponent("Newsletter signup") +
          "&body=" +
          encodeURIComponent("Please add " + email + " to the newsletter.");
      })
      .catch(() => setStatus("Something went wrong. Please try again."));
  }

  return (
    <section className="newsletter" id="newsletter" aria-labelledby="newsletter-h">
      <div className="wrap newsletter-inner">
        <div>
          <h2 id="newsletter-h">Subscribe to our newsletter.</h2>
          <p>
            News and notes from <Brand />, straight to your inbox.
          </p>
        </div>
        <form className="newsletter-form" data-newsletter-form noValidate onSubmit={onSubmit}>
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
          <div className="field-trap" aria-hidden="true">
            <input name="company" tabIndex={-1} autoComplete="off" />
          </div>
          <button className="btn primary" type="submit">
            Subscribe
          </button>
          <p className="newsletter-status" data-newsletter-status role="status" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
