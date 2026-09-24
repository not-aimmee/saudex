import { useRef,useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TEXT } from '../constants';
import logo from '/logo.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate, useLocation } from "react-router-dom";


export default function Header() {
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
      ${isScrolled ? 'bg-[#031926]/80 backdrop-blur-md' : 'bg-transparent'}
    `}>
      <div className="w-full px-10 sm:px-6 md:px-10 lg:px-16 ">
        <div className="mx-auto flex items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            
  <img src={logo}  onClick={goHome} alt="Saudex Global" className="w-10 h-10 lg:w-10 lg:h-10" draggable={false} />
  <span  onClick={goHome} className="font-sentient font-regular text-[22px] lg:text-[40px]  text-[#f5fbef] tracking-normal">SAUDEX GLOBAL</span>
</div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ml-34 ">
            <Link
              to="/"
              className="px-6 py-4 text-[#f5fbef] font-generalsans font-regular text-lg hover:text-[#bbd6d1] tracking-wider transition-colors flex items-center gap-1"
            >
              {TEXT.nav.home}
            </Link>
            
            {/* About Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setNavbarAboutOpen(true)}
                onMouseLeave={() => setNavbarAboutOpen(false)}
                onClick={() => scrollToSection('about')}
                className="px-6 py-4 text-[#f5fbef] font-generalsans font-regular text-lg hover:text-[#bbd6d1] tracking-wider transition-colors flex items-center gap-1"
              >
                {TEXT.nav.about}
              </button>
              {navbarAboutOpen && (
                <div
                  onMouseEnter={() => setNavbarAboutOpen(true)}
                  onMouseLeave={() => setNavbarAboutOpen(false)}
                  className="absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg py-2 border border-gray-100"
                >
                  <Link
                    to="/aboutUs/"
                    onClick={() => setNavbarAboutOpen(false) }
                    className="block w-full text-left px-4 py-2.5 font-generalsans font-regular text-sm text-[#031926] hover:bg-gray-50 hover:text-[#468189] transition-colors"
                  >
                    {TEXT.nav.aboutUs}
                  </Link>
                  <Link
                    to="/careers/"
                    onClick={() => setNavbarAboutOpen(false) }
                    className="block w-full text-left px-4 py-2.5 font-generalsans font-regular text-sm text-[#031926] hover:bg-gray-50 hover:text-[#468189] transition-colors"
                  >
                    {TEXT.nav.careers}
                  </Link>
                  <Link
                    to="/BeOurPartner/"
                    onClick={() => setNavbarAboutOpen(false) }
                    className="block w-full text-left px-4 py-2.5 font-generalsans font-regular text-sm text-[#031926] hover:bg-gray-50 hover:text-[#468189] transition-colors"
                  >
                    Be Our Partner
                  </Link>

                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
             <button
                onMouseEnter={() => setNavbarServicesOpen(true)}
                onMouseLeave={() => setNavbarServicesOpen(false)}
                onClick={() => scrollToSection('services')}
                className="px-6 py-4 text-[#f5fbef] font-generalsans font-regular text-lg hover:text-[#bbd6d1] tracking-wider transition-colors flex items-center gap-1"
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
                    to="/industries/cold_chain/"
                    onClick={() => setNavbarIndustriesOpen(false) }
                    className="block w-full text-left px-4 py-2.5 font-generalsans font-regular text-sm text-[#031926] hover:bg-gray-50 hover:text-[#468189] transition-colors"
                  >
                    {TEXT.industriesDropdown.coldchain}
                  </Link>
                  <Link
                    to="/services/warehousing/"
                    onClick={() => setNavbarServicesOpen(false)}
                    className="block w-full text-left px-4 py-2.5 font-generalsans font-regular text-sm text-[#031926] hover:bg-gray-50 hover:text-[#468189] transition-colors"
                  >
                    {TEXT.servicesDropdown.contractWarehousing}
                  </Link>
                  <Link
                    to="/services/impo-expo/"
                    onClick={() => setNavbarServicesOpen(false)}
                    className="block w-full text-left px-4 py-2.5 font-generalsans font-regular text-sm text-[#031926] hover:bg-gray-50 hover:text-[#468189] transition-colors"
                  >
                    {TEXT.servicesDropdown.impoexpo}
                  </Link>
                  <Link
                    to="/services/fmcg/"
                    onClick={() => setNavbarServicesOpen(false)}
                    className="block w-full text-left px-4 py-2.5 font-generalsans font-regular text-sm text-[#031926] hover:bg-gray-50 hover:text-[#468189] transition-colors"
                  >
                    {TEXT.servicesDropdown.fmcgb}
                  </Link>
                  <Link
                    to="/services/freight/"
                    onClick={() => setNavbarServicesOpen(false)}
                    className="block w-full text-left px-4 py-2.5 font-generalsans font-regular text-sm text-[#031926] hover:bg-gray-50 hover:text-[#468189] transition-colors"
                  >
                    {TEXT.servicesDropdown.frieghtforwarding}
                  </Link>
                  <Link
                    to="/services/Supply_chain/"
                    onClick={() => setNavbarServicesOpen(false)}
                    className="block w-full text-left px-4 py-2.5 font-generalsans font-regular text-sm text-[#031926] hover:bg-gray-50 hover:text-[#468189] transition-colors"
                  >
                    {TEXT.servicesDropdown.scc}
                  </Link>
                  <Link
                    to="/services/distribution/"
                    onClick={() => setNavbarServicesOpen(false)}
                    className="block w-full text-left px-4 py-2.5 font-generalsans font-regular text-sm text-[#031926] hover:bg-gray-50 hover:text-[#468189] transition-colors"
                  >
                    {TEXT.servicesDropdown.distribution}
                  </Link>
                  <Link
                    to="/services/customs/"
                    onClick={() => setNavbarServicesOpen(false)}
                    className="block w-full text-left px-4 py-2.5 font-generalsans font-regular text-sm text-[#031926] hover:bg-gray-50 hover:text-[#468189] transition-colors"
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
                className="px-6 py-4 text-[#F5FBEF] font-generalsans font-regular text-lg hover:text-[#bbd6d1] tracking-wider transition-colors flex items-center gap-1"
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
                    to="/industries/horeca/"
                    onClick={() => setNavbarIndustriesOpen(false) }
                    className="block w-full text-left px-4 py-2.5 font-generalsans font-regular text-sm text-[#031926] hover:bg-gray-50 hover:text-[#468189] transition-colors"
                  >
                    {TEXT.industriesDropdown.horeca}
                  </Link>
                  <Link
                    to="/industries/fmcg_industry/"
                    onClick={() => setNavbarIndustriesOpen(false)}
                    className="block w-full text-left px-4 py-2.5 font-generalsans font-regular text-sm text-[#031926] hover:bg-gray-50 hover:text-[#468189] transition-colors"
                  >
                    {TEXT.industriesDropdown.fmcg}
                  </Link>
                   <Link
                    to="/industries/e_commerce/"
                    onClick={() => setNavbarIndustriesOpen(false) }
                    className="block w-full text-left px-4 py-2.5 font-generalsans font-regular text-sm text-[#031926] hover:bg-gray-50 hover:text-[#468189] transition-colors"
                  >
                    {TEXT.industriesDropdown.ecommerce}
                  </Link>
                  <Link
                    to="/industries/food_beverages/"
                    onClick={() => setNavbarIndustriesOpen(false)}
                    className="block w-full text-left px-4 py-2.5 font-generalsans font-regular text-sm text-[#031926] hover:bg-gray-50 hover:text-[#468189] transition-colors"
                  >
                    {TEXT.industriesDropdown.foodnbeverages}
                  </Link>
                  
                  <Link
                    to="/industries/retail/"
                    onClick={() => setNavbarIndustriesOpen(false) }
                    className="block w-full text-left px-4 py-2.5 font-generalsans font-regular text-sm text-[#031926] hover:bg-gray-50 hover:text-[#468189] transition-colors"
                  >
                    {TEXT.industriesDropdown.retail}
                  </Link>
                 
                   <Link
                    to="/industries/agriculture/"
                    onClick={() => setNavbarIndustriesOpen(false) }
                    className="block w-full text-left px-4 py-2.5 font-generalsans font-regular text-sm text-[#031926] hover:bg-gray-50 hover:text-[#468189] transition-colors"
                  >
                    Agri-Commodities & Palm Oil
                  </Link>
                </div>
              )}
            </div>
             <Link to="/Contact/"         className="px-6 py-4 text-[#F5FBEF] font-generalsans font-regular text-lg hover:text-[#bbd6d1] tracking-wider transition-colors">
        {TEXT.nav.contact}
      </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 ml-auto">
            <button
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#F5FBEF] hover:text-[#bbd6d1] transition-colors"
            >
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {isMenuOpen && (
          <>
           <motion.div
        className="fixed inset-0 bg-[#0A2947]/40 z-[9998]"
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
    <div id="mobile-navigation-menu" ref={menuRef} className="
  w-[380px]
  max-h-[80vh]
  overflow-y-auto
  rounded-3xl
  bg-[#02090f]/95
  backdrop-blur-xl
  border border-white/10
  p-8
  shadow-2xl
">
            <div className="flex flex-col gap-6">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-[#F5FBEF] font-generalsans  hover:text-[#f4e9cd] transition-colors text-left block">
                {TEXT.nav.home}
              </Link>
             <button
                onClick={() => setDrawerServicesOpen(prev => !prev)}
                className="flex items-center justify-between text-[#F5FBEF] font-generalsans hover:text-[#f4e9cd] transition-colors text-left"
          >
  {TEXT.nav.services}
  <ChevronDown className={`w-4 h-4 transition-transform ${drawerServicesOpen ? "rotate-180" : ""}`} />
</button>
{drawerServicesOpen && (
  <div className="ml-4 flex flex-col space-y-2">
    <button onClick={() => scrollToSection('services')} className="text-[#F5FBEF] font-generalsans text-left">
      Services
    </button>

    <Link to="/services/impo-expo/" onClick={() => setIsMenuOpen(false)} className="text-[#F5FBEF] font-generalsans text-left">
      {TEXT.servicesDropdown.impoexpo}
    </Link>
    <Link to="/services/fmcg/" onClick={() => setIsMenuOpen(false)} className="text-[#F5FBEF] font-generalsans text-left">
      {TEXT.servicesDropdown.fmcgb}
    </Link>
    <Link to="/services/freight/" onClick={() => setIsMenuOpen(false)} className="text-[#F5FBEF] font-generalsans text-left">
      {TEXT.servicesDropdown.frieghtforwarding}
    </Link>
    <Link to="/services/warehousing/" onClick={() => setIsMenuOpen(false)} className="text-[#F5FBEF] font-generalsans text-left">
      {TEXT.servicesDropdown.contractWarehousing}
    </Link>
    <Link to="/services/Supply_chain/" onClick={() => setIsMenuOpen(false)} className="text-[#F5FBEF] font-generalsans text-left">
      {TEXT.servicesDropdown.scc}
    </Link>
     <Link to="/industries/cold_chain/" onClick={() => setIsMenuOpen(false)} className="text-[#F5FBEF] font-generalsans text-left">
      {TEXT.industriesDropdown.coldchain}
    </Link>

    <Link to="/services/distribution/" onClick={() => setIsMenuOpen(false)} className="text-[#F5FBEF] font-generalsans text-left">
      {TEXT.servicesDropdown.distribution}
    </Link>
    <Link to="/services/customs/" onClick={() => setIsMenuOpen(false)} className="text-[#F5FBEF] font-generalsans text-left">
      {TEXT.servicesDropdown.customs}
    </Link>
  </div>
)}

             
              <button
  onClick={() => setDrawerIndustriesOpen(prev => !prev)}
  className="flex items-center justify-between text-[#F5FBEF] font-generalsans hover:text-[#f4e9cd] transition-colors text-left"
>
  {TEXT.nav.industries}
  <ChevronDown className={`w-4 h-4 transition-transform ${drawerIndustriesOpen ? "rotate-180" : ""}`} />
</button>
{drawerIndustriesOpen && (
  <div className="ml-4 flex flex-col space-y-2">
    <button onClick={() => scrollToSection('industries')} className="text-[#F5FBEF] font-generalsans text-left">
     Industries 
    </button>
     <Link to="/industries/horeca/" onClick={() => setIsMenuOpen(false)} className="text-[#F5FBEF] font-generalsans text-left">
      {TEXT.industriesDropdown.horeca}
    </Link>
    <Link to="/industries/fmcg_industry/" onClick={() => setIsMenuOpen(false)} className="text-[#F5FBEF] font-generalsans text-left">
      {TEXT.industriesDropdown.fmcg}
    </Link>
    <Link to="/industries/e_commerce/" onClick={() => setIsMenuOpen(false)} className="text-[#F5FBEF] font-generalsans text-left">
      {TEXT.industriesDropdown.ecommerce}
    </Link>
     <Link to="/industries/food_beverages/" onClick={() => setIsMenuOpen(false)} className="text-[#F5FBEF] font-generalsans text-left">
      {TEXT.industriesDropdown.foodnbeverages}
    </Link>
   <Link to="/industries/retail/" onClick={() => setIsMenuOpen(false)} className="text-[#F5FBEF] font-generalsans text-left">
      {TEXT.industriesDropdown.retail}
    </Link>
    <Link to="/industries/agriculture/" onClick={() => setIsMenuOpen(false)} className="text-[#F5FBEF] font-generalsans text-left">
      Agri-Commodities & Palm Oil
    </Link>
  </div>
)}
<button
  onClick={() => setDrawerAboutOpen(prev => !prev)}
  className="flex items-center justify-between text-[#F5FBEF] font-generalsans hover:text-[#f4e9cd] transition-colors text-left"
>
  {TEXT.nav.about}
  <ChevronDown className={`w-4 h-4 transition-transform ${drawerAboutOpen ? "rotate-180" : ""}`} />
</button>
{drawerAboutOpen && (
  <div className="ml-4 flex flex-col space-y-2">
    <Link to="/aboutUs/" onClick={() => setIsMenuOpen(false)} className="text-[#F5FBEF] font-generalsans text-left">
      {TEXT.nav.aboutUs}
    </Link>
    
    <Link to="/careers/" onClick={() => setIsMenuOpen(false)} className="text-[#F5FBEF] font-generalsans text-left">
      {TEXT.nav.careers}
    </Link>

    <Link to="/BeOurPartner/" onClick={() => setIsMenuOpen(false)} className="text-[#F5FBEF] font-generalsans text-left">
      Be our Partner
    </Link>
  </div>
)}
              <Link to="/Contact/"         className="px-6 py-4 text-[#F5FBEF] font-generalsans font-regular text-lg hover:text-[#bbd6d1] tracking-wider transition-colors">
        {TEXT.nav.contact}
      </Link>
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
