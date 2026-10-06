import type { IndustryPageData } from "../IndustryPage";

export const coldChainData: IndustryPageData = {
  industry: "Cold Chain",
  heroEyebrow: "Industry Solutions",
  heroHeading: "Temperature\nNever\nCompromises.",
  heroBody:
    "From farm gate to final mile, we engineer cold chain logistics that hold temperature, traceability, and timing to the tightest tolerances in the industry. Every degree matters. Every minute counts.",
  heroImage: "/images/in3.webp",
  heroImageAlt: "Refrigerated warehouse with pallets of temperature-sensitive cargo",
  heroStats: [
    { value: "99.6%", label: "Temperature compliance rate" },
    { value: "<2hrs", label: "Breach response window" },
    { value: "340+", label: "Cold storage nodes" },
  ],
  sections: [
    {
      index: 1,
      tag: "Infrastructure",
      heading: "Controlled Environments at Scale",
      body:
        "Temperature-sensitive goods may require specialised storage and transport. Contact our team to discuss the available arrangements for your cargo.",
      image: "/images/in1.webp",
      imageAlt: "Cold room with IoT temperature sensors mounted on ceiling",
      stats: [
        { value: "-25°C", label: "Deep freeze capability" },
        { value: "24 / 7", label: "Live monitoring" },
      ],
      callout:
        "Temperature is a product attribute, not a logistics afterthought.",
    },
    {
      index: 2,
      tag: "Traceability",
      heading: "End-to-End Visibility,\nNo Gaps",
      body:
        "Real time temperature logging, batch level traceability, and automated alerts keep every stakeholder informed the moment conditions drift. Blockchain anchored records ready for regulatory audit at any point in the chain.",
      image: "/images/in15.webp",
      imageAlt: "Dashboard showing temperature logs and batch tracking for cold chain shipments",
      stats: [
        { value: "100%", label: "Batch traceability" },
        { value: "≤90s", label: "Alert response SLA" },
      ],
      callout:
        "If you can't prove it was cold, it wasn't good enough.",
    },
    {
      index: 3,
      tag: "Last Mile",
      heading: "Cold Delivery\nThat Arrives Intact",
      body:
        "Insulated vehicles with active refrigeration units and in cab temperature displays run our last mile fleet. Proof of delivery includes a temperature certificate alongside the standard POD, because recipients deserve the full picture.",
      image: "/images/in18.webp",
      imageAlt: "Refrigerated delivery truck at a loading dock",
      stats: [
        { value: "98.2%", label: "On-time cold delivery" },
        { value: "0.3%", label: "Claim rate" },
      ],
    },
  ],
  challenges: [
    {
      title: "Silent Temperature Excursions",
      body: "Temperature-sensitive goods require suitable handling during transport and at transfer points. Discuss monitoring and documentation requirements with our team.",
    },
    {
      title: "Regulatory Documentation Gaps",
      body: "Auditors demand chain of custody temperature records. We generate batch level certificates automatically, exportable in any format regulators require.",
    },
    {
      title: "Seasonal Capacity Crunches",
      body: "Peak harvest and holiday surges overwhelm static cold storage. Our elastic network gives you burst capacity without a long term lease commitment.",
    },
    {
      title: "Multi Model Handoff Risk",
      body: "Every transfer, truck to dock to warehouse to truck, is a temperature risk. Our protocols treat each handoff as a controlled event with signed verification.",
    },
    {
      title: "Pharma vs. Food Compliance",
      body: "Different goods may have different handling and documentation requirements. Confirm the requirements for your shipment with our team.",
    },
    {
      title: "Carrier Accountability",
      body: "Third party carriers can't always be trusted to maintain your specs. Our performance dashboards track carrier compliance and flag repeat offenders automatically.",
    },
  ],
faqs: [
    {
      q: " What temperature ranges do your cold chain vehicles support?",
      a: "Our reefer fleet supports ambient (15–25°C), chilled (2–8°C), and frozen (–18°C and below) conditions. Each vehicle is equipped with calibrated data loggers and dual-zone capability, so mixed temperature shipments can travel together without compromise.",
    },
    {
      q: "How do you ensure temperature compliance throughout transit?",
      a: "Temperature monitoring options depend on the shipment and service provider. Contact our team to confirm what monitoring and reporting are available for your route.",
    },
    {
      q: "Can you provide temperature logs and compliance documentation for audits?",
      a: "Documentation depends on the shipment and service provider. Contact our team to confirm which records can be provided for your route.",
    },
  ],
};
