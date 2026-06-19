import { useState } from "react";
import { Helmet } from "react-helmet-async";
import ContactModal from "../components/ContactModal";
import BlurText from "../../components/blurtext";

const TRACKS = [
  {
    label: "Reseller",
    description:
      "Sell our platform under your own brand. You own the client relationship, we handle the engine underneath.",
  },
  {
    label: "Technology",
    description:
      "Integrate our tools into your product through API access and joint engineering support.",
  },
  {
    label: "Referral",
    description:
      "Send us qualified leads and earn commission on every partner who signs and stays.",
  },
];

const BENEFITS = [
  {
    title: "Revenue share",
    description: "Transparent margins on every deal, paid out monthly with no hidden tiers.",
  },
  {
    title: "Dedicated support",
    description: "A named point of contact who knows your account, not a rotating queue.",
  },
  {
    title: "Co-marketing",
    description: "Joint case studies, launch announcements, and event placement when it fits.",
  },
  {
    title: "Early access",
    description: "New features and roadmap visibility before they reach the public.",
  },
];

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

export default function BeOurPartner() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Be Our Partner | Saudex</title>
        <meta
          name="description"
          content="Join Saudex's partner network. Explore reseller, technology, and referral partnership tracks built for mutual growth."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-[#050f0f] overflow-hidden">
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-10 pt-32 pb-24 text-center">
          <p className="uppercase text-[#228B5A] font-archivo text-xl font-medium tracking-[0.4em] mb-6">
            partnerships
          </p>
          <div className="flex justify-center">
          <BlurText
            text="Be Our Partner."
            delay={120}
            animateBy="words"
            direction="top"
            className="text-white font-clash  text-8xl font-bold"
          />
          </div>
          <p className="text-[#A3BDB8] text-lg mt-8 max-w-xl mx-auto">
            Join our growing network of partners and unlock new opportunities.
            We offer competitive terms, dedicated support, and a clear path to
            mutual growth.
          </p>
        </div>
      </section>

      {/* Partnership tracks */}
      <section className="relative bg-[#050f0f] border-t border-white/[0.08] px-10 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase text-[#228B5A] font-archivo text-sm font-medium tracking-[0.3em] mb-4">
            choose your track
          </p>
          <h2 className="text-white font-clash text-4xl font-bold mb-12 max-w-2xl">
            Three ways to partner with us.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.08]">
            {TRACKS.map((track) => (
              <div key={track.label} className="bg-[#050f0f] p-8">
                <h3 className="text-white font-clash text-2xl font-bold mb-3">
                  {track.label}
                </h3>
                <p className="text-[#A3BDB8] text-base leading-relaxed">
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative bg-[#050f0f] border-t border-white/[0.08] px-10 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase text-[#228B5A] font-archivo text-sm font-medium tracking-[0.3em] mb-4">
            what you get
          </p>
          <h2 className="text-white font-clash text-4xl font-bold mb-12 max-w-2xl">
            Built for partners who stay.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="border-l border-[#228B5A]/40 pl-6">
                <h3 className="text-white font-archivo text-lg font-medium mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#A3BDB8] text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative bg-[#050f0f] border-t border-white/[0.08] px-10 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase text-[#228B5A] font-archivo text-sm font-medium tracking-[0.3em] mb-4">
            how it works
          </p>
          <h2 className="text-white font-clash text-4xl font-bold mb-12 max-w-2xl">
            From application to launch.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {STEPS.map((step) => (
              <div key={step.number}>
                <span className="text-[#228B5A] font-clash text-3xl font-bold">
                  {step.number}
                </span>
                <h3 className="text-white font-archivo text-lg font-medium mt-3 mb-2">
                  {step.title}
                </h3>
                <p className="text-[#A3BDB8] text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#050f0f] border-t border-white/[0.08] min-h-[340px] grid grid-cols-[1fr_1px_1fr] overflow-hidden">
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Left — Contact circle */}
        <div className="flex items-center justify-center px-10 py-12">
          <button
            onClick={() => setIsOpen(true)}
            className="w-48 h-48 rounded-full border border-white/20 flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:border-emerald-500/60 hover:bg-emerald-500/5 cursor-pointer"
          >
            <span className="text-[11px] font-archivo font-medium tracking-[0.15em] text-white uppercase text-center leading-snug">
              Talk With
              <br />
              US
            </span>
          </button>
        </div>
        <ContactModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          serviceId="service_nlnhzd2" // from EmailJS dashboard
          templateId="template_zjgqs1k" // from EmailJS dashboard
          publicKey="sXmLsr6PApabpnmxa" // from EmailJS Account → Public Key
        />

        {/* Divider */}
        <div className="bg-white/[0.08]" />

        {/* Right — Text */}
        <div className="relative z-10 flex flex-col justify-center px-10 py-12">
          <p className="uppercase text-[#228B5A] font-archivo text-left text-xl font-medium tracking-[0.4em] mb-6">
            your next step
          </p>
          <p className="uppercase text-[#A3BDB8] font-archivo text-left text-lg font-medium mb-6">
            ready to apply?
          </p>
          <p className="text-white font-clash text-4xl font-bold mb-6">
            Let's talk partnership.
          </p>
          <p className="text-[#A3BDB8] text-lg max-w-xl">
            Reach out and we'll walk you through the right track for your
            business.
          </p>
        </div>
      </section>
    </>
  );
}
