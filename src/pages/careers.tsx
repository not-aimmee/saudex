import { useState, useRef } from "react";
import ContactModal from "../components/ContactModal";

 
/* ─────────────────────────────────────────────
   COLOR PALETTE — same brand, edit to retheme
   ───────────────────────────────────────────── */
const C = {
  deepGreen:   "#061510",
  forestGreen: "#0d2e1e",
  midGreen:    "#164d32",
  accentGreen: "#2a7a4b",
  brightGreen: "#3aab68",
  paleGreen:   "#8fc9a4",
  mintGreen:   "#c4e8d1",
  offWhite:    "#f0ede6",
  lightSand:   "#e8e4dc",
  white:       "#ffffff",
  darkInk:     "#0d1f15",
  midInk:      "#274834",
};

/* ─────────────────────────────────────────────
   DATA — edit all text, roles, perks here
   ───────────────────────────────────────────── */

// Job listings — Change title, dept, location, type for each role
const JOBS = [
  { id: 4, title: "Product Manager, Tracking Platform",   dept: "Engineering",  location: "UAE",        type: "Full-time" },
  { id: 5, title: "Regional Sales Director — APAC",       dept: "Commercial",   location: "Saudi Arab",     type: "Full-time" },
  { id: 7, title: "Customs Compliance Specialist",        dept: "Legal",        location: "UAE",      type: "Full-time" },
  ];

// Departments for filter tabs — Change these labels
const DEPTS = ["All", "Engineering", "Commercial", "Legal"];

// Culture cards — Change emoji, title, description for each card
const CULTURE_CARDS = [
  { icon: "🌍", label: "Global by default", body: "Every decision we make ripples across six continents. You'll think internationally from day one." },
  { icon: "⚡", label: "Move fast, carefully", body: "We ship weekly and still maintain 99.8% reliability. Speed and precision aren't opposites here." },
  { icon: "🌱", label: "Grow with us", body: "Every employee gets a dedicated learning budget and a clear path forward — not just a job." },
  { icon: "🤝", label: "Ownership mentality", body: "You own your work from brief to launch. No unnecessary layers, no permission to ask for." },
  { icon: "♻️", label: "Built to last", body: "We're building infrastructure for the next century, with sustainability baked into every choice." },
  { icon: "📍", label: "Flexible by design", body: "Hybrid and remote roles across 28 countries. Work where you do your best thinking." },
];

/* ─────────────────────────────────────────────
   SHARED COMPONENTS
   ───────────────────────────────────────────── */

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="h-px w-8 shrink-0" style={{ backgroundColor: light ? C.paleGreen : C.accentGreen }} />
      <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "'DM Mono', monospace", color: light ? C.paleGreen : C.accentGreen }}>
        {children}
      </span>
    </div>
  );
}
/* ─────────────────────────────────────────────
   SECTIONS
   ───────────────────────────────────────────── */

/** HERO — vertical split: text left, image right */
function HeroSection() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 relative overflow-hidden" style={{ backgroundColor: C.deepGreen }}>

      {/* LEFT — text panel */}
      <div className="flex flex-col justify-end px-6 md:px-16 pb-16 pt-32 relative z-10">

        {/* Ghost background number */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-0 font-archivo pointer-events-none select-none"
          aria-hidden
          style={{
            fontSize: "clamp(14rem, 35vw, 48rem)",
            fontWeight: 900,
            color: "transparent",
            WebkitTextStroke: `1px ${C.accentGreen}14`, /* Ghost text stroke opacity */
            lineHeight: 1,
            userSelect: "none",
            letterSpacing: "-0.06em",
            transform: "translateX(-8%) translateY(-50%)",
          }}
        >
          {JOBS.length} {/* Shows open role count as ghost — auto-updates */}
        </div>

        <div className="relative">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-16" style={{ backgroundColor: C.brightGreen }} />
            {/* Open roles badge — updates automatically from JOBS array */}
            <span className="text-xs tracking-[0.25em] font-archivo uppercase px-3 py-1" style={{  color: C.brightGreen, border: `1px solid ${C.brightGreen}66` }}>
              {JOBS.length} Open Roles {/* Updates with JOBS array length */}
            </span>
          </div>

          {/* Hero headline — Change this text */}
          <h1
            className="text-[7vw] md:text-[7.5vw] font-black font-clash uppercase leading-[0.88] tracking-tight mb-10"
            style={{  color: C.white, animation: "slideUp 0.9s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            Build
            <br />
            <span style={{ color: C.brightGreen /* Hero accent word color */ }}>what</span>
            <br />
            moves
            <br />
            the world.
          </h1>

          {/* Hero description — Change this text */}
          <p
            className="text-base md:text-lg font-regular font-archivo leading-relaxed max-w-xs"
            style={{ color: C.mintGreen, animation: "fadeIn 1s ease 0.6s both" }}
          >
            We're hiring operators, engineers, analysts, and leaders who believe
            global logistics can be smarter, faster, and cleaner.
          </p>

          {/* Scroll-to-jobs CTA */}
          <button
            className="mt-10 flex items-center gap-3 text-sm font-archivo tracking-widest uppercase transition-all duration-200 group"
            style={{  color: C.paleGreen, background: "none", border: "none", cursor: "pointer" }}
            onClick={() => document.getElementById("open-roles")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span>See open roles</span>
            {/* Animated arrow */}
            <span
              className="transition-transform duration-200 group-hover:translate-x-2"
              style={{ color: C.brightGreen, fontSize: "1.2rem" }}
            >
              →
            </span>
          </button>
        </div>
      </div>

      {/* RIGHT — image panel */}
      <div className="relative min-h-[50vh] md:min-h-0" style={{ backgroundColor: C.midGreen /* Image panel fallback bg */ }}>
        <img
          src="/images/c.webp"
          alt="saudex team member at work in warehouse" /* Change alt text */
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.75) saturate(0.9)" /* Image brightness/saturation — adjust these */ }}
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to right, ${C.deepGreen} 0%, transparent 40%)` /* Gradient blending left edge */ }}
        />
        {/* Team size badge — positioned inside image */}
        <div
          className="absolute bottom-8 right-8 text-right"
          style={{ animation: "fadeIn 1s ease 0.8s both" }}
        >
          <div
            className="text-5xl font-black font-archivo leading-none"
            style={{  color: C.white /* Team size number color */ }}
          >
            4,200+
          </div>
          <div className="text-xs tracking-widest font-archivo uppercase mt-1" style={{  color: C.paleGreen /* Team size label color */ }}>
            People worldwide {/* Change label */}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp { from { opacity:0; transform:translateY(50px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn  { from { opacity:0; } to { opacity:1; } }
        @keyframes marquee { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        @keyframes scrollX { from { transform:translateX(0); } to { transform:translateX(-50%); } }
      `}</style>
    </section>
  );
}

/** CULTURE — horizontal scroll snap cards */
function CultureSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: C.forestGreen }}>
      <div className="px-6 md:px-16 mb-10 max-w-7xl mx-auto">
        <div className="flex items-end justify-between">
          <div>
            {/* Culture heading — Change this text */}
            <h2
              className="text-4xl md:text-5xl font-black font-archivo uppercase leading-tight"
              style={{  color: C.white }}
            >
              A culture built
              <br />
              to last
            </h2>
          </div>
          {/* Scroll hint */}
          <div className="hidden md:flex items-center gap-2 pb-1 font-archivo" style={{ color: C.paleGreen + "88", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Drag to explore
            <span style={{ fontSize: "1rem" }}>→</span>
          </div>
        </div>
      </div>

      {/* Horizontally scrollable card row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 px-6 md:px-16 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        {CULTURE_CARDS.map((card, i) => (
          <div
            key={i}
            className="snap-start shrink-0 flex flex-col justify-between p-8 border transition-colors font-archivo duration-200 group cursor-default"
            style={{
              width: "clamp(260px, 34vw, 380px)",
              minHeight: "260px",
              backgroundColor: i % 2 === 0 ? C.midGreen : "transparent", /* Alternating card bg */
              borderColor: C.accentGreen + "44",
            }}
          >
            {/* Card icon — Change in CULTURE_CARDS data above */}
            <div style={{ fontSize: "2rem", lineHeight: 1 }}>{card.icon}</div>
            <div>
              {/* Card label */}
              <div
                className="text-xl font-black font-archivo uppercase tracking-tight mb-3"
                style={{  color: C.white /* Card title color */ }}
              >
                {card.label}
              </div>
              {/* Card body */}
              <p className="text-sm leading-relaxed font-archivo" style={{  color: C.mintGreen /* Card body color */ }}>
                {card.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/** OPEN ROLES — filterable job board */
function OpenRolesSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeTab === "All" ? JOBS : JOBS.filter((j) => j.dept === activeTab);

  return (
    <section id="open-roles" className="py-24 px-6 md:px-16" style={{ backgroundColor: C.offWhite }}>
      <div className="max-w-7xl mx-auto">

        {/* Section header row */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 items-end">
          <div className="md:col-span-5">
            <Eyebrow>Open positions</Eyebrow>
            {/* Roles heading — Change this text */}
            <h2
              className="text-4xl md:text-6xl font-black uppercase leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: C.darkInk }}
            >
              Find your
              <br />
              next move
            </h2>
          </div>

          {/* Role count */}
          <div className="md:col-span-3 md:col-start-8 text-right">
            <div
              className="text-6xl font-black font-clash leading-none tabular-nums"
              style={{  color: C.brightGreen /* Role count color */ }}
            >
              {filtered.length}
            </div>
            <div className="text-xs tracking-widest font-archivo uppercase mt-1" style={{ color: C.midInk + "99" }}>
              {activeTab === "All" ? "Total" : activeTab} {filtered.length === 1 ? "role" : "roles"} {/* Auto-updates */}
            </div>
          </div>
        </div>

        {/* Department filter tabs — Change dept labels in DEPTS array above */}
        <div className="flex flex-wrap gap-2 mb-10 border-b pb-6" style={{ borderColor: C.accentGreen + "33" }}>
          {DEPTS.map((d) => (
            <button
              key={d}
              onClick={() => setActiveTab(d)}
              className="px-4 py-2 text-xs font-archivo tracking-widest uppercase transition-all duration-200"
              style={{
                
                backgroundColor: activeTab === d ? C.deepGreen : "transparent", /* Active tab bg */
                color: activeTab === d ? C.white : C.midInk, /* Active tab text */
                border: `1px solid ${activeTab === d ? C.deepGreen : C.accentGreen + "44"}`,
                cursor: "pointer",
              }}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Job rows */}
        <div>
          {filtered.map((job, i) => (
            <div
              key={job.id}
              className="grid grid-cols-12 gap-4 items-center py-5 border-b cursor-pointer transition-all duration-200"
              style={{
                borderColor: C.accentGreen + "28",
                backgroundColor: hoveredId === job.id ? C.midGreen + "12" : "transparent", /* Row hover bg */
                paddingLeft: hoveredId === job.id ? "1rem" : "0",
                paddingRight: hoveredId === job.id ? "1rem" : "0",
              }}
              onMouseEnter={() => setHoveredId(job.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Row index */}
              <div className="col-span-1 hidden md:block">
                <span className="text-xs tabular-nums font-archivo" style={{ color: C.accentGreen + "66" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Job title */}
              <div className="col-span-12 md:col-span-5">
                <span
                  className="text-lg md:text-xl font-black font-archivo uppercase tracking-tight"
                  style={{  color: C.darkInk /* Job title color */ }}
                >
                  {job.title}
                </span>
              </div>

              {/* Dept tag */}
              <div className="col-span-5 md:col-span-2">
                <span
                  className="text-xs tracking-widest font-archivo uppercase px-2 py-1"
                  style={{  color: C.accentGreen, border: `1px solid ${C.accentGreen}44` }}
                >
                  {job.dept}
                </span>
              </div>

              {/* Location */}
              <div className="col-span-4 md:col-span-2">
                <span className="text-sm font-archivo" style={{  color: C.midInk /* Location color */ }}>
                  {job.location}
                </span>
              </div>

              {/* Type + Arrow */}
              <div  className="col-span-3 md:col-span-2 flex items-center justify-end gap-3">
                <span onClick={() => setIsOpen(true)} className="text-xs hidden md:block font-archivo" style={{ color: C.midInk + "88" }}>
                  {job.type}
                </span>
                <span
                  className="transition-transform duration-200 text-lg"
                  style={{ color: C.brightGreen, transform: hoveredId === job.id ? "translateX(4px)" : "translateX(0)" }}
                >
                  →
                </span>
              </div>
            </div>
          ))}
          <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        serviceId="service_nlnhzd2"       // from EmailJS dashboard
        templateId="template_zjgqs1k"     // from EmailJS dashboard
        publicKey="sXmLsr6PApabpnmxa"       // from EmailJS Account → Public Key
      />
        </div>

        {/* No results state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-5xl font-black font-archivo uppercase" style={{  color: C.accentGreen + "55" }}>
              Nothing yet
            </div>
            <p className="mt-3 text-sm font-archivo" style={{  color: C.midInk + "88" }}>
              Check back soon — we're always growing.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}


/* ─────────────────────────────────────────────
   ROOT
   ───────────────────────────────────────────── */
export default function Careers() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <HeroSection />
      <CultureSection />
      <OpenRolesSection />
    </div>
  );
}
