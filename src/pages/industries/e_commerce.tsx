import { IndustryPage } from "../IndustryPage";
import { ecommerceData } from "../data/ecommerceData";
import { SEO } from "../../components/SEO"
import { Helmet } from "react-helmet-async";
import { ecommerceMeta } from "../data/seoMeta";

const ecommerceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://saudexglobal.com/industries/e_commerce#webpage",
      "url": "https://saudexglobal.com/industries/e_commerce/",
      "name": "E-Commerce Fulfilment | SAUDEX GLOBAL",
      "description": ecommerceMeta.description,
      "isPartOf": { "@id": "https://saudexglobal.com/#website" },
      "about": { "@id": "https://saudexglobal.com/industries/e_commerce#service" },
      "breadcrumb": { "@id": "https://saudexglobal.com/industries/e_commerce#breadcrumb" }
    },
    {
      "@type": "Service",
      "@id": "https://saudexglobal.com/industries/e_commerce#service",
      "name": "E-Commerce Fulfilment",
      "serviceType": "E-Commerce Fulfilment",
      "description": ecommerceMeta.description,
      "url": "https://saudexglobal.com/industries/e_commerce/",
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
      "knowsAbout": ["Same-day dispatch", "Returns logistics", "Last-mile delivery", "Shopify integration", "WooCommerce integration"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://saudexglobal.com/industries/e_commerce#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://saudexglobal.com/" },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://saudexglobal.com/industries/" },
        { "@type": "ListItem", "position": 3, "name": "E-Commerce", "item": "https://saudexglobal.com/industries/e_commerce/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://saudexglobal.com/industries/e_commerce#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How quickly can you ship orders after they're placed on our platform?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We support same day dispatch for orders confirmed before our daily cut off time. Once integrated with your store via API or plugin, orders flow automatically into our fulfillment system."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer a returns management solution for our customers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our reverse logistics service handles customer pickups, condition inspection, and restocking or disposal based on your returns policy, with a returns dashboard for item level visibility."
          }
        },
        {
          "@type": "Question",
          "name": "Can your system integrate with platforms like Shopify, WooCommerce, or our custom OMS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer pre built integrations with major eCommerce platforms and a REST API for custom OMS setups. Setup typically takes 1 to 3 business days."
          }
        }
      ]
    }
  ]
};

export default function ECommercePage() {
  return (
    <>
    <SEO
        title="E-Commerce Fulfilment | SAUDEX GLOBAL"
        description={ecommerceMeta.description}
        keywords={ecommerceMeta.keywords}
        canonical={ecommerceMeta.canonical}
        ogImage={ecommerceMeta.ogImage}
      />
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(ecommerceSchema)}</script>
  </Helmet>
  <IndustryPage data={ecommerceData} />
  </>
  );
}