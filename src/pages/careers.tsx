import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SEO } from "../components/SEO";
import { careersMeta } from "./data/seoMeta";

/* ─────────────────────────────────────────────
   COLOR PALETTE — light theme with provided tokens
   ───────────────────────────────────────────── */
const C = {
  heroBg:      "#f1f0ea", /* parchment */
  rolesBg:     "#e0ddcf", /* bone */
  surface:     "#F5FBEF", /* ivory */
  border:      "#bbd6d1", /* light muted teal */
  heading:     "#02090f", /* almost black */
  darkHeading: "#031926", /* ink black */
  body:        "#254D58", /* dark teal */
  muted:       "#468189", /* teal */
  mutedLight:  "#77aca2", /* muted teal */
  accent:      "#9D4810", /* chocolate brown */
  accentLight: "#c9ada7", /* almond silk */
  vanilla:     "#f4e9cd", /* vanilla cream */
};

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */
const JOBS = [
  { id: 5, title: "Sales and Marketing Manager", dept: "Commercial", location: "Singapore", type: "Full-time" }
];

const DEPTS = ["All", "Commercial", "Legal"];

/* ─────────────────────────────────────────────
   SHARED COMPONENTS
   ───────────────────────────────────────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="h-px w-8 shrink-0" style={{ backgroundColor: C.accent }} />
      <span
        className="text-xs tracking-[0.2em] uppercase font-medium"
        style={{ fontFamily: "'DM Mono', monospace", color: C.accent }}
      >
        {children}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SECTIONS
   ───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="min-h-screen grid md:grid-cols-2 relative overflow-hidden"
      style={{ backgroundColor: C.border }}
    >
      {/* LEFT — text panel */}
      <div className="flex flex-col justify-end px-6 md:px-16 pb-16 pt-32 relative z-10">
        {/* Ghost background number */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-0 font-generalsans pointer-events-none select-none"
          aria-hidden
          style={{
            fontSize: "clamp(14rem, 35vw, 48rem)",
            fontWeight: 900,
            color: "transparent",
            WebkitTextStroke: `1px ${C.muted}22`,
            lineHeight: 1,
            userSelect: "none",
            letterSpacing: "-0.06em",
            transform: "translateX(-8%) translateY(-50%)",
          }}
        >
          {JOBS.length}
        </div>

        <div className="relative">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-16" style={{ backgroundColor: C.accent }} />
            <span
              className="text-xs tracking-[0.25em] font-generalsans uppercase px-3 py-1"
              style={{ color: C.accent, border: `1px solid ${C.accent}66` }}
            >
              {JOBS.length} Open Roles
            </span>
          </div>

          <h1
            className="text-[7vw] md:text-[7.5vw] font-black font-sentient uppercase leading-[0.88] tracking-tight mb-10"
            style={{ color: C.darkHeading, animation: "slideUp 0.9s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            Build
            <br />
            <span style={{ color: C.accent }}>what</span>
            <br />
            moves
            <br />
            the world.
          </h1>

          <p
            className="text-base md:text-lg font-regular font-generalsans leading-relaxed max-w-xs"
            style={{ color: C.body, animation: "fadeIn 1s ease 0.6s both" }}
          >
            We're looking for talented individuals who believe global logistics can be smarter, faster and cleaner.
          </p>

          <button
            className="mt-10 flex items-center gap-3 text-sm font-generalsans tracking-widest uppercase transition-all duration-200 group"
            style={{ color: C.muted, background: "none", border: "none", cursor: "pointer" }}
            onClick={() => document.getElementById("open-roles")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span>See open roles</span>
            <span
              className="transition-transform duration-200 group-hover:translate-x-2"
              style={{ color: C.accent, fontSize: "1.2rem" }}
            >
              →
            </span>
          </button>
        </div>
      </div>

      {/* RIGHT — image panel */}
      <div className="relative min-h-[50vh] md:min-h-0" style={{ backgroundColor: C.border }}>
        <img
          src="/images/c.webp"
          alt="saudex team member at work in warehouse"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.85) saturate(0.85)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to right, ${C.border} 0%, transparent 40%)` }}
        />
      </div>

      <style>{`
        @keyframes slideUp { from { opacity:0; transform:translateY(50px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn  { from { opacity:0; } to { opacity:1; } }
      `}</style>
    </section>
  );
}

function OpenRolesSection() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeTab === "All" ? JOBS : JOBS.filter((j) => j.dept === activeTab);

  return (
    <section id="open-roles" className="py-24 px-6 md:px-16" style={{ backgroundColor: C.rolesBg }}>
      <div className="max-w-7xl mx-auto">

        {/* Section header row */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 items-end">
          <div className="md:col-span-5">
            <Eyebrow>Open positions</Eyebrow>
            <h2
              className="text-4xl md:text-6xl font-black uppercase leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: C.darkHeading }}
            >
              Find your
              <br />
              next move
            </h2>
          </div>

          <div className="md:col-span-3 md:col-start-8 text-right">
            <div
              className="text-6xl font-black font-sentient leading-none tabular-nums"
              style={{ color: C.accent }}
            >
              {filtered.length}
            </div>
            <div className="text-xs tracking-widest font-generalsans uppercase mt-1" style={{ color: C.body + "99" }}>
              {activeTab === "All" ? "Total" : activeTab} {filtered.length === 1 ? "role" : "roles"}
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div
          className="flex flex-wrap gap-2 mb-10 border-b pb-6"
          style={{ borderColor: C.border }}
        >
          {DEPTS.map((d) => (
            <button
              key={d}
              onClick={() => setActiveTab(d)}
              className="px-4 py-2 text-xs font-generalsans tracking-widest uppercase transition-all duration-200"
              style={{
                backgroundColor: activeTab === d ? C.darkHeading : "transparent",
                color: activeTab === d ? C.vanilla : C.body,
                border: `1px solid ${activeTab === d ? C.darkHeading : C.border}`,
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
                borderColor: C.border,
                backgroundColor: hoveredId === job.id ? C.muted + "14" : "transparent",
                paddingLeft: hoveredId === job.id ? "1rem" : "0",
                paddingRight: hoveredId === job.id ? "1rem" : "0",
              }}
              onMouseEnter={() => setHoveredId(job.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="col-span-1 hidden md:block">
                <span className="text-xs tabular-nums font-generalsans" style={{ color: C.mutedLight }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="col-span-12 md:col-span-5">
                <span
                  className="text-lg md:text-xl font-black font-generalsans uppercase tracking-tight"
                  style={{ color: C.darkHeading }}
                >
                  {job.title}
                </span>
              </div>

              <div className="col-span-5 md:col-span-2">
                <span
                  className="text-xs tracking-widest font-generalsans uppercase px-2 py-1"
                  style={{ color: C.accent, border: `1px solid ${C.accentLight}` }}
                >
                  {job.dept}
                </span>
              </div>

              <div className="col-span-4 md:col-span-2">
                <span className="text-sm font-generalsans" style={{ color: C.body }}>
                  {job.location}
                </span>
              </div>

              <div className="col-span-3 md:col-span-2 flex items-center justify-end gap-3">
                <span
                  onClick={() => navigate("/contact")}
                  className="text-xs hidden md:block font-generalsans"
                  style={{ color: C.body + "88" }}
                >
                  {job.type}
                </span>
                <span
                  className="transition-transform duration-200 text-lg"
                  style={{
                    color: C.accent,
                    transform: hoveredId === job.id ? "translateX(4px)" : "translateX(0)",
                  }}
                >
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-5xl font-black font-generalsans uppercase" style={{ color: C.mutedLight }}>
              Nothing yet
            </div>
            <p className="mt-3 text-sm font-generalsans" style={{ color: C.body + "88" }}>
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
    <>
      <SEO
        title={careersMeta.title}
        description={careersMeta.description}
        keywords={careersMeta.keywords}
        canonical={careersMeta.canonical}
        ogImage={careersMeta.ogImage}
      />
      <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <HeroSection />
        <OpenRolesSection />
      </div>
    </>
  );
}
