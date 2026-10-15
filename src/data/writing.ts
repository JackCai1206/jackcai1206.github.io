export interface WritingEntry {
  title: string;
  description: string;
  topic: string;
  publishedAt: Date;
  href: string;
  external?: boolean;
}

// No posts are published yet; drafts are kept outside this public repo.
export const writing: WritingEntry[] = [];
