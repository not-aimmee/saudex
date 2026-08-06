import { ServicePage, type ServicePageData } from "./ServicePage"
import { SEO } from "../../components/SEO";
import { Helmet } from "react-helmet-async";
import { distributionLogisticsMeta } from "../data/seoMeta"

const globalFreight: ServicePageData = {
  heroTag: "Distribution & Transportation",
  heading: " From Warehouse to Doorstep.",
  subheading: "Reliable transportation services for bulk and last mile distribution across key regional routes, on schedule, every time.",
  heroImage: "/images/ab.webp",
  heroImageAlt: "Transportation services by SAUDEX GLOBAL",
  sections: [
    {
      tag: "Distribution & Transportation",
      layout: "image-left",
      heading: "From warehouse\nto\ndoorstep.",
      body: "We run fixed distribution routes and flexible delivery schedules for businesses that need consistent, high frequency delivery. Whether you're supplying retail outlets, wholesale clients, or end customers, our network covers the region with real accountability at every stop, including electronic proof of delivery.",
      image: "/images/in13.webp",
      imageAlt: "Transportation and distribution services",
      highlight: "POD on every delivery",
    },
    {
      tag: "",
      layout: "image-top",
      heading: "Distribution Management.",
      body: "Raising the benchmark for distribution and transportation services. Our flexible, scalable solutions support manufacturers, distributors and retailers with timely deliveries, efficient logistics and end to end supply chain management.",
      image: "/images/in14.webp",
      imageAlt: "Bulk distribution and transportation",
      highlight: "",
    },
    {
      tag: "",
      layout: "image-left",
      heading: "Reliable Distribution Networks",
      body: "Efficient logistics and transportation solutions ensuring your goods are delivered on time and in perfect condition.",
      image: "/images/in21.webp",
      imageAlt: "Reliable distribution network operations",
      highlight: "",
    },
    {
      tag: "Last-Mile Delivery",
      layout: "image-bottom",
      heading: "Integrated Transportation Support",
      body: "Seamless coordination with transport networks for inbound and outbound shipments, ensuring timely delivery and efficient movement across your supply chain.",
      image: "/images/in31.webp",
      imageAlt: "Last mile delivery and transportation services",
      highlight: "Scheduled & On-Demand",
    },
  ],
  faqs: [
    {
      q: "What areas do you cover for distribution?",
      a: "We cover key routes across Saudi Arabia and the wider Middle East region. Contact us to confirm coverage for your specific delivery area.",
    },
    {
      q: "Can you handle recurring or scheduled distribution runs?",
      a: "Yes. We work with businesses on regular distribution schedules, daily, weekly, or monthly, with consistent routing and reporting.",
    },
    {
      q: "What's the minimum order size for distribution?",
      a: "There's no strict minimum. We work with businesses of different scales and will find a cost effective solution regardless of volume.",
    },
  ],
};

const transportationServicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://saudexglobal.com/services/distribution#webpage",
      "url": "https://saudexglobal.com/services/distribution",
      "name": "Transportation Services & Last Mile Delivery | SAUDEX GLOBAL",
      "description": "Transportation services by SAUDEX GLOBAL for reliable distribution, last mile delivery, scheduled routes and regional logistics support.",
      "isPartOf": { "@id": "https://saudexglobal.com/#website" },
      "about": { "@id": "https://saudexglobal.com/services/distribution#service" },
      "breadcrumb": { "@id": "https://saudexglobal.com/services/distribution#breadcrumb" }
    },
    {
      "@type": "Service",
      "@id": "https://saudexglobal.com/services/distribution#service",
      "name": "Transportation Services",
      "serviceType": "Transportation Services",
      "description": "Reliable transportation services for bulk and last mile distribution, scheduled routes, regional delivery, distribution management, and integrated transportation support.",
      "url": "https://saudexglobal.com/services/distribution",
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
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Transportation and Distribution Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Regional Transportation Services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Last Mile Delivery" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Distribution Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Scheduled and On-Demand Transportation" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://saudexglobal.com/services/distribution#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://saudexglobal.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://saudexglobal.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Transportation Services", "item": "https://saudexglobal.com/services/distribution" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://saudexglobal.com/services/distribution#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What areas do you cover for distribution?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SAUDEX GLOBAL covers key routes across Saudi Arabia and the wider Middle East region. Coverage for a specific delivery area can be confirmed directly."
          }
        },
        {
          "@type": "Question",
          "name": "Can you handle recurring or scheduled distribution runs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. SAUDEX GLOBAL supports daily, weekly, and monthly distribution schedules with consistent routing and reporting."
          }
        },
        {
          "@type": "Question",
          "name": "What's the minimum order size for distribution?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no strict minimum. Transportation and distribution solutions can be adapted to businesses with different shipment volumes."
          }
        }
      ]
    }
  ]
};

export default function Distribution() {
  return (
    <>
      <SEO
        title={distributionLogisticsMeta.title}
        description={distributionLogisticsMeta.description}
        keywords={distributionLogisticsMeta.keywords}
        canonical={distributionLogisticsMeta.canonical}
        ogImage={distributionLogisticsMeta.ogImage}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(transportationServicesSchema)}</script>
      </Helmet>
      <ServicePage data={globalFreight} />
    </>
  );
}
