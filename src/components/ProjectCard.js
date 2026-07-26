import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { RiArrowRightUpLine } from "react-icons/ri";

function statusClass(status) {
  if (status === "Selesai") return "bg-emerald-50 text-emerald-700 ring-emerald-600/15";
  if (status === "On Going") return "bg-amber-50 text-amber-700 ring-amber-600/15";
  return "bg-ink-50 text-ink-700 ring-ink-900/10";
}

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group focus-ring overflow-hidden rounded-[6px] bg-white border border-ink-200/60 shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          className="h-full w-full object-cover transition duration-750 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute left-4 top-4">
          <span
            className={cn(
              "inline-flex items-center rounded-[2px] px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ring-1",
              statusClass(project.status)
            )}
          >
            {project.status}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <div className="text-sm font-bold text-white tracking-tight">{project.title}</div>
              <div className="mt-1 text-xs text-white/85 font-light">
                {project.location} • {project.size}
              </div>
            </div>
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-[4px] bg-white/10 text-white border border-white/15 transition group-hover:bg-white/20">
              <RiArrowRightUpLine className="text-lg" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
