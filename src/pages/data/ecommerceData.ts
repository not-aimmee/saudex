import type { IndustryPageData } from "../IndustryPage";

export const ecommerceData: IndustryPageData = {
  industry: "E-Commerce",
  heroEyebrow: "Industry Solutions",
  heroHeading: "Fulfilment\nAt the\nSpeed of Click.",
  heroBody:
    "Today's online shopper expects same-day dispatch, live tracking, and frictionless returns. We run the warehousing, pick-and-pack, and last-mile infrastructure that lets your brand promise what customers actually want.",
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
      heading: "Pick, Pack,\nDispatch —\nSame Day",
      body:
        "Orders placed before 3 PM leave the same day. Our fulfilment centres integrate with Shopify, WooCommerce, Magento, and custom APIs. Inventory syncs in real time so your storefront never oversells.",
      image: "/images/i6.webp",
      imageAlt: "Picker scanning shelves in an e-commerce fulfilment warehouse",
      stats: [
        { value: "3 PM", label: "Same-day cutoff" },
        { value: "6", label: "Platform integrations" },
      ],
      callout:
        "Fulfilment is the product experience customers actually feel.",
    },
    {
      index: 2,
      tag: "Last Mile",
      heading: "Delivery\nExperience\nIs Your Brand",
      body:
        "Branded packaging, live tracking links, and real-time ETA updates keep customers informed at every step. Our carrier network spans national couriers and hyperlocal same-day riders, with automatic routing to the fastest available option.",
      image: "/images/in10.webp",
      imageAlt: "Delivery rider on a motorbike in an urban area with a branded parcel bag",
      stats: [
        { value: "96.7%", label: "First-attempt delivery rate" },
        { value: "4.8★", label: "Delivery experience rating" },
      ],
      callout:
        "The unboxing moment starts the moment they get the tracking link.",
    },
    {
      index: 3,
      tag: "Returns",
      heading: "Reverse\nLogistics That\nBuilds Loyalty",
      body:
        "A frictionless return converts a refund into a repurchase. Our returns portal generates prepaid labels, routes items back to the correct inspection line, and triggers restocking or disposal based on your rules — all without a support ticket.",
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
      body: "Black Friday, Ramadan, and year-end sales spike orders 4× overnight. Our elastic fulfilment model scales headcount and space dynamically — no capacity ceiling.",
    },
    {
      title: "SKU Proliferation",
      body: "Thousands of SKUs, dozens of variants, constant product launches. Our WMS handles unlimited SKU depth with intelligent slotting to keep pick paths short.",
    },
    {
      title: "Carrier Failure Fallback",
      body: "A single carrier failure strands thousands of orders. Our multi-carrier routing engine automatically reroutes to an alternative the moment SLAs are at risk.",
    },
    {
      title: "Inventory Visibility",
      body: "Overselling kills trust. Real-time inventory sync across every sales channel means your storefront always reflects what's actually on the shelf.",
    },
    {
      title: "Returns Fraud",
      body: "High return rates can mask fraud. Our inspection protocols flag anomalies at the returns desk and feed data back to your fraud team.",
    },
    {
      title: "International Customs Complexity",
      body: "Cross-border orders stall at customs. Our customs brokerage desk handles HS codes, duties calculation, and documentation for 40+ destination markets.",
    },
  ],
  faqs: [
    {
      q: "How quickly can you ship orders after they're placed on our platform?",
      a: "We support same day dispatch for orders confirmed before our daily cut off time. Once integrated with your store via API or plugin, orders flow automatically into our fulfillment system, reducing manual steps and getting packages out the door faster.",
    },
    {
      q: "Do you offer a returns management solution for our customers?",
      a: "Yes. Our reverse logistics service handles customer pickups, condition inspection, and restocking or disposal based on your returns policy. You get a returns dashboard with item-level visibility, so your team can process refunds and restock decisions efficiently.",
    },
    {
      q: "Can your system integrate with platforms like Shopify, WooCommerce, or our custom OMS?",
      a: "We offer pre-built integrations with major eCommerce platforms and a REST API for custom OMS setups. Setup typically takes 1 to 3 business days, and our technical team supports the onboarding process end-to-end.",
    },
  ],
};
