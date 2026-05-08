"use client";

import { useState } from "react";

const SERVICES = [
  {
    num: "01",
    name: ["Software", "Development"],
    desc: "Architecture to deployment. Apps that hold up under real load, without the mess you end up maintaining six months later.",
    tags: ["Web Apps", "APIs", "Mobile", "DevOps"],
    glyph: (
      <svg
        style={{ width: 32, height: 32, marginBottom: 32, color: "var(--accent)" }}
        viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"
      >
        <rect x="4" y="8" width="24" height="16" />
        <polyline points="10,14 14,18 10,22" strokeLinejoin="round" strokeLinecap="round" />
        <line x1="16" y1="22" x2="22" y2="22" />
      </svg>
    ),
  },
  {
    num: "02",
    name: ["AI & Machine", "Learning"],
    desc: "Custom models, fine-tuned LLMs, and data pipelines built around real outcomes. The kind of AI that still works three months after the demo.",
    tags: ["LLMs", "Computer Vision", "Data Pipelines", "MLOps"],
    glyph: (
      <svg
        style={{ width: 32, height: 32, marginBottom: 32, color: "var(--accent)" }}
        viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"
      >
        <circle cx="16" cy="16" r="4" />
        <line x1="16" y1="4"  x2="16" y2="12" />
        <line x1="16" y1="20" x2="16" y2="28" />
        <line x1="4"  y1="16" x2="12" y2="16" />
        <line x1="20" y1="16" x2="28" y2="16" />
        <line x1="7.5"  y1="7.5"  x2="13"   y2="13" />
        <line x1="19"   y1="19"   x2="24.5"  y2="24.5" />
      </svg>
    ),
  },
  {
    num: "03",
    name: ["Blockchain &", "Web3"],
    desc: "Smart contracts, DeFi protocols, and on-chain infrastructure. We write auditable code because on-chain, you don't get to push a hotfix.",
    tags: ["Smart Contracts", "DeFi", "NFT Infra", "Audits"],
    glyph: (
      <svg
        style={{ width: 32, height: 32, marginBottom: 32, color: "var(--accent)" }}
        viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"
      >
        <polygon points="16,4 28,11 28,21 16,28 4,21 4,11" />
        <polygon points="16,10 22,14 22,20 16,24 10,20 10,14" />
      </svg>
    ),
  },
];

function ServiceCard({ s, delay }: { s: (typeof SERVICES)[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="service-card reveal"
      data-delay={delay}
      style={{
        background: hovered ? "var(--surface)" : "var(--bg)",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="service-card-inner">
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
            position: "absolute",
            top: 20, right: 24,
            fontFamily: "var(--font-display), sans-serif",
            fontSize: 120,
            fontWeight: 700,
            color: hovered ? "rgba(245,166,35,0.06)" : "rgba(255,255,255,0.03)",
            lineHeight: 1,
            pointerEvents: "none",
            transition: "color 0.3s",
            userSelect: "none",
          }}
        >
          {s.num}
        </div>
        {s.glyph}
        <div
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--offwhite)",
            marginBottom: 16,
            lineHeight: 1.1,
          }}
        >
          {s.name.map((l, j) => <span key={j}>{l}<br /></span>)}
        </div>
        <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8 }}>{s.desc}</p>
        <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 8 }}>
          {s.tags.map((t, j) => (
            <span
              key={j}
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
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-outer" style={{ background: "var(--bg)" }}>
      <div className="reveal" data-delay="0">
        <div className="section-label">// 01: What we do</div>
        <h2 className="section-heading">Built for<br />production.</h2>
        <div className="section-rule" />
      </div>
      <div className="grid-3">
        {SERVICES.map((s, i) => (
          <ServiceCard key={i} s={s} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}
