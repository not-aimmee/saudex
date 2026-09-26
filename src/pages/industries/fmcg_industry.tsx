import { IndustryPage } from "../IndustryPage";
import { fmcgData } from "../data/fmcgData";
import { SEO } from "../../components/SEO"
import { Helmet } from "react-helmet-async";
import { fmcgMeta } from "../data/seoMeta";

const fmcgIndustrySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://saudexglobal.com/industries/fmcg_industry#webpage",
      "url": "https://saudexglobal.com/industries/fmcg_industry/",
      "name": fmcgMeta.title,
      "description": fmcgMeta.description,
      "isPartOf": { "@id": "https://saudexglobal.com/#website" },
      "about": { "@id": "https://saudexglobal.com/industries/fmcg_industry#service" },
      "breadcrumb": { "@id": "https://saudexglobal.com/industries/fmcg_industry#breadcrumb" }
    },
    {
      "@type": "Service",
      "@id": "https://saudexglobal.com/industries/fmcg_industry#service",
      "name": "FMCG Distribution & Retail Logistics",
      "serviceType": "FMCG Distribution & Retail Logistics",
      "description": fmcgMeta.description,
      "url": "https://saudexglobal.com/industries/fmcg_industry/",
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
      "knowsAbout": ["Demand planning", "Promotional logistics", "Trade activation logistics", "Retail distribution", "General trade supply"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://saudexglobal.com/industries/fmcg_industry#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://saudexglobal.com/" },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://saudexglobal.com/industries/" },
        { "@type": "ListItem", "position": 3, "name": "FMCG", "item": "https://saudexglobal.com/industries/fmcg_industry/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://saudexglobal.com/industries/fmcg_industry#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can you support distribution across major markets in the Middle East and Southeast Asia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our network spans key commercial hubs across Saudi Arabia, the UAE, Malaysia, Singapore, China, and beyond, covering primary and secondary distribution under one logistics partner."
          }
        },
        {
          "@type": "Question",
          "name": "How do you manage SKU level accuracy across large FMCG shipments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our warehouse operations use barcode and RFID scanning at every stage, inbound, pick and pack, and dispatch, with SKU level reports generated per shipment and per market."
          }
        },
        {
          "@type": "Question",
          "name": "What's your approach to reducing transit damages for FMCG goods?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use product specific packing guidelines, damage rated transit packaging, and load optimization software, with damage claims tracked per corridor and high risk routes reviewed monthly."
          }
        }
      ]
    }
  ]
};

export default function FMCGPage() {
  return(
    <>
    <SEO
        title={fmcgMeta.title}
        description={fmcgMeta.description}
        keywords={fmcgMeta.keywords}
        canonical={fmcgMeta.canonical}
        ogImage={fmcgMeta.ogImage}
      />
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(fmcgIndustrySchema)}</script>
  </Helmet>
  <IndustryPage data={fmcgData} />
  </>
  );
}