import { ArrowUp, Linkedin, Mail , Facebook } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';
import { TEXT } from '../constants';
import logo from '/favicon2.png';
import { Link } from "react-router-dom";
import GlassIcons from '../../components/glassicons';
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    if (location.pathname === "/") {
      scrollToSection('home'); // already home, just scroll
    } else {
      navigate('/'); // go to homepage from any other route
    }
  };

  const socialItems = [
    { icon: Linkedin, color: 'blue', label: 'LinkedIn', link: 'https://www.linkedin.com/company/saudexglobal/' },
    { icon: FaWhatsapp, color: 'green', label: 'WhatsApp', link: 'https://wa.me/6585351308' },
    { icon: Facebook, color: 'blue', label: 'Facebook', link: 'https://www.facebook.com/share/19d9u8W9PA/' },
  ];

  const services = [
    { label: 'Import - Export', to: '/services/impo-expo' },
    { label: 'FMCG Distribution', to: '/services/fmcg' },
    { label: 'Freight Forwarding', to: '/services/freight' },
    { label: 'Customs Clearance & Compliance', to: '/services/customs' },
  ];

  const industries=[
    { label: 'E-Commerce', to:'/industries/e_commerce'},
    { label: 'HoReCa', to:'/industries/horeca'},
    { label: 'Retail and Wholesale', to:'/industries/retail'},
    { label: 'Food & Beverage', to:'/industries/food_beverages'},

  ]

  const company = [
    { label: 'About Us', to: '/aboutUs' },
    { label: 'Careers', to: '/careers' },
    { label: 'Be Our Partner', to: '/BeOurPartner' }
  ];

  const locations = ['Singapore','Malaysia', 'Saudi Arabia', 'United Arab Emirates' ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollTop(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );
    if (footerRef.current) { observer.observe(footerRef.current); }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-black border-t border-white/10">
      {/* Tier 1 — logo/Follow Us + Company + Locations + Get in Touch */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
        {/* Logo / Follow Us */}
        <div>
          <div className="flex items-center gap-3 mb-4 md:ml-8 md:mt-12">
            <img onClick={goHome} src={logo} alt="Saudex Global" className="w-16 h-16 cursor-pointer" draggable={false} />
            <button
              onClick={goHome}
              className="flex flex-col leading-tight hover:opacity-80 transition-opacity text-left"
            >
              <span className="text-2xl font-clash font-bold text-white tracking-tight">SAUDEX</span>
              <span className="text-2xl text-white font-clash font-bold tracking-wider">GLOBAL</span>
            </button>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-clash text-white text-xs font-semibold uppercase tracking-widest mb-5">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {company.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h4 className="font-clash text-white text-xs font-semibold uppercase tracking-widest mb-5">
            Locations
          </h4>
          <ul className="flex flex-col gap-3">
            {locations.map((loc) => (
              <li key={loc} className="text-sm text-white/70">
                {loc}
              </li>
            ))}
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h4 className="font-clash text-white text-xs font-semibold uppercase tracking-widest mb-5">
            Get in Touch
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="text-sm text-white/50"></li>
            <div className="translate-x-1">
            <GlassIcons items={socialItems} className="custom-class" />
          </div>

          </ul>
        </div>
      </div>

      

      {/* 2nd grid*/}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 gap-12 md:grid-cols-4">
       <div>

       </div>

        {/* Services Column */}
        <div>
          <h4 className="font-clash text-white text-xs font-semibold uppercase tracking-widest mb-5">
            {TEXT.footer.services}
          </h4>
          <ul className="flex flex-col gap-3">
            {services.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries COlumn */}
        <div>
          <h4 className="font-clash text-white text-xs font-semibold uppercase tracking-widest mb-5">
            Industries
          </h4>
          <ul className="flex flex-col gap-3">
            {industries.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
          
        {/* Contact Us */}
        <div>
          <h4 className="font-clash text-white text-xs font-semibold uppercase tracking-widest mb-5">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="text-sm text-white/50">
    For Sales Inquiries
  </li>
             <li>
              <a
              href="mailto:sales@saudexglobal.com"
      className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
    >
<Mail className="w-4 h-4 shrink-0" />
      sales@saudexglobal.com

              </a>
            </li>

            <li className="text-sm text-white/50" >
    Singapore
</li>
<li>
              <a
              href="https://wa.me/6585351308"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
   >
 <FaWhatsapp className="w-4 h-4 shrink-0" />
      +65 8535 1308
              </a>
            </li>
            <li className="text-sm text-white/50">
    Malaysia
  </li>
  <li>
              <a
              href="https://wa.me/601151168040"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
   >
 <FaWhatsapp className="w-4 h-4 shrink-0" />
      +60 11511 68040
              </a>
            </li>
          </ul>
        </div>

       
      </div>

      {/* Hairline divider */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-white/70 text-xs">
          {TEXT.footer.copyright}
        </p>
        <div className="flex items-center gap-6">
          <Link to="/privacy_policy" className="text-xs text-white/70 hover:text-white transition-colors duration-200">
            {TEXT.nav.policy}
          </Link>
          <span className="text-white/20 text-xs">|</span>
          <Link to="/terms_of_service" className="text-xs text-white/70 hover:text-white transition-colors duration-200">
            {TEXT.nav.terms}
          </Link>
        </div>
      </div>

      {/* Scroll to Top Button */}
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