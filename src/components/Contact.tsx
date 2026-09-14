import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CalendarDays, Check, Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import { useWebMCP } from "usewebmcp";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_nlnhzd2";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_zjgqs1k";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "sXmLsr6PApabpnmxa";

type FormState = "idle" | "submitting" | "success" | "error";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setState("submitting");
    setErrorMsg("");

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setForm(initialForm);
        setState("success");
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setErrorMsg("Something went wrong sending your enquiry. Please try again.");
        setState("error");
      });
  };

  const onReset = () => {
    setForm(initialForm);
    setState("idle");
    setErrorMsg("");
  };

  // --- WebMCP: let AI agents submit an enquiry on the user's behalf ---
  // This does not touch the visible form — it fills the same EmailJS
  // template directly, then updates the same state the form uses so
  // the success/error banner still shows on screen.
  useWebMCP({
    name: "submit_contact_enquiry",
    description:
      "Submit a freight, warehousing, or logistics enquiry to SAUDEX GLOBAL's sales team. " +
      "Use this when someone wants a quote, wants to ask about a service, or wants to get in touch.",
    inputSchema: {
      type: "object",
      properties: {
        fullName: { type: "string", description: "Full name of the person making the enquiry" },
        email: { type: "string", description: "Contact email address" },
        phone: { type: "string", description: "Contact phone number (optional)" },
        service: {
          type: "string",
          enum: ["air", "sea", "land", "customs", "warehouse", "other"],
          description:
            "Which service the enquiry relates to: air freight, sea freight, land freight, customs clearance, warehousing, or other",
        },
        message: {
          type: "string",
          description: "Details of the enquiry, e.g. cargo type, origin/destination, volume, timing",
        },
      },
      required: ["fullName", "email", "service", "message"],
    } as const,
    execute: async (args) => {
      setState("submitting");
      setErrorMsg("");
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            fullName: args.fullName,
            email: args.email,
            phone: args.phone ?? "",
            service: args.service,
            message: args.message,
          },
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
        setForm(initialForm);
        setState("success");
        return {
          success: true,
          message:
            "Enquiry sent to SAUDEX GLOBAL. Customer service hours are 9:00 AM–5:00 PM, Monday–Friday.",
        };
      } catch (err) {
        console.error("EmailJS error (WebMCP tool):", err);
        setErrorMsg("Something went wrong sending your enquiry. Please try again.");
        setState("error");
        return { success: false, message: "Failed to send the enquiry. Please try again." };
      }
    },
  });

  // --- WebMCP: read-only tool so agents can answer "how do I contact them" ---
  useWebMCP({
    name: "get_saudex_contact_info",
    description:
      "Get SAUDEX GLOBAL's customer service hours, email, phone numbers, and office address.",
    inputSchema: { type: "object", properties: {} } as const,
    execute: async () => ({
      hours: "9:00 AM – 5:00 PM, Monday – Friday",
      email: "sales@saudexglobal.com",
      phoneSingapore: "+65 8535 1308",
      phoneMalaysia: "+60 11511 68040",
      address: "10 Anson Rd, #33-03 International Plaza, Singapore 079903",
    }),
  });

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }} className="min-h-screen bg-[#f0faf0] text-black">
      <section className="relative overflow-hidden bg-[#050F0F] text-white min-h-[60vh] md:min-h-[70vh] flex items-end pb-12 md:pb-16 px-6 md:px-16">
        {/* base photo + directional overlay */}
        <div className="absolute inset-0 bg-[#050F0F]/85">
          <img
            src="/images/c.webp"
            alt="saudex team member at work in warehouse"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.75) saturate(0.7)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, #061510 0%, transparent 60%)" }}
          />
        </div>

        {/* wavy gradient blobs — the "interest" layer */}
        <div className="absolute -top-32 -left-20 w-[550px] h-[550px] rounded-full bg-[#2eb82e] opacity-20 blur-[140px] animate-drift-slow pointer-events-none" />
        <div className="absolute top-1/4 -right-10 w-[450px] h-[450px] rounded-full bg-[#4cde4c] opacity-15 blur-[130px] animate-drift-slower pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[#7eed7e] opacity-10 blur-[110px] animate-drift pointer-events-none" />

        {/* faint grid for texture/depth */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* soft radial glow right behind the headline */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(76,222,76,0.18) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mr-auto text-left">
          <h1
            className="font-semibold leading-[0.92] text-[#F7FAF8] text-xl md:text-6xl font-clash text-left md:text-left mb-4"
            style={{  letterSpacing: "0.06em" }}
          >
            Contact Us
          </h1>
        </div>

        <style>{`
          @keyframes drift {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(40px, 30px); }
          }
          @keyframes driftSlow {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-30px, 40px); }
          }
          @keyframes driftSlower {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(20px, -35px); }
          }
          .animate-drift { animation: drift 14s ease-in-out infinite; }
          .animate-drift-slow { animation: driftSlow 18s ease-in-out infinite; }
          .animate-drift-slower { animation: driftSlower 20s ease-in-out infinite; }
        `}</style>
      </section>

      <div className="relative bg-white font-archivo">
        <section className="relative max-w-5xl mx-auto px-8 py-16">
          <h2 className="text-4xl font-extrabold text-black uppercase tracking-wide mb-3">
            Got a Question?
          </h2>
          <p className="text-gray-700 mb-10">
            Submit the form below or{" "}
            <a  target="_blank" rel="noreferrer" className="text-black hover:underline">
              whatsapp
            </a>{" "}
            us and we will get back to you soonest.
          </p>

          <form ref={formRef} onSubmit={onSubmit} onReset={onReset} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={onChange}
                  required
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#3aab68]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  type="email"
                  placeholder="jane@company.com"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#3aab68]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                  Phone
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  type="tel"
                  placeholder="+1 555 000 0000"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#3aab68]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                  Service
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-[#3aab68] cursor-pointer"
                >
                  <option value="" disabled>Select...</option>
                  <option value="air">Air Freight</option>
                  <option value="sea">Sea Freight</option>
                  <option value="land">Land Freight</option>
                  <option value="customs">Customs Clearance</option>
                  <option value="warehouse">Warehousing</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={6}
                placeholder="Placing a Bulk order? Lose pack goods? Tell us what you need and we will get in touch as soon as we can."
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#3aab68] resize-y"
              />
            </div>

            {state === "success" && (
              <div className="flex items-center gap-2 rounded border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-black">
                <Check size={18} className="shrink-0" />
                Your enquiry has been sent successfully. We will contact you soon.
              </div>
            )}

            {state === "error" && (
              <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{errorMsg}</div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                disabled={state === "submitting"}
                className="inline-flex items-center justify-center gap-2 rounded bg-[#3aab68] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8fc9a4] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {state === "submitting" ? "Sending..." : "Send Enquiry"}
                <Send size={16} />
              </button>

              <button
                type="reset"
                className="inline-flex items-center justify-center rounded border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
              >
                Clear
              </button>
            </div>
          </form>
        </section>

        <section className="max-w-5xl mx-auto px-8 py-16">
         
          <h2 className="text-3xl font-extrabold text-black uppercase tracking-wide mb-2">
            Customer Service
          </h2>
          <div className="w-10 h-0.5  mb-8" />

          <ul className="space-y-4 text-gray-800 text-base">
            <li className="flex items-center gap-4">
              <Clock3 size={20} className="text-black shrink-0" />
              <span>9:00 AM – 5:00 PM</span>
            </li>
            <li className="flex items-center gap-4">
              <CalendarDays size={20} className="text-black shrink-0" />
              <span>Monday – Friday</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={20} className="text-black shrink-0" />
              <span>sales@saudexglobal.com</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={20} className="text-black shrink-0" />
              <span>(+65) 8535 1308</span>            
            </li>
            <li className="flex items-center gap-4">
              <Phone size={20} className="text-black shrink-0" />
              <span>(+60) 11511 68040 (Malaysia)</span>
              </li>
            <li className="flex items-center gap-4">
              <MapPin size={20} className="text-black shrink-0" />
              <span>10 Anson Rd, #33-03 International Plaza, Singapore 079903</span>
            </li>
          </ul>
        </section>

        <div className="w-full h-80">
          <iframe
            title="Location Map"
            width="100%"
            height="100%"
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