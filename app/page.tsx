import type { Metadata } from "next";
import Cursor from "@/components/Cursor";
import ScrollReveal from "@/components/ScrollReveal";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Proof from "@/components/Proof";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Forge Interactive Technologies",
  description:
    "We build software, AI systems, and blockchain infrastructure. The kind that holds up when real users hit it.",
  openGraph: {
    title: "Forge Interactive Technologies",
    description: "We build software, AI systems, and blockchain infrastructure.",
    url: "https://forgeinteractivetechnologies.com",
    siteName: "Forge Interactive",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge Interactive Technologies",
    description: "We build software, AI systems, and blockchain infrastructure.",
  },
};

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollReveal />
      <Nav />
      <main id="main-content">
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <Work />
        <Process />
        <Proof />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
