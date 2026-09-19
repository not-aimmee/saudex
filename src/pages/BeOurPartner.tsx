import BlurText from "../../components/blurtext";
import { useNavigate } from "react-router-dom";
import { SEO } from "../components/SEO";
import { beOurPartnerMeta } from "./data/seoMeta";

/* ── palette ── */
const C = {
  bg:          "#f1f0ea", /* parchment */
  bgAlt:       "#e0ddcf", /* bone */
  surface:     "#F5FBEF", /* ivory */
  border:      "#bbd6d1", /* light muted teal */
  heading:     "#02090f", /* almost black */
  body:        "#254D58", /* dark teal */
  muted:       "#468189", /* teal */
  accent:      "#9D4810", /* chocolate brown */
  accentLight: "#c9ada7", /* almond silk */
  badgeBg:     "#bbd6d1", /* light muted teal */
  dotColor:    "#77aca2", /* muted teal */
};

const STEPS = [
  {
    number: "01",
    title: "Apply",
    description: "Tell us about your business and which track fits.",
  },
  {
    number: "02",
    title: "Align",
    description: "We scope terms together and confirm fit on both sides.",
  },
  {
    number: "03",
    title: "Launch",
    description: "Onboarding, training, and your first joint opportunity.",
  },
];
const WHY_CHOOSE_US = [
  "Reliable and long-term business opportunities",
  "Competitive commercial terms",
  "Dedicated partnership support",
  "Strong operational and logistics expertise",
  "Scalable solutions for growing businesses",
  "Transparent communication and mutual growth",
];

export default function BeOurPartner() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title={beOurPartnerMeta.title}
        description={beOurPartnerMeta.description}
        keywords={beOurPartnerMeta.keywords}
        canonical={beOurPartnerMeta.canonical}
        ogImage={beOurPartnerMeta.ogImage}
      />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.heading }}>
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(circle, ${C.dotColor} 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pt-20 pb-16 sm:pt-32 sm:pb-24 text-center">
          <div className="flex justify-center">
            <BlurText
              text="Be Our Partner."
              delay={120}
              animateBy="words"
              direction="top"
              className="font-sentient text-4xl sm:text-6xl md:text-8xl font-bold text-[#f4e9cd]"
            />
          </div>
          <p className="text-base sm:text-lg mt-6 sm:mt-8 max-w-xl mx-auto px-2" style={{ color: C.border }}>
            Join our growing network of partners and unlock new opportunities. Together, we create smarter logistics solutions, expand market reach, and deliver greater value to customers. We offer competitive terms, dedicated support, and a clear path to mutual growth.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="relative px-6 sm:px-10 py-16 sm:py-24"
        style={{ backgroundColor: C.bgAlt, borderTop: `1px solid ${C.border}` }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-sentient text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 max-w-2xl"
            style={{ color: C.heading }}
          >
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: C.border }}>
            {WHY_CHOOSE_US.map((point, i) => (
              <div key={i} className="p-6 sm:p-8 flex gap-4" style={{ backgroundColor: C.bgAlt }}>
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full font-sentient font-bold flex items-center justify-center text-sm"
                  style={{ backgroundColor: C.badgeBg, color: C.heading }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: C.body }}>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        className="relative px-6 sm:px-10 py-16 sm:py-24"
        style={{ backgroundColor: C.bg, borderTop: `1px solid ${C.border}` }}
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="uppercase font-generalsans text-base sm:text-lg font-medium tracking-[0.3em] mb-4"
            style={{ color: C.accent }}
          >
            how it works
          </p>
          <h2
            className="font-sentient text-4xl sm:text-5xl md:text-7xl font-bold mb-8 sm:mb-12 max-w-2xl"
            style={{ color: C.heading }}
          >
            From application to launch.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {STEPS.map((step) => (
              <div key={step.number}>
                <span className="font-sentient text-5xl sm:text-6xl font-bold" style={{ color: C.accent }}>
                  {step.number}
                </span>
                <h3 className="font-generalsans text-xl sm:text-2xl font-medium mt-3 mb-2" style={{ color: C.heading }}>
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: C.body }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative min-h-[340px] grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] overflow-hidden"
        style={{ backgroundColor: C.bgAlt, borderTop: `1px solid ${C.border}` }}
      >
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(circle, ${C.dotColor} 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Left — Contact circle */}
        <div className="order-2 md:order-1 flex items-center justify-center px-6 sm:px-10 py-10 sm:py-12">
          <button
            onClick={() => navigate("/partner_contact")}
            className="w-36 h-36 sm:w-48 sm:h-48 rounded-full flex flex-col items-center justify-center gap-1 transition-all duration-300 cursor-pointer"
            style={{
              border: `1px solid ${C.muted}`,
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = C.muted + "18";
              (e.currentTarget as HTMLButtonElement).style.borderColor = C.accent;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLButtonElement).style.borderColor = C.muted;
            }}
          >
            <span
              className="text-sm sm:text-[16px] font-generalsans font-medium tracking-[0.15em] uppercase text-center leading-snug"
              style={{ color: C.heading }}
            >
              Talk With
              <br />
              US
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="order-1 md:order-2 h-px w-full md:h-auto md:w-px" style={{ backgroundColor: C.border }} />

        {/* Right — Text */}
        <div className="order-1 md:order-3 relative z-10 flex flex-col justify-center px-6 sm:px-10 py-10 sm:py-12 text-center md:text-left items-center md:items-start">
          <p
            className="uppercase font-generalsans text-lg sm:text-xl font-medium tracking-[0.4em] mb-4 sm:mb-6"
            style={{ color: C.accent }}
          >
            your next step
          </p>
          <p
            className="uppercase font-generalsans text-xl sm:text-2xl font-medium mb-4 sm:mb-6"
            style={{ color: C.muted }}
          >
            ready to apply?
          </p>
          <p
            className="font-sentient text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
            style={{ color: C.heading }}
          >
            Let's talk partnership.
          </p>
          <p className="text-base sm:text-lg max-w-xl" style={{ color: C.body }}>
            Reach out and we'll walk you through the right track for your business.
          </p>
        </div>
      </section>
    </>
  );
}
