import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "./Button";
import { company } from "../data/siteData";
import logo from "../assets/images/logo.png";

export default function Footer() {
  const waHref = `https://wa.me/${company.primaryWhatsapp}`;

  return (
    <footer className="bg-black text-ink-300 border-t border-white/10">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <img src={logo} alt={company.name} className="h-8 w-auto filter brightness-0 invert mb-5" />
            <p className="text-sm leading-relaxed text-ink-400 font-light max-w-sm">
              {company.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={waHref} target="_blank" variant="brand" size="sm">
                Konsultasi
              </Button>
              <Button href="/assets/company-profile.pdf" variant="secondary" size="sm" className="bg-white/10 text-white border-transparent hover:bg-white/20 hover:text-white transition duration-200">
                Download Profile (PDF)
              </Button>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-ink-500 mb-5">Navigasi</div>
            <nav className="flex flex-col gap-3.5 text-sm font-light">
              <Link className="text-ink-400 hover:text-white transition-colors" to="/about">
                Tentang Kami
              </Link>
              <Link className="text-ink-400 hover:text-white transition-colors" to="/services">
                Layanan Konstruksi
              </Link>
              <Link className="text-ink-400 hover:text-white transition-colors" to="/projects">
                Portofolio Proyek
              </Link>
              <Link className="text-ink-400 hover:text-white transition-colors" to="/legality">
                Legalitas Perusahaan
              </Link>
              <Link className="text-ink-400 hover:text-white transition-colors" to="/contact">
                Kontak Representatif
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 flex flex-col gap-5 text-sm font-light">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-ink-500 mb-3">Kantor Pusat</div>
              <div className="text-ink-400 leading-relaxed">
                <div>{company.address.line1}</div>
                <div>{company.address.line2}</div>
                <div>{company.address.line3}</div>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-ink-500 mb-2">Korespondensi</div>
              <div className="space-y-1">
                <a className="block text-ink-400 hover:text-white transition-colors" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
                <a className="block text-ink-400 hover:text-white transition-colors" href={`tel:${company.phones[0].number}`}>
                  {company.phones[0].display}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between font-light">
          <div>© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
          <div>
            Built with React • Deployed on Netlify
          </div>
        </div>
      </Container>
    </footer>
  );
}
