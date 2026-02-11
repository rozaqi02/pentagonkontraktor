import React, { useMemo, useState } from "react";

import SEO from "../components/SEO";
import Container from "../components/Container";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import ProjectFilters from "../components/ProjectFilters";
import Reveal from "../components/Reveal";

import hero from "../assets/images/hero.jpg";
import { projects, projectCategories } from "../data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return projects.filter((p) => {
      const matchesCategory = activeCategory === "all" ? true : p.category === activeCategory;
      const matchesQuery = !q
        ? true
        : [p.title, p.location, p.size, p.status]
            .filter(Boolean)
            .join(" ")
            .toLowerCase()
            .includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <>
      <SEO title="Proyek" path="/projects" />

      <PageHero
        title="Portofolio Proyek"
        desc="Dokumentasi proyek hunian, komersial, perkantoran, dan renovasi."
        image={hero}
      />

      <section className="py-16">
        <Container>
          <SectionHeader
            eyebrow="Filter"
            title="Cari berdasarkan kategori atau kata kunci"
            desc="Klik proyek untuk melihat detail dan galeri."
          />

          <div className="mt-8">
            <ProjectFilters
              categories={projectCategories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              query={query}
              setQuery={setQuery}
            />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, idx) => (
              <Reveal key={p.slug} delay={idx * 0.03}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="mt-10 rounded-3xl bg-ink-50 p-8 text-center ring-1 ring-ink-900/5">
              <div className="text-sm font-extrabold text-ink-900">Tidak ada hasil</div>
              <div className="mt-2 text-sm text-ink-700">
                Coba ubah kategori atau kata kunci pencarian.
              </div>
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
}
