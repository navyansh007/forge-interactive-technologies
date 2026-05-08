"use client";

import { CALENDLY_POPUP_URL } from "@/lib/calendly";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

interface Props {
  label?: string;
  variant?: "accent" | "dark" | "outline";
  style?: React.CSSProperties;
}

const BASE: React.CSSProperties = {
  fontFamily: "var(--font-mono), monospace",
  fontSize: 12,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  fontWeight: 500,
  border: "none",
  padding: "14px 28px",
  cursor: "none",
  display: "inline-block",
  transition: "opacity 0.2s",
  whiteSpace: "nowrap",
};

const VARIANTS: Record<string, React.CSSProperties> = {
  accent:  { background: "var(--accent)", color: "#000" },
  dark:    { background: "#0A0A0A", color: "#fff" },
  outline: { background: "transparent", color: "var(--offwhite)", border: "1px solid var(--border)" },
};

export default function CalendlyButton({
  label = "Book a Discovery Call →",
  variant = "accent",
  style,
}: Props) {
  function open() {
    window.Calendly?.initPopupWidget({ url: CALENDLY_POPUP_URL });
  }

  return (
    <button
      onClick={open}
      style={{ ...BASE, ...VARIANTS[variant], ...style }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
    >
      {label}
    </button>
  );
}
