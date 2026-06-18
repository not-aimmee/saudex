
import SplitText from '../../components/splittext';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { servicesMeta } from '../pages/data/seoMeta';

const services = [
  { id: 1, name: 'Distribution', size: 100, link:'/services/distribution'  },
  { id: 2, name: 'FMCG Distribution', size: 85, link:'/services/fmcg' },
  { id: 3, name: 'Import & Export', size: 110, link:'/services/impo-expo' },
  { id: 4, name: 'Warehousing', size: 85, link:'/services/warehousing' },
  { id: 5, name: 'Supply Chain', size: 100, link:'/services/Supply_chain' },
];

// Fan out to the right: angles from roughly -60° to +60°
const getFanPosition = (index: number, total: number) => {
  const angleRange = 110; // degrees
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
  return (
    <>
    <SEO
        title={servicesMeta.title}
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

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-6 pr-12 py-12">
          <div >
              <SplitText
              text="what we offer "
              className="
              uppercase 
            text-[#228B5A]
            font-archivo
            text-left
            text-xl
            font-medium
            tracking-[0.4em]
            "
    delay={80}
  duration={0.8}


/>

</div>
<div>
  <SplitText
    text="Comprehensive logistics solutions tailored to your business needs"
    className="
    mt-6
      uppercase
      text-[#F7FAF8]
      font-archivo
      text-left
      text-4xl
      tracking-[0.1em]
      font-medium"
    delay={50}
    duration={0.8}
  />
</div>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="
                mt-12
                max-w-2xl
                text-left
                text-xl
                text-[#F7FAF8]/60
                font-archivo
                font-regular
                tracking-wide
              "
            >
              We deliver cutting-edge services tailored to your needs. Our expert team
              combines creativity, technology, and strategic thinking to help your
              business thrive in the digital age. 
              <br/>Discover how we can elevate your
              brand and drive meaningful results.
            </motion.p>
          </div>
        </div>
        
        {/* Right Side */}
        
        <div className="flex items-center justify-center h-[720px] overflow-hidden">
          <div className=" absolute left-[71.5%] top-0 h-full border-l border-white/10 -translate-x-1/2 z-0 "/>
          <div
            className="relative flex items-center justify-center"
            style={{ width: 400, height: 400 }}
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
    </>
  );
}
