import { ServicePage, type ServicePageData } from "./ServicePage"
import { SEO } from "../../components/SEO";
import { Helmet } from "react-helmet-async";
import { freightForwardingMeta } from "../data/seoMeta"

const globalFreight: ServicePageData = {
  heroTag: "Freight Forwarding",
  heading: "Your cargo,\n our responsibility.",
  subheading: "Air, sea, and land freight forwarding coordinated end-to-end, so you never have to chase down a shipment.",
  heroImage: "/images/i2.webp",
  heroImageAlt: "Freight forwarding services by SAUDEX GLOBAL",
  sections: [
    {
      tag: "Freight Forwarding",
layout: "image-left",
heading: "Global Freight Solutions",
body: "We work with a network of trusted carriers across air, sea, and road to find the right route, the right timing, and the right price for every shipment. FCL, LCL, charter, or express \n we match the method to your needs and manage the entire journey from origin to destination with full visibility throughout.",
image: "/images/in10.webp",
imageAlt: "International freight forwarding warehouse operations",
highlight: "98% on-time rate",
    },
    {
      tag: "",
      layout: "image-top",
      heading: "Cargo Safety & Compliance",
      body: "Robust security measures and regulatory compliance for all freight, protecting goods during transit across borders.",
      image: "/images/in17.webp",
      imageAlt: "Sea freight and international cargo shipping",
      highlight: "",
    },
    {
      tag: "",
      layout: "image-left",
      heading: "Smart Inventory Management",
      body: "Advanced inventory solutions that maximize space utilization and streamline stock flow. Reduce waste, optimize turnover, and improve operational efficiency.",
      image: "/images/in19.webp",
      imageAlt: "Global freight forwarding cargo containers",
      highlight: "",
    },
    {
      tag: "Comprehensive Solutions",
      layout: "image-bottom",
      heading: "Warehouse Management Technology",
      body: "Integrated WMS solutions offering real time tracking, reporting, and control for smooth warehouse operations and accurate order fulfillment.",
      image: "/images/in31.webp",
      imageAlt: "Air sea and land freight forwarding operations",
      highlight: "",
    },
  ],
  faqs: [
    {
      q: "What's the difference between air and sea freight?",
      a: "Air freight is faster but more expensive,  ideal for urgent or high value shipments. Sea freight is cost effective for large or heavy cargo with more flexible timelines.",
    },
    {
      q: "Can I ship partial loads or do I need a full container?",
      a: "Both. We offer FCL (Full Container Load) for large shipments and LCL (Less than Container Load) for smaller ones, so you only pay for the space you use.",
    },
    {
      q: "What types of cargo do you forward?",
      a: "We handle general cargo, perishables, hazardous materials (with proper certification), oversized goods, and high value items.",
    }
  ],
};


const freightForwardingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://saudexglobal.com/services/freight#webpage",
      "url": "https://saudexglobal.com/services/freight",
      "name": "Freight Forwarding & Global Shipping Services | SAUDEX GLOBAL",
      "description": "Freight forwarding solutions from SAUDEX GLOBAL covering air, sea and land cargo with reliable coordination, tracking and compliance.",
      "isPartOf": {
        "@id": "https://saudexglobal.com/#website"
      },
      "about": {
        "@id": "https://saudexglobal.com/services/freight#service"
      },
      "breadcrumb": {
        "@id": "https://saudexglobal.com/services/freight#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://saudexglobal.com/services/freight#service",
      "name": "Freight Forwarding Services",
      "serviceType": "Freight Forwarding",
      "description": "Air, sea, and land freight forwarding coordinated end-to-end by SAUDEX GLOBAL, with cargo routing, shipment tracking, safety, compliance, and inventory visibility.",
      "url": "https://saudexglobal.com/services/freight",
      "provider": {
        "@type": "Organization",
        "@id": "https://saudexglobal.com/#organization",
        "name": "SAUDEX GLOBAL",
        "url": "https://saudexglobal.com/"
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "Middle East"
        },
        {
          "@type": "Place",
          "name": "Southeast Asia"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Freight Forwarding Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Air Freight Forwarding"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sea Freight Forwarding"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Land Freight Forwarding"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cargo Safety & Compliance"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://saudexglobal.com/services/freight#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://saudexglobal.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://saudexglobal.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Freight Forwarding",
          "item": "https://saudexglobal.com/services/freight"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://saudexglobal.com/services/freight#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What's the difference between air and sea freight?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Air freight is faster but more expensive and is ideal for urgent or high-value shipments. Sea freight is cost-effective for large or heavy cargo with more flexible timelines."
          }
        },
        {
          "@type": "Question",
          "name": "Can I ship partial loads or do I need a full container?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both options are available. SAUDEX GLOBAL offers FCL for large shipments and LCL for smaller shipments, so customers can use the container capacity that fits their needs."
          }
        },
        {
          "@type": "Question",
          "name": "What types of cargo do you forward?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SAUDEX GLOBAL handles general cargo, perishables, properly certified hazardous materials, oversized goods, and high-value items."
          }
        }
      ]
    }
  ]
};

export default function Freight() {
  return (
  <>
  <SEO
        title={freightForwardingMeta.title}
        description={freightForwardingMeta.description}
        keywords={freightForwardingMeta.keywords}
        canonical={freightForwardingMeta.canonical}
        ogImage={freightForwardingMeta.ogImage}
      />
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(freightForwardingSchema)}</script>
  </Helmet>
  <ServicePage data={globalFreight} />
  </>
  );
}
