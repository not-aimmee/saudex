import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const distDirectory = join(process.cwd(), "dist");
const assetsDirectory = join(distDirectory, "assets");
const stylesheetNames = (await readdir(assetsDirectory)).filter((name) => name.endsWith(".css"));
const stylesheetContents = await Promise.all(
  stylesheetNames.map((name) => readFile(join(assetsDirectory, name), "utf8")),
);
const fontFaces = stylesheetContents.flatMap(
  (stylesheet) => stylesheet.match(/@font-face\{[^}]+\}/g) ?? [],
);

const requiredFonts = [
  { family: "Sentient", weight: "300" },
  { family: "GeneralSans", weight: "300" },
];
const fontUrls = requiredFonts.map(({ family, weight }) => {
  const fontFace = fontFaces.find(
    (face) => face.includes(`font-family:${family}`) && face.includes(`font-weight:${weight}`),
  );
  const url = fontFace?.match(/url\(([^)]+)\)/)?.[1]?.replace(/^["']|["']$/g, "");
  if (!url) {
    throw new Error(`Unable to find the ${family} ${weight} font URL in the production CSS.`);
  }
  return url;
});

const indexPath = join(distDirectory, "index.html");
const html = await readFile(indexPath, "utf8");
const preloadLinks = fontUrls
  .map((url) => `<link rel="preload" as="font" type="font/otf" href="${url}" crossorigin>`)
  .join("\n");

if (!html.includes("</head>")) {
  throw new Error("Unable to inject critical font preloads: dist/index.html has no closing head tag.");
}

await writeFile(indexPath, html.replace("</head>", `${preloadLinks}\n</head>`), "utf8");
