import { useRef,useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TEXT } from '../constants';
import logo from '/favicon2.png';
import { AnimatePresence, motion } from 'framer-motion';
import ContactModal from './ContactModal';
import { createPortal } from 'react-dom';
import { useNavigate, useLocation } from "react-router-dom";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarServicesOpen, setNavbarServicesOpen] = useState(false);
  const [drawerServicesOpen, setDrawerServicesOpen] = useState(false);
  const [navbarIndustriesOpen, setNavbarIndustriesOpen] = useState(false);
  const [drawerIndustriesOpen, setDrawerIndustriesOpen] = useState(false);
  const [navbarAboutOpen, setNavbarAboutOpen] = useState(false);
  const [drawerAboutOpen, setDrawerAboutOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
const location = useLocation();

const goHome = () => {
  if (location.pathname === "/") {
    scrollToSection('home'); // already home, just scroll
  } else {
    navigate('/'); // go to homepage from any other route
  }
};

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  if (isMenuOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isMenuOpen]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setNavbarServicesOpen(false);
      setNavbarIndustriesOpen(false);
      setNavbarAboutOpen(false);
      setDrawerServicesOpen(false);
      setDrawerIndustriesOpen(false);
      setDrawerAboutOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}
    `}>
      <div className="w-full px-10 lg:px-16 pt-4 pb-2">
        <div className="mx-auto flex items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            
  <img src={logo}  onClick={goHome} alt="Saudex Global" className="w-12 h-12 lg:w-20 lg:h-20" draggable={false} />
  <span  onClick={goHome} className="font-clash text-[22px] lg:text-[40px] font-bold text-[#F7FAF8] tracking-normal">SAUDEX GLOBAL</span>
</div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ml-16 ">
            <Link
              to="/#home"
              className="px-6 py-4 text-white font-archivo font-medium text-lg hover:text-[#58c28a] tracking-wider transition-colors flex items-center gap-1"
            >
              {TEXT.nav.home}
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative">
             <button
                onMouseEnter={() => setNavbarServicesOpen(true)}
                onMouseLeave={() => setNavbarServicesOpen(false)}
                onClick={() => scrollToSection('services')}
                className="px-6 py-4 text-white font-archivo font-medium text-lg hover:text-[#58c28a] tracking-wider transition-colors flex items-center gap-1"
              >
                {TEXT.nav.services}
              </button>
              {navbarServicesOpen && (
                <div
                  onMouseEnter={() => setNavbarServicesOpen(true)}
                  onMouseLeave={() => setNavbarServicesOpen(false)}
                  className="absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg py-2 border border-gray-100"
                >
                  <Link
                    to="/services/impo-expo"
                    onClick={() => setNavbarServicesOpen(false)}
                    className="block w-full text-left px-4 py-2.5 font-archivo font-regular text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0505F0F] transition-colors"
                  >
                    {TEXT.servicesDropdown.impoexpo}
                  </Link>
                  <Link
                    to="/services/fmcg"
                    onClick={() => setNavbarServicesOpen(false)}
                    className="block w-full text-left px-4 py-2.5 font-archivo font-regular text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0505F0F] transition-colors"
                  >
                    {TEXT.servicesDropdown.fmcgb}
                  </Link>
                  <Link
                    to="/services/freight"
                    onClick={() => setNavbarServicesOpen(false)}
                    className="block w-full text-left px-4 py-2.5 font-archivo font-regular text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0505F0F] transition-colors"
                  >
                    {TEXT.servicesDropdown.frieghtforwarding}
                  </Link>
                  <Link
                    to="/services/distribution"
                    onClick={() => setNavbarServicesOpen(false)}
                    className="block w-full text-left px-4 py-2.5 font-archivo font-regular text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0505F0F] transition-colors"
                  >
                    {TEXT.servicesDropdown.distribution}
                  </Link>
                  <Link
                    to="/services/warehousing"
                    onClick={() => setNavbarServicesOpen(false)}
                    className="block w-full text-left px-4 py-2.5 font-archivo font-regular text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0505F0F] transition-colors"
                  >
                    {TEXT.servicesDropdown.contractWarehousing}
                  </Link>
                  <Link
                    to="/services/TCL"
                    onClick={() => setNavbarServicesOpen(false)}
                    className="block w-full text-left px-4 py-2.5 font-archivo font-regular text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0505F0F] transition-colors"
                  >
                    {TEXT.servicesDropdown.tcl}
                  </Link>
                  <Link
                    to="/services/Supply_chain"
                    onClick={() => setNavbarServicesOpen(false)}
                    className="block w-full text-left px-4 py-2.5 font-archivo font-regular text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0505F0F] transition-colors"
                  >
                    {TEXT.servicesDropdown.scc}
                  </Link>
                  <Link
                    to="/services/customs"
                    onClick={() => setNavbarServicesOpen(false)}
                    className="block w-full text-left px-4 py-2.5 font-archivo font-regular text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0505F0F] transition-colors"
                  >
                    {TEXT.servicesDropdown.customs}
                  </Link>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setNavbarIndustriesOpen(true)}
                onMouseLeave={() => setNavbarIndustriesOpen(false)}
                onClick={() => scrollToSection('industries')}
                className="px-6 py-4 text-white font-archivo font-medium text-lg hover:text-[#58c28a] tracking-wider transition-colors flex items-center gap-1"
              >
                {TEXT.nav.industries}
                </button>
              {navbarIndustriesOpen && (
                <div
                  onMouseEnter={() => setNavbarIndustriesOpen(true)}
                  onMouseLeave={() => setNavbarIndustriesOpen(false)}
                  className="absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg py-2 border border-gray-100"
                >
                  <Link
                    to="/industries/food_beverages"
                    onClick={() => setNavbarIndustriesOpen(false)}
                    className="block w-full text-left px-4 py-2.5 font-archivo font-regular text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0505F0F] transition-colors"
                  >
                    {TEXT.industriesDropdown.foodnbeverages}
                  </Link>
                  <Link
                    to="/industries/cold_chain"
                    onClick={() => setNavbarIndustriesOpen(false) }
                    className="block w-full text-left px-4 py-2.5 font-archivo font-regular text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0505F0F] transition-colors"
                  >
                    {TEXT.industriesDropdown.coldchain}
                  </Link>
                   <Link
                    to="/industries/horeca"
                    onClick={() => setNavbarIndustriesOpen(false) }
                    className="block w-full text-left px-4 py-2.5 font-archivo font-regular text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0505F0F] transition-colors"
                  >
                    {TEXT.industriesDropdown.horeca}
                  </Link>
                  <Link
                    to="/industries/FMCG"
                    onClick={() => setNavbarIndustriesOpen(false)}
                    className="block w-full text-left px-4 py-2.5 font-archivo font-regular text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0505F0F] transition-colors"
                  >
                    {TEXT.industriesDropdown.fmcg}
                  </Link>
                  <Link
                    to="/industries/retail"
                    onClick={() => setNavbarIndustriesOpen(false) }
                    className="block w-full text-left px-4 py-2.5 font-archivo font-regular text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0505F0F] transition-colors"
                  >
                    {TEXT.industriesDropdown.retail}
                  </Link>
                  <Link
                    to="/industries/e_commerce"
                    onClick={() => setNavbarIndustriesOpen(false) }
                    className="block w-full text-left px-4 py-2.5 font-archivo font-regular text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0505F0F] transition-colors"
                  >
                    {TEXT.industriesDropdown.ecommerce}
                  </Link>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setNavbarAboutOpen(true)}
                onMouseLeave={() => setNavbarAboutOpen(false)}
                onClick={() => scrollToSection('about')}
                className="px-6 py-4 text-white font-archivo font-medium text-lg hover:text-[#58c28a] tracking-wider transition-colors flex items-center gap-1"
              >
                {TEXT.nav.about}
              </button>
              {navbarAboutOpen && (
                <div
                  onMouseEnter={() => setNavbarAboutOpen(true)}
                  onMouseLeave={() => setNavbarAboutOpen(false)}
                  className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-2 border border-gray-100"
                >
                  <Link
                    to="/aboutUs"
                    onClick={() => setNavbarAboutOpen(false) }
                    className="block w-full text-left px-4 py-2.5 font-archivo font-regular text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0505F0F] transition-colors"
                  >
                    {TEXT.nav.aboutUs}
                  </Link>
                  <Link
                    to="/careers"
                    onClick={() => setNavbarAboutOpen(false) }
                    className="block w-full text-left px-4 py-2.5 font-archivo font-regular text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0505F0F] transition-colors"
                  >
                    {TEXT.nav.careers}
                  </Link>
                  <Link
                    to="/BeOurPartner"
                    onClick={() => setNavbarAboutOpen(false) }
                    className="block w-full text-left px-4 py-2.5 font-archivo font-regular text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0505F0F] transition-colors"
                  >
                    Be Our Partner
                  </Link>

                </div>
              )}
            </div>
              <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-4 text-white font-archivo font-medium text-lg hover:text-[#58c28a] tracking-wider transition-colors"
      >
        {TEXT.nav.contact}
      </button>
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
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 ml-auto">
            <button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="flex flex-col items-end gap-1.5 p-2 hover:text[#228B5A] transition-colors"
>
  <span className="pointer-events-none w-8 h-[2px] bg-white rounded-full hover:text[#228B5A] transition-colors"></span>
  <span className="pointer-events-none w-5 h-[2px] bg-white rounded-full hover:text[#228B5A] transition-colors"></span>
  <span className="pointer-events-none w-8 h-[2px] bg-white rounded-full hover:text[#228B5A] transition-colors"></span>
</button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {isMenuOpen && (
          <>
           <motion.div
        className="fixed inset-0 bg-black/40 z-[9998]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsMenuOpen(false)}
      />
          <motion.div className="fixed top-24 right-8 z-[9999]"
      initial={{
  opacity: 0,
  y: -10,
  x: 20,
}}
animate={{
  opacity: 1,
  y: 0,
  x: 0,
}}
exit={{
  opacity: 0,
  y: -10,
  x: 20,
}}
   transition={{
        duration: 0.3,
      }}
    >
    <div ref={menuRef} className="
  w-[380px]
  max-h-[80vh]
  overflow-y-auto
  rounded-3xl
  bg-[#050F0F]/95
  backdrop-blur-xl
  border border-white/10
  p-8
  shadow-2xl
">
            <div className="flex flex-col gap-6">
              <Link to="/#home" onClick={() => setIsMenuOpen(false)} className="text-[#F7FAF8] font-clash  hover:text-[#00C2A0] transition-colors text-left block">
                {TEXT.nav.home}
              </Link>
             <button
                onClick={() => setDrawerServicesOpen(prev => !prev)}
                className="flex items-center justify-between text-[#F7FAF8] font-clash hover:text-[#00C2A0] transition-colors text-left"
          >
  {TEXT.nav.services}
  <ChevronDown className={`w-4 h-4 transition-transform ${drawerServicesOpen ? "rotate-180" : ""}`} />
</button>
{drawerServicesOpen && (
  <div className="ml-4 flex flex-col space-y-2">
    <button onClick={() => scrollToSection('services')} className="text-white/90 font-archivo text-left">
      Services
    </button>

    <Link to="./services/impo-expo" onClick={() => setIsMenuOpen(false)} className="text-white/90 font-archivo text-left">
      {TEXT.servicesDropdown.impoexpo}
    </Link>
    <Link to="/services/fmcg" onClick={() => setIsMenuOpen(false)} className="text-white/90 font-archivo text-left">
      {TEXT.servicesDropdown.fmcgb}
    </Link>
    <Link to="/services/freight" onClick={() => setIsMenuOpen(false)} className="text-white/90 font-archivo text-left">
      {TEXT.servicesDropdown.frieghtforwarding}
    </Link>
    <Link to="/services/distribution" onClick={() => setIsMenuOpen(false)} className="text-white/90 font-archivo text-left">
      {TEXT.servicesDropdown.distribution}
    </Link>
    <Link to="/services/warehousing" onClick={() => setIsMenuOpen(false)} className="text-white/90 font-archivo text-left">
      {TEXT.servicesDropdown.contractWarehousing}
    </Link>
    <Link to="/services/TCL" onClick={() => setIsMenuOpen(false)} className="text-white/90 font-archivo text-left">
      {TEXT.servicesDropdown.tcl}
    </Link>
    <Link to="/services/Supply_chain" onClick={() => setIsMenuOpen(false)} className="text-white/90 font-archivo text-left">
      {TEXT.servicesDropdown.scc}
    </Link>
    <Link to="/services/customs" onClick={() => setIsMenuOpen(false)} className="text-white/90 font-archivo text-left">
      {TEXT.servicesDropdown.customs}
    </Link>
  </div>
)}

             
              <button
  onClick={() => setDrawerIndustriesOpen(prev => !prev)}
  className="flex items-center justify-between text-[#F7FAF8] font-clash hover:text-[#00C2A0] transition-colors text-left"
>
  {TEXT.nav.industries}
  <ChevronDown className={`w-4 h-4 transition-transform ${drawerIndustriesOpen ? "rotate-180" : ""}`} />
</button>
{drawerIndustriesOpen && (
  <div className="ml-4 flex flex-col space-y-2">
    <button onClick={() => scrollToSection('industries')} className="text-white/90 font-archivo text-left">
     Industries 
    </button>
    <Link to="/industries/food_beverages" onClick={() => setIsMenuOpen(false)} className="text-white/90 font-archivo text-left">
      {TEXT.industriesDropdown.foodnbeverages}
    </Link>
    <Link to="/industries/fmcg" onClick={() => setIsMenuOpen(false)} className="text-white/90 font-archivo text-left">
      {TEXT.industriesDropdown.fmcg}
    </Link>
    <Link to="/industries/cold_chain" onClick={() => setIsMenuOpen(false)} className="text-white/90 font-archivo text-left">
      {TEXT.industriesDropdown.coldchain}
    </Link>
    <Link to="/industries/retail" onClick={() => setIsMenuOpen(false)} className="text-white/90 font-archivo text-left">
      {TEXT.industriesDropdown.retail}
    </Link>
    <Link to="/industries/horeca" onClick={() => setIsMenuOpen(false)} className="text-white/90 font-archivo text-left">
      {TEXT.industriesDropdown.horeca}
    </Link>
    <Link to="/industries/ecommerce" onClick={() => setIsMenuOpen(false)} className="text-white/90 font-archivo text-left">
      {TEXT.industriesDropdown.ecommerce}
    </Link>
  </div>
)}
<button
  onClick={() => setDrawerAboutOpen(prev => !prev)}
  className="flex items-center justify-between text-[#F7FAF8] font-clash hover:text-[#00C2A0] transition-colors text-left"
>
  {TEXT.nav.about}
  <ChevronDown className={`w-4 h-4 transition-transform ${drawerAboutOpen ? "rotate-180" : ""}`} />
</button>
{drawerAboutOpen && (
  <div className="ml-4 flex flex-col space-y-2">
    <Link to="/aboutUs" onClick={() => setIsMenuOpen(false)} className="text-white/90 font-archivo text-left">
      {TEXT.nav.aboutUs}
    </Link>
    
    <Link to="/careers" onClick={() => setIsMenuOpen(false)} className="text-white/90 font-archivo text-left">
      {TEXT.nav.careers}
    </Link>

    <Link to="/BeOurPartner" onClick={() => setIsMenuOpen(false)} className="text-white/90 font-archivo text-left">
      Be our Partner
    </Link>
  </div>
)}
              <button
        onClick={() => setIsOpen(true)}
        className=" text-white hover:text-[#F7FAF8] font-clash transition-colors text-left"
      >
        {TEXT.nav.contact}
      </button>
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
          </motion.div>
          </>
        )}
        </AnimatePresence>
      </div>
    </header>
    
  );
}
