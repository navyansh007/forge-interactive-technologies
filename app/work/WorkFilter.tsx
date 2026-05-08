"use client";

import { useState } from "react";
import Link from "next/link";
import { CASES } from "@/lib/cases";

const FILTERS = ["All", "FinTech", "Healthcare AI", "Web3 / DeFi", "SaaS", "AI / ML"];

function CaseCard({ c }: { c: (typeof CASES)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={`/work/${c.slug}`}
      style={{
        background: hovered ? "var(--surface2)" : "var(--surface)",
        position: "relative",
        overflow: "hidden",
        cursor: "none",
        transition: "background 0.3s",
        textDecoration: "none",
        display: "block",
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
          <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 28, color: "var(--accent)" }}>↗</span>
        </div>
      </div>
    </Link>
  );
}

export default function WorkFilter() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? CASES
    : CASES.filter((c) => c.industry === activeFilter);

  const pillBase: React.CSSProperties = {
    fontFamily: "var(--font-mono), monospace",
    fontSize: 10,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "6px 14px",
    border: "1px solid var(--border)",
    background: "transparent",
    cursor: "none",
    transition: "all 0.2s",
  };

  return (
    <>
      {/* Filter bar */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 0 }}>
        {FILTERS.map((f) => {
          const isActive = f === activeFilter;
          return (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                ...pillBase,
                background: isActive ? "var(--accent)" : "transparent",
                color: isActive ? "#000" : "var(--muted)",
                borderColor: isActive ? "var(--accent)" : "var(--border)",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.color = "var(--offwhite)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--offwhite)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                }
              }}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Projects grid */}
      <div style={{ marginTop: 48 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {filtered.map((c) => (
            <CaseCard key={c.slug} c={c} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p
            style={{
              color: "var(--muted)",
              fontFamily: "var(--font-mono), monospace",
              fontSize: 13,
              marginTop: 48,
            }}
          >
            No projects in this category yet.
          </p>
        )}
      </div>
    </>
  );
}
