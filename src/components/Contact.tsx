import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CalendarDays, Check, Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import { useWebMCP } from "usewebmcp";

const isPrerender = typeof navigator !== "undefined" && navigator.webdriver;

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_nlnhzd2";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_zjgqs1k";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "sXmLsr6PApabpnmxa";

/* ── palette tokens ───────────────────────────────────────────────── */
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

type FormState = "idle" | "submitting" | "success" | "error";
type FormData = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialForm: FormData = { fullName: "", email: "", phone: "", service: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setState("submitting");
    setErrorMsg("");
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY })
      .then(() => { setForm(initialForm); setState("success"); })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setErrorMsg("Something went wrong sending your enquiry. Please try again.");
        setState("error");
      });
  };

  const onReset = () => { setForm(initialForm); setState("idle"); setErrorMsg(""); };

  if (!isPrerender) {
    useWebMCP({
      name: "submit_contact_enquiry",
      description:
        "Submit a freight, warehousing, or logistics enquiry to SAUDEX GLOBAL's sales team. " +
        "Use this when someone wants a quote, wants to ask about a service, or wants to get in touch.",
      inputSchema: {
        type: "object",
        properties: {
          fullName: { type: "string", description: "Full name of the person making the enquiry" },
          email:    { type: "string", description: "Contact email address" },
          phone:    { type: "string", description: "Contact phone number (optional)" },
          service:  { type: "string", enum: ["air", "sea", "land", "customs", "warehouse", "other"],
            description: "Which service the enquiry relates to" },
          message:  { type: "string", description: "Details of the enquiry" },
        },
        required: ["fullName", "email", "service", "message"],
      } as const,
      execute: async (args) => {
        setState("submitting"); setErrorMsg("");
        try {
          await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
            { fullName: args.fullName, email: args.email, phone: args.phone ?? "", service: args.service, message: args.message },
            { publicKey: EMAILJS_PUBLIC_KEY });
          setForm(initialForm); setState("success");
          return { success: true, message: "Enquiry sent to SAUDEX GLOBAL. Customer service hours are 9:00 AM–5:00 PM, Monday–Friday." };
        } catch (err) {
          console.error("EmailJS error (WebMCP tool):", err);
          setErrorMsg("Something went wrong sending your enquiry. Please try again.");
          setState("error");
          return { success: false, message: "Failed to send the enquiry. Please try again." };
        }
      },
    });

    useWebMCP({
      name: "get_saudex_contact_info",
      description: "Get SAUDEX GLOBAL's customer service hours, email, phone numbers, and office address.",
      inputSchema: { type: "object", properties: {} } as const,
      execute: async () => ({
        hours: "9:00 AM – 5:00 PM, Monday – Friday",
        email: "sales@saudexglobal.com",
        phoneSingapore: "+65 8535 1308",
        phoneMalaysia: "+60 11511 68040",
        address: "10 Anson Rd, #33-03 International Plaza, Singapore 079903",
      }),
    });
  }

  return (
    <div style={{  backgroundColor: C.parchment, color: C.inkBlack }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{ background: `linear-gradient(160deg, ${C.almostBlack} 0%, ${C.inkBlack} 40%, ${C.spaceIndigo} 100%)` }}
        className="relative overflow-hidden min-h-[68vh] flex flex-col justify-end px-6 md:px-16 pb-16"
      >
        {/* deep-sea glow orbs */}
        <div className="absolute -top-24 -left-16 w-[480px] h-[480px] rounded-full pointer-events-none orb-drift-a"
          style={{ background: `radial-gradient(circle, ${C.darkTeal}55 0%, transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute top-1/3 right-0 w-[360px] h-[360px] rounded-full pointer-events-none orb-drift-b"
          style={{ background: `radial-gradient(circle, ${C.teal}40 0%, transparent 65%)`, filter: "blur(90px)" }} />
        <div className="absolute bottom-0 left-1/2 w-[320px] h-[320px] rounded-full pointer-events-none orb-drift-c"
          style={{ background: `radial-gradient(circle, ${C.chocolateBrown}33 0%, transparent 60%)`, filter: "blur(70px)" }} />

        {/* fine dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, ${C.lightMutedTeal}18 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }} />

        {/* horizontal rule accent */}
        

        {/* bottom-left corner bracket */}
        <div className="absolute left-6 md:left-14 bottom-12 w-8 h-8 border-l-2 border-b-2 pointer-events-none"
          />

        {/* headline block */}
        <div className="relative z-10 max-w-4xl">
          {/* overline */}
          <p className="mb-6 text-sm font-generalsans font-light tracking-[0.3em] uppercase" style={{ color: C.almondSilk }}>
            Get in Touch
          </p>

          {/* big split title */}
          <h1 className="leading-none font-sentient font-light" style={{ fontSize: "clamp(3rem, 10vw, 7rem)", color: C.ivory }}>
            Contact
            <span className="block" style={{ color: C.ivory, WebkitTextStroke: `1px ${C.ivory}` }}>
              Us
            </span>
          </h1>

          {/* thin separator */}
          
            <p className="text-sm" style={{ color: C.bone }}>
              We move your cargo, you move your business forward.
            </p>
          
        </div>


        <style>{`
          @keyframes orbA { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-30px,40px)} }
          @keyframes orbB { 0%,100%{transform:translate(0,0)} 50%{transform:translate(25px,-35px)} }
          @keyframes orbC { 0%,100%{transform:translate(0,0)} 50%{transform:translate(40px,20px)} }
          .orb-drift-a{animation:orbA 18s ease-in-out infinite}
          .orb-drift-b{animation:orbB 22s ease-in-out infinite}
          .orb-drift-c{animation:orbC 16s ease-in-out infinite}
        `}</style>
      </section>

      {/* ── FORM SECTION ─────────────────────────────────────────────── */}
      <div style={{ backgroundColor: C.ivory }}>
        <section className="relative max-w-5xl mx-auto px-8 py-16">
          {/* section header */}
          <div className="mb-10">
            <h2 className="text-4xl font-sentient font-regular uppercase tracking-wide mb-2" style={{ color: C.inkBlack }}>
              Got a Question?
            </h2>
            <div className="w-12 h-[3px] mb-4"  />
            <p className="font-generalsans font-light" style={{ color: C.darkTeal }}>
              Submit the form below or{" "}
              <a target="_blank" rel="noreferrer" style={{ color: C.darkTeal }}>
                WhatsApp
              </a>{" "}
              us and we will get back to you soonest.
            </p>
          </div>

          <form ref={formRef} onSubmit={onSubmit} onReset={onReset} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="font-generalsans">
                <label className="block text-xs font-regular uppercase tracking-wider mb-1" style={{ color: C.darkTeal }}>
                  Full Name
                </label>
                <input
                  name="fullName" value={form.fullName} onChange={onChange}
                  required type="text" placeholder="Jane Smith"
                  style={{ borderColor: C.bone, color: C.inkBlack, backgroundColor: C.ivory }}
                  className="w-full border rounded px-3 py-2 text-sm placeholder-[#77aca2] focus:outline-none transition"
                  onFocus={e => e.currentTarget.style.borderColor = C.teal}
                  onBlur={e => e.currentTarget.style.borderColor = C.bone}
                />
              </div>
              <div className="font-generalsans">
                <label className="block text-xs font-regular uppercase tracking-wider mb-1" style={{ color: C.darkTeal }}>
                  Email Address
                </label>
                <input
                  name="email" value={form.email} onChange={onChange}
                  required type="email" placeholder="jane@company.com"
                  style={{ borderColor: C.bone, color: C.inkBlack, backgroundColor: C.ivory }}
                  className="w-full border rounded px-3 py-2 text-sm placeholder-[#77aca2] focus:outline-none transition"
                  onFocus={e => e.currentTarget.style.borderColor = C.teal}
                  onBlur={e => e.currentTarget.style.borderColor = C.bone}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-generalsans">
              <div>
                <label className="block text-xs font-regular uppercase tracking-wider mb-1" style={{ color: C.darkTeal }}>
                  Phone
                </label>
                <input
                  name="phone" value={form.phone} onChange={onChange}
                  type="tel" placeholder="+1 555 000 0000"
                  style={{ borderColor: C.bone, color: C.inkBlack, backgroundColor: C.ivory }}
                  className="w-full border rounded px-3 py-2 text-sm placeholder-[#77aca2] focus:outline-none transition"
                  onFocus={e => e.currentTarget.style.borderColor = C.teal}
                  onBlur={e => e.currentTarget.style.borderColor = C.bone}
                />
              </div>
              <div>
                <label className="block text-xs font-regular uppercase tracking-wider mb-1" style={{ color: C.darkTeal }}>
                  Service
                </label>
                <select
                  name="service" value={form.service} onChange={onChange} required
                  style={{ borderColor: C.bone, color: form.service ? C.inkBlack : C.darkTeal, backgroundColor: C.ivory }}
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none transition cursor-pointer"
                  onFocus={e => e.currentTarget.style.borderColor = C.teal}
                  onBlur={e => e.currentTarget.style.borderColor = C.bone}
                >
                  <option value="" disabled>Select...</option>
                  <option value="air">Air Freight</option>
                  <option value="sea">Sea Freight</option>
                  <option value="land">Land Freight</option>
                  <option value="customs">Customs Clearance</option>
                  <option value="warehouse">Warehousing</option>
                  <option value="distribution">Distribution</option>
                  <option value="scc">Supply Chain Consulting</option>
                  <option value="cross_border">Cross Border Trade Advisory</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="font-generalsans">
              <label className="block text-xs font-regular uppercase tracking-wider mb-1" style={{ color: C.darkTeal }}>
                Your Message
              </label>
              <textarea
                name="message" value={form.message} onChange={onChange}
                required rows={6}
                placeholder="Placing a bulk order? Loose pack goods? Tell us what you need and we will get in touch as soon as we can."
                style={{ borderColor: C.bone, color: C.inkBlack, backgroundColor: C.ivory }}
                className="w-full border rounded px-3 py-2 text-sm placeholder-[#77aca2] focus:outline-none resize-y transition"
                onFocus={e => e.currentTarget.style.borderColor = C.teal}
                onBlur={e => e.currentTarget.style.borderColor = C.bone}
              />
            </div>

            {state === "success" && (
              <div className="flex items-center gap-2 rounded border px-4 py-3 text-sm"
                style={{ borderColor: C.lightMutedTeal, backgroundColor: `${C.lightMutedTeal}30`, color: C.darkTeal }}>
                <Check size={18} className="shrink-0" />
                Your enquiry has been sent successfully. We will contact you soon.
              </div>
            )}

            {state === "error" && (
              <div className="rounded border px-4 py-3 text-sm"
                style={{ borderColor: `${C.chocolateBrown}55`, backgroundColor: `${C.almondSilk}25`, color: C.chocolateBrown }}>
                {errorMsg}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2 font-generalsans">
              <button
                type="submit"
                disabled={state === "submitting"}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-regular transition disabled:cursor-not-allowed disabled:opacity-70"
                style={{ backgroundColor: C.teal, color: C.ivory }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = C.darkTeal)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = C.teal)}
              >
                {state === "submitting" ? "Sending…" : "Submit Enquiry"}
                <Send size={16} />
              </button>

              <button
                type="reset"
                className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-regular transition"
                style={{ borderColor: C.mutedTeal, color: C.darkTeal, backgroundColor: "transparent" }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = C.bone; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; }}
              >
                Clear
              </button>
            </div>
          </form>
        </section>

        {/* ── CUSTOMER SERVICE INFO ────────────────────────────────────── */}
        <section
          style={{
            background: `linear-gradient(160deg, ${C.almostBlack} 0%, ${C.inkBlack} 40%, ${C.spaceIndigo} 100%)`,
          }}
          className="w-full"
        >
          {/* same width + side padding as the form section so everything lines up */}
          <div className="max-w-5xl mx-auto px-8 py-20">
            <h2
              className="text-4xl font-generalsans font-light uppercase tracking-wide mb-2"
              style={{ color: C.ivory }}
            >
              Customer Service
            </h2>
            <div className="w-12 h-[3px] mb-10 rounded-full" />

            <ul className="space-y-4 text-base font-generalsans font-regular" style={{ color: C.ivory }}>
              {[
                { icon: <Clock3 size={20} />, text: "9:00 AM – 5:00 PM" },
                { icon: <CalendarDays size={20} />, text: "Monday – Friday" },
                { icon: <Mail size={20} />, text: "sales@saudexglobal.com" },
                { icon: <Phone size={20} />, text: "(+65) 8535 1308" },
                { icon: <Phone size={20} />, text: "(+60) 11511 68040 (Malaysia)" },
                { icon: <MapPin size={20} />, text: "10 Anson Rd, #33-03 International Plaza, Singapore 079903" },
              ].map(({ icon, text }, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span style={{ color: C.lightMutedTeal }} className="shrink-0">{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── MAP ──────────────────────────────────────────────────────── */}
        <div className="w-full h-80"
          style={{ filter: "sepia(30%) hue-rotate(150deg) saturate(0.7)" }}>
          <iframe
            title="Location Map"
            width="100%" height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4145611232532!2d103.84510884242985!3d1.2758854342965082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da192f8428d57d%3A0xe83688a9109a630a!2sInternational%20Plaza!5e0!3m2!1sen!2sin!4v1789047154696!5m2!1sen!2sin"
          />
        </div>
      </div>
    </div>
  );
}