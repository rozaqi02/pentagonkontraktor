import React from "react";
import { Link } from "react-router-dom";
import { RiMailLine, RiMapPin2Line, RiPhoneLine } from "react-icons/ri";

import Container from "./Container";
import Button from "./Button";
import { company } from "../data/siteData";

export default function Footer() {
  const waHref = `https://wa.me/${company.primaryWhatsapp}`;

  return (
    <footer className="border-t border-ink-900/5 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-xl font-extrabold tracking-tight text-ink-900">{company.name}</div>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">{company.description}</p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={waHref} target="_blank" variant="brand" size="sm">
                Konsultasi
              </Button>
              <Button href="/assets/company-profile.pdf" variant="secondary" size="sm">
                Download Company Profile (PDF)
              </Button>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm font-bold text-ink-900">Menu</div>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link className="text-ink-700 hover:text-ink-900" to="/about">
                Tentang
              </Link>
              <Link className="text-ink-700 hover:text-ink-900" to="/services">
                Layanan
              </Link>
              <Link className="text-ink-700 hover:text-ink-900" to="/projects">
                Proyek
              </Link>
              <Link className="text-ink-700 hover:text-ink-900" to="/legality">
                Legalitas
              </Link>
              <Link className="text-ink-700 hover:text-ink-900" to="/contact">
                Kontak
              </Link>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="text-sm font-bold text-ink-900">Kontak</div>

            <div className="mt-3 flex flex-col gap-3 text-sm text-ink-700">
              <div className="flex items-start gap-3">
                <RiMapPin2Line className="mt-0.5 text-lg text-brand" />
                <div>
                  <div>{company.address.line1}</div>
                  <div>{company.address.line2}</div>
                  <div>{company.address.line3}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <RiMailLine className="text-lg text-brand" />
                <a className="hover:text-ink-900" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <RiPhoneLine className="text-lg text-brand" />
                <div className="flex flex-col">
                  {company.phones.map((p) => (
                    <a
                      key={p.number}
                      className="hover:text-ink-900"
                      href={`tel:${p.number}`}
                    >
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-ink-50 p-4 ring-1 ring-ink-900/5">
              <div className="text-xs font-bold text-ink-900">Jam Operasional</div>
              <div className="mt-2 space-y-1 text-xs text-ink-700">
                {company.businessHours.map((h) => (
                  <div key={h.days} className="flex items-center justify-between">
                    <span>{h.days}</span>
                    <span className="font-semibold text-ink-900">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-ink-900/5 pt-6 text-xs text-ink-600 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
          <div className="text-ink-500">
            Built with React • Deployed on Netlify
          </div>
        </div>
      </Container>
    </footer>
  );
}
