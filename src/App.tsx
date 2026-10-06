import MainLayout from "./assets/main_layout";
import SimpleLayout from "./assets/simple_layout";
import Hero from "./components/Home";
import DeferredSection from "./components/DeferredSection";
import Cookies from "./components/cookies";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { loadWebMcpRuntime } from "./webmcpRuntime";
const Services = lazy(() => import("./components/Services"));
const HowItWorks = lazy(() => import("./components/How_it_works"));
const Industries = lazy(() => import("./components/Industries"));
const Stats = lazy(() => import("./components/Stats"));
const ServicePage = lazy(() => import("./pages/service"));
const Customs = lazy(() => import("./pages/services/customs"));
const Distribution = lazy(() => import("./pages/services/distribution"));
const FMCG = lazy(() => import("./pages/services/fmcg"));
const ImpoExpo = lazy(() => import("./pages/services/impo-expo"));
const SCC = lazy(() => import("./pages/services/Supply_chain"));
const Warehousing = lazy(() => import("./pages/services/warehousing"));
const ColdChainPage = lazy(() => import("./pages/industries/cold_chain"));
const ECommercePage = lazy(() => import("./pages/industries/e_commerce"));
const HorecaPage = lazy(() => import("./pages/industries/horeca"));
const FMCGPage = lazy(() => import("./pages/industries/fmcg_industry"));
const AgriPage = lazy(() => import("./pages/industries/agriculture"));
const RetailPage = lazy(() => import("./pages/industries/retail"));
const FoodBevPage = lazy(() => import("./pages/industries/food_beverages"));
const PrivacyPolicy = lazy(() => import("./pages/privacy_policy"));
const TermsOfService = lazy(() => import("./pages/terms_of_service"));
const Freight = lazy(() => import("./pages/services/freight"));
const Careers = lazy(() => import("./pages/careers"));
const AboutUs = lazy(() => import("./pages/aboutUs"));
const Team = lazy(() => import("./pages/Team"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const BeOurPartner = lazy(() => import("./pages/BeOurPartner"));
const NfcCard = lazy(() => import("./pages/cards/nfcCard"));
const Partnercontact = lazy(async () => {
  await loadWebMcpRuntime();
  return import("./components/partner_contact");
});
const Contact = lazy(async () => {
  await loadWebMcpRuntime();
  return import("./components/Contact");
});

function App() {
  return (
    <>
    <Cookies />
    <Suspense fallback={<div role="status" className="min-h-screen bg-[#f1f0ea] p-8 text-[#031926]">Loading page...</div>}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <DeferredSection minHeight="80vh">
                <Services includeSEO={false} />
              </DeferredSection>
              <DeferredSection minHeight="100vh">
                <HowItWorks />
              </DeferredSection>
              <DeferredSection minHeight="540px">
                <Industries includeSEO={false} />
              </DeferredSection>
              <DeferredSection minHeight="480px">
                <Stats />
              </DeferredSection>
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
        <Route path="import-export" element={<ImpoExpo/>} />
        <Route path="supply-chain" element={<SCC/>} />
        <Route path="supply_chain" element={<SCC/>} />
        <Route path="warehousing" element={<Warehousing/>} />
        <Route path="import_export" element={<ImpoExpo/>} />
       </Route>
       <Route path="industries">
        <Route index element={<Industries />} />
        <Route path="e-commerce" element={<ECommercePage/>} />
        <Route path="e_commerce" element={<ECommercePage/>} />
        <Route path="horeca" element={<HorecaPage/>} />
        <Route path="fmcg-industry" element={<FMCGPage/>} />
        <Route path="fmcg_industry" element={<FMCGPage/>} />
        <Route path="retail" element={<RetailPage/>} />
        <Route path="food-beverages" element={<FoodBevPage/>} />
        <Route path="food_beverages" element={<FoodBevPage/>} />
        <Route path="cold-chain" element={<ColdChainPage/>} />
        <Route path="cold_chain" element={<ColdChainPage/>} />
        <Route path="agriculture" element={<AgriPage/>} />
       </Route>
       <Route path="aboutUs" element={<AboutUs/>} />
       <Route path="about-us" element={<AboutUs/>} />
       <Route path="team" element={<Team/>} />
       <Route path="case-studies" element={<CaseStudies/>} />
       <Route path="careers" element={<Careers/>} />
       
      </Route>
      <Route element={<SimpleLayout/>}>
       <Route path="privacy_policy" element ={<PrivacyPolicy/>} />
       <Route path="privacy-policy" element={<PrivacyPolicy/>} />
       <Route path="terms_of_service" element ={<TermsOfService/>} />
       <Route path="terms-of-service" element={<TermsOfService/>} />
       <Route path="BeOurPartner" element={<BeOurPartner/>}/>
       <Route path="be-our-partner" element={<BeOurPartner/>}/>
      <Route path="Contact" element={ <Suspense fallback={null}> <Contact /></Suspense>  }/>
      <Route path="contact" element={ <Suspense fallback={null}> <Contact /></Suspense>  }/>
      <Route path="CTA" element={ <Suspense fallback={null}> <Contact /></Suspense>  }/>
      <Route path="cta" element={ <Suspense fallback={null}> <Contact /></Suspense>  }/>
       <Route path="partner_contact" element={<Partnercontact/>}/>
       <Route path="partner-contact" element={<Partnercontact/>}/>
      </Route>
       <Route path="/nfcCard" element={<NfcCard/>} />
    </Routes>
    </Suspense>
  
</>
  );
}

export default App;