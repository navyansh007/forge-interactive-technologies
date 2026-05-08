import CalendlyButton from "./CalendlyButton";

export default function CTA() {
  return (
    <section
      id="cta"
      className="cta-outer"
      style={{ background: "var(--offwhite)", position: "relative", overflow: "hidden" }}
    >
      {/* Background watermark */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "clamp(60px, 18vw, 220px)",
          fontWeight: 700,
          color: "rgba(0,0,0,0.04)",
          letterSpacing: "-0.05em",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        FORGE
      </div>

      <div style={{ position: "relative", maxWidth: 680 }}>
        <div className="section-label" style={{ color: "#B0ADA8" }}>// Ready?</div>
        <h2
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "clamp(36px, 6vw, 80px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#0A0A0A",
            lineHeight: 1.0,
            marginBottom: 24,
          }}
        >
          You&apos;ve been planning long enough. Let&apos;s build it.
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "#6B6B6B",
            marginBottom: 48,
            lineHeight: 1.7,
            maxWidth: 480,
          }}
        >
          30 minutes. No pitch deck. We talk about what you&apos;re building,
          what&apos;s blocking you, and whether we&apos;re actually the right fit.
        </p>

        <CalendlyButton variant="dark" label="Book a Discovery Call →" />

        <p
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.08em",
            color: "#B0ADA8",
            marginTop: 20,
          }}
        >
          or email us at{" "}
          <a
            href="mailto:forgeinteractivetechnologies@gmail.com"
            style={{ color: "#6B6B6B", textDecoration: "none", borderBottom: "1px solid #D0CCC4" }}
          >
            forgeinteractivetechnologies@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
