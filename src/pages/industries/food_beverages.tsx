import { IndustryPage } from "../IndustryPage";
import { foodBeveragesData } from "../data/foodBeveragesData";
import { SEO } from "../../components/SEO";
import { Helmet } from "react-helmet-async";
import { foodBeveragesMeta } from "../data/seoMeta";

const foodBeveragesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://saudexglobal.com/industries/food_beverages#webpage",
      "url": "https://saudexglobal.com/industries/food_beverages/",
      "name": "Food & Beverage Logistics | SAUDEX GLOBAL",
      "description": foodBeveragesMeta.description,
      "isPartOf": { "@id": "https://saudexglobal.com/#website" },
      "about": { "@id": "https://saudexglobal.com/industries/food_beverages#service" },
      "breadcrumb": { "@id": "https://saudexglobal.com/industries/food_beverages#breadcrumb" }
    },
    {
      "@type": "Service",
      "@id": "https://saudexglobal.com/industries/food_beverages#service",
      "name": "Food & Beverage Logistics",
      "serviceType": "Food & Beverage Logistics",
      "description": foodBeveragesMeta.description,
      "url": "https://saudexglobal.com/industries/food_beverages/",
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
      "knowsAbout": ["Food safety supply chain", "FSSC 22000 logistics", "Cold and ambient storage", "HACCP food distribution", "Batch traceability"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://saudexglobal.com/industries/food_beverages#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://saudexglobal.com/" },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://saudexglobal.com/industries/" },
        { "@type": "ListItem", "position": 3, "name": "Food & Beverages", "item": "https://saudexglobal.com/industries/food_beverages/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://saudexglobal.com/industries/food_beverages#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are your vehicles and facilities compliant with food safety regulations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our fleet and storage facilities are compliant with FSSAI food transport guidelines. Vehicles are sanitized on a regular schedule, and cold storage units are audited for hygiene and temperature standards."
          }
        },
        {
          "@type": "Question",
          "name": "How do you handle perishable items with short shelf lives?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We prioritize FEFO (First Expired, First Out) dispatch protocols, with deliveries scheduled to minimize time in transit so products reach shelves with maximum remaining shelf life."
          }
        },
        {
          "@type": "Question",
          "name": "Can you manage both retail delivery and B2B distribution for our food brand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We handle B2B bulk deliveries to distributors, hotels, and institutional buyers alongside retail replenishment to supermarkets and modern trade outlets."
          }
        }
      ]
    }
  ]
};

export default function FoodBevPage() {
  return (
    <>
    <SEO
        title="Food & Beverage Logistics | SAUDEX GLOBAL"
        description={foodBeveragesMeta.description}
        keywords={foodBeveragesMeta.keywords}
        canonical={foodBeveragesMeta.canonical}
        ogImage={foodBeveragesMeta.ogImage}
      />
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(foodBeveragesSchema)}</script>
  </Helmet>
  <IndustryPage data={foodBeveragesData} />
  </>
  );
}