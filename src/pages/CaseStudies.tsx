import { Helmet } from "react-helmet-async";
import { SEO } from "../components/SEO";
import { caseStudiesMeta } from "./data/seoMeta";

/* ─── color tokens (matches site palette) ────────────────── */
const C = {
  inkBlack:  "#031926",
  darkTeal:  "#254D58",
  teal:      "#468189",
  bone:      "#e0ddcf",
  parchment: "#f1f0ea",
  ivory:     "#F5FBEF",
};

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  datePublished: string; // ISO date, e.g. "2026-03-15"
}

// TODO: replace this sample with a real, verified client story before publishing.
// Fabricated stats/case studies can damage trust and are risky to publish as fact.
const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fmcg-gcc-distribution",
    title: "Sample: Faster FMCG Distribution to the GCC",
    client: "SAMPLE — replace with a real client name (or keep anonymous, e.g. \"a leading FMCG distributor\")",
    industry: "FMCG",
    challenge:
      "Manual customs clearance was adding several days to shipment timelines, delaying product launches into new markets.",
    solution:
      "Implemented pre-clearance documentation, HS code classification support, and direct coordination with customs brokers.",
    results: [
      { label: "Clearance time", value: "SAMPLE — e.g. 5–7 days → 2 days" },
      { label: "Cost impact", value: "SAMPLE — e.g. lower logistics cost per shipment" },
      { label: "Shipment frequency", value: "SAMPLE — e.g. increased weekly volumes" },
    ],
    datePublished: "2026-01-01",
  },
];

function buildCaseStudySchema(cs: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://saudexglobal.com/case-studies/${cs.id}#case`,
    "headline": cs.title,
    "description": cs.challenge,
    "datePublished": cs.datePublished,
    "author": { "@type": "Organization", "@id": "https://saudexglobal.com/#organization" },
    "publisher": { "@id": "https://saudexglobal.com/#organization" },
  };
}

const caseStudiesPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://saudexglobal.com/case-studies#webpage",
      "url": "https://saudexglobal.com/case-studies/",
      "name": caseStudiesMeta.title,
      "description": caseStudiesMeta.description,
      "isPartOf": { "@id": "https://saudexglobal.com/#website" },
      "breadcrumb": { "@id": "https://saudexglobal.com/case-studies#breadcrumb" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://saudexglobal.com/case-studies#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://saudexglobal.com/" },
        { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://saudexglobal.com/case-studies/" },
      ],
    },
    ...CASE_STUDIES.map(buildCaseStudySchema),
  ],
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
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(caseStudiesPageSchema)}</script>
      </Helmet>

      <section className="px-6 md:px-16 py-32" style={{ backgroundColor: C.ivory }}>
        <div className="max-w-5xl mx-auto">
          <span className="text-xs tracking-[0.25em] uppercase font-medium" style={{ color: C.teal }}>
            Case Studies
          </span>
          <h1
            className="mt-4 text-5xl md:text-7xl font-black font-sentient uppercase leading-[0.92] tracking-tight"
            style={{ color: C.inkBlack }}
          >
            Real results, real corridors.
          </h1>

          <div className="mt-20 grid gap-16">
            {CASE_STUDIES.map((cs) => (
              <article key={cs.id} className="pt-10" style={{ borderTop: `1px solid ${C.bone}` }}>
                <span className="text-xs uppercase tracking-wide" style={{ color: C.teal }}>
                  {cs.industry}
                </span>
                <h2 className="mt-2 text-2xl md:text-3xl font-bold font-sentient" style={{ color: C.inkBlack }}>
                  {cs.title}
                </h2>
                <p className="mt-1 text-sm" style={{ color: C.darkTeal }}>{cs.client}</p>

                <div className="mt-6 grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm uppercase tracking-wide mb-2" style={{ color: C.teal }}>Challenge</h3>
                    <p className="text-base leading-relaxed font-generalsans" style={{ color: C.darkTeal }}>{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wide mb-2" style={{ color: C.teal }}>Solution</h3>
                    <p className="text-base leading-relaxed font-generalsans" style={{ color: C.darkTeal }}>{cs.solution}</p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {cs.results.map((r) => (
                    <div key={r.label} className="p-5 rounded-lg" style={{ backgroundColor: C.parchment }}>
                      <div className="text-sm" style={{ color: C.teal }}>{r.label}</div>
                      <div className="mt-1 text-lg font-bold" style={{ color: C.inkBlack }}>{r.value}</div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
