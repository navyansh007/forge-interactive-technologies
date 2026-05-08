const COMMITMENTS = [
  {
    title: "You talk to the builders.",
    body: "Both founders write the code. When you're on a call with us, you're talking to the engineers on your project. No account managers, no relayed messages.",
  },
  {
    title: "From zero to deployed.",
    body: "We handle architecture, development, testing, and launch. One team owns the whole thing. You get a working product, not a handover document.",
  },
  {
    title: "We push back when it counts.",
    body: "If your spec has a flaw, we'll say so before we build it. If the timeline isn't realistic, we'll tell you. We'd rather have that conversation early.",
  },
];

export default function Proof() {
  return (
    <section
      id="proof"
      className="section-outer"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      <div className="reveal">
        <div className="section-label">// 04: Why us</div>
        <h2 className="section-heading">What you can<br />count on.</h2>
        <div className="section-rule" />
      </div>

      <div className="grid-3" style={{ marginTop: 48 }}>
        {COMMITMENTS.map((c, i) => (
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
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 20,
              }}
            >
              0{i + 1}
            </div>
            <p
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: "var(--offwhite)",
                lineHeight: 1.3,
                marginBottom: 16,
                letterSpacing: "-0.02em",
              }}
            >
              {c.title}
            </p>
            <div
              style={{
                borderTop: "1px solid var(--border)",
                marginBottom: 20,
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 14,
                color: "var(--muted)",
                lineHeight: 1.8,
              }}
            >
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
