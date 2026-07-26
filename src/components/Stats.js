import React from "react";
import Reveal from "./Reveal";

export default function Stats({ items }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it, idx) => (
        <Reveal key={it.label} delay={idx * 0.04}>
          <div className="rounded-[6px] bg-white/5 border border-white/10 p-6 shadow-sm">
            <div className="text-2xl font-bold tracking-tight text-[#FDE68A] sm:text-3xl">{it.value}</div>
            <div className="mt-1.5 text-xs font-semibold text-white uppercase tracking-wider">{it.label}</div>
            {it.desc ? <div className="mt-2 text-xs leading-relaxed text-white/70 font-light">{it.desc}</div> : null}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
