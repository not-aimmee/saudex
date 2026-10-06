import type { IndustryPageData } from "../IndustryPage";

export const ecommerceData: IndustryPageData = {
  industry: "E-Commerce",
  heroEyebrow: "Industry Solutions",
  heroHeading: "Fulfilment\nAt the\nSpeed of Click.",
  heroBody:
    "E-commerce businesses need coordinated warehousing, pick and pack, and delivery support. We help connect these logistics steps to the needs of your operation.",
  heroImage: "/images/s33.webp",
  heroImageAlt: "Fulfilment centre with conveyor belts and workers picking orders",
  heroStats: [
    { value: "99.4%", label: "Order accuracy rate" },
    { value: "2.4hrs", label: "Average pick-to-dispatch time" },
    { value: "18M+", label: "Orders fulfilled annually" },
  ],
  sections: [
    {
      index: 1,
      tag: "Warehousing & Fulfilment",
      heading: "Pick, Pack,Dispatch —\nSame Day",
      body:
        "Fulfilment arrangements may include order handling, storage, and dispatch coordination. Contact our team to discuss your platform and operating requirements.",
      image: "/images/i6.webp",
      imageAlt: "Picker scanning shelves in an e-commerce fulfilment warehouse",
      stats: [
        { value: "3 PM", label: "Same day cutoff" },
        { value: "6", label: "Platform integrations" },
      ],
      callout:
        "Fulfilment is the product experience customers actually feel.",
    },
    {
      index: 2,
      tag: "Last Mile",
      heading: "Delivery Experience\nIs Your Brand",
      body:
        "Branded packaging and delivery coordination help support the customer experience. Service options depend on the shipment and destination.",
      image: "/images/in10.webp",
      imageAlt: "Delivery rider on a motorbike in an urban area with a branded parcel bag",
      stats: [
        { value: "96.7%", label: "First attempt delivery rate" },
        { value: "4.8★", label: "Delivery experience rating" },
      ],
      callout:
        "The unboxing moment starts the moment they get the tracking link.",
    },
    {
      index: 3,
      tag: "Returns",
      heading: "Reverse Logistics That Builds Loyalty",
      body:
        "A frictionless return converts a refund into a repurchase. Our returns portal generates prepaid labels, routes items back to the correct inspection line, and triggers restocking or disposal based on your rules, all without a support ticket.",
      image: "/images/indus.webp",
      imageAlt: "Returns sorting station with items being inspected and re-packaged",
      stats: [
        { value: "72hrs", label: "Average restock time" },
        { value: "38%", label: "Return-to-repurchase rate" },
      ],
    },
  ],
  challenges: [
    {
      title: "Peak Season Capacity Collapse",
      body: "Black Friday, Ramadan, and year end sales spike orders 4× overnight. Our elastic fulfilment model scales headcount and space dynamically, no capacity ceiling.",
    },
    {
      title: "SKU Proliferation",
      body: "Thousands of SKUs, dozens of variants, constant product launches. Our WMS handles unlimited SKU depth with intelligent slotting to keep pick paths short.",
    },
    {
      title: "Carrier Failure Fallback",
      body: "A single carrier failure strands thousands of orders. Our multi carrier routing engine automatically reroutes to an alternative the moment SLAs are at risk.",
    },
    {
      title: "Inventory Visibility",
      body: "Overselling kills trust. Real time inventory sync across every sales channel means your storefront always reflects what's actually on the shelf.",
    },
    {
      title: "Returns Fraud",
      body: "High return rates can mask fraud. Our inspection protocols flag anomalies at the returns desk and feed data back to your fraud team.",
    },
    {
      title: "International Customs Complexity",
      body: "Cross-border orders may require customs documentation and duty calculations. Contact our team to discuss the requirements for your origin and destination.",
    },
  ],
  faqs: [
    {
      q: "How quickly can you ship orders after they're placed on our platform?",
      a: "Dispatch timing depends on the agreed service, cargo readiness, and destination. Contact our team to discuss your order flow and fulfilment requirements.",
    },
    {
      q: "Do you offer a returns management solution for our customers?",
      a: "Yes. Our reverse logistics service handles customer pickups, condition inspection, and restocking or disposal based on your returns policy. You get a returns dashboard with item level visibility, so your team can process refunds and restock decisions efficiently.",
    },
    {
      q: "Can your system integrate with platforms like Shopify, WooCommerce, or our custom OMS?",
      a: "Platform integrations depend on the systems involved. Contact our team to discuss your platform and confirm whether a suitable integration is available.",
    },
  ],
};
