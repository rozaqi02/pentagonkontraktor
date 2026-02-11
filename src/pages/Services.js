import React, { useMemo } from "react";
import { RiArrowRightUpLine, RiWhatsappLine } from "react-icons/ri";

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
      "Halo, saya ingin konsultasi layanan. Lokasi: ... Jenis pekerjaan (desain/konstruksi/renovasi/interior): ... Target waktu: ..."
    );
    return `https://wa.me/${company.primaryWhatsapp}?text=${msg}`;
  }, []);

  return (
    <>
      <SEO title="Layanan" path="/services" />

      <PageHero
        title="Layanan"
        desc="Layanan arsitektur & konstruksi terpadu untuk kebutuhan hunian, komersial, perkantoran, serta renovasi."
        image={hero}
      >
        <div className="flex flex-wrap gap-3">
          <Button href={waHref} target="_blank" variant="brand">
            <RiWhatsappLine className="text-lg" /> Konsultasi WhatsApp
          </Button>
          <Button to="/projects" variant="secondary">
            Lihat Portofolio <RiArrowRightUpLine className="text-lg" />
          </Button>
        </div>
      </PageHero>

      <section className="py-16">
        <Container>
          <SectionHeader
            eyebrow="What we do"
            title="Pilih layanan sesuai kebutuhan proyek"
            desc="Jika Anda masih ragu, kirim detail singkat via WhatsApp—kami bantu arahkan layanan yang paling tepat."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((s, idx) => (
              <Reveal key={s.id} delay={idx * 0.05}>
                <div className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-ink-900/5">
                  <div className="text-lg font-extrabold text-ink-900">{s.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{s.desc}</p>

                  <div className="mt-5">
                    <div className="text-xs font-bold text-ink-500">Cakupan / Output</div>
                    <ul className="mt-3 space-y-2 text-sm text-ink-700">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-brand" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 rounded-[2.5rem] bg-ink-900 p-10 text-white shadow-glow ring-1 ring-black/10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Ingin estimasi awal? Kirim detail singkat.
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85">
                  Format cepat: lokasi, jenis bangunan/pekerjaan, perkiraan luas, dan target waktu. Tim kami akan membantu langkah berikutnya.
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
