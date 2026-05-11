import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const BASE_URL = "https://forgeinteractivetechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Forge Interactive Technologies",
    template: "%s | Forge Interactive",
  },
  description:
    "We build software, AI systems, and blockchain infrastructure. The kind that holds up when real users hit it.",
  keywords: [
    "software development",
    "AI systems",
    "blockchain",
    "web development",
    "full-stack",
    "Next.js",
    "fintech",
    "SaaS",
    "DeFi",
  ],
  authors: [{ name: "Forge Interactive Technologies" }],
  creator: "Forge Interactive Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/logo-dark.svg",
    shortcut: "/logo-dark.svg",
  },
  openGraph: {
    title: "Forge Interactive Technologies",
    description:
      "We build software, AI systems, and blockchain infrastructure. The kind that holds up when real users hit it.",
    siteName: "Forge Interactive",
    url: BASE_URL,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge Interactive Technologies",
    description:
      "We build software, AI systems, and blockchain infrastructure. The kind that holds up when real users hit it.",
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "zry-eNF8IleZb69RYBp72wdriaThtWQdGkLm-ln60Vs",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Forge Interactive Technologies",
  url: BASE_URL,
  description:
    "We build software, AI systems, and blockchain infrastructure. The kind that holds up when real users hit it.",
  foundingDate: "2026",
  founders: [
    {
      "@type": "Person",
      name: "Navyansh Kesarwani",
      jobTitle: "Founder & Lead Engineer",
    },
    {
      "@type": "Person",
      name: "Manthan Vats",
      jobTitle: "Co-Founder & AI Expert",
    },
  ],
  serviceType: [
    "Software Development",
    "AI Systems",
    "Blockchain Infrastructure",
    "Web Development",
    "FinTech Solutions",
    "SaaS Development",
  ],
  areaServed: "Worldwide",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: `${BASE_URL}/contact`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  );
}
