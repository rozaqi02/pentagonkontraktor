import React from "react";
import { RiBuilding4Line, RiCheckDoubleLine } from "react-icons/ri";
import SEO from "../components/SEO";
import Container from "../components/Container";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { company } from "../data/siteData";
import hero from "../assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <SEO title="Tentang Perusahaan" path="/about" />

      <PageHero
        title="Tentang Perusahaan"
        desc="Mengenal lebih dekat identitas, kompetensi, dan komitmen CV. Pentagon Konstruksindo dalam memajukan industri konstruksi."
        image={hero}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/assets/company-profile.pdf" variant="secondary" className="rounded-2xl">
            Unduh Dokumen Profil (PDF)
          </Button>
          <Button to="/projects" variant="brand" className="rounded-2xl">
            Tinjau Portofolio
          </Button>
        </div>
      </PageHero>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Profil Korporat"
                title="Profesionalitas, Sistematis, dan Berorientasi pada Hasil"
                desc="Dedikasi kami melampaui sekadar mendirikan struktur fisik; kami merancang ruang fungsional yang memberdayakan kehidupan dan produktivitas."
              />

              <div className="prose-tight mt-10 space-y-6 text-lg leading-relaxed text-ink-700 font-normal">
                {company.aboutParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-12 rounded-[6px] bg-ink-50 p-8 border border-ink-200 shadow-sm">
                <div className="text-xs font-bold text-ink-900 uppercase tracking-widest border-b border-ink-200 pb-3 mb-5">
                  Legalitas Operasional
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="bg-white p-4 rounded-[4px] border border-ink-200">
                    <div className="text-xs text-ink-500 uppercase tracking-wide">Nomor Induk Berusaha (NIB)</div>
                    <div className="mt-1 font-bold text-ink-900">{company.legality.nib}</div>
                  </div>
                  <div className="bg-white p-4 rounded-[4px] border border-ink-200">
                    <div className="text-xs text-ink-500 uppercase tracking-wide">Klasifikasi Baku (KBLI)</div>
                    <div className="mt-1 font-bold text-ink-900">{company.legality.kbli}</div>
                  </div>
                  <div className="bg-white p-4 rounded-[4px] border border-ink-200">
                    <div className="text-xs text-ink-500 uppercase tracking-wide">Sertifikat Standar</div>
                    <div className="mt-1 font-bold text-ink-900">{company.legality.sertifikatStandar}</div>
                  </div>
                  <div className="bg-white p-4 rounded-[4px] border border-ink-200">
                    <div className="text-xs text-ink-500 uppercase tracking-wide">NPWP Perusahaan</div>
                    <div className="mt-1 font-bold text-ink-900">{company.legality.npwp}</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button to="/legality" variant="primary" className="w-full sm:w-auto justify-center">
                    Verifikasi Dokumen Legalitas
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <Reveal>
                <div className="rounded-[6px] bg-black p-8 text-white shadow-xl border border-white/10 relative overflow-hidden group">
                  <div className="absolute -right-10 -bottom-10 opacity-10 transition-transform duration-700 group-hover:scale-110">
                    <RiBuilding4Line className="text-[200px]" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-xs font-bold text-brand tracking-widest uppercase mb-3">Visi Perusahaan</div>
                    <div className="text-lg font-medium leading-relaxed text-white/95 border-b border-white/10 pb-8 mb-8">
                      {company.vision}
                    </div>

                    <div className="text-xs font-bold text-brand tracking-widest uppercase mb-5">Misi Perusahaan</div>
                    <ul className="space-y-4 text-sm text-white/80 font-light">
                      {company.missions.map((m, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <RiCheckDoubleLine className="mt-0.5 text-brand shrink-0 text-lg" />
                          <span className="leading-relaxed">{m}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10 rounded-[4px] bg-white/5 p-5 border border-white/10">
                      <div className="text-xs font-bold text-white tracking-widest uppercase mb-2">Pilar Nilai Kami</div>
                      <div className="text-sm text-white/80 font-medium tracking-wide">
                        Integritas • Efisiensi • Kualitas • Kolaborasi
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}