import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RiMenu4Line, RiCloseLine, RiWhatsappLine } from "react-icons/ri";

import Container from "./Container";
import Button from "./Button";
import { company } from "../data/siteData";
import logo from "../assets/images/logo.png";

function navLinkClassMobile({ isActive }) {
  return [
    "focus-ring rounded-xl px-3 py-2 text-sm font-semibold transition",
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

  // Desktop active pill indicator (cheap, CSS-driven)
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

  useEffect(() => {
    // Wait a frame so layout is final (fonts, etc.)
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

          <NavLink to="/about" className={navLinkClassDesktop}>
            Tentang
          </NavLink>
          <NavLink to="/services" className={navLinkClassDesktop}>
            Layanan
          </NavLink>
          <NavLink to="/projects" className={navLinkClassDesktop}>
            Proyek
          </NavLink>
          <NavLink to="/legality" className={navLinkClassDesktop}>
            Legalitas
          </NavLink>
          <NavLink to="/contact" className={navLinkClassDesktop}>
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
        <div className="menu-enter border-t border-ink-900/5 bg-white md:hidden">
          <Container className="py-3">
            <div className="flex flex-col gap-1">
              <NavLink to="/about" className={navLinkClassMobile}>
                Tentang
              </NavLink>
              <NavLink to="/services" className={navLinkClassMobile}>
                Layanan
              </NavLink>
              <NavLink to="/projects" className={navLinkClassMobile}>
                Proyek
              </NavLink>
              <NavLink to="/legality" className={navLinkClassMobile}>
                Legalitas
              </NavLink>
              <NavLink to="/contact" className={navLinkClassMobile}>
                Kontak
              </NavLink>

              <div className="mt-2">
                <Button href={waHref} target="_blank" variant="brand" className="w-full justify-center rounded-xl">
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
