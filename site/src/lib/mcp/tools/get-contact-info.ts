import { defineTool } from "@lovable.dev/mcp-js";
import { CONTACT } from "../content";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description:
    "Get the public contact details for Upper Level Music: engineer, email, location, availability and offered services.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CONTACT, null, 2) }],
    structuredContent: CONTACT,
  }),
});
