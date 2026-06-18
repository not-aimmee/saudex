import { ServicePage, type ServicePageData } from "./ServicePage"
import { SEO } from "../../components/SEO";
import { supplyChainLogisticsMeta } from "../data/seoMeta"

const globalFreight: ServicePageData = {
  heroTag: "Supply Chain Logistics",
  heading: " Smarter operations start here.",
  subheading: "Strategic supply chain consulting to reduce costs, remove bottlenecks, and build a logistics operation that scales with your business.",
  heroImage: "/images/s8.webp",
  heroImageAlt: "Window of a retail shop displaying fmcg goods",
  sections: [
    {
      tag: "",
layout: "image-left",
heading: "Supply Chain Logistics",
body: "We start with a full assessment of how your goods currently move — from sourcing and storage to transport and delivery. We identify where time and money are being lost, then give you a clear, practical improvement plan. We can advise only, or stay involved through implementation using our own logistics network to execute the changes.",
image: "/images/s3.webp",
imageAlt: "Distribution warehouse with workers loading trucks",
highlight: "Built for growing businesses",
    },
    {
      tag: "",
      layout: "image-top",
      heading: "End-to-End Assessment",
      body: "Comprehensive evaluation of your supply chain to identify inefficiencies, risks, and cost saving opportunities.",
      image: "/images/s20.webp",
      imageAlt: "Cargo ship at dock under blue sky",
      highlight: "",
    },
    {
      tag: "",
      layout: "image-left",
      heading: "Practical Implementation",
      body: "Data driven inventory planning to improve stock positioning, reduce carrying costs, and enhance service levels.",
      image: "/images/s28.webp",
      imageAlt: "Red and blue cargo containers",
      highlight: "",
    },
    {
      tag: "Last-Mile Delivery",
      layout: "image-bottom",
      heading: "Built for SMEs & Growing Businesses",
      body: "Future ready supply chain strategies designed to support expansion, seasonal demand, and market changes.",
      image: "/images/s50.webp",
      imageAlt: "Truck on bridge at night, motion blur",
      highlight: "Felxible Tracking",
    },
  ],
  faqs: [
    {
      q: "What does a supply chain consultation involve?",
      a: "We start with an assessment of your current operations such as sourcing, storage, transport, and delivery. We then identify inefficiencies and recommend improvements with a clear implementation plan.",
    },
    {
      q: "Is this service suitable for small businesses?",
      a: "Absolutely. Supply chain optimization isn't just for large corporations. Small and mid-sized businesses often see the fastest improvements because there's more room to streamline.",
    },
    {
      q: "Do you implement the recommendations or just advise?",
      a: " Both. We can provide a strategic report only, or stay involved to help you implement changes using our logistics network and expertise.",
    },
  ],
};

export default function SCC() {
  return (
    <>
    <SEO
        title={supplyChainLogisticsMeta.title}
        description={supplyChainLogisticsMeta.description}
        keywords={supplyChainLogisticsMeta.keywords}
        canonical={supplyChainLogisticsMeta.canonical}
        ogImage={supplyChainLogisticsMeta.ogImage}
      />
   <ServicePage data={globalFreight} />
   </>
  );
}
