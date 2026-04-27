"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section
      id="cta"
      className="cta-outer"
      style={{ background: "var(--offwhite)", position: "relative", overflow: "hidden" }}
    >
      {/* Background watermark */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "clamp(60px, 18vw, 220px)",
          fontWeight: 700,
          color: "rgba(0,0,0,0.04)",
          letterSpacing: "-0.05em",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        FORGE
      </div>

      <div style={{ position: "relative", maxWidth: 680 }}>
        <div className="section-label" style={{ color: "#B0ADA8" }}>// Ready?</div>
        <h2
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "clamp(36px, 6vw, 80px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#0A0A0A",
            lineHeight: 1.0,
            marginBottom: 32,
          }}
        >
          You&apos;ve been planning long enough. Let&apos;s build it.
        </h2>
        <p style={{ fontSize: 16, color: "#6B6B6B", marginBottom: 48 }}>
          Drop your email and we&apos;ll respond within 24 hours — usually faster.
        </p>

        {!sent ? (
          <form
            style={{ display: "flex", gap: 0, maxWidth: 460, flexWrap: "wrap" }}
            onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
          >
            <input
              type="email"
              placeholder="your@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: "1 1 200px",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 14,
                background: "#fff",
                border: "1px solid #D0CCC4",
                borderRight: "none",
                padding: "14px 18px",
                color: "#0A0A0A",
                outline: "none",
                minWidth: 0,
              }}
            />
            <button
              type="submit"
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "#0A0A0A",
                color: "#fff",
                border: "none",
                padding: "14px 24px",
                cursor: "none",
                whiteSpace: "nowrap",
                flex: "0 0 auto",
              }}
            >
              Get in Touch →
            </button>
          </form>
        ) : (
          <div
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 13,
              color: "#0A0A0A",
              letterSpacing: "0.08em",
            }}
          >
            ✓ &nbsp;We&apos;ll be in touch. Keep building.
          </div>
        )}
      </div>
    </section>
  );
}
