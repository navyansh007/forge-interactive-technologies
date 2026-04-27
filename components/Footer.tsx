"use client";

export default function Footer() {
  const linkStyle: React.CSSProperties = {
    fontSize: 14,
    color: "var(--muted)",
    textDecoration: "none",
    transition: "color 0.2s",
  };

  const cols = [
    {
      title: "Services",
      links: ["Software Dev", "AI / ML", "Blockchain", "Audits"],
    },
    {
      title: "Company",
      links: ["Work", "Process", "Team", "Careers"],
    },
    {
      title: "Contact",
      links: ["hello@forgeinteractive.io", "LinkedIn", "GitHub", "Twitter / X"],
    },
  ];

  return (
    <footer
      className="footer-outer"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
    >
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 700,
              fontSize: 20,
              letterSpacing: "-0.02em",
              color: "var(--offwhite)",
              marginBottom: 16,
            }}
          >
            FORGE<span style={{ color: "var(--accent)" }}>.</span>
          </div>
          <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, maxWidth: 240 }}>
            We build what others spec. Software, AI, and blockchain for teams that ship.
          </p>
        </div>

        {/* Link columns */}
        {cols.map((col) => (
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
              {col.links.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={linkStyle}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--offwhite)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
                  >
                    {item}
                  </a>
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
          © 2026 Forge Interactive Technologies. All rights reserved.
        </span>
        <div style={{ display: "flex", gap: 24 }}>
          {["LI", "GH", "X"].map((s) => (
            <a
              key={s}
              href="#"
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
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
