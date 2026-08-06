import { ServicePage, type ServicePageData } from "./ServicePage"
import { SEO } from "../../components/SEO";
import { Helmet } from "react-helmet-async";
import { supplyChainLogisticsMeta } from "../data/seoMeta"

const globalFreight: ServicePageData = {
  heroTag: "Supply Chain Logistics",
  heading: " Smarter operations start here.",
  subheading: "Strategic supply chain logistics consulting to reduce costs, remove bottlenecks, and build a logistics operation that scales with your business.",
  heroImage: "/images/s8.webp",
  heroImageAlt: "Supply chain logistics by SAUDEX GLOBAL",
  sections: [
    {
      tag: "",
layout: "image-left",
heading: "Supply Chain Logistics",
body: "We start with a full assessment of how your goods currently move, from sourcing and storage to transport and delivery. We identify where time and money are being lost, then give you a clear, practical improvement plan. We can advise only, or stay involved through implementation using our own logistics network to execute the changes.",
image: "/images/s3.webp",
imageAlt: "Supply chain logistics consulting services",
highlight: "Built for growing businesses",
    },
    {
      tag: "",
      layout: "image-top",
      heading: "End-to-End Assessment",
      body: "Comprehensive evaluation of your supply chain to identify inefficiencies, risks, and cost saving opportunities.",
      image: "/images/s20.webp",
      imageAlt: "End-to-end supply chain assessment",
      highlight: "",
    },
    {
      tag: "",
      layout: "image-left",
      heading: "Practical Implementation",
      body: "Data driven inventory planning to improve stock positioning, reduce carrying costs, and enhance service levels.",
      image: "/images/s28.webp",
      imageAlt: "Practical supply chain implementation",
      highlight: "",
    },
    {
      tag: "Last-Mile Delivery",
      layout: "image-bottom",
      heading: "Built for SMEs & Growing Businesses",
      body: "Future ready supply chain strategies designed to support expansion, seasonal demand, and market changes.",
      image: "/images/s50.webp",
      imageAlt: "Supply chain optimization for growing businesses",
      highlight: "Flexible Tracking",
    },
  ],
  faqs: [
    {
      q: "What does a supply chain consultation involve?",
      a: "We start with an assessment of your current operations such as sourcing, storage, transport, and delivery. We then identify inefficiencies and recommend improvements with a clear implementation plan.",
    },
    {
      q: "Is this service suitable for small businesses?",
      a: "Absolutely. Supply chain optimization isn't just for large corporations. Small and mid sized businesses often see the fastest improvements because there's more room to streamline.",
    },
    {
      q: "Do you implement the recommendations or just advise?",
      a: " Both. We can provide a strategic report only, or stay involved to help you implement changes using our logistics network and expertise.",
    },
  ],
};

const supplyChainLogisticsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://saudexglobal.com/services/Supply_chain#webpage",
      "url": "https://saudexglobal.com/services/Supply_chain",
      "name": "Supply Chain Logistics & Consulting Services | SAUDEX GLOBAL",
      "description": "Supply chain logistics by SAUDEX GLOBAL to reduce costs, remove bottlenecks and improve operations through strategic consulting.",
      "isPartOf": { "@id": "https://saudexglobal.com/#website" },
      "about": { "@id": "https://saudexglobal.com/services/Supply_chain#service" },
      "breadcrumb": { "@id": "https://saudexglobal.com/services/Supply_chain#breadcrumb" }
    },
    {
      "@type": "Service",
      "@id": "https://saudexglobal.com/services/Supply_chain#service",
      "name": "Supply Chain Logistics",
      "serviceType": "Supply Chain Logistics",
      "description": "Strategic supply chain logistics consulting focused on reducing costs, removing bottlenecks, improving inventory planning, and building scalable logistics operations.",
      "url": "https://saudexglobal.com/services/Supply_chain",
      "provider": {
        "@type": "Organization",
        "@id": "https://saudexglobal.com/#organization",
        "name": "SAUDEX GLOBAL",
        "url": "https://saudexglobal.com/"
      },
      "areaServed": [
        { "@type": "Place", "name": "Middle East" },
        { "@type": "Place", "name": "Southeast Asia" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Supply Chain Logistics Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Supply Chain Assessment" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Supply Chain Consulting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inventory Planning" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Supply Chain Implementation" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://saudexglobal.com/services/Supply_chain#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://saudexglobal.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://saudexglobal.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Supply Chain Logistics", "item": "https://saudexglobal.com/services/Supply_chain" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://saudexglobal.com/services/Supply_chain#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a supply chain consultation involve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We assess sourcing, storage, transport, and delivery, identify inefficiencies, and recommend improvements with a clear implementation plan."
          }
        },
        {
          "@type": "Question",
          "name": "Is this service suitable for small businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Supply chain optimization can help small and mid-sized businesses streamline operations and improve efficiency."
          }
        },
        {
          "@type": "Question",
          "name": "Do you implement the recommendations or just advise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both. SAUDEX GLOBAL can provide strategic recommendations or stay involved to implement changes using its logistics network and expertise."
          }
        }
      ]
    }
  ]
};

export default function SCC() {
  return (
    <>
    <SEO
        title={supplyChainLogisticsMeta.title}
        description={supplyChainLogisticsMeta.description}
        keywords={supplyChainLogisticsMeta.keywords}
        canonical={supplyChainLogisticsMeta.canonical}
        ogImage={supplyChainLogisticsMeta.ogImage}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(supplyChainLogisticsSchema)}</script>
      </Helmet>
   <ServicePage data={globalFreight} />
   </>
  );
}
