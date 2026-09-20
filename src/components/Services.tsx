import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
const services = [
  { id: 1, name: 'Import & Export', size: 120, link:'/services/impo-expo/'  },
  { id: 2, name: 'FMCG ', size: 105, link:'/services/fmcg/' },
  { id: 3, name: 'Distribution', size: 130, link:'/services/distribution/' },
  { id: 4, name: 'Warehousing', size: 105, link:'/services/warehousing/' },
  { id: 5, name: 'Customs', size: 120, link:'/services/customs/' },
];

// Layout tuning
const ARC_RADIUS = 290; // distance from the centre circle to every service circle
const GAP = 18;         // visible gap (px) between neighbouring circles

// All circles sit on ONE arc. Each angular step is derived from the two
// neighbouring circle sizes, so the edge-to-edge gap is identical everywhere
// (no overlaps, no uneven spacing), then the fan is centred on the horizontal axis.
const fanPositions = (() => {
  const radii = services.map((s) => s.size / 2);
  const angles: number[] = [0];
  for (let i = 1; i < services.length; i++) {
    const centreDistance = radii[i - 1] + radii[i] + GAP;
    angles.push(angles[i - 1] + 2 * Math.asin(centreDistance / (2 * ARC_RADIUS)));
  }
  const mid = angles[angles.length - 1] / 2;
  return angles.map((a) => ({
    x: Math.cos(a - mid) * ARC_RADIUS,
    y: Math.sin(a - mid) * ARC_RADIUS,
  }));
})();

const getFanPosition = (index: number) => fanPositions[index];

export default function Services() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <div className="relative lg:min-h-[80vh] flex overflow-hidden bg-[#77aca2]/10" >
      {/* ── Left panel — warm cream ── */}
      <div
        className="flex flex-col justify-center px-12 lg:px-20 py-24 w-full lg:w-1/2 z-10"
      >
        <div className="flex flex-col gap-7 max-w-lg">
          <span className="font-generalsans font-medium text-lg " style={{  letterSpacing: '0.42em', textTransform: 'uppercase', color: '#468189' }}>
            What We Offer
          </span>

          <h2
  className="font-sentient font-regular"
  style={{
    fontSize: 'clamp(1.5rem, 2.75vw, 3.5rem)', // scaled-down version of hero's clamp(3rem,8vw,7rem)         
    lineHeight: 1.35,
    letterSpacing: '0.05em',                  // same tight tracking as hero
    color: '#031926',
  }}
>
Global Trading & Freight Forwarding Solutions</h2>

          <p className="font-generalsans font-medium text-lg" style={{  lineHeight: 1.78, color: '#254D58', maxWidth: '38ch' }}>
           Saudex Global connects businesses with reliable products, suppliers, and international markets through integrated global trading and freight forwarding solutions.
          <br/><br/>  We support import and export, product sourcing, supplier coordination, sea, air and land freight, warehousing, and cross border logistics, helping businesses move goods efficiently from source to destination.
From global product procurement to international shipping and delivery, we simplify trade and logistics so you can focus on growing your business.   </p>
        </div>
      </div>

      {/* ── Right panel — deep teal ── */}
      <div
        className="hidden lg:flex items-center justify-center w-1/2 relative overflow-hidden"
        style={{ backgroundColor: '#031926' }}
      >
        {/* Subtle radial glow mirroring the dark version's atmosphere */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 70% at 40% 55%, #25455840 0%, transparent 70%)',
          }}
        />

        <div
          className="relative flex items-center justify-center"
          style={{ width: 400, height: 400, transform: 'translateX(-90px)' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => { setIsHovered(false); setActiveService(null); }}
        >
          {/* Service circles */}
          <AnimatePresence>
            {isHovered &&
              services.map((service, index) => {
                const pos = getFanPosition(index);
                const isActive = activeService === service.id;
                const isOther = activeService !== null && !isActive;
                const size = service.size;

                return (
                  <motion.div
                    key={service.id}
                    initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                    animate={{
                      x: pos.x,
                      y: pos.y,
                      scale: isActive ? 1.22 : isOther ? 0.62 : 1,
                      opacity: isOther ? 0.35 : 1,
                    }}
                    exit={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      damping: 16,
                      default: { delay: index * 0.07 },
                      opacity: { duration: 0.15 },
                    }}
                    onMouseEnter={() => setActiveService(service.id)}
                    onMouseLeave={() => setActiveService(null)}
                    className="absolute rounded-full flex items-center justify-center text-center cursor-pointer"
                    style={{
                      width: size,
                      height: size,
                      marginLeft: -size / 2,
                      marginTop: -size / 2,
                      border: `1.5px solid ${isActive ? '#f4e9cd' : 'rgba(244,233,205,0.4)'}`,
                      backgroundColor: isActive ? 'rgba(244,233,205,0.07)' : 'transparent',
                      transition: 'border-color 0.2s, background-color 0.2s',
                    }}
                  >
                    <Link to={service.link} style={{ color: '#f5fbef', textDecoration: 'none' }}>
                      <span style={{ fontSize: size < 95 ? 13 : 15 }}>{service.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
          </AnimatePresence>

          {/* Central explore circle */}
          <motion.div
            animate={{ scale: isHovered ? 0.82 : 1, opacity: isHovered ? 0.65 : 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 22 }}
            className="relative z-10 rounded-full flex items-center justify-center text-center cursor-pointer select-none"
            style={{
              width: 280,
              height: 280,
              border: '1.5px solid rgba(244,233,205,0.45)',
              backgroundColor: 'transparent',
            }}
          >
            <Link
              to="/services/service/"
              className="font-generalsans font-medium text-center"
              style={{
                fontWeight: 700,
                fontSize: '1.2rem',
                color: '#f5fbef',
                padding: '0 40px',
                lineHeight: 1.45,
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}