import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ScrollReveal from "@/components/ScrollReveal";
import Stats from "@/components/Stats";

export const metadata: Metadata = {
  title: "About | Forge Interactive",
  description: "Forge Interactive was founded in 2021 by engineers who got tired of watching good ideas die in planning.",
};

const VALUES = [
  {
    title: "Direct feedback",
    body: "We'll tell you when something won't work. If that's uncomfortable, we're probably not a fit.",
  },
  {
    title: "No black boxes",
    body: "Every decision is documented. You own the architecture as much as we do.",
  },
  {
    title: "Ship over spec",
    body: "A working feature beats a perfect proposal every time. We move fast and show you the work.",
  },
  {
    title: "Post-launch support",
    body: "90-day support window on every engagement. We don't disappear after handoff.",
  },
];

const TEAM = [
  {
    name: "Navyansh Kesarwani",
    role: "Founder & CTO",
    bio: "Full-stack engineer and systems architect. Started Forge after years building financial infrastructure.",
  },
  { name: "TBD", role: "Engineering Lead", bio: "" },
  { name: "TBD", role: "Senior Engineer", bio: "" },
  { name: "TBD", role: "Product Engineer", bio: "" },
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
            Forge was started in 2021 by engineers who got tired of watching good ideas die in planning. We build things.
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
                "Forge started in 2021 when our founding team kept running into the same problem: companies with real technical ambition, stuck working with agencies that would spec everything to death and then deliver something no one could maintain.",
                "We approach every engagement as engineers first. We'll tell you when your architecture is wrong. We'll push back on timelines that aren't real. And we'll flag scope that will bite you later, before we write it.",
                "Four years in, we've shipped trading infrastructure that handles billions daily, AI systems that work in production, and on-chain protocols that have been audited and held. We're still small on purpose.",
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
              gridTemplateColumns: "repeat(4, 1fr)",
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
                style={{ background: "var(--bg)", padding: "48px 40px" }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    background: "var(--surface2)",
                    border: "1px solid var(--border)",
                  }}
                />
                <div
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--offwhite)",
                    marginTop: 20,
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
                {member.bio ? (
                  <p
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: 13,
                      color: "var(--muted)",
                      lineHeight: 1.7,
                      marginTop: 12,
                      maxWidth: 220,
                    }}
                  >
                    {member.bio}
                  </p>
                ) : (
                  <p
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: 13,
                      color: "var(--muted)",
                      lineHeight: 1.7,
                      marginTop: 12,
                      fontStyle: "italic",
                    }}
                  >
                    Team member details coming soon.
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Hiring strip */}
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
              We&apos;re hiring.
            </h2>
            <p style={{ fontSize: 14, color: "rgba(0,0,0,0.6)", fontFamily: "var(--font-body), sans-serif" }}>
              Two open roles. Both engineering.
            </p>
          </div>
          <Link
            href="/careers"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "1px solid #000",
              padding: "14px 28px",
              color: "#000",
              background: "transparent",
              textDecoration: "none",
              cursor: "none",
              display: "inline-block",
              transition: "background 0.2s, color 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            See Open Roles →
          </Link>
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
