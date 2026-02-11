import React, { useMemo } from "react";
import { RiArrowRightUpLine, RiFileDownloadLine, RiShieldCheckLine } from "react-icons/ri";

import SEO from "../components/SEO";
import Container from "../components/Container";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import Timeline from "../components/Timeline";
import Stats from "../components/Stats";
import Accordion from "../components/Accordion";
import ProjectCard from "../components/ProjectCard";

import hero from "../assets/images/hero.jpg";
import { company, services, processSteps, faq } from "../data/siteData";
import { projects } from "../data/projects";

export default function Home() {
  const waHref = useMemo(() => {
    const msg = encodeURIComponent(
      "Halo, saya ingin konsultasi proyek dengan CV. Pentagon Konstruksindo. Lokasi: ... Jenis bangunan: ... Perkiraan luas: ..."
    );
    return `https://wa.me/${company.primaryWhatsapp}?text=${msg}`;
  }, []);

  const featured = useMemo(() => projects.slice(0, 6), []);
  const stats = useMemo(
    () => [
      { value: "Desain → Build", label: "Layanan terpadu", desc: "Mulai dari konsep, perencanaan, hingga pelaksanaan." },
      { value: "Hunian", label: "Rumah & kost", desc: "Ruang yang nyaman, fungsional, dan bernilai investasi." },
      { value: "Komersial", label: "Ruko, cafe, gudang", desc: "Mendukung operasional dan pengalaman pelanggan." },
      { value: "Perkantoran", label: "Kantor representatif", desc: "Tata ruang yang menunjang produktivitas." }
    ],
    []
  );


  return (
    <>
      <SEO
        title="Company Profile"
        description="Jasa arsitektur & konstruksi terpadu untuk hunian, komersial, dan perkantoran."
        path="/"
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink-900">
        <img
          src={hero}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-900/75 via-ink-900/55 to-ink-900" />

        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7" delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15 backdrop-blur">
                <RiShieldCheckLine className="text-base" />
                {company.brandLine}
              </div>

              <h1 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                {company.tagline}
              </h1>

              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/85">
                {company.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button to="/projects" variant="brand" size="lg" className="justify-center">
                  Lihat Proyek <RiArrowRightUpLine className="text-lg" />
                </Button>

                <Button
                  href={waHref}
                  target="_blank"
                  variant="secondary"
                  size="lg"
                  className="justify-center"
                >
                  Konsultasi WhatsApp
                </Button>

                <Button
                  href="/assets/company-profile.pdf"
                  variant="ghost"
                  size="lg"
                  className="justify-center text-white hover:bg-white/10 hover:text-white ring-1 ring-white/15"
                >
                  <RiFileDownloadLine className="text-lg" />
                  Company Profile
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap gap-2 text-xs text-white/70">
                <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Desain</span>
                <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Perencanaan</span>
                <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Pelaksanaan</span>
                <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Renovasi</span>
                <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Interior</span>
              </div>
            </Reveal>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white/10 p-6 text-white ring-1 ring-white/15 backdrop-blur">
                <div className="text-sm font-extrabold">Kontak Cepat</div>
                <div className="mt-4 space-y-3 text-sm text-white/85">
                  <div>
                    <div className="text-xs text-white/65">WhatsApp</div>
                    <div className="font-semibold">
                      {company.phones.map((p) => p.display).join(" • ")}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-white/65">Email</div>
                    <div className="font-semibold">{company.email}</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/65">Alamat</div>
                    <div className="font-semibold">
                      {company.address.line1}, {company.address.line2}, {company.address.line3}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button href={waHref} target="_blank" variant="brand" className="w-full justify-center">
                    Chat Sekarang
                  </Button>
                </div>

                <div className="mt-4 text-xs text-white/60">
                  Respon lebih cepat via WhatsApp. Sertakan lokasi, tipe bangunan, dan perkiraan luas.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="bg-soft py-14">
        <Container>
          <Stats items={stats} />
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-16">
        <Container>
          <SectionHeader
            eyebrow="Layanan"
            title="Solusi end-to-end: dari desain hingga eksekusi"
            desc="Kami menyiapkan alur kerja yang rapi dan terukur agar proyek berjalan efisien—tanpa mengorbankan kualitas."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((s, idx) => (
              <Reveal key={s.id} delay={idx * 0.05}>
                <div className="rounded-3xl bg-white p-7 shadow-soft ring-1 ring-ink-900/5">
                  <div className="text-lg font-extrabold text-ink-900">{s.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{s.desc}</p>

                  <ul className="mt-4 space-y-2 text-sm text-ink-700">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 flex-none rounded-full bg-brand" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button to="/services" variant="primary">
              Detail Layanan <RiArrowRightUpLine className="text-lg" />
            </Button>
            <Button href="/assets/company-profile.pdf" variant="secondary">
              <RiFileDownloadLine className="text-lg" />
              Download Profil (PDF)
            </Button>
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="bg-soft py-16">
        <Container>
          <SectionHeader
            eyebrow="Cara Kerja"
            title="Proses kerja yang terstruktur"
            desc="Lebih jelas sejak awal: scope, estimasi biaya, timeline, dan mekanisme komunikasi."
          />
          <div className="mt-10">
            <Timeline steps={processSteps} />
          </div>
        </Container>
      </section>

      {/* PROJECTS */}
      <section className="py-16">
        <Container>
          <SectionHeader
            eyebrow="Portofolio"
            title="Beberapa proyek pilihan"
            desc="Contoh dokumentasi proyek hunian, komersial, perkantoran, dan renovasi."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, idx) => (
              <Reveal key={p.slug} delay={idx * 0.04}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <Button to="/projects" variant="brand">
              Lihat Semua Proyek <RiArrowRightUpLine className="text-lg" />
            </Button>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-soft py-16">
        <Container>
          <SectionHeader
            eyebrow="FAQ"
            title="Pertanyaan yang sering ditanyakan"
            desc="Jika masih ada pertanyaan, tim kami siap membantu via WhatsApp."
          />
          <div className="mt-10 max-w-3xl">
            <Accordion items={faq} />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink-900 p-10 text-white shadow-glow ring-1 ring-black/10">
            <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_0%,rgba(249,136,20,0.35),transparent_60%),radial-gradient(700px_400px_at_90%_10%,rgba(79,118,192,0.25),transparent_55%)]" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="text-xs font-bold text-white/70">Siap memulai?</div>
                <div className="mt-3 text-balance text-3xl font-extrabold tracking-tight">
                  Konsultasikan kebutuhan proyek Anda hari ini.
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85">
                  Kirim detail singkat—lokasi, jenis bangunan, perkiraan luas, dan target waktu. Kami bantu arahkan langkah awalnya.
                </p>
              </div>
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <div className="flex w-full flex-col gap-3 sm:flex-row lg:flex-col">
                  <Button href={waHref} target="_blank" variant="brand" size="lg" className="w-full justify-center">
                    Konsultasi WhatsApp
                  </Button>
                  <Button to="/contact" variant="secondary" size="lg" className="w-full justify-center">
                    Form Penawaran
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
