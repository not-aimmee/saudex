// src/data/seoMeta.ts
// Central source of truth for all page meta tags.
// Import the specific object you need into each page.

export interface PageMeta {
  title?: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage: string;
}

const BASE_URL = "https://saudexglobal.com";
const OG       = `${BASE_URL}/images/indus.webp`;

/* Home Page */
export const homeMeta: PageMeta = {
  description:
    "SAUDEX GLOBAL helps businesses move goods worldwide with freight, customs, warehousing, and supply chain logistics.",
  keywords:
    "Singapore Freight Forwarding & Import-Export | Saudex Global, SAUDEX GLOBAL, freight forwarding, supply chain solutions, import export logistics, international logistics",
  canonical: `${BASE_URL}/`,
  ogImage:   OG,
};

export const defaultSiteMeta: PageMeta = {
  description:
    "Saudex Global provides freight forwarding, cold chain, warehousing, customs clearance, and distribution support for businesses.",
  keywords:
    "Saudex Global, logistics company, supply chain, freight forwarding,cold chain, warehousing, customs clearance, 3PL provider",
  canonical: `${BASE_URL}/`,
  ogImage:   OG,
};


/* services */
export const servicesMeta: PageMeta = {
  description:
    "Explore temperature-controlled transport, customs coordination, warehousing, FMCG distribution, and freight forwarding services from Saudex Global.",
  keywords:
    "logistics services, supply chain services, cold chain, warehousing,freight forwarding, customs brokerage, FMCG logistics, Saudex Global services",
  canonical: `${BASE_URL}/services/`,
  ogImage:   OG,
};

export const howWeWorkMeta: PageMeta = {
  description:
    "Learn how SAUDEX GLOBAL coordinates onboarding, route planning, shipment documentation, and delivery for business supply chains.",
  keywords:
    "how Saudex works, logistics process, supply chain onboarding,logistics workflow, freight process, Saudex Global approach",
  canonical: `${BASE_URL}/`,
  ogImage:   OG,
};

export const statsMeta: PageMeta = {
  description:"Explore the logistics services SAUDEX GLOBAL coordinates for business shipments, including freight, trade documentation, warehousing, and distribution.",
  keywords:
    "Saudex Global stats, logistics performance, on-time delivery rate,supply chain metrics, 3PL track record, logistics KPIs",
  canonical: `${BASE_URL}/`,
  ogImage:   OG,
};

export const whyChooseUsMeta: PageMeta = {
  
  description:
    "Learn how SAUDEX GLOBAL coordinates freight, customs, warehousing, and distribution services for business supply chains.",
  keywords:
    "why choose Saudex Global, logistics services, freight, customs, warehousing, distribution",
  canonical: `${BASE_URL}/about-us/`,
  ogImage:   OG,
};

export const ctaMeta: PageMeta = {
  
  description:
    "Ready to streamline your supply chain? Get in touch with Saudex Global for a tailored logistics quote — covering freight, warehousing, customs,cold chain, and end-to-end supply chain management.",
  keywords:
    "logistics quote, get a freight quote, supply chain consultation,Saudex Global contact, 3PL quote, logistics enquiry",
  canonical: `${BASE_URL}/get-a-quote/`,
  ogImage:   OG,
};

export const contactMeta: PageMeta = {
  description:
    "Get in touch with SAUDEX GLOBAL for freight, warehousing, customs, and supply chain enquiries.",
  keywords:
    "contact Saudex Global, logistics enquiry, freight contact, supply chain consultation, Saudex Global office, logistics partnership",
  canonical: `${BASE_URL}/contact/`,
  ogImage:   OG,
};

export const partnerContactMeta: PageMeta = {
  title: "Partner Enquiry | SAUDEX GLOBAL",
  description:
    "Contact SAUDEX GLOBAL about partnership opportunities, freight forwarding, and logistics collaboration.",
  keywords: "Saudex Global partner enquiry, logistics partnership, freight forwarding collaboration",
  canonical: `${BASE_URL}/partner-contact/`,
  ogImage: OG,
};

/* industry */
export const industriesMeta: PageMeta = {
  
  description:
    "Explore tailored logistics for retail, FMCG, e-commerce, food, hospitality, agriculture, and cold-chain businesses.",
  keywords:
    "logistics by industry, retail logistics, pharma supply chain,FMCG logistics, food logistics, ecommerce fulfilment, HORECA logistics",
  canonical: `${BASE_URL}/industries/`,
  ogImage:   OG,
};

export const aboutUsMeta: PageMeta = {
  title: "About SAUDEX GLOBAL: Our Company",
  description:
    "Learn about Saudex Global and our approach to reliable, connected logistics and supply chain solutions across global markets.",
  keywords: "about Saudex Global, logistics company, supply chain partner",
  canonical: `${BASE_URL}/about-us/`,
  ogImage: OG,
};

export const careersMeta: PageMeta = {
  title: "Careers | SAUDEX GLOBAL",
  description:
    "Explore career opportunities at Saudex Global and help build smarter, more reliable logistics and supply chain solutions.",
  keywords: "Saudex Global careers, logistics jobs, supply chain careers",
  canonical: `${BASE_URL}/careers/`,
  ogImage: OG,
};

export const teamMeta: PageMeta = {
  title: "Our Team | SAUDEX GLOBAL",
  description:
    "Meet the logistics experts behind SAUDEX GLOBAL's freight forwarding, customs, and supply chain solutions across Singapore, the GCC, and Asia-Pacific.",
  keywords: "Saudex Global team, logistics leadership, supply chain experts",
  canonical: `${BASE_URL}/team/`,
  ogImage: OG,
};

export const caseStudiesMeta: PageMeta = {
  title: "Case Studies | SAUDEX GLOBAL",
  description:
    "Verified customer case studies are not currently published. Contact SAUDEX GLOBAL to discuss logistics services for your business.",
  keywords: "Saudex Global case studies, logistics results, customs clearance case study",
  canonical: `${BASE_URL}/case-studies/`,
  ogImage: OG,
};

export const beOurPartnerMeta: PageMeta = {
  title: "Be Our Partner | SAUDEX GLOBAL",
  description:
    "Join Saudex Global's partner network through reseller, technology, and referral opportunities built for mutual growth.",
  keywords: "Saudex Global partner, logistics partnership, supply chain partner",
  canonical: `${BASE_URL}/be-our-partner/`,
  ogImage: OG,
};

/* ════════════════════════════════════════════
   INDUSTRY PAGES
   ════════════════════════════════════════════ */

export const coldChainMeta: PageMeta = {
  
  description:
    "Temperature-controlled logistics coordination for businesses moving perishable and temperature-sensitive goods.",
  keywords:
    "cold chain logistics, temperature-controlled storage, refrigerated transport, HACCP cold storage, frozen goods distribution, pharmaceutical cold chain",
  canonical: `${BASE_URL}/industries/cold-chain/`,
  ogImage:   OG,
};

export const agriCommoditiesMeta: PageMeta = {
  title: "Agri-Commodities & Palm Oil Logistics",
  description:
    "Logistics coordination for palm oil and agricultural commodities, including shipment planning and transport support.",
  keywords:
    "palm oil supply, agri-commodities logistics, bulk edible oil transport, heated tanker delivery, RSPO certified palm oil, ISO tank and flexitank transport, sustainable palm oil sourcing",
  canonical: `${BASE_URL}/industries/agriculture/`,
  ogImage: OG,
};
export const horecaMeta: PageMeta = {
  
  description:
    "Supply chain and delivery coordination for hotels, restaurants, and catering operations.",
  keywords:
    "horeca supplier, hotel food supply, restaurant logistics, catering distribution, hospitality supply chain, food service delivery",
  canonical: `${BASE_URL}/industries/horeca/`,
  ogImage:   OG,
};

export const ecommerceMeta: PageMeta = {
  
  description:
    "Logistics and fulfilment coordination for e-commerce businesses, from shipment planning through delivery.",
  keywords:
    "ecommerce fulfilment, 3PL fulfilment, last-mile delivery, returns logistics, same-day dispatch, Shopify logistics partner",
  canonical: `${BASE_URL}/industries/e-commerce/`,
  ogImage:   OG,
};

export const fmcgMeta: PageMeta = {
  title: "FMCG Distribution & Retail Logistics | SAUDEX GLOBAL",
  description:
    "Distribution and logistics coordination for fast-moving consumer goods and retail businesses.",
  keywords:
    "FMCG distribution, fast-moving consumer goods logistics, demand planning, trade activation logistics, retail distribution, general trade supply",
  canonical: `${BASE_URL}/industries/fmcg-industry/`,
  ogImage:   OG,
};

export const foodBeveragesMeta: PageMeta = {
  description:
    "Logistics coordination for food and beverage businesses, including shipment and temperature-sensitive cargo planning.",
  keywords:
    "food and beverage logistics, temperature-sensitive cargo, food distribution, shipment planning",
  canonical: `${BASE_URL}/industries/food-beverages/`,
  ogImage:   OG,
};

export const retailWholesaleMeta: PageMeta = {
  description:
    "Logistics and delivery coordination for retail and wholesale businesses.",
  keywords:
    "retail distribution, wholesale logistics, shelf-ready packaging, omnichannel fulfilment, store replenishment, wholesale supply chain",
  canonical: `${BASE_URL}/industries/retail/`,
  ogImage:   OG,
};

/* ════════════════════════════════════════════
   SERVICE PAGES
   (add or rename to match your actual services)
   ════════════════════════════════════════════ */

export const distributionLogisticsMeta: PageMeta = {
  title: "Transportation Services & Last Mile Delivery | SAUDEX GLOBAL",
  description:
    "Transportation services by SAUDEX GLOBAL for reliable distribution, last mile delivery, scheduled routes and regional logistics support.",
  keywords:
    "transportation services, last mile delivery, distribution services, distribution management, regional distribution, integrated transportation",
  canonical: "https://saudexglobal.com/services/distribution/",
  ogImage:   OG,
};

export const temperatureControlledLogisticsMeta: PageMeta = {
  description:
    "Temperature-controlled logistics coordination for businesses shipping goods that require specific handling.",
  keywords:
    "temperature controlled logistics, cold chain transport, frozen logistics, chilled distribution, pharmaceutical cold chain, IoT temperature monitoring",
  canonical: `${BASE_URL}/services/temperature-controlled`,
  ogImage:   OG,
};

export const customsLogisticsMeta: PageMeta = {
  description:
    "Customs clearance coordination, HS code classification support, and trade documentation for cross-border shipments.",
  keywords:
    "customs clearance, customs brokerage, HS code classification, duty optimisation, import compliance, border clearance services, trade compliance",
  canonical: `${BASE_URL}/services/customs/`,
  ogImage:   OG,
};

export const fmcgLogisticsMeta: PageMeta = {
  description:
    "Logistics and distribution coordination for grocery, health, and fast-moving consumer goods businesses.",
  keywords:
    "FMCG logistics, fast-moving consumer goods supply chain, FMCG distribution, grocery logistics, short shelf-life logistics, FMCG 3PL",
  canonical: `${BASE_URL}/services/fmcg/`,
  ogImage:   OG,
};

export const freightForwardingMeta: PageMeta = {
  title: "Freight Forwarding & Global Shipping Services | SAUDEX GLOBAL",
  description:
    "Freight forwarding coordination from SAUDEX GLOBAL for air, sea, and land cargo.",
  keywords:
    "freight forwarding, freight forwarding services, international freight forwarding, freight forwarder, air freight, sea freight, land freight, cargo forwarding",
  canonical: "https://saudexglobal.com/services/freight/",
  ogImage:   OG,
};

export const importExportLogisticsMeta: PageMeta = {
  title: "Import and Export Services & Logistics Experts | SAUDEX GLOBAL",
  description:
    "Import and export services by SAUDEX GLOBAL, covering documentation, customs compliance, cargo preparation and shipment coordination.",
  keywords:
    "import and export, import and export services, international import export services, import export logistics, customs clearance, trade documentation",
  canonical: `${BASE_URL}/services/import-export/`,
  ogImage:   OG,
};

export const supplyChainLogisticsMeta: PageMeta = {
  title: "Supply Chain Logistics & Consulting Services | SAUDEX GLOBAL",
  description:
    "Supply chain logistics by SAUDEX GLOBAL to reduce costs, remove bottlenecks and improve operations through strategic consulting.",
  keywords:
    "supply chain logistics, supply chain consulting, supply chain optimization, supply chain management, inventory planning, logistics consulting",
  canonical: "https://saudexglobal.com/services/supply-chain/",
  ogImage:   OG,
};

export const warehousingLogisticsMeta: PageMeta = {
  title: "Warehousing Services & Inventory Solutions | SAUDEX GLOBAL",
  description:
    "Warehousing and inventory coordination services for businesses managing goods and supply chains.",
  keywords:
    "warehousing services, contract warehousing, inventory management services, warehouse storage services, secure warehousing, dedicated warehousing, flexible storage",
  canonical: "https://saudexglobal.com/services/warehousing/",
  ogImage:   OG,
};

/* sitemap */
export const sitemapMeta: PageMeta = {
  description:
    "Browse all pages on the Saudex Global website — services, industries, resources, and contact information.",
  keywords:
    "Saudex Global sitemap, site index, all pages",
  canonical: `${BASE_URL}/sitemap`,
  ogImage:   OG,
};

/*privacy policy and terms of service*/
export const privacyPolicyMeta: PageMeta = {
  title: "Privacy Policy | SAUDEX GLOBAL",
  description:
    "Read the Saudex Global Privacy Policy and learn how we collect, use, share, and protect personal information.",
  keywords:
    "Saudex Global privacy policy, data protection, GDPR, personal data",
  canonical: `${BASE_URL}/privacy-policy/`,
  ogImage:   OG,
};

export const termsMeta: PageMeta = {
  description:
    "Review the terms and conditions governing use of Saudex Global's website and logistics services.",
  keywords:
    "Saudex Global terms and conditions, logistics terms, service agreement",
  canonical: `${BASE_URL}/terms-of-service/`,
  ogImage:   OG,
};

export const servicesIndexMeta: PageMeta = {
  title: "Logistics Services | SAUDEX GLOBAL",
  description:
    "Explore freight forwarding, import and export, distribution, customs clearance, warehousing, and supply chain services from Saudex Global.",
  keywords:
    "logistics services, freight forwarding, customs clearance, warehousing, supply chain services, Saudex Global",
  canonical: `${BASE_URL}/services/`,
  ogImage: OG,
};

export const termsOfServiceMeta: PageMeta = {
  title: "Terms of Service | SAUDEX GLOBAL",
  description:
    "Review the terms governing access to and use of Saudex Global logistics, freight forwarding, customs, warehousing, and delivery services.",
  keywords: "Saudex Global terms of service, logistics terms, freight forwarding terms",
  canonical: `${BASE_URL}/terms-of-service/`,
  ogImage: OG,
};