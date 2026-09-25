import { useState, useEffect, useRef } from "react";
import { SEO } from "../components/SEO";
import { aboutUsMeta } from "./data/seoMeta";
import WhyChooseUs from "../components/Why_choose_us";

/* ─────────────────────────────────────────────
   COLOR PALETTE — edit hex values to retheme
   ───────────────────────────────────────────── */
const C = {
  almostBlack:    "#02090f",
  inkBlack:       "#031926",   // Hero / closing section background
  spaceIndigo:    "#22223b",   // Alternate dark sections
  darkTeal:       "#254D58",   // Values section background
  teal:           "#468189",   // Borders, highlights, hover accents
  mutedTeal:      "#77aca2",   // Muted labels on dark backgrounds
  lightMutedTeal: "#bbd6d1",   // Subtle text on dark
  vanillaCream:   "#f4e9cd",   // Alt light section background
  bone:           "#e0ddcf",   // Light section background
  parchment:      "#f1f0ea",   // Stats section background
  ivory:          "#F5FBEF",   // Primary light background / text on dark
  almondSilk:     "#c9ada7",
  chocolateBrown: "#9D4810",
};

/* ─────────────────────────────────────────────
   REUSABLE COMPONENTS
   ───────────────────────────────────────────── */

function Rule({ color = C.teal, opacity = 0.35 }: { color?: string; opacity?: number }) {
  return <hr style={{ borderColor: color, opacity, borderTopWidth: 1 }} className="w-full border-0 border-t" />;
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="h-px w-8 shrink-0" style={{ backgroundColor: light ? C.lightMutedTeal : C.teal }} />
      <span
        className="text-xs tracking-[0.2em] uppercase font-medium font-generalsans"
        style={{  color: light ? C.lightMutedTeal : C.teal }}
      >
        {children}
      </span>
    </div>
  );
}

/** Staggered word entrance animation */
function StaggeredWords({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  const words = text.split(" ");
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={className} style={style}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block mr-[0.22em]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s`,
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

/** Animated count-up number */
function AnimatedStat({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = 16;
          const increment = value / (duration / step);
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) { setCount(value); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="py-10 border-b" style={{ borderColor: C.teal + "55" }}>
      <div
        className="text-7xl md:text-8xl font-black font-generalsans leading-none mb-3 tabular-nums"
        style={{  color: C.darkTeal }}
      >
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm font-sentient tracking-widest uppercase" style={{ color: "#336159" }}>
        {label}
      </div>
    </div>
  );
}

/** Value item with hover slide */
function ValueItem({ index, title, description }: { index: string; title: string; description: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="py-10 border-t cursor-default transition-all duration-300"
      style={{
        borderColor: C.teal + "66",
        backgroundColor: hovered ? C.teal + "14" : "transparent",
        paddingLeft: hovered ? "1.5rem" : "0",
        paddingRight: hovered ? "1.5rem" : "0",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start gap-8">
        <span className="text-xs mt-1 shrink-0 font-generalsans" style={{  color: "#336159" }}>
          {index}
        </span>
        <div className="flex-1 md:flex md:items-start md:justify-between gap-12">
          <h3
            className="text-3xl md:text-4xl font-sentient font-black uppercase tracking-tight mb-4 md:mb-0"
            style={{  color: C.inkBlack }}
          >
            {title}
          </h3>
          <p className="text-base leading-relaxed max-w-sm font-generalsans" style={{  color: C.darkTeal }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SECTIONS
   ───────────────────────────────────────────── */

function HeroSection() {
  return (
    <section
      className="min-h-screen flex flex-col justify-end px-6 md:px-16 pb-16 pt-32 relative overflow-hidden"
      style={{ backgroundColor: C.inkBlack }}
    >
      {/* Subtle vertical grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 border-r"
            style={{ left: `${(i + 1) * (100 / 7)}%`, borderColor: C.teal + "18" }}
          />
        ))}
      </div>

      {/* Ghost / outlined text behind headline — decorative */}
      <div
        className="absolute bottom-0 right-0 font-sentient leading-none pointer-events-none select-none hidden md:block"
        aria-hidden
        style={{
        
          fontSize: "clamp(8rem, 22vw, 26rem)",
          fontWeight: 900,
          color: "transparent",
          WebkitTextStroke: `1px ${C.teal}22`, /* Ghost outline text color — Change opacity */
          lineHeight: 1,
          letterSpacing: "-0.04em",
          userSelect: "none",
          transform: "translateY(8%)",
        }}
      >
        {/* Ghost text word — Change this */}
        MOVE
      </div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Est. label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-16" style={{ backgroundColor: C.teal }} />
          <span
            className="text-xs tracking-[0.25em] uppercase font-generalsans"
            style={{  color: C.mutedTeal }}
          >
            Est. 2015 {/* Change founding year */}
          </span>
        </div>

        {/* Hero headline with stagger animation */}
        <h1
          className="text-[9vw] md:text-[10vw] font-black font-sentient font-light uppercase leading-[0.88] tracking-tight mb-16"
          style={{ color: C.ivory }}
        >
          <StaggeredWords text="We move" style={{ display: "block" }} />
          {/* Accent line — color the word "world" */}
          <span className="block overflow-hidden">
            <span
              className="inline-block"
              style={{
                color: C.teal, /* Teal accent word color */
                animation: "slideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s both",
              }}
            >
              the world
            </span>
          </span>
          <span
            className="block overflow-hidden"
            style={{ animation: "slideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}
          >
            forward.
          </span>
        </h1>

        <style>{`
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(60px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
        `}</style>

        <Rule color={C.teal} opacity={0.25} />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-8">
          {/* Tagline — Change this text */}
          <p
            className="text-lg md:text-xl font-light font-generalsans leading-relaxed max-w-md"
            style={{  color: C.lightMutedTeal, animation: "fadeIn 1s ease 0.8s both" }}
          >
            Connecting businesses across every continent with the precision,
            speed, and integrity global commerce demands.
          </p>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <>
      <section
        className="min-h-screen flex items-center px-6 md:px-16 py-32 relative overflow-hidden"
        style={{ backgroundColor: C.ivory }}
      >
        {/* Large decorative background number */}
        <div
          className="absolute font-sentient right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
          aria-hidden
          style={{
            
            fontSize: "clamp(12rem, 30vw, 40rem)",
            fontWeight: 900,
            color: "transparent",
            WebkitTextStroke: `1px ${C.teal}10`, /* Background decoration opacity */
            lineHeight: 1,
            userSelect: "none",
            letterSpacing: "-0.06em",
            transform: "translateX(10%)",
          }}
        >
          01 {/* Section number — Change this */}
        </div>

        <div className="max-w-7xl w-full relative z-10">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-7">
              <Eyebrow>Our Mission</Eyebrow>
              {/* Mission heading — Change this text */}
              <h2
                className="text-5xl md:text-7xl font-black font-sentient uppercase leading-[0.92] tracking-tight"
                style={{ color: C.inkBlack }}
              >
                <StaggeredWords text="Delivering excellence" style={{ display: "block" }} />
                <StaggeredWords
                  text="across every mile."
                  style={{ display: "block", color: C.teal /* Accent color on second line */ }}
                />
              </h2>
            </div>

            <div className="md:col-span-5 md:pt-24">
              <Rule color={C.teal} opacity={0.4} />
              <div className="mt-8 space-y-6">
                {/* Mission paragraph 1 — Change this text */}
                <p className="text-lg leading-relaxed font-generalsans" style={{  color: C.darkTeal }}>
                  For over 10 years, we have been moving businesses forward through world class logistics solutions. Driven by reliability, speed, and innovation, we help companies connect with markets, customers, and opportunities across the globe.
                </p>
                {/* Mission paragraph 2 — Change this text */}
                <p className="text-lg leading-relaxed font-generalsans" style={{  color: C.darkTeal + "cc" }}>
                  Every shipment is a commitment. Every delivery is a reflection of our promise. We've built our business around providing seamless, dependable logistics services that keep supply chains moving and businesses growing: on time, every time.
                </p>
              </div>

              {/* Region tags */}
              <div className="flex flex-wrap gap-2 mt-10">
                {["Americas", "Europe", "Asia Pacific", "Middle East", "Africa"].map((r) => (
                  <span
                    key={r}
                    className="px-3 py-1 text-xs tracking-widest font-generalsans uppercase border transition-colors duration-200 cursor-default"
                    style={{ color: C.teal, borderColor: C.teal + "55" }}
                  >
                    {r} {/* Change region names */}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function StatsSection() {
  return (
    <>
      <WhyChooseUs />
      <section className="px-6 md:px-16 py-32" style={{ backgroundColor: C.parchment }}>
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-4">
              <Eyebrow>By the numbers</Eyebrow>
              {/* Stats heading — Change this text */}
              <h2
                className="text-4xl md:text-5xl font-black font-sentient uppercase leading-tight"
                style={{ color: C.inkBlack }}
              >
                Scale built
                <br />
                on trust
              </h2>
            </div>

            {/* Stats — Change values, suffixes, and labels */}
            <div className="md:col-span-8 border-t" style={{ borderColor: C.teal + "55" }}>
              <AnimatedStat value={15}   suffix="+"    label="Countries served" />
              <AnimatedStat value={8450} suffix="+"    label="Deliveries completed" />
              <AnimatedStat value={98}   suffix=".8%"  label="On-time delivery rate" />
              <AnimatedStat value={10}   suffix=""     label="Years in operation" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ValuesSection() {
  return (
    <>
      <section className="px-6 md:px-16 py-32" style={{ backgroundColor: C.bone }}>
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid md:grid-cols-12 gap-x-16 mb-20">
            <div className="md:col-span-5">
              <Eyebrow>What drives us</Eyebrow>
              {/* Values heading — Change this text */}
              <h2
                className="text-5xl md:text-6xl font-black font-sentient uppercase leading-tight"
                style={{ color: C.inkBlack }}
              >
                Our
                <br />
                principles
              </h2>
            </div>
          </div>

          {/* Values list — Change index, title, and description */}
          <ValueItem index="01" title="Reliability"    description="We deliver on our promises, every single time. Your cargo arrives when and where it should, no exceptions, no excuses." />
          <ValueItem index="02" title="Precision"      description="Logistics is a science. We apply rigorous systems thinking to every route, every handoff, and every delivery window." />
          <ValueItem index="03" title="Innovation"     description="Cutting edge technology meets deep operational expertise. We evolve continuously so you never have to worry about falling behind." />
          <ValueItem index="04" title="Sustainability"  description="Moving the world forward means protecting it. Our carbon reduction targets and eco-fleet initiatives make green logistics possible at scale." />

          <div className="border-t mt-0" style={{ borderColor: C.teal + "66" }} />
        </div>
      </section>
    </>
  );
}

function StorySection() {
  return (
    <section className="min-h-screen px-6 md:px-16 py-32" style={{ backgroundColor: C.vanillaCream }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-6">
            <Eyebrow>Our story</Eyebrow>
            {/* Story heading — Change this text */}
            <h2
              className="text-5xl md:text-7xl font-black font-sentient uppercase leading-[0.92] tracking-tight"
              style={{  color: C.inkBlack }}
            >
              <StaggeredWords text="From one truck" style={{ display: "block" }} />
              <StaggeredWords text="to a global"    style={{ display: "block" }} />
              <StaggeredWords
                text="network."
                style={{ display: "block", color: C.teal /* Accent word color */ }}
              />
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-20 md:col-start-8">
            <Rule color={C.teal} opacity={0.4} />
            {/* Story description — Change this text */}
            <p className="mt-8 text-lg leading-relaxed font-generalsans" style={{  color: C.darkTeal }}>
              What began as a modest family operation has grown into one of the
              world's most trusted logistics networks, present on six continents,
              employing thousands of dedicated professionals who share our
              founding values, treat every package like it's your own and never
              compromise on quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ROOT
   ───────────────────────────────────────────── */
export default function AboutUs() {
  return (
    <>
      <SEO
        title={aboutUsMeta.title}
        description={aboutUsMeta.description}
        keywords={aboutUsMeta.keywords}
        canonical={aboutUsMeta.canonical}
        ogImage={aboutUsMeta.ogImage}
      />
      <div style={{ fontFamily: "generalsans" }}>
        <HeroSection />
        <MissionSection />
        <StatsSection />
        <ValuesSection />
        <StorySection />
      </div>
    </>
  );
}
