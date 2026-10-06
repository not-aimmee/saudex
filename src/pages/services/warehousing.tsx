import { ServicePage, type ServicePageData } from "./ServicePage"
import { SEO } from "../../components/SEO";
import { warehousingLogisticsMeta } from "../data/seoMeta"

const globalFreight: ServicePageData = {
  heroTag: "Warehousing",
  heading: "Your stock,\n safe and ready.",
  subheading: "Flexible warehousing services with inventory management, allowing you to scale up or down as your business needs change.",
  heroImage: "/images/in26.webp",
  heroImageAlt: "Warehousing services by SAUDEX GLOBAL",
  sections: [
    {
      tag: "",
      layout: "image-left",
      heading: "Contract Warehousing Solutions",
      body: "Elevating the standard for contract warehousing. Our flexible, scalable solutions support manufacturers, distributors, and retailers with secure storage, efficient inventory management, and seamless distribution.",
      image: "/images/in27.webp",
      imageAlt: "Contract warehousing and inventory management",
      highlight: "",
    },
    {
      tag: "",
      layout: "image-top",
      heading: "Flexible Storage Plans",
      body: "Warehousing can include goods receiving, storage, pick and pack, and dispatch. Contact our team to discuss your storage and inventory requirements.",
      image: "/images/in35.webp",
      imageAlt: "Flexible storage and warehousing services",
      highlight: "",
    },
    {
      tag: "",
      layout: "image-left",
      heading: "Secure & Compliant",
      body: "State of the art security systems and full regulatory compliance to protect your inventory.",
      image: "/images/in14.webp",
      imageAlt: "Secure and compliant warehousing facilities",
      highlight: "",
    },
    {
      tag: "",
      layout: "image-bottom",
      heading: "Dedicated Warehousing Facilities",
      body: "Secure, dedicated warehousing solutions tailored to your operational requirements. We manage infrastructure, labor, and processes while ensuring flexibility and cost efficiency.",
      image: "/images/s33.webp",
      imageAlt: "Dedicated warehousing facilities by SAUDEX GLOBAL",
      highlight: "",
    },
  ],
  faqs: [
    {
      q: "What does contract warehousing include?",
      a: "It includes storage space, inventory management, goods receiving and dispatch, and regular stock reporting. We can also arrange pick and pack services.",
    },
    {
      q: "Is your warehouse secure?",
      a: "Contact our team to discuss the security arrangements and access controls available for the facility proposed for your goods.",
    },
    {
      q: "Can I scale my storage space up or down?",
      a: "Yes. Our contract warehousing is flexible, you can increase or reduce your storage space based on seasonal demand or business growth.",
    },
  ],
};

const warehousingServicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://saudexglobal.com/services/warehousing#webpage",
      "url": "https://saudexglobal.com/services/warehousing",
      "name": "Warehousing Services & Inventory Solutions | SAUDEX GLOBAL",
      "description": "Warehousing and inventory coordination services for businesses managing goods and supply chains.",
      "isPartOf": {
        "@id": "https://saudexglobal.com/#website"
      },
      "about": {
        "@id": "https://saudexglobal.com/services/warehousing#service"
      },
      "breadcrumb": {
        "@id": "https://saudexglobal.com/services/warehousing#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://saudexglobal.com/services/warehousing#service",
      "name": "Warehousing Services",
      "serviceType": "Warehousing Services",
      "description": "Flexible warehousing services from SAUDEX GLOBAL with secure storage, inventory management, stock reporting, scalable capacity, and dedicated warehousing facilities.",
      "url": "https://saudexglobal.com/services/warehousing",
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
        "name": "Warehousing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Contract Warehousing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Flexible Storage Plans"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Inventory Management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dedicated Warehousing Facilities"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://saudexglobal.com/services/warehousing#breadcrumb",
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
          "name": "Warehousing Services",
          "item": "https://saudexglobal.com/services/warehousing"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://saudexglobal.com/services/warehousing#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does contract warehousing include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It includes storage space, inventory management, goods receiving and dispatch, regular stock reporting, and optional pick and pack services."
          }
        },
        {
          "@type": "Question",
          "name": "Is your warehouse secure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact our team to discuss the security arrangements and access controls available for the facility proposed for your goods."
          }
        },
        {
          "@type": "Question",
          "name": "Can I scale my storage space up or down?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Contract warehousing capacity can be increased or reduced based on seasonal demand or business growth."
          }
        }
      ]
    }
  ]
};

export default function Warehousing() {
  return (
    <>
      <SEO
        title={warehousingLogisticsMeta.title}
        description={warehousingLogisticsMeta.description}
        keywords={warehousingLogisticsMeta.keywords}
        canonical={warehousingLogisticsMeta.canonical}
        ogImage={warehousingLogisticsMeta.ogImage}
        schemaMarkup={warehousingServicesSchema}
      />
      <ServicePage data={globalFreight} />
    </>
  );
}
