import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const outputDirectory = join(process.cwd(), "dist");
const template = readFileSync(join(outputDirectory, "index.html"), "utf8");
const baseUrl = "https://saudexglobal.com";

const pages = [
  {
    route: "/",
    title: "Global Logistics Solutions for Businesses | SAUDEX GLOBAL",
    description:
      "SAUDEX GLOBAL helps businesses move goods worldwide with freight, customs, warehousing, and supply chain logistics.",
    heading: "Global logistics solutions for businesses",
    paragraphs: [
      "SAUDEX GLOBAL helps businesses plan and move goods across international markets. We coordinate freight forwarding, import and export, customs clearance, warehousing, distribution, and supply chain operations so shipments can move from origin to destination with fewer handoffs. Our team works with air, sea, and land transport to balance cost, transit time, and cargo requirements.",
      "Businesses can get help with route planning, supplier coordination, shipment documentation, inventory handling, and delivery scheduling through one connected logistics partner. From a single shipment to recurring distribution, support is adapted to the product, destination, and operating requirements. We work with retail, FMCG, e-commerce, food, hospitality, and agricultural supply chains.",
      "Explore the services and industries pages to learn about available logistics support, or contact our team to discuss a freight, storage, or trade requirement.",
      "Good logistics also depends on timely information. We help coordinate shipment milestones, communicate operational requirements, and align transport with storage and final delivery. For businesses sourcing products internationally, bringing supplier communication and freight planning together can make each step easier to manage. Our service mix supports both planned movements and changing day-to-day requirements, with attention to route, timing, and handling from collection through delivery.",
    ],
  },
  {
    route: "/about-us/",
    title: "About Us | SAUDEX GLOBAL",
    description:
      "Learn about SAUDEX GLOBAL, a logistics and supply chain partner connecting businesses with reliable global trade.",
    heading: "About SAUDEX GLOBAL",
    paragraphs: [
      "SAUDEX GLOBAL is a logistics and supply chain partner helping businesses connect suppliers, markets, and customers. We bring freight forwarding, customs coordination, warehousing, and distribution together to support the movement of goods across international routes. Our work is grounded in practical planning, clear communication, and dependable coordination at each stage of a shipment.",
      "Every supply chain has different requirements. Cargo type, destination, timing, documentation, and delivery conditions all affect the right logistics plan. Our team works with customers to understand those details and coordinate suitable services, whether a business needs support with an individual shipment or with ongoing operations.",
      "We serve a broad range of sectors, including retail, FMCG, food and beverage, e-commerce, hospitality, agriculture, and temperature-sensitive cargo. Learn more about our services and industry solutions, or contact SAUDEX GLOBAL to discuss how we can support your logistics requirements.",
      "Our approach focuses on dependable coordination and practical service planning. We work to keep customers informed about requirements and shipment progress, and to align transport, handling, and delivery with business priorities. As trade needs change, businesses can review their routes and service mix with our team and plan logistics support that fits their operations.",
    ],
  },
  {
    route: "/industries/",
    title: "Industries | SAUDEX GLOBAL",
    description:
      "Explore tailored logistics for retail, FMCG, e-commerce, food, hospitality, agriculture, and cold-chain businesses.",
    heading: "Logistics solutions across diverse sectors",
    paragraphs: [
      "Every industry has distinct shipping, storage, and delivery needs. SAUDEX GLOBAL supports retail and wholesale replenishment, FMCG distribution, e-commerce fulfilment, food and beverage movements, hospitality supply, agricultural commodities, and temperature-sensitive cargo. Logistics plans are shaped around product handling, shipment frequency, route, delivery window, and destination.",
      "Retail and wholesale operations need dependable replenishment, store delivery, and flexible handling for mixed loads. E-commerce relies on coordinated fulfilment, accurate order handling, and returns support, while FMCG distribution depends on frequent deliveries and consistent product availability. Food, beverage, and hospitality supply chains require careful scheduling and appropriate product handling.",
      "Cold-chain shipments need temperature-aware transport and storage. Agricultural commodities call for suitable bulk movement and clear coordination from origin to destination. Explore the sectors below to find relevant solutions, or contact our team to discuss your cargo and delivery requirements.",
      "The right plan considers more than the transport leg. Product characteristics, order frequency, storage conditions, delivery windows, and destination requirements all influence how goods should move. By coordinating those details with customers, suppliers, and logistics partners, we help create a more connected flow from collection and storage through to final delivery.",
      "Our industry teams can discuss the practical needs of your products and routes, then coordinate services around your business. This includes matching shipment schedules with receiving windows, arranging appropriate handling, and keeping relevant parties aligned as goods move through the supply chain.",
    ],
  },
  {
    route: "/contact/",
    title: "Contact Us | SAUDEX GLOBAL",
    description:
      "Contact SAUDEX GLOBAL for freight, warehousing, customs, and supply chain enquiries. Our team is ready to help.",
    heading: "Contact SAUDEX GLOBAL",
    paragraphs: [
      "Get in touch with SAUDEX GLOBAL for freight, warehousing, customs, distribution, or supply chain enquiries. Share the origin and destination, cargo type, timing, and services you need so our team can understand your requirements and respond with relevant next steps.",
      "We can discuss air, sea, and land freight, import and export coordination, customs documentation, storage, and distribution. If your business has recurring shipments or specific handling needs, include those details in your enquiry. This helps us understand the route, cargo, and delivery conditions involved.",
      "For general questions or partnership discussions, contact our team by email or use the enquiry form on this page. We aim to make it straightforward to reach the right people and start a conversation about your logistics requirements.",
      "To help us respond usefully, include any important deadlines, shipment frequency, cargo dimensions or handling needs, and services already arranged. If you are still comparing options, a brief description of your goals is enough to begin. Our team can follow up to clarify details and discuss possible next steps for your business.",
      "You can also tell us whether you need a one-off shipment or ongoing logistics support, and whether there are special delivery, storage, or documentation requirements. We will use the information you provide to direct your enquiry to the appropriate team and continue the conversation.",
    ],
  },
  {
    route: "/services/",
    title: "Logistics Services | SAUDEX GLOBAL",
    description:
      "Explore freight, customs, import-export, distribution, warehousing, and supply chain services from SAUDEX GLOBAL.",
    heading: "Global trading and freight forwarding solutions",
    paragraphs: [
      "SAUDEX GLOBAL connects businesses with reliable products, suppliers, and international markets through global trading and freight forwarding. Our services cover import and export, supplier coordination, sea, air, and land freight, customs clearance, warehousing, and cross-border logistics. We coordinate shipments from source to destination with the cargo and route requirements in mind.",
      "Freight forwarding supports the movement of goods between origins and destinations, while customs coordination helps businesses prepare the information needed for cross-border trade. Warehousing and distribution can support inventory handling and onward delivery. These services can be planned together to reduce separate handoffs and keep supply chain activity organized.",
      "Our team can help with one-time shipments as well as recurring business flows. We consider shipment timing, cargo handling, route options, storage needs, and delivery schedules when coordinating a plan. Explore the service links or contact SAUDEX GLOBAL to discuss your requirements.",
      "Service requirements vary by product and destination. Some shipments need careful coordination between suppliers and carriers, while others depend on reliable storage, frequent distribution, or well-prepared trade documentation. We work with businesses to understand those operational priorities and bring suitable logistics activities together around the movement of their goods.",
    ],
  },
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderFallback(page) {
  const navigation = [
    ["/", "Home"],
    ["/services/", "Services"],
    ["/industries/", "Industries"],
    ["/about-us/", "About"],
    ["/contact/", "Contact"],
  ]
    .map(([href, label]) => `<a href="${href}">${label}</a>`)
    .join(" | ");
  const paragraphs = page.paragraphs
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("\n");

  return `<main style="max-width: 72rem; margin: 0 auto; padding: 2rem; font-family: Arial, sans-serif; color: #031926;">
    <nav aria-label="Main navigation">${navigation}</nav>
    <h1>${escapeHtml(page.heading)}</h1>
    ${paragraphs}
  </main>`;
}

function replaceRequired(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    throw new Error(`Could not find ${label} in the built index.html`);
  }
  return html.replace(pattern, replacement);
}

function renderPage(page) {
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const canonical = `${baseUrl}${page.route}`;
  let html = template;

  html = replaceRequired(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`, "title");
  html = replaceRequired(
    html,
    /<meta name="description" content="[^"]*"\s*\/>/,
    `<meta name="description" content="${description}" />`,
    "meta description",
  );
  html = replaceRequired(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${canonical}" />`,
    "canonical link",
  );
  html = replaceRequired(
    html,
    /<meta property="og:title" content="[^"]*">/,
    `<meta property="og:title" content="${title}">`,
    "Open Graph title",
  );
  html = replaceRequired(
    html,
    /<meta property="og:description" content="[^"]*">/,
    `<meta property="og:description" content="${description}">`,
    "Open Graph description",
  );
  html = replaceRequired(
    html,
    /<meta property="og:url" content="[^"]*">/,
    `<meta property="og:url" content="${canonical}">`,
    "Open Graph URL",
  );
  html = replaceRequired(
    html,
    /<meta name="twitter:title" content="[^"]*">/,
    `<meta name="twitter:title" content="${title}">`,
    "Twitter title",
  );
  html = replaceRequired(
    html,
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta name="twitter:description" content="${description}">`,
    "Twitter description",
  );
  html = replaceRequired(
    html,
    /<div id="root"><\/div>/,
    `<div id="root">${renderFallback(page)}</div>`,
    "React root",
  );

  return html;
}

for (const page of pages) {
  const outputPath = join(outputDirectory, page.route.slice(1), "index.html");
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, renderPage(page));
}
