import { ServicePage, type ServicePageData } from "./ServicePage"
import { SEO } from "../../components/SEO";
import { customsLogisticsMeta } from "../data/seoMeta"
const globalFreight: ServicePageData = {
  heroTag: "Custom Clearance",
  heading: " Nothing waits at the border.",
  subheading: "Setting new standards in customs clearance and trade compliance.",
  heroImage: "/images/cc.webp",
  heroImageAlt: "Cargo ship at port during night",
  sections: [
    {
      tag: "Customs Clearance",
layout: "image-left",
heading: "Nothing waits at the border.",
body: "Our team handles tariff classification, duty calculation, restricted goods licensing, and full customs documentation for both import and export shipments. We file paperwork proactively, liaise directly with customs authorities, and resolve issues before they cause delays. If a shipment is ever held, we step in immediately and handle it end-to-end.",
image: "/images/in11.webp",
imageAlt: "Customs officer inspecting cargo at border checkpoint",
highlight: "Avg. 1–3 day clearance",
    },
    {
      tag: "",
      layout: "image-top",
      heading: "Regulatory Compliance Management.",
      body: "Strict adherence to international and local trade regulations, ensuring all shipments comply with customs laws and industry standards.",
      image: "https://images.unsplash.com/photo-1541297370035-37036f34c33d?w=1800&h=700&fit=crop&auto=format",
      imageAlt: "Cargo ship at dock under blue sky",
      highlight: "",
    },
    {
      tag: "",
      layout: "image-left",
      heading: "Secure Handling & Risk Management",
      body: "We implement strict protocols to safeguard shipments and reduce customs related risks, ensuring your goods remain secure throughout the process.",
      image: "https://images.unsplash.com/photo-1606964212858-c215029db704?w=1200&h=1400&fit=crop&auto=format",
      imageAlt: "Red and blue cargo containers",
      highlight: "Multi Country Compliance",
    },
    {
      tag: "Last-Mile Delivery",
      layout: "image-bottom",
      heading: "The Final Mile\nDone Right.",
      body: "Delivery is where reputations are won or lost. Our last mile carrier network covers B2B and B2C distribution with live tracking, electronic proof of delivery, and integrated returns management. Every exception is escalated to a human, immediately.",
      image: "https://images.unsplash.com/photo-1551471698-c7787ff6b7ca?w=1800&h=700&fit=crop&auto=format",
      imageAlt: "Truck on bridge at night, motion blur",
      highlight: "98% delivery success",
    },
  ],
  faqs: [
    {
      q: "How long does customs clearance take?",
      a: "For standard shipments with complete documentation, clearance typically takes 1 to 3 business days. Delays usually occur due to missing paperwork or inspections, which we proactively help you avoid.",
    },
    {
      q: "What happens if my shipment is held at customs?",
      a: "We handle it. Our team liaises directly with customs authorities, resolves documentation issues, and keeps you informed until your shipment is released.",
    },
    {
      q: "Do you handle both import and export customs?",
      a: "Yes, for both directions and for multiple countries across our service region.",
    },
  ],
};

export default function Customs() {
  return (
  <>
  <SEO
       
        description={customsLogisticsMeta.description}
        keywords={customsLogisticsMeta.keywords}
        canonical={customsLogisticsMeta.canonical}
        ogImage={customsLogisticsMeta.ogImage}
      />
  <ServicePage data={globalFreight} />
  </>
  );
}
