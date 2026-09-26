import { IndustryPage } from "../IndustryPage";
import { agriCommoditiesData } from "../data/agriculture";
import { SEO } from "../../components/SEO"
import { Helmet } from "react-helmet-async";
import { agriCommoditiesMeta } from "../data/seoMeta";

const agricultureSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://saudexglobal.com/industries/agriculture#webpage",
      "url": "https://saudexglobal.com/industries/agriculture/",
      "name": agriCommoditiesMeta.title,
      "description": agriCommoditiesMeta.description,
      "isPartOf": { "@id": "https://saudexglobal.com/#website" },
      "about": { "@id": "https://saudexglobal.com/industries/agriculture#service" },
      "breadcrumb": { "@id": "https://saudexglobal.com/industries/agriculture#breadcrumb" }
    },
    {
      "@type": "Service",
      "@id": "https://saudexglobal.com/industries/agriculture#service",
      "name": "Agri-Commodities & Palm Oil Logistics",
      "serviceType": "Agri-Commodities & Palm Oil Logistics",
      "description": agriCommoditiesMeta.description,
      "url": "https://saudexglobal.com/industries/agriculture/",
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
      "knowsAbout": ["Palm oil supply", "Agri-commodities logistics", "Bulk edible oil transport", "Heated tanker delivery", "RSPO certified palm oil"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://saudexglobal.com/industries/agriculture#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://saudexglobal.com/" },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://saudexglobal.com/industries/" },
        { "@type": "ListItem", "position": 3, "name": "Agri-Commodities & Palm Oil", "item": "https://saudexglobal.com/industries/agriculture/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://saudexglobal.com/industries/agriculture#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can you supply certified sustainable palm oil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We source from RSPO and ISCC certified producers and can supply segregated, mass balance, or book and claim volumes, depending on your requirements. Each shipment includes the relevant certificates and batch-level traceability records."
          }
        },
        {
          "@type": "Question",
          "name": "How do you keep palm oil from solidifying during transport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use insulated and heated tankers with steam coils, and we log the cargo temperature throughout the journey. Loading and discharge are scheduled to minimise waiting time, and drivers are trained to maintain the correct temperature range for each product grade."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer flexible contract terms for regular buyers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer spot purchases, monthly supply agreements, and long-term contracts with fixed or index-linked pricing. Delivery schedules can be adjusted to match your production plan, and volumes can be scaled up or down with reasonable notice."
          }
        }
      ]
    }
  ]
};

export default function AgriPage() {
  return (
    <>
      <SEO
        title={agriCommoditiesMeta.title}
        description={agriCommoditiesMeta.description}
        keywords={agriCommoditiesMeta.keywords}
        canonical={agriCommoditiesMeta.canonical}
        ogImage={agriCommoditiesMeta.ogImage}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(agricultureSchema)}</script>
      </Helmet>
      <IndustryPage data={agriCommoditiesData} />
    </>
  );
}