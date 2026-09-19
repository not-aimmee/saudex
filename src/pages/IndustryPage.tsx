import { useState } from "react";

/* ─── color tokens ───────────────────────────────────────── */
const C = {
  almostBlack:    "#02090f",
  inkBlack:       "#031926",
  spaceIndigo:    "#22223b",
  darkTeal:       "#254D58",
  teal:           "#468189",
  mutedTeal:      "#77aca2",
  lightMutedTeal: "#bbd6d1",
  vanillaCream:   "#f4e9cd",
  bone:           "#e0ddcf",
  parchment:      "#f1f0ea",
  ivory:          "#F5FBEF",
  almondSilk:     "#c9ada7",
  chocolateBrown: "#9D4810",
};

const BG     = C.ivory;
const FG     = C.inkBlack;
const ACCENT = C.teal;
const MUTED  = C.darkTeal;
const SUBTLE = C.mutedTeal;
const RULE   = `1px solid ${C.bone}`;

/* ─── types ─────────────────────────────────────────────── */
export interface IndustryStat {
  value: string;
  label: string;
}

export interface IndustrySection {
  index: number;
  tag: string;
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  stats?: IndustryStat[];
  callout?: string;
}

export interface IndustryChallenge {
  title: string;
  body: string;
}

export interface IndustryFaq {
  q: string;
  a: string;
}

export interface IndustryPageData {
  industry: string;
  heroEyebrow: string;
  heroHeading: string;
  heroBody: string;
  heroImage: string;
  heroImageAlt: string;
  heroStats: IndustryStat[];
  sections: IndustrySection[];
  challenges?: IndustryChallenge[];
  faqs?: IndustryFaq[];
}

/* ─── shared text styles ─────────────────────────────────── */
const TAG: React.CSSProperties = {
  fontSize: "0.65rem",
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  color: SUBTLE,
  fontFamily: "inherit",
};

const IDX: React.CSSProperties = {
  fontSize: "0.65rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: C.lightMutedTeal,
  fontVariantNumeric: "tabular-nums",
};

/* ─── MarqueeStrip ───────────────────────────────────────── */
function MarqueeStrip({ text }: { text: string }) {
  const repeated = Array(8).fill(text).join("  ·  ");
  return (
    <div
      style={{
        borderBottom: RULE,
        borderTop: RULE,
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: "0.9rem 0",
        backgroundColor: C.lightMutedTeal,
      }}
    >
      <div
        style={{
          display: "inline-block",
          animation: "marquee 28s linear infinite",
          fontSize: "0.75rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: C.chocolateBrown,
        }}
      >
        {repeated}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ─── StatCell ───────────────────────────────────────────── */
function StatCell({ stat, bordered }: { stat: IndustryStat; bordered?: boolean }) {
  return (
    <div
      style={{
        padding: "1.8rem 2rem",
        borderLeft: bordered ? RULE : "none",
        flex: 1,
      }}
    >
      <span
        style={{
          display: "block",
          fontSize: "clamp(2rem, 4vw, 3.4rem)",
          fontWeight: 300,
          letterSpacing: "-0.05em",
          lineHeight: 1,
          color: C.bone,
          marginBottom: "0.4rem",
        }}
      >
        {stat.value}
      </span>
      <span style={{ ...TAG }}>{stat.label}</span>
    </div>
  );
}

/* ─── LabelRow ───────────────────────────────────────────── */
function LabelRow({ left, right }: { left: string; right: string }) {
  return (
    <div
      className="px-8 md:px-16 lg:px-24 py-5 flex items-center gap-5"
      style={{ borderBottom: RULE }}
    >
      <span style={TAG}>{left}</span>
      <div style={{ flex: 1, height: "1px", backgroundColor: C.bone }} />
      <span style={TAG}>{right}</span>
    </div>
  );
}

/* ─── FAQ ────────────────────────────────────────────────── */
function FaqBlock({ items }: { items: IndustryFaq[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section style={{ borderBottom: RULE }}>
      <LabelRow left="—" right="FAQ" />
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ borderBottom: RULE }}>

        <div
          className="px-8 md:px-16 lg:px-24 py-20 lg:py-28 flex flex-col justify-between bg-[#bbd6d1]/40"
          style={{ borderRight: RULE, minHeight: "360px"}}
        >
          <div>
            <p style={{ ...TAG, color: C.chocolateBrown, marginBottom: "1.4rem" }}>Questions</p>
            <h2
              className="font-sentient"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.8rem)",
                fontWeight: 400,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                color: FG,
              }}
            >
              Have questions about our solutions?
            </h2>
          </div>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: MUTED, maxWidth: "24rem", marginTop: "2rem" }}>
            Find answers to the most common queries about how we serve your industry.
          </p>
        </div>

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
                    className="text-lg md:text-xl font-generalsans"
                    style={{
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.4,
                      color: '[#f5fbef]',
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

/* ─── Hero ───────────────────────────────────────────────── */
function HeroSection({ data }: { data: IndustryPageData }) {
  return (
    <section style={{ borderBottom: RULE, background: `linear-gradient(160deg, ${C.almostBlack} 0%, ${C.inkBlack} 40%, ${C.spaceIndigo} 100%)` }}>
      <div className="pt-24 grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "clamp(480px, 70vh, 760px)" }}>

        <div
          className="px-8 md:px-16 lg:px-24 flex flex-col justify-between py-14 lg:py-20"
          style={{ borderRight: RULE }}
        >
          <div>
            <div style={{ display: "flex", gap: "1.6rem", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "2px",
                  height: "clamp(80px, 12vw, 130px)",
                  background: `linear-gradient(to bottom, ${ACCENT}, transparent)`,
                  flexShrink: 0,
                  marginTop: "0.35rem",
                }}
              />
              <h1
                className="font-sentient font-light"
                style={{
                  fontSize: "clamp(3.2rem, 6vw, 7rem)",
                  fontWeight: 300,
                  lineHeight: 0.92,
                  letterSpacing: "-0.04em",
                  color: C.vanillaCream ,
                  whiteSpace: "pre-line",
                }}
              >
                {data.heroHeading}
              </h1>
            </div>

            <p
              className="font-generalsans"
              style={{
                marginTop: "3rem",
                fontSize: "1.05rem",
                lineHeight: 1.9,
                color: C.lightMutedTeal,
                maxWidth: "38ch",
              }}
            >
              {data.heroBody}
            </p>
          </div>

          <div style={{ color: C.lightMutedTeal ,display: "flex", borderTop: RULE, marginTop: "3rem", flexWrap: "wrap" }}>
            {data.heroStats.map((s, i) => (
              <StatCell key={i} stat={s} bordered={i > 0} />
            ))}
          </div>
        </div>

        <div style={{ position: "relative", overflow: "hidden", backgroundColor: C.lightMutedTeal }}>
          <img
            src={data.heroImage}
            alt={data.heroImageAlt}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.82) saturate(0.9)",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "60%",
              left: 0,
              right: 0,
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.15)",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "2.4rem",
              right: "2.4rem",
              transform: "rotate(-90deg)",
              transformOrigin: "bottom right",
            }}
          >
            <span style={{ ...TAG, color: C.chocolateBrown }}>{data.industry} Solutions</span>
          </div>

          <div
            style={{
              position: "absolute",
              top: "2rem",
              left: "2rem",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: C.vanillaCream,
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Industry Section Block ─────────────────────────────── */
function IndustrySectionBlock({ s, isLast }: { s: IndustrySection; isLast: boolean }) {
  return (
    <section style={{ borderBottom: isLast ? "none" : RULE }}>

      <div
        className="px-8 md:px-16 lg:px-24 py-4 flex items-center gap-6"
        style={{ borderBottom: RULE }}
      >
        <span style={IDX}>{String(s.index).padStart(2, "0")}</span>
        <div className="bg-[#bbd6d1]/30" style={{ width: "40px", height: "1px" }} />
        <span style={TAG}>{s.tag}</span>
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-5"
        style={{ minHeight: "clamp(400px, 52vw, 620px)" }}
      >
        <div
          className="lg:col-span-3 relative overflow-hidden"
          style={{ backgroundColor: C.lightMutedTeal, minHeight: "300px" }}
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
              filter: "brightness(0.82) saturate(0.9)",
            }}
          />

          {s.stats && s.stats.length > 0 && (
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                display: "flex",
                borderTop: "1px solid rgba(255,255,255,0.18)",
                background: `linear-gradient(to top, rgba(37,77,88,0.88), transparent)`,
              }}
            >
              {s.stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1.5rem 2rem",
                    borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.15)" : "none",
                    flex: 1,
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
                      fontWeight: 300,
                      letterSpacing: "-0.04em",
                      color: C.ivory,
                      lineHeight: 1,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span style={{ ...TAG, color: C.lightMutedTeal }}>{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          className="lg:col-span-2 px-8 md:px-12 lg:px-14 flex flex-col justify-between py-14"
          style={{ borderLeft: RULE }}
        >
          <div>
            <h2
              className="font-sentient"
              style={{
                fontSize: "clamp(2rem, 3vw, 3.2rem)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                color: FG,
                marginBottom: "1.8rem",
                whiteSpace: "pre-line",
              }}
            >
              {s.heading}
            </h2>
            <p
              className="font-generalsans"
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: MUTED,
              }}
            >
              {s.body}
            </p>
          </div>

          {s.callout && (
            <div style={{ marginTop: "2.5rem", paddingTop: "1.8rem", borderTop: RULE }}>
              <div
                style={{
                  width: "28px",
                  height: "2px",
                  backgroundColor: ACCENT,
                  marginBottom: "1rem",
                }}
              />
              <p
                className="font-sentient"
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.7rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.3,
                  color: C.darkTeal,
                  fontStyle: "italic",
                }}
              >
                "{s.callout}"
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Challenges ─────────────────────────────────────────── */
function ChallengesBlock({ items, industry }: { items: IndustryChallenge[]; industry: string }) {
  return (
    <section style={{ borderTop: RULE }}>

      <div
        className="px-8 md:px-16 lg:px-24 py-16 lg:py-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        style={{ borderBottom: RULE, backgroundColor: C.parchment }}
      >
        <div>
          <p style={{ ...TAG, color: ACCENT, marginBottom: "1.2rem" }}>Industry Challenges</p>
          <h2
            className="font-sentient"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 5.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.035em",
              lineHeight: 0.96,
              color: FG,
            }}
          >
            What {industry}
            <br />
            Gets Wrong
          </h2>
        </div>
        <p
          className="font-generalsans"
          style={{
            fontSize: "1rem",
            lineHeight: 1.85,
            color: MUTED,
            maxWidth: "34ch",
          }}
        >
          We've mapped the friction points. Here's where most {industry.toLowerCase()} operations lose momentum and where we step in.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              padding: "2.4rem",
              borderRight: (i + 1) % 3 !== 0 ? RULE : "none",
              borderBottom: i < items.length - (items.length % 3 || 3) ? RULE : "none",
            }}
          >
            <span style={{ ...IDX, display: "block", marginBottom: "1.6rem" }}>
              {String(i + 1).padStart(2, "0")}
            </span>

            <div
              style={{
                width: "20px",
                height: "1px",
                backgroundColor: ACCENT,
                marginBottom: "1.2rem",
              }}
            />

            <h3
              className="font-sentient"
              style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                color: FG,
                marginBottom: "1rem",
              }}
            >
              {item.title}
            </h3>
            <p
              className="font-generalsans"
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.85,
                color: MUTED,
              }}
            >
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── IndustryPage ───────────────────────────────────────── */
export function IndustryPage({ data }: { data: IndustryPageData }) {
  return (
    <div style={{ backgroundColor: BG, color: FG }}>
      <HeroSection data={data} />
      <MarqueeStrip
        text={`${data.industry} · ${data.heroEyebrow} · Tailored Expertise · Proven Results`}
      />
      {data.sections.map((s, i) => (
        <IndustrySectionBlock
          key={i}
          s={s}
          isLast={i === data.sections.length - 1}
        />
      ))}
      {data.challenges && data.challenges.length > 0 && (
        <ChallengesBlock items={data.challenges} industry={data.industry} />
      )}
      {data.faqs && data.faqs.length > 0 && <FaqBlock items={data.faqs} />}
    </div>
  );
}

/* ─── App entrypoint ─────────────────────────────────────── */
export default function App() {
  return <div />;
}
