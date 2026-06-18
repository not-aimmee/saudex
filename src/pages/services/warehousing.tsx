import { ServicePage, type ServicePageData } from "./ServicePage"
import { SEO } from "../../components/SEO";
import { warehousingLogisticsMeta } from "../data/seoMeta"

const globalFreight: ServicePageData = {
  heroTag: "Warehousing",
  heading: "Your stock,\n safe and ready.",
  subheading: "Flexible contract warehousing with inventory management, scale up or down as your business needs change.",
  heroImage: "/images/in26.webp",
  heroImageAlt: "Window of a retail shop displaying fmcg goods",
  sections: [
    {
      tag: "",
layout: "image-left",
heading: "Contract Warehousing Solutions",
body: "Elevating the standard for contract warehousing. Our flexible, scalable solutions support manufacturers, distributors, and retailers with secure storage, efficient inventory management, and seamless distribution.",
image: "/images/in27.webp",
imageAlt: "Distribution warehouse with workers loading trucks",
highlight: "Real-Time Stock Reports",
    },
    {
      tag: "",
      layout: "image-top",
      heading: "Flexible Strorage Plans",
      body: "Our secure warehousing facilities are equipped with 24/7 surveillance, controlled access, and a straightforward inventory management system so you always know what you have and where it is. We handle goods receiving, storage, pick-and-pack, and dispatch — giving you one less operation to manage yourself.",
      image: "/images/in35.webp",
      imageAlt: "Cargo ship at dock under blue sky",
      highlight: "",
    },
    {
      tag: "",
      layout: "image-left",
      heading: "Secure & Compliant",
      body: "State of the art security systems and full regulatory compliance to protect your inventory.",
      image: "/images/in14.webp",
      imageAlt: "Red and blue cargo containers",
      highlight: "",
    },
    {
      tag: "",
      layout: "image-bottom",
      heading: "Dedicated Warehousing Facilities",
      body: "Secure, dedicated warehousing solutions tailored to your operational requirements. We manage infrastructure, labor, and processes while ensuring flexibility and cost efficiency.",
      image: "/images/s33.webp",
      imageAlt: "Truck on bridge at night, motion blur",
      highlight: "24/7 secure facilities",
    },
  ],
  faqs: [
    {
      q: "What does contract warehousing include?",
      a: "It includes storage space, inventory management, goods receiving and dispatch, and regular stock reporting. We can also arrange pick-and-pack services.",
    },
    {
      q: "Is your warehouse secure?",
      a: "Yes. Our facilities have 24/7 security, CCTV surveillance, and controlled access to ensure your stock is protected at all times.",
    },
    {
      q: "Can I scale my storage space up or down?",
      a: "Yes. Our contract warehousing is flexible — you can increase or reduce your storage space based on seasonal demand or business growth.",
    },
  ],
};

export default function Warehousing() {
  return (
    <>
    <SEO
        
        description={warehousingLogisticsMeta.description}
        keywords={warehousingLogisticsMeta.keywords}
        canonical={warehousingLogisticsMeta.canonical}
        ogImage={warehousingLogisticsMeta.ogImage}
      />
  <ServicePage data={globalFreight} />
  </>
  );
}
