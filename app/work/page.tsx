"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ScrollReveal from "@/components/ScrollReveal";
import CalendlyButton from "@/components/CalendlyButton";

const DOMAINS = [
  {
    num: "01",
    domain: "FinTech",
    title: "FinTech & Trading Systems",
    description:
      "Financial platforms built for correctness under pressure. Order management, payment infrastructure, KYC pipelines, real-time data feeds. The kind of systems where a bug has a dollar value.",
    capabilities: [
      "Real-time order management & matching engines",
      "Payment infrastructure & gateway integrations",
      "KYC / AML compliance pipelines",
      "Financial dashboards & reporting systems",
      "High-throughput API design",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Kafka", "TypeScript"],
  },
  {
    num: "02",
    domain: "AI / ML",
    title: "AI & Machine Learning",
    description:
      "Custom LLM pipelines, computer vision, and production model deployment. Not demos. Real systems with monitoring, fallbacks, and enough infrastructure to keep them running.",
    capabilities: [
      "LLM pipeline design & fine-tuning",
      "Retrieval-augmented generation (RAG)",
      "Computer vision & document processing",
      "AI feature integration into existing products",
      "Model serving & inference infrastructure",
    ],
    stack: ["Python", "OpenAI", "PyTorch", "LangChain", "FastAPI", "AWS"],
  },
  {
    num: "03",
    domain: "Web3 / DeFi",
    title: "Blockchain & DeFi",
    description:
      "Smart contract development, on-chain protocol design, DeFi infrastructure, and security audits. Code that goes on a ledger you can't patch. We get it right before it ships.",
    capabilities: [
      "EVM smart contract development",
      "DeFi protocol design & implementation",
      "Token standards & NFT infrastructure",
      "Smart contract security audits",
      "Web3 frontend & wallet integration",
    ],
    stack: ["Solidity", "Hardhat", "Foundry", "Ethereum", "TypeScript", "The Graph"],
  },
  {
    num: "04",
    domain: "SaaS",
    title: "Full-Stack SaaS",
    description:
      "Multi-tenant architectures, auth systems, billing, analytics, and everything else that keeps a B2B product running at scale. Complete products, not half-finished ones handed off at launch.",
    capabilities: [
      "Multi-tenant SaaS architecture",
      "Auth systems & role-based access control",
      "Billing & subscription integrations",
      "White-label & custom branding layers",
      "Admin dashboards & analytics",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Vercel", "Stripe"],
  },
];

function DomainCard({ d }: { d: (typeof DOMAINS)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--surface2)" : "var(--surface)",
        padding: "56px 48px",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        position: "relative",
        transition: "background 0.3s",
      }}
    >
      {/* Accent border on hover */}
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

      {/* Header row: number + domain tag */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 32,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}
        >
          {d.num}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 10,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--muted)",
            border: "1px solid var(--border)",
            padding: "4px 10px",
          }}
        >
          {d.domain}
        </span>
      </div>

      {/* Title */}
      <h2
        style={{
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "clamp(22px, 2.5vw, 32px)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "var(--offwhite)",
          lineHeight: 1.15,
          marginBottom: 16,
        }}
      >
        {d.title}
      </h2>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: 14,
          color: "var(--muted)",
          lineHeight: 1.8,
          marginBottom: 32,
        }}
      >
        {d.description}
      </p>

      {/* Divider */}
      <div style={{ borderTop: "1px solid var(--border)", marginBottom: 28 }} />

      {/* Capabilities */}
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", marginBottom: 32 }}>
        {d.capabilities.map((cap, i) => (
          <li
            key={cap}
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 13,
              color: "var(--muted)",
              lineHeight: 1.6,
              padding: "10px 0",
              borderBottom: i < d.capabilities.length - 1 ? "1px solid var(--border)" : "none",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "var(--accent)",
                flexShrink: 0,
              }}
            />
            {cap}
          </li>
        ))}
      </ul>

      {/* Stack tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
        {d.stack.map((tech) => (
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
  );
}

export default function WorkPage() {
  return (
    <>
      <Cursor />
      <ScrollReveal />
      <Nav />
      <main id="main-content">

        {/* Hero */}
        <section
          style={{
            padding: "160px 48px 80px",
            background: "var(--bg)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="section-label">// What We Build</div>
          <h1
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(48px, 6vw, 96px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--offwhite)",
              lineHeight: 1.05,
              marginBottom: 20,
            }}
          >
            Four domains.<br />One team.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 16,
              color: "var(--muted)",
              maxWidth: 520,
              lineHeight: 1.7,
            }}
          >
            Full-stack, AI, blockchain, and SaaS, all handled by the same two
            people from start to finish. No handoffs, no fragments.
          </p>
        </section>

        {/* Domain cards */}
        <div
          className="work-domains-grid"
          style={{ background: "var(--border)" }}
        >
          {DOMAINS.map((d) => (
            <DomainCard key={d.num} d={d} />
          ))}
        </div>

        {/* CTA */}
        <section
          style={{
            background: "var(--bg)",
            borderTop: "1px solid var(--border)",
            padding: "80px 48px",
            textAlign: "center",
          }}
        >
          <div className="section-label" style={{ marginBottom: 24 }}>// Ready to build?</div>
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
            Tell us what you&apos;re working on.
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
            30 minutes. No pitch deck. We&apos;ll tell you straight if we&apos;re the right fit.
          </p>
          <CalendlyButton variant="accent" label="Book a Discovery Call →" />
        </section>

      </main>
      <Footer />
    </>
  );
}
