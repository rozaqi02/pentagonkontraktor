import React from "react";
import { Helmet } from "react-helmet-async";
import { company } from "../data/siteData";

export default function SEO({ title, description, path = "/" }) {
  const fullTitle = title ? `${title} — ${company.name}` : company.name;
  const desc = description || company.description;

  // Note: set your final domain after deploy (Netlify/custom domain)
  const baseUrl = "https://YOUR_DOMAIN_HERE";
  const url = baseUrl + path;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
