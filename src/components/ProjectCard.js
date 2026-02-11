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
      className="group focus-ring overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink-900/5 transition hover:-translate-y-[2px] hover:shadow-glow"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/55 via-ink-900/0 to-transparent" />

        <div className="absolute left-4 top-4">
          <span
            className={cn(
              "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ring-1",
              statusClass(project.status)
            )}
          >
            {project.status}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <div className="text-sm font-extrabold text-white">{project.title}</div>
              <div className="mt-1 text-xs text-white/85">
                {project.location} • {project.size}
              </div>
            </div>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15 backdrop-blur transition group-hover:bg-white/15">
              <RiArrowRightUpLine className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
