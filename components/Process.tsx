"use client";

import { useState } from "react";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "We get into the weeds of your problem before writing a line of code. Architecture decisions made late are expensive.",
  },
  {
    num: "02",
    title: "Architect",
    desc: "System design, tech stack, and risk mapping. You sign off on the plan before we write a single line.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Weekly demos, not quarterly surprises. You watch it get built — you're not just handed something at the finish line.",
  },
  {
    num: "04",
    title: "Ship",
    desc: "Deployment, monitoring, documentation, and a 90-day support window. We don't disappear after handoff.",
  },
];

export default function Process() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="process"
      className="process-outer"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
    >
      <div className="reveal">
        <div className="section-label">// 03 — How we work</div>
        <h2 className="section-heading">No black boxes.</h2>
        <div className="section-rule" />
      </div>

      <div className="process-grid">
        {STEPS.map((s, i) => (
          <div
            key={i}
            className="process-card reveal"
            data-delay={i * 100}
            onClick={() => setActive(i)}
            style={{
              background: active === i ? "var(--surface2)" : "var(--surface)",
              position: "relative",
              cursor: "none",
              transition: "background 0.3s",
            }}
          >
            <div className="process-card-inner">
              <div style={{ display: "flex", alignItems: "center", marginBottom: 28 }}>
                <div
                  style={{
                    width: 8, height: 8,
                    border: "1px solid var(--accent)",
                    background: active === i ? "var(--accent)" : "transparent",
                    flexShrink: 0,
                    transition: "background 0.3s",
                  }}
                />
                {i < STEPS.length - 1 && (
                  <div
                    style={{
                      flex: 1, height: 1,
                      background: active === i ? "var(--accent)" : "var(--border)",
                      transition: "background 0.3s",
                      margin: "0 12px",
                    }}
                  />
                )}
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    color: "var(--accent)",
                    whiteSpace: "nowrap",
                    marginLeft: i === STEPS.length - 1 ? 12 : 0,
                  }}
                >
                  {s.num}
                </span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--offwhite)",
                  marginBottom: 14,
                  lineHeight: 1.1,
                }}
              >
                {s.title}
              </div>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
