import { ServicePage, type ServicePageData } from "./ServicePage"
import { SEO } from "../../components/SEO";
import { distributionLogisticsMeta } from "../data/seoMeta"

const globalFreight: ServicePageData = {
  heroTag: "Distribution & Transportation",
  heading: " From Warehouse to Doorstep.",
  subheading: "Reliable bulk and last mile distribution across key regional routes \n On Schedule, Every Time.",
  heroImage: "/images/ab.webp",
  heroImageAlt: "Cargo ship at port during night",
  sections: [
    {
      tag: "Distribution & Transportation",
layout: "image-left",
heading: "From warehouse\nto\ndoorstep.",
body: "We run fixed distribution routes and flexible delivery schedules for businesses that need consistent, high frequency delivery. Whether you're supplying retail outlets, wholesale clients, or end customers, our network covers the region with real accountability at every stop, including electronic proof of delivery.",
image: "/images/in13.webp",
imageAlt: "Distribution warehouse with workers loading trucks",
highlight: "POD on every delivery",
    },
    {
      tag: "",
      layout: "image-top",
      heading: "Distribution Management.",
      body: "Raising the benchmark for distribution and transportation services. Our flexible, scalable solutions support manufacturers, distributors and retailers with timely deliveries, efficient logistics and end to end supply chain management.",
      image: "/images/in14.webp",
      imageAlt: "Cargo ship at dock under blue sky",
      highlight: "",
    },
    {
      tag: "",
      layout: "image-left",
      heading: "Reliable Distribution Networks",
      body: "Efficient logistics and transportation solutions ensuring your goods are delivered on time and in perfect condition.",
      image: "/images/in21.webp",
      imageAlt: "Red and blue cargo containers",
      highlight: "",
    },
    {
      tag: "Last-Mile Delivery",
      layout: "image-bottom",
      heading: "Integrated Transportation Support",
      body: "Seamless coordination with transport networks for inbound and outbound shipments, ensuring timely delivery and efficient movement across your supply chain.",
      image: "/images/in31.webp",
      imageAlt: "Truck on bridge at night, motion blur",
      highlight: "Scheduled & On-Demand",
    },
  ],
  faqs: [
    {
      q: "What areas do you cover for distribution?",
      a: "We cover key routes across Saudi Arabia and the wider Middle East region. Contact us to confirm coverage for your specific delivery area.",
    },
    {
      q: "Can you handle recurring or scheduled distribution runs?",
      a: "Yes. We work with businesses on regular distribution schedules, daily, weekly, or monthly , with consistent routing and reporting.",
    },
    {
      q: "What's the minimum order size for distribution?",
      a: "There's no strict minimum. We work with businesses of different scales and will find a cost effective solution regardless of volume.",
    },
  ],
};

export default function Distribution() {
  return (
  <>
  <SEO
        
        description={distributionLogisticsMeta.description}
        keywords={distributionLogisticsMeta.keywords}
        canonical={distributionLogisticsMeta.canonical}
        ogImage={distributionLogisticsMeta.ogImage}
      />
  <ServicePage data={globalFreight} />
  </>
  );
}
