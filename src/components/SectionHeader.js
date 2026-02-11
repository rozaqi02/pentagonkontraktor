import React from "react";
import cn from "classnames";

export default function SectionHeader({ eyebrow, title, desc, align = "left", className }) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={cn("flex flex-col gap-3", alignCls, className)}>
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-600/10">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {eyebrow}
        </div>
      ) : null}

      <h2 className="text-balance text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
        {title}
      </h2>

      {desc ? (
        <p className={cn("max-w-2xl text-pretty text-base leading-relaxed text-ink-700", align === "center" && "mx-auto")}>
          {desc}
        </p>
      ) : null}
    </div>
  );
}
