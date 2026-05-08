import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ScrollReveal from "@/components/ScrollReveal";
import WorkFilter from "./WorkFilter";

export const metadata: Metadata = {
  title: "Work | Forge Interactive",
  description: "Case studies from Forge Interactive. Software, AI, and blockchain projects built for production.",
};

export default function WorkPage() {
  return (
    <>
      <Cursor />
      <ScrollReveal />
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <section
          style={{
            padding: "160px 48px 80px",
            background: "var(--bg)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 16,
            }}
          >
            // All Work
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(48px, 6vw, 96px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--offwhite)",
              lineHeight: 1.05,
              marginBottom: 20,
            }}
          >
            Everything we&apos;ve shipped.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 16,
              color: "var(--muted)",
              marginBottom: 48,
            }}
          >
            Filtered by industry. Click any project to read the full story.
          </p>
          <WorkFilter />
        </section>
      </main>
      <Footer />
    </>
  );
}
