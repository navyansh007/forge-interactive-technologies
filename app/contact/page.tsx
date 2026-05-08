import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ScrollReveal from "@/components/ScrollReveal";
import CalendlyInline from "./CalendlyInline";

export const metadata: Metadata = {
  title: "Book a Call | Forge Interactive",
  description: "30 minutes. No pitch deck. We talk about what you're building and whether we're the right fit.",
};

const INFO_BLOCKS = [
  {
    label: "Duration",
    value: "30 minutes",
  },
  {
    label: "Format",
    value: "Video call or phone — your choice.",
  },
  {
    label: "Email",
    value: "forgeinteractivetechnologies@gmail.com",
    href: "mailto:forgeinteractivetechnologies@gmail.com",
  },
  {
    label: "Based in",
    value: "Remote-first. Est. Mumbai, 2021.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Cursor />
      <ScrollReveal />
      <Nav />
      <main id="main-content">
        {/* Header */}
        <section style={{ padding: "160px 48px 64px", background: "var(--bg)" }}>
          <div className="section-label">// Book a call</div>
          <h1
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(40px, 5vw, 80px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--offwhite)",
              lineHeight: 1.05,
              marginBottom: 20,
            }}
          >
            30 minutes. No pitch deck.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 16,
              color: "var(--muted)",
              maxWidth: 540,
              lineHeight: 1.7,
            }}
          >
            We talk about what you&apos;re building, what&apos;s in the way, and whether we&apos;re
            the right fit. No NDA required before we talk.
          </p>
        </section>

        {/* Two-column body */}
        <section
          style={{
            padding: "0 48px 120px",
            background: "var(--bg)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "80px",
              paddingTop: 64,
              alignItems: "start",
            }}
            className="contact-body-grid"
          >
            {/* Left: Calendly inline embed */}
            <CalendlyInline />

            {/* Right: info */}
            <div style={{ paddingTop: 8 }}>
              {INFO_BLOCKS.map((block, i, arr) => (
                <div
                  key={block.label}
                  style={{
                    paddingBottom: 28,
                    marginBottom: 28,
                    borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginBottom: 8,
                    }}
                  >
                    {block.label}
                  </div>
                  {block.href ? (
                    <a
                      href={block.href}
                      style={{
                        fontFamily: "var(--font-display), sans-serif",
                        fontSize: 15,
                        color: "var(--offwhite)",
                        textDecoration: "none",
                      }}
                    >
                      {block.value}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "var(--font-display), sans-serif",
                        fontSize: 15,
                        color: "var(--offwhite)",
                      }}
                    >
                      {block.value}
                    </span>
                  )}
                </div>
              ))}

              <p
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 11,
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  marginTop: 8,
                }}
              >
                Can&apos;t find a time that works?{" "}
                <a
                  href="mailto:forgeinteractivetechnologies@gmail.com"
                  style={{ color: "var(--offwhite)", textDecoration: "none", borderBottom: "1px solid var(--border)" }}
                >
                  Send us an email
                </a>{" "}
                and we&apos;ll sort it out.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
