export const SKILL_REGISTRY = [
  {
    id: "repo-overview",
    title: "Repository overview",
    whenToUse: [
      "User asks what a repo does",
      "User wants a tour of structure, stack, or architecture",
    ],
  },
  {
    id: "repo-grounding",
    title: "Repository grounding",
    whenToUse: [
      "Repo owner/name is missing or ambiguous",
      "User refers to a project without clear repository coordinates",
    ],
  },
  {
    id: "code-change-next-actions",
    title: "Code change next actions",
    whenToUse: ["User wants an implementation plan", "User asks for practical next coding steps"],
  },
  {
    id: "pr-summary",
    title: "PR summary",
    whenToUse: ["User asks to summarize a PR", "User wants quick understanding of changes in a PR"],
  },
  {
    id: "pr-reviewer",
    title: "PR reviewer",
    whenToUse: [
      "User asks for quality/risk review of a PR",
      "User wants bug-risk/security review before merge",
    ],
  },
  {
    id: "stack-trace-debugging",
    title: "Stack trace debugging",
    whenToUse: [
      "User shares errors, exceptions, test failures, or stack traces",
      "User asks why a build/runtime is failing",
    ],
  },
  {
    id: "github-coding-agent-immersive",
    title: "GitHub coding agent immersive",
    whenToUse: ["User wants code implemented", "User asks to create changes/PRs directly"],
  },
  {
    id: "github-deep-research-immersive",
    title: "GitHub deep research immersive",
    whenToUse: [
      "User needs cross-file investigation",
      "User asks for deep architecture understanding or root-cause research",
    ],
  },
] as const;

export type SkillId = (typeof SKILL_REGISTRY)[number]["id"];

export const MODE_PRESETS = {
  traditional: {
    label: "Traditional web design mode",
    behavior:
      "Favor clean hierarchy, predictable navigation, conventional layouts, and conservative UX choices.",
  },
  unique: {
    label: "Unique web design mode",
    behavior:
      "Favor differentiated concepts, bold visual direction, interaction experiments, and distinctive brand expression.",
  },
} as const;

export type ModePresetId = keyof typeof MODE_PRESETS;

const SKIP_SKILLS = /^skip skills\b/i;
const USE_SKILL = /^use\s+([a-z0-9-]+)\b/i;

const SKILL_KEYWORDS: Record<SkillId, string[]> = {
  "repo-overview": [
    "overview",
    "tour",
    "what does this repo do",
    "understand this repo",
    "codebase",
    "project structure",
  ],
  "repo-grounding": [
    "which repo",
    "what repo",
    "repo url",
    "owner/name",
    "ground repo",
    "find repository",
  ],
  "code-change-next-actions": [
    "next steps",
    "plan",
    "how should i implement",
    "what should i change",
    "implementation plan",
    "handoff",
  ],
  "pr-summary": ["summarize pr", "pr summary", "summarize pull request", "what changed in this pr"],
  "pr-reviewer": [
    "review pr",
    "pr review",
    "review pull request",
    "is this safe to merge",
    "find issues",
  ],
  "stack-trace-debugging": [
    "stack trace",
    "exception",
    "error",
    "failing build",
    "crash",
    "debug this",
  ],
  "github-coding-agent-immersive": [
    "build it",
    "implement this",
    "make the changes",
    "create pr",
    "write the code",
  ],
  "github-deep-research-immersive": [
    "deep research",
    "investigate",
    "trace through files",
    "root cause analysis",
    "architecture deep dive",
  ],
};

const SKILL_PRIORITY: SkillId[] = [
  "stack-trace-debugging",
  "pr-reviewer",
  "pr-summary",
  "github-coding-agent-immersive",
  "code-change-next-actions",
  "github-deep-research-immersive",
  "repo-grounding",
  "repo-overview",
];

export type HybridRoutingContext = {
  repoUrl?: string;
  repoName?: string;
  pullRequestUrl?: string;
  stackTrace?: string;
};

export type RouteDecision =
  | {
      route: "skipped";
      reason: string;
      mode: ModePresetId;
      manualOverride: string;
    }
  | {
      route: "manual";
      skill: SkillId;
      confidence: number;
      reason: string;
      mode: ModePresetId;
      manualOverride: string;
      promptTemplate: string;
    }
  | {
      route: "automatic";
      skill: SkillId;
      confidence: number;
      reason: string;
      mode: ModePresetId;
      promptTemplate: string;
    }
  | {
      route: "none";
      confidence: number;
      reason: string;
      mode: ModePresetId;
    };

function countMatches(text: string, tokens: string[]): number {
  return tokens.reduce((count, token) => {
    return count + (text.includes(token) ? 1 : 0);
  }, 0);
}

function isSkillId(input: string): input is SkillId {
  return SKILL_REGISTRY.some((skill) => skill.id === input);
}

function buildPromptTemplate(skill: SkillId, request: string, mode: ModePresetId): string {
  const behavior = MODE_PRESETS[mode].behavior;
  return [
    `Mode preset: ${MODE_PRESETS[mode].label}`,
    `Behavior guidance: ${behavior}`,
    `Skill: ${skill}`,
    "User request:",
    request.trim(),
    "Execution notes:",
    "- Keep language plain for non-coders.",
    "- Expand options first, then recommend one path.",
    "- Return actionable next steps and ask at most one clarifying question.",
  ].join("\n");
}

function scoreSkill(skill: SkillId, request: string, context?: HybridRoutingContext): number {
  const lower = request.toLowerCase();
  let score = countMatches(lower, SKILL_KEYWORDS[skill]);

  const hasPrCue =
    lower.includes(" pull request") || lower.includes("pr ") || lower.startsWith("pr");
  const asksSummary = lower.includes("summarize") || lower.includes("summary");
  const asksReview =
    lower.includes("review") ||
    lower.includes("safe to merge") ||
    lower.includes("find issues") ||
    lower.includes("risks");
  const hasRepoCue = lower.includes("repo") || lower.includes("repository");
  const hasErrorCue =
    lower.includes("error") || lower.includes("exception") || lower.includes("stack");
  const hasBuildCue = lower.includes("build") || lower.includes("test");

  if (skill === "pr-summary" || skill === "pr-reviewer") {
    if (context?.pullRequestUrl) score += 1;
    if (hasPrCue) score += 1;
    if (skill === "pr-summary" && asksSummary) score += 2;
    if (skill === "pr-reviewer" && asksReview) score += 2;
  }

  if (skill === "stack-trace-debugging") {
    if (context?.stackTrace) score += 2;
    if (hasErrorCue || hasBuildCue) score += 1;
  }

  if (skill === "repo-grounding") {
    if (!context?.repoUrl && !context?.repoName && hasRepoCue) score += 2;
    if (lower.includes("which one")) score += 1;
  }

  if (skill === "repo-overview" && hasRepoCue) score += 1;

  return score;
}

export function routeHybridSkill(input: {
  request: string;
  mode?: ModePresetId;
  allowAuto?: boolean;
  context?: HybridRoutingContext;
}): RouteDecision {
  const request = input.request.trim();
  const mode = input.mode ?? "traditional";
  const allowAuto = input.allowAuto ?? true;
  const lower = request.toLowerCase();

  if (SKIP_SKILLS.test(request)) {
    return {
      route: "skipped",
      reason: "Manual override detected: user requested to skip skill routing.",
      mode,
      manualOverride: "skip skills",
    };
  }

  const explicit = request.match(USE_SKILL)?.[1];
  if (explicit && isSkillId(explicit)) {
    return {
      route: "manual",
      skill: explicit,
      confidence: 1,
      reason: `Manual override detected: user explicitly requested "${explicit}".`,
      mode,
      manualOverride: `use ${explicit}`,
      promptTemplate: buildPromptTemplate(explicit, request, mode),
    };
  }

  if (!allowAuto) {
    return {
      route: "none",
      confidence: 0,
      reason: "Automatic routing is disabled for this request.",
      mode,
    };
  }

  const scored = SKILL_PRIORITY.map((skill) => ({
    skill,
    score: scoreSkill(skill, lower, input.context),
  }));

  scored.sort((a, b) => b.score - a.score);
  const [first, second] = scored;
  const topScore = first?.score ?? 0;
  const secondScore = second?.score ?? 0;

  if (topScore < 2) {
    return {
      route: "none",
      confidence: topScore === 0 ? 0 : 0.4,
      reason:
        "No skill crossed the confidence threshold. Continue with general assistant behavior.",
      mode,
    };
  }

  const confidence = Math.min(0.98, 0.55 + (topScore - secondScore) * 0.15);
  return {
    route: "automatic",
    skill: first.skill,
    confidence,
    reason: `Skill "${first.skill}" matched strongest intent/context signals (score ${topScore}).`,
    mode,
    promptTemplate: buildPromptTemplate(first.skill, request, mode),
  };
}
