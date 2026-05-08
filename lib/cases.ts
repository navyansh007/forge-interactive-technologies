export interface CaseStudy {
  slug: string;
  industry: string;
  name: string;
  tagline: string;
  challenge: string;
  solution: string;
  outcome: string;
  metric: string;
  metricLabel: string;
  stack: string[];
  duration: string;
  year: string;
  quote?: { text: string; name: string; title: string };
}

export const CASES: CaseStudy[] = [];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return CASES.map((c) => c.slug);
}
