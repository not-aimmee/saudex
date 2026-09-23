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
const OG       = `${BASE_URL}/og`;             // folder where your OG images live

/* Home Page */
export const homeMeta: PageMeta = {
  description:
    "Discover global logistics solutions from SAUDEX GLOBAL, combining reliable freight, supply chain expertise and international operations.",
  keywords:
    "global logistics solutions, SAUDEX GLOBAL, freight forwarding, supply chain solutions, import export logistics, international logistics",
  canonical: `${BASE_URL}/`,
  ogImage:   `${OG}/home.jpg`,
};

export const defaultSiteMeta: PageMeta = {
  description:
    "Saudex Global is a full-service logistics and supply chain partner — offering freight forwarding, cold chain, warehousing, customs clearance, and distribution across 40+ global markets.",
  keywords:
    "Saudex Global, logistics company, supply chain, freight forwarding,cold chain, warehousing, customs clearance, 3PL provider",
  canonical: `${BASE_URL}/`,
  ogImage:   `${OG}/og-default.jpg`,
};


/* services */
export const servicesMeta: PageMeta = {
  description:
    "From temperature-controlled transport and customs brokerage to warehousing,FMCG distribution, and freight forwarding — explore the full range of logistics services Saudex Global delivers across 40+ markets.",
  keywords:
    "logistics services, supply chain services, cold chain, warehousing,freight forwarding, customs brokerage, FMCG logistics, Saudex Global services",
  canonical: `${BASE_URL}/services`,
  ogImage:   `${OG}/services.jpg`,
};

export const howWeWorkMeta: PageMeta = {
  description:
    "A transparent, step-by-step process built around your supply chain.From onboarding and route planning to real-time tracking and continuous optimisation — here's how Saudex Global delivers, every time.",
  keywords:
    "how Saudex works, logistics process, supply chain onboarding,logistics workflow, freight process, Saudex Global approach",
  canonical: `${BASE_URL}/how-we-work`,
  ogImage:   `${OG}/how-we-work.jpg`,
};

export const statsMeta: PageMeta = {
  description:"99.1% on-time delivery, 40+ markets served, and 91% SKU-level forecast accuracy. See the numbers behind Saudex Global's logistics performance and why our clients trust us with their most critical supply chains.",
  keywords:
    "Saudex Global stats, logistics performance, on-time delivery rate,supply chain metrics, 3PL track record, logistics KPIs",
  canonical: `${BASE_URL}/stats`,
  ogImage:   `${OG}/stats.jpg`,
};

export const whyChooseUsMeta: PageMeta = {
  
  description:
    "HACCP-certified facilities, IoT-monitored cold chain, licensed customs brokers,and AI-assisted demand planning. Discover what sets Saudex Global apart as a trusted 3PL partner across retail, FMCG, pharma, and more.",
  keywords:
    "why choose Saudex Global, 3PL advantages, logistics partner,HACCP certified logistics, IoT supply chain, trusted freight partner",
  canonical: `${BASE_URL}/why-choose-us`,
  ogImage:   `${OG}/why-choose-us.jpg`,
};

export const ctaMeta: PageMeta = {
  
  description:
    "Ready to streamline your supply chain? Get in touch with Saudex Global for a tailored logistics quote — covering freight, warehousing, customs,cold chain, and end-to-end supply chain management.",
  keywords:
    "logistics quote, get a freight quote, supply chain consultation,Saudex Global contact, 3PL quote, logistics enquiry",
  canonical: `${BASE_URL}/get-a-quote`,
  ogImage:   `${OG}/cta.jpg`,
};

export const contactMeta: PageMeta = {
  
  description:
    "Get in touch with the Saudex Global team for logistics enquiries,partnership opportunities, or supply chain consultations.We're here to help you move smarter.",
  keywords:
    "contact Saudex Global, logistics enquiry, freight contact,supply chain consultation, Saudex Global office, logistics partnership",
  canonical: `${BASE_URL}/contact/`,
  ogImage:   `${OG}/contact.jpg`,
};

/* industry */
export const industriesMeta: PageMeta = {
  
  description:
    "Saudex Global delivers specialist logistics across retail, FMCG, pharma, food & beverage, e-commerce, and HORECA. Tailored supply chain solutions built around the demands of your industry.",
  keywords:
    "logistics by industry, retail logistics, pharma supply chain,FMCG logistics, food logistics, ecommerce fulfilment, HORECA logistics",
  canonical: `${BASE_URL}/industries/`,
  ogImage:   `${OG}/industries.jpg`,
};

export const aboutUsMeta: PageMeta = {
  title: "About Us | SAUDEX GLOBAL",
  description:
    "Learn about Saudex Global and our approach to reliable, connected logistics and supply chain solutions across global markets.",
  keywords: "about Saudex Global, logistics company, supply chain partner",
  canonical: `${BASE_URL}/aboutUs/`,
  ogImage: `${OG}/og-default.jpg`,
};

export const careersMeta: PageMeta = {
  title: "Careers | SAUDEX GLOBAL",
  description:
    "Explore career opportunities at Saudex Global and help build smarter, more reliable logistics and supply chain solutions.",
  keywords: "Saudex Global careers, logistics jobs, supply chain careers",
  canonical: `${BASE_URL}/careers/`,
  ogImage: `${OG}/og-default.jpg`,
};

export const beOurPartnerMeta: PageMeta = {
  title: "Be Our Partner | SAUDEX GLOBAL",
  description:
    "Join Saudex Global's partner network through reseller, technology, and referral opportunities built for mutual growth.",
  keywords: "Saudex Global partner, logistics partnership, supply chain partner",
  canonical: `${BASE_URL}/BeOurPartner/`,
  ogImage: `${OG}/og-default.jpg`,
};

/* ════════════════════════════════════════════
   INDUSTRY PAGES
   ════════════════════════════════════════════ */

export const coldChainMeta: PageMeta = {
  
  description:
    "End-to-end cold chain logistics with 99.6% temperature compliance. HACCP-certified facilities, real-time IoT monitoring, and last-mile cold delivery across the region.",
  keywords:
    "cold chain logistics, temperature-controlled storage, refrigerated transport, HACCP cold storage, frozen goods distribution, pharmaceutical cold chain",
  canonical: `${BASE_URL}/industries/cold-chain`,
  ogImage:   `${OG}/cold-chain.jpg`,
};

export const agriCommoditiesMeta: PageMeta = {
  title: "Agri-Commodities & Palm Oil Logistics",
  description:
    "Bulk supply and transport of palm oil and agri-commodities with 99.2% quality specification compliance. Heated tankers, batch-level traceability, and RSPO and ISCC certified sourcing.",
  keywords:
    "palm oil supply, agri-commodities logistics, bulk edible oil transport, heated tanker delivery, RSPO certified palm oil, ISO tank and flexitank transport, sustainable palm oil sourcing",
  canonical: `${BASE_URL}/industries/agri-commodities`,
  ogImage: `${OG}/agri-commodities.jpg`,
};
export const horecaMeta: PageMeta = {
  
  description:
    "Reliable supply chain solutions for hotels, restaurants, and catering operations. Pre-dawn delivery, 4,000+ SKUs, and unified sourcing from a single supplier.",
  keywords:
    "horeca supplier, hotel food supply, restaurant logistics, catering distribution, hospitality supply chain, food service delivery",
  canonical: `${BASE_URL}/industries/horeca`,
  ogImage:   `${OG}/horeca.jpg`,
};

export const ecommerceMeta: PageMeta = {
  
  description:
    "Same-day pick-and-pack fulfilment, 96.7% first-attempt delivery, and frictionless returns. Built for Shopify, WooCommerce, Magento, and custom platforms.",
  keywords:
    "ecommerce fulfilment, 3PL fulfilment, last-mile delivery, returns logistics, same-day dispatch, Shopify logistics partner",
  canonical: `${BASE_URL}/industries/e-commerce`,
  ogImage:   `${OG}/ecommerce.jpg`,
};

export const fmcgMeta: PageMeta = {
  
  description:
    "National FMCG distribution with 99.1% order fill rate. Demand planning, promotional logistics, and route-optimised delivery to modern and general trade.",
  keywords:
    "FMCG distribution, fast-moving consumer goods logistics, demand planning, trade activation logistics, retail distribution, general trade supply",
  canonical: `${BASE_URL}/industries/fmcg`,
  ogImage:   `${OG}/fmcg.jpg`,
};

export const foodBeveragesMeta: PageMeta = {
  description:
    "FSSC 22000-certified food and beverage logistics. Multi-temperature storage, full batch traceability, 2-hour recall capability, and zero major compliance failures in 5 years.",
  keywords:
    "food and beverage logistics, food safety supply chain, FSSC 22000 logistics, cold and ambient storage, HACCP food distribution, batch traceability",
  canonical: `${BASE_URL}/industries/food-and-beverages`,
  ogImage:   `${OG}/food-beverages.jpg`,
};

export const retailWholesaleMeta: PageMeta = {
  description:
    "Shelf-ready retail delivery and same-day wholesale break-bulk. 98.5% in-full delivery rate, omnichannel inventory management, and import duty optimisation.",
  keywords:
    "retail distribution, wholesale logistics, shelf-ready packaging, omnichannel fulfilment, store replenishment, wholesale supply chain",
  canonical: `${BASE_URL}/industries/retail-and-wholesale`,
  ogImage:   `${OG}/retail-wholesale.jpg`,
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
  canonical: "https://saudexglobal.com/services/distribution",
  ogImage:   `${OG}/distribution.jpg`,
};

export const temperatureControlledLogisticsMeta: PageMeta = {
  description:
    "Cold chain logistics across frozen (−25 °C), chilled (2–8 °C), and ambient lanes. IoT-monitored throughout transit with automated breach alerts and full HACCP compliance from pick-up to proof of delivery.",
  keywords:
    "temperature controlled logistics, cold chain transport, frozen logistics, chilled distribution, pharmaceutical cold chain, IoT temperature monitoring",
  canonical: `${BASE_URL}/services/temperature-controlled`,
  ogImage:   `${OG}/temperature-controlled.jpg`,
};

export const customsLogisticsMeta: PageMeta = {
  description:
    "Expert customs clearance, HS code classification, and duty optimisation across 40+ markets. Reduce border delays, ensure compliance, and navigate import controls with precision from a team of licensed brokers.",
  keywords:
    "customs clearance, customs brokerage, HS code classification, duty optimisation, import compliance, border clearance services, trade compliance",
  canonical: `${BASE_URL}/services/customs`,
  ogImage:   `${OG}/customs.jpg`,
};

export const fmcgLogisticsMeta: PageMeta = {
  description:
    "High-velocity logistics built for FMCG: fast-turn replenishment,promotional surge handling, and short shelf-life management. Integrated 3PL and distribution tailored to grocery, health, and FMCG brands.",
  keywords:
    "FMCG logistics, fast-moving consumer goods supply chain, FMCG distribution, grocery logistics, short shelf-life logistics, FMCG 3PL",
  canonical: `${BASE_URL}/services/fmcg`,
  ogImage:   `${OG}/fmcg.jpg`,
};

export const freightForwardingMeta: PageMeta = {
  title: "Freight Forwarding & Global Shipping Services | SAUDEX GLOBAL",
  description:
    "Freight forwarding solutions from SAUDEX GLOBAL covering air, sea and land cargo with reliable coordination, tracking and compliance.",
  keywords:
    "freight forwarding, freight forwarding services, international freight forwarding, freight forwarder, air freight, sea freight, land freight, cargo forwarding",
  canonical: "https://saudexglobal.com/services/freight",
  ogImage:   `${OG}/freight-forwarding.jpg`,
};

export const importExportLogisticsMeta: PageMeta = {
  title: "Import and Export Services & Logistics Experts | SAUDEX GLOBAL",
  description:
    "Import and export services by SAUDEX GLOBAL, covering documentation, customs compliance, cargo preparation and shipment coordination.",
  keywords:
    "import and export, import and export services, international import export services, import export logistics, customs clearance, trade documentation",
  canonical: "https://saudexglobal.com/services/impo-expo",
  ogImage:   `${OG}/import-export.jpg`,
};

export const supplyChainLogisticsMeta: PageMeta = {
  title: "Supply Chain Logistics & Consulting Services | SAUDEX GLOBAL",
  description:
    "Supply chain logistics by SAUDEX GLOBAL to reduce costs, remove bottlenecks and improve operations through strategic consulting.",
  keywords:
    "supply chain logistics, supply chain consulting, supply chain optimization, supply chain management, inventory planning, logistics consulting",
  canonical: "https://saudexglobal.com/services/Supply_chain",
  ogImage:   `${OG}/supply-chain.jpg`,
};

export const warehousingLogisticsMeta: PageMeta = {
  title: "Warehousing Services & Inventory Solutions | SAUDEX GLOBAL",
  description:
    "Warehousing services by SAUDEX GLOBAL with flexible storage, inventory management, real-time stock reporting and secure facilities.",
  keywords:
    "warehousing services, contract warehousing, inventory management services, warehouse storage services, secure warehousing, dedicated warehousing, flexible storage",
  canonical: "https://saudexglobal.com/services/warehousing",
  ogImage:   `${OG}/warehousing.jpg`,
};

/* sitemap */
export const sitemapMeta: PageMeta = {
  description:
    "Browse all pages on the Saudex Global website — services, industries, resources, and contact information.",
  keywords:
    "Saudex Global sitemap, site index, all pages",
  canonical: `${BASE_URL}/sitemap`,
  ogImage:   `${OG}/og-default.jpg`,
};

/*privacy policy and terms of service*/
export const privacyPolicyMeta: PageMeta = {
  title: "Privacy Policy | SAUDEX GLOBAL",
  description:
    "Read the Saudex Global Privacy Policy and learn how we collect, use, share, and protect personal information.",
  keywords:
    "Saudex Global privacy policy, data protection, GDPR, personal data",
  canonical: `${BASE_URL}/privacy_policy/`,
  ogImage:   `${OG}/og-default.jpg`,
};

export const termsMeta: PageMeta = {
  description:
    "Review the terms and conditions governing use of Saudex Global's website and logistics services.",
  keywords:
    "Saudex Global terms and conditions, logistics terms, service agreement",
  canonical: `${BASE_URL}/terms`,
  ogImage:   `${OG}/og-default.jpg`,
};

export const servicesIndexMeta: PageMeta = {
  title: "Logistics Services | SAUDEX GLOBAL",
  description:
    "Explore freight forwarding, import and export, distribution, customs clearance, warehousing, and supply chain services from Saudex Global.",
  keywords:
    "logistics services, freight forwarding, customs clearance, warehousing, supply chain services, Saudex Global",
  canonical: `${BASE_URL}/services/`,
  ogImage: `${OG}/services.jpg`,
};

export const termsOfServiceMeta: PageMeta = {
  title: "Terms of Service | SAUDEX GLOBAL",
  description:
    "Review the terms governing access to and use of Saudex Global logistics, freight forwarding, customs, warehousing, and delivery services.",
  keywords: "Saudex Global terms of service, logistics terms, freight forwarding terms",
  canonical: `${BASE_URL}/terms_of_service/`,
  ogImage: `${OG}/og-default.jpg`,
};