import { ServicePage, type ServicePageData } from "./ServicePage"
import { SEO } from "../../components/SEO";
import { fmcgLogisticsMeta } from "../data/seoMeta"

const globalFreight: ServicePageData = {
  heroTag: "FMCG Distribution",
  heading: "Fast goods need faster logistics.",
  subheading: "High frequency distribution for consumer goods and beverages \n from storage to shelf, on a schedule that never slips.",
  heroImage: "/images/fb.webp",
  heroImageAlt: "Window of a retail shop displaying fmcg goods",
  sections: [
    {
      tag: "FMCG Distribution",
layout: "image-left",
heading: "Fixed Route Scheduling",
body: "FMCG moves fast and so do we. We build dedicated route plans, assign consistent drivers, and coordinate directly with retail and wholesale outlets to ensure your products arrive on time, every time. We also manage returns, collecting, sorting, and reporting on reverse logistics so your supply chain stays clean in both directions.",
image: "/images/in1.webp",
imageAlt: "Distribution warehouse with workers loading trucks",
highlight: "Direct retail delivery",
    },
    {
      tag: "",
      layout: "image-top",
      heading: "Scalable Solutions supporting Long term Growth",
      body: "We build dedicated route plans, assign consistent drivers, and coordinate directly with retail and wholesale outlets to ensure your products arrive on time, every time. We also manage returns, collecting, sorting, and reporting on reverse logistics so your supply chain stays clean in both directions.",
      image: "/images/in12.webp",
      imageAlt: "Cargo ship at dock under blue sky",
      highlight: "",
    },
    {
      tag: "",
      layout: "image-left",
      heading: "Direct Retail Delivery",
      body: "Seamless coordination with transportation networks for efficient inbound and outbound movement, ensuring timely delivery to distributors, retailers, and modern trade.",
      image: "/images/s27.webp",
      imageAlt: "Red and blue cargo containers",
      highlight: "",
    },
    {
      tag: "Last Mile Delivery",
      layout: "image-bottom",
      heading: "Returns Management Included",
      body: "End-to-end visibility with live shipment tracking, batch and expiry monitoring, and integrated reporting for complete supply chain transparency.",
      image: "/images/in31.webp",
      imageAlt: "Truck on bridge at night, motion blur",
      highlight: "Felxible Tracking",
    },
  ],
  faqs: [
    {
      q: "How do you handle high frequency FMCG deliveries?",
      a: "We build fixed route schedules and dedicated driver assignments for FMCG clients to ensure consistent, on time delivery to retail and wholesale points.",
    },
    {
      q: "Can you distribute directly to retail outlets?",
      a: "Yes. We handle last mile delivery to supermarkets, convenience stores, and wholesale distributors across the region.",
    },
    {
      q: "Do you offer returns management for FMCG?",
      a: " Yes. We can manage the reverse logistics process including collection, sorting, and reporting of returned goods.",
    },
  ],
};

export default function FMCG() {
  return (
  <>
  <SEO
          
          description={fmcgLogisticsMeta.description}
          keywords={fmcgLogisticsMeta.keywords}
          canonical={fmcgLogisticsMeta.canonical}
          ogImage={fmcgLogisticsMeta.ogImage}
        />
   <ServicePage data={globalFreight} />
  </>
  );
}
