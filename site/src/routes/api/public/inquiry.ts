import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { deliver } from "../../../lib/http/deliver";

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
 * Delivery itself lives in src/lib/http/deliver.ts, which only reports
 * success when the receiver confirms the email went out.
 */

/**
 * Only name, email and the description of the problem are required. Everything
 * else is optional on purpose: the person this form exists to catch is the one
 * who cannot yet name the service, the stage, or the budget. Fields the form no
 * longer renders stay accepted so a page already open in a browser can still
 * submit, and unknown keys are stripped rather than rejected.
 */
const InquiryFields = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  services: z.string().trim().max(5000).optional().default(""),
  expedited: z.boolean().optional().default(false),
  situation: z.string().trim().max(5000).optional().default(""),
  send: z.string().trim().max(500).optional().default(""),
  style: z.string().trim().max(120).optional().default(""),
  notes: z.string().trim().max(3000).optional().default(""),
  // Retired fields, still accepted from a page already open in a browser.
  working: z.string().trim().max(300).optional().default(""),
  details: z.string().trim().max(5000).optional().default(""),
  tried: z.string().trim().max(3000).optional().default(""),
  links: z.string().trim().max(500).optional().default(""),
  help: z.string().trim().max(120).optional().default(""),
  context: z.string().trim().max(2000).optional().default(""),
  project: z.string().trim().max(160).optional().default(""),
  stage: z.string().trim().max(120).optional().default(""),
  need: z.string().trim().max(120).optional().default(""),
  timeline: z.string().trim().max(160).optional().default(""),
  budget: z.string().trim().max(160).optional().default(""),
  // honeypot: checked before parsing (see the handler), stripped here
  company: z.string().max(200).optional().default(""),
});

// Something has to describe the request. The current form sends `services`;
// a page still open from the previous version sends `details`. Requiring
// either one keeps both working.
const InquirySchema = InquiryFields.refine((d) => d.services.length > 0 || d.details.length > 0, {
  message: "Tell us what you are looking for.",
  path: ["services"],
});

type Inquiry = z.infer<typeof InquirySchema>;

function plainText(data: Inquiry) {
  const retired = [
    data.working && `Working on: ${data.working}`,
    data.details && `Described: ${data.details}`,
    data.tried && `Already tried: ${data.tried}`,
    data.links && `Links: ${data.links}`,
    data.help && `Preferred help: ${data.help}`,
    data.context && `Context: ${data.context}`,
    data.project && `Artist / project: ${data.project}`,
    data.stage && `Stage: ${data.stage}`,
    data.need && `Service named: ${data.need}`,
    data.timeline && `Timeline: ${data.timeline}`,
    data.budget && `Budget: ${data.budget}`,
  ].filter(Boolean) as string[];

  return [
    data.expedited ? "*** EXPEDITED ASSISTANCE REQUESTED ***\n" : "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Preferred way of working: ${data.style || "-"}`,
    `Files / links: ${data.send || "-"}`,
    "",
    "Services they're interested in:",
    data.services || "-",
    "",
    "Situation and what they've tried:",
    data.situation || "-",
    "",
    "Questions, comments, concerns, criticisms:",
    data.notes || "-",
    ...(retired.length ? ["", "From an older version of the form:", ...retired] : []),
  ]
    .filter((line, i) => !(i === 0 && line === ""))
    .join("\n");
}

/** True when the hidden field a person never sees has been filled in. */
function isBot(raw: unknown): boolean {
  const company = (raw as { company?: unknown } | null)?.company;
  return typeof company === "string" && company.trim().length > 0;
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

        // A bot that filled the honeypot gets the same answer a person would,
        // so it has no signal to retry without it. Nothing is delivered.
        if (isBot(raw)) return json({ ok: true });

        const parsed = InquirySchema.safeParse(raw);
        if (!parsed.success) {
          return json({ ok: false, error: "Please check the required fields and try again." }, 400);
        }
        const data = parsed.data;

        // The expedited flag has to survive into the subject: it is the only
        // part of the message visible before the email is opened.
        const result = await deliver(
          {
            subject: `${data.expedited ? "[EXPEDITED] " : ""}Upper Level Music inquiry: ${data.name}`,
            text: plainText(data),
            replyTo: data.email,
          },
          request,
        );

        if (result.ok) return json({ ok: true, via: result.via });
        return result.reason === "not-configured"
          ? json({ ok: false, fallback: "mailto", error: "No delivery method configured." }, 503)
          : json({ ok: false, fallback: "mailto", error: "Delivery failed." }, 502);
      },
    },
  },
});
