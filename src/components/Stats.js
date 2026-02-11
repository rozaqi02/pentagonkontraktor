import React from "react";
import Reveal from "./Reveal";

export default function Stats({ items }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it, idx) => (
        <Reveal key={it.label} delay={idx * 0.04}>
          <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink-900/5">
            <div className="text-2xl font-extrabold tracking-tight text-ink-900">{it.value}</div>
            <div className="mt-1 text-sm font-semibold text-ink-700">{it.label}</div>
            {it.desc ? <div className="mt-2 text-xs leading-relaxed text-ink-600">{it.desc}</div> : null}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
