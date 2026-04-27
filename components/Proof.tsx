export default function Proof() {
  return (
    <section
      id="proof"
      className="section-outer"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      <div className="reveal" style={{ textAlign: "center" }}>
        <div className="section-label" style={{ textAlign: "center" }}>
          // 04 — What clients say
        </div>
      </div>

      <div
        className="reveal"
        data-delay="100"
        style={{ maxWidth: 800, margin: "64px auto 0", textAlign: "center" }}
      >
        <p
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "clamp(20px, 3vw, 36px)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "var(--offwhite)",
            lineHeight: 1.4,
            marginBottom: 40,
            fontStyle: "italic",
          }}
        >
          <span style={{ color: "var(--accent)" }}>&ldquo;</span>
          Forge didn&apos;t just deliver what we asked for — they told us when we
          were wrong and built what we actually needed. That kind of honesty is
          rare.
          <span style={{ color: "var(--accent)" }}>&rdquo;</span>
        </p>
        <div
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          <strong
            style={{
              color: "var(--offwhite)",
              fontWeight: 500,
              display: "block",
              marginBottom: 4,
              fontFamily: "var(--font-display), sans-serif",
              fontSize: 14,
              letterSpacing: 0,
              textTransform: "none",
            }}
          >
            Mira Okonkwo
          </strong>
          CTO, Aether Financial — Series B
        </div>
      </div>
    </section>
  );
}
