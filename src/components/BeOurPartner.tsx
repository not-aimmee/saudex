import { useState } from "react";
import ContactModal from './ContactModal';
import BlurText from "../../components/blurtext";

export default function BeOurPartner() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Section */}
      <section className="relative bg-[#050f0f] min-h-[340px] grid grid-cols-[1fr_1px_1fr] overflow-hidden">
        {/* Dot grid texture */}
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
            <span className="text-[11px]font-archivo font-regular font-medium tracking-[0.15em] text-white uppercase text-center leading-snug">
              Talk With
              <br />
              US
            </span>
          </button>
        </div>
        <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        serviceId="service_nlnhzd2"       // from EmailJS dashboard
        templateId="template_zjgqs1k"     // from EmailJS dashboard
        publicKey="sXmLsr6PApabpnmxa"       // from EmailJS Account → Public Key
      />
        {/* Divider */}
        <div className="bg-white/[0.08]" />

        {/* Right — Text */}
        <div className="relative z-10 flex flex-col justify-center px-10 py-12">
          <p className="uppercase text-[#228B5A] font-archivo text-left text-xl font-medium
    tracking-[0.4em]
    mb-6">
            your next step
          </p>
          <p className="uppercase 
    text-[#A3BDB8]
    font-archivo
    text-left
    text-lg
    font-medium
    mb-6
              ">
            GROW TOGETHER WITH US
          </p>
          <BlurText
  text="Be Our Partner."
  delay={120}
  animateBy="words"
  direction="top"
  className="
    text-white
    font-clash
    text-center
    text-8xl
    font-bold
  "
/>
          <p className="text-[#A3BDB8]
                text-lg
                mt-8
                max-w-xl">
            Join our growing network of partners and unlock new opportunities.
            We offer competitive terms, dedicated support, and a clear path to
            mutual growth.
          </p>
        </div>
      </section>
    </>
  );
}
