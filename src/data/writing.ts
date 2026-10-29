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
    title: "Input Perturbation as Augmentation for Pretraining Distillation",
    description:
      "Distilling on perturbed inputs for part of pretraining improves small language models at 135M and 0.5B, and the gain comes from the teacher's predictions on the perturbed text.",
    topic: "Distillation",
    publishedAt: new Date("2026-10-29T00:00:00Z"),
    href: "/writing/input-perturbation-distillation/",
  },
];
