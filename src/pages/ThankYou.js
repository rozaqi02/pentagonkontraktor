import React from "react";
import { RiCheckboxCircleLine, RiArrowRightUpLine } from "react-icons/ri";

import SEO from "../components/SEO";
import Container from "../components/Container";
import Button from "../components/Button";

export default function ThankYou() {
  return (
    <>
      <SEO title="Terima kasih" path="/thanks" />

      <section className="bg-soft py-20">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-soft ring-1 ring-ink-900/5">
            <RiCheckboxCircleLine className="mx-auto text-5xl text-brand" />
            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-ink-900">
              Terima kasih!
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              Form Anda sudah terkirim. Tim kami akan menghubungi Anda kembali secepatnya.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button to="/" variant="brand">
                Kembali ke Beranda <RiArrowRightUpLine className="text-lg" />
              </Button>
              <Button to="/projects" variant="secondary">
                Lihat Proyek
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
