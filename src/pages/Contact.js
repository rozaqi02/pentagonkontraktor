import React, { useMemo } from "react";
import { RiMailLine, RiMapPin2Line, RiPhoneLine, RiWhatsappLine } from "react-icons/ri";

import SEO from "../components/SEO";
import Container from "../components/Container";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

import hero from "../assets/images/hero.jpg";
import { company } from "../data/siteData";

export default function Contact() {
  const waHref = useMemo(() => {
    const msg = encodeURIComponent(
      "Halo, saya ingin minta penawaran. Nama: ... Lokasi: ... Jenis bangunan: ... Perkiraan luas: ... Target waktu: ..."
    );
    return `https://wa.me/${company.primaryWhatsapp}?text=${msg}`;
  }, []);

  return (
    <>
      <SEO title="Kontak" path="/contact" />

      <PageHero
        title="Kontak & Penawaran"
        desc="Hubungi kami untuk konsultasi, estimasi, dan penjadwalan survey."
        image={hero}
      >
        <div className="flex flex-wrap gap-3">
          <Button href={waHref} target="_blank" variant="brand">
            <RiWhatsappLine className="text-lg" /> Konsultasi WhatsApp
          </Button>
          <Button href="/assets/company-profile.pdf" variant="secondary">
            Download Company Profile
          </Button>
        </div>
      </PageHero>

      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Info"
                title="Kontak cepat"
                desc="Untuk respon lebih cepat, gunakan WhatsApp dan sertakan detail singkat proyek."
              />

              <div className="mt-8 space-y-4">
                <Reveal>
                  <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink-900/5">
                    <div className="flex items-start gap-3">
                      <RiMapPin2Line className="mt-0.5 text-xl text-brand" />
                      <div>
                        <div className="text-sm font-extrabold text-ink-900">Alamat</div>
                        <div className="mt-2 text-sm text-ink-700">
                          <div className="font-semibold text-ink-900">{company.address.line1}</div>
                          <div>{company.address.line2}</div>
                          <div>{company.address.line3}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.05}>
                  <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink-900/5">
                    <div className="flex items-start gap-3">
                      <RiPhoneLine className="mt-0.5 text-xl text-brand" />
                      <div>
                        <div className="text-sm font-extrabold text-ink-900">Telepon / WhatsApp</div>
                        <div className="mt-2 space-y-1 text-sm text-ink-700">
                          {company.phones.map((p) => (
                            <a
                              key={p.number}
                              href={`tel:${p.number}`}
                              className="block font-semibold text-ink-900 hover:underline"
                            >
                              {p.display}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink-900/5">
                    <div className="flex items-start gap-3">
                      <RiMailLine className="mt-0.5 text-xl text-brand" />
                      <div>
                        <div className="text-sm font-extrabold text-ink-900">Email</div>
                        <div className="mt-2 text-sm text-ink-700">
                          <a
                            className="font-semibold text-ink-900 hover:underline"
                            href={`mailto:${company.email}`}
                          >
                            {company.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="rounded-3xl bg-ink-50 p-6 ring-1 ring-ink-900/5">
                    <div className="text-sm font-extrabold text-ink-900">Format cepat via WhatsApp</div>
                    <div className="mt-2 text-sm text-ink-700">
                      Nama • Lokasi • Jenis bangunan • Perkiraan luas • Target waktu
                    </div>
                    <div className="mt-4">
                      <Button href={waHref} target="_blank" variant="brand" className="w-full justify-center">
                        <RiWhatsappLine className="text-lg" /> Chat WhatsApp
                      </Button>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Form"
                title="Kirim permintaan penawaran"
                desc="Form ini akan tersimpan di Netlify Forms (tanpa database). Kami akan menghubungi Anda kembali."
              />

              <div className="mt-8 rounded-3xl bg-white p-8 shadow-soft ring-1 ring-ink-900/5">
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  action="/thanks"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-bold text-ink-700">Nama</label>
                      <input
                        name="name"
                        required
                        className="focus-ring mt-2 w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm"
                        placeholder="Nama lengkap"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-ink-700">No. WhatsApp</label>
                      <input
                        name="phone"
                        required
                        className="focus-ring mt-2 w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm"
                        placeholder="08xx-xxxx-xxxx"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-ink-700">Email</label>
                      <input
                        name="email"
                        type="email"
                        className="focus-ring mt-2 w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm"
                        placeholder="email@anda.com"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-ink-700">Lokasi Proyek</label>
                      <input
                        name="location"
                        required
                        className="focus-ring mt-2 w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm"
                        placeholder="Kota / alamat singkat"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-ink-700">Jenis Pekerjaan</label>
                      <select
                        name="service"
                        required
                        className="focus-ring mt-2 w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Pilih…
                        </option>
                        <option value="Desain & Perencanaan">Desain & Perencanaan</option>
                        <option value="Konstruksi & Pelaksanaan">Konstruksi & Pelaksanaan</option>
                        <option value="Renovasi">Renovasi</option>
                        <option value="Interior & Finishing">Interior & Finishing</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-ink-700">Perkiraan Luas / Ukuran</label>
                      <input
                        name="size"
                        className="focus-ring mt-2 w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm"
                        placeholder="contoh: 120 m² / 2 lantai / 18 kamar"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-xs font-bold text-ink-700">Deskripsi Singkat</label>
                      <textarea
                        name="message"
                        required
                        rows="5"
                        className="focus-ring mt-2 w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm"
                        placeholder="Ceritakan kebutuhan Anda, target waktu, dan referensi (jika ada)."
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button type="submit" variant="brand" size="lg" className="w-full justify-center sm:w-auto">
                      Kirim Form
                    </Button>
                    <div className="text-xs text-ink-600">
                      Dengan mengirim form ini, Anda setuju dihubungi kembali terkait kebutuhan proyek.
                    </div>
                  </div>
                </form>
              </div>

              <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink-900/5">
                <iframe
                  title="Google Maps"
                  src={company.mapEmbedUrl}
                  className="h-[340px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
