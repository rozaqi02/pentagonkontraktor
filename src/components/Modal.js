import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { RiCloseLine } from "react-icons/ri";

export default function Modal({ open, onClose, title, children, maxWidth = "max-w-4xl" }) {
  useEffect(() => {
    if (!open) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title || "Dialog"}
      onMouseDown={(e) => {
        // close on clicking backdrop
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className="absolute inset-0 bg-ink-900/60 md:backdrop-blur-sm modal-backdrop" />

      <div className={`modal-panel relative w-full ${maxWidth} overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink-900/10`}>
        <div className="flex items-center justify-between border-b border-ink-900/5 px-5 py-4">
          <div className="text-sm font-extrabold text-ink-900">{title}</div>
          <button
            onClick={onClose}
            className="focus-ring rounded-xl p-2 text-ink-900 hover:bg-ink-50"
            aria-label="Tutup"
          >
            <RiCloseLine className="text-2xl" />
          </button>
        </div>

        <div className="max-h-[80vh] overflow-auto p-5">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
