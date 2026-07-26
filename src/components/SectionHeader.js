import React from "react";
import cn from "classnames";

export default function SectionHeader({ eyebrow, title, desc, align = "left", className }) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={cn("flex flex-col gap-2", alignCls, className)}>
      {eyebrow ? (
        <span className="text-xs font-bold uppercase tracking-widest text-brand">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {desc ? (
        <p className={cn("max-w-3xl text-sm sm:text-base leading-relaxed text-ink-600 font-normal mt-2", align === "center" && "mx-auto")}>
          {desc}
        </p>
      ) : null}
    </div>
  );
}
