import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "FinTech, AI, blockchain, and full-stack SaaS — four domains, one team. See what we build and how we build it.",
  alternates: {
    canonical: "https://forgeinteractivetechnologies.com/work",
  },
  openGraph: {
    title: "Work | Forge Interactive",
    description:
      "FinTech, AI, blockchain, and full-stack SaaS — four domains, one team.",
    url: "https://forgeinteractivetechnologies.com/work",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
