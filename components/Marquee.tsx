const TECHS = [
  "React", "Next.js", "TypeScript", "Python", "Solidity",
  "TensorFlow", "PyTorch", "Rust", "Go", "GraphQL",
  "IPFS", "Ethereum", "PostgreSQL", "Redis", "Docker", "Kubernetes",
];

export default function Marquee() {
  const doubled = [...TECHS, ...TECHS];
  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "20px 0",
        overflow: "hidden",
        background: "var(--surface)",
      }}
    >
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <div
            key={i}
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--muted)",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span style={{ color: "var(--accent)" }}>◆</span>
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
