import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

/**
 * Newsletter sign-up endpoint. Uses the same delivery settings as the contact
 * form (see inquiry.ts): INQUIRY_WEBHOOK_URL, or RESEND_API_KEY + INQUIRY_TO_EMAIL.
 * Until a newsletter service is chosen, each sign-up arrives as an email so
 * nothing is lost. If nothing is configured it answers 503 with a mailto
 * fallback, so the form never dead ends.
 */
const Subscribe = z.object({
  email: z.string().trim().email().max(200),
  // honeypot, must stay empty
  company: z.string().max(0).optional().default(""),
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

export const Route = createFileRoute("/api/public/subscribe")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let raw: unknown;
        try {
          raw = await request.json();
        } catch {
          return json({ ok: false, error: "Invalid request body." }, 400);
        }
        const parsed = Subscribe.safeParse(raw);
        if (!parsed.success) {
          return json({ ok: false, error: "Please enter a valid email address." }, 400);
        }
        const { email } = parsed.data;

        const resendKey = process.env["RESEND_API_KEY"];
        const toEmail = process.env["INQUIRY_TO_EMAIL"];
        const fromEmail = process.env["INQUIRY_FROM_EMAIL"];
        const webhookUrl = process.env["INQUIRY_WEBHOOK_URL"];
        const subject = "Newsletter signup";
        const text = `Please add this address to the newsletter:\n\n${email}`;

        try {
          if (webhookUrl) {
            const res = await fetch(webhookUrl, {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ subject, text, email, type: "newsletter" }),
            });
            if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
            return json({ ok: true, via: "webhook" });
          }
          if (resendKey && toEmail) {
            const res = await fetch("https://api.resend.com/emails", {
              method: "POST",
              headers: { authorization: `Bearer ${resendKey}`, "content-type": "application/json" },
              body: JSON.stringify({
                from: fromEmail || "Upper Level Music <onboarding@resend.dev>",
                to: [toEmail],
                reply_to: email,
                subject,
                text,
              }),
            });
            if (!res.ok) throw new Error(`Resend responded ${res.status}`);
            return json({ ok: true, via: "email" });
          }
        } catch (err) {
          console.error("newsletter delivery failed", err);
          return json({ ok: false, fallback: "mailto", error: "Delivery failed." }, 502);
        }
        return json(
          { ok: false, fallback: "mailto", error: "No delivery method configured." },
          503,
        );
      },
    },
  },
});
