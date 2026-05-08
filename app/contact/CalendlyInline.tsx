"use client";

import { useEffect, useRef } from "react";
import { CALENDLY_EMBED_URL } from "@/lib/calendly";

export default function CalendlyInline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function init() {
      if (ref.current && window.Calendly) {
        window.Calendly.initInlineWidget({ url: CALENDLY_EMBED_URL, parentElement: ref.current });
      }
    }

    if (window.Calendly) {
      init();
    } else {
      const id = setInterval(() => {
        if (window.Calendly) { init(); clearInterval(id); }
      }, 200);
      return () => clearInterval(id);
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{ minWidth: 320, height: 700, background: "transparent" }}
    />
  );
}
