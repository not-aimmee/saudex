import { IndustryPage } from "../IndustryPage";
import { retailWholesaleData } from "../data/retailWholesaleData";
import { SEO } from "../../components/SEO";
import { Helmet } from "react-helmet-async";
import { retailWholesaleMeta } from "../data/seoMeta";

const retailWholesaleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://saudexglobal.com/industries/retail#webpage",
      "url": "https://saudexglobal.com/industries/retail/",
      "name": "Retail & Wholesale Logistics | SAUDEX GLOBAL",
      "description": retailWholesaleMeta.description,
      "isPartOf": { "@id": "https://saudexglobal.com/#website" },
      "about": { "@id": "https://saudexglobal.com/industries/retail#service" },
      "breadcrumb": { "@id": "https://saudexglobal.com/industries/retail#breadcrumb" }
    },
    {
      "@type": "Service",
      "@id": "https://saudexglobal.com/industries/retail#service",
      "name": "Retail & Wholesale Logistics",
      "serviceType": "Retail & Wholesale Logistics",
      "description": retailWholesaleMeta.description,
      "url": "https://saudexglobal.com/industries/retail/",
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
      "knowsAbout": ["Shelf-ready packaging", "Omnichannel fulfilment", "Store replenishment", "Wholesale supply chain", "Import duty optimisation"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://saudexglobal.com/industries/retail#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://saudexglobal.com/" },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://saudexglobal.com/industries/" },
        { "@type": "ListItem", "position": 3, "name": "Retail & Wholesale", "item": "https://saudexglobal.com/industries/retail/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://saudexglobal.com/industries/retail#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can you manage high volume bulk deliveries to our warehouses and stores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We specialize in full-truckload (FTL) and less-than-truckload (LTL) bulk deliveries to distribution centers, dark stores, and retail branches, aligned with your receiving dock windows."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer vendor managed inventory or replenishment support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We can work within VMI models by syncing delivery triggers with your inventory system, reducing manual reordering and preventing stockouts."
          }
        },
        {
          "@type": "Question",
          "name": "How do you handle peak season volumes like festive sales surges?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We plan capacity in advance through quarterly demand forecasting sessions, scaling fleet and manpower accordingly so SLAs remain unchanged during peak periods."
          }
        }
      ]
    }
  ]
};

export default function RetailPage() {
  return (
    <>
    <SEO
        title="Retail & Wholesale Logistics | SAUDEX GLOBAL"
        description={retailWholesaleMeta.description}
        keywords={retailWholesaleMeta.keywords}
        canonical={retailWholesaleMeta.canonical}
        ogImage={retailWholesaleMeta.ogImage}
      />
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(retailWholesaleSchema)}</script>
  </Helmet>
  <IndustryPage data={retailWholesaleData} />
  </>
  );
}