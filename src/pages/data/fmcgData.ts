import type { IndustryPageData } from "../IndustryPage";

export const fmcgData: IndustryPageData = {
  industry: "FMCG",
  heroEyebrow: "Industry Solutions",
  heroHeading: "Volume.\nVelocity.\nVisibility.",
  heroBody:
    "Fast moving consumer goods live and die by shelf availability. We move product from manufacturer to distributor to retailer at the velocity the category demands, with the data visibility brand managers need to act before a gap appears.",
  heroImage: "/images/in32.webp",
  heroImageAlt: "FMCG warehouse with high-bay racking and fast-moving pallet conveyor",
  heroStats: [
    { value: "99.1%", label: "Order fill rate" },
    { value: "24hr", label: "Distributor replenishment cycle" },
    { value: "600+", label: "FMCG brands distributed" },
  ],
  sections: [
    {
      index: 1,
      tag: "Distribution",
      heading: "National Coverage, Route Precision",
      body:
        "Our FMCG distribution network covers modern trade, general trade, and emerging channels through a tiered hub and spoke model. Route optimisation engines recalculate daily based on order density, ensuring every drop point is served at the lowest cost per case.",
      image: "/images/s20.webp",
      imageAlt: "Fleet of FMCG delivery trucks leaving a distribution centre at dawn",
      stats: [
        { value: "2,400+", label: "Active drop points" },
        { value: "97.3%", label: "Perfect order rate" },
      ],
      callout:
        "A gap on the shelf is lost revenue that can never be recovered.",
    },
    {
      index: 2,
      tag: "Demand Planning",
      heading: "Forecast Before the Gap Opens",
      body:
        "Our demand sensing layer ingests POS data, promotion calendars, and seasonality patterns to generate rolling 13 week forecasts. Replenishment orders trigger automatically, keeping safety stock lean without risking an out of stock.",
      image: "/images/s23.webp",
      imageAlt: "Data dashboard showing FMCG demand forecast and inventory health scores",
      stats: [
        { value: "91%", label: "Forecast accuracy at SKU level" },
        { value: "−18%", label: "Average inventory reduction" },
      ],
      callout:
        "Demand planning is the closest thing to a crystal ball that actually works.",
    },
    {
      index: 3,
      tag: "Trade Activation",
      heading: "Promotion Execution Without the Leakage",
      body:
        "Promotional stock mis-allocation costs FMCG brands millions every year. Our trade activation logistics ring fence promotional inventory, sequence release by channel, and audit compliance at the point of sale.",
      image: "/images/s41.webp",
      imageAlt: "Supermarket shelf with correctly executed FMCG promotional display",
      stats: [
        { value: "96%", label: "Promo compliance rate" },
        { value: "−22%", label: "Promotional waste reduction" },
      ],
    },
  ],
  challenges: [
    {
      title: "Out of Stock at Peak",
      body: "Promotions and seasonal spikes drain safety stock. Our demand sensing layer pre builds stock ahead of known triggers so shelves stay full when traffic is highest.",
    },
    {
      title: "Distributor Performance Variance",
      body: "Not all distributors execute equally. Our distributor scorecard system tracks fill rate, returns, and compliance by territory, and flags underperformers before brand equity suffers.",
    },
    {
      title: "Short Shelf Life Management",
      body: "FEFO (First Expired, First Out) is non-negotiable in FMCG. Our WMS enforces FEFO at pick level, reducing expiry write offs across the supply chain.",
    },
    {
      title: "Modern vs. General Trade Split",
      body: "Modern trade wants EDI and just in time. General trade wants daily drops and credit. We operate both channels from the same distribution spine without compromising either.",
    },
    {
      title: "Counterfeit and Grey Market",
      body: "Unauthorised product entering the chain damages brand and margin. Our serialisation and territory lock protocols make diversion visible and stoppable.",
    },
    {
      title: "Returns and Damage Claims",
      body: "Retail returns from FMCG buyers carry complex credit note workflows. Our reverse logistics desk processes claims within 48 hours and feeds quality data back to the plant.",
    },
  ],
faqs: [
    {
      q: "Can you support distribution across major markets in the Middle East and Southeast Asia?",
      a: "Yes. Our network spans key commercial hubs across Saudi Arabia, the UAE, Malaysia, Singapore, China, and beyond covering metro cities, emerging trade corridors, and last mile touchpoints in high growth markets. We manage both primary and secondary distribution, giving you end to end coverage across borders under one logistics partner.",
    },
    {
      q: "How do you manage SKU level accuracy across large FMCG shipments?",
      a: "Our warehouse operations across the region use barcode and RFID scanning at every stage, inbound, pick and pack, and dispatch. SKU level reports are generated per shipment and per market, giving your regional sales and supply chain teams accurate data to reconcile against orders.",
    },
    {
      q: "What's your approach to reducing transit damages for FMCG goods?",
      a: "We use product specific packing guidelines, damage rated transit packaging, and load optimization software across all our regional lanes. Damage claims are tracked per corridor, whether it's Riyadh to Jeddah or Kuala Lumpur to Singapore, and high risk routes are reviewed monthly.",
    },
  ],
};
