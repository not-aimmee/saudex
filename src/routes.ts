import routeManifest from "../routes.json";

const routeLayouts = ["main", "simple", "bare"] as const;
const publicPages = [
  "home",
  "aboutUs",
  "team",
  "caseStudies",
  "services",
  "service",
  "customs",
  "distribution",
  "fmcg",
  "freight",
  "importExport",
  "supplyChain",
  "warehousing",
  "industries",
  "agriculture",
  "coldChain",
  "eCommerce",
  "fmcgIndustry",
  "foodBeverages",
  "horeca",
  "retail",
  "contact",
  "partnerContact",
  "beOurPartner",
  "careers",
  "privacyPolicy",
  "termsOfService",
  "nfcCard",
] as const;

export type RouteLayout = (typeof routeLayouts)[number];
export type PublicPage = (typeof publicPages)[number];

export interface PublicRoute {
  path: string;
  layout: RouteLayout;
  page: PublicPage;
  title: string;
  description: string;
}

function isRouteLayout(value: string): value is RouteLayout {
  return (routeLayouts as readonly string[]).includes(value);
}

function isPublicPage(value: string): value is PublicPage {
  return (publicPages as readonly string[]).includes(value);
}

const seenPaths = new Set<string>();
export const publicRoutes: PublicRoute[] = routeManifest.map((route): PublicRoute => {
  const layout = route.layout;
  const page = route.page;
  if (
    !route.path.startsWith("/") ||
    route.path.endsWith("/") && route.path !== "/" ||
    seenPaths.has(route.path) ||
    !isRouteLayout(layout) ||
    !isPublicPage(page)
  ) {
    throw new Error(`Invalid or duplicate public route in routes.json: ${route.path}`);
  }

  seenPaths.add(route.path);
  return { ...route, layout, page };
});

export const legacyRedirects = [
  { path: "/aboutUs", to: "/about-us" },
  { path: "/AboutUs", to: "/about-us" },
  { path: "/Home", to: "/" },
  { path: "/CTA", to: "/get-a-quote" },
  { path: "/cta", to: "/get-a-quote" },
  { path: "/Contact", to: "/contact" },
  { path: "/Services", to: "/services" },
  { path: "/Industries", to: "/industries" },
  { path: "/Stats", to: "/#stats" },
  { path: "/How_it_works", to: "/#how-it-works" },
  { path: "/how-we-work", to: "/#how-it-works" },
  { path: "/stats", to: "/#stats" },
  { path: "/BeOurPartner", to: "/be-our-partner" },
  { path: "/partner", to: "/be-our-partner" },
  { path: "/partner_contact", to: "/partner-contact" },
  { path: "/privacy_policy", to: "/privacy-policy" },
  { path: "/terms_of_service", to: "/terms-of-service" },
  { path: "/services/impo-expo", to: "/services/import-export" },
  { path: "/services/import_export", to: "/services/import-export" },
  { path: "/services/supply_chain", to: "/services/supply-chain" },
  { path: "/services/Supply_chain", to: "/services/supply-chain" },
  { path: "/services/TCL", to: "/industries/cold-chain" },
  { path: "/industries/cold_chain", to: "/industries/cold-chain" },
  { path: "/industries/e_commerce", to: "/industries/e-commerce" },
  { path: "/industries/fmcg_industry", to: "/industries/fmcg-industry" },
  { path: "/industries/food_beverages", to: "/industries/food-beverages" },
  { path: "/nfcCard", to: "/nfc-card" },
] as const;
