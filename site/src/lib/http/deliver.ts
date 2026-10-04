import { secret } from "./env";
import { isProduction } from "./security";

/**
 * Hands a form submission to whichever delivery method is configured, and
 * only reports success when the receiver confirms it sent the email.
 *
 * The Google Apps Script forwarder (ops/gmail-forwarder.gs) always answers
 * HTTP 200, and when the script itself errors Google answers 200 with an
 * HTML page. So a 200 proves nothing: the reply must be JSON with ok === true.
 */

export type Message = {
  subject: string;
  text: string;
  /** The visitor's address, used as reply-to. */
  replyTo?: string;
  /** Extra fields passed to the webhook for its own use. */
  extra?: Record<string, unknown>;
};

export type DeliveryResult =
  { ok: true; via: "webhook" | "email" } | { ok: false; reason: "not-configured" | "failed" };

/** Control characters out, one line, bounded. Subjects become email headers. */
export function cleanSubject(subject: string): string {
  const printable = Array.from(subject, (ch) => {
    const code = ch.charCodeAt(0);
    return code < 32 || code === 127 ? " " : ch;
  }).join("");
  return printable.replace(/\s+/g, " ").trim().slice(0, 200);
}

async function confirmed(res: Response): Promise<boolean> {
  if (!res.ok) return false;
  try {
    const body = (await res.json()) as { ok?: unknown };
    return body.ok === true;
  } catch {
    return false;
  }
}

export async function deliver(message: Message, request: Request): Promise<DeliveryResult> {
  const preview = !isProduction(new URL(request.url));
  const subject = cleanSubject(`${preview ? "[PREVIEW] " : ""}${message.subject}`);

  const webhookUrl = await secret("INQUIRY_WEBHOOK_URL");
  const resendKey = await secret("RESEND_API_KEY");
  const toEmail = await secret("INQUIRY_TO_EMAIL");

  try {
    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...message.extra,
          subject,
          text: message.text,
          email: message.replyTo,
          secret: await secret("FORWARDER_SECRET"),
        }),
        signal: AbortSignal.timeout(15_000),
      });
      if (await confirmed(res)) return { ok: true, via: "webhook" };
      console.error("webhook delivery not confirmed", res.status);
      return { ok: false, reason: "failed" };
    }

    if (resendKey && toEmail) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { authorization: `Bearer ${resendKey}`, "content-type": "application/json" },
        body: JSON.stringify({
          from: (await secret("INQUIRY_FROM_EMAIL")) || "Upper Level Music <onboarding@resend.dev>",
          to: [toEmail],
          reply_to: message.replyTo,
          subject,
          text: message.text,
        }),
        signal: AbortSignal.timeout(15_000),
      });
      if (res.ok) return { ok: true, via: "email" };
      console.error("resend delivery failed", res.status);
      return { ok: false, reason: "failed" };
    }
  } catch (err) {
    console.error("delivery failed", err);
    return { ok: false, reason: "failed" };
  }

  return { ok: false, reason: "not-configured" };
}
