import React from "react";
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
      <SEO title="Tentang" path="/about" />

      <PageHero
        title="Tentang Perusahaan"
        desc="Profil singkat, visi, dan misi CV. Pentagon Konstruksindo."
        image={hero}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/assets/company-profile.pdf" variant="secondary">
            Download Company Profile (PDF)
          </Button>
          <Button to="/projects" variant="brand">
            Lihat Portofolio
          </Button>
        </div>
      </PageHero>

      <section className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Company"
                title="Profesional, sistematis, dan berorientasi hasil"
                desc="Kami berkomitmen menghadirkan bangunan yang bukan hanya berdiri, tetapi menunjang kehidupan, usaha, dan produktivitas."
              />

              <div className="prose-tight mt-8 space-y-4">
                {company.aboutParagraphs.map((p) => (
                  <p key={p} className="text-base">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-10 rounded-3xl bg-ink-50 p-6 ring-1 ring-ink-900/5">
                <div className="text-sm font-extrabold text-ink-900">Ringkasan Legalitas</div>
                <div className="mt-4 grid gap-3 text-sm text-ink-700 sm:grid-cols-2">
                  <div>
                    <div className="text-xs text-ink-500">NIB</div>
                    <div className="font-semibold text-ink-900">{company.legality.nib}</div>
                  </div>
                  <div>
                    <div className="text-xs text-ink-500">KBLI</div>
                    <div className="font-semibold text-ink-900">{company.legality.kbli}</div>
                  </div>
                  <div>
                    <div className="text-xs text-ink-500">Sertifikat Standar</div>
                    <div className="font-semibold text-ink-900">{company.legality.sertifikatStandar}</div>
                  </div>
                  <div>
                    <div className="text-xs text-ink-500">NPWP</div>
                    <div className="font-semibold text-ink-900">{company.legality.npwp}</div>
                  </div>
                </div>

                <div className="mt-5">
                  <Button to="/legality" variant="primary" size="sm">
                    Lihat Dokumen Legalitas
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Reveal>
                <div className="rounded-3xl bg-white p-7 shadow-soft ring-1 ring-ink-900/5">
                  <div className="text-xs font-bold text-ink-500">VISI</div>
                  <div className="mt-2 text-lg font-extrabold text-ink-900">
                    {company.vision}
                  </div>

                  <div className="mt-7 text-xs font-bold text-ink-500">MISI</div>
                  <ul className="mt-3 space-y-2 text-sm text-ink-700">
                    {company.missions.map((m) => (
                      <li key={m} className="flex items-start gap-2">
                        <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-brand" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 rounded-2xl bg-brand-50 p-4 ring-1 ring-brand-600/10">
                    <div className="text-sm font-extrabold text-ink-900">Nilai yang kami jaga</div>
                    <div className="mt-2 text-sm text-ink-700">
                      Integritas • Efisiensi • Kualitas • Kolaborasi
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
