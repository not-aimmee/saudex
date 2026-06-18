import MainLayout from "./assets/main_layout";
import SimpleLayout from "./assets/simple_layout";
import Hero from "./components/Home";
import Services from "./components/Services";
import HowItWorks from "./components/How_it_works";
import WhyChooseUs from "./components/Why_choose_us"
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
import FMCGPage from "./pages/industries/FMCG";
import RetailPage from "./pages/industries/retail";
import FoodBevPage from "./pages/industries/food_beverages";
import PrivacyPolicy from "./pages/privacy_policy";
import TermsOfService from "./pages/terms_of_service";
import Freight from "./pages/services/freight";
import Careers from "./pages/careers";
import AboutUs from "./pages/aboutUs";
import BeOurPartner from "./components/BeOurPartner";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <HowItWorks/>
              <WhyChooseUs/>
              <Industries/>
              <Stats/>
              <BeOurPartner/>
            </>
          }
        />
      </Route>

      <Route element={<MainLayout/>}>
       <Route path="services">
        <Route path="service" element={<ServicePage/>}/>
        <Route path="/services/customs" element={<Customs />} />
        <Route path="/services/distribution" element={<Distribution/>} />
        <Route path="/services/fmcg" element={<FMCG/>} />
        <Route path="/services/freight" element={<Freight/>} />
        <Route path="/services/impo-expo" element={<ImpoExpo/>} />
        <Route path="/services/Supply_chain" element={<SCC/>} />
        <Route path="/services/TCL" element={<TCL/>} />
        <Route path="/services/warehousing" element={<Warehousing/>} />
       </Route>
       <Route path="industries">
        <Route path="/industries/cold_chain" element={<ColdChainPage/>} />
        <Route path="/industries/e_commerce" element={<ECommercePage/>} />
        <Route path="/industries/horeca" element={<HorecaPage/>} />
        <Route path="/industries/fmcg" element={<FMCGPage/>} />
        <Route path="/industries/retail" element={<RetailPage/>} />
        <Route path="/industries/food_beverages" element={<FoodBevPage/>} />
       </Route>
       <Route path="aboutUs" element={<AboutUs/>} />
       <Route path="careers" element={<Careers/>} />
      </Route>
      <Route element={<SimpleLayout/>}>
       <Route path="privacy_policy" element ={<PrivacyPolicy/>} />
       <Route path="terms_of_service" element ={<TermsOfService/>} />
      </Route>
    </Routes>
  
</>
  );
}

export default App;
