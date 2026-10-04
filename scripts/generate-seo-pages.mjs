import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const outputDirectory = join(process.cwd(), "dist");
const template = readFileSync(join(outputDirectory, "index.html"), "utf8");
const baseUrl = "https://saudexglobal.com";

const pages = [
  {
    route: "/",
    title: "Global Logistics for Businesses | SAUDEX GLOBAL",
    description:
      "SAUDEX GLOBAL helps businesses move goods worldwide with freight, customs, warehousing, and supply chain logistics.",
    heading: "Global logistics solutions for businesses",
    subheading: "Freight and supply chain help for your business",
    paragraphs: [
      "SAUDEX GLOBAL helps firms move goods around the world. We plan each trip with care. Our team can arrange air, sea, and land freight. We also help with import, export, customs, storage, and delivery. We work with you to choose a route that fits your goods, timing, and budget. You can ask us about one shipment or regular trips.",
      "Good shipping starts with a clear plan. We can help set pick-up times and share key details with each team. We can also help with forms for trade and customs. Our team can track key steps and share updates as goods move. This helps you know what is next and plan for each delivery.",
      "Some firms need fast trips. Others need a safe place to store stock. We can help link freight with storage and final drop-off. This can cut down on extra calls and hand-offs. It can also help teams keep stock in the right place. Tell us what you ship and where it needs to go.",
      "We work with firms in retail, food, farm goods, hotels, and online sales. Each type of goods needs a plan that fits. Some goods need care with heat or cold. Some need more time at a port or store. We can talk through these needs with you before a trip starts.",
      "Our site has more detail on each service and the types of firms we help. You can read about freight, customs, storage, and supply chain help. If you are not sure where to start, send us a note. Share the start point, end point, type of goods, and date. Our team can help with the next step.",
    ],
  },
  {
    route: "/about-us/",
    title: "About SAUDEX GLOBAL: Our Company",
    description:
      "Learn about SAUDEX GLOBAL, a logistics and supply chain partner connecting businesses with reliable global trade.",
    heading: "About SAUDEX GLOBAL",
    subheading: "A practical partner for moving goods",
    paragraphs: [
      "SAUDEX GLOBAL helps firms move goods from one place to the next. We work with shops, makers, and trade teams. Our work can include freight, customs, storage, and delivery. We aim to make each step clear. We listen to what each firm needs, then help plan a path for its goods.",
      "Each load is different. The type of goods, the route, and the due date all matter. Some loads need a cool place. Some need a fast trip. Other loads need forms for trade across borders. We talk through these points with you. Then we can help plan the right mix of services.",
      "Our team can help with a single load or with trips that take place each week. We can work with air, sea, and land routes. We can also help link the trip with customs, storage, and drop-off. This can make it easier to keep each team up to date and know what to do next.",
      "We help firms in retail, food, farm goods, hotels, and online sales. Each field has its own needs. A shop may need stock on time. A food firm may need care with heat or cold. An online shop may need quick pick and pack. We shape our work around the goods and the end user.",
      "We value clear talk, sound plans, and good service. Our team can share key steps and help solve issues as they arise. We want firms to know who is doing each task and when goods may arrive. As your trade grows, we can review routes and services with you.",
      "Read about our services and the fields we serve to learn more. You can also contact us to talk about your plans. Tell us what you ship, where it must go, and when it is due. We will use these facts to guide the next steps.",
    ],
  },
  {
    route: "/industries/",
    title: "Industry Logistics Solutions | SAUDEX GLOBAL",
    description:
      "Explore tailored logistics for retail, FMCG, e-commerce, food, hospitality, agriculture, and cold-chain businesses.",
    heading: "Logistics solutions across diverse sectors",
    subheading: "Logistics for the needs of each sector",
    paragraphs: [
      "Each field has its own shipping needs. SAUDEX GLOBAL helps firms in shops, food, hotels, farms, and online sales. We can help move goods by air, sea, or land. We can also help with customs, storage, and drop-off. We shape each plan around the goods, route, and due date.",
      "Shops need stock to reach the right place on time. A steady flow can help staff fill shelves and serve buyers. Online shops may need fast pick and pack. They may also need help with goods sent back by buyers. We can plan these steps with the shop and its supply team.",
      "Food and drink need care as they move. Some goods must stay cool or cold. Hotels and food shops may need set drop-off times. Farm goods can need a bulk load and a fit way to move it. We talk with each firm to learn what the goods need on the road.",
      "FMCG firms often move goods on a set plan. They may need many drops in one area. Retail firms may need stock sent to more than one shop. We can help plan the route and timing. We can also help link the trip to a store or a place to hold stock.",
      "A good plan looks at the full trip. It starts when goods are ready to leave. It covers the route, any forms, and the place where goods will wait. It ends when the load gets to the right team. Clear steps can help each firm know what to expect.",
      "Our team can help line up the dates, drop-off times, and care needed for a load. We can share key facts with the people who handle each step. This helps keep the trip on track. It can also help teams act fast when a plan needs to change.",
      "Use the links on this page to learn about each field. If you have a special load or route, contact us. Tell us what the goods are, where they start, and where they must go. We can talk about a plan that fits your work.",
    ],
  },
  {
    route: "/contact/",
    title: "Contact SAUDEX GLOBAL Logistics Support",
    description:
      "Contact SAUDEX GLOBAL for freight, warehousing, customs, and supply chain enquiries. Our team is ready to help.",
    heading: "Contact SAUDEX GLOBAL",
    subheading: "Talk with our logistics team",
    paragraphs: [
      "Contact SAUDEX GLOBAL to talk about freight, customs, storage, or delivery. Our team can help you find the right next step. Tell us what you need to move and where it must go. Add the date if you have one. This helps us learn about your plans.",
      "We can talk about air, sea, and land freight. We can also help with import, export, customs forms, and storage. If you need goods moved on a set plan, let us know. If the goods need care with heat or cold, share that too. Each detail can help us plan.",
      "You can use the form on this page to send a note. You can also email our team. For a quick start, share the start point, end point, type of goods, and due date. If you have a question, write it in the note box. We will read it and get back to you.",
      "Some firms need help with one trip. Others need help each week or month. Tell us how often goods move and who will get them. You can also tell us if you need a place to hold stock. Our team can then look at the route and the services that may fit.",
      "If you do not have all the facts yet, that is fine. Send what you know now. We can ask more questions as we talk. We want to learn what matters to your firm and help you plan the move. Our team is here to make the first step easy.",
      "We also welcome questions about our services and the fields we help. If you want to work with us as a partner, tell us about your firm and your idea. We will send your note to the right team and share what to do next.",
    ],
  },
  {
    route: "/services/",
    title: "Logistics Services for Business | SAUDEX GLOBAL",
    description:
      "Explore freight, customs, import-export, distribution, warehousing, and supply chain services from SAUDEX GLOBAL.",
    heading: "Global trading and freight forwarding solutions",
    subheading: "Services to help move and store your goods",
    paragraphs: [
      "SAUDEX GLOBAL helps firms move goods from a supplier to a buyer. Our services can cover trade, freight, customs, storage, and delivery. You can use one service or link a few together. We work with you to plan the trip from start to end. We can help with one load or many.",
      "Freight can move by air, sea, or land. The best way can depend on the goods, the route, and the due date. We can talk through these choices with you. Our team can also help set pick-up times and share key trip facts with the people who handle the load.",
      "Import and export work may need forms and clear details about the goods. Customs steps can vary by place. Our team can help you prepare and share the facts needed for a trade move. Good planning can help avoid delays and help each team know what to do.",
      "Warehousing gives goods a place to stay before the next trip. This can help when stock must wait for an order or a store. Distribution can then take goods to shops, buyers, or other sites. We can help link storage with freight and drop-off times.",
      "Some firms send goods now and then. Others need a steady flow each week. We can plan around your trade and the needs of your buyers. We look at where goods start, where they must go, how they should be handled, and when they are due.",
      "Our service list has more detail on customs, freight, storage, and other help. Read the pages to learn what each service can do. If you are not sure which one fits, contact us. Tell us about the load and the route. We can help you choose a clear next step.",
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
    <h2>${escapeHtml(page.subheading)}</h2>
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

  if (page.route !== "/") {
    html = html.replace(/<link rel="preload" as="image" href="\/images\/indus\.webp" fetchpriority="high"\s*\/>\s*/, "");
  }
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
