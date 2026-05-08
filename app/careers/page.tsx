import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Careers | Forge Interactive",
  description: "Join Forge Interactive. We're hiring senior engineers who want to work on real problems.",
};

const ROLES = [
  { title: "Senior Full-Stack Engineer", type: "Full-time", location: "Remote" },
  { title: "Blockchain / Solidity Engineer", type: "Full-time", location: "Remote" },
];

const LIFE = [
  {
    title: "Small teams",
    body: "You'll never be one of 30 engineers on a project. Every person owns real surface area.",
  },
  {
    title: "Real problems",
    body: "The projects here are things people actually use. Latency matters. Correctness matters.",
  },
  {
    title: "No sprint theatre",
    body: "We plan weekly, ship frequently, and skip the parts of agile that don't help.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Cursor />
      <ScrollReveal />
      <Nav />
      <main id="main-content">

        {/* Header */}
        <section style={{ padding: "160px 48px 80px", background: "var(--bg)" }}>
          <div className="section-label">// Join the team</div>
          <h1
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--offwhite)",
              lineHeight: 1.05,
              marginBottom: 24,
            }}
          >
            We&apos;re small and we intend to stay that way.
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
            We hire slowly. Every engineer on this team has shipped real things in production. If that&apos;s you, read on.
          </p>
        </section>

        {/* Role listings */}
        <section
          className="section-outer"
          style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
        >
          <div className="reveal">
            <div className="section-label">// Open roles</div>
          </div>
          <div style={{ marginTop: 48 }}>
            {ROLES.map((role, i) => (
              <div
                key={i}
                className="reveal"
                data-delay={i * 100}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid var(--border)",
                  padding: "32px 0",
                  flexWrap: "wrap",
                  gap: 16,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "var(--offwhite)",
                      marginBottom: 12,
                    }}
                  >
                    {role.title}
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {[role.type, role.location].map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "var(--font-mono), monospace",
                          fontSize: 10,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          padding: "4px 10px",
                          border: "1px solid var(--border)",
                          color: "var(--muted)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="mailto:forgeinteractivetechnologies@gmail.com"
                  className="hover-accent"
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: 12,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  Apply →
                </a>
              </div>
            ))}
            <p
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 12,
                color: "var(--muted)",
                marginTop: 40,
                lineHeight: 1.7,
              }}
            >
              Don&apos;t see a fit? Send us a note anyway at{" "}
              <a
                href="mailto:forgeinteractivetechnologies@gmail.com"
                style={{ color: "var(--accent)", textDecoration: "none" }}
              >
                forgeinteractivetechnologies@gmail.com
              </a>
            </p>
          </div>
        </section>

        {/* Life at Forge */}
        <section
          className="section-outer"
          style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
        >
          <div className="reveal">
            <div className="section-label">// Life at Forge</div>
          </div>
          <div className="grid-3" style={{ marginTop: 48 }}>
            {LIFE.map((item, i) => (
              <div
                key={i}
                className="reveal"
                data-delay={i * 100}
                style={{ background: "var(--bg)", padding: "40px 36px 48px" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--offwhite)",
                    letterSpacing: "-0.02em",
                    marginBottom: 12,
                  }}
                >
                  {item.title}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: 14,
                    color: "var(--muted)",
                    lineHeight: 1.8,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
