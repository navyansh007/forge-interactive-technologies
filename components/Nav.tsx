"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#work" },
  { label: "Process",  href: "#process" },
  { label: "About",    href: "#proof" },
];

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono), monospace",
  fontSize: 12,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--muted)",
  textDecoration: "none",
  transition: "color 0.2s",
};

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Close menu on route-like clicks
  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "-0.02em",
            color: "var(--offwhite)",
            textDecoration: "none",
          }}
        >
          FORGE<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                style={linkStyle}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--offwhite)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          className="nav-cta-desktop"
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            background: "var(--accent)",
            color: "#000",
            border: "none",
            padding: "10px 20px",
            cursor: "none",
            fontWeight: 500,
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
        >
          Start a Project
        </button>

        {/* Mobile hamburger */}
        <button
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--muted)",
                textDecoration: "none",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={handleNavClick}
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              background: "var(--accent)",
              color: "#000",
              padding: "12px 20px",
              textDecoration: "none",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Start a Project
          </a>
        </div>
      )}
    </>
  );
}
