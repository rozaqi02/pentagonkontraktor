import React, { useEffect, useId, useRef, useState } from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import cn from "classnames";

function AccordionItem({ q, a, isOpen, onToggle }) {
  const contentId = useId();
  const innerRef = useRef(null);
  const [height, setHeight] = useState(0);

  const measure = () => {
    const el = innerRef.current;
    if (!el) return;
    setHeight(el.scrollHeight);
  };

  useEffect(() => {
    if (!isOpen) return;

    // Measure on open + on resize (so height stays correct)
    const id = requestAnimationFrame(measure);
    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div className="rounded-3xl bg-white shadow-soft ring-1 ring-ink-900/5">
      <button
        className="focus-ring flex w-full items-center justify-between gap-4 rounded-3xl px-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="text-sm font-extrabold text-ink-900">{q}</span>

        <span
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-2xl ring-1 transition",
            "ring-ink-900/5",
            isOpen ? "bg-ink-900 text-white" : "bg-ink-50 text-ink-900"
          )}
        >
          {isOpen ? <RiSubtractLine /> : <RiAddLine />}
        </span>
      </button>

      <div
        id={contentId}
        className="accordion-panel overflow-hidden transition-[height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ height: isOpen ? height : 0 }}
      >
        <div
          ref={innerRef}
          className={cn(
            "px-6 pb-6 text-sm leading-relaxed text-ink-700 transition-opacity duration-200",
            isOpen ? "opacity-100" : "opacity-0"
          )}
        >
          {a}
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <AccordionItem
            key={it.q}
            q={it.q}
            a={it.a}
            isOpen={isOpen}
            onToggle={() => setOpen(isOpen ? null : idx)}
          />
        );
      })}
    </div>
  );
}
