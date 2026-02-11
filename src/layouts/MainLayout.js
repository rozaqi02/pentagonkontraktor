import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus-ring fixed top-4 left-4 z-[60] rounded-xl bg-white px-4 py-2 text-sm font-semibold shadow-soft"
      >
        Lewati ke konten utama
      </a>

      <Navbar />

      <main id="main" className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
