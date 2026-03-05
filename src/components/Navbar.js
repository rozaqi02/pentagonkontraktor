import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RiMenuLine, RiCloseLine, RiWhatsappLine } from "react-icons/ri";

import Container from "./Container";
import Button from "./Button";
import { company } from "../data/siteData";
import logo from "../assets/images/logo.png";

// Memusatkan daftar menu agar mudah dikelola dan di-looping
const NAV_LINKS = [
  { path: "/", label: "Beranda" },
  { path: "/about", label: "Tentang" },
  { path: "/services", label: "Layanan" },
  { path: "/projects", label: "Proyek" },
  { path: "/legality", label: "Legalitas" },
  { path: "/contact", label: "Kontak" }
];

function navLinkClassMobile({ isActive }) {
  return [
    "focus-ring flex items-center rounded-xl px-4 py-3 text-base font-semibold",
    isActive ? "bg-ink-50 text-ink-900" : "text-ink-700 hover:bg-ink-50 hover:text-ink-900"
  ].join(" ");
}

function navLinkClassDesktop({ isActive }) {
  return [
    "relative z-10 focus-ring rounded-xl px-3 py-2 text-sm font-semibold transition-colors duration-200",
    isActive ? "text-ink-900" : "text-ink-700 hover:text-ink-900"
  ].join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Desktop active pill indicator
  const navRef = useRef(null);
  const [indicator, setIndicator] = useState({ x: 0, w: 0, visible: false });

  const updateIndicator = () => {
    const nav = navRef.current;
    if (!nav) return;

    const active = nav.querySelector('a[aria-current="page"]');
    if (!active) {
      setIndicator((s) => ({ ...s, visible: false }));
      return;
    }

    const navRect = nav.getBoundingClientRect();
    const rect = active.getBoundingClientRect();
    setIndicator({
      x: rect.left - navRect.left,
      w: rect.width,
      visible: true
    });
  };

  // Tutup sidebar saat pindah halaman
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Tutup sidebar saat tekan tombol Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Kunci scroll body saat sidebar terbuka
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    const id = requestAnimationFrame(updateIndicator);
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    const onResize = () => updateIndicator();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const waHref = useMemo(() => {
    const msg = encodeURIComponent(
      "Halo, saya ingin konsultasi proyek dengan CV. Pentagon Konstruksindo. Lokasi: ... Jenis bangunan: ... Perkiraan luas: ..."
    );
    return `https://wa.me/${company.primaryWhatsapp}?text=${msg}`;
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/5 bg-white md:bg-white/80 md:backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="focus-ring flex items-center rounded-xl">
          <img src={logo} alt="Pentagon" className="h-8 w-auto" />
        </Link>

        {/* --- NAVBAR DESKTOP --- */}
        <nav ref={navRef} className="relative hidden items-center gap-1 md:flex">
          <span
            aria-hidden="true"
            className="nav-indicator absolute inset-y-1 left-0 rounded-xl bg-ink-50 ring-1 ring-ink-900/5 transition-[transform,width,opacity] duration-300 ease-out"
            style={{
              width: indicator.w,
              transform: `translateX(${indicator.x}px)`,
              opacity: indicator.visible ? 1 : 0
            }}
          />
          {/* Looping menu desktop */}
          {NAV_LINKS.map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkClassDesktop}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Tombol WA Desktop */}
        <div className="hidden md:block">
          <Button href={waHref} target="_blank" variant="brand" size="sm" className="gap-2 rounded-xl">
            <RiWhatsappLine className="text-lg" />
            Konsultasi
          </Button>
        </div>

        {/* Tombol Hamburger Mobile */}
        <button
          className="focus-ring inline-flex items-center justify-center rounded-xl p-2 text-ink-900 md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Buka menu"
          aria-expanded={open}
        >
          <RiMenuLine className="text-2xl" />
        </button>
      </Container>

      {/* --- SIDEBAR MOBILE --- */}
      {/* 1. Backdrop Overlay (Efek Blur) */}
      <div
        className={`fixed inset-0 z-[60] bg-ink-900/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out md:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* 2. Panel Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-[70] flex w-72 max-w-[80vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header Sidebar */}
        <div className="flex h-16 items-center justify-between border-b border-ink-900/5 px-4">
          <span className="font-bold text-ink-900">Menu</span>
          <button
            className="focus-ring inline-flex items-center justify-center rounded-xl p-2 text-ink-900"
            onClick={() => setOpen(false)}
            aria-label="Tutup menu"
          >
            <RiCloseLine className="text-2xl" />
          </button>
        </div>

        {/* Isi Menu */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <nav className="flex flex-col gap-2">
            {/* Looping menu mobile dengan efek stagger */}
            {NAV_LINKS.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `${navLinkClassMobile({ isActive })} transform transition-all duration-500 ease-out ${
                    open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`
                }
                // Menghitung delay: 150ms awal + (75ms * index menu). 
                // Jika menu tertutup (open=false), delay di-set 0 agar langsung hilang
                style={{ transitionDelay: `${open ? 150 + index * 75 : 0}ms` }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Tombol Konsultasi Mobile dengan efek stagger di urutan terakhir */}
          <div 
            className={`mt-8 border-t border-ink-900/5 pt-6 transform transition-all duration-500 ease-out ${
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${open ? 150 + NAV_LINKS.length * 75 : 0}ms` }}
          >
            <Button href={waHref} target="_blank" variant="brand" className="w-full justify-center rounded-xl py-3">
              <RiWhatsappLine className="text-xl mr-2" />
              Konsultasi WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}