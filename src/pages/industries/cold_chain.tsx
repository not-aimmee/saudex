import { IndustryPage } from "../IndustryPage";
import { coldChainData } from "../data/coldChainData";
import { SEO } from "../../components/SEO"
import { Helmet } from "react-helmet-async";
import { coldChainMeta } from "../data/seoMeta";

const coldChainSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://saudexglobal.com/industries/cold_chain#webpage",
      "url": "https://saudexglobal.com/industries/cold_chain/",
      "name": "Cold Chain Logistics | SAUDEX GLOBAL",
      "description": coldChainMeta.description,
      "isPartOf": { "@id": "https://saudexglobal.com/#website" },
      "about": { "@id": "https://saudexglobal.com/industries/cold_chain#service" },
      "breadcrumb": { "@id": "https://saudexglobal.com/industries/cold_chain#breadcrumb" }
    },
    {
      "@type": "Service",
      "@id": "https://saudexglobal.com/industries/cold_chain#service",
      "name": "Cold Chain Logistics",
      "serviceType": "Cold Chain Logistics",
      "description": coldChainMeta.description,
      "url": "https://saudexglobal.com/industries/cold_chain/",
      "provider": {
        "@type": "Organization",
        "@id": "https://saudexglobal.com/#organization",
        "name": "SAUDEX GLOBAL",
        "url": "https://saudexglobal.com/"
      },
      "areaServed": [
        { "@type": "Country", "name": "Saudi Arabia" },
        { "@type": "Place", "name": "Middle East" }
      ],
      "knowsAbout": ["Temperature control", "Pharmaceutical logistics", "Food safety compliance", "Cold storage management", "HACCP standards"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://saudexglobal.com/industries/cold_chain#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://saudexglobal.com/" },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://saudexglobal.com/industries/" },
        { "@type": "ListItem", "position": 3, "name": "Cold Chain", "item": "https://saudexglobal.com/industries/cold_chain/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://saudexglobal.com/industries/cold_chain#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What temperature ranges do your cold chain vehicles support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our reefer fleet supports ambient (15–25°C), chilled (2–8°C), and frozen (–18°C and below) conditions. Each vehicle is equipped with calibrated data loggers and dual-zone capability, so mixed temperature shipments can travel together without compromise."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure temperature compliance throughout transit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every cold chain shipment is monitored in real time via IoT sensors that feed into our TMS. If a temperature deviation is detected, our operations team is alerted immediately and corrective action is taken."
          }
        },
        {
          "@type": "Question",
          "name": "Can you provide temperature logs and compliance documentation for audits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. After every delivery, you receive a full temperature log report with timestamps, deviation alerts, and proof of delivery, formatted to meet FSSAI, HACCP, and pharma cold chain audit standards."
          }
        }
      ]
    }
  ]
};

export default function ColdChainPage() {
  return (
  <>
  <SEO
        title="Cold Chain Logistics | SAUDEX GLOBAL"
        description={coldChainMeta.description}
        keywords={coldChainMeta.keywords}
        canonical={coldChainMeta.canonical}
        ogImage={coldChainMeta.ogImage}
      />
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(coldChainSchema)}</script>
  </Helmet>
  <IndustryPage data={coldChainData} />
  </>
  );
}