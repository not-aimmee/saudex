import { SEO } from "../components/SEO";
import { caseStudiesMeta } from "./data/seoMeta";
import { Link } from "react-router-dom";

/* ─── color tokens (matches site palette) ────────────────── */
const C = {
  inkBlack:  "#031926",
  darkTeal:  "#254D58",
  teal:      "#468189",
  ivory:     "#F5FBEF",
};

export default function CaseStudies() {
  return (
    <>
      <SEO
        title={caseStudiesMeta.title}
        description={caseStudiesMeta.description}
        keywords={caseStudiesMeta.keywords}
        canonical={caseStudiesMeta.canonical}
        ogImage={caseStudiesMeta.ogImage}
        noIndex
      />

      <section className="px-6 md:px-16 py-32" style={{ backgroundColor: C.ivory }}>
        <div className="max-w-5xl mx-auto">
          <span className="text-xs tracking-[0.25em] uppercase font-medium" style={{ color: C.teal }}>
            Case Studies
          </span>
          <h1
            className="mt-4 text-5xl md:text-7xl font-black font-sentient uppercase leading-[0.92] tracking-tight"
            style={{ color: C.inkBlack }}
          >
            Case studies
          </h1>
          <div className="mt-12 max-w-2xl">
            <p className="text-base leading-relaxed font-generalsans" style={{ color: C.darkTeal }}>
              Verified customer case studies are not currently published here.
              Contact our team to discuss your logistics requirements and the
              services available for your business.
            </p>
            <Link
              to="/contact/"
              className="mt-6 inline-block underline underline-offset-4"
              style={{ color: C.teal }}
            >
              Contact SAUDEX GLOBAL
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
