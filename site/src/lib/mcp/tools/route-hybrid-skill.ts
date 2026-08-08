import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { routeHybridSkill } from "../skill-system";

export default defineTool({
  name: "route_hybrid_skill",
  title: "Route request to hybrid skill",
  description:
    "Route a natural-language request to the best skill using intent + context, with manual overrides like `use <skill>` and `skip skills`.",
  inputSchema: {
    request: z
      .string()
      .describe(
        "User request in plain language. May include manual overrides like `use pr-reviewer` or `skip skills`.",
      ),
    mode: z
      .enum(["traditional", "unique"])
      .optional()
      .describe("Behavior preset. Defaults to traditional."),
    allowAuto: z
      .boolean()
      .optional()
      .describe("When false, disable automatic routing and only honor manual overrides."),
    repoUrl: z.string().optional().describe("Optional repository URL for context."),
    repoName: z.string().optional().describe("Optional repository owner/name for context."),
    pullRequestUrl: z.string().optional().describe("Optional PR URL for context-aware routing."),
    stackTrace: z
      .string()
      .optional()
      .describe("Optional stack trace or error text to boost debugging routing."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ request, mode, allowAuto, repoUrl, repoName, pullRequestUrl, stackTrace }) => {
    const decision = routeHybridSkill({
      request,
      mode,
      allowAuto,
      context: { repoUrl, repoName, pullRequestUrl, stackTrace },
    });

    return {
      content: [{ type: "text", text: JSON.stringify(decision, null, 2) }],
      structuredContent: decision,
    };
  },
});
