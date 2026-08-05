import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { listCredits } from "../content";

export default defineTool({
  name: "list_credits",
  title: "List discography credits",
  description:
    "List the selected discography credits shown on the Work page (artist, release, year, role). Optionally filter by artist name or role.",
  inputSchema: {
    artist: z.string().optional().describe("Case-insensitive substring of the artist name."),
    role: z
      .string()
      .optional()
      .describe("Role filter such as recording, mix, engineering, assistant."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ artist, role }) => {
    const a = artist?.trim().toLowerCase();
    const r = role?.trim().toLowerCase();

    const credits = listCredits().filter((credit) => {
      if (a && !credit.artist.toLowerCase().includes(a)) return false;
      if (
        r &&
        !credit.roleTags.some((tag) => tag.includes(r)) &&
        !credit.role.toLowerCase().includes(r)
      ) {
        return false;
      }
      return true;
    });

    return {
      content: [{ type: "text", text: JSON.stringify(credits, null, 2) }],
      structuredContent: { count: credits.length, credits },
    };
  },
});
