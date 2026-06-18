// src/components/SEO.tsx
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;           // e.g. "https://yoursite.com/industries/cold-chain"
  ogImage?: string;             // absolute URL to OG image
  ogType?: "website" | "article";
  noIndex?: boolean;            // set true on drafts / internal pages
}

const SITE_NAME = "Saudex Global";           // ← change this
const BASE_URL  = "https://www.saudexglobal.com";    // ← change this
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-default.jpg`; // ← change this

export function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noIndex = false,
}: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      {/* ── Primary ───────────────────────────────────── */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* ── Open Graph ────────────────────────────────── */}
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type"        content={ogType} />
      <meta property="og:image"       content={ogImage} />
      <meta property="og:site_name"   content={SITE_NAME} />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* ── Twitter Card ──────────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
    </Helmet>
  );
}
