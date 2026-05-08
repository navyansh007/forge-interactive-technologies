import CountUp from "./CountUp";

const STATS = [
  { n: 3,   suffix: "",  label: "Technology Domains" },
  { n: 4,   suffix: "",  label: "Core Services" },
  { n: 2,   suffix: "",  label: "Experts on Every Project" },
  { n: 100, suffix: "%", label: "End-to-End Delivery" },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="stats-outer"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="grid-4">
        {STATS.map((s, i) => (
          <div
            key={i}
            className="stat-card-inner reveal"
            data-delay={i * 80}
            style={{ background: "var(--surface)" }}
          >
            <div
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "clamp(40px, 5vw, 64px)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "var(--offwhite)",
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              <CountUp target={s.n} suffix={s.suffix} />
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
