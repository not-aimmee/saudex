import { useState } from "react";
import {
  Phone, Mail, ArrowUpRight,
  Building2,
   Copy, Check, Download,
} from "lucide-react";

/* ─── Styles injected into <head> so everything lives in one file ─── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,800;9..144,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');

  * { scrollbar-width: none; box-sizing: border-box; }
  *::-webkit-scrollbar { display: none; }
  body { background: #fff; color: #0d1f15; font-family: 'Inter', sans-serif; margin: 0; }

  @keyframes shimmer-green {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 1;   transform: scale(1);    }
    50%       { opacity: 0.5; transform: scale(0.8);  }
  }
  @keyframes float-up {
    0%, 100% { transform: translateY(0);    }
    50%       { transform: translateY(-6px); }
  }

  .shimmer-green {
    background: linear-gradient(90deg, #2a7a4b, #3aab68, #8fc9a4, #3aab68, #2a7a4b);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer-green 4s linear infinite;
  }
  .pulse-dot  { animation: pulse-dot  2s ease-in-out infinite; }
  .float-card { animation: float-up   5s ease-in-out infinite; }

  .pill-hover { transition: border-color 0.18s; }
  .pill-hover:hover { border-color: #3aab68 !important; }
  .card-hover { transition: border-color 0.18s, background 0.18s; }
  .card-hover:hover { border-color: #3aab68 !important; }
  .btn-save { transition: background 0.25s, color 0.25s, box-shadow 0.25s; }
`;

/* ─── Data ──────────────────────────────────────────────────────────── */
const WORKER = {
  name: "Mohammed Noman Ali",
  role: "Head of Operations",
  department: "Logistics & Supply Chain",
  company: "Saudex Global Pte Ltd.",
  phone: "+65 8535 1308",
  email: "Noman.ali@saudexglobal.com",
  photo:"/images/pfp noman.webp",
};

const SOCIALS = [
  {
    label: "LinkedIn",
    handle: "mohammednomanali128",
    href: "https://www.linkedin.com/in/mohammednomanali128?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3aab68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Location",
    handle: "10 Anson Rd, #33-03 International Plaza, Singapore 079903",
    href: "https://maps.app.goo.gl/GuZCpqeWrhzLG6zD7",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3aab68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M12 22s8-7.58 8-13a8 8 0 1 0-16 0c0 5.42 8 13 8 13z" />
  <circle cx="12" cy="9" r="2.5" />
</svg>
    ),
  },
  {
    label: "Website",
    handle: "https://www.saudexglobal.com",
    href: "https://www.saudexglobal.com",
    svg: (
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3aab68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
      <path d="M2 12h20"/></svg>
    ),
  },
];



/* ─── Sub-components ─────────────────────────────────────────────────── */
function Divider() {
  return <div style={{ height: 1, background: "#f0f7f3", margin: "0 20px" }} />;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 16, color: "#0d1f15", marginBottom: 12, marginTop: 0 }}>
      {children}
    </h2>
  );
}

function ContactRow({
  Icon, text, href, copyable,
}: {
  Icon: React.ElementType; text: string; href: string; copyable?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <a
      href={href}
      onClick={copyable ? (e) => { e.preventDefault(); navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); } : undefined}
      className="pill-hover"
      style={{
        display: "flex", alignItems: "center", gap: 10,
        borderRadius: 16, padding: "12px 16px",
        background: "#f7faf8", border: "1.5px solid #c4e8d1",
        textDecoration: "none", color: "#0d1f15",
      }}
    >
      <Icon size={16} color="#3aab68" strokeWidth={2} style={{ flexShrink: 0 }} />
      <span style={{ fontSize: 14, fontWeight: 500, flex: 1 }}>{text}</span>
      {copyable && (
        <span style={{ color: "#8fc9a4", display: "flex" }}>
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </span>
      )}
    </a>
  );
}

/* ─── Helpers ─────────────────────────────────────────────────────────── */
function buildVCard() {
  // Escape commas/semicolons/newlines per vCard spec
  const esc = (s: string) => s.replace(/([,;])/g, "\\$1");

  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${esc(WORKER.name)}`,
    `N:${esc(WORKER.name)};;;;`,
    `ORG:${esc(WORKER.company)};${esc(WORKER.department)}`,
    `TITLE:${esc(WORKER.role)}`,
    `TEL;TYPE=CELL,VOICE:${WORKER.phone}`,
    `EMAIL;TYPE=INTERNET,WORK:${WORKER.email}`,
    "END:VCARD",
    "",
  ].join("\r\n"); // vCard spec requires CRLF line endings
}

function downloadVCard() {
  const blob = new Blob([buildVCard()], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${WORKER.name.replace(/\s+/g, "_")}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Give the browser a tick to start the download before revoking
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/* ─── Main component ─────────────────────────────────────────────────── */
export default function NfcCard() {
  const [saved, setSaved] = useState(false);

  return (
    <>
      {/* Inject all styles from this single file */}
      <style>{STYLES}</style>

      <div style={{ background: "#fff", color: "#0d1f15", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>


        {/* ── PROFILE HERO ── */}
        <section style={{ position: "relative", overflow: "hidden", padding: "40px 20px 36px", background: "#0d2e1e " }}>
          {/* dot grid overlay */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.08, backgroundImage: "radial-gradient(#3aab68 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />

          <div style={{ position: "relative", maxWidth: 400, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 20 }}>
            {/* Logo */}
           

            {/* Avatar */}
            <div style={{ position: "relative" }}>
              <div style={{ width: 104, height: 104, borderRadius: "50%", overflow: "hidden", border: "3px solid #3aab68", boxShadow: "0 0 0 6px #3aab6828" }}>
                <img src={WORKER.photo} alt={`Portrait of ${WORKER.name}`} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              
            </div>

            {/* Name */}
            <div>
              <h1 style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 28, color: "#ffffff", letterSpacing: "-0.02em", margin: "0 0 4px" }}>{WORKER.name}</h1>
              <p style={{ color: "#8fc9a4", fontSize: 24, fontWeight: 600, margin: "0 0 6px" }}>{WORKER.role}</p>
              <p style={{ color: "#c4e8d1", fontSize: 16, margin: 0 }}> {WORKER.company}</p>
            </div>

            {/* Save button */}
            <button
              className="btn-save"
              onClick={() => {
                downloadVCard();
                setSaved(true);
                setTimeout(() => setSaved(false), 2500);
              }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                width: "100%", maxWidth: 320, borderRadius: 16, padding: "14px 24px",
                background: saved ? "#164d32" : "#82eaa8",
                color: saved ? "#8fc9a4" : "#061510",
                fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 15,
                border: "none", cursor: "pointer",
                boxShadow: saved ? "none" : "0 2px 8px rgba(0,0,0,0.25)",
              }}
            >
              {saved ? <Check size={17} /> : <Download size={17} />}
              {saved ? "Saved to Contacts!" : "Save Contact"}
            </button>
          </div>
        </section>

        {/* ── WHITE CONTENT ── */}
        <div style={{ background: "#ffffff" }}>

          {/* Contact */}
          <section style={{ padding: "32px 20px 32px", maxWidth: 440, fontSize: 16, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
            <SectionLabel>Contact</SectionLabel>
            <ContactRow Icon={Phone}  text={WORKER.phone}    href={`tel:${WORKER.phone}`} copyable />
            <ContactRow Icon={Mail}   text={WORKER.email}    href={`mailto:${WORKER.email}`} copyable />
          </section>

          {/* Socials */}
          <section style={{ padding: "0 20px 32px", maxWidth: 440, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
            <SectionLabel>Socials</SectionLabel>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} className="pill-hover" style={{ display: "flex", alignItems: "center", gap: 12, borderRadius: 16, padding: "12px 16px", background: "#f7faf8", border: "1.5px solid #c4e8d1", textDecoration: "none" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10,  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {s.svg}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "#0d1f15" }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: "#6b7280" }}>{s.handle}</div>
                </div>
                <ArrowUpRight size={15} color="#c4e8d1" />
              </a>
            ))}
          </section>

          <Divider />

          {/* About */}
          <section style={{ padding: "32px 20px", maxWidth: 440, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <Building2 size={16} color="#3aab68" strokeWidth={2} />
              <SectionLabel>About Saudex Global Pte. Ltd.</SectionLabel>
            </div>
            <p style={{ color: "#274834", fontSize: 14, lineHeight: 1.75, margin: "0 0 20px" }}>
Singapore-based international trading & supply chain enterprise connecting global suppliers, brands, and markets across Asia, the Middle East, and beyond. We specialize in strategic sourcing, FMCG trade, import & export, logistics, and end-to-end supply chain solutions.  </p>
          </section>

          <Divider />

          <Divider />
          {/* Photo strip */}
          <section style={{ padding: "0 20px 32px", maxWidth: 440, margin: "0 auto" }}>
            <div style={{ borderRadius: 20, overflow: "hidden", position: "relative", height: 160 }}>
              <img
                src="https://images.unsplash.com/photo-1590497008432-598f04441de8?w=700&h=220&fit=crop&auto=format"
                alt="Busy shipping port with stacked containers at dusk"
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
              />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", padding: 20, background: "linear-gradient(to top, #061510cc 0%, transparent 60%)" }}>
                <p style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 16, color: "#ffffff", lineHeight: 1.3, margin: 0 }}>
                  Every pallet. Every port.{" "}
                  <span style={{ color: "#ffffff" }}>Always visible.</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}