'use client';
import { SEO } from './SEO';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlurText from "../../components/blurtext";
import { ArrowUpRight } from 'lucide-react';
import { ctaMeta } from '../pages/data/seoMeta';
import ContactModal from './ContactModal';

export default function CTA() {
  const [hovered, setHovered] = useState(false);
  const [charge, setCharge] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [circleEntryPoint, setCircleEntryPoint] = useState({ x: 50, y: 50 });
  const [fillProgress, setFillProgress] = useState(0);
  const [isCursorInsideCTA, setIsCursorInsideCTA] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    const buttonElement = document.querySelector('.cta-button') as HTMLButtonElement;
    if (!buttonElement) return;

    const rect = buttonElement.getBoundingClientRect();
    const radius = rect.width / 2;
    const centerX = rect.left + radius;
    const centerY = rect.top + radius;

    const dx = mousePos.x - centerX;
    const dy = mousePos.y - centerY;
    const distance = Math.hypot(dx, dy);
     const inside = distance <= radius;
  setIsCursorInsideCTA(inside);
    if (inside) {
      setCircleEntryPoint({
        x: ((dx / rect.width) * 100) + 50,
        y: ((dy / rect.height) * 100) + 50,
      });
      setFillProgress((prev) => {
        const targetProgress = Math.min(1, prev + 0.04);
        const easedProgress = Math.sin((targetProgress * Math.PI) / 2);
        return easedProgress;
      });
    } else {
      setFillProgress((prev) => Math.max(0, prev - 0.03));
    }
  }, [mousePos]);

useEffect(() => {
  window.dispatchEvent(
    new CustomEvent("global-cursor-color", {
      detail: {
        color: isCursorInsideCTA ? "#000000" : "#F7FAF8",
      },
    })
  );
}, [isCursorInsideCTA]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCharge(prev => {
        if (hovered) {
          return Math.min(prev + 0.015, 1);
        }
        return Math.max(prev - 0.01, 0);
      });
    }, 16);

    return () => clearInterval(interval);
  }, [hovered]);

  return (
    <>
    <SEO
        title={ctaMeta.title}
        description={ctaMeta.description}
        keywords={ctaMeta.keywords}
        canonical={ctaMeta.canonical}
        ogImage={ctaMeta.ogImage}
      />
    <section className="relative bg-[#050F0F] overflow-hidden py-32">

      {/* Orb */}
      <div
        className="absolute inset-0"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
    
        {/* Charge Overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: charge,
          }}
          style={{
            background: `
              radial-gradient(
                circle at center,
                rgba(34,139,90,0.8),
                rgba(34,139,90,0.3),
                transparent 70%
              )
            `,
          }}
        />

        {/* Secondary Glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: charge * 0.7,
            scale: 1 + charge * 0.2,
          }}
          transition={{
            duration: 0.3,
          }}
          style={{
            background: `
              radial-gradient(
                circle at center,
                rgba(34,139,90,0.35),
                transparent 60%
              )
            `,
          }}
        />
      </div>
<div className=" absolute left-[71%] top-0 h-full border-l border-white/10 -translate-x-1/2 z-0 "/>
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <BlurText
  text="SAUDEX GLOBAL"
  delay={120}
  animateBy="words"
  direction="top"
  className="
  uppercase 
    text-[#228B5A]
    font-archivo
    text-center
    text-xl
    font-medium
    tracking-[0.4em]
    mb-6
  "
/>
<motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="
                uppercase 
    text-[#A3BDB8]
    font-archivo
    text-left
    text-lg
    font-medium
    mb-6
              "
            >
             Get a personalized quote in minutes
            </motion.p>


            <BlurText
  text="Ready to Ship With Us?"
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

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="
                text-[#A3BDB8]
                text-lg
                mt-8
                max-w-xl
              "
            >
              Tell us about your shipment and we'll get back to you with a competitive quote and clear timeline 
            </motion.p>

          </div>


                
          <div className="flex justify-center">

            <motion.button
             onClick={() => setIsOpen(true)}
              whileHover={{
                scale: 1.05,
              }}
              className="
                cta-button
                group
                relative
                h-64
                w-64
                rounded-full
                border
                border-white/20
                backdrop-blur-xl
                overflow-hidden
                 "
              style={{
                background:"transparent",
              }}
            >
<motion.div
  className="absolute inset-0 rounded-full bg-[#FF6200]"
  animate={{
    scale: fillProgress,
  }}
  transition={{
    duration: 0.4,
    ease: "easeOut",
  }}
  style={{
    transformOrigin: `${circleEntryPoint.x}% ${circleEntryPoint.y}%`,
  }}
/>
              <motion.div
                animate={{
                  opacity: charge,
                }}
                transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
            }}
            style={{
              borderColor: fillProgress > 0.5 ? '#000000' : '#ffffff',
            }}
                className="
                  absolute
                  inset-0
                  bg-[#228B5A]/30
                "
              />

               
                
                  
                     {/* Contact Text */}
                     <div className="relative z-10 group cursor-pointer flex flex-col items-center leading-tight">
                      <div className="flex flex-col items-center font-archivo font-medium text-[#F7FAF8] text-md leading-tight">
                        
  <span  style={{
                color: fillProgress > 0.5 ? "#000000" : "#ffffff",
              }}>CONNECT</span>

  <div className="flex items-center font-archivo font-medium text-[#F7FAF8] text-md gap-2">
    <span style={{
                color: fillProgress > 0.5 ? "#000000" : "#ffffff",
              }}>WITH US</span>
    <ArrowUpRight className="w-5 h-5" style={{
    color: fillProgress > 0.5 ? "#000000" : "#ffffff",
  }}/>
  </div>
</div>
</div>
 
            </motion.button>
<ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        serviceId="YOUR_SERVICE_ID"       // from EmailJS dashboard
        templateId="YOUR_TEMPLATE_ID"     // from EmailJS dashboard
        publicKey="YOUR_PUBLIC_KEY"       // from EmailJS Account → Public Key
      />
          </div>

        </div>

      </div>
    </section>
  </>
  );
}