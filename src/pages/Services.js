import React, { useMemo } from "react";
import { RiArrowRightUpLine, RiWhatsappLine, RiShieldCheckLine, RiStarFill } from "react-icons/ri";

import SEO from "../components/SEO";
import Container from "../components/Container";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

import { company, services } from "../data/siteData";
import hero from "../assets/images/hero.jpg";

export default function Services() {
  const waHref = useMemo(() => {
    const msg = encodeURIComponent(
      "Halo, saya memerlukan informasi terkait spesifikasi layanan dari CV. Pentagon. Lokasi proyek: ... Kategori pekerjaan: ... Target waktu:"
    );
    return `https://wa.me/${company.primaryWhatsapp}?text=${msg}`;
  }, []);

  return (
    <>
      <SEO title="Layanan Konstruksi Terpadu" path="/services" />

      <PageHero
        title="Layanan Terpadu"
        desc="Solusi komprehensif arsitektur & konstruksi untuk realisasi ruang hunian, fasad komersial, gedung perkantoran, dan revitalisasi bangunan."
        image={hero}
      >
        <div className="flex flex-wrap gap-3">
          <Button href={waHref} target="_blank" variant="brand" className="rounded-2xl">
            <RiWhatsappLine className="text-lg mr-2" /> Hubungi Konsultan
          </Button>
          <Button to="/projects" variant="secondary" className="rounded-2xl">
            Tinjau Hasil Pekerjaan <RiArrowRightUpLine className="text-lg ml-1" />
          </Button>
        </div>
      </PageHero>

      <section className="py-20 sm:py-32 bg-white">
        <Container>
          <SectionHeader
            eyebrow="Ekspertise Spesifik"
            title="Sinergi Layanan Sesuai Skala Proyek"
            desc="Apabila Anda membutuhkan asesmen awal mengenai layanan mana yang paling tepat untuk efisiensi proyek Anda, representatif kami siap memandu via jalur komunikasi resmi."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {services.map((s, idx) => (
              <Reveal key={s.id} delay={idx * 0.1}>
                <div className="group h-full rounded-[6px] bg-white p-8 border border-ink-200 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md">
                  <div className="flex items-center gap-4 border-b border-ink-200 pb-5 mb-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[4px] bg-brand/10 text-brand border border-brand/20 transition-colors group-hover:bg-brand group-hover:text-white group-hover:border-transparent">
                      <RiShieldCheckLine className="text-xl" />
                    </div>
                    <div className="text-xl font-bold text-ink-900 tracking-tight">{s.title}</div>
                  </div>
                  
                  <p className="text-sm leading-relaxed text-ink-600 font-light mb-8">{s.desc}</p>

                  <div>
                    <div className="text-[10px] font-bold text-ink-400 uppercase tracking-widest mb-4">Parameter Output Pengerjaan</div>
                    <ul className="space-y-3">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-xs font-semibold text-ink-700 bg-ink-50/50 p-3 rounded-[4px] border border-ink-200/50">
                          <RiStarFill className="mt-0.5 text-brand shrink-0" />
                          <span className="font-medium">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 relative overflow-hidden rounded-[8px] bg-black p-8 text-white border border-white/10 shadow-xl sm:p-12">
            <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
                  Membutuhkan Rencana Anggaran Biaya (RAB) Awal?
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 font-light">
                  Sampaikan informasi mengenai lokasi tapak, peruntukan bangunan, dan estimasi besaran volume pengerjaan. Tim estimator kami akan merumuskan pendekatan terbaik untuk Anda.
                </p>
              </div>

              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <div className="flex w-full flex-col gap-4">
                  <Button href={waHref} target="_blank" variant="brand" size="lg" className="w-full justify-center shadow-md">
                    Konsultasi Cepat (WhatsApp)
                  </Button>
                  <Button to="/contact" variant="ghost" size="lg" className="w-full justify-center text-white border-white/10 hover:bg-white/10">
                    Akses Formulir Formal
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