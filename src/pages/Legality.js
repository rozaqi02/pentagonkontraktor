import React from "react";
import { RiFileDownloadLine, RiShieldCheckLine } from "react-icons/ri";

import SEO from "../components/SEO";
import Container from "../components/Container";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";

import hero from "../assets/images/hero.jpg";
import { company } from "../data/siteData";

export default function Legality() {
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

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {/* Data Legalitas */}
            <div className="rounded-3xl bg-white p-7 shadow-soft ring-1 ring-ink-900/5">
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
            <div className="rounded-3xl bg-ink-50 p-7 ring-1 ring-ink-900/5">
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

              <div className="mt-6">
                <div className="text-sm font-extrabold text-ink-900">
                  Dokumen Lengkap
                </div>

                <div className="mt-2 text-sm text-ink-700">
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
        </Container>
      </section>
    </>
  );
}
