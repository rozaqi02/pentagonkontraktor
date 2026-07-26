import React from "react";
import Reveal from "./Reveal";

export default function Timeline({ steps }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {steps.map((s, idx) => (
        <Reveal key={s.title} delay={idx * 0.04}>
          <div className="rounded-[6px] bg-white p-6 border border-ink-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-[4px] bg-brand/10 text-sm font-extrabold text-brand border border-brand/20">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="text-sm font-bold text-ink-900">{s.title}</div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-600 font-light">{s.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
