import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RiMenu4Line, RiCloseLine, RiWhatsappLine } from "react-icons/ri";

import Container from "./Container";
import Button from "./Button";
import { company } from "../data/siteData";
import logo from "../assets/images/logo.png";

function navLinkClass({ isActive }) {
  return [
    "focus-ring rounded-xl px-3 py-2 text-sm font-semibold transition",
    isActive ? "bg-ink-50 text-ink-900" : "text-ink-700 hover:bg-ink-50 hover:text-ink-900"
  ].join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const waHref = useMemo(() => {
    const msg = encodeURIComponent(
      "Halo, saya ingin konsultasi proyek dengan CV. Pentagon Konstruksindo. Lokasi: ... Jenis bangunan: ... Perkiraan luas: ..."
    );
    return `https://wa.me/${company.primaryWhatsapp}?text=${msg}`;
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/5 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
<Link to="/" className="focus-ring flex items-center rounded-xl">
  <img src={logo} alt="Pentagon" className="h-8 w-auto" />
</Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink to="/about" className={navLinkClass}>
            Tentang
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            Layanan
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Proyek
          </NavLink>
          <NavLink to="/legality" className={navLinkClass}>
            Legalitas
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Kontak
          </NavLink>
        </nav>

        <div className="hidden md:block">
          <Button
            href={waHref}
            target="_blank"
            variant="brand"
            size="sm"
            className="gap-2 rounded-xl"
            aria-label="Konsultasi via WhatsApp"
          >
            <RiWhatsappLine className="text-lg" />
            Konsultasi
          </Button>
        </div>

        <button
          className="focus-ring inline-flex items-center justify-center rounded-xl p-2 text-ink-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <RiCloseLine className="text-2xl" /> : <RiMenu4Line className="text-2xl" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-ink-900/5 bg-white md:hidden">
          <Container className="py-3">
            <div className="flex flex-col gap-1">
              <NavLink to="/about" className={navLinkClass}>
                Tentang
              </NavLink>
              <NavLink to="/services" className={navLinkClass}>
                Layanan
              </NavLink>
              <NavLink to="/projects" className={navLinkClass}>
                Proyek
              </NavLink>
              <NavLink to="/legality" className={navLinkClass}>
                Legalitas
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                Kontak
              </NavLink>

              <div className="mt-2">
                <Button
                  href={waHref}
                  target="_blank"
                  variant="brand"
                  className="w-full justify-center rounded-xl"
                >
                  <RiWhatsappLine className="text-lg" />
                  Konsultasi via WhatsApp
                </Button>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
