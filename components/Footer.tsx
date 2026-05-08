"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type FooterLink = { label: string; href: string };

const COLS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Software Dev", href: "/#services" },
      { label: "AI / ML",      href: "/#services" },
      { label: "Blockchain",   href: "/#services" },
      { label: "Audits",       href: "/#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Work",    href: "/work" },
      { label: "Process", href: "/#process" },
      { label: "Team",    href: "/about#team" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "forgeinteractivetechnologies@gmail.com", href: "mailto:forgeinteractivetechnologies@gmail.com" },
      { label: "LinkedIn",  href: "#" },
      { label: "GitHub",    href: "#" },
      { label: "Twitter / X", href: "#" },
    ],
  },
];

const SOCIALS = [
  { label: "LI", ariaLabel: "LinkedIn",    href: "#" },
  { label: "GH", ariaLabel: "GitHub",      href: "#" },
  { label: "X",  ariaLabel: "Twitter / X", href: "#" },
];

const linkStyle: React.CSSProperties = {
  fontSize: 14,
  color: "var(--muted)",
  textDecoration: "none",
  background: "none",
  border: "none",
  padding: 0,
  cursor: "none",
  fontFamily: "inherit",
  transition: "color 0.2s",
  textAlign: "left",
};

const hoverHandlers = {
  onMouseEnter: (e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.color = "var(--offwhite)"),
  onMouseLeave: (e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)"),
};

function FooterLink({ link }: { link: FooterLink }) {
  const pathname = usePathname();
  const router = useRouter();

  // External or dead links stay as anchors
  if (!link.href.startsWith("/")) {
    return (
      <a href={link.href} style={linkStyle} {...hoverHandlers}>
        {link.label}
      </a>
    );
  }

  function handleClick() {
    const hashIndex = link.href.indexOf("#");
    if (hashIndex === -1) {
      // Pure page navigation
      router.push(link.href);
      return;
    }
    const page = link.href.slice(0, hashIndex) || "/";
    const sectionId = link.href.slice(hashIndex + 1);
    if (pathname === page) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollTarget", sectionId);
      router.push(page);
    }
  }

  return (
    <button onClick={handleClick} style={linkStyle} {...hoverHandlers}>
      {link.label}
    </button>
  );
}

export default function Footer() {
  return (
    <footer
      className="footer-outer"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
    >
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 700,
              fontSize: 20,
              letterSpacing: "-0.02em",
              color: "var(--offwhite)",
              textDecoration: "none",
              display: "inline-block",
              marginBottom: 16,
            }}
          >
            FORGE<span style={{ color: "var(--accent)" }}>.</span>
          </Link>
          <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, maxWidth: 240 }}>
            We build what others spec. Software, AI, and blockchain for teams that ship.
          </p>
        </div>

        {/* Link columns */}
        {COLS.map((col) => (
          <div key={col.title}>
            <div
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: 24,
              }}
            >
              {col.title}
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {col.links.map((link) => (
                <li key={link.label}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.08em",
            color: "var(--muted)",
          }}
        >
          © {new Date().getFullYear()} Forge Interactive Technologies. All rights reserved.
        </span>
        <div style={{ display: "flex", gap: 24 }}>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.ariaLabel}
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
