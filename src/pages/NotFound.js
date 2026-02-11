import React from "react";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <>
      <SEO title="Halaman tidak ditemukan" path="/404" />
      <section className="bg-soft py-20">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-soft ring-1 ring-ink-900/5">
            <div className="text-5xl font-extrabold text-ink-900">404</div>
            <div className="mt-3 text-lg font-extrabold text-ink-900">Halaman tidak ditemukan</div>
            <p className="mt-2 text-sm text-ink-700">
              Link yang Anda buka tidak tersedia.
            </p>
            <div className="mt-8">
              <Button to="/" variant="brand">
                Kembali ke Beranda
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
