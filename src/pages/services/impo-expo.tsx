import { ServicePage, type ServicePageData } from "./ServicePage"
import { SEO } from "../../components/SEO";
import { Helmet } from "react-helmet-async";
import { importExportLogisticsMeta } from "../data/seoMeta"

const globalFreight: ServicePageData = {
  heroTag: "Import-Export",
  heading: "Cross border, handled completely.",
  subheading: "Import and export services across the Middle East and Southeast Asia, with documentation, compliance, and coordination managed for you.",
  heroImage: "/images/s1.webp",
  heroImageAlt: "Import and export cargo ship operated by SAUDEX GLOBAL",
  sections: [
    {
      tag: "Customs Clearance",
layout: "image-left",
heading: "Import & Export Handling",
body: "We manage the full process on both sides of the border. From preparing your shipping documents and customs declarations to coordinating with carriers and local authorities, we make sure your goods move without delays, fines, or last minute surprises. Whether you're bringing goods in or sending them out, we handle every step.",
image: "/images/s9.webp",
imageAlt: "Import and export customs clearance and documentation",
highlight: "15+ countries served",
    },
    {
      tag: "",
      layout: "image-top",
      heading: "Customs Clearance & Trade Documentation",
      body: "Navigate complex customs regulations with confidence. Our trade specialists manage all documentation requirements, including commercial invoices, packing lists, certificates of origin, and harmonized tariff codes. We handle duty calculations, tariff classifications, and communicate directly with customs authorities to expedite clearance. With deep expertise in trade laws across multiple countries, we ensure accurate filings and reduce the risk of delays or penalties.",
      image: "/images/s5.webp",
      imageAlt: "International import and export logistics cargo handling",
      highlight: "",
    },
    {
      tag: "",
      layout: "image-left",
      heading: "Cargo Preparation & Export Readiness",
      body: "Ensure your shipments meet international standards from the moment they leave your facility. We provide expert guidance on proper packaging, secure labeling, compliance with country specific requirements, and quality inspections. Our team verifies hazmat compliance, weight distribution, and documentation accuracy. This proactive approach prevents costly rejections at borders and ensures your goods arrive in perfect condition, ready for market.",
      image: "/images/s4.webp",
      imageAlt: "Cargo preparation for international import and export",
      highlight: "Multi Country Compliance",
    },
    {
      tag: "",
      layout: "image-bottom",
      heading: "Shipment Tracking & Trade Visibility",
      body: "Gain complete end to end visibility into every shipment moving through our network. Our advanced tracking system provides real time status updates, milestone notifications, and document visibility throughout the entire transit journey. Monitor customs clearance progress, port movements, and last mile delivery with precision. Access detailed shipment reports anytime, anywhere keeping you and your customers informed every step of the way.",
      image: "/images/s26.webp",
      imageAlt: "Shipment tracking for import and export logistics",
      highlight: "98% On-Time Rate",
    },
  ],
  faqs: [
    {
      q: "What countries do you import and export to?",
      a: " We currently serve 15+ countries across the Middle East and Southeast Asia, with the ability to coordinate shipments to other regions through our carrier network.",
    },
    {
      q: "How long does an import or export shipment take?",
      a: "Transit times depend on origin, destination, and shipping method. Sea freight typically takes 7–21 days, air freight 2–5 days, and land transport varies by route.",
    },
    {
      q: "Do you handle the paperwork and documentation?",
      a: "Yes, completely. We prepare and manage all required shipping documents, customs declarations, and regulatory paperwork on your behalf.",
    },
  ],
};


const importExportSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://saudexglobal.com/services/impo-expo#webpage",
      "url": "https://saudexglobal.com/services/impo-expo",
      "name": "Import and Export Services & Logistics Experts | SAUDEX GLOBAL",
      "description": "Import and export services by SAUDEX GLOBAL, covering documentation, customs compliance, cargo preparation and shipment coordination.",
      "isPartOf": {
        "@id": "https://saudexglobal.com/#website"
      },
      "about": {
        "@id": "https://saudexglobal.com/services/impo-expo#service"
      },
      "breadcrumb": {
        "@id": "https://saudexglobal.com/services/impo-expo#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://saudexglobal.com/services/impo-expo#service",
      "name": "Import and Export Services",
      "serviceType": "Import and Export",
      "description": "Import and export services across the Middle East and Southeast Asia, with documentation, customs compliance, cargo preparation, shipment tracking, and coordination managed by SAUDEX GLOBAL.",
      "url": "https://saudexglobal.com/services/impo-expo",
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
        "name": "Import and Export Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Customs Clearance & Trade Documentation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cargo Preparation & Export Readiness"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Shipment Tracking & Trade Visibility"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://saudexglobal.com/services/impo-expo#breadcrumb",
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
          "name": "Import and Export",
          "item": "https://saudexglobal.com/services/impo-expo"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://saudexglobal.com/services/impo-expo#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What countries do you import and export to?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We currently serve 15+ countries across the Middle East and Southeast Asia, with the ability to coordinate shipments to other regions through our carrier network."
          }
        },
        {
          "@type": "Question",
          "name": "How long does an import or export shipment take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Transit times depend on origin, destination, and shipping method. Sea freight typically takes 7–21 days, air freight 2–5 days, and land transport varies by route."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle the paperwork and documentation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, completely. We prepare and manage all required shipping documents, customs declarations, and regulatory paperwork on your behalf."
          }
        }
      ]
    }
  ]
};

export default function ImpoExpo() {
  return (
  <>
  <SEO
        title={importExportLogisticsMeta.title}
        description={importExportLogisticsMeta.description}
        keywords={importExportLogisticsMeta.keywords}
        canonical={importExportLogisticsMeta.canonical}
        ogImage={importExportLogisticsMeta.ogImage}
      />
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(importExportSchema)}</script>
  </Helmet>
  <ServicePage data={globalFreight} />
  </>
  );
}
