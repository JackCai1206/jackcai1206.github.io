export interface WritingEntry {
  title: string;
  description: string;
  topic: string;
  publishedAt: Date;
  href: string;
  external?: boolean;
}

export const writing: WritingEntry[] = [
  {
    title: "Where Between-Run Variance Comes From (and How Resets Cash It In)",
    description:
      "Identical agent runs land far apart. The spread is manufactured by within-run context autocorrelation - and context resets delete the correlation while keeping the artifact.",
    topic: "Empirical study",
    publishedAt: new Date("2026-07-24T00:00:00Z"),
    href: "/writing/run-variance/",
  },
  {
    title: "Spotting Problems for Auto Research",
    description:
      "Good auto-research problems pair a wide, combinatorial design space with evaluation that is cheap, robust, and aligned.",
    topic: "Automated research",
    publishedAt: new Date("2026-07-20T00:00:00Z"),
    href: "/writing/spotting-problems-for-auto-research/",
  },
  {
    title: "Superposition is opinionated noise",
    description:
      "Superposition distillation and input-noise distillation are one knob—perturbing the student's Stage-1 input—and only shared, vocabulary-basis perturbations help.",
    topic: "Knowledge distillation",
    publishedAt: new Date("2026-07-20T00:00:00Z"),
    href: "/writing/superposition-is-opinionated-noise/",
  },
  {
    title: "Stuck Agents: Optimization Plateaus and the Case for Context Resets",
    description:
      "An empirical study of long-horizon coding agents, optimization plateaus, and context-reset interventions.",
    topic: "Empirical study",
    publishedAt: new Date("2026-07-01T00:00:00Z"),
    href: "/writing/stuck-agents-report/",
  },
  {
    title: "Length and Composition Generalization: Sample Complexity",
    description:
      "A research note exploring the sample complexity of length and composition generalization in machine learning models.",
    topic: "Generalization",
    publishedAt: new Date("2026-02-04T00:00:00Z"),
    href: "https://stone-collarbone-e8c.notion.site/Length-and-Composition-Generalization-Sample-Complexity-270497968249800f9550c5e68ed6f0d5",
    external: true,
  },
];
