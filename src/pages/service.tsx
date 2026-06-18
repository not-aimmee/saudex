import { useState } from "react";
import BlurText from "../../components/blurtext";

const faqs = [
  {
    q: "Do you handle both import and export shipments?",
    a: "Yes. We manage both directions, whether you're bringing goods into the country or shipping out to international markets, we handle documentation, customs, and logistics end-to-end.",
  },
  {
    q: "What shipping methods do you offer?",
    a: "We offer air freight, sea freight, and land transport. Depending on your cargo type, timeline, and budget, we'll recommend the most suitable option or a combination of methods.",
  },
  {
    q: "Can you handle large or oversized cargo?",
    a: "Yes. We have experience handling standard, oversized, and heavy cargo. Just provide us with the dimensions and weight when requesting a quote and we'll plan accordingly.",
  },
  {
    q: "How do I get a quote?",
    a: "Fill out our Contact Us form with your origin, destination, cargo type, and weight. Our team will get back to you within 24 hours with a competitive, transparent quote.",
  },
  {
    q: "What documents are required for international shipments?",
    a: "Requirements vary by country and cargo type, but typically include a commercial invoice, packing list, bill of lading or airway bill, and customs declaration. Our team will guide you through exactly what's needed for your specific shipment.",
  },
];

function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item, i) => (
        <li
          key={i}
          style={{ borderBottom: "1px solid rgba(232,237,232,0.08)" }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              background: "none",
              border: "none",
              padding: "1.5rem 0",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "1.5rem",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <span
              style={{
                fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                lineHeight: 1.4,
                color: open === i ? "#e8ede8" : "#f7faf8",
                transition: "color 0.2s",
                flex: 1,
              }}
            >
              {item.q}
            </span>
            {/* Plus / minus icon */}
            <span
              style={{
                width: "20px",
                height: "20px",
                flexShrink: 0,
                position: "relative",
                marginTop: "2px",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  height: "1px",
                  backgroundColor: "rgba(232,237,232,0.4)",
                  transform: "translateY(-50%)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  backgroundColor: "rgba(232,237,232,0.4)",
                  transform: `translateX(-50%) scaleY(${open === i ? 0 : 1})`,
                  transition: "transform 0.3s ease",
                }}
              />
            </span>
          </button>

          {/* Answer */}
          <div
            style={{
              overflow: "hidden",
              maxHeight: open === i ? "200px" : "0px",
              transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            <p
              style={{
                fontSize: "0.88rem",
                lineHeight: 1.85,
                color: "rgba(232,237,232,0.4)",
                paddingBottom: "1.75rem",
                maxWidth: "36rem",
              }}
            >
              {item.a}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}


const services = [
  {
    index: "",
    label: "Core Logistics Services",
    heading: "The Foundation of Every Shipment We Handle",
    description:
      "These are the services that keep cargo moving \n From the moment it leaves origin to when it reaches its destination. Whether you're shipping locally or internationally, these are the building blocks of every operation we run.",
    details: ["Freight Forwarding","Import - Export","Distribution","Customs Clearance"],
    sideheading:"Services in this Section",
    image:
      '/images/s2.webp',
    imageAlt: "Aerial view of shipping container yard",
    imageRight: true,
  },
  {
    index: "",
    label: "Specialized & Value-Added Services",
    heading: "Going beyond the shipment to protect and optimize your operations",
    description:
      "For businesses with more specific requirements, we offer services that add an extra layer of care, control, and strategy to your supply chain \n from temperature sensitive cargo to long term operational consulting.",
    details: ["Cold Chain","FMCG Distribution","Warehousing","Supply Chain Logistics"],
    sideheading:"Services in this Section",
    image:
      '/images/s21.webp',
    imageAlt: "Cargo ship at sea with containers",
    imageRight: false,
  },
];

export default function service() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: "#050f0f", color: "#e8ede8" }}
    >

      {/* Page intro */}
      <section
        className="px-8 md:px-16 lg:px-24 pt-24 pb-20"
        style={{ borderBottom: "1px solid rgba(232,237,232,0.08)" }}
      >
        <div className="flex flex-col md:flex-row md:items-end font-clash font-semibold md:justify-between gap-10">
          <div>
            <p
              style={{
                fontSize: "1.5rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(232,237,232,0.3)",
                marginBottom: "1.5rem",
              }}
            >
              Our Services
            </p>
            <h1
            className="font-clash font-semibold"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 8.5rem)",
                fontWeight: 600,
                lineHeight: 0.9,
                letterSpacing: "-0.035em",
                color: "#e8ede8",
              }}
            >
              Built for<br />movement.
            </h1>
          </div>
          <div style={{ maxWidth: "22rem" }}>
            <p className="font-archivo font-medium " style={{ fontSize: "1.3rem", lineHeight: 1.85, color: "rgba(232,237,232,0.45), tracking: wide" }}>
             End-to-end logistics solutions built for businesses that move
            </p>
            {/* Stat strip */}
            <div
              className="flex gap-8 mt-10 pt-8"
              style={{ borderTop: "1px solid rgba(232,237,232,0.1)" }}
            >
              <ul className="grid grid-cols-2 gap-y-6 gap-x-8 mb-15">
                    <li  className="flex items-center gap-4">
                      <span
                        style={{
                          width: "16px",
                          height: "1px",
                          backgroundColor: "rgba(232,237,232,0.2)",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: "0.75rem",
                          letterSpacing: "0.06em",
                          color: "rgba(232,237,232,0.4)",
                        }}
                      >
                       Freight Forwarding
                      </span>
                      <span
                        style={{
                          width: "16px",
                          height: "1px",
                          backgroundColor: "rgba(232,237,232,0.2)",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: "0.75rem",
                          letterSpacing: "0.06em",
                          color: "rgba(232,237,232,0.4)",
                        }}
                      >
                       E-Commerce
                      </span>
                      <span
                        style={{
                          width: "16px",
                          height: "1px",
                          backgroundColor: "rgba(232,237,232,0.2)",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: "0.75rem",
                          letterSpacing: "0.06em",
                          color: "rgba(232,237,232,0.4)",
                        }}
                      >
                       Supply Chain Logistics
                      </span>
                      <span
                        style={{
                          width: "16px",
                          height: "1px",
                          backgroundColor: "rgba(232,237,232,0.2)",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: "0.75rem",
                          letterSpacing: "0.06em",
                          color: "rgba(232,237,232,0.4)",
                        }}
                      >
                       Retail & Wholesale
                      </span>
                      
                      
                    </li>
                </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service) => (
        <section
          key={service.index}
          style={{ borderBottom: "1px solid rgba(232,237,232,0.08)" }}
          onMouseEnter={() => setHoveredService(service.index)}
          onMouseLeave={() => setHoveredService(null)}
        >
          {/* Label row */}
          <div
            className="px-8 md:px-16 lg:px-24 py-6 flex items-center gap-6"
            style={{ borderBottom: "1px solid rgba(232,237,232,0.06)" }}
          >
            <div style={{ height: "2px", flex: 1, backgroundColor: "rgba(232,237,232,0.08)" }} />
            <span
            className="font-clash font-semibold"
              style={{
                fontSize: "0.88rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(232, 237, 232, 0.74)",
              }}
            >
              {service.label}
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Text */}
            <div
              className={`font-clash px-8 md:px-16 lg:px-24 py-20 lg:py-32 flex flex-col justify-between ${
                !service.imageRight ? "lg:order-2" : ""
              }`}
              style={{
                minHeight: "520px",
                borderRight: service.imageRight ? "1px solid rgba(232,237,232,0.08)" : "none",
                borderLeft: !service.imageRight ? "1px solid rgba(232,237,232,0.08)" : "none",
              }}
            >
              <div>
                {/* Ghost index */}
                <div
                  style={{
                    fontSize: "clamp(6rem, 13vw, 13rem)",
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "-0.05em",
                    color: "rgba(232,237,232,0.04)",
                    userSelect: "none",
                    marginBottom: "1.5rem",
                  }}
                >
                  {service.index}
                </div>

                <h2
                className="font-archivo font-medium"
                  style={{
                    fontSize: "clamp(2.4rem, 4.5vw, 4.8rem)",
                    fontWeight: 700,
                    lineHeight: 1.04,
                    letterSpacing: "-0.025em",
                    color: "#e8ede8",
                    whiteSpace: "pre-line",
                    marginBottom: "2rem",
                  }}
                >
                  {service.heading}
                </h2>

                <p
                className="font-archivo font-medium"
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.85,
                    color: "rgba(232,237,232,0.45)",
                    maxWidth: "50rem",
                  }}
                >
                  {service.description}
                </p>
              </div>

              <div style={{ marginTop: "4rem" }}>
                {/* Highlight stat */}
                <div
                  className="flex items-end gap-3 mb-8"
                  style={{ paddingBottom: "1.5rem", borderBottom: "1px solid rgba(232,237,232,0.08)" }}
                >
                  <span
                  className="font-archivo font-medium"
                    style={{
                      fontSize: "3rem",
                      fontWeight: 400,
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                      color: "#e8ede8",
                    }}
                  >
                    {service.sideheading}
                  </span>
                </div>

                {/* Detail list */}
                <ul className="grid grid-cols-2 gap-y-3 gap-x-6 mb-10">
                  {service.details.map((d) => (
                    <li key={d} className="flex items-center gap-3">
                      <span
                        style={{
                          width: "16px",
                          height: "1px",
                          backgroundColor: "rgba(232,237,232,0.2)",
                          flexShrink: 0,
                        }}
                      />
                      <span
                      className="font-archivo font-regular"
                        style={{
                          fontSize: "0.99rem",
                          letterSpacing: "0.06em",
                          color: "rgba(232,237,232,0.4)",
                        }}
                      >
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="inline-flex items-center gap-4 group"
                  style={{ textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    const line = e.currentTarget.querySelector(".cta-line") as HTMLElement;
                    if (line) line.style.width = "64px";
                    const text = e.currentTarget.querySelector(".cta-text") as HTMLElement;
                    if (text) text.style.color = "#FF6200";
                  }}
                  onMouseLeave={(e) => {
                    const line = e.currentTarget.querySelector(".cta-line") as HTMLElement;
                    if (line) line.style.width = "40px";
                    const text = e.currentTarget.querySelector(".cta-text") as HTMLElement;
                    if (text) text.style.color = "#e8ede8";
                  }}
                >
                  <span
                    className="cta-text"
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#e8ede8",
                      transition: "color 0.3s",
                    }}
                  >
                    Learn more
                  </span>
                  <span
                    className="cta-line"
                    style={{
                      height: "1px",
                      width: "40px",
                      backgroundColor: "#e8ede8",
                      transition: "width 0.4s ease",
                    }}
                  />
                </a>
              </div>
            </div>

            {/* Image */}
            <div
              className={`relative overflow-hidden ${!service.imageRight ? "lg:order-1" : ""}`}
              style={{ minHeight: "580px", backgroundColor: "#0d1f1f" }}
            >
              <img
                src={service.image}
                alt={service.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
                  transform: hoveredService === service.index ? "scale(1.04)" : "scale(1)",
                  filter: "brightness(0.90)",
                }}
              />
            </div>
          </div>
         
        </section>
        
      ))}

      {/* FAQ section */}

      <section
        style={{ borderBottom: "1px solid rgba(232,237,232,0.08)" }}
      >
        {/* Label row */}
        <div
          className="px-8 md:px-16 lg:px-24 py-6 flex items-center gap-6"
          style={{ borderBottom: "1px solid rgba(232,237,232,0.06)" }}
        >
          <div style={{ height: "1px", flex: 1, backgroundColor: "rgba(232,237,232,0.08)" }} />
          <span
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(232,237,232,0.25)",
            }}
          >
            FAQ
          </span>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — anchor text */}
          <div
            className="px-8 md:px-16 lg:px-24 py-20 lg:py-28 flex flex-col justify-between"
            style={{
              borderRight: "1px solid rgba(232,237,232,0.08)",
              minHeight: "400px",
            }}
          >
            <div>
              <p
              className="font-archivo font-medium"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "rgba(232,237,232,0.3)",
                  marginBottom: "1.5rem",
                }}
              >
                Frequently Asked Questions
              </p>
              <BlurText
  text="Not Sure Which Service You Need?"
  delay={120}
  animateBy="words"
  direction="top"
  className="
    text-white
    font-clash
    text-center
    text-7xl
    font-bold
  "
/>

              <p
              className="font-archivo font-medium tracking-wide"
                style={{
                  fontSize: "1rem",
                  lineHeight: 2,
                  color: "rgba(232,237,232,0.4)",
                  maxWidth: "22rem",
                }}
              >
                Everything you need to know about working with us
              </p>
            </div>

            <div style={{ marginTop: "3rem" }}>
              <div style={{ height: "1px", backgroundColor: "rgba(232,237,232,0.08)", marginBottom: "1.5rem" }} />
              <a
                style={{ textDecoration: "none" }}
                onMouseEnter={(e) => {
                  const t = e.currentTarget.querySelector("span") as HTMLElement;
                  if (t) { t.style.color = "rgba(232,237,232,0.35)"; t.style.borderColor = "rgba(232,237,232,0.35)"; }
                }}
                onMouseLeave={(e) => {
                  const t = e.currentTarget.querySelector("span") as HTMLElement;
                  if (t) { t.style.color = "#e8ede8"; t.style.borderColor = "#e8ede8"; }
                }}
              >
                <span
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#e8ede8",
                    borderBottom: "1px solid #e8ede8",
                    paddingBottom: "2px",
                    transition: "color 0.25s, border-color 0.25s",
                  }}
                >
                  Talk to Us
                </span>
              </a>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="px-8 md:px-16 lg:px-24 py-20 lg:py-28 font-archivo text-[#F7FAF8] ">
            <FaqList  items={faqs} />
          </div>
        </div>
      </section>

    </div>
  );
}
