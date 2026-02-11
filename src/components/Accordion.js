import React, { useState } from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div key={it.q} className="rounded-3xl bg-white shadow-soft ring-1 ring-ink-900/5">
            <button
              className="focus-ring flex w-full items-center justify-between gap-4 rounded-3xl px-6 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className="text-sm font-extrabold text-ink-900">{it.q}</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-ink-50 text-ink-900 ring-1 ring-ink-900/5">
                {isOpen ? <RiSubtractLine /> : <RiAddLine />}
              </span>
            </button>

            {isOpen ? (
              <div className="px-6 pb-6 text-sm leading-relaxed text-ink-700">
                {it.a}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
