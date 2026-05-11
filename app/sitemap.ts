import { getAllSlugs } from "@/lib/cases";

export default function sitemap() {
  const slugs = getAllSlugs();
  const base = "https://forgeinteractivetechnologies.com";

  const staticRoutes = [
    { url: base, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1.0 },
    { url: `${base}/work`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.7 },
  ];

  const caseRoutes = slugs.map((slug) => ({
    url: `${base}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...caseRoutes];
}
