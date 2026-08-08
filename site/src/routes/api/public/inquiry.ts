import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

/**
 * Real submission endpoint for the "Start a project" form.
 *
 * Host agnostic on purpose. It is a standard web-fetch handler (Request in,
 * Response out) with no Node-only APIs, so the exact same file runs on
 * Lovable hosting, Cloudflare Workers/Pages, Netlify, Vercel or a Node server.
 * Delivery is chosen at runtime from environment variables:
 *
 *   RESEND_API_KEY + INQUIRY_TO_EMAIL   send the inquiry as email via Resend
 *   INQUIRY_FROM_EMAIL                  optional verified sender for Resend
 *   INQUIRY_WEBHOOK_URL                 POST the JSON payload anywhere
 *                                       (Zapier, Make, Formspree, n8n, Slack)
 *
 * If neither is configured the endpoint answers 503 with
 * { ok: false, fallback: "mailto" } and the form falls back to drafting an
 * email, so the page never dead ends.
 *
 * See docs/FORM-ENDPOINT.md for per host setup notes.
 */

const InquirySchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  project: z.string().trim().max(160).optional().default(""),
  stage: z.string().trim().max(120).optional().default(""),
  need: z.string().trim().min(1).max(120),
  timeline: z.string().trim().max(160).optional().default(""),
  budget: z.string().trim().max(160).optional().default(""),
  links: z.string().trim().max(500).optional().default(""),
  details: z.string().trim().min(1).max(5000),
  // honeypot, must stay empty
  company: z.string().max(0).optional().default(""),
});

type Inquiry = z.infer<typeof InquirySchema>;

function plainText(data: Inquiry) {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Artist / project: ${data.project || "-"}`,
    `Where the project is now: ${data.stage || "-"}`,
    `What they need help with: ${data.need}`,
    `Timeline: ${data.timeline || "-"}`,
    `Budget / range: ${data.budget || "-"}`,
    `Links: ${data.links || "-"}`,
    "",
    "About the record:",
    data.details,
  ].join("\n");
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

export const Route = createFileRoute("/api/public/inquiry")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let raw: unknown;
        try {
          raw = await request.json();
        } catch {
          return json({ ok: false, error: "Invalid request body." }, 400);
        }

        const parsed = InquirySchema.safeParse(raw);
        if (!parsed.success) {
          return json(
            { ok: false, error: "Please check the required fields and try again." },
            400,
          );
        }
        const data = parsed.data;

        // Env is injected per request on edge runtimes, so read it here.
        const resendKey = process.env["RESEND_API_KEY"];
        const toEmail = process.env["INQUIRY_TO_EMAIL"];
        const fromEmail = process.env["INQUIRY_FROM_EMAIL"];
        const webhookUrl = process.env["INQUIRY_WEBHOOK_URL"];

        const body = plainText(data);
        const subject = `Upper Level Music inquiry: ${data.need} (${data.name})`;

        try {
          if (webhookUrl) {
            const res = await fetch(webhookUrl, {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ subject, text: body, ...data }),
            });
            if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
            return json({ ok: true, via: "webhook" });
          }

          if (resendKey && toEmail) {
            const res = await fetch("https://api.resend.com/emails", {
              method: "POST",
              headers: {
                authorization: `Bearer ${resendKey}`,
                "content-type": "application/json",
              },
              body: JSON.stringify({
                from: fromEmail || "Upper Level Music <onboarding@resend.dev>",
                to: [toEmail],
                reply_to: data.email,
                subject,
                text: body,
              }),
            });
            if (!res.ok) throw new Error(`Resend responded ${res.status}`);
            return json({ ok: true, via: "email" });
          }
        } catch (err) {
          console.error("inquiry delivery failed", err);
          return json(
            { ok: false, fallback: "mailto", error: "Delivery failed." },
            502,
          );
        }

        return json(
          { ok: false, fallback: "mailto", error: "No delivery method configured." },
          503,
        );
      },
    },
  },
});
