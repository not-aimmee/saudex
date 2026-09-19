import { useState } from "react";

/* ─── color tokens (matches App.tsx palette) ─────────────── */
const C = {
  inkBlack:       "#031926",
  darkTeal:       "#254D58",
  teal:           "#468189",
  mutedTeal:      "#77aca2",
  lightMutedTeal: "#bbd6d1",
  vanillaCream:   "#f4e9cd",
  bone:           "#e0ddcf",
  parchment:      "#f1f0ea",
  ivory:          "#F5FBEF",
  chocolateBrown: "#9D4810",
};

const BG    = C.ivory;
const FG    = C.inkBlack;
const MUTED = C.darkTeal;
const SUBTLE= C.mutedTeal;
const RULE  = `1px solid ${C.bone}`;

/* ─── SAMPLE DATA — remove / replace with your own ──────── */
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
/* ─── END SAMPLE DATA (faqs) ────────────────────────────── */

/* ─── SAMPLE DATA — remove / replace with your own ──────── */
const services = [
  {
    index: "01",
    label: "Core Logistics Services",
    heading: "The Foundation of Every Shipment We Handle",
    description:
      "These are the services that keep cargo moving \n From the moment it leaves origin to when it reaches its destination. Whether you're shipping locally or internationally, these are the building blocks of every operation we run.",
    details: ["Freight Forwarding", "Import - Export", "Distribution", "Customs Clearance"],
    sideheading: "Services in this Section",
    image: "/images/s2.webp",
    imageAlt: "Aerial view of shipping container yard",
    imageRight: true,
  },
  {
    index: "02",
    label: "Specialized & Value-Added Services",
    heading: "Going beyond the shipment to protect and optimize your operations",
    description:
      "For businesses with more specific requirements, we offer services that add an extra layer of care, control, and strategy to your supply chain \n from temperature sensitive cargo to long term operational consulting.",
    details: ["Cold Chain", "FMCG Distribution", "Warehousing", "Supply Chain Logistics"],
    sideheading: "Services in this Section",
    image: "/images/s21.webp",
    imageAlt: "Cargo ship at sea with containers",
    imageRight: false,
  },
];
/* ─── END SAMPLE DATA (services) ────────────────────────── */

/* ─── SAMPLE DATA — remove / replace with your own ──────── */
const heroPills = [
  "Freight Forwarding",
  "E-Commerce",
  "Supply Chain Logistics",
  "Retail & Wholesale",
];
/* ─── END SAMPLE DATA (heroPills) ───────────────────────── */

/* ─── FaqList ────────────────────────────────────────────── */
function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item, i) => (
        <li key={i} style={{ borderBottom: RULE }}>
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
                color: open === i ? C.teal : FG,
                transition: "color 0.2s",
                flex: 1,
              }}
            >
              {item.q}
            </span>
            <span style={{ width: "20px", height: "20px", flexShrink: 0, position: "relative", marginTop: "2px" }}>
              <span style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", backgroundColor: C.lightMutedTeal, transform: "translateY(-50%)" }} />
              <span style={{
                position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px",
                backgroundColor: C.lightMutedTeal,
                transform: `translateX(-50%) scaleY(${open === i ? 0 : 1})`,
                transition: "transform 0.3s ease",
              }} />
            </span>
          </button>
          <div style={{ overflow: "hidden", maxHeight: open === i ? "200px" : "0px", transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)" }}>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: MUTED, paddingBottom: "1.75rem", maxWidth: "36rem" }}>
              {item.a}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ─── ServicePage ────────────────────────────────────────── */
export default function Service() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: BG, color: FG }}>

      {/* ── PAGE INTRO ──────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 lg:px-24 pt-24 pb-20"
        style={{ borderBottom: RULE }}
      >
        <div className="flex flex-col md:flex-row md:items-end font-clash font-semibold md:justify-between gap-10">
          <div>
            {/* SAMPLE DATA — replace eyebrow text */}
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.28em", textTransform: "uppercase", color: SUBTLE, marginBottom: "1.5rem" }}>
              Our Services
            </p>
            {/* SAMPLE DATA — replace hero heading */}
            <h1
              className="font-clash font-semibold"
              style={{ fontSize: "clamp(3.5rem, 8vw, 8.5rem)", fontWeight: 600, lineHeight: 0.9, letterSpacing: "-0.035em", color: FG }}
            >
              Built for<br />movement.
            </h1>
            {/* END SAMPLE DATA */}
          </div>

          <div style={{ maxWidth: "22rem" }}>
            {/* SAMPLE DATA — replace subtitle */}
            <p className="font-archivo font-medium" style={{ fontSize: "1.3rem", lineHeight: 1.85, color: MUTED }}>
              End-to-end logistics solutions built for businesses that move
            </p>
            {/* END SAMPLE DATA */}

            {/* SAMPLE DATA — replace pill list (heroPills) */}
            <div className="mt-10 pt-8" style={{ borderTop: RULE }}>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
                {heroPills.map((pill) => (
                  <li key={pill} className="flex items-center gap-3">
                    <span style={{ width: "16px", height: "1px", backgroundColor: C.lightMutedTeal, flexShrink: 0 }} />
                    <span style={{ fontSize: "0.75rem", letterSpacing: "0.06em", color: SUBTLE }}>
                      {pill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* END SAMPLE DATA */}
          </div>
        </div>
      </section>

      {/* ── SERVICE SECTIONS (driven by `services` array) ───── */}
      {services.map((service) => (
        <section
          key={service.index}
          style={{ borderBottom: RULE }}
          onMouseEnter={() => setHoveredService(service.index)}
          onMouseLeave={() => setHoveredService(null)}
        >
          {/* Label row */}
          <div
            className="px-8 md:px-16 lg:px-24 py-6 flex items-center gap-6"
            style={{ borderBottom: RULE }}
          >
            <div style={{ height: "1px", flex: 1, backgroundColor: C.bone }} />
            <span
              className="font-clash font-semibold"
              style={{ fontSize: "0.88rem", letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED }}
            >
              {service.label}
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Text panel */}
            <div
              className={`font-clash px-8 md:px-16 lg:px-24 py-20 lg:py-32 flex flex-col justify-between ${!service.imageRight ? "lg:order-2" : ""}`}
              style={{
                minHeight: "520px",
                borderRight: service.imageRight ? RULE : "none",
                borderLeft: !service.imageRight ? RULE : "none",
              }}
            >
              <div>
                {/* Ghost index */}
                <div style={{ fontSize: "clamp(6rem, 13vw, 13rem)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.05em", color: `rgba(37,77,88,0.05)`, userSelect: "none", marginBottom: "1.5rem" }}>
                  {service.index}
                </div>

                <h2
                  className="font-archivo font-medium"
                  style={{ fontSize: "clamp(2.4rem, 4.5vw, 4.8rem)", fontWeight: 700, lineHeight: 1.04, letterSpacing: "-0.025em", color: FG, whiteSpace: "pre-line", marginBottom: "2rem" }}
                >
                  {service.heading}
                </h2>

                <p
                  className="font-archivo font-medium"
                  style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, maxWidth: "50rem" }}
                >
                  {service.description}
                </p>
              </div>

              <div style={{ marginTop: "4rem" }}>
                <div className="flex items-end gap-3 mb-8" style={{ paddingBottom: "1.5rem", borderBottom: RULE }}>
                  <span
                    className="font-archivo font-medium"
                    style={{ fontSize: "1.4rem", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1, color: MUTED }}
                  >
                    {service.sideheading}
                  </span>
                </div>

                <ul className="grid grid-cols-2 gap-y-3 gap-x-6 mb-10">
                  {service.details.map((d) => (
                    <li key={d} className="flex items-center gap-3">
                      <span style={{ width: "16px", height: "1px", backgroundColor: C.lightMutedTeal, flexShrink: 0 }} />
                      <span className="font-archivo" style={{ fontSize: "0.99rem", letterSpacing: "0.06em", color: SUBTLE }}>
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
                    if (text) text.style.color = C.chocolateBrown;
                  }}
                  onMouseLeave={(e) => {
                    const line = e.currentTarget.querySelector(".cta-line") as HTMLElement;
                    if (line) line.style.width = "40px";
                    const text = e.currentTarget.querySelector(".cta-text") as HTMLElement;
                    if (text) text.style.color = FG;
                  }}
                >
                  <span className="cta-text" style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: FG, transition: "color 0.3s" }}>
                    Learn more
                  </span>
                  <span className="cta-line" style={{ height: "1px", width: "40px", backgroundColor: C.teal, transition: "width 0.4s ease" }} />
                </a>
              </div>
            </div>

            {/* Image */}
            <div
              className={`relative overflow-hidden ${!service.imageRight ? "lg:order-1" : ""}`}
              style={{ minHeight: "580px", backgroundColor: C.lightMutedTeal }}
            >
              <img
                src={service.image}
                alt={service.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
                  transform: hoveredService === service.index ? "scale(1.04)" : "scale(1)",
                  filter: "brightness(0.85) saturate(0.9)",
                }}
              />
            </div>
          </div>
        </section>
      ))}

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section style={{ borderBottom: RULE }}>
        {/* Label row */}
        <div className="px-8 md:px-16 lg:px-24 py-6 flex items-center gap-6" style={{ borderBottom: RULE }}>
          <div style={{ height: "1px", flex: 1, backgroundColor: C.bone }} />
          <span style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: SUBTLE }}>
            FAQ
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left anchor */}
          <div
            className="px-8 md:px-16 lg:px-24 py-20 lg:py-28 flex flex-col justify-between"
            style={{ borderRight: RULE, minHeight: "400px", backgroundColor: C.parchment }}
          >
            <div>
              <p className="font-archivo font-medium" style={{ fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: SUBTLE, marginBottom: "1.5rem" }}>
                Frequently Asked Questions
              </p>
              {/* SAMPLE DATA — replace FAQ heading */}
              <h2
                className="font-clash font-bold"
                style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.05, color: FG, marginBottom: "1.5rem" }}
              >
                Not Sure Which Service You Need?
              </h2>
              {/* END SAMPLE DATA */}
              <p className="md:text-xl text-lg font-archivo font-medium tracking-wide" style={{ lineHeight: 2, color: MUTED, maxWidth: "22rem" }}>
                Everything you need to know about working with us
              </p>
            </div>

            <div style={{ marginTop: "3rem" }}>
              <div style={{ height: "1px", backgroundColor: C.bone, marginBottom: "1.5rem" }} />
              <a
                style={{ textDecoration: "none" }}
                onMouseEnter={(e) => {
                  const t = e.currentTarget.querySelector("span") as HTMLElement;
                  if (t) { t.style.color = SUBTLE; t.style.borderColor = SUBTLE; }
                }}
                onMouseLeave={(e) => {
                  const t = e.currentTarget.querySelector("span") as HTMLElement;
                  if (t) { t.style.color = FG; t.style.borderColor = FG; }
                }}
              >
                <span style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: FG, borderBottom: `1px solid ${FG}`, transition: "color 0.25s, border-color 0.25s" }}>
                  Talk to Us
                </span>
              </a>
            </div>
          </div>

          {/* Right accordion */}
          <div className="px-8 md:px-16 lg:px-24 py-20 lg:py-28 font-archivo">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

    </div>
  );
}
