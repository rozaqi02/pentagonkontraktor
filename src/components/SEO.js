import React from "react";
import { Helmet } from "react-helmet-async";
import { company } from "../data/siteData";

export default function SEO({ title, description, path = "/" }) {
  const brandName = "Pentagon Konstruksindo";
  const fullTitle = brandName;
  const desc = description || company.description;

  // Note: set your final domain after deploy (Netlify/custom domain)
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://pentagonkonstruksindo.co.id";
  const url = baseUrl + path;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
