// src/data/seoMeta.ts
// Central source of truth for all page meta tags.
// Import the specific object you need into each page.

export interface PageMeta {
  description: string;
  keywords: string;
  canonical: string;
  ogImage: string;
}

const BASE_URL = "https://www.saudexglobal.com";   // ← change this
const OG       = `${BASE_URL}/og`;             // folder where your OG images live

/* Home Page */
export const homeMeta: PageMeta = {
  description:
    "Saudex Global delivers integrated logistics, cold chain, freight forwarding,customs clearance, and warehousing solutions across global trade lanes.Your supply chain, simplified.",
  keywords:
    "Saudex Global, logistics company, supply chain solutions, freight forwarding,cold chain logistics, customs clearance, global logistics provider",
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
  canonical: `${BASE_URL}/contact`,
  ogImage:   `${OG}/contact.jpg`,
};

/* industry */
export const industriesMeta: PageMeta = {
  
  description:
    "Saudex Global delivers specialist logistics across retail, FMCG, pharma, food & beverage, e-commerce, and HORECA. Tailored supply chain solutions built around the demands of your industry.",
  keywords:
    "logistics by industry, retail logistics, pharma supply chain,FMCG logistics, food logistics, ecommerce fulfilment, HORECA logistics",
  canonical: `${BASE_URL}/industries`,
  ogImage:   `${OG}/industries.jpg`,
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
  description:
    "End-to-end distribution network management — multi-node dispatch, cross-docking, and regional hub coordination with real-time visibility and 99.3% on-time delivery across retail and B2B channels.",
  keywords:
    "distribution logistics, multi-node distribution, cross-docking, hub and spoke logistics, B2B distribution, retail distribution network",
  canonical: `${BASE_URL}/services/distribution`,
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
  description:
    "Sea, air, and road freight forwarding across global trade lanes.Full-container, LCL, and air cargo options with consolidated booking, documentation support, and real-time shipment tracking.",
  keywords:
    "freight forwarding, international freight, FCL shipping, LCL freight,air cargo forwarding, sea freight, cargo consolidation",
  canonical: `${BASE_URL}/services/freight-forwarding`,
  ogImage:   `${OG}/freight-forwarding.jpg`,
};

export const importExportLogisticsMeta: PageMeta = {
  description:
    "Seamless import and export logistics — coordinating freight, customs, documentation, and last-mile delivery across 40+ countries.Reduce lead times and ensure regulatory compliance on every shipment.",
  keywords:
    "import export logistics, international trade logistics, export freight,import services, cross-border logistics, trade documentation",
  canonical: `${BASE_URL}/services/import-export`,
  ogImage:   `${OG}/import-export.jpg`,
};

export const supplyChainLogisticsMeta: PageMeta = {
  description:
    "End-to-end supply chain management: procurement coordination, inventory positioning, multi-echelon distribution, and supplier integration.AI-assisted visibility tools reduce lead times and cut carrying costs by up to 18%.",
  keywords:
    "supply chain logistics, supply chain management, end-to-end logistics,inventory optimisation, procurement logistics, supply chain visibility",
  canonical: `${BASE_URL}/services/supply-chain`,
  ogImage:   `${OG}/supply-chain.jpg`,
};

export const warehousingLogisticsMeta: PageMeta = {
  description:
    "Flexible warehousing across multi-temp zones — frozen, chilled, and ambient.HACCP-certified, IoT-monitored, and scalable from pallet to full-facility.",
  keywords:
    "warehousing solutions, 3PL warehousing, cold storage facility, ambient warehouse,temperature-controlled storage, shared warehousing",
  canonical: `${BASE_URL}/services/warehousing`,
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
  description:
    "Read Saudex Global's privacy policy — how we collect, use, and protect your personal data in line with applicable data protection regulations.",
  keywords:
    "Saudex Global privacy policy, data protection, GDPR, personal data",
  canonical: `${BASE_URL}/privacy-policy`,
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