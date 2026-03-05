import React, { useMemo } from "react";
import { 
  RiArrowRightUpLine, 
  RiShieldCheckLine,
  RiMailLine,
  RiMapPinLine,
  RiWhatsappLine,
  RiStarFill,
  RiBuilding4Line,
  RiCheckDoubleLine
} from "react-icons/ri";

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
        title="Company Profile | CV. Pentagon Konstruksindo"
        description="Layanan arsitektur dan konstruksi profesional untuk hunian, ruang usaha, dan perkantoran."
        path="/"
      />

      {/* --- HERO SECTION --- */}
      <section className="relative isolate overflow-hidden bg-ink-900 pb-36 pt-20 sm:pb-48 sm:pt-28">
        <img
          src={hero}
          alt="Latar Belakang Proyek CV Pentagon"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25 mix-blend-luminosity scale-105 animate-[pulse_15s_ease-in-out_infinite]"
        />
        <div className="absolute top-[-10%] left-[-10%] -z-10 h-[600px] w-[600px] rounded-full bg-brand/30 opacity-40 blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-900/40 via-ink-900/80 to-ink-900" />

        <Container>
          {/* Perbaikan: Mengurangi gap pada mobile (gap-10) */}
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-7" delay={0}>
              <div className="inline-flex items-center gap-3 rounded-full bg-white/5 pr-4 pl-2 py-1.5 text-xs font-semibold text-brand ring-1 ring-white/10 backdrop-blur-md">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                </span>
                <span className="text-white/90 tracking-wide uppercase">General Contractor & Architecture</span>
              </div>

              <h1 className="mt-8 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-7xl sm:leading-[1.15]">
                <span className="bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent">
                  Dari Desain ke Realita, Kami Hadir untuk Anda.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/70 sm:text-xl font-light">
                Sebagai mitra strategis, CV. Pentagon Konstruksindo mentransformasi visi Anda menjadi ruang hunian, komersial, dan perkantoran yang presisi, tangguh, serta bernilai estetika tinggi.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button to="/projects" variant="brand" size="lg" className="group justify-center rounded-2xl transition-all shadow-[0_0_30px_rgba(249,136,20,0.25)] hover:shadow-[0_0_45px_rgba(249,136,20,0.4)]">
                  Eksplorasi Portofolio
                  <RiArrowRightUpLine className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>

                <Button
                  href={waHref}
                  target="_blank"
                  variant="secondary"
                  size="lg"
                  className="justify-center rounded-2xl bg-white/5 text-white ring-1 ring-white/10 backdrop-blur-sm hover:bg-white/15 transition-all"
                >
                  <RiWhatsappLine className="text-xl mr-2 text-brand" />
                  Hubungi Representatif
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap gap-3 text-sm font-medium text-white/60">
                {['Arsitektur', 'Konstruksi Sipil', 'Interior', 'Renovasi'].map(tag => (
                  <span key={tag} className="flex items-center gap-1.5 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur-sm cursor-default transition-colors hover:text-brand">
                    <RiBuilding4Line className="opacity-70" /> {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Glassmorphism Contact Card - Perbaikan: Padding responsif p-6 sm:p-8 */}
            <Reveal className="lg:col-span-5 w-full" delay={0.2}>
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl transition-transform duration-700 hover:-translate-y-2">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/10 blur-[60px] transition-all duration-700 group-hover:bg-brand/20 group-hover:scale-125" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white tracking-wide">Informasi Kontak</h3>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand ring-1 ring-white/20">
                      <RiShieldCheckLine className="text-xl" />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed font-light">Diskusikan spesifikasi teknis dan kebutuhan ruang Anda bersama representatif kami.</p>
                  
                  <div className="mt-8 space-y-5 text-sm text-white/90">
                    {/* Perbaikan: Padding inner row p-3 sm:p-4 */}
                    <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-3 sm:p-4 ring-1 ring-white/5 transition-colors hover:bg-white/10">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/20 text-brand">
                        <RiWhatsappLine className="text-2xl" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] text-white/50 mb-0.5 uppercase tracking-wider font-semibold">Hotline & WhatsApp</div>
                        <div className="font-semibold text-sm sm:text-base">{company.phones[0].display}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-white/5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-brand ring-1 ring-white/10">
                        <RiMailLine className="text-xl" />
                      </div>
                      {/* Perbaikan: break-all untuk email agar tidak memotong kartu */}
                      <div className="min-w-0">
                        <div className="text-[10px] text-white/50 mb-0.5 uppercase tracking-wider font-semibold">Surat Elektronik</div>
                        <div className="font-medium break-all text-xs sm:text-sm">{company.email}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* --- Bagian lain tetap sama --- */}
      <section className="relative z-20 -mt-24 mb-16 px-4">
        <Container>
          <div className="rounded-[2.5rem] bg-white/95 p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-ink-900/5 backdrop-blur-xl sm:p-12">
            <Stats items={stats} />
          </div>
        </Container>
      </section>

      {/* --- VISI & MISI SECTION --- */}
      <section className="bg-ink-900 py-20 sm:py-32 relative overflow-hidden text-white">
        <div className="absolute top-0 left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(249,136,20,0.15),transparent_50%)]" />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block rounded-full bg-brand/20 px-4 py-1.5 text-sm font-bold text-brand ring-1 ring-brand/30 mb-6 uppercase tracking-wider">
              Landasan Perusahaan
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
              Visi & Misi Kami
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-start">
            <Reveal className="lg:col-span-5" delay={0.1}>
              <div className="h-full rounded-[2.5rem] bg-brand p-10 shadow-2xl ring-1 ring-white/10 relative overflow-hidden group transition-transform duration-500 hover:-translate-y-1">
                <div className="absolute -right-10 -bottom-10 opacity-20 transition-transform duration-700 group-hover:scale-110">
                  <RiBuilding4Line className="text-[200px]" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-widest border-b border-white/20 pb-4 inline-block">Visi</h3>
                  <p className="text-xl leading-relaxed text-white/95 font-medium">
                    {"Menjadi perusahaan arsitektur dan konstruksi terpercaya yang " + 
                     "memberikan solusi terbaik dan berkelanjutan dalam " + 
                     "pembangunan hunian, ruang usaha, dan perkantoran di Indonesia."}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.2}>
              <div className="rounded-[2.5rem] bg-white/5 p-8 shadow-xl ring-1 ring-white/10 backdrop-blur-md sm:p-10 transition-colors hover:bg-white/10">
                <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-widest">Misi</h3>
                <ul className="space-y-6">
                  {[
                    "Memberikan layanan konstruksi terpadu yang mencakup " + "perencanaan, desain, dan pelaksanaan dengan standar mutu tinggi.",
                    "Menghadirkan solusi ruang yang fungsional, estetis, dan bernilai " + "investasi, sesuai kebutuhan dan karakteristik setiap klien.",
                    "Menjaga integritas dan profesionalisme dalam setiap tahapan " + "pekerjaan, dari konsultasi awal hingga serah terima proyek.",
                    "Mengembangkan sumber daya manusia yang kompeten, adaptif, " + "dan inovatif dalam menjawab tantangan di industri konstruksi modern.",
                    "Membangun kemitraan jangka panjang dengan klien, melalui " + "pelayanan yang responsif, efisien, dan berorientasi pada kepuasan."
                  ].map((misi, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-white/80 group">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/20 text-brand mt-1 transition-colors group-hover:bg-brand group-hover:text-white">
                        <span className="font-bold text-sm">{idx + 1}</span>
                      </div>
                      <span className="text-base leading-relaxed md:text-lg font-light">{misi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-20 sm:py-32 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-gradient-to-l from-soft to-transparent opacity-50" />
        
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <SectionHeader
                eyebrow="Ekspertise Kami"
                title={<span className="bg-gradient-to-r from-ink-900 via-ink-800 to-ink-500 bg-clip-text text-transparent">Integritas dalam Setiap Konstruksi</span>}
                desc="Menghadirkan harmoni antara estetika desain dan ketahanan struktural. Dedikasi kami mencakup efisiensi waktu, pengelolaan anggaran yang transparan, serta hasil akhir berstandar tinggi."
              />
            </div>
            <Button to="/services" variant="ghost" className="hidden md:inline-flex group shrink-0 rounded-xl font-semibold text-ink-900 hover:bg-ink-50">
              Jelajahi Layanan <RiArrowRightUpLine className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => (
              <Reveal 
                key={s.id} 
                delay={idx * 0.1} 
                className={idx === 0 ? "md:col-span-2" : "col-span-1"}
              >
                <div className={`group relative h-full overflow-hidden rounded-[2.5rem] bg-white p-8 sm:p-10 shadow-sm ring-1 ring-ink-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] ${idx === 0 ? 'bg-gradient-to-br from-white to-ink-50/50' : ''}`}>
                  <div className="absolute -right-4 -top-8 z-0 text-[120px] font-black text-ink-900/[0.03] select-none transition-transform duration-700 group-hover:scale-110 group-hover:text-brand/[0.05]">
                    0{idx + 1}
                  </div>
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand ring-1 ring-ink-900/10 shadow-sm transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                      {idx === 0 ? <RiBuilding4Line className="text-3xl" /> : <RiShieldCheckLine className="text-3xl" />}
                    </div>
                    <h3 className="text-2xl font-extrabold text-ink-900 md:text-3xl tracking-tight">{s.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-ink-600 md:text-lg max-w-lg font-light">{s.desc}</p>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-sm font-medium text-ink-700 bg-white/50 rounded-xl p-2.5 ring-1 ring-ink-900/5 backdrop-blur-sm transition-colors hover:bg-white">
                          <RiStarFill className="text-brand shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="bg-soft py-20 sm:py-32 relative overflow-hidden">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand ring-1 ring-brand/20 mb-6 uppercase tracking-widest">Sistematika Kerja</span>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-ink-900">Prosedur Operasional Standar</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-600 font-light">Setiap fase dirancang dengan kepatuhan presisi untuk menjamin kelancaran komunikasi, validitas desain, dan eksekusi lapangan.</p>
          </div>
          <div className="mt-16 rounded-[2.5rem] bg-white p-8 shadow-lg ring-1 ring-ink-900/5 sm:p-12 transition-transform duration-500 hover:-translate-y-1">
            <Timeline steps={processSteps} />
          </div>
        </Container>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="py-20 sm:py-32 bg-white">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end mb-12">
            <div className="max-w-2xl">
              <SectionHeader
                eyebrow="Portofolio Eksklusif"
                title="Jejak Karya Konstruksi"
                desc="Eksplorasi dedikasi kami dalam mentransformasi konsep desain menjadi struktur fisik bernilai tinggi."
              />
            </div>
            <Button to="/projects" variant="primary" className="group shrink-0 rounded-2xl shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all">
              Tinjau Galeri Proyek <RiArrowRightUpLine className="text-xl transition-transform group-hover:translate-x-1" />
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
      <section className="py-20 sm:py-32 bg-soft/30">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <SectionHeader
                eyebrow="Layanan Informasi Terpadu"
                title="Panduan & Pertanyaan Esensial"
                desc="Akses informasi komprehensif terkait kapabilitas teknis dan kemitraan kami. Membutuhkan diskusi lebih lanjut? Kami siap berkorespondensi."
              />
              <div className="mt-10 p-6 rounded-[2rem] bg-white shadow-sm ring-1 ring-ink-900/5 border-l-4 border-brand">
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <RiWhatsappLine className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink-900">Konsultasi Interaktif</h4>
                    <p className="text-sm text-ink-600 font-light">Representatif kami merespons secara cepat.</p>
                  </div>
                </div>
                <Button href={waHref} target="_blank" variant="brand" className="w-full justify-center rounded-xl shadow-md hover:shadow-lg transition-all">
                  Mulai Percakapan WhatsApp
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="rounded-[2.5rem] bg-white p-6 shadow-md ring-1 ring-ink-900/5 sm:p-10 transition-transform duration-500 hover:-translate-y-1">
                <Accordion items={faq} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 sm:pb-32 px-4">
        <Container>
          <div className="relative overflow-hidden rounded-[3rem] bg-ink-900 p-12 text-center text-white shadow-2xl ring-1 ring-white/10 sm:p-20">
            <div className="absolute -left-20 -top-20 h-72 w-72 animate-[spin_10s_linear_infinite] rounded-full bg-brand/40 blur-[80px] mix-blend-screen" />
            <div className="absolute -bottom-20 -right-20 h-96 w-96 animate-[spin_15s_linear_infinite_reverse] rounded-full bg-blue-500/30 blur-[100px] mix-blend-screen" />
            
            <div className="relative z-10 mx-auto max-w-4xl">
              <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur-md mb-8 uppercase tracking-widest">
                Langkah Selanjutnya
              </span>
              <h2 className="text-balance text-4xl font-black tracking-tight sm:text-6xl mb-6">
                Mari Bangun Masa Depan Anda <span className="text-brand">Bersama Kami.</span>
              </h2>
              <p className="text-lg leading-relaxed text-white/80 max-w-2xl mx-auto mb-12 font-light">
                Konsultasikan kebutuhan spesifikasi teknis, estimasi pembiayaan, dan nilai estetika proyek Anda kepada tim ahli kami hari ini.
              </p>
              
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href={waHref} target="_blank" variant="brand" size="lg" className="w-full justify-center rounded-2xl py-4 shadow-[0_0_30px_rgba(249,136,20,0.4)] hover:shadow-[0_0_50px_rgba(249,136,20,0.6)] sm:w-auto sm:px-10 transition-shadow">
                  <RiWhatsappLine className="text-2xl mr-2" />
                  Jadwalkan Konsultasi Teknis
                </Button>
                <Button to="/contact" variant="ghost" size="lg" className="w-full justify-center rounded-2xl py-4 text-white ring-1 ring-white/20 hover:bg-white/10 sm:w-auto sm:px-10 transition-all">
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