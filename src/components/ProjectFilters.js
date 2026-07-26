import React from "react";
import cn from "classnames";
import { RiSearch2Line } from "react-icons/ri";

export default function ProjectFilters({
  categories,
  activeCategory,
  setActiveCategory,
  query,
  setQuery
}) {
  return (
    <div className="flex flex-col gap-4 rounded-[6px] bg-white p-4 border border-ink-200 shadow-sm md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={cn(
              "focus-ring rounded-[4px] px-4 py-2 text-xs font-semibold border transition",
              activeCategory === c.id
                ? "bg-brand text-white border-transparent"
                : "bg-white text-ink-700 border-ink-200 hover:bg-ink-50 hover:text-ink-900"
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="relative w-full md:max-w-sm">
        <RiSearch2Line className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-ink-500" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari proyek…"
          className="focus-ring w-full rounded-[4px] border border-ink-200 bg-white py-2 pl-10 pr-3 text-sm text-ink-900 placeholder:text-ink-400"
        />
      </div>
    </div>
  );
}
