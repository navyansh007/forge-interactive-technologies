"use client";

import { useState } from "react";

const CASES = [
  {
    industry: "FinTech",
    name: "Real-Time Trading Infrastructure",
    outcome: "Rebuilt a legacy order management system handling $2.4B daily volume — zero downtime migration.",
    metric: "70%",
    metricLabel: "Latency reduction",
  },
  {
    industry: "Healthcare AI",
    name: "Diagnostic Imaging Pipeline",
    outcome: "Custom CV model for radiology pre-screening. Deployed across 14 hospital networks in 6 months.",
    metric: "94%",
    metricLabel: "Model accuracy",
  },
  {
    industry: "Web3 / DeFi",
    name: "Cross-Chain Liquidity Protocol",
    outcome: "Designed and audited a novel AMM with dynamic fee structures. $80M TVL at launch.",
    metric: "$80M",
    metricLabel: "TVL at launch",
  },
];

function CaseCard({ c, delay }: { c: (typeof CASES)[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="case-card reveal"
      data-delay={delay}
      style={{
        background: hovered ? "var(--surface2)" : "var(--surface)",
        position: "relative",
        overflow: "hidden",
        cursor: "none",
        transition: "background 0.3s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="case-card-inner">
        <div
          style={{
            position: "absolute",
            inset: 0,
            border: "1px solid var(--accent)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 10,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 20,
          }}
        >
          {c.industry}
        </div>
        <div
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "clamp(18px, 2vw, 24px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--offwhite)",
            marginBottom: 16,
            lineHeight: 1.15,
          }}
        >
          {c.name}
        </div>
        <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, marginBottom: 32 }}>
          {c.outcome}
        </p>
        <div
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--accent)",
            lineHeight: 1,
          }}
        >
          {c.metric}
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginTop: 6,
          }}
        >
          {c.metricLabel}
        </div>
        {/* Directional arrow on hover */}
        <div
          style={{
            position: "absolute",
            bottom: 0, right: 0,
            width: 120, height: 120,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.4s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--accent-dim)",
            borderLeft: "1px solid var(--border)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 28, color: "var(--accent)" }}>
            ↗
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="section-outer" style={{ background: "var(--bg)" }}>
      <div className="work-header reveal">
        <div>
          <div className="section-label">// 02 — Case Studies</div>
          <h2 className="section-heading">Selected<br />work.</h2>
          <div className="section-rule" />
        </div>
        <a
          href="#"
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--muted)",
            textDecoration: "none",
            borderBottom: "1px solid var(--border)",
            paddingBottom: 4,
            transition: "color 0.2s, border-color 0.2s",
            alignSelf: "flex-end",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.color = "var(--accent)";
            (e.target as HTMLElement).style.borderColor = "var(--accent)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.color = "var(--muted)";
            (e.target as HTMLElement).style.borderColor = "var(--border)";
          }}
        >
          All Projects →
        </a>
      </div>
      <div className="grid-3" style={{ marginTop: 0 }}>
        {CASES.map((c, i) => (
          <CaseCard key={i} c={c} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}
