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
    title: "Perturbing Inputs Improves Pretraining Distillation",
    description:
      "Distilling on perturbed inputs for part of pretraining improves small language models at 135M and 0.5B, with gains that persist under data reuse, downstream evaluation and weight quantization.",
    topic: "Distillation",
    publishedAt: new Date("2026-10-29T00:00:00Z"),
    href: "/writing/input-perturbation-distillation/",
  },
];
