import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ScrollReveal from "@/components/ScrollReveal";
import Stats from "@/components/Stats";
import CalendlyButton from "@/components/CalendlyButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "Forge Interactive was founded in 2026 by engineers who got tired of watching good ideas die in planning. Meet the team.",
  alternates: {
    canonical: "https://forgeinteractivetechnologies.com/about",
  },
  openGraph: {
    title: "About | Forge Interactive",
    description:
      "Forge Interactive was founded in 2026 by engineers who got tired of watching good ideas die in planning.",
    url: "https://forgeinteractivetechnologies.com/about",
  },
};

const VALUES = [
  {
    title: "Direct feedback",
    body: "We'll tell you when something won't work. If you'd rather not hear that, we're probably not a good fit.",
  },
  {
    title: "No black boxes",
    body: "Every decision gets documented. You own the architecture as much as we do.",
  },
  {
    title: "Ship over spec",
    body: "A working feature beats a perfect proposal. We move fast and show you the work as it goes.",
  },
  {
    title: "Post-launch support",
    body: "90-day support window on every engagement. We stick around after the handoff.",
  },
];

const TEAM = [
  {
    name: "Navyansh Kesarwani",
    role: "Founder & Lead Engineer",
    bio: "Full-stack engineer and blockchain architect. Owns technical direction and delivery across web, mobile, and on-chain systems.",
  },
  {
    name: "Manthan Vats",
    role: "Co-Founder & AI Expert",
    bio: "AI and machine learning engineer. Builds LLM pipelines, fine-tunes models, and deploys AI that keeps working after the first week.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Cursor />
      <ScrollReveal />
      <Nav />
      <main id="main-content">

        {/* Hero */}
        <section
          style={{ padding: "160px 48px 80px", background: "var(--bg)" }}
        >
          <div className="section-label">// About Forge</div>
          <h1
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(48px, 6vw, 96px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--offwhite)",
              lineHeight: 1.05,
              marginBottom: 28,
            }}
          >
            We ship.<br />Others plan.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 18,
              color: "var(--muted)",
              maxWidth: 600,
              lineHeight: 1.8,
            }}
          >
            Forge was started in 2026 by engineers who got tired of watching good ideas die in planning. We build things.
          </p>
        </section>

        {/* Stats */}
        <Stats />

        {/* Our story */}
        <section
          style={{
            background: "var(--bg)",
            borderTop: "1px solid var(--border)",
            padding: "100px 48px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 80,
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
            className="about-story-grid"
          >
            <div style={{ flex: "0 0 auto", maxWidth: 340 }}>
              <div className="section-label">// The Origin</div>
              <h2
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "clamp(32px, 4vw, 56px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "var(--offwhite)",
                  lineHeight: 1.05,
                  marginBottom: 24,
                }}
              >
                Started by engineers, not consultants.
              </h2>
              <div className="section-rule" />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              {[
                "Forge was started by two engineers: Navyansh in full-stack and blockchain, Manthan in AI and machine learning. Between us, we cover what most modern products actually need built.",
                "We treat every engagement as engineers, not consultants. We'll tell you when your architecture is wrong. We'll push back on timelines that aren't real. We'll flag scope that will hurt you later, before we build it.",
                "We're new as an agency, but not new to building. The work we do now is built on years of solving real technical problems. What that means for you is straightforward: we own your project from the first line of code to production.",
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: 16,
                    color: "var(--muted)",
                    lineHeight: 1.8,
                    marginBottom: i < 2 ? 24 : 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section
          className="section-outer"
          style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
        >
          <div className="reveal">
            <div className="section-label">// How we operate</div>
            <h2 className="section-heading">A few things we don&apos;t compromise on.</h2>
            <div className="section-rule" />
          </div>
          <div className="grid-4">
            {VALUES.map((v, i) => (
              <ValueCard key={i} v={v} delay={i * 80} />
            ))}
          </div>
        </section>

        {/* Team */}
        <section
          id="team"
          className="section-outer"
          style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
        >
          <div className="reveal">
            <div className="section-label">// The team</div>
            <h2 className="section-heading">Small by design.</h2>
            <div className="section-rule" />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1px",
              background: "var(--border)",
              marginTop: 64,
            }}
            className="team-grid"
          >
            {TEAM.map((member, i) => (
              <div
                key={i}
                className="reveal"
                data-delay={i * 80}
                style={{ background: "var(--bg)", padding: "48px 40px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--offwhite)",
                  }}
                >
                  {member.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginTop: 4,
                  }}
                >
                  {member.role}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: 13,
                    color: "var(--muted)",
                    lineHeight: 1.7,
                    marginTop: 12,
                    maxWidth: 260,
                  }}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA strip */}
        <section
          style={{
            background: "var(--accent)",
            padding: "80px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 32,
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#000",
                lineHeight: 1.0,
                marginBottom: 12,
              }}
            >
              Let&apos;s build something.
            </h2>
            <p style={{ fontSize: 14, color: "rgba(0,0,0,0.6)", fontFamily: "var(--font-body), sans-serif" }}>
              30 minutes. No pitch deck. Just a real conversation.
            </p>
          </div>
          <CalendlyButton
            variant="dark"
            label="Book a Discovery Call →"
          />
        </section>

      </main>
      <Footer />
    </>
  );
}

function ValueCard({ v, delay }: { v: { title: string; body: string }; delay: number }) {
  return (
    <div
      className="reveal"
      data-delay={delay}
      style={{
        background: "var(--surface)",
        padding: "48px 40px",
        borderTop: "1px solid var(--border)",
        transition: "background 0.3s, border-color 0.3s",
      }}
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
        {v.title}
      </div>
      <p
        style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: 14,
          color: "var(--muted)",
          lineHeight: 1.8,
        }}
      >
        {v.body}
      </p>
    </div>
  );
}
