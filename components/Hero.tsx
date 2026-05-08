"use client";

import { useState, useEffect, useRef } from "react";
import HeroTerminal from "./HeroTerminal";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (visible) {
      lineRefs.current.forEach((el) => {
        if (el) el.classList.add("visible");
      });
    }
  }, [visible]);

  const lines = ["Your idea has", "been sitting", "long enough."];

  return (
    <section id="hero" className="hero-section">
      {/* Technical grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      <div className="hero-main">
        {/* Left column: text at bottom */}
        <div className="hero-text-col">
          <div
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 28,
            }}
          >
            <span className="logo-mark" />
            Forge Interactive Technologies, Est. 2026
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(40px, 6vw, 88px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "var(--offwhite)",
              marginBottom: 36,
            }}
          >
            {lines.map((line, i) => (
              <span key={i} style={{ display: "block", overflow: "hidden" }}>
                <span
                  className="hero-line-inner"
                  ref={(el) => { lineRefs.current[i] = el; }}
                  style={{ transitionDelay: `${i * 0.18}s` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p
            style={{
              fontSize: 16,
              color: "var(--muted)",
              maxWidth: 480,
              marginBottom: 48,
              lineHeight: 1.7,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              opacity: visible ? 1 : 0,
              transition: "all 0.6s ease 0.8s",
            }}
          >
            We build software, AI systems, and blockchain infrastructure.
            The kind that holds up when real users hit it, not just in a demo.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              flexWrap: "wrap",
              transform: visible ? "translateY(0)" : "translateY(20px)",
              opacity: visible ? 1 : 0,
              transition: "all 0.6s ease 1s",
            }}
          >
            <button
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "var(--accent)",
                color: "#000",
                border: "none",
                padding: "14px 28px",
                cursor: "none",
                fontWeight: 500,
              }}
            >
              See Our Work
            </button>
            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "transparent",
                color: "var(--offwhite)",
                border: "1px solid var(--border)",
                padding: "14px 28px",
                cursor: "none",
              }}
            >
              What We Do →
            </button>
          </div>
        </div>

        {/* Right column: terminal centered */}
        <div className="hero-terminal-col">
          <HeroTerminal />
        </div>
      </div>

      {/* Scroll hint — hidden on mobile via CSS */}
      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 10,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--muted)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
