import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import sharp from "sharp";

const images = ["in32", "horeca", "s33", "i1", "retail", "i37"];
const sourceDirectory = join(process.cwd(), "public", "images");
const outputDirectory = join(sourceDirectory, "marquee");

await mkdir(outputDirectory, { recursive: true });

await Promise.all(
  images.map(async (name) => {
    const source = join(sourceDirectory, `${name}.webp`);
    const output = join(outputDirectory, `${name}-marquee.webp`);

    await sharp(source)
      .resize(400, 180, { fit: "cover", position: "attention" })
      .webp({ quality: 72, effort: 5 })
      .toFile(output);

    console.log(`Optimized ${name}.webp for marquee use.`);
  }),
);
