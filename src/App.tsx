import MainLayout from "./assets/main_layout";
import SimpleLayout from "./assets/simple_layout";
import Hero from "./components/Home";
import Services from "./components/Services";
import HowItWorks from "./components/How_it_works";
import Industries from "./components/Industries";
import Stats from "./components/Stats"
import ServicePage from "./pages/service"
import Customs from "./pages/services/customs"
import Distribution from "./pages/services/distribution";
import FMCG from "./pages/services/fmcg";
import ImpoExpo from "./pages/services/impo-expo";
import SCC from "./pages/services/Supply_chain";
import TCL from "./pages/services/TCL";
import Warehousing from "./pages/services/warehousing";
import ColdChainPage from "./pages/industries/cold_chain"
import ECommercePage from "./pages/industries/e_commerce";
import HorecaPage from "./pages/industries/horeca";
import FMCGPage from "./pages/industries/fmcg_industry";
import RetailPage from "./pages/industries/retail";
import FoodBevPage from "./pages/industries/food_beverages";
import PrivacyPolicy from "./pages/privacy_policy";
import TermsOfService from "./pages/terms_of_service";
import Freight from "./pages/services/freight";
import Careers from "./pages/careers";
import AboutUs from "./pages/aboutUs";
import BeOurPartner from "./pages/BeOurPartner";
import NfcCard from "./pages/cards/nfcCard";
import Cookies from "./components/cookies";
import Partnercontact from "./components/partner_contact";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Contact = lazy(() => import("./components/Contact"));


function App() {
  return (
    <>
    <Cookies />
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <HowItWorks />
              <Industries/>
              <Stats/>
            </>
          }
        />
      </Route>

      <Route element={<MainLayout/>}>
       <Route path="services">
        <Route index element={<Services />} />
        <Route path="service" element={<ServicePage/>}/>
        <Route path="customs" element={<Customs />} />
        <Route path="distribution" element={<Distribution/>} />
        <Route path="fmcg" element={<FMCG/>} />
        <Route path="freight" element={<Freight/>} />
        <Route path="impo-expo" element={<ImpoExpo/>} />
        <Route path="Supply_chain" element={<SCC/>} />
        <Route path="TCL" element={<TCL/>} />
        <Route path="warehousing" element={<Warehousing/>} />
        
       </Route>
       <Route path="industries">
        <Route index element={<Industries />} />
        <Route path="e_commerce" element={<ECommercePage/>} />
        <Route path="horeca" element={<HorecaPage/>} />
        <Route path="fmcg_industry" element={<FMCGPage/>} />
        <Route path="retail" element={<RetailPage/>} />
        <Route path="food_beverages" element={<FoodBevPage/>} />
        <Route path="cold_chain" element={<ColdChainPage/>} />
       </Route>
       <Route path="aboutUs" element={<AboutUs/>} />
       <Route path="careers" element={<Careers/>} />
       
      </Route>
      <Route element={<SimpleLayout/>}>
       <Route path="privacy_policy" element ={<PrivacyPolicy/>} />
       <Route path="terms_of_service" element ={<TermsOfService/>} />
       <Route path="BeOurPartner" element={<BeOurPartner/>}/>
      <Route path="Contact" element={ <Suspense fallback={null}> <Contact /></Suspense>  }/>
      <Route path="CTA" element={ <Suspense fallback={null}> <Contact /></Suspense>  }/>
       <Route path="partner_contact" element={<Partnercontact/>}/>
      </Route>
       <Route path="/nfcCard" element={<NfcCard/>} />
    </Routes>
  
</>
  );
}

export default App;