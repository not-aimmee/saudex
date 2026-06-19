import { useState } from "react" ;
import BlurText from "../../components/blurtext";
/* ─── types ─────────────────────────────────────────────── */
export interface IndustryStat {
  value: string;  // e.g. "94%"
  label: string;  // e.g. "Client retention rate"
}

export interface IndustrySection {
  index: number;             // 01, 02, 03 …
  tag: string;
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  stats?: IndustryStat[];   // up to 2 supporting stats
  callout?: string;         // pull-quote / bold callout
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
  industry: string;         // e.g. "Healthcare"
  heroEyebrow: string;      // e.g. "Industry Solutions"
  heroHeading: string;
  heroBody: string;
  heroImage: string;
  heroImageAlt: string;
  heroStats: IndustryStat[];  // 3 stats shown in hero right panel
  sections: IndustrySection[];
  challenges?: IndustryChallenge[];  // replaces FAQ
  faqs?: IndustryFaq[];   
}

/* ─── tokens ─────────────────────────────────────────────── */
const BG = "#050f0f";
const FG = "#e8ede8";
const ACCENT = "rgba(120,210,160,0.9)";   // muted teal-green accent
const D = (o: number) => `rgba(232,237,232,${o})`;
const RULE = `1px solid ${D(0.08)}`;

const TAG: React.CSSProperties = {
  fontSize: "0.65rem",
  letterSpacing: "0.28em",
  textTransform: "uppercase" as const,
  color: D(0.28),
  fontFamily: "inherit",
};

const IDX: React.CSSProperties = {
  fontSize: "0.65rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  color: D(0.2),
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
      }}
    >
      <div
        style={{
          display: "inline-block",
          animation: "marquee 28s linear infinite",
          fontSize: "0.75rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#A3BDB8 " ,
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
          color: FG,
          marginBottom: "0.4rem",
        }}
      >
        {stat.value}
      </span>
      <span style={{ ...TAG, color: D(0.3) }}>{stat.label}</span>
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
      <div style={{ flex: 1, height: "1px", backgroundColor: D(0.07) }} />
      <span style={TAG}>{right}</span>
    </div>
  );
}

/* FAQ Section */
function FaqBlock({ items }: { items: IndustryFaq[] }) {
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
            <p style={{ ...TAG, color: "#A3BDB8", marginBottom: "1.4rem" }}>Questions</p>
             <BlurText
  text="Have questions about our logistics solutions?"
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
          <p style={{ fontSize: "1.2rem", lineHeight: 1.8, color: "#A3BDB8", maxWidth: "24rem", marginTop: "2rem" }}>
            Find answers to the most common queries about how we serve your industry.
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
                      fontSize: "clamp(1.3rem, 1.3vw, 1.3rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.4,
                      color: open === i ? "#A3BDB8" : D(0.65),
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
                  <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "#A3BDB8", paddingBottom: "1.5rem", maxWidth: "38rem" }}>
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
/* ─── HERO — split panel ─────────────────────────────────── */
function HeroSection({ data }: { data: IndustryPageData }) {
  return (
    <section style={{ borderBottom: RULE }}>

      {/* Top eyebrow bar */}
      

      {/* Main split: left text / right image */}
      <div className="pt-24 grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "clamp(480px, 70vh, 760px)" }}>

        {/* LEFT — heading + body */}
        <div
          className="px-8 md:px-16 lg:px-24 flex flex-col justify-between py-14 lg:py-20"
          style={{ borderRight: RULE }}
        >
          <div>
            {/* Vertical accent line beside heading */}
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
                className="font-clash"
                style={{
                  fontSize: "clamp(3.2rem, 7vw, 8rem)",
                  fontWeight: 400,
                  lineHeight: 0.92,
                  letterSpacing: "-0.04em",
                  color: FG,
                  whiteSpace: "pre-line",
                }}
              >
                {data.heroHeading}
              </h1>
            </div>

            <p
              className="font-archivo"
              style={{
                marginTop: "3rem",
                fontSize: "1.05rem",
                lineHeight: 1.9,
                color: "#A3BDB8",
                maxWidth: "38ch",
              }}
            >
              {data.heroBody}
            </p>
          </div>

          {/* Inline stats row at the bottom */}
          <div
            style={{
              display: "flex",
              borderTop: RULE,
              marginTop: "3rem",
              flexWrap: "wrap",
            }}
          >
            {data.heroStats.map((s, i) => (
              <StatCell key={i} stat={s} bordered={i > 0} />
            ))}
          </div>
        </div>

        {/* RIGHT — image with overlaid industry label */}
        <div style={{ position: "relative", overflow: "hidden", backgroundColor: "#0c1e1e" }}>
          <img
            src={data.heroImage}
            alt={data.heroImageAlt}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.65) ",
            }}
          />

          {/* Horizontal rule at 60% */}
          <div
            style={{
              position: "absolute",
              top: "60%",
              left: 0,
              right: 0,
              height: "1px",
              backgroundColor: D(0.08),
            }}
          />

          {/* Rotated industry label */}
          <div
            style={{
              position: "absolute",
              bottom: "2.4rem",
              right: "2.4rem",
              transform: "rotate(-90deg)",
              transformOrigin: "bottom right",
            }}
          >
            <span style={{ ...TAG, color: "#A3BDB8" }}>{data.industry} Solutions</span>
          </div>

          {/* Accent corner dot */}
          <div
            style={{
              position: "absolute",
              top: "2rem",
              left: "2rem",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: ACCENT,
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

      {/* Index + tag strip */}
      <div
        className="px-8 md:px-16 lg:px-24 py-4 flex items-center gap-6"
        style={{ borderBottom: RULE }}
      >
        <span style={IDX}>{String(s.index).padStart(2, "0")}</span>
        <div style={{ width: "40px", height: "1px", backgroundColor: D(0.1) }} />
        <span style={TAG}>{s.tag}</span>
      </div>

      {/* Main grid: 5 columns — image takes 3, text takes 2 */}
      <div
        className="grid grid-cols-1 lg:grid-cols-5"
        style={{ minHeight: "clamp(400px, 52vw, 620px)" }}
      >
        {/* Image — always left on desktop */}
        <div
          className="lg:col-span-3 relative overflow-hidden"
          style={{ backgroundColor: "#0d1e1e", minHeight: "300px" }}
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
              filter: "brightness(0.75) ",
            }}
          />

          {/* Stats overlay bottom-left */}
          {s.stats && s.stats.length > 0 && (
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                display: "flex",
                borderTop: RULE,
                background: `linear-gradient(to top, rgba(5,15,15,0.88), transparent)`,
              }}
            >
              {s.stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1.5rem 2rem",
                    borderLeft: i > 0 ? RULE : "none",
                    flex: 1,
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
                      fontWeight: 300,
                      letterSpacing: "-0.04em",
                      color: FG,
                      lineHeight: 1,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span style={{ ...TAG, color: "#A3BDB8 " }}>{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Text — right panel */}
        <div
          className="lg:col-span-2 px-8 md:px-12 lg:px-14 flex flex-col justify-between py-14"
          style={{ borderLeft: RULE }}
        >
          <div>
            <h2
              className="font-clash"
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
              className="font-archivo"
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#A3BDB8",
              }}
            >
              {s.body}
            </p>
          </div>

          {/* Callout */}
          {s.callout && (
            <div
              style={{
                marginTop: "2.5rem",
                paddingTop: "1.8rem",
                borderTop: RULE,
              }}
            >
              {/* Accent bar */}
              <div
                style={{
                  width: "28px",
                  height: "2px",
                  backgroundColor: ACCENT,
                  marginBottom: "1rem",
                }}
              />
              <p
                className="font-clash"
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.7rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.3,
                  color: "#F7FAF8",
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

/* ─── Challenges (replaces FAQ) ─────────────────────────── */
function ChallengesBlock({ items, industry }: { items: IndustryChallenge[]; industry: string }) {
  return (
    <section style={{ borderTop: RULE }}>

      {/* Header */}
      <div
        className="px-8 md:px-16 lg:px-24 py-16 lg:py-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        style={{ borderBottom: RULE }}
      >
        <div>
          <p style={{ ...TAG, marginBottom: "1.2rem" }}>Industry Challenges</p>
          <h2
            className="font-clash"
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
          className="font-archivo"
          style={{
            fontSize: "1rem",
            lineHeight: 1.85,
            color: "#A3BDB8",
            maxWidth: "34ch",
          }}
        >
          We've mapped the friction points. Here's where most {industry.toLowerCase()} operations lose momentum and where we step in.
        </p>
      </div>

      {/* Card grid */}
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
            {/* Card index */}
            <span
              style={{
                ...IDX,
                display: "block",
                marginBottom: "1.6rem",
                color: D(0.15),
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Accent dash */}
            <div
              style={{
                width: "20px",
                height: "1px",
                backgroundColor: ACCENT,
                marginBottom: "1.2rem",
              }}
            />

            <h3
              className="font-clash"
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
              className="font-archivo"
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.85,
                color:"#A3BDB8",
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

/* ─── main export ────────────────────────────────────────── */
export function IndustryPage({ data }: { data: IndustryPageData }) {
  return (
    <div style={{ backgroundColor: BG, color: FG }}>

      {/* ── HERO ───────────────────────────────────────── */}
      <HeroSection data={data} />

      {/* ── MARQUEE STRIP ─────────────────────────────── */}
      <MarqueeStrip
        text={`${data.industry} · ${data.heroEyebrow} · Tailored Expertise · Proven Results`}
      />

      {/* ── INDUSTRY SECTIONS ─────────────────────────── */}
      {data.sections.map((s, i) => (
        <IndustrySectionBlock
          key={i}
          s={s}
          isLast={i === data.sections.length - 1}
        />
      ))}

      {/* ── CHALLENGES GRID ───────────────────────────── */}
      {data.challenges && data.challenges.length > 0 && (
        <ChallengesBlock items={data.challenges} industry={data.industry} />
      )}

      {/* ── FAQ ────────────────────────────────────────── */}
      {data.faqs && data.faqs.length > 0 && <FaqBlock items={data.faqs} />}
    </div>
  );
}
