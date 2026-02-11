import depotCover from "../assets/images/projects/depot-tanjung-api-cover.jpg";
import depotFull from "../assets/images/projects/depot-tanjung-api-full.jpg";

import rtiCover from "../assets/images/projects/rti-pt-amati-cover.jpg";
import rtiFull from "../assets/images/projects/rti-pt-amati-full.jpg";

import borderCover from "../assets/images/projects/border-installation-cover.jpg";
import borderFull from "../assets/images/projects/border-installation-full.jpg";

import kostBukisariCover from "../assets/images/projects/kost-bukisari-cover.jpg";
import kostBukisariFull from "../assets/images/projects/kost-bukisari-full.jpg";

import kostBukitHijauCover from "../assets/images/projects/kost-bukit-hijau-cover.jpg";
import kostBukitHijauFull from "../assets/images/projects/kost-bukit-hijau-full.jpg";

import coffeeCover from "../assets/images/projects/coffee-eatery-kampung-biru-cover.jpg";
import coffeeFull from "../assets/images/projects/coffee-eatery-kampung-biru-full.jpg";

import dimsumCover from "../assets/images/projects/resto-dimsum-khang-cover.jpg";
import dimsumFull from "../assets/images/projects/resto-dimsum-khang-full.jpg";

import hociCover from "../assets/images/projects/hoci-kopitiam-cover.jpg";
import hociFull from "../assets/images/projects/hoci-kopitiam-full.jpg";

import kantorCover from "../assets/images/projects/kantor-kilap-premium-cover.jpg";
import kantorFull from "../assets/images/projects/kantor-kilap-premium-full.jpg";

import reno1Cover from "../assets/images/projects/porto-renovation-1-cover.jpg";
import reno1Full from "../assets/images/projects/porto-renovation-1-full.jpg";
import reno2Full from "../assets/images/projects/porto-renovation-2-full.jpg";
import reno3Full from "../assets/images/projects/porto-renovation-3-full.jpg";

export const projectCategories = [
  { id: "all", label: "Semua" },
  { id: "commercial", label: "Komersial" },
  { id: "residential", label: "Hunian" },
  { id: "office", label: "Perkantoran" },
  { id: "renovation", label: "Renovasi" }
];

export const projects = [
  {
    slug: "depot-tanjung-api-surabaya",
    title: "Depot Tanjung Api",
    location: "Surabaya",
    size: "2.200 m²",
    category: "commercial",
    status: "Selesai",
    cover: depotCover,
    gallery: [depotFull]
  },
  {
    slug: "projek-rti-pt-amati-indonesia",
    title: "Projek RTI — PT Amati Indonesia",
    location: "—",
    size: "1.300 m²",
    category: "commercial",
    status: "On Going",
    cover: rtiCover,
    gallery: [rtiFull]
  },
  {
    slug: "border-installation-gudang-malang",
    title: "Border Installation — Gudang",
    location: "Malang",
    size: "1.800 m²",
    category: "commercial",
    status: "Portofolio",
    cover: borderCover,
    gallery: [borderFull]
  },
  {
    slug: "kost-eksklusif-jl-bukisari-malang",
    title: "Kost Eksklusif",
    location: "Jl. Bukisari, Malang",
    size: "18 kamar",
    category: "residential",
    status: "On Going",
    cover: kostBukisariCover,
    gallery: [kostBukisariFull]
  },
  {
    slug: "kost-eksklusif-bukit-hijau-malang",
    title: "Kost Eksklusif",
    location: "Perum Bukit Hijau, Malang",
    size: "24 kamar",
    category: "residential",
    status: "On Going",
    cover: kostBukitHijauCover,
    gallery: [kostBukitHijauFull]
  },
  {
    slug: "coffee-eatery-kampung-biru-malang",
    title: "Coffee & Eatery Kampung Biru",
    location: "Malang",
    size: "600 m²",
    category: "commercial",
    status: "On Going",
    cover: coffeeCover,
    gallery: [coffeeFull]
  },
  {
    slug: "resto-dimsum-khang-malang",
    title: "Resto Dimsum Khang",
    location: "Malang",
    size: "800 m²",
    category: "commercial",
    status: "Selesai",
    cover: dimsumCover,
    gallery: [dimsumFull]
  },
  {
    slug: "hoci-kopitiam-malang",
    title: "Hoci Kopitiam",
    location: "Malang",
    size: "540 m²",
    category: "commercial",
    status: "Portofolio",
    cover: hociCover,
    gallery: [hociFull]
  },
  {
    slug: "kantor-kilap-premium-malang",
    title: "Kantor Kilap Premium",
    location: "Malang",
    size: "297 m²",
    category: "office",
    status: "Selesai",
    cover: kantorCover,
    gallery: [kantorFull]
  },
  {
    slug: "renovation-porto-2024-2025",
    title: "Portofolio Renovasi 2024–2025",
    location: "Malang & sekitarnya",
    size: "Multi proyek",
    category: "renovation",
    status: "Portofolio",
    cover: reno1Cover,
    gallery: [reno1Full, reno2Full, reno3Full]
  }
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
