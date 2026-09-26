import { useState } from "react";
import { SEO } from "../../components/SEO";

/* ─── color tokens (matches App.tsx palette) ─────────────── */
const C = {
  inkBlack:       "#031926",
  darkTeal:       "#254D58",
  teal:           "#468189",
  mutedTeal:      "#77aca2",
  lightMutedTeal: "#bbd6d1",
  bone:           "#e0ddcf",
  parchment:      "#f1f0ea",
  ivory:          "#F5FBEF",
};

const BG    = C.ivory;
const FG    = C.inkBlack;
const MUTED = C.darkTeal;
const SUBTLE = "#336159"; // was C.mutedTeal (#77aca2), 2.4:1 on ivory — darkened to pass WCAG AA
const RULE  = `1px solid ${C.bone}`;

const TAG: React.CSSProperties = {
  fontSize: "0.68rem",
  letterSpacing: "0.25em",
  textTransform: "uppercase",
  color: SUBTLE,
};

/* ─── types ─────────────────────────────────────────────── */
export interface ServiceSection {
  tag: string;
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  /** "image-right" | "image-left" | "image-top" | "image-bottom" */
  layout: "image-right" | "image-left" | "image-top" | "image-bottom";
  highlight?: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServicePageData {
  heroTag: string;
  heading: string;
  subheading: string;
  heroImage: string;
  heroImageAlt: string;
  sections: ServiceSection[];
  faqs?: ServiceFaq[];
}

/* ─── LabelRow ───────────────────────────────────────────── */
function LabelRow({ left, right }: { left: string; right: string }) {
  return (
    <div
      className="px-8 md:px-16 lg:px-24 py-5 flex items-center gap-5"
      style={{ borderBottom: RULE }}
    >
      <span style={TAG}>{left}</span>
      <div style={{ flex: 1, height: "1px", backgroundColor: C.parchment }} />
      <span style={TAG}>{right}</span>
    </div>
  );
}

/* ─── FAQ accordion ──────────────────────────────────────── */
function FaqBlock({ items }: { items: ServiceFaq[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section style={{ borderBottom: RULE }}>
      <LabelRow left="—" right="FAQ" />
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ borderBottom: RULE }}>

        {/* Left anchor */}
        <div
          className="px-8 md:px-16 lg:px-24 py-20 lg:py-28 flex flex-col justify-between bg-[#bbd6d1]/30"
          style={{ borderRight: RULE, minHeight: "360px" }}
        >
          <div>
            <p style={{ ...TAG, marginBottom: "1.4rem" }}>Questions</p>
            {/* SAMPLE DATA — replace FAQ heading */}
            <h2
              className="font-sentient font-light"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.8rem)",
                fontWeight: 600,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                color: FG,
                marginBottom: "0",
              }}
            >
              Not Sure Which Solution Suits Your Needs?
            </h2>
            {/* END SAMPLE DATA */}
          </div>
          <p className="md:text-xl text-lg" style={{ lineHeight: 1.8, color: MUTED, maxWidth: "24rem", marginTop: "2rem" }}>
            Everything you need to know about working with us
          </p>
        </div>

        {/* Right accordion */}
        <div className="px-8 md:px-16 lg:px-20 py-12 lg:py-20">
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {items.map((item, i) => (
              <li key={i} style={{ borderBottom: RULE }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    padding: "1.4rem 0",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1.5rem",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    className="md:text-xl text-lg"
                    style={{
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
                  <span style={{ position: "relative", width: "18px", height: "18px", flexShrink: 0, marginTop: "3px" }}>
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
                  <p style={{ fontSize: "1rem", lineHeight: 1.85, color: MUTED, paddingBottom: "1.5rem", maxWidth: "38rem" }}>
                    {item.a}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─── section layouts ────────────────────────────────────── */
function ServiceSectionBlock({ s }: { s: ServiceSection }) {

  /* ── image-right / image-left ── */
  if (s.layout === "image-right" || s.layout === "image-left") {
    const imgRight = s.layout === "image-right";
    return (
      <section style={{ borderBottom: RULE }}>
        <LabelRow left="—" right={s.tag} />
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Text */}
          <div
            className={`px-8 md:px-16 lg:px-24 py-20 lg:py-28 flex flex-col justify-between ${imgRight ? "" : "lg:order-2"}`}
            style={{ borderRight: imgRight ? RULE : "none", borderLeft: !imgRight ? RULE : "none", minHeight: "480px" }}
          >
            <div>
              <h2
                className="font-sentient font-light"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3.8rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.05,
                  color: FG,
                  marginBottom: "1.75rem",
                  whiteSpace: "pre-line",
                }}
              >
                {s.heading}
              </h2>
              <p className="font-generalsans font-regular" style={{ fontSize: "1.1rem", lineHeight: 1.85, color: MUTED, maxWidth: "32rem" }}>
                {s.body}
              </p>
            </div>

            {s.highlight && (
              <div className="font-generalsans" style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: RULE }}>
                <span style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)", fontWeight: 400, letterSpacing: "-0.04em", color: C.darkTeal, display: "block", lineHeight: 1, marginBottom: "0.4rem" }}>
                  {s.highlight}
                </span>
                <span style={{ ...TAG }}>{s.tag}</span>
              </div>
            )}
          </div>

          {/* Image */}
          <div
            className={`relative overflow-hidden ${!imgRight ? "lg:order-1" : ""}`}
            style={{ minHeight: "480px", backgroundColor: C.lightMutedTeal }}
          >
            <img
              src={s.image}
              alt={s.imageAlt}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.85) saturate(0.9)" }}
            />
          </div>
        </div>
      </section>
    );
  }

  /* ── image-top ── */
  if (s.layout === "image-top") {
    return (
      <section style={{ borderBottom: RULE }}>

        <div style={{ position: "relative", height: "clamp(260px, 38vw, 500px)", overflow: "hidden", backgroundColor: C.lightMutedTeal, borderBottom: RULE }}>
          <img
            src={s.image}
            alt={s.imageAlt}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.85) saturate(0.9)" }}
          />
          <div style={{ position: "absolute", top: 0, bottom: 0, left: "33%", width: "1px", backgroundColor: "rgba(255,255,255,0.18)" }} />
        </div>

        <div className="px-8 md:px-16 lg:px-24 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-2" />
          <div className="lg:col-span-5">
            <h2
              className="font-sentient font-regular"
              style={{ fontSize: "clamp(3.2rem, 3vw, 3.2rem)", fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.08, color: FG, whiteSpace: "pre-line" }}
            >
              {s.heading}
            </h2>
            {s.highlight && (
              <div className="font-generalsans" style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: RULE }}>
                <span style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 400, letterSpacing: "-0.04em", color: C.darkTeal, display: "block", lineHeight: 1 }}>
                  {s.highlight}
                </span>
              </div>
            )}
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-start font-generalsans" style={{ borderLeft: RULE, paddingLeft: "2rem" }}>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.85, color: MUTED }}>{s.body}</p>
          </div>
        </div>
      </section>
    );
  }

  /* ── image-bottom ── */
  return (
    <section style={{ borderBottom: RULE }}>

      <div className="px-8 md:px-16 lg:px-24 py-16 lg:py-20 flex flex-col md:flex-row md:items-end gap-10 md:gap-20" style={{ borderBottom: RULE }}>
        <h2
          className="font-sentient font-regular"
          style={{ fontSize: "clamp(4.2rem, 4vw, 4.5rem)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.02, color: FG, flex: "0 0 auto", maxWidth: "12ch", whiteSpace: "pre-line" }}
        >
          {s.heading}
        </h2>
        <div style={{ flex: 1, maxWidth: "36rem" }}>
          <p className="font-generalsans" style={{ fontSize: "0.95rem", lineHeight: 1.85, color: MUTED }}>{s.body}</p>
          {s.highlight && (
            <div className="font-generalsans" style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: RULE, display: "flex", alignItems: "baseline", gap: "1rem" }}>
              <span style={{ fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 400, letterSpacing: "-0.04em", color: C.darkTeal, lineHeight: 1 }}>{s.highlight}</span>
              <span style={{ ...TAG }}>{s.tag}</span>
            </div>
          )}
        </div>
      </div>

      <div style={{ position: "relative", height: "clamp(240px, 35vw, 480px)", overflow: "hidden", backgroundColor: C.lightMutedTeal }}>
        <img
          src={s.image}
          alt={s.imageAlt}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.85) saturate(0.9)" }}
        />
        <div style={{ position: "absolute", top: "66%", left: 0, right: 0, height: "1px", backgroundColor: "rgba(255,255,255,0.15)" }} />
      </div>
    </section>
  );
}

/* ─── main export ────────────────────────────────────────── */
export function ServicePage({ data }: { data: ServicePageData }) {
  const canonical = typeof window !== "undefined"
    ? `https://saudexglobal.com${window.location.pathname}`
    : "https://saudexglobal.com/services/";

  const faqSchema = data.faqs?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  } : undefined;

  return (
    <div style={{ backgroundColor: BG, color: FG }}>
      <SEO
        title={`${data.heading.replace(/\n/g, " ")} | SAUDEX GLOBAL`}
        description={data.subheading}
        canonical={canonical}
        ogImage="https://saudexglobal.com/images/indus.webp"
        schemaMarkup={faqSchema}
      />

      {/* ── HERO ────────────────────────────────────────── */}
      <section style={{ borderBottom: RULE, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", height: "clamp(460px, 80vh, 800px)" }}>
          <img
            src={data.heroImage}
            alt={data.heroImageAlt}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 40%",
              filter: "brightness(0.55) saturate(0.75)",
            }}
          />

          {/* Diagonal rule overlays */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} preserveAspectRatio="none">
            <line x1="0" y1="100%" x2="44%" y2="0" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="0" y1="100%" x2="70%" y2="0" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </svg>

          {/* Heading — bottom left */}
          <div className="font-sentient font-light absolute px-8 md:px-16 lg:px-24" style={{ bottom: "3.5rem", left: 0, right: 0 }}>
            <h1
              style={{
                fontSize: "clamp(3.8rem, 9.5vw, 11rem)",
                fontWeight: 400,
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                color: C.ivory,
                whiteSpace: "pre-line",
                maxWidth: "14ch",
              }}
            >
              {data.heading}
            </h1>
          </div>
        </div>

        {/* Sub-strip */}
        <div
          className="px-8 md:px-16 lg:px-24 py-7 flex flex-col md:flex-row md:items-center justify-between gap-4"
          style={{ borderTop: RULE }}
        >
          <p className="font-generalsans font-medium" style={{ fontSize: "1.5rem", fontWeight: 500, letterSpacing: "-0.01em", color: MUTED, maxWidth: "48ch", lineHeight: 1.5 }}>
            {data.subheading}
          </p>
          <span style={{ ...TAG, whiteSpace: "nowrap" }}>{data.heroTag}</span>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ─────────────────────────────── */}
      {data.sections.map((s, i) => (
        <ServiceSectionBlock key={i} s={s} />
      ))}

      {/* ── FAQ ──────────────────────────────────────────── */}
      {data.faqs && data.faqs.length > 0 && <FaqBlock items={data.faqs} />}
    </div>
  );
}
