import { useState } from "react";
import BlurText from "../../../components/blurtext";
/* ─── types ─────────────────────────────────────────────── */
export interface ServiceSection {
  tag: string;
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  /** "image-right" | "image-left" | "image-top" | "image-bottom" */
  layout: "image-right" | "image-left" | "image-top" | "image-bottom";
  highlight?: string; // optional single bold callout stat or phrase
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
  sections: ServiceSection[];   // 2–4 items
  faqs?: ServiceFaq[];          // optional
}

/* ─── tokens ─────────────────────────────────────────────── */
const BG = "#050f0f";
const FG = "#e8ede8";
const D = (o: number) => `rgba(232,237,232,${o})`;
const RULE = `1px solid ${D(0.08)}`;

const TAG: React.CSSProperties = {
  fontSize: "0.68rem",
  letterSpacing: "0.25em",
  textTransform: "uppercase",
  color: D(0.28),
};

/* ─── LabelRow ───────────────────────────────────────────── */
function LabelRow({ left, right }: { left: string; right: string }) {
  return (
    <div
      className="px-8 md:px-16 lg:px-24 py-5 flex items-center gap-5"
      style={{ borderBottom: RULE }}
    >
      <span style={TAG}>{left}</span>
      <div style={{ flex: 1, height: "1px", backgroundColor: D(0.07) }} />
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
          className="px-8 md:px-16 lg:px-24 py-20 lg:py-28 flex flex-col justify-between"
          style={{ borderRight: RULE, minHeight: "360px" }}
        >
          <div>
            <p style={{ ...TAG, color: D(0.28), marginBottom: "1.4rem" }}>Questions</p>
             <BlurText
  text="Not Sure Which Solution Suits Your Needs?"
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
          </div>
          <p style={{ fontSize: "1.5rem", lineHeight: 1.8, color: D(0.38), maxWidth: "24rem", marginTop: "2rem" }}>
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
                    style={{
                      fontSize: "clamp(0.88rem, 1.3vw, 1rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.4,
                      color: open === i ? FG : D(0.65),
                      transition: "color 0.2s",
                      flex: 1,
                    }}
                  >
                    {item.q}
                  </span>
                  {/* +/− */}
                  <span style={{ position: "relative", width: "18px", height: "18px", flexShrink: 0, marginTop: "3px" }}>
                    <span style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", backgroundColor: D(0.35), transform: "translateY(-50%)" }} />
                    <span style={{
                      position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px",
                      backgroundColor: D(0.35),
                      transform: `translateX(-50%) scaleY(${open === i ? 0 : 1})`,
                      transition: "transform 0.3s ease",
                    }} />
                  </span>
                </button>
                <div style={{ overflow: "hidden", maxHeight: open === i ? "200px" : "0px", transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)" }}>
                  <p style={{ fontSize: "1rem", lineHeight: 1.85, color: D(0.38), paddingBottom: "1.5rem", maxWidth: "38rem" }}>
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

/* ─── individual section layouts ─────────────────────────── */
function ServiceSectionBlock({ s }: { s: ServiceSection }) {

  /* ── image-right / image-left  (side-by-side) ── */
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
                className="font-clash font-semibold"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3.8rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.05,
                  color: FG,
                  marginBottom: "1.75rem",
                  whiteSpace: "pre-line",
                }}
              >
                {s.heading}
              </h2>

              <p className="font-archivo font-medium" style={{ fontSize: "1.1rem", lineHeight: 1.85, color: D(0.45), maxWidth: "32rem" }}>
                {s.body}
              </p>
            </div>

            {s.highlight && (
              <div className="font-archivo font-regular " style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: RULE }}>
                <span
                  style={{
                    fontSize: "clamp(1.8rem, 3vw, 3rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.04em",
                    color: FG,
                    display: "block",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}
                >
                  {s.highlight}
                </span>
                <span style={{ ...TAG, color: D(0.28) }}>{s.tag}</span>
              </div>
            )}
          </div>

          {/* Image */}
          <div
            className={`relative overflow-hidden ${!imgRight ? "lg:order-1" : ""}`}
            style={{ minHeight: "480px", backgroundColor: "#0d1f1f" }}
          >
            <img
              src={s.image}
              alt={s.imageAlt}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.65)",
              }}
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

        {/* Full-width image strip */}
        <div style={{ position: "relative", height: "clamp(260px, 38vw, 500px)", overflow: "hidden", backgroundColor: "#0d1f1f", borderBottom: RULE }}>
          <img
            src={s.image}
            alt={s.imageAlt}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.6)",
            }}
          />
          {/* Vertical rule at 1/3 */}
          <div style={{ position: "absolute", top: 0, bottom: 0, left: "33%", width: "1px", backgroundColor: D(0.1) }} />
        </div>

        {/* Text below — 3-column offset */}
        <div className="px-8 md:px-16 lg:px-24 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-2">
          </div>
          <div className="lg:col-span-5">
            <h2
            className="font-clash font-semibold"
              style={{
                fontSize: "clamp(3.2rem, 3vw, 3.2rem)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
                lineHeight: 1.08,
                color: FG,
                whiteSpace: "pre-line",
              }}
            >
              {s.heading}
            </h2>
            {s.highlight && (
              <div className="font-archivo font-regular"style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: RULE }}>
                <span style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 400, letterSpacing: "-0.04em", color: FG, display: "block", lineHeight: 1 }}>{s.highlight}</span>
              </div>
            )}
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-start font-archivo font-regular" style={{ borderLeft: RULE, paddingLeft: "2rem" }}>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.85, color: D(0.42) }}>{s.body}</p>
          </div>
        </div>
      </section>
    );
  }

  /* ── image-bottom ── */
  return (
    <section style={{ borderBottom: RULE }}>

      {/* Text above */}
      <div className="px-8 md:px-16 lg:px-24 py-16 lg:py-20 flex flex-col md:flex-row md:items-end gap-10 md:gap-20" style={{ borderBottom: RULE }}>
        <h2
        className="font-clash font-semibold"
          style={{
            fontSize: "clamp(4.2rem, 4vw, 4.5rem)",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            lineHeight: 1.02,
            color: FG,
            flex: "0 0 auto",
            maxWidth: "12ch",
            whiteSpace: "pre-line",
          }}
        >
          {s.heading}
        </h2>
        <div style={{ flex: 1, maxWidth: "36rem" }}>
          <p className="font-archivo font-regular" style={{ fontSize: "0.95rem", lineHeight: 1.85, color: D(0.42) }}>{s.body}</p>
          {s.highlight && (
            <div className="font-archivo font-regular" style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: RULE, display: "flex", alignItems: "baseline", gap: "1rem" }}>
              <span style={{ fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 400, letterSpacing: "-0.04em", color: FG, lineHeight: 1 }}>{s.highlight}</span>
              <span style={{ ...TAG, color: D(0.28) }}>{s.tag}</span>
            </div>
          )}
        </div>
      </div>

      {/* Full-width image below */}
      <div style={{ position: "relative", height: "clamp(240px, 35vw, 480px)", overflow: "hidden", backgroundColor: "#0d1f1f" }}>
        <img
          src={s.image}
          alt={s.imageAlt}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.6)",
          }}
        />
        {/* Horizontal rule at 2/3 height */}
        <div style={{ position: "absolute", top: "66%", left: 0, right: 0, height: "1px", backgroundColor: D(0.1) }} />
      </div>
    </section>
  );
}

/* ─── main export ────────────────────────────────────────── */
export function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <div style={{ backgroundColor: BG, color: FG }}>

      {/* ── HERO ───────────────────────────────────────── */}
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
              filter: "brightness(0.36) saturate(0.45)",
            }}
          />

          {/* Diagonal rule overlays */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} preserveAspectRatio="none">
            <line x1="0" y1="100%" x2="44%" y2="0" stroke={D(0.11)} strokeWidth="1" />
            <line x1="0" y1="100%" x2="70%" y2="0" stroke={D(0.06)} strokeWidth="1" />
          </svg>

          {/* Heading — bottom left */}
          <div className="font-clash font-bold absolute px-8 md:px-16 lg:px-24" style={{ bottom: "3.5rem", left: 0, right: 0 }}>
            <h1
              style={{
                fontSize: "clamp(3.8rem, 9.5vw, 11rem)",
                fontWeight: 400,
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                color: FG,
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
          <p className="font-archivo font-medium" style={{ fontSize: "1.5rem", fontWeight: 500, letterSpacing: "-0.01em", color: D(0.55), maxWidth: "48ch", lineHeight: 1.5 }}>
            {data.subheading}
          </p>
          <span style={{ ...TAG, color: D(0.22), whiteSpace: "nowrap" }}>{data.heroTag}</span>
        </div>
      </section>
    
      {/* ── SERVICE SECTIONS ───────────────────────────── */}
      {data.sections.map((s, i) => (
        <ServiceSectionBlock key={i} s={s} />
      ))}


      {/* ── FAQ ────────────────────────────────────────── */}
      {data.faqs && data.faqs.length > 0 && <FaqBlock items={data.faqs} />}
    </div>
  );
}
