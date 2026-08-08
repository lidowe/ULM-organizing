import { defineMcp } from "@lovable.dev/mcp-js";
import listPagesTool from "./tools/list-pages";
import getPageTool from "./tools/get-page";
import listCreditsTool from "./tools/list-credits";
import getContactInfoTool from "./tools/get-contact-info";
import listHybridSkillsTool from "./tools/list-hybrid-skills";
import routeHybridSkillTool from "./tools/route-hybrid-skill";

export default defineMcp({
  name: "upper-level-music",
  title: "Upper Level Music",
  version: "0.1.0",
  instructions:
    "Public tools for the Upper Level Music site (Edward Lidow, recording studio in Columbia, SC), plus a hybrid skill router scaffold for Lovable workflows. Use list_pages and get_page to read site copy, list_credits for the selected discography, get_contact_info for public contact details, list_hybrid_skills to inspect available skills/modes, and route_hybrid_skill for automatic/manual skill routing.",
  tools: [
    listPagesTool,
    getPageTool,
    listCreditsTool,
    getContactInfoTool,
    listHybridSkillsTool,
    routeHybridSkillTool,
  ],
});
