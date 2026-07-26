import React, { useMemo } from "react";
import { 
  RiArrowRightLine,
  RiShieldCheckLine,
  RiMailLine,
  RiWhatsappLine,
  RiStarFill,
  RiBuilding4Line
} from "react-icons/ri";

import SEO from "../components/SEO";
import Container from "../components/Container";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import Timeline from "../components/Timeline";
import Accordion from "../components/Accordion";
import ProjectCard from "../components/ProjectCard";

import hero from "../assets/images/home-hero.jpeg";
import minimalWorkspace from "../assets/images/minimal-workspace.png";
import solidBlackBackdrop from "../assets/images/solid-black-backdrop.png";
import proj1 from "../assets/images/projects/kost-bukit-hijau-cover.jpg";
import proj2 from "../assets/images/projects/hoci-kopitiam-cover.jpg";
import proj3 from "../assets/images/projects/kantor-kilap-premium-cover.jpg";
import proj4 from "../assets/images/projects/lets-build-collage-cover.jpg";
import { company, services, processSteps, faq } from "../data/siteData";
import { projects } from "../data/projects";

export default function Home() {
  const waHref = useMemo(() => {
    const msg = encodeURIComponent(
      "Halo, saya ingin menjadwalkan konsultasi proyek dengan representatif CV. Pentagon Konstruksindo."
    );
    return `https://wa.me/${company.primaryWhatsapp}?text=${msg}`;
  }, []);

  const featured = useMemo(() => projects.slice(0, 6), []);
  const stats = useMemo(
    () => [
      { value: "Desain → Build", label: "Layanan Terpadu", desc: "Dari tahap konsep arsitektur hingga serah terima kunci." },
      { value: "Hunian", label: "Kenyamanan Maksimal", desc: "Perencanaan rumah dan kost bernilai investasi tinggi." },
      { value: "Komersial", label: "Fungsionalitas Usaha", desc: "Pengembangan ruko, cafe, dan fasilitas komersial." },
      { value: "Perkantoran", label: "Ruang Produktif", desc: "Tata ruang representatif penunjang efisiensi bisnis." }
    ],
    []
  );

  return (
    <>
      <SEO
        description="Layanan arsitektur dan konstruksi profesional untuk hunian, ruang usaha, dan perkantoran."
        path="/"
      />

      {/* --- HERO SECTION --- */}
      <section className="relative isolate overflow-hidden bg-black pt-20 pb-56 sm:pt-28 sm:pb-64">
        {/* Simple black backdrop photography background image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: `url(${solidBlackBackdrop})` }}
        />

        <Container>
          {/* Text grid */}
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8 items-start">
            <Reveal className="lg:col-span-7" delay={0}>
              <h1 className="text-balance text-4xl font-extrabold tracking-tighter text-white sm:text-6xl sm:leading-[1.10]">
                Dari Desain ke Realita, Kami Hadir untuk Anda.
              </h1>
            </Reveal>

            <Reveal className="lg:col-span-5 lg:pl-10 mt-1 lg:mt-6" delay={0.15}>
              <p className="text-pretty text-base leading-relaxed text-white/80 sm:text-lg font-normal mb-8">
                Sebagai mitra strategis, CV. Pentagon Konstruksindo mentransformasi visi Anda menjadi ruang hunian, komersial, dan perkantoran yang presisi, tangguh, serta bernilai estetika tinggi.
              </p>

              <Button to="/projects" variant="brand" size="lg" className="group rounded-[4px] inline-flex items-center">
                Eksplorasi Portofolio
                <RiArrowRightLine className="text-xl ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* --- QUOTE / PHILOSOPHY SECTION (Identical to mit.id Section 2) --- */}
      <section className="bg-white pb-20 sm:pb-28">
        <Container>
          {/* Overlapping Hero image: pulled up, centered, and restricted in width for a slender/ramping look */}
          <Reveal className="w-full relative z-10 -mt-32 sm:-mt-40 lg:-mt-44 mb-16 sm:mb-20 max-w-5xl mx-auto" delay={0.3}>
            <div className="relative aspect-[21/9] w-full overflow-hidden">
              <img
                src={hero}
                alt="Aktivitas lapangan CV. Pentagon Konstruksindo"
                className="h-full w-full object-cover object-[center_60%]"
              />
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand">
                FILOSOFI & VISI
              </span>
            </div>
            <div className="lg:col-span-8">
              <blockquote className="text-2xl sm:text-4xl font-extrabold tracking-tight text-ink-900 leading-tight">
                "{company.vision}"
              </blockquote>
              <div className="mt-8 h-[3px] w-[320px] bg-brand" />
            </div>
          </div>
        </Container>
      </section>

      {/* --- SERVICES SECTION (Identical to mit.id Section 3) --- */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-white border-t border-ink-100">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <SectionHeader
                eyebrow="EKSPERTISE KAMI"
                title="Integritas dalam Setiap Konstruksi"
                desc="Menghadirkan harmoni antara estetika desain dan ketahanan struktural. Dedikasi kami mencakup efisiensi waktu, pengelolaan anggaran yang transparan, serta hasil akhir berstandar tinggi."
              />
            </div>
            <Button to="/services" variant="ghost" className="hidden md:inline-flex group shrink-0 font-semibold text-ink-900 hover:bg-ink-50 border border-ink-200 px-4 py-2 rounded-[4px]">
              Jelajahi Layanan <RiArrowRightLine className="text-xl ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => (
              <Reveal 
                key={s.id} 
                delay={idx * 0.1}
                className={idx === 0 ? "md:col-span-2" : "col-span-1"}
              >
                <div className="group relative h-full rounded-[4px] bg-white p-8 border border-ink-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-[4px] bg-ink-50 text-brand border border-ink-200 transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:border-transparent">
                    {idx === 0 ? <RiBuilding4Line className="text-2xl" /> : <RiShieldCheckLine className="text-2xl" />}
                  </div>
                  <h3 className="text-xl font-bold text-ink-900 tracking-tight">{s.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-600 font-normal">{s.desc}</p>
                  <ul className="mt-6 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-xs text-ink-700">
                        <RiStarFill className="text-brand shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* --- EXPERIENCE & METRICS SECTION (Orange Block, Identical to mit.id Section 4) --- */}
      <section className="bg-brand text-white py-20 sm:py-28 relative overflow-hidden">
        {/* Dot pattern background matching mit.id experience block */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left column: clean office workspace image */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[4px] aspect-[4/3] sm:aspect-square shadow-xl">
                <img
                  src={minimalWorkspace}
                  alt="Pentagon Office"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Right column: experience info and metrics grid */}
            <div className="lg:col-span-7 lg:pl-10">
              <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                KREDIBILITAS & STATISTIK
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-white mb-10 leading-tight">
                Lebih dari 10 Tahun Mengabdi di Industri Konstruksi & Pembangunan
              </h2>

              <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/20 pt-8">
                {stats.map((it) => (
                  <div key={it.label} className="flex flex-col">
                    <span className="text-4xl font-extrabold tracking-tight text-white mb-2">
                      {it.value}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-wider text-white/95">
                      {it.label}
                    </span>
                    <span className="text-xs text-white/70 mt-1 font-normal leading-relaxed">
                      {it.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- COLLAGE & PROCESS SECTION (Identical to mit.id Section 5) --- */}
      <section className="bg-white py-20 sm:py-28 relative overflow-hidden">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 items-center">
            {/* Left column: Callout details and corporate missions */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand">
                PROSEDUR KERJA
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-ink-900 leading-tight">
                Bagaimana Kami Mewujudkan Proyek Impian Anda?
              </h2>
              <p className="mt-6 text-sm sm:text-base leading-relaxed text-ink-600 font-normal">
                Setiap fase dirancang dengan kepatuhan presisi untuk menjamin kelancaran komunikasi, validitas desain, dan eksekusi lapangan.
              </p>

              {/* Missions inline block list (keeps content safe) */}
              <div className="mt-10 border-t border-ink-100 pt-8">
                <span className="text-xs font-bold uppercase tracking-widest text-ink-900 block mb-6">MISI PERUSAHAAN KAMI</span>
                <ul className="space-y-4">
                  {company.missions.map((misi, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-ink-700 group">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[4px] bg-brand/10 text-brand mt-1 transition-colors group-hover:bg-brand group-hover:text-white">
                        <span className="font-bold text-xs">{idx + 1}</span>
                      </div>
                      <span className="text-sm sm:text-base leading-relaxed font-normal">{misi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right column: Gorgeous 4-image collage */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src={proj1} alt="Project 1" className="w-full rounded-[4px] object-cover aspect-square border border-ink-100 shadow-sm" />
                  <img src={proj2} alt="Project 2" className="w-full rounded-[4px] object-cover aspect-[3/4] border border-ink-100 shadow-sm" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src={proj3} alt="Project 3" className="w-full rounded-[4px] object-cover aspect-[3/4] border border-ink-100 shadow-sm" />
                  <img src={proj4} alt="Project 4" className="w-full rounded-[4px] object-cover aspect-square border border-ink-100 shadow-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Standard clean timeline to present processSteps without loss of data */}
          <div className="mt-20 border-t border-ink-100 pt-16">
            <Timeline steps={processSteps} />
          </div>
        </Container>
      </section>

      {/* --- PROJECTS GALLERY SECTION (Identical to mit.id gallery section style) --- */}
      <section className="py-20 sm:py-28 bg-white border-t border-ink-100">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end mb-12">
            <div className="max-w-2xl">
              <SectionHeader
                eyebrow="Portofolio Eksklusif"
                title="Jejak Karya Konstruksi"
                desc="Eksplorasi dedikasi kami dalam mentransformasi konsep desain menjadi struktur fisik bernilai tinggi."
              />
            </div>
            <Button to="/projects" variant="primary" className="group shrink-0 shadow-sm hover:shadow-md transition-all border border-ink-200 px-4 py-2 rounded-[4px]">
              Tinjau Galeri Proyek <RiArrowRightLine className="text-xl ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, idx) => (
              <Reveal key={p.slug} delay={idx * 0.1}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-20 sm:py-28 bg-ink-50/40 border-t border-b border-ink-200">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <SectionHeader
                eyebrow="Layanan Informasi Terpadu"
                title="Panduan & Pertanyaan Esensial"
                desc="Akses informasi komprehensif terkait kapabilitas teknis dan kemitraan kami. Membutuhkan diskusi lebih lanjut? Kami siap berkorespondensi."
              />
              
              <div className="mt-10 space-y-4">
                <div className="p-6 rounded-[4px] bg-white shadow-sm border border-ink-200 border-l-4 border-l-brand">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-brand/10 text-brand border border-brand/20">
                      <RiWhatsappLine className="text-xl" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-ink-900 text-sm">Hotline & WhatsApp</h4>
                      <p className="text-sm font-semibold text-ink-700 mt-1">{company.phones[0].display}</p>
                    </div>
                  </div>
                  <Button href={waHref} target="_blank" variant="brand" className="w-full justify-center shadow-sm text-xs py-2">
                    Mulai Percakapan
                  </Button>
                </div>

                <div className="p-6 rounded-[4px] bg-white shadow-sm border border-ink-200 border-l-4 border-l-ink-600">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-ink-100 text-ink-700 border border-ink-200">
                      <RiMailLine className="text-lg" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-ink-900 text-sm">Surat Elektronik</h4>
                      <p className="text-xs text-ink-600 mt-1 font-light break-all">{company.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="rounded-[4px] bg-white p-6 border border-ink-200 shadow-sm sm:p-8">
                <Accordion items={faq} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- CTA SECTION (Grey Border Banner, Identical to mit.id Section 6) --- */}
      <section className="py-20 sm:py-28 px-4 bg-white">
        <Container>
          <div className="relative overflow-hidden rounded-[4px] border border-ink-200 bg-ink-50/30 px-6 py-16 text-center text-ink-900 lg:mx-auto lg:max-w-[1100px] shadow-sm">
            {/* Background design accents similar to mit.id CTA card */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]" />
            <div className="absolute -left-12 -top-12 h-24 w-24 rounded-full bg-ink-100/40" />
            <div className="absolute -right-12 -bottom-12 h-24 w-24 rounded-full bg-ink-100/40" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="inline-block rounded-[4px] bg-brand/10 px-4 py-1.5 text-xs font-bold text-brand border border-brand/20 mb-6 uppercase tracking-wider">
                Langkah Selanjutnya
              </span>
              <h2 className="text-balance text-2xl sm:text-4xl font-extrabold tracking-tight mb-6 text-black leading-tight">
                Mari Bangun Masa Depan Anda Bersama Kami.
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-ink-600 max-w-2xl mx-auto mb-10 font-normal">
                Konsultasikan kebutuhan spesifikasi teknis, estimasi pembiayaan, dan nilai estetika proyek Anda kepada tim ahli kami hari ini.
              </p>
              
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href={waHref} target="_blank" variant="brand" size="lg" className="w-full justify-center sm:w-auto shadow-sm rounded-[4px]">
                  <RiWhatsappLine className="text-xl mr-2" />
                  Jadwalkan Konsultasi Teknis
                </Button>
                <Button to="/contact" variant="secondary" size="lg" className="w-full justify-center sm:w-auto rounded-[4px]">
                  Akses Formulir Penawaran
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}