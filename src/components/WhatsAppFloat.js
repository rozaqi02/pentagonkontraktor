import React from "react";
import { RiWhatsappLine } from "react-icons/ri";
import { company } from "../data/siteData";

export default function WhatsAppFloat() {
  const msg = encodeURIComponent(
    "Halo, saya ingin konsultasi proyek. Lokasi: ... Jenis bangunan: ... Perkiraan luas: ..."
  );
  const href = `https://wa.me/${company.primaryWhatsapp}?text=${msg}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-bold text-white shadow-glow"
      aria-label="Chat WhatsApp"
    >
      <RiWhatsappLine className="text-xl" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
