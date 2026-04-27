"use client";

import { useState, useEffect, useRef } from "react";

export default function CountUp({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io.disconnect();
          let start = 0;
          const dur = 1800;
          const step = (ts: number) => {
            if (!start) start = ts;
            const prog = Math.min((ts - start) / dur, 1);
            const eased = 1 - Math.pow(1 - prog, 3);
            setVal(Math.floor(eased * target));
            if (prog < 1) requestAnimationFrame(step);
            else setVal(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
