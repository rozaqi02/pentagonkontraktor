import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiArrowLeftLine, RiArrowRightUpLine, RiImage2Line, RiWhatsappLine } from "react-icons/ri";

import SEO from "../components/SEO";
import Container from "../components/Container";
import Button from "../components/Button";
import ImageLightbox from "../components/ImageLightbox";
import Reveal from "../components/Reveal";

import { getProjectBySlug } from "../data/projects";
import { company } from "../data/siteData";

function statusClass(status) {
  if (status === "Selesai") return "bg-emerald-50 text-emerald-700 ring-emerald-600/15";
  if (status === "On Going") return "bg-amber-50 text-amber-700 ring-amber-600/15";
  return "bg-ink-50 text-ink-700 ring-ink-900/10";
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  const [open, setOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState(null);

  const waHref = useMemo(() => {
    const msg = encodeURIComponent(
      `Halo, saya tertarik dengan proyek "${project?.title || ""}". Saya ingin konsultasi untuk kebutuhan saya. Lokasi: ... Jenis bangunan: ... Perkiraan luas: ...`
    );
    return `https://wa.me/${company.primaryWhatsapp}?text=${msg}`;
  }, [project]);

  if (!project) {
    return (
      <section className="bg-soft py-20">
        <Container>
          <div className="rounded-3xl bg-white p-10 text-center shadow-soft ring-1 ring-ink-900/5">
            <div className="text-lg font-extrabold text-ink-900">Proyek tidak ditemukan</div>
            <p className="mt-2 text-sm text-ink-700">Kembali ke daftar proyek untuk memilih yang lain.</p>
            <div className="mt-6">
              <Button to="/projects" variant="brand">
                Kembali ke Proyek
              </Button>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      <SEO title={project.title} path={`/projects/${project.slug}`} />

      <section className="relative overflow-hidden bg-ink-900">
        <div className="absolute inset-0 -z-10">
          <img src={project.cover} alt="" className="h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/75 via-ink-900/55 to-ink-900" />
        </div>

        <Container className="py-16">
          <Link
            to="/projects"
            className="focus-ring inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur hover:bg-white/15"
          >
            <RiArrowLeftLine /> Kembali
          </Link>

          <div className="mt-8 max-w-3xl">
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ring-1 ${statusClass(project.status)}`}>
              {project.status}
            </span>

            <h1 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {project.title}
            </h1>

            <p className="mt-3 text-sm text-white/80">
              {project.location} • {project.size}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={waHref} target="_blank" variant="brand" size="lg" className="justify-center">
                <RiWhatsappLine className="text-lg" /> Konsultasi
              </Button>
              <Button to="/contact" variant="secondary" size="lg" className="justify-center">
                Minta Penawaran <RiArrowRightUpLine className="text-lg" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-ink-900/5">
                <div className="flex items-center gap-2 text-sm font-extrabold text-ink-900">
                  <RiImage2Line className="text-lg text-brand" />
                  Galeri
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.gallery.map((src, idx) => (
                    <Reveal key={src} delay={idx * 0.03}>
                      <button
                        className="focus-ring group relative overflow-hidden rounded-3xl ring-1 ring-ink-900/10"
                        onClick={() => {
                          setActiveSrc(src);
                          setOpen(true);
                        }}
                        aria-label="Buka gambar"
                      >
                        <img
                          src={src}
                          alt={`${project.title} - ${idx + 1}`}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                      </button>
                    </Reveal>
                  ))}
                </div>

                <div className="mt-6 text-xs text-ink-500">
                  Tip: klik gambar untuk memperbesar.
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-3xl bg-ink-50 p-7 ring-1 ring-ink-900/5">
                <div className="text-sm font-extrabold text-ink-900">Info Proyek</div>

                <div className="mt-4 space-y-3 text-sm text-ink-700">
                  <div>
                    <div className="text-xs text-ink-500">Lokasi</div>
                    <div className="font-semibold text-ink-900">{project.location}</div>
                  </div>
                  <div>
                    <div className="text-xs text-ink-500">Ukuran</div>
                    <div className="font-semibold text-ink-900">{project.size}</div>
                  </div>
                  <div>
                    <div className="text-xs text-ink-500">Status</div>
                    <div className="font-semibold text-ink-900">{project.status}</div>
                  </div>
                </div>

                <div className="mt-7 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-ink-900/5">
                  <div className="text-xs font-bold text-ink-500">Konsultasi cepat</div>
                  <div className="mt-2 text-sm font-semibold text-ink-900">
                    {company.phones[0].display}
                  </div>
                  <div className="mt-4">
                    <Button href={waHref} target="_blank" variant="brand" className="w-full justify-center">
                      Chat WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="mt-6 text-xs text-ink-600">
                  Kirim detail singkat: lokasi, jenis bangunan, perkiraan luas, dan target waktu.
                </div>
              </div>
            </div>
          </div>
        </Container>

        <ImageLightbox open={open} onClose={() => setOpen(false)} src={activeSrc} alt={project.title} />
      </section>
    </>
  );
}
