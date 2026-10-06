import type { IndustryPageData } from "../IndustryPage";

export const foodBeveragesData: IndustryPageData = {
  industry: "Food & Beverages",
  heroEyebrow: "Industry Solutions",
  heroHeading: "Safe. Fresh.\nOn Time,\nEvery Time.",
  heroBody:
    "Food and beverage shipments can require specific handling and documentation. Contact our team to discuss the needs of your products and route.",
  heroImage: "/images/i1.webp",
  heroImageAlt: "Modern food production facility with workers in hygiene suits on a conveyor line",
  heroStats: [
    { value: "FSSC 22000", label: "Food safety certification" },
    { value: "0", label: "Major compliance failures (5 yrs)" },
    { value: "850+", label: "F&B clients across 12 markets" },
  ],
  sections: [
    {
      index: 1,
      tag: "Food Safety",
      heading: "Food Handling Requirements",
      body:
        "Food and beverage shipments may have handling and documentation requirements that vary by product and destination. Confirm the requirements for your shipment with our team.",
      image: "/images/in22.webp",
      imageAlt: "Food safety inspection at a production facility with digital checklist",
      stats: [
        { value: "100%", label: "HACCP-certified facilities" },
        { value: "4hrs", label: "Audit trail retrieval SLA" },
      ],
      callout:
        "Food safety is not a checklist. It is a culture we build into every process.",
    },
    {
      index: 2,
      tag: "Cold & Ambient",
      heading: "Multi Temp Logistics \n Under One Roof",
      body:
        "Frozen, chilled, and ambient goods may need different storage and transport arrangements. Contact our team to discuss available options for your products.",
      image: "/images/s21.webp",
      imageAlt: "Multi temperature warehouse with clearly separated frozen, chilled, and ambient zones",
      stats: [
        { value: "3", label: "Temperature zones per facility" },
        { value: "99.7%", label: "Temp compliance across all zones" },
      ],
      callout:
        "One supplier, three temperature zones, zero contamination risk.",
    },
    {
      index: 3,
      tag: "Traceability",
      heading: "Batch Recalls in Hours, Not Days",
      body:
        "Product and batch information can be included in shipment documentation where supported by the service provider. Discuss traceability and records requirements with our team.",
      image: "/images/s52.webp",
      imageAlt: "Traceability dashboard showing batch recall scope and retrieval status",
      stats: [
        { value: "2hrs", label: "Full recall scope identification" },
        { value: "100%", label: "Batch-level traceability" },
      ],
    },
  ],
  challenges: [
    {
      title: "Regulatory Complexity by Market",
      body: "Food labelling, allergen declaration, and import standards vary by country. Our compliance team maintains a live regulatory matrix across all 12 markets we operate in.",
    },
    {
      title: "Short Shelf Life Execution",
      body: "FEFO enforcement at the pick face is the single biggest lever in reducing food waste. Our WMS enforces it automatically, no picker discretion, no expired product on the shelf.",
    },
    {
      title: "Allergen Cross-Contamination",
      body: "Allergen incidents carry severe consequences. Our facilities operate strict allergen segregation protocols, with dedicated handling lines for the 14 major allergens.",
    },
    {
      title: "Seasonal Volume Swings",
      body: "Ramadan, Eid, Christmas, and summer peaks can triple throughput in a week. Our elastic warehouse capacity absorbs the swing without compromising throughput speed.",
    },
    {
      title: "Brand Integrity in Transit",
      body: "Packaging damage during transit affects consumer perception before the product is even opened. Our specialist packaging specs and load plans cut transit damage claims by 41%.",
    },
    {
      title: "Supplier Consolidation",
      body: "Multiple raw material suppliers create complexity and risk. Our inbound consolidation service receives, inspects, and stores from multiple origins as a single managed flow into your production line.",
    },
  ],
faqs: [
    {
      q: "Are your vehicles and facilities compliant with food safety regulations?",
      a: "Requirements depend on the product, route, and service provider. Contact our team to discuss the documentation and handling requirements for your shipment.",
    },
    {
      q: "How do you handle perishable items with short shelf lives?",
      a: "We prioritize FEFO (First Expired, First Out) dispatch protocols for all food and beverage inventory. Deliveries are scheduled to minimize time in transit, and our routing engine ensures the fastest available path — so your products reach shelves with maximum remaining shelf life.",
    },
    {
      q: "Can you manage both retail delivery and B2B distribution for our food brand?",
      a: "Yes. We handle B2B bulk deliveries to distributors, hotels, and institutional buyers alongside retail replenishment to supermarkets and modern trade outlets. Both channels are managed through a single account with separate tracking and reporting per trade type.",
    },
  ],
};
