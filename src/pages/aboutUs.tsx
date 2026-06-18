import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   COLOR PALETTE — edit hex values to retheme
   ───────────────────────────────────────────── */
const C = {
  deepGreen:   "#050f0f",  // Hero / closing section background
  forestGreen: "#0d2e1e",  // Alternate dark sections
  midGreen:    "#164d32",  // Values section background
  accentGreen: "#2a7a4b",  // Borders, highlights, hover accents
  brightGreen: "#3aab68",  // CTA button, active states, accent word
  paleGreen:   "#8fc9a4",  // Muted labels on dark backgrounds
  mintGreen:   "#c4e8d1",  // Subtle text on dark
  offWhite:    "#f0ede6",  // Light section background
  lightSand:   "#e8e4dc",  // Alt light section background
  white:       "#ffffff",  // Pure white text / backgrounds
  darkInk:     "#0d1f15",  // Text on light backgrounds
  midInk:      "#274834",  // Secondary text on light backgrounds
};

/* ─────────────────────────────────────────────
   REUSABLE COMPONENTS
   ───────────────────────────────────────────── */

function Rule({ color = C.accentGreen, opacity = 0.35 }: { color?: string; opacity?: number }) {
  return <hr style={{ borderColor: color, opacity, borderTopWidth: 1 }} className="w-full border-0 border-t" />;
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="h-px w-8 shrink-0" style={{ backgroundColor: light ? C.paleGreen : C.accentGreen }} />
      <span
        className="text-xs tracking-[0.2em] uppercase font-medium"
        style={{ fontFamily: "'DM Mono', monospace", color: light ? C.paleGreen : C.accentGreen }}
      >
        {children}
      </span>
    </div>
  );
}

/** Horizontal marquee ticker band */
function Marquee({ text, bg, fg }: { text: string; bg: string; fg: string }) {
  // Repeat text enough times to fill the band
  const repeated = Array(12).fill(text).join("   ·   ");
  return (
    <div
      className="py-3 overflow-hidden whitespace-nowrap relative"
      style={{ backgroundColor: bg /* Marquee background color */ }}
    >
      <div
        className="inline-block"
        style={{
          animation: "marquee 50s linear infinite", /* Adjust speed here */
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "1.1rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: fg, /* Marquee text color */
        }}
      >
        {repeated}&nbsp;&nbsp;&nbsp;{repeated}
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
    <div ref={ref} className="py-10 border-b" style={{ borderColor: C.accentGreen + "55" }}>
      <div
        className="text-7xl md:text-8xl font-black leading-none mb-3 tabular-nums"
        style={{ fontFamily: "'Barlow Condensed', sans-serif", color: C.white }}
      >
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace", color: C.paleGreen }}>
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
        borderColor: C.accentGreen + "66",
        backgroundColor: hovered ? C.accentGreen + "18" : "transparent",
        paddingLeft: hovered ? "1.5rem" : "0",
        paddingRight: hovered ? "1.5rem" : "0",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start gap-8">
        <span className="text-xs mt-1 shrink-0" style={{ fontFamily: "'DM Mono', monospace", color: C.paleGreen + "88" }}>
          {index}
        </span>
        <div className="flex-1 md:flex md:items-start md:justify-between gap-12">
          <h3
            className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 md:mb-0"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: C.white }}
          >
            {title}
          </h3>
          <p className="text-base leading-relaxed max-w-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: C.mintGreen }}>
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
      style={{ backgroundColor: C.deepGreen }}
    >
      {/* Subtle vertical grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 border-r"
            style={{ left: `${(i + 1) * (100 / 7)}%`, borderColor: C.accentGreen + "12" }}
          />
        ))}
      </div>

      {/* Ghost / outlined text behind headline — decorative */}
      <div
        className="absolute bottom-0 right-0 leading-none pointer-events-none select-none hidden md:block"
        aria-hidden
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "clamp(8rem, 22vw, 26rem)",
          fontWeight: 900,
          color: "transparent",
          WebkitTextStroke: `1px ${C.accentGreen}22`, /* Ghost outline text color — Change opacity */
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
          <div className="h-px w-16" style={{ backgroundColor: C.brightGreen }} />
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: "'DM Mono', monospace", color: C.paleGreen }}
          >
            Est. 2002 {/* Change founding year */}
          </span>
        </div>

        {/* Hero headline with stagger animation */}
        <h1
          className="text-[13vw] md:text-[11vw] font-black uppercase leading-[0.88] tracking-tight mb-16"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", color: C.white }}
        >
          <StaggeredWords text="We move" style={{ display: "block" }} />
          {/* Accent line — color the word "world" */}
          <span className="block overflow-hidden">
            <span
              className="inline-block"
              style={{
                color: C.brightGreen, /* Green accent word color */
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

        <Rule color={C.accentGreen} opacity={0.25} />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-8">
          {/* Tagline — Change this text */}
          <p
            className="text-lg md:text-xl font-light leading-relaxed max-w-md"
            style={{ fontFamily: "'DM Sans', sans-serif", color: C.mintGreen, animation: "fadeIn 1s ease 0.8s both" }}
          >
            Connecting businesses across every continent with the precision,
            speed, and integrity global commerce demands.
          </p>
          {/* Scroll indicator */}
          <div
            className="flex items-center gap-3 shrink-0"
            style={{ fontFamily: "'DM Mono', monospace", color: C.paleGreen + "99", animation: "fadeIn 1s ease 1s both" }}
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="flex flex-col gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-px" style={{ width: `${12 + i * 8}px`, backgroundColor: C.paleGreen, opacity: 0.3 + i * 0.25 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <>
      {/* Marquee ticker — separates Hero from Mission */}
      <Marquee
        text="Precision · Speed · Trust · Global Reach · On Time Every Time" /* Change marquee text */
        bg={C.brightGreen} /* Marquee background color */
        fg={C.deepGreen}   /* Marquee text color */
      />

      <section
        className="min-h-screen flex items-center px-6 md:px-16 py-32 relative overflow-hidden"
        style={{ backgroundColor: C.offWhite }}
      >
        {/* Large decorative background number */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
          aria-hidden
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(12rem, 30vw, 40rem)",
            fontWeight: 900,
            color: "transparent",
            WebkitTextStroke: `1px ${C.accentGreen}10`, /* Background decoration opacity */
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
                className="text-5xl md:text-7xl font-black uppercase leading-[0.92] tracking-tight"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", color: C.darkInk }}
              >
                <StaggeredWords text="Delivering excellence" style={{ display: "block" }} />
                <StaggeredWords
                  text="across every mile."
                  style={{ display: "block", color: C.accentGreen /* Accent color on second line */ }}
                />
              </h2>
            </div>

            <div className="md:col-span-5 md:pt-24">
              <Rule color={C.accentGreen} opacity={0.4} />
              <div className="mt-8 space-y-6">
                {/* Mission paragraph 1 — Change this text */}
                <p className="text-lg leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", color: C.midInk }}>
                  For over two decades, we've been the backbone of global commerce.
                  Our commitment to reliability, speed, and innovation has made us
                  the trusted partner for businesses that demand nothing less than
                  perfection in their logistics operations.
                </p>
                {/* Mission paragraph 2 — Change this text */}
                <p className="text-lg leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", color: C.midInk + "cc" }}>
                  Every shipment is a promise. We've built an entire organization
                  around keeping it.
                </p>
              </div>

              {/* Region tags */}
              <div className="flex flex-wrap gap-2 mt-10">
                {["Americas", "Europe", "Asia Pacific", "Middle East", "Africa"].map((r) => (
                  <span
                    key={r}
                    className="px-3 py-1 text-xs tracking-widest uppercase border transition-colors duration-200 hover:bg-green-900/10 cursor-default"
                    style={{ fontFamily: "'DM Mono', monospace", color: C.accentGreen, borderColor: C.accentGreen + "55" }}
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
    <section className="px-6 md:px-16 py-32" style={{ backgroundColor: C.forestGreen }}>
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-4">
            <Eyebrow light>By the numbers</Eyebrow>
            {/* Stats heading — Change this text */}
            <h2
              className="text-4xl md:text-5xl font-black uppercase leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: C.white }}
            >
              Scale built
              <br />
              on trust
            </h2>
          </div>

          {/* Stats — Change values, suffixes, and labels */}
          <div className="md:col-span-8 border-t" style={{ borderColor: C.accentGreen + "55" }}>
            <AnimatedStat value={150} suffix="+" label="Countries served" />
            <AnimatedStat value={50000000} suffix="+" label="Deliveries completed" />
            <AnimatedStat value={99} suffix=".8%" label="On-time delivery rate" />
            <AnimatedStat value={28} suffix="" label="Years in operation" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <>
      {/* Second marquee — reversed direction */}
      <Marquee
        text="Reliability · Precision · Innovation · Sustainability · Integrity" /* Change marquee text */
        bg={C.darkInk}  /* Marquee background color */
        fg={C.brightGreen} /* Marquee text color */
      />

      <section className="px-6 md:px-16 py-32" style={{ backgroundColor: C.midGreen }}>
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid md:grid-cols-12 gap-x-16 mb-20">
            <div className="md:col-span-5">
              <Eyebrow light>What drives us</Eyebrow>
              {/* Values heading — Change this text */}
              <h2
                className="text-5xl md:text-6xl font-black uppercase leading-tight"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", color: C.white }}
              >
                Our
                <br />
                principles
              </h2>
            </div>
          </div>

          {/* Values list — Change index, title, and description */}
          <ValueItem index="01" title="Reliability" description="We deliver on our promises, every single time. Your cargo arrives when and where it should — no exceptions, no excuses." />
          <ValueItem index="02" title="Precision" description="Logistics is a science. We apply rigorous systems thinking to every route, every handoff, and every delivery window." />
          <ValueItem index="03" title="Innovation" description="Cutting-edge technology meets deep operational expertise. We evolve continuously so you never have to worry about falling behind." />
          <ValueItem index="04" title="Sustainability" description="Moving the world forward means protecting it. Our carbon reduction targets and eco-fleet initiatives make green logistics possible at scale." />

          <div className="border-t mt-0" style={{ borderColor: C.accentGreen + "66" }} />
        </div>
      </section>
    </>
  );
}

/** Pull quote — full-bleed accent moment */
function PullQuote() {
  return (
    <section
      className="px-6 md:px-16 py-24 relative overflow-hidden"
      style={{ backgroundColor: C.brightGreen /* Pull quote background color */ }}
    >
      {/* Ghost quotation mark */}
      <div
        className="absolute -top-8 left-4 pointer-events-none select-none"
        aria-hidden
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(16rem, 40vw, 52rem)",
          fontWeight: 900,
          color: C.deepGreen + "18", /* Ghost quote mark opacity — Change */
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        "
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Pull quote text — Change this */}
        <blockquote
          className="text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", color: C.deepGreen /* Quote text color */ }}
        >
          "Every package is a promise. We've never missed one."
        </blockquote>
        {/* Attribution — Change this */}
        <cite
          className="block mt-8 text-sm tracking-widest not-italic"
          style={{ fontFamily: "'DM Mono', monospace", color: C.deepGreen + "99" /* Attribution color */ }}
        >
          — Elena Vasquez, CEO {/* Change attribution */}
        </cite>
      </div>
    </section>
  );
}

function StorySection() {
  // Timeline entries — Change year, title, body for each milestone
  const milestones = [
    { year: "2002", title: "Founded", body: "A single truck, a family business, and an unwavering belief that logistics could be done better." },
    { year: "2008", title: "First International Route", body: "Expanded into Europe with direct freight connections across 12 countries." },
    { year: "2014", title: "Asia Pacific Hub", body: "Opened our Singapore operations center, anchoring our Asia Pacific network." },
    { year: "2019", title: "50M Deliveries", body: "Crossed the milestone of 50 million completed deliveries with a 99.8% on-time rate." },
    { year: "2024", title: "Carbon Neutral Fleet", body: "Committed to full carbon neutrality across our entire fleet by 2030." },
  ];

  return (
    <section className="min-h-screen px-6 md:px-16 py-32" style={{ backgroundColor: C.lightSand }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-6">
            <Eyebrow>Our story</Eyebrow>
            {/* Story heading — Change this text */}
            <h2
              className="text-5xl md:text-7xl font-black uppercase leading-[0.92] tracking-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: C.darkInk }}
            >
              <StaggeredWords text="From one truck" style={{ display: "block" }} />
              <StaggeredWords text="to a global" style={{ display: "block" }} />
              <StaggeredWords
                text="network."
                style={{ display: "block", color: C.accentGreen /* Accent word color */ }}
              />
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-20 md:col-start-8">
            <Rule color={C.accentGreen} opacity={0.4} />
            {/* Story description — Change this text */}
            <p className="mt-8 text-lg leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", color: C.midInk }}>
              What began as a modest family operation has grown into one of the
              world's most trusted logistics networks — present on six continents,
              employing thousands of dedicated professionals who share our
              founding values: treat every package like it's your own and never
              compromise on quality.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="border-t" style={{ borderColor: C.accentGreen + "44" }}>
          {milestones.map((m, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-6 border-b py-8 group transition-colors duration-200 cursor-default"
              style={{ borderColor: C.accentGreen + "33" }}
            >
              <div className="col-span-2 md:col-span-1">
                <span className="text-sm" style={{ fontFamily: "'DM Mono', monospace", color: C.accentGreen }}>{m.year}</span>
              </div>
              <div className="col-span-10 md:col-span-3">
                <span className="text-xl font-black uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: C.darkInk }}>
                  {m.title}
                </span>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-6">
                <p className="text-base leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", color: C.midInk }}>
                  {m.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  // Team members — Change name, title, years
  const team = [
    { name: "Elena Vasquez", title: "Chief Executive Officer", years: "Since 2008" },
    { name: "Marcus Okafor", title: "Chief Operations Officer", years: "Since 2011" },
    { name: "Priya Sundaram", title: "Chief Technology Officer", years: "Since 2016" },
    { name: "James Hoffmann", title: "Head of Global Freight", years: "Since 2013" },
  ];

  return (
    <section className="px-6 md:px-16 py-32" style={{ backgroundColor: C.deepGreen }}>
      <div className="max-w-7xl mx-auto">
        <Eyebrow light>Leadership</Eyebrow>
        {/* Leadership heading — Change this text */}
        <h2
          className="text-5xl md:text-6xl font-black uppercase leading-tight mb-20"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", color: C.white }}
        >
          The team
          <br />
          at the helm
        </h2>

        <div className="grid md:grid-cols-2 gap-0 border-t" style={{ borderColor: C.accentGreen + "44" }}>
          {team.map((person, i) => (
            <div
              key={i}
              className="border-b py-8 flex items-center justify-between group transition-all duration-200 cursor-default"
              style={{
                borderColor: C.accentGreen + "33",
                borderRight: i % 2 === 0 ? `1px solid ${C.accentGreen}33` : "none",
                paddingLeft: i % 2 === 1 ? "2rem" : 0,
                paddingRight: i % 2 === 0 ? "2rem" : 0,
              }}
            >
              <div>
                {/* Person name */}
                <div className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: C.white }}>
                  {person.name}
                </div>
                {/* Person title */}
                <div className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: C.paleGreen }}>
                  {person.title}
                </div>
              </div>
              {/* Years */}
              <div className="text-xs tracking-widest text-right" style={{ fontFamily: "'DM Mono', monospace", color: C.accentGreen + "88" }}>
                {person.years}
              </div>
            </div>
          ))}
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
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <HeroSection />
      <MissionSection />
      <StatsSection />
      <ValuesSection />
      <PullQuote />
      <StorySection />
      <LeadershipSection />
    </div>
  );
}
