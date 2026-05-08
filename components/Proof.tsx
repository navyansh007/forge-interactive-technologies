const TESTIMONIALS = [
  {
    quote: "Forge didn't just deliver what we asked for. They told us when we were wrong and built what we actually needed. That kind of honesty is rare.",
    name: "Mira Okonkwo",
    role: "CTO, Aether Financial, Series B",
  },
  {
    quote: "They caught a critical race condition in our trading engine before we went live. That alone paid for the engagement.",
    name: "Arjun Mehta",
    role: "VP Engineering, NovaPay",
  },
  {
    quote: "Four months from kickoff to mainnet. I've never seen a team ship a DeFi protocol that fast without cutting corners.",
    name: "Sarah Chen",
    role: "Founder, QuantumLP",
  },
];

export default function Proof() {
  return (
    <section
      id="proof"
      className="section-outer"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      <div className="reveal" style={{ textAlign: "center" }}>
        <div className="section-label" style={{ textAlign: "center" }}>
          // 04: What clients say
        </div>
      </div>

      <div
        className="grid-3"
        style={{ marginTop: 48 }}
      >
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="reveal"
            data-delay={i * 100}
            style={{
              background: "var(--surface)",
              padding: "40px 36px",
              position: "relative",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: 48,
                color: "var(--accent)",
                lineHeight: 1,
                marginBottom: 16,
              }}
            >
              &ldquo;
            </div>
            <p
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: 16,
                fontStyle: "italic",
                color: "var(--offwhite)",
                lineHeight: 1.7,
              }}
            >
              {t.quote}
            </p>
            <div
              style={{
                borderTop: "1px solid var(--border)",
                marginTop: 24,
                marginBottom: 20,
              }}
            />
            <div
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--offwhite)",
              }}
            >
              {t.name}
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginTop: 4,
              }}
            >
              {t.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
