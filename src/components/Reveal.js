import React, { useEffect, useRef, useState } from "react";

/**
 * Lightweight scroll-reveal without Framer Motion.
 * - Uses IntersectionObserver (cheap)
 * - Animates only opacity + transform (GPU-friendly)
 * - Respects prefers-reduced-motion
 */
export default function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      className={[
        "reveal",
        shown ? "reveal--in" : "",
        className
      ].join(" ")}
    >
      {children}
    </div>
  );
}
