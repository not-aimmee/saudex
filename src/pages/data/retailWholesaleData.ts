import type { IndustryPageData } from "../IndustryPage";

export const retailWholesaleData: IndustryPageData = {
  industry: "Retail & Wholesale",
  heroEyebrow: "Industry Solutions",
  heroHeading: "From\nBulk Order\nto Shelf-Ready.",
  heroBody:
    "Retail and wholesale operations demand two very different supply chain muscles — the ability to move container loads efficiently and the ability to split them into shelf-ready units the same day. We do both, from the same network.",
  heroImage: "/images/retail.webp",
  heroImageAlt: "Large retail distribution centre with pallets being sorted for store delivery",
  heroStats: [
    { value: "98.5%", label: "In-full delivery rate" },
    { value: "500+", label: "Retail partners served" },
    { value: "48hr", label: "Wholesale order fulfilment cycle" },
  ],
  sections: [
    {
      index: 1,
      tag: "Store Replenishment",
      heading: "Shelf-Ready\nDelivery,\nZero Handling",
      body:
        "Our retail-ready packaging and pre-ticketing service means stock arrives at the store floor-ready. No back-room breakdown, no repricing, no damaged packaging from manual handling at the store level. Your retail staff do one thing: put it on the shelf.",
      image: "/images/in32.webp",
      imageAlt: "Retail-ready cages being unloaded directly onto a supermarket shop floor",
      stats: [
        { value: "−35%", label: "Store-level handling time" },
        { value: "100%", label: "Pre-ticketed at despatch" },
      ],
      callout:
        "Retail efficiency is won in the warehouse, not at the checkout.",
    },
    {
      index: 2,
      tag: "Wholesale",
      heading: "Bulk In.\nBroken Out.\nSame Day.",
      body:
        "Large wholesale orders arrive by container. We receive, devan, inspect, and either cross-dock to outbound or put-away to pick locations — and begin fulfilling split-case wholesale orders from the same facility on the same day.",
      image: "/images/s2.webp",
      imageAlt: "Wholesale break-bulk operation with pallets being split and repackaged",
      stats: [
        { value: "6hrs", label: "Container-to-first-pick time" },
        { value: "99.2%", label: "Inbound accuracy rate" },
      ],
      callout:
        "Speed from container to customer is a supply chain capability, not a miracle.",
    },
    {
      index: 3,
      tag: "Omnichannel",
      heading: "One Stock\nPool. Every\nChannel.",
      body:
        "Modern retail runs across physical stores, marketplaces, and direct-to-consumer channels simultaneously. Our single-inventory model allocates stock dynamically across all channels, eliminating the silo problem and the over-stock it creates.",
      image: "/images/s58.webp",
      imageAlt: "Retail dashboard showing omnichannel inventory allocation across stores and online",
      stats: [
        { value: "−24%", label: "Average inventory holding cost" },
        { value: "3×", label: "Channel coverage, same stock pool" },
      ],
    },
  ],
  challenges: [
    {
      title: "Planogram Compliance",
      body: "Retailers have strict planogram requirements. Our retail-ready build process encodes planogram specs at packing level so displays arrive store-compliant without manual adjustment.",
    },
    {
      title: "Promotional Stock Timing",
      body: "A promotion that arrives a day late is a promotion that fails. Our promotional logistics team coordinates dispatch windows to hit the precise in-store activation date.",
    },
    {
      title: "Wholesale Credit Exposure",
      body: "Wholesale trade extends significant credit. Our trade finance desk provides invoice discounting options that protect your working capital while the buyer's 60-day clock runs.",
    },
    {
      title: "Dead Stock and Markdowns",
      body: "Overstock leads to markdown cycles that erode margin. Our demand-driven replenishment model keeps retail inventory lean and sells through before the markdown conversation starts.",
    },
    {
      title: "Import Duty Optimisation",
      body: "Wholesale importers frequently over-pay on duties through incorrect HS code classification. Our customs desk audits classification at origin and has recovered 6-figure duty amounts for clients.",
    },
    {
      title: "Returns to Stock",
      body: "Retail returns arrive mixed, damaged, and out of season. Our reverse logistics team grades, re-prices, and routes returned stock to secondary markets, outlet channels, or disposal — recovering value at every step.",
    },
  ],
faqs: [
    {
      q: "Can you manage high volume bulk deliveries to our warehouses and stores?",
      a: "Yes. We specialize in full-truckload (FTL) and less-than-truckload (LTL) bulk deliveries to distribution centers, dark stores, and retail branches. Our scheduling system aligns with your receiving dock windows to avoid congestion and delays.",
    },
    {
      q: "Do you offer vendor-managed inventory or replenishment support?",
      a: "We can work within VMI models by syncing delivery triggers with your inventory system. When stock drops below a set threshold, replenishment orders are dispatched automatically, reducing manual reordering and preventing stockouts.",
    },
    {
      q: "How do you handle peak season volumes like festive sales surges?",
      a: "We plan capacity in advance with our retail clients through quarterly demand forecasting sessions. During peak periods, we scale fleet and manpower accordingly so your supply chain doesn't break under pressure and SLAs remain unchanged.",
    },
  ],
};
