import React, { useState } from "react";
import { RiFileDownloadLine, RiImage2Line, RiShieldCheckLine } from "react-icons/ri";

import SEO from "../components/SEO";
import Container from "../components/Container";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import ImageLightbox from "../components/ImageLightbox";
import Reveal from "../components/Reveal";

import hero from "../assets/images/hero.jpg";
import { company } from "../data/siteData";

import nibImg from "../assets/images/legality/nib.jpg";
import kbliImg from "../assets/images/legality/lampiran-kbli.jpg";
import sertifikatImg from "../assets/images/legality/sertifikat-standar.jpg";
import lampiranSertifikatImg from "../assets/images/legality/lampiran-sertifikat.jpg";

const docItems = [
  { title: "NIB (Perizinan Berusaha Berbasis Risiko)", src: nibImg },
  { title: "Lampiran KBLI", src: kbliImg },
  { title: "Sertifikat Standar", src: sertifikatImg },
  { title: "Lampiran Sertifikat Standar", src: lampiranSertifikatImg }
];

export default function Legality() {
  const [open, setOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState(null);
  const [activeTitle, setActiveTitle] = useState("Preview");

  return (
    <>
      <SEO title="Legalitas" path="/legality" />

      <PageHero
        title="Legalitas & Dokumen"
        desc="Ringkasan legalitas perusahaan dan preview dokumen (untuk verifikasi)."
        image={hero}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/assets/company-profile.pdf" variant="secondary">
            <RiFileDownloadLine className="text-lg" /> Download Company Profile (PDF)
          </Button>
        </div>
      </PageHero>

      <section className="py-16">
        <Container>
          <SectionHeader
            eyebrow="Ringkasan"
            title="Identitas legal perusahaan"
            desc="Jika Anda membutuhkan salinan dokumen resolusi tinggi, silakan hubungi tim kami."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 shadow-soft ring-1 ring-ink-900/5">
              <div className="flex items-center gap-2 text-sm font-extrabold text-ink-900">
                <RiShieldCheckLine className="text-lg text-brand" />
                Data Legalitas
              </div>

              <div className="mt-5 grid gap-4 text-sm text-ink-700 sm:grid-cols-2">
                <div>
                  <div className="text-xs text-ink-500">NIB</div>
                  <div className="font-semibold text-ink-900">{company.legality.nib}</div>
                </div>
                <div>
                  <div className="text-xs text-ink-500">Sertifikat Standar</div>
                  <div className="font-semibold text-ink-900">{company.legality.sertifikatStandar}</div>
                </div>
                <div className="sm:col-span-2">
                  <div className="text-xs text-ink-500">KBLI</div>
                  <div className="font-semibold text-ink-900">{company.legality.kbli}</div>
                </div>
                <div>
                  <div className="text-xs text-ink-500">NPWP</div>
                  <div className="font-semibold text-ink-900">{company.legality.npwp}</div>
                </div>
                <div>
                  <div className="text-xs text-ink-500">Diterbitkan</div>
                  <div className="font-semibold text-ink-900">{company.legality.issuedAt}</div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-ink-50 p-4 ring-1 ring-ink-900/5">
                <div className="text-xs font-bold text-ink-500">Catatan</div>
                <div className="mt-2 text-xs leading-relaxed text-ink-700">
                  Data di halaman ini dirangkum dari dokumen pada company profile. Untuk keperluan formal,
                  gunakan dokumen resmi dan/atau salinan yang dilegalisir sesuai kebutuhan.
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-ink-50 p-7 ring-1 ring-ink-900/5">
              <div className="text-sm font-extrabold text-ink-900">Alamat Kantor</div>
              <div className="mt-3 text-sm text-ink-700">
                <div className="font-semibold text-ink-900">{company.address.line1}</div>
                <div>{company.address.line2}</div>
                <div>{company.address.line3}</div>
              </div>

              <div className="mt-6">
                <div className="text-sm font-extrabold text-ink-900">Dokumen Lengkap</div>
                <div className="mt-2 text-sm text-ink-700">
                  Download PDF untuk melihat seluruh halaman company profile.
                </div>
                <div className="mt-4">
                  <Button href="/assets/company-profile.pdf" variant="primary">
                    <RiFileDownloadLine className="text-lg" /> Download PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <SectionHeader
              eyebrow="Preview"
              title="Preview dokumen (klik untuk memperbesar)"
              desc="Dokumen ditampilkan sebagai preview ringan. Klik untuk melihat ukuran lebih besar."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {docItems.map((d, idx) => (
                <Reveal key={d.title} delay={idx * 0.04}>
                  <button
                    className="focus-ring group overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink-900/5"
                    onClick={() => {
                      setActiveSrc(d.src);
                      setActiveTitle(d.title);
                      setOpen(true);
                    }}
                    aria-label={"Buka " + d.title}
                  >
                    <div className="relative">
                      <img
                        src={d.src}
                        alt={d.title}
                        className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/35 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                      <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/15 backdrop-blur">
                        <RiImage2Line className="text-base" /> Klik untuk zoom
                      </div>
                    </div>
                    <div className="px-6 py-4 text-left">
                      <div className="text-sm font-extrabold text-ink-900">{d.title}</div>
                      <div className="mt-1 text-xs text-ink-600">Preview</div>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>

        <ImageLightbox open={open} onClose={() => setOpen(false)} src={activeSrc} alt={activeTitle} />
      </section>
    </>
  );
}
