import type { Metadata } from "next";
import Script from "next/script";
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

export const metadata: Metadata = {
  title: "Forge Interactive Technologies",
  description:
    "We build software, AI systems, and blockchain infrastructure. The kind that holds up when real users hit it.",
  icons: {
    icon: "/logo-dark.svg",
    shortcut: "/logo-dark.svg",
  },
  openGraph: {
    title: "Forge Interactive Technologies",
    description: "We build software, AI systems, and blockchain infrastructure.",
    siteName: "Forge Interactive",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge Interactive Technologies",
    description: "We build software, AI systems, and blockchain infrastructure.",
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
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
