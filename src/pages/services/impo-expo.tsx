import { ServicePage, type ServicePageData } from "./ServicePage"
import { SEO } from "../../components/SEO";
import { importExportLogisticsMeta } from "../data/seoMeta"

const globalFreight: ServicePageData = {
  heroTag: "Import-Export",
  heading: "Cross-border, handled completely.",
  subheading: "Import and export services across the Middle East and Southeast Asia,  documentation, compliance, and coordination managed for you.",
  heroImage: "/images/s1.webp",
  heroImageAlt: "Cargo ship at port during night",
  sections: [
    {
      tag: "Customs Clearance",
layout: "image-left",
heading: "Import & Export Handling",
body: "We manage the full process on both sides of the border. From preparing your shipping documents and customs declarations to coordinating with carriers and local authorities, we make sure your goods move without delays, fines, or last minute surprises. Whether you're bringing goods in or sending them out, we handle every step.",
image: "/images/s9.webp",
imageAlt: "Customs officer inspecting cargo at border checkpoint",
highlight: "15+ countries served",
    },
    {
      tag: "",
      layout: "image-top",
      heading: "Customs Clearance & Trade Documentation",
      body: "Navigate complex customs regulations with confidence. Our trade specialists manage all documentation requirements, including commercial invoices, packing lists, certificates of origin, and harmonized tariff codes. We handle duty calculations, tariff classifications, and communicate directly with customs authorities to expedite clearance. With deep expertise in trade laws across multiple countries, we ensure accurate filings and reduce the risk of delays or penalties.",
      image: "/images/s5.webp",
      imageAlt: "Cargo ship at dock under blue sky",
      highlight: "",
    },
    {
      tag: "",
      layout: "image-left",
      heading: "Cargo Preparation & Export Readiness",
      body: "Ensure your shipments meet international standards from the moment they leave your facility. We provide expert guidance on proper packaging, secure labeling, compliance with country specific requirements, and quality inspections. Our team verifies hazmat compliance, weight distribution, and documentation accuracy. This proactive approach prevents costly rejections at borders and ensures your goods arrive in perfect condition, ready for market.",
      image: "/images/s4.webp",
      imageAlt: "Red and blue cargo containers",
      highlight: "Multi Country Compliance",
    },
    {
      tag: "",
      layout: "image-bottom",
      heading: "Shipment Tracking & Trade Visibility",
      body: "Gain complete end to end visibility into every shipment moving through our network. Our advanced tracking system provides real time status updates, milestone notifications, and document visibility throughout the entire transit journey. Monitor customs clearance progress, port movements, and last mile delivery with precision. Access detailed shipment reports anytime, anywhere keeping you and your customers informed every step of the way.",
      image: "/images/s26.webp",
      imageAlt: "Truck on bridge at night, motion blur",
      highlight: "98% On-Time Rate",
    },
  ],
  faqs: [
    {
      q: "What countries do you import and export to?",
      a: " We currently serve 15+ countries across the Middle East and Southeast Asia, with the ability to coordinate shipments to other regions through our carrier network.",
    },
    {
      q: "How long does an import or export shipment take?",
      a: "Transit times depend on origin, destination, and shipping method. Sea freight typically takes 7–21 days, air freight 2–5 days, and land transport varies by route.",
    },
    {
      q: "Do you handle the paperwork and documentation?",
      a: "Yes, completely. We prepare and manage all required shipping documents, customs declarations, and regulatory paperwork on your behalf.",
    },
  ],
};

export default function ImpoExpo() {
  return (
  <>
  <SEO
        
        description={importExportLogisticsMeta.description}
        keywords={importExportLogisticsMeta.keywords}
        canonical={importExportLogisticsMeta.canonical}
        ogImage={importExportLogisticsMeta.ogImage}
      />
  <ServicePage data={globalFreight} />
  </>
  );
}
