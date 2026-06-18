import type { IndustryPageData } from "../IndustryPage";

export const horecaData: IndustryPageData = {
  industry: "HoReCa",
  heroEyebrow: "Industry Solutions",
  heroHeading: "Supply That\nKeeps the\nKitchen Moving.",
  heroBody:
    "Hotels, restaurants, and catering operations run on precision timing and unbroken supply. We deliver to kitchens, buffet lines, and event venues with the consistency that Michelin-starred chefs and stadium caterers both depend on.",
  heroImage: "/images/horeca.webp",
  heroImageAlt: "Professional kitchen in full service, chefs plating dishes under hot lamps",
  heroStats: [
    { value: "5 AM", label: "Earliest delivery window" },
    { value: "97.8%", label: "Order accuracy rate" },
    { value: "1,200+", label: "HoReCa clients served" },
  ],
  sections: [
    {
      index: 1,
      tag: "Procurement",
      heading: "Unified\nSourcing for\nEvery Menu",
      body:
        "Dry goods, fresh produce, dairy, proteins, and non-food consumables — all from a single supplier relationship. One invoice, one account manager, and one delivery window per day. Your purchasing team stops chasing multiple vendors.",
      image: "/images/s23.webp",
      imageAlt: "Commercial kitchen storage room with organised shelving of HoReCa supplies",
      stats: [
        { value: "4,000+", label: "SKUs available" },
        { value: "1", label: "Invoice per delivery" },
      ],
      callout:
        "A great dish starts with a great supplier relationship.",
    },
    {
      index: 2,
      tag: "Delivery",
      heading: "Pre-Dawn\nDelivery,\nEvery Day",
      body:
        "Our HoReCa fleet operates from 2 AM to service the earliest breakfast service. Contactless dock delivery, chilled and ambient separated, with a digital proof-of-delivery your receiving team signs off on before the first guest arrives.",
      image: "/images/in22.webp",
      imageAlt: "Early morning delivery of produce crates at a hotel service entrance",
      stats: [
        { value: "365", label: "Days per year operational" },
        { value: "99.1%", label: "On-time delivery" },
      ],
      callout:
        "If a kitchen runs out, the guests know. We make sure that never happens.",
    },
    {
      index: 3,
      tag: "Event Catering",
      heading: "Scale Up\nfor Any\nEvent Format",
      body:
        "Banquets, corporate events, festival catering — volume spikes that can triple your usual order overnight. Our event logistics desk handles the surge with dedicated planners, staging areas, and a separate event delivery fleet.",
      image: "/images/in35.webp",
      imageAlt: "Large banquet hall setup with catering supplies being staged",
      stats: [
        { value: "5,000+", label: "Cover events supported" },
        { value: "48hr", label: "Emergency order turnaround" },
      ],
    },
  ],
  challenges: [
    {
      title: "Last-Minute Menu Changes",
      body: "Chefs change menus. We keep a live substitution catalogue so your order can pivot to a comparable product without a missed delivery.",
    },
    {
      title: "Vendor Fragmentation",
      body: "Managing 8 different suppliers eats admin time. A single consolidated supplier relationship reduces PO workload by up to 60%.",
    },
    {
      title: "Portion and Pack-Size Waste",
      body: "Oversized packs drive waste in kitchens. We offer HoReCa-specific pack sizes calibrated to daily cover counts, not retail shelf sizes.",
    },
    {
      title: "Seasonal Produce Inconsistency",
      body: "Quality varies. Our sourcing team pre-qualifies seasonal produce at origin, so what arrives is what was specced — not a field reject.",
    },
    {
      title: "Credit and Payment Complexity",
      body: "Cash-flow cycles in hospitality are long. We offer flexible payment terms designed around booking cycles, not a fixed 30-day window.",
    },
    {
      title: "Allergen Documentation",
      body: "Every dish on your menu needs a traceable ingredient chain. Our delivery system attaches full allergen data sheets to every product line item.",
    },
  ],
faqs: [
    {
      q: "Can you handle urgent, last-minute deliveries for our kitchen operations?",
      a: "Yes. We offer same-day and next-day delivery slots specifically designed for HoReCa clients. Our dispatch network is built around kitchen prep windows, so your dry goods, perishables, and supplies arrive when your team needs them, not just when it's convenient for us.",
    },
    {
      q: "Do you support multi-location deliveries across our restaurant chain?",
      a: "Absolutely. We manage consolidated dispatch and individual drop-offs across multiple outlets under a single account. Each location gets its own delivery schedule, and you get a unified dashboard to track and manage everything centrally.",
    },
    {
      q: "How do you handle fragile items like glassware and crockery?",
      a: " Our HoReCa fleet uses padded compartment packaging, vertical stacking controls, and careful handling protocols. Items are secured by type and weight during transit, and our handlers are trained for hospitality-grade cargo — so breakage rates stay close to zero.",
    },
  ],
};
