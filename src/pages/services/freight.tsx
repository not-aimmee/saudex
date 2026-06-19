import { ServicePage, type ServicePageData } from "./ServicePage"
import { SEO } from "../../components/SEO";
import { freightForwardingMeta } from "../data/seoMeta"

const globalFreight: ServicePageData = {
  heroTag: "Freight Forwarding",
  heading: "Your cargo,\n our responsibility.",
  subheading: "Air, sea, and land freight forwarding \n Coordinated end-to-end so you never have to chase down a shipment.",
  heroImage: "/images/i2.webp",
  heroImageAlt: "Cargo plane loading at the dock during sunset",
  sections: [
    {
      tag: "Freight Forwarding",
layout: "image-left",
heading: "Global Freight Solutions",
body: "We work with a network of trusted carriers across air, sea, and road to find the right route, the right timing, and the right price for every shipment. FCL, LCL, charter, or express \n we match the method to your needs and manage the entire journey from origin to destination with full visibility throughout.",
image: "/images/in10.webp",
imageAlt: "Distribution warehouse with workers loading trucks",
highlight: "98% on-time rate",
    },
    {
      tag: "",
      layout: "image-top",
      heading: "Cargo Safety & Compliance",
      body: "Robust security measures and regulatory compliance for all freight, protecting goods during transit across borders.",
      image: "/images/in17.webp",
      imageAlt: "Cargo ship at dock under blue sky",
      highlight: "",
    },
    {
      tag: "",
      layout: "image-left",
      heading: "Smart Inventory Management",
      body: "Advanced inventory solutions that maximize space utilization and streamline stock flow. Reduce waste, optimize turnover, and improve operational efficiency.",
      image: "/images/in19.webp",
      imageAlt: "Red and blue cargo containers",
      highlight: "",
    },
    {
      tag: "Comprehensive Solutions",
      layout: "image-bottom",
      heading: "Warehouse Management Technology",
      body: "Integrated WMS solutions offering real time tracking, reporting, and control for smooth warehouse operations and accurate order fulfillment.",
      image: "/images/in31.webp",
      imageAlt: "Truck on bridge at night, motion blur",
      highlight: "",
    },
  ],
  faqs: [
    {
      q: "What's the difference between air and sea freight?",
      a: "Air freight is faster but more expensive,  ideal for urgent or high value shipments. Sea freight is cost effective for large or heavy cargo with more flexible timelines.",
    },
    {
      q: "Can I ship partial loads or do I need a full container?",
      a: "Both. We offer FCL (Full Container Load) for large shipments and LCL (Less than Container Load) for smaller ones, so you only pay for the space you use.",
    },
    {
      q: "What types of cargo do you forward?",
      a: "We handle general cargo, perishables, hazardous materials (with proper certification), oversized goods, and high value items.",
    }
  ],
};

export default function Freight() {
  return (
  <>
  <SEO
       
        description={freightForwardingMeta.description}
        keywords={freightForwardingMeta.keywords}
        canonical={freightForwardingMeta.canonical}
        ogImage={freightForwardingMeta.ogImage}
      />
  <ServicePage data={globalFreight} />
  </>
  );
}
