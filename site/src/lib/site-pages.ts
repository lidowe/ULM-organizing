/**
 * Page bodies as HTML strings, one module per page in ./pages.
 *
 * Tokens: {{RIBBON}}, {{CREDIT_CARDS}}, {{ARTIST_INDEX}}, {{MEDIA_INDEX}},
 * {{DOORS}}, {{DOOR_MARK:id}}, {{DOOR_RAIL}}, {{IMG:name}}, {{ICON:name}},
 * {{UI:name}}, {{ANIM:name}} — see src/lib/render-tokens.ts.
 *
 * THE REBUILD (2026-08-21): the site grows back from the teardown as the
 * five-door architecture — home routes by problem, each door carries its
 * services and rates, Proof holds the evidence, Story holds the person and
 * the argument's short form, The Gap holds the long form, Start holds the
 * intake. Old page modules (about, services, education, studio, work,
 * contact, news, pre-production, describing-sound, workbench) stay in
 * ./pages as the locked archive — unimported, so unbuilt — recoverable
 * from here or from git history.
 */
import index from "./pages/index";
import complete from "./pages/complete";
import fix from "./pages/fix";
import learn from "./pages/learn";
import evaluate from "./pages/evaluate";
import purple from "./pages/purple";
import theGap from "./pages/the-gap";
import story from "./pages/story";
import proof from "./pages/proof";
import start from "./pages/start";
import hierarchyOptions from "./pages/hierarchy-options";
import doorsDraft from "./pages/doors-draft";

export const pages: Record<string, string> = {
  "index": index,
  "complete": complete,
  "fix": fix,
  "learn": learn,
  "evaluate": evaluate,
  "purple": purple,
  "the-gap": theGap,
  "story": story,
  "proof": proof,
  "start": start,
  // Working surfaces, unlisted: Edward's ranking page and the icon lab.
  "hierarchy-options": hierarchyOptions,
  "doors-draft": doorsDraft,
};
