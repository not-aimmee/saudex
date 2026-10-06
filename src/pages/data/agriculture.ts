import type { IndustryPageData } from "../IndustryPage";

export const agriCommoditiesData: IndustryPageData = {
  industry: "Agri-Commodities & Palm Oil",
  heroEyebrow: "Industry Solutions",
  heroHeading: "From Plantation to Processor, Without a Break in the Chain.",
  heroBody:
    "Palm oil and agri-commodities move in large volumes on tight quality specifications. We supply and transport bulk edible oils, grains, sugar, and related products to refiners, food manufacturers, and traders with the temperature control, traceability, and timing that these cargoes demand.",
  heroImage: "/images/in37.webp",
  heroImageAlt:
    "Palm oil tanker being loaded at a refinery terminal at sunrise",
  heroStats: [
    { value: "24/7", label: "Dispatch desk availability" },
    { value: "99.2%", label: "Quality specification compliance" },
    { value: "300+", label: "Commodity clients served" },
  ],
  sections: [
    {
      index: 1,
      tag: "Sourcing",
      heading: "Reliable Supply Across Every Grade",
      body:
        "We source crude palm oil, RBD palm olein, palm stearin, and palm kernel oil, along with sugar, rice, wheat, maize, and pulses, through a single supplier relationship. Every lot is tested against agreed specifications for free fatty acid, moisture, and impurities before it is dispatched. Your procurement team gets one contract, one point of contact, and one consistent quality standard.",
      image: "/images/in38.webp",
      imageAlt:
        "Quality analyst testing a palm oil sample in a laboratory at a storage terminal",
      stats: [
        { value: "25+", label: "Commodity grades available" },
        { value: "100%", label: "Lots tested before dispatch" },
      ],
      callout:
        "Consistent quality in the tank starts with consistent quality at the source.",
    },
    {
      index: 2,
      tag: "Bulk Logistics",
      heading: "Temperature-Controlled\nBulk Transport",
      body:
        "Palm oil solidifies when it cools, so it needs careful handling from loading to discharge. Our fleet includes insulated and heated tankers, flexitanks, and ISO tank containers, with steam coils and temperature logging on every journey. Dry commodities move in sealed, moisture-protected bulk carriers and bagged loads, with a digital proof of delivery and a weighbridge record at each stage.",
      image: "/images/in40.webp",
      imageAlt:
        "Row of insulated bulk tankers waiting at a palm oil refinery loading bay",
      stats: [
        { value: "0.3%", label: "Maximum transit loss tolerance" },
        { value: "98.7%", label: "On-time delivery" },
      ],
      callout:
        "A cargo that arrives solid or contaminated is a cargo that stops your production line.",
    },
    {
      index: 3,
      tag: "Compliance & Traceability",
      heading: "Sustainable Sourcing You Can Prove",
      body:
        "Buyers, regulators, and retailers now expect palm oil to be traceable to its origin. We work with RSPO and ISCC certified suppliers and keep batch-level records from the mill to your gate. Documentation for no-deforestation and NDPE commitments, along with full certificates of analysis, is issued with each shipment.",
      image: "/images/in39.webp",
      imageAlt:
        "Compliance officer reviewing traceability documents beside a loaded palm oil tanker",
      stats: [
        { value: "100%", label: "Batches traceable to origin" },
        { value: "2", label: "Major certification schemes supported" },
      ],
    },
  ],
  challenges: [
    {
      title: "Price Volatility",
      body: "Commodity prices can shift within hours. We offer fixed-price, formula-based, and forward contract options, so you can plan your costs and protect your margins.",
    },
    {
      title: "Oil Solidification in Transit",
      body: "Cool weather and long routes can cause palm oil to set inside the tank. Our heated and insulated tankers, together with live temperature monitoring, keep the product pumpable from loading to discharge.",
    },
    {
      title: "Quality and Contamination Risk",
      body: "Residues from previous loads can spoil an edible oil cargo. Every tanker is cleaned, inspected, and sealed before loading, and the cleaning certificate is shared with you in advance.",
    },
    {
      title: "Supply Interruptions",
      body: "Weather, harvest cycles, and port delays can disrupt supply. We maintain buffer stock and multiple origin options, so a single disruption does not halt your production.",
    },
    {
      title: "Regulatory and Sustainability Pressure",
      body: "Import rules and buyer sustainability standards keep changing. Our compliance team tracks these requirements and prepares the documentation each shipment needs.",
    },
    {
      title: "Weight and Volume Disputes",
      body: "Disagreements over quantity slow down payments. We record weighbridge and flow-meter readings at loading and discharge, and both are attached to the delivery record.",
    },
  ],
  faqs: [
    {
      q: "Can you supply certified sustainable palm oil?",
      a: "Yes. We source from RSPO and ISCC certified producers and can supply segregated, mass balance, or book and claim volumes, depending on your requirements. Each shipment includes the relevant certificates and batch-level traceability records.",
    },
    {
      q: "How do you keep palm oil from solidifying during transport?",
      a: "We use insulated and heated tankers with steam coils, and we log the cargo temperature throughout the journey. Loading and discharge are scheduled to minimise waiting time, and drivers are trained to maintain the correct temperature range for each product grade.",
    },
    {
      q: "Do you offer flexible contract terms for regular buyers?",
      a: "Yes. We offer spot purchases, monthly supply agreements, and long-term contracts with fixed or index-linked pricing. Delivery schedules can be adjusted to match your production plan, and volumes can be scaled up or down with reasonable notice.",
    },
  ],
};