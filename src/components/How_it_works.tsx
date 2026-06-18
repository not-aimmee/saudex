import { useEffect, useRef, useState } from "react";
import { motion } from 'motion/react';
import { SEO } from "./SEO";
import { howWeWorkMeta } from "../pages/data/seoMeta"

export default function HowItWorks() {
  const leftColRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const col = leftColRef.current;
      if (!col) return;

      const rect = col.getBoundingClientRect();
      const windowH = window.innerHeight;

      // progress: 0 when top of col hits bottom of viewport, 1 when bottom of col hits top
      const total = rect.height - windowH;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / total));

      // image is 150% tall; shift up by 50% of window height over the scroll range
      setTranslateY(-progress * windowH * 0.9);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <SEO
        
        description={howWeWorkMeta.description}
        keywords={howWeWorkMeta.keywords}
        canonical={howWeWorkMeta.canonical}
        ogImage={howWeWorkMeta.ogImage}
      />
    <div className="relative min-h-screen bg-[#050F0F] flex items-center justify-center py-24 px-8" >
      
    <div className="w-full overflow-x-hidden">
        <div className=" absolute left-[25%] top-0 h-full border-l border-white/10 -translate-x-1/2 z-0 "/>
      <main className="grid grid-cols-2 h-screen overflow-hidden">

        {/* LEFT — tall column, image pans inside the rectangle as you scroll */}
        <div ref={leftColRef} className="relative h-[180vh] overflow-hidden">
            
          {/* Sticky rectangle that stays visible; image inside shifts on scroll */}
          <div className="sticky top-0 h-screen overflow-hidden">
            <div
              className="absolute inset-8 overflow-hidden"
              style={{ border: "1px solid rgba(26,22,18,0.15)" }}
            >
              <div
                style={{
                  transform: `translateY(${translateY}px)`,
                  height: "200%",
                  width: "100%",
                  willChange: "transform",
                }}
              >
                <img
                  src='/images/s60.webp'
                  alt="Cargo plane loading at the airport"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
              </div>

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(245,240,234,0.06) 0%, transparent 20%, transparent 80%, rgba(245,240,234,0.1) 100%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* RIGHT — sticky text that stays in place while image scrolls */}
        <div className="sticky top-0 h-screen flex flex-col justify-center px-16 py-16 overflow-hidden">
             <motion.div
             animate={{ opacity: 1, y: 0 }}
             initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
             className="
             mt-10
              uppercase 
            text-[#228B5A]
            font-archivo
            text-center
            text-xl
            font-medium
            tracking-[0.4em]
            ">
            HOW IT WORKS 

            </motion.div>

            <motion.div
             animate={{ opacity: 1, y: 0 }}
             initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
             className="
             mt-12
              uppercase 
            text-[#F7FAF8]
            font-archivo
            text-center
            text-4xl
            font-medium
            tracking- normal
            ">
            A simple, transparent process from start to finish.

            </motion.div>
          <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="
                mt-12
                max-w-2xl
                text-center 
                text-xl
                text-[#F7FAF8]/60
                font-archivo
                font-regular
                tracking-wide
              "
            >
             Getting your goods moving is easy.<br/> Request a quote, confirm your shipment details, and we handle pickup, transit, customs, and final delivery <br/> While keeping you informed at every stage.
            </motion.p>
        </div>

      </main>
      </div>
      
    </div>
    </>
  );
}
