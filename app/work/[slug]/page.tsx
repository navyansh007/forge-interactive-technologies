import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ScrollReveal from "@/components/ScrollReveal";
import CalendlyButton from "@/components/CalendlyButton";
import { CASES, getCaseBySlug } from "@/lib/cases";

export async function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const c = getCaseBySlug(slug);
  if (!c) return {};
  return {
    title: `${c.name} | Forge Interactive`,
    description: c.tagline,
  };
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  const currentIndex = CASES.findIndex((x) => x.slug === slug);
  const next = CASES[(currentIndex + 1) % CASES.length];

  const colHeadingStyle: React.CSSProperties = {
    fontFamily: "var(--font-mono), monospace",
    fontSize: 10,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "var(--accent)",
    marginBottom: 16,
  };

  const colBodyStyle: React.CSSProperties = {
    fontFamily: "var(--font-body), sans-serif",
    fontSize: 16,
    color: "var(--muted)",
    lineHeight: 1.8,
  };

  return (
    <>
      <Cursor />
      <ScrollReveal />
      <Nav />
      <main id="main-content">

        {/* Back link */}
        <div
          style={{
            padding: "100px 48px 0",
            background: "var(--bg)",
          }}
        >
          <Link
            href="/work"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 11,
              color: "var(--muted)",
              textDecoration: "none",
              letterSpacing: "0.08em",
            }}
          >
            ← All Work
          </Link>
        </div>

        {/* Header */}
        <section style={{ padding: "40px 48px 80px", background: "var(--bg)" }}>
          <div
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 10,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent)",
              border: "1px solid var(--border)",
              padding: "4px 10px",
              display: "inline-block",
              marginBottom: 24,
            }}
          >
            {c.industry}
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(40px, 5vw, 80px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--offwhite)",
              lineHeight: 1.05,
              marginBottom: 20,
              maxWidth: 800,
            }}
          >
            {c.name}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 20,
              color: "var(--muted)",
              maxWidth: 600,
              marginBottom: 32,
              lineHeight: 1.5,
            }}
          >
            {c.tagline}
          </p>
          <div
            style={{
              display: "flex",
              gap: 32,
              fontFamily: "var(--font-mono), monospace",
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: "0.08em",
              flexWrap: "wrap",
            }}
          >
            <span>Duration: {c.duration}</span>
            <span>Delivered: {c.year}</span>
          </div>
        </section>

        {/* Key metric strip */}
        <section
          style={{
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            padding: "48px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(64px, 10vw, 96px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "var(--accent)",
              lineHeight: 1,
            }}
          >
            {c.metric}
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 12,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginTop: 12,
            }}
          >
            {c.metricLabel}
          </div>
        </section>

        {/* Three-column content block */}
        <section
          style={{
            background: "var(--bg)",
            borderBottom: "1px solid var(--border)",
            padding: "80px 48px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "48px",
            }}
            className="case-content-grid"
          >
            <div>
              <div style={colHeadingStyle}>The Challenge</div>
              <p style={colBodyStyle}>{c.challenge}</p>
            </div>
            <div>
              <div style={colHeadingStyle}>Our Approach</div>
              <p style={colBodyStyle}>{c.solution}</p>
            </div>
            <div>
              <div style={colHeadingStyle}>The Outcome</div>
              <p style={colBodyStyle}>{c.outcome}</p>
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section
          style={{
            background: "var(--surface)",
            borderBottom: "1px solid var(--border)",
            padding: "64px 48px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 24,
            }}
          >
            // Stack Used
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {c.stack.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  border: "1px solid var(--border)",
                  padding: "4px 10px",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Quote block */}
        {c.quote && (
          <section
            style={{
              background: "var(--bg)",
              borderBottom: "1px solid var(--border)",
              padding: "80px 48px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "clamp(20px, 3vw, 32px)",
                fontWeight: 500,
                fontStyle: "italic",
                color: "var(--offwhite)",
                lineHeight: 1.4,
                maxWidth: 800,
                margin: "0 auto 40px",
                letterSpacing: "-0.02em",
              }}
            >
              <span style={{ color: "var(--accent)" }}>&ldquo;</span>
              {c.quote.text}
              <span style={{ color: "var(--accent)" }}>&rdquo;</span>
            </p>
            <div
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--offwhite)",
                marginBottom: 4,
              }}
            >
              {c.quote.name}
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              {c.quote.title}
            </div>
          </section>
        )}

        {/* Book a call CTA */}
        <section
          style={{
            background: "var(--bg)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            padding: "80px 48px",
            textAlign: "center",
          }}
        >
          <div className="section-label" style={{ marginBottom: 24 }}>// Liked what you saw?</div>
          <h2
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--offwhite)",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Let&apos;s build yours.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 16,
              color: "var(--muted)",
              marginBottom: 40,
              lineHeight: 1.7,
            }}
          >
            30 minutes. No pitch deck. We&apos;ll tell you if we&apos;re the right fit.
          </p>
          <CalendlyButton variant="accent" label="Book a Discovery Call →" />
        </section>

        {/* Next project teaser */}
        <section
          style={{
            background: "var(--surface)",
            padding: "64px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            Next Project
          </div>
          <Link
            href={`/work/${next.slug}`}
            className="hover-accent"
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(20px, 3vw, 36px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--offwhite)",
              textDecoration: "none",
            }}
          >
            {next.name} →
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
