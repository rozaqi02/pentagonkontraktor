import React from "react";
import Reveal from "./Reveal";

export default function Timeline({ steps }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {steps.map((s, idx) => (
        <Reveal key={s.title} delay={idx * 0.04}>
          <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink-900/5">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-sm font-extrabold text-brand-700 ring-1 ring-brand-600/10">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="text-sm font-extrabold text-ink-900">{s.title}</div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">{s.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
