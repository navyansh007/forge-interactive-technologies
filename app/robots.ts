export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "",
      },
    ],
    sitemap: "https://forgeinteractivetechnologies.com/sitemap.xml",
    host: "https://forgeinteractivetechnologies.com",
  };
}
