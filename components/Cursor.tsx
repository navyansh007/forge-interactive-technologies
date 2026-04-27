"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const over = (e: MouseEvent) => {
      const t = (e.target as Element).closest(
        "a,button,.case-card,.service-card,.process-step,.nav-cta"
      );
      if (t) cursor.classList.add("hovering");
      else cursor.classList.remove("hovering");
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <div id="cursor">
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Black outline layer — drawn first so it sits behind */}
        <line x1="10" y1="2"  x2="10" y2="6"  stroke="#0A0A0A" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="10" y1="14" x2="10" y2="18" stroke="#0A0A0A" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="2"  y1="10" x2="6"  y2="10" stroke="#0A0A0A" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="14" y1="10" x2="18" y2="10" stroke="#0A0A0A" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="2.8" fill="#0A0A0A" />
        {/* White / accent foreground layer */}
        <line className="cursor-ring" x1="10" y1="2"  x2="10" y2="6"  stroke="#F0EDE6" strokeWidth="1.5" />
        <line className="cursor-ring" x1="10" y1="14" x2="10" y2="18" stroke="#F0EDE6" strokeWidth="1.5" />
        <line className="cursor-ring" x1="2"  y1="10" x2="6"  y2="10" stroke="#F0EDE6" strokeWidth="1.5" />
        <line className="cursor-ring" x1="14" y1="10" x2="18" y2="10" stroke="#F0EDE6" strokeWidth="1.5" />
        <circle className="cursor-dot" cx="10" cy="10" r="1.5" fill="#F0EDE6" />
      </svg>
    </div>
  );
}
