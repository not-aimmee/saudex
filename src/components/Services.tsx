import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { servicesMeta } from '../pages/data/seoMeta';

const services = [
  { id: 1, name: 'Import & Export', size: 110, link:'/services/impo-expo'  },
  { id: 2, name: 'FMCG ', size: 95, link:'/services/fmcg' },
  { id: 3, name: 'Distribution', size: 120, link:'/services/distribution' },
  { id: 4, name: 'Warehousing', size: 95, link:'/services/warehousing' },
  { id: 5, name: 'Customs', size: 110, link:'/services/Supply_chain' },
];

// Fan out to the right: angles from roughly -60° to +60°
const getFanPosition = (index: number, total: number) => {
  const angleRange = 120; // degrees
  const startAngle = -angleRange / 2;
  const step = angleRange / (total - 1);
  const angleDeg = startAngle + index * step;
  const angleRad = (angleDeg * Math.PI) / 180;
  const radius = 190 + services[index].size / 3; // base radius + half of circle size for better spacing
  return {
    x: Math.cos(angleRad) * radius,
    y: Math.sin(angleRad) * radius,
  };
};

export default function Services() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [charge, setCharge] = useState(0);
   useEffect(() => {
    const interval = setInterval(() => {
      setCharge(prev => {
        if (isHovered) {
          return Math.min(prev + 0.015, 1);
        }
        return Math.max(prev - 0.01, 0);
      });
    }, 16);

    return () => clearInterval(interval);
  }, [isHovered]);

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
        
        description={servicesMeta.description}
        keywords={servicesMeta.keywords}
        canonical={servicesMeta.canonical}
        ogImage={servicesMeta.ogImage}
      />
    <div className="relative min-h-screen bg-[#050F0F] flex items-center justify-center py-24 px-8" >
      
      <motion.div
  className="absolute inset-0 pointer-events-none"
  animate={{
  opacity: charge,
  scale: 1 + charge * 0.15,
}}
transition={{
  duration: 0.25,
}}
  style={{
    background: `
      radial-gradient(
      circle at center,
      rgba(34,139,90,0.55),
      rgba(34,139,90,0.2),
      transparent 65%
    )
  `,
  filter: "blur(60px)",
  }}
/>

      <div className="max-w-7xl w-full  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div
    ref={leftColRef}
    className="relative h-[70vh] md:h-[120vh] overflow-hidden"
  >
    <div className="sticky top-0 h-[70vh] md:h-screen overflow-hidden">
      <div
        className="absolute inset-4 md:inset-8 overflow-hidden"
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
        
        
        {/* Right Side */}

        <div className="relative h-[70vh] md:h-[120vh] overflow-hidden">
          <div className="sticky top-0 h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute left-0 top-0 h-full border-l border-white/10 z-0 "/>
          <div
            className="relative flex items-center justify-center w-[280px] h-[280px] md:w-[450px] md:h-[450px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setActiveService(null);
            }}
          >
            {/* Service circles */}
            <AnimatePresence>
              {isHovered &&
                services.map((service, index ) => {
                  const pos = getFanPosition(index, services.length);
                  const isActive = activeService === service.id;
                  const isOther = activeService !== null && !isActive;
                  const scale = isActive ? 1.25 : isOther ? 0.6 : 1;
                  const opacity = isOther ? 0.45 : 1;
                  const size = service.size;

                  return (
                    <motion.div
                      key={service.id}
                      initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                      animate={{
                        x: pos.x,
                        y: pos.y,
                        scale,
                        opacity,
                      }}
                      exit={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 16,
                        mass: 1,
                        delay: index * 0.3,
                        scale: { type: 'spring', stiffness: 100, damping: 16 },
                        opacity: { duration: 0.2 },
                        default: { delay: index * 0.1 },
                      }}
                      onMouseEnter={() => setActiveService(service.id)}
                      onMouseLeave={() => setActiveService(null)}
                      className="absolute rounded-full flex items-center justify-center text-[#F7FAF8] text-xl font-medium font-archivo text-center cursor-pointer shadow-lg hover:underline hover: decoration-dotted"
                      style={{
                        width: size,
                        height: size,
                        backgroundColor: 'transparent',
                         border: '1px solid rgba(255, 253, 253, 0.9)',
                         boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
                         filter: 'brightness(1.05)',
                        marginLeft: -size / 2,
                        marginTop: -size / 2,
                      }}
                    >
                      <Link to= {service.link} >
                      <span style={{ fontSize: size < 95 ? 11 : 13 }}>{service.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
            </AnimatePresence>

            {/* Explore circle */}
            <Link to="/services/service">
            
              <motion.a
              animate={{
                scale: isHovered ? 0.85 : 1,
                opacity: isHovered ? 0.75 : 1,
              }}
              transition={{ type: 'spring', stiffness: 120, damping: 24 }}
              className="relative z-10 rounded-full bg-transparent border-2 border-white/50 flex items-center justify-center text-white font-bold text-center cursor-pointer shadow-2xl select-none backdrop-blur-xl
                overflow-hidden hover:underline hover: decoration-dotted"
              style={{ width: 280, height: 280 }}
            >
              <span className="px-4 leading-tight font-archivo font-regular text-xl ">Explore Our Services</span>
            </motion.a>
             </Link>
          </div>
          </div>
        </div>
        </div>
        
    </div>
    </>
  );
}