import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 24px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "clamp(80px, 20vw, 120px)",
          fontWeight: 700,
          color: "var(--border)",
          lineHeight: 1,
          marginBottom: 24,
          letterSpacing: "-0.04em",
        }}
      >
        404
      </div>
      <h1
        style={{
          fontFamily: "var(--font-display), sans-serif",
          fontSize: 32,
          fontWeight: 700,
          color: "var(--offwhite)",
          letterSpacing: "-0.02em",
          marginBottom: 16,
        }}
      >
        This page doesn&apos;t exist.
      </h1>
      <p
        style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: 16,
          color: "var(--muted)",
          marginBottom: 40,
        }}
      >
        It was probably moved or never built yet.
      </p>
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 12,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--accent)",
          textDecoration: "none",
        }}
      >
        ← Back to homepage
      </Link>
    </div>
  );
}
