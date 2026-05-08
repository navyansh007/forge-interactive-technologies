import { getAllSlugs } from "@/lib/cases";

export default function sitemap() {
  const slugs = getAllSlugs();
  const base = "https://forgeinteractivetechnologies.com";

  const staticRoutes = [
    { url: base, lastModified: new Date() },
    { url: `${base}/work`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/careers`, lastModified: new Date() },
  ];

  const caseRoutes = slugs.map((slug) => ({
    url: `${base}/work/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...caseRoutes];
}
