"use client";

import { useEffect, useRef, useState } from "react";

interface Line {
  type: "prompt" | "output" | "blank";
  text: string;
  dim?: boolean;
}

const SCRIPT: Line[] = [
  { type: "prompt", text: "git clone git@forge:trading-infra" },
  { type: "output", text: "Cloning into 'trading-infra'...", dim: true },
  { type: "output", text: "Done. 2,847 objects received." },
  { type: "blank",  text: "" },
  { type: "prompt", text: "npm run build" },
  { type: "output", text: "> next build", dim: true },
  { type: "output", text: "Compiled in 8.3s. 47 routes." },
  { type: "blank",  text: "" },
  { type: "prompt", text: "python train.py --model forge-v2" },
  { type: "output", text: "Epoch 50/50  loss: 0.0023", dim: true },
  { type: "output", text: "Checkpoint saved. Accuracy: 94.2%" },
  { type: "blank",  text: "" },
  { type: "prompt", text: "forge deploy --chain mainnet" },
  { type: "output", text: "Deploying to Ethereum mainnet...", dim: true },
  { type: "output", text: "Contract verified. 0x4a2f...d8e1" },
];

export default function HeroTerminal() {
  const [completedLines, setCompletedLines] = useState<Line[]>([]);
  const [typingText, setTypingText]         = useState("");
  const [cursorOn, setCursorOn]             = useState(true);
  const bodyRef = useRef<HTMLDivElement>(null);

  /* Auto-scroll to bottom as content grows */
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [completedLines, typingText]);

  useEffect(() => {
    let lIdx = 0;
    let cIdx = 0;
    let timer: ReturnType<typeof setTimeout>;

    function step() {
      if (lIdx >= SCRIPT.length) {
        timer = setTimeout(() => {
          setCompletedLines([]);
          setTypingText("");
          lIdx = 0;
          cIdx = 0;
          timer = setTimeout(step, 400);
        }, 3000);
        return;
      }

      const line = SCRIPT[lIdx];

      if (line.type === "prompt") {
        if (cIdx <= line.text.length) {
          setTypingText(line.text.slice(0, cIdx));
          cIdx++;
          timer = setTimeout(step, 58);
        } else {
          setCompletedLines(prev => [...prev, line]);
          setTypingText("");
          lIdx++;
          cIdx = 0;
          timer = setTimeout(step, 80);
        }
      } else if (line.type === "output") {
        setCompletedLines(prev => [...prev, line]);
        lIdx++;
        timer = setTimeout(step, 160);
      } else {
        setCompletedLines(prev => [...prev, line]);
        lIdx++;
        timer = setTimeout(step, 280);
      }
    }

    timer = setTimeout(step, 900);
    const blink = setInterval(() => setCursorOn(v => !v), 540);
    return () => { clearTimeout(timer); clearInterval(blink); };
  }, []);

  const PromptPrefix = () => (
    <>
      <span style={{ color: "#F5A623" }}>dev@forge</span>
      <span style={{ color: "rgba(255,255,255,0.25)", margin: "0 5px" }}>~</span>
      <span style={{ color: "#64D2FF" }}>%</span>
    </>
  );

  return (
    <div style={{
      width: 500,
      background: "#1C1C1E",
      borderRadius: 8,
      border: "1px solid rgba(255,255,255,0.08)",
      overflow: "hidden",
      boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
      fontFamily: "var(--font-mono), monospace",
      fontSize: 13,
      lineHeight: 1.75,
    }}>
      {/* Title bar */}
      <div style={{
        background: "#2C2C2E",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        position: "relative",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        userSelect: "none",
      }}>
        <div style={{ display: "flex", gap: 7 }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F57" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FFBD2E" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28CA41" }} />
        </div>
        <span style={{
          position: "absolute",
          left: 0, right: 0,
          textAlign: "center",
          fontSize: 12,
          color: "rgba(255,255,255,0.35)",
          pointerEvents: "none",
        }}>
          zsh
        </span>
      </div>

      {/* Body — content flows top to bottom, scrolls to follow latest line */}
      <div
        ref={bodyRef}
        className="terminal-body"
        style={{
          height: 300,
          padding: "16px 20px 20px",
          color: "#F0EDE6",
          overflowY: "auto",
        }}
      >
        {completedLines.map((line, i) => (
          <div key={i}>
            {line.type === "prompt" ? (
              <div>
                <PromptPrefix />
                <span style={{ marginLeft: 8 }}>{line.text}</span>
              </div>
            ) : line.type === "output" ? (
              <div style={{ color: line.dim ? "rgba(255,255,255,0.32)" : "rgba(255,255,255,0.72)" }}>
                {line.text}
              </div>
            ) : (
              <div style={{ height: "0.8em" }} />
            )}
          </div>
        ))}

        {/* Active prompt + blinking cursor */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <PromptPrefix />
          <span style={{ marginLeft: 8 }}>{typingText}</span>
          <span style={{
            display: "inline-block",
            width: 7,
            height: "0.85em",
            background: cursorOn ? "rgba(245,166,35,0.9)" : "transparent",
            marginLeft: 1,
            verticalAlign: "text-bottom",
          }} />
        </div>
      </div>
    </div>
  );
}
