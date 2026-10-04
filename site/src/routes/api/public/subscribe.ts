import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { deliver } from "../../../lib/http/deliver";

/**
 * Newsletter sign-up endpoint. Uses the same delivery as the contact form
 * (src/lib/http/deliver.ts): INQUIRY_WEBHOOK_URL, or RESEND_API_KEY + INQUIRY_TO_EMAIL.
 * Until a newsletter service is chosen, each sign-up arrives as an email so
 * nothing is lost. If nothing is configured it answers 503 with a mailto
 * fallback, so the form never dead ends.
 */
const Subscribe = z.object({
  email: z.string().trim().email().max(200),
  // honeypot: checked before parsing (see the handler), stripped here
  company: z.string().max(200).optional().default(""),
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
        // Same answer as a person gets, so a bot learns nothing from the honeypot.
        const company = (raw as { company?: unknown } | null)?.company;
        if (typeof company === "string" && company.trim()) return json({ ok: true });

        const parsed = Subscribe.safeParse(raw);
        if (!parsed.success) {
          return json({ ok: false, error: "Please enter a valid email address." }, 400);
        }
        const { email } = parsed.data;

        const result = await deliver(
          {
            subject: "Newsletter signup",
            text: `Please add this address to the newsletter:\n\n${email}`,
            replyTo: email,
            extra: { type: "newsletter" },
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
