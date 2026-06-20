import { ArrowUp, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useRef,useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { TEXT } from '../constants';
import logo from '/favicon2.png';
import ContactModal from "./ContactModal";
import { Link } from "react-router-dom";
import GlassIcons from '../../components/glassicons';
import { createPortal } from 'react-dom';
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [circleEntryPoint, setCircleEntryPoint] = useState({ x: 50, y: 50 });
  const [fillProgress, setFillProgress] = useState(0);
  const [isCursorInside, setIsCursorInside] = useState(false);
  const circleRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
const location = useLocation();

const goHome = () => {
  if (location.pathname === "/") {
    scrollToSection('home'); // already home, just scroll
  } else {
    navigate('/'); // go to homepage from any other route
  }
};
  const items = [
  { icon: Linkedin, color: 'blue', label: 'LinkedIn', link: 'https://www.linkedin.com/company/saudexglobal/' },
  { icon: FaWhatsapp, color: 'green', label: 'Whatsapp', link:'https://wa.me/6585351308' },
  { icon: Mail, color: 'red', label: 'Email', link: 'mailto:info@saudexglobal.com' },
];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

useEffect(() => {
  if (!circleRef.current) return;

  const rect = circleRef.current.getBoundingClientRect();
  const radius = rect.width / 2;
  const centerX = rect.left + radius;
  const centerY = rect.top + radius;

  const dx = mousePos.x - centerX;
  const dy = mousePos.y - centerY;
  const distance = Math.hypot(dx, dy);
  const threshold = radius * 1.2;
  const attraction = Math.max(0, Math.min(1, (threshold - Math.max(distance, radius)) / (threshold - radius)));

  setOffset({
    x: dx * 0.13 * attraction,
    y: dy * 0.13 * attraction,
  });

  const inside = distance <= radius;
  setIsCursorInside(inside);

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
  window.dispatchEvent(new CustomEvent('global-cursor-color', {
    detail: {
      color: isCursorInside ? '#000000' : '#F7FAF8',
    },
  }));
}, [isCursorInside]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollTop(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );
    if (footerRef.current) {observer.observe(footerRef.current); }

    return () => observer.disconnect();
  }, []);
  return (
    
    <footer ref={footerRef} className="bg-black border-t border-white/10">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-6">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img  onClick={goHome} src={logo}  alt="Saudex Global" className="w-20 h-20" draggable={false} />
              <div className="flex flex-col leading-tight">
                <button
                  onClick={goHome}
                 className="flex flex-col leading-tight hover:opacity-80 transition-opacity text-left"
                >
                <span className="text-2xl font-clash font-bold text-white tracking-tight">SAUDEX</span>
                <span className="text-2xl text-white font-clash font-bold tracking-wider">GLOBAL</span>
                 </button>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-center">
              {TEXT.footer.tagline}
            </p>
            {/*icons */}
            <div className="flex gap-0 items-center">
              <GlassIcons items={items} className="custom-class -translate-x-4" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-clash text-xl text-white/70 font-semibold mb-6">{TEXT.footer.services}</h3>
            <ul className="space-y-3">
              <li>
               <Link to ="/services/impo-expo" className="text-left text-white/70 hover:text-white transition-colors">
    Import - Export
  </Link>
              </li>
              <li>
                <Link to ="/services/fmcg" className="text-left text-white/70 hover:text-white transition-colors">
    FMCG Distribution
  </Link>
              </li>
              <li>
                <Link to ="/services/freight" className="text-left text-white/70 hover:text-white transition-colors">
    Freight Forwarding
  </Link>
              </li>
              <li>
                <Link to="/services/customs" className="text-left text-white/70 hover:text-white transition-colors">
    Customs Clearance & Compliance
  </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-clash text-xl text-white/70 font-semibold mb-6">{TEXT.footer.company}</h3>
            <ul className="space-y-3">
              <li>
                <Link to ="/aboutUs" className="text-left text-white/70 hover:text-white transition-colors">
    About Us
  </Link>
              </li>
              <li>
                <Link to ="/careers" className="text-left text-white/70 hover:text-white transition-colors">
    Careers
  </Link>
              </li>
              <li>
                <Link to ="/BeOurpartner" className="text-left text-white/70 hover:text-white transition-colors">
    Be Our Partner
  </Link>
              </li>
            </ul>
          </div>
        
        {/*countires we operate in  */}
         <div>
            <h3 className="font-clash text-xl mb-6 text-white/70">Locations</h3>
            <ul className="space-y-3 text-white/70">
            <li>Singapore</li>
              <li>Saudi Arabia</li>
              <li>United Arab Emirates</li>
              <li>India</li>
            </ul>
        </div>

        {/* Contact Us */}
        <div className="flex items-center justify-center -translate-x-4">
          <motion.button
            ref={circleRef}
            onClick={() => setIsOpen(true)}
            animate={{
              x: offset.x,
              y: offset.y,
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
              group
              relative
              w-52
              h-52
              rounded-full
              border
              border-white/15
              overflow-hidden
              flex
              flex-col
              items-center
              justify-center
              transition-all
            "
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
            <span
              className="font-clash text-lg font-bold transition-colors duration-300 relative"
              style={{
                color: fillProgress > 0.5 ? "#000000" : "#ffffff",
              }}
            >
              CONTACT US  
            </span>
          </motion.button>
          {createPortal(
        <ContactModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          serviceId="service_nlnhzd2"
          templateId="template_zjgqs1k"
          publicKey="sXmLsr6PApabpnmxa"
        />,
        document.body
      )}
        </div>
      </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 hover:text-white">
            {TEXT.footer.copyright}
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy_policy" className="text-white/70 hover:text-white transition-colors">
              {TEXT.nav.policy}
            </Link>
            <Link to="/terms_of_service" className="text-white/70 hover:text-white transition-colors">
              {TEXT.nav.terms}
            </Link>
</div>
        </div>
      </div>
      {/*Scroll to Top Button*/}
      {showScrollTop && (
  <button
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
    className="
      fixed
      bottom-24
      right-8
      w-14
      h-14
      rounded-full
      border
      border-white/10
      bg-black/80
      backdrop-blur-xl
      text-white
      hover:scale-110
      transition-all
      z-50
    "
  >
    <ArrowUp className="w-5 h-5 mx-auto" />
  </button>
)}
    </footer>
  );
}
