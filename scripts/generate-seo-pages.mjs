import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const outputDirectory = join(process.cwd(), "dist");
const template = readFileSync(join(outputDirectory, "index.html"), "utf8");
const routes = JSON.parse(readFileSync(join(process.cwd(), "routes.json"), "utf8"));
const baseUrl = "https://saudexglobal.com";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
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
    html = html.replace(/<link rel="preload" as="font" type="font\/otf" href="[^"]+" crossorigin>\s*/g, "");
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
  if (page.noIndex) {
    html = replaceRequired(
      html,
      /<meta name="robots" content="[^"]*"\s*\/>/,
      '<meta name="robots" content="noindex, nofollow" />',
      "robots meta",
    );
  }
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

  return html;
}

for (const route of routes) {
  const routePath = route.path === "/" ? "/" : `${route.path}/`;
  const page = { ...route, route: routePath };
  const outputPath = join(outputDirectory, route.path.slice(1), "index.html");
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, renderPage(page));
}

writeFileSync(
  join(outputDirectory, "404.html"),
  `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>Page not found | SAUDEX GLOBAL</title>
</head>
<body style="margin:0;background:#f1f0ea;color:#031926;font:16px/1.6 Arial,sans-serif">
  <main style="max-width:42rem;margin:15vh auto;padding:2rem">
    <p style="letter-spacing:.2em;text-transform:uppercase">SAUDEX GLOBAL</p>
    <h1>Page not found</h1>
    <p>The page may have moved or the address may be incorrect.</p>
    <a href="/">Return to the homepage</a>
  </main>
</body>
</html>
`,
);
