import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export default function App() {
  const leftColRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const col = leftColRef.current;
      if (!col) return;

      const rect = col.getBoundingClientRect();
      const windowH = window.innerHeight;

      const total = rect.height - windowH;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / total));

      setTranslateY(-progress * windowH * 0.9);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-[#77aca2]/30 ">
      <div className="w-full ">
        <div className="absolute left-[25%] top-0 h-full border-l border-[#254D58]/10 -translate-x-1/2 z-0" />

        <main className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen overflow-visible md:overflow-hidden">

          {/* LEFT — image */}
          <div
            ref={leftColRef}
            className="relative h-[70vh] md:h-[140vh] overflow-hidden"
          >
            <div className="sticky top-0 h-[70vh] md:h-screen overflow-hidden">
              <div
                className="absolute inset-0 md:inset-4 overflow-hidden"
                style={{ border: "1px solid rgba(37,77,88,0.15)" }}
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
                    src="/images/s62.webp"
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
                      "linear-gradient(to bottom, rgba(245,251,239,0.06) 0%, transparent 20%, transparent 80%, rgba(245,251,239,0.1) 100%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT — sticky text */}
          <div className="sticky top-0 h-screen flex flex-col justify-center px-6 py-6 lg:px-16 lg:py-16 overflow-hidden">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10 uppercase font-generalsans text-center text-xl font-medium tracking-[0.4em]"
              style={{ color: "#254D58" }}
            >
              HOW IT WORKS
            </motion.div>

            <motion.div
             animate={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="mt-12 font-sentient font-regular text-center"
  style={{
    fontSize: 'clamp(2.5rem, 3.75vw, 4.5rem)',
    lineHeight: 1.15,
    letterSpacing: '0.05em',
    color: '#031926',
  }}
            >
              A Simple, Transparent process from start to finish.
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-12 max-w-2xl text-center text-xl font-generalsans font-regular tracking-normal lg:tracking-wide"
              style={{ color: '#254D58'}}
            >
              Getting your goods moving is easy.
              <br className="hidden sm:block" /> Request a quote, confirm your
              shipment details, and we handle pickup, transit, customs, and
              final delivery <br /> while keeping you informed at every stage.
            </motion.p>
          </div>
        </main>
      </div>
    </div>
  );
}
