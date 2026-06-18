import { ServicePage, type ServicePageData } from "./ServicePage"
import { SEO } from "../../components/SEO";
import { temperatureControlledLogisticsMeta } from "../data/seoMeta"

const globalFreight: ServicePageData = {
  heroTag: "Temperature Controlled Logistics",
  heading: "Temperature never compromised.",
  subheading: "Temperature-controlled logistics for perishables, pharmaceuticals, and sensitive goods \n Maintaining integrity from pickup to delivery.",
  heroImage: "/images/i3.webp",
  heroImageAlt: "Window of a retail shop displaying fmcg goods",
  sections: [
    {
      tag: "",
layout: "image-left",
heading: "Chilled & Frozen Capable",
body: "We maintain strict temperature control throughout the entire journey using refrigerated vehicles, insulated packaging, and continuous monitoring equipment. Every cold chain shipment is delivered with a full temperature log so you have documented proof of compliance. We support chilled and frozen requirements across food, beverage, pharmaceutical, and cosmetic cargo.",
image: "/images/in6.webp",
imageAlt: "Distribution warehouse with workers loading trucks",
highlight: "Temp logged every trip",
    },
    {
      tag: "",
      layout: "image-top",
      heading: "Pharma & Food Grade",
      body: "Fully compliant facilities following food safety, HACCP, and cold chain regulatory standards.Continuous temperature tracking with real time alerts to ensure product integrity at all times.",
      image: "/images/in20.webp",
      imageAlt: "Cargo ship at dock under blue sky",
      highlight: "",
    },
    {
      tag: "",
      layout: "image-left",
      heading: "Dedicated Cold Storage Facilities",
      body: "Purpose built refrigerated and frozen warehouses with controlled zones to maintain product integrity end to end.",
      image: "/images/in18.webp",
      imageAlt: "Red and blue cargo containers",
      highlight: "",
    },
    {
      tag: "",
      layout: "image-bottom",
      heading: "Refrigerated Distribution",
      body: "Seamless coordination between cold storage and temperature-controlled transportation networks.",
      image: "/images/s24.webp",
      imageAlt: "Truck on bridge at night, motion blur",
      highlight: "Felxible Management",
    },
  ],
  faqs: [
    {
      q: "What temperature ranges can you maintain?",
      a: "We support a range of temperature-controlled environments from chilled (2–8°C) to frozen (below -18°C), depending on your product requirements.",
    },
    {
      q: "What types of goods are suitable for cold chain logistics?",
      a: "Fresh produce, dairy, meat, seafood, pharmaceuticals, cosmetics, and any product that requires temperature integrity during transit and storage.",
    },
    {
      q: "How do you ensure temperature isn't compromised during transit?",
      a: "We use refrigerated vehicles and insulated packaging, with continuous temperature monitoring throughout the journey. You receive a temperature log on delivery.",
    },
  ],
};

export default function TCL() {
  return (
    <>
    <SEO
       
        description={temperatureControlledLogisticsMeta.description}
        keywords={temperatureControlledLogisticsMeta.keywords}
        canonical={temperatureControlledLogisticsMeta.canonical}
        ogImage={temperatureControlledLogisticsMeta.ogImage}
      />
  <ServicePage data={globalFreight} />
  </>
  );
}
