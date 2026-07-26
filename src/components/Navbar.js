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
    "focus-ring flex items-center rounded-[4px] px-4 py-3 text-base font-semibold",
    isActive ? "bg-ink-50 text-ink-900" : "text-ink-700 hover:bg-ink-50 hover:text-ink-900"
  ].join(" ");
}


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  const prevScrollYRef = useRef(0);

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
    return () => document.body.style.overflow = "auto";
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const prevScrollY = prevScrollYRef.current;

      setScrolled(currentScrollY > 20);

      // Tampilkan jika scroll keatas atau di top page, sembunyikan jika scroll kebawah
      if (currentScrollY <= 20) {
        setVisible(true);
      } else if (currentScrollY > prevScrollY) {
        setVisible(false); // scroll kebawah
      } else {
        setVisible(true); // scroll keatas
      }

      prevScrollYRef.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waHref = useMemo(() => {
    const msg = encodeURIComponent(
      "Halo, saya ingin konsultasi proyek dengan CV. Pentagon Konstruksindo. Lokasi: ... Jenis bangunan: ... Perkiraan luas: ..."
    );
    return `https://wa.me/${company.primaryWhatsapp}?text=${msg}`;
  }, []);

  const isTransparent = !scrolled;
  const useWhiteText = location.pathname === "/";
  const logoIsWhite = location.pathname === "/" && isTransparent;

  const getNavLinkClassDesktop = (isActive) => {
    return [
      "relative z-10 focus-ring rounded-[4px] px-4 py-1 text-[15px] font-bold tracking-tight transition-colors duration-300",
      useWhiteText
        ? isActive ? "text-white" : "text-white/80 hover:text-white"
        : isActive ? "text-ink-900" : "text-ink-700 hover:text-ink-900"
    ].join(" ");
  };

  const headerBgClass = isTransparent
    ? "border-b border-transparent bg-transparent"
    : location.pathname === "/"
      ? "border-b border-white/10 bg-black/95"
      : "border-b border-ink-100 bg-white shadow-sm";

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          visible ? "top-0 translate-y-0" : "-translate-y-full"
        } ${headerBgClass}`}
      >
        <Container className="flex h-14 items-center justify-between">
          <Link to="/" className="focus-ring flex items-center rounded-[4px]">
            <img src={logo} alt="Pentagon" className={`h-7 w-auto ${logoIsWhite ? "filter brightness-0 invert" : ""}`} />
          </Link>

          {/* --- NAVBAR DESKTOP --- */}
          <div className="hidden md:flex items-center gap-10">
            <nav ref={navRef} className="relative flex items-center gap-2 py-1 -mr-4">
              <span
                aria-hidden="true"
                className="nav-indicator absolute bottom-1 rounded-full transition-[transform,width,opacity,background-color] duration-300 ease-out h-[2px] bg-brand"
                style={{
                  width: indicator.w > 0 ? indicator.w - 32 : 0,
                  transform: `translateX(${indicator.x + 16}px)`,
                  opacity: indicator.visible ? 1 : 0
                }}
              />
              {/* Looping menu desktop */}
              {NAV_LINKS.map((link) => (
                <NavLink key={link.path} to={link.path} className={({ isActive }) => getNavLinkClassDesktop(isActive)}>
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Tombol Hamburger Mobile */}
          <button
            className={`focus-ring inline-flex items-center justify-center rounded-[4px] p-2 md:hidden transition-colors duration-300 ${
              useWhiteText ? "text-white" : "text-ink-900"
            }`}
            onClick={() => setOpen(true)}
            aria-label="Buka menu"
            aria-expanded={open}
          >
            <RiMenuLine className="text-2xl" />
          </button>
        </Container>
      </header>

      {/* --- SIDEBAR MOBILE --- */}
      {/* 1. Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink-900/30 transition-opacity duration-300 ease-in-out md:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* 2. Panel Sidebar */}
      <div
        className={`fixed top-0 left-0 right-0 z-[70] flex flex-col bg-white border-b border-ink-200 transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Header Sidebar */}
        <div className="flex h-16 items-center justify-between border-b border-ink-200 px-4">
          <span className="font-bold text-ink-900">Menu</span>
          <button
            className="focus-ring inline-flex items-center justify-center rounded-[4px] p-2 text-ink-900"
            onClick={() => setOpen(false)}
            aria-label="Tutup menu"
          >
            <RiCloseLine className="text-2xl" />
          </button>
        </div>

        {/* Isi Menu */}
        <div className="overflow-y-auto px-4 py-6">
          <nav className="flex flex-col gap-2">
            {/* Looping menu mobile dengan efek stagger */}
            {NAV_LINKS.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `${navLinkClassMobile({ isActive })} transform transition-all duration-300 ease-out ${
                    open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                  }`
                }
                // Menghitung delay: 50ms awal + (40ms * index menu). 
                // Jika menu tertutup (open=false), delay di-set 0 agar langsung hilang
                style={{ transitionDelay: `${open ? 50 + index * 40 : 0}ms` }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Tombol Konsultasi Mobile dengan efek stagger di urutan terakhir */}
          <div 
            className={`mt-8 border-t border-ink-900/5 pt-6 transform transition-all duration-300 ease-out ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${open ? 50 + NAV_LINKS.length * 40 : 0}ms` }}
          >
            <Button href={waHref} target="_blank" variant="brand" className="w-full justify-center rounded-[4px] py-3">
              <RiWhatsappLine className="text-xl mr-2" />
              Konsultasi WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}