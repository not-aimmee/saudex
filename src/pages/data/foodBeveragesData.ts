import type { IndustryPageData } from "../IndustryPage";

export const foodBeveragesData: IndustryPageData = {
  industry: "Food & Beverages",
  heroEyebrow: "Industry Solutions",
  heroHeading: "Safe. Fresh.\nOn Time,\nEvery Time.",
  heroBody:
    "Food and beverage logistics carry a weight no other category does — they carry public health. We operate to the strictest food safety standards, linking production lines to consumption points with unbroken quality control at every node.",
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
      heading: "HACCP from Line to Last Mile",
      body:
        "Every facility in our network operates a full HACCP plan. Critical control points are monitored digitally, corrective actions are logged in real time, and audit trails are available to regulators within 4 hours of any inspection request.",
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
        "Frozen goods, chilled produce, and ambient dry goods each require distinct environments, but your operation shouldn't need three separate suppliers to manage them. Our multi temp facilities handle the full product range with clean separation and zero cross contamination risk.",
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
        "When a food safety incident occurs, speed of recall is the difference between a manageable event and a brand crisis. Our batch traceability system identifies every affected unit in the supply chain within 3 hours of a recall trigger and initiates retrieval automatically.",
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
      a: "Yes. Our fleet and storage facilities are compliant with FSSAI food transport guidelines. Vehicles are sanitized on a regular schedule, and our cold storage units are audited for hygiene and temperature standards. We can share compliance certificates on request.",
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
