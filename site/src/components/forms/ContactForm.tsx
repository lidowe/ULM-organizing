import { useState, type FormEvent } from "react";
import { Route } from "@/routes/_site/contact";
import { BOOTHS } from "@/components/booths/booths";
import { SITE } from "@/site/site";

/**
 * The contact form. Posts to /api/public/inquiry; when the site can't deliver
 * it, opens the visitor's email app with the message already written. A booth
 * chosen on Home (/contact?booth=room) is named above the form and sent along.
 */
export function ContactForm() {
  const { booth: boothId } = Route.useSearch();
  const booth = BOOTHS.find((b) => b.id === boothId);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const val = (id: string) =>
      (
        (form.elements.namedItem(id) as HTMLInputElement | HTMLTextAreaElement | null)?.value ?? ""
      ).trim();
    const expedited =
      (form.elements.namedItem("expedited") as HTMLInputElement | null)?.checked ?? false;
    const style = form.querySelector<HTMLInputElement>("input[name=style]:checked")?.value ?? "";
    const payload = {
      name: val("name"),
      email: val("email"),
      services: (booth ? "Booth: " + booth.short + "\n" : "") + val("services"),
      expedited,
      situation: val("situation"),
      send: val("send"),
      style,
      notes: val("notes"),
      company: val("company"),
    };
    const body = [
      (expedited ? "EXPEDITED REQUEST\n\n" : "") + "Name: " + payload.name,
      "Email: " + payload.email,
      "Preferred way of working: " + (payload.style || "-"),
      "Files / links: " + (payload.send || "-"),
      "",
      "Services they're interested in:",
      payload.services,
      "",
      "Situation and what they've tried:",
      payload.situation || "-",
      "",
      "Questions, comments, concerns, criticisms:",
      payload.notes || "-",
    ].join("\n");

    const emailDraft = () => {
      setStatus(
        `Opening your email app with the project details drafted. If nothing opens, email us directly at ${SITE.email}.`,
      );
      window.location.href =
        `mailto:${SITE.email}?subject=` +
        encodeURIComponent(
          (expedited ? "EXPEDITED - " : "") + "Upper Level Music - " + payload.name,
        ) +
        "&body=" +
        encodeURIComponent(body);
    };

    setSending(true);
    setStatus("Sending your inquiry...");
    fetch("/api/public/inquiry", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
        if (res.ok && data.ok) {
          form.reset();
          setStatus(
            "Thank you, your inquiry is in. We will reply to " + payload.email + " directly.",
          );
          return;
        }
        if (res.status === 400) {
          setStatus(data.error || "Please check the required fields and try again.");
          return;
        }
        emailDraft();
      })
      .catch(emailDraft)
      .finally(() => setSending(false));
  }

  return (
    <form className="form reveal" id="tell-us" data-project-form="" onSubmit={onSubmit}>
      <p className="booth-from" data-booth-from="" hidden={!booth}>
        {booth ? `You came from the booth: ${booth.name}` : null}
      </p>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Name *</label>
          <input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="services">
          What’s going on? What are you working on, and what do you need? *
        </label>
        <textarea
          id="services"
          name="services"
          required
          rows={4}
          placeholder="In your own words, in your own voice. You do not need to know the trade term for it."
        />
      </div>
      <div className="urgent-box">
        <label className="urgent-check" htmlFor="expedited">
          <input type="checkbox" id="expedited" name="expedited" value="yes" />
          <span>I’m in the middle of a project and need expedited assistance.</span>
        </label>
        <div className="field">
          <label htmlFor="situation">
            If so, what is the situation, and what have you already tried?
          </label>
          <textarea
            id="situation"
            name="situation"
            rows={4}
            placeholder="What is happening, when you need it by, and what you have already ruled out."
          />
        </div>
        <p className="urgent-terms">
          Marked messages notify the team directly and we will get back to you shortly. Expedited
          troubleshooting carries an additional fee, which is credited back against your next
          completed project by appointment.
        </p>
      </div>
      <div className="field">
        <label htmlFor="send">
          If you have a link to something you’d like us to look at or hear, please provide it here
        </label>
        <input
          id="send"
          name="send"
          placeholder="Drive, Dropbox, WeTransfer, a private streaming link, a photo of the room"
        />
      </div>
      <fieldset className="field choice-set">
        <legend>When we begin, what is your preferred style of working together?</legend>
        <div className="choice-group">
          <label className="choice">
            <input
              type="radio"
              name="style"
              id="style-mix"
              value="Hire an engineer to do the work"
            />
            <span>Hire an engineer to edit, mix, or master something for you.</span>
          </label>
          <label className="choice">
            <input
              type="radio"
              name="style"
              id="style-together"
              value="Work through it together over video"
            />
            <span>Link up over video and work through the issue together.</span>
          </label>
          <label className="choice">
            <input type="radio" name="style" id="style-training" value="Training or education" />
            <span>
              Training or education on a particular subject, or one-on-one instruction in the field
              of your choice.
            </span>
          </label>
        </div>
      </fieldset>
      <div className="field">
        <label htmlFor="notes">Any additional questions, comments, concerns, or criticisms?</label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="All of it is welcome, including the criticisms."
        />
      </div>
      <div
        className="field"
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="form-actions">
        <button className="btn primary" type="submit" disabled={sending}>
          {sending ? "Sending..." : "Send it"}
        </button>
      </div>
      <div
        className={status ? "form-status show" : "form-status"}
        data-form-status=""
        role="status"
        aria-live="polite"
      >
        {status}
      </div>
      <p className="form-close">
        Thank you for taking the time. This goes straight to the team, and replies come back to the
        address you entered. Feel free to{" "}
        <a href="mailto:edwardlidow@upperlevelmusic.com">email us directly</a> with anything
        additional, and we will do our best to respond promptly to any topic we may have missed.
      </p>
    </form>
  );
}
