import { defineTool } from "@lovable.dev/mcp-js";
import { MODE_PRESETS, SKILL_REGISTRY } from "../skill-system";

export default defineTool({
  name: "list_hybrid_skills",
  title: "List hybrid skills and modes",
  description:
    "List the hybrid skill registry, design mode presets, and manual overrides for vibe-coder friendly routing.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      skills: SKILL_REGISTRY,
      modes: MODE_PRESETS,
      manualOverrides: ["use <skill-id>  (example: use pr-reviewer)", "skip skills"],
      notes: [
        "Natural-language requests are routed automatically when confidence is high.",
        "Manual override always wins over automatic routing.",
      ],
    };

    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
