import { IndustryPage } from "../IndustryPage";
import { horecaData } from "../data/horecaData";
import { SEO } from "../../components/SEO";
import { Helmet } from "react-helmet-async";
import { horecaMeta } from "../data/seoMeta";

const horecaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://saudexglobal.com/industries/horeca#webpage",
      "url": "https://saudexglobal.com/industries/horeca/",
      "name": "HoReCa Logistics | SAUDEX GLOBAL",
      "description": horecaMeta.description,
      "isPartOf": { "@id": "https://saudexglobal.com/#website" },
      "about": { "@id": "https://saudexglobal.com/industries/horeca#service" },
      "breadcrumb": { "@id": "https://saudexglobal.com/industries/horeca#breadcrumb" }
    },
    {
      "@type": "Service",
      "@id": "https://saudexglobal.com/industries/horeca#service",
      "name": "HoReCa Logistics",
      "serviceType": "HoReCa Logistics",
      "description": horecaMeta.description,
      "url": "https://saudexglobal.com/industries/horeca/",
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
      "knowsAbout": ["Hotel food supply", "Restaurant logistics", "Catering distribution", "Hospitality supply chain", "Food service delivery"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://saudexglobal.com/industries/horeca#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://saudexglobal.com/" },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://saudexglobal.com/industries/" },
        { "@type": "ListItem", "position": 3, "name": "HoReCa", "item": "https://saudexglobal.com/industries/horeca/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://saudexglobal.com/industries/horeca#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can you handle urgent, last minute deliveries for our kitchen operations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer same day and next day delivery slots designed around kitchen prep windows, so supplies arrive when your team needs them."
          }
        },
        {
          "@type": "Question",
          "name": "Do you support multi location deliveries across our restaurant chain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We manage consolidated dispatch and individual drop offs across multiple outlets under a single account, with a unified dashboard to track everything centrally."
          }
        },
        {
          "@type": "Question",
          "name": "How do you handle fragile items like glassware and crockery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our HoReCa fleet uses padded compartment packaging, vertical stacking controls, and careful handling protocols, with handlers trained for hospitality-grade cargo."
          }
        }
      ]
    }
  ]
};

export default function HorecaPage() {
  return (
    <>
    <SEO
        title="HoReCa Logistics | SAUDEX GLOBAL"
        description={horecaMeta.description}
        keywords={horecaMeta.keywords}
        canonical={horecaMeta.canonical}
        ogImage={horecaMeta.ogImage}
      />
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(horecaSchema)}</script>
  </Helmet>
  <IndustryPage data={horecaData} />
  </>
  );
}