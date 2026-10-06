import MainLayout from "./assets/main_layout";
import SimpleLayout from "./assets/simple_layout";
import Cookies from "./components/cookies";
import AsyncErrorBoundary from "./components/AsyncSectionBoundary";
import Services from "./components/Services";
import Industries from "./components/Industries";
import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense, type ReactNode } from "react";
import { loadWebMcpRuntime } from "./webmcpRuntime";
import LandingPage from "./landing_page";
import { legacyRedirects, publicRoutes, type PublicPage, type RouteLayout } from "./routes";
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
const NotFound = lazy(() => import("./pages/not-found"));
const Contact = lazy(async () => {
  await loadWebMcpRuntime();
  return import("./components/Contact");
});

const routeElements: Record<PublicPage, ReactNode> = {
  home: <LandingPage />,
  aboutUs: <AboutUs />,
  team: <Team />,
  caseStudies: <CaseStudies />,
  services: <Services />,
  service: <ServicePage />,
  customs: <Customs />,
  distribution: <Distribution />,
  fmcg: <FMCG />,
  freight: <Freight />,
  importExport: <ImpoExpo />,
  supplyChain: <SCC />,
  warehousing: <Warehousing />,
  industries: <Industries />,
  agriculture: <AgriPage />,
  coldChain: <ColdChainPage />,
  eCommerce: <ECommercePage />,
  fmcgIndustry: <FMCGPage />,
  foodBeverages: <FoodBevPage />,
  horeca: <HorecaPage />,
  retail: <RetailPage />,
  contact: <Contact />,
  partnerContact: <Partnercontact />,
  beOurPartner: <BeOurPartner />,
  careers: <Careers />,
  privacyPolicy: <PrivacyPolicy />,
  termsOfService: <TermsOfService />,
  nfcCard: <NfcCard />,
};

function routesForLayout(layout: RouteLayout) {
  return publicRoutes
    .filter((route) => route.layout === layout)
    .map((route) => (
      <Route key={route.path} path={route.path} element={routeElements[route.page]} />
    ));
}

function App() {
  return (
    <>
    <Cookies />
    <AsyncErrorBoundary fallbackMessage="This page could not load. Reload the page to try again.">
    <Suspense fallback={<div role="status" className="min-h-screen bg-[#f1f0ea] p-8 text-[#031926]">Loading page...</div>}>
    <Routes>
      {legacyRedirects.map(({ path, to }) => (
        <Route key={path} path={path} caseSensitive element={<Navigate to={to} replace />} />
      ))}
      <Route element={<MainLayout />}>
        {routesForLayout("main")}
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<SimpleLayout />}>
        {routesForLayout("simple")}
      </Route>
      {routesForLayout("bare")}
    </Routes>
    </Suspense>
    </AsyncErrorBoundary>
  
</>
  );
}

export default App;