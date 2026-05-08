"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CALENDLY_POPUP_URL } from "@/lib/calendly";

const NAV_ITEMS = [
  { label: "Services", href: "/#services" },
  { label: "Work",     href: "/work" },
  { label: "About",    href: "/about" },
  { label: "Contact",    href: "/contact" },
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
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  function openCalendly() {
    setMenuOpen(false);
    (window as Window & { Calendly?: { initPopupWidget: (opts: { url: string }) => void } }).Calendly?.initPopupWidget({ url: CALENDLY_POPUP_URL });
  }

  function handleSectionLink(e: React.MouseEvent, href: string) {
    const sectionId = href.replace("/#", "");
    setMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      e.preventDefault();
      sessionStorage.setItem("scrollTarget", sectionId);
      router.push("/");
    }
  }

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <Link
          href="/"
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
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                style={linkStyle}
                onClick={item.href.startsWith("/#") ? (e) => handleSectionLink(e, item.href) : handleNavClick}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--offwhite)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={openCalendly}
          className="nav-cta-desktop"
          aria-label="Start a project with Forge Interactive"
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
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
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
            <Link
              key={item.label}
              href={item.href}
              onClick={item.href.startsWith("/#") ? (e) => handleSectionLink(e, item.href) : handleNavClick}
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
            </Link>
          ))}
          <button
            onClick={openCalendly}
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              background: "var(--accent)",
              color: "#000",
              border: "none",
              padding: "12px 20px",
              fontWeight: 500,
              textAlign: "center",
              cursor: "none",
              width: "100%",
            }}
          >
            Start a Project
          </button>
        </div>
      )}
    </>
  );
}
