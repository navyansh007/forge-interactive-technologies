"use client";

import { useState } from "react";
import CalendlyButton from "./CalendlyButton";

const CAPABILITIES = [
  {
    domain: "FinTech",
    title: "FinTech & Trading Systems",
    body: "Full-stack platforms built for financial data. Order management, payment infrastructure, KYC pipelines. The kind of systems where a slow response is a real problem.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Kafka"],
  },
  {
    domain: "AI / ML",
    title: "AI & ML Integration",
    body: "Custom LLM pipelines, computer vision, and production model deployment. AI that works outside the notebook. Integrated, monitored, and something you can actually maintain.",
    stack: ["Python", "OpenAI", "PyTorch", "FastAPI", "AWS"],
  },
  {
    domain: "Web3 / DeFi",
    title: "Blockchain & DeFi",
    body: "Smart contract development, on-chain protocol design, and security audits. We write Solidity that's been stress-tested before it goes near a mainnet.",
    stack: ["Solidity", "Hardhat", "Foundry", "Ethereum", "TypeScript"],
  },
];

function CapabilityCard({ c, delay }: { c: (typeof CAPABILITIES)[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="case-card reveal"
      data-delay={delay}
      style={{
        background: hovered ? "var(--surface2)" : "var(--surface)",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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
      <div className="case-card-inner">
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
          {c.domain}
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
          {c.title}
        </div>
        <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, marginBottom: 32 }}>
          {c.body}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {c.stack.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 9,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--muted)",
                border: "1px solid var(--border)",
                padding: "3px 8px",
              }}
            >
              {tech}
            </span>
          ))}
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
          <div className="section-label">// 02: What We Build</div>
          <h2 className="section-heading">Built for<br />what&apos;s hard.</h2>
          <div className="section-rule" />
        </div>
        <CalendlyButton
          variant="outline"
          label="Start a Project →"
          style={{ alignSelf: "flex-end" }}
        />
      </div>
      <div className="grid-3" style={{ marginTop: 0 }}>
        {CAPABILITIES.map((c, i) => (
          <CapabilityCard key={i} c={c} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}
