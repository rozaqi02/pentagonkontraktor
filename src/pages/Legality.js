import React, { useState } from "react";
import { RiFileDownloadLine, RiShieldCheckLine } from "react-icons/ri";

import SEO from "../components/SEO";
import Container from "../components/Container";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import ImageLightbox from "../components/ImageLightbox";

import hero from "../assets/images/hero.jpg";
import { company } from "../data/siteData";

import nibImg from "../assets/images/legality/nib.jpg";
import sertifikatStandarImg from "../assets/images/legality/sertifikat-standar.jpg";
import lampiranKbliImg from "../assets/images/legality/lampiran-kbli.jpg";
import lampiranSertifikatImg from "../assets/images/legality/lampiran-sertifikat.jpg";

export default function Legality() {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [activeTitle, setActiveTitle] = useState("");

  return (
    <>
      <SEO title="Legalitas" path="/legality" />

      <PageHero
        title="Legalitas Perusahaan"
        desc="Ringkasan legalitas perusahaan. Dokumen lengkap tersedia pada PDF Company Profile."
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
            title="Identitas Legal Perusahaan"
            desc="Untuk kebutuhan verifikasi atau permintaan dokumen resmi, silakan hubungi tim kami."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Data Legalitas */}
            <div className="rounded-[6px] bg-white p-8 border border-ink-200 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-extrabold text-ink-900">
                <RiShieldCheckLine className="text-lg text-brand" />
                Data Legalitas
              </div>

              <div className="mt-5 grid gap-4 text-sm text-ink-700 sm:grid-cols-2">
                <div>
                  <div className="text-xs text-ink-500">NIB</div>
                  <div className="font-semibold text-ink-900">
                    {company.legality.nib}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-ink-500">Sertifikat Standar</div>
                  <div className="font-semibold text-ink-900">
                    {company.legality.sertifikatStandar}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="text-xs text-ink-500">KBLI</div>
                  <div className="font-semibold text-ink-900">
                    {company.legality.kbli}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-ink-500">NPWP</div>
                  <div className="font-semibold text-ink-900">
                    {company.legality.npwp}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-ink-500">Diterbitkan</div>
                  <div className="font-semibold text-ink-900">
                    {company.legality.issuedAt}
                  </div>
                </div>
              </div>
            </div>

            {/* Alamat + Download */}
            <div className="rounded-[6px] bg-ink-50 p-8 border border-ink-200 shadow-sm">
              <div className="text-sm font-extrabold text-ink-900">
                Alamat Kantor
              </div>

              <div className="mt-3 text-sm text-ink-700">
                <div className="font-semibold text-ink-900">
                  {company.address.line1}
                </div>
                <div>{company.address.line2}</div>
                <div>{company.address.line3}</div>
              </div>

              <div className="mt-6 border-t border-ink-200 pt-6">
                <div className="text-sm font-extrabold text-ink-900">
                  Dokumen Lengkap
                </div>

                <div className="mt-2 text-sm text-ink-700 font-light">
                  Dokumen legalitas tidak ditampilkan di website.
                  Silakan download Company Profile untuk melihat dokumen lengkap.
                </div>

                <div className="mt-4">
                  <Button href="/assets/company-profile.pdf" variant="primary">
                    <RiFileDownloadLine className="text-lg" /> Download PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Lampiran Dokumen Resmi */}
          <div className="mt-16 rounded-[2.5rem] bg-white p-8 shadow-soft ring-1 ring-ink-900/5 sm:p-10">
            <h3 className="flex items-center gap-2 text-sm font-extrabold text-ink-900 border-b border-ink-900/5 pb-4 mb-6">
              <RiShieldCheckLine className="text-lg text-brand" />
              Dokumen Lampiran Resmi
            </h3>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "NIB (Nomor Induk Berusaha)", img: nibImg },
                { title: "Sertifikat Standar", img: sertifikatStandarImg },
                { title: "Lampiran KBLI", img: lampiranKbliImg },
                { title: "Lampiran Sertifikat", img: lampiranSertifikatImg }
              ].map((doc, idx) => (
                <div key={idx} className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-900/5 bg-ink-50/30 p-3 transition hover:shadow-soft hover:ring-1 hover:ring-brand/20">
                  <button
                    onClick={() => {
                      setActiveImage(doc.img);
                      setActiveTitle(doc.title);
                      setOpenLightbox(true);
                    }}
                    className="focus-ring relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-white ring-1 ring-ink-900/5 cursor-zoom-in"
                    aria-label={`Buka pratinjau ${doc.title}`}
                  >
                    <img
                      src={doc.img}
                      alt={doc.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-ink-900/40 opacity-0 transition group-hover:opacity-100">
                      <span className="rounded-xl bg-white/95 px-3.5 py-2 text-xs font-bold text-ink-900 shadow-soft">
                        Perbesar Gambar
                      </span>
                    </div>
                  </button>
                  <div className="mt-3 text-center text-xs font-extrabold text-ink-700">
                    {doc.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>

        <ImageLightbox
          open={openLightbox}
          onClose={() => setOpenLightbox(false)}
          src={activeImage}
          alt={activeTitle}
        />
      </section>
    </>
  );
}
