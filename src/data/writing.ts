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
    title: "Spotting Problems for Auto Research",
    description:
      "How to recognize the parts of research that become combinatorial search—and where parallel research agents can make real progress.",
    topic: "Automated research",
    publishedAt: new Date("2026-07-20T00:00:00Z"),
    href: "/writing/spotting-problems-for-auto-research.html",
  },
  {
    title: "Stuck Agents: Optimization Plateaus and the Case for Context Resets",
    description:
      "An empirical study of long-horizon coding agents, optimization plateaus, and context-reset interventions.",
    topic: "Empirical study",
    publishedAt: new Date("2026-07-01T00:00:00Z"),
    href: "/writing/stuck-agents-report.html",
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
