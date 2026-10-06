import { IndustryPage } from "../IndustryPage";
import { coldChainData } from "../data/coldChainData";
import { SEO } from "../../components/SEO"
import { coldChainMeta } from "../data/seoMeta";

const coldChainSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://saudexglobal.com/industries/cold-chain#webpage",
      "url": "https://saudexglobal.com/industries/cold-chain/",
      "name": "Cold Chain Logistics | SAUDEX GLOBAL",
      "description": coldChainMeta.description,
      "isPartOf": { "@id": "https://saudexglobal.com/#website" },
      "about": { "@id": "https://saudexglobal.com/industries/cold-chain#service" },
      "breadcrumb": { "@id": "https://saudexglobal.com/industries/cold-chain#breadcrumb" }
    },
    {
      "@type": "Service",
      "@id": "https://saudexglobal.com/industries/cold-chain#service",
      "name": "Cold Chain Logistics",
      "serviceType": "Cold Chain Logistics",
      "description": coldChainMeta.description,
      "url": "https://saudexglobal.com/industries/cold-chain/",
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
      "knowsAbout": ["Temperature-sensitive cargo coordination", "Cold storage planning", "Shipment documentation"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://saudexglobal.com/industries/cold-chain#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://saudexglobal.com/" },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://saudexglobal.com/industries/" },
        { "@type": "ListItem", "position": 3, "name": "Cold Chain", "item": "https://saudexglobal.com/industries/cold-chain/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://saudexglobal.com/industries/cold-chain#faq",
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
            "text": "Temperature monitoring options depend on the shipment and service provider. Contact our team to confirm what monitoring and reporting are available for your route."
          }
        },
        {
          "@type": "Question",
          "name": "Can you provide temperature logs and compliance documentation for audits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Documentation depends on the shipment and service provider. Contact our team to confirm which records can be provided for your route."
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
        schemaMarkup={coldChainSchema}
      />
  <IndustryPage data={coldChainData} />
  </>
  );
}