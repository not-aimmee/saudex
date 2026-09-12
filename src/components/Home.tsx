import { motion } from 'motion/react';
import { TEXT } from '../constants';
import { SEO } from './SEO';
import { homeMeta } from '../pages/data/seoMeta';
import SplitText from "../../components/splittext";
import { Helmet } from "react-helmet-async";

export default function Hero() {
  return (
    <>
    <Helmet>
      <title>Global Logistics Solutions for Businesses | SAUDEX GLOBAL</title>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.saudexglobal.com/#organization",
              "name": "SAUDEX GLOBAL",
              "url": "https://www.saudexglobal.com/",
              "logo": "https://www.saudexglobal.com/favicon2.png",
              "description": "SAUDEX GLOBAL provides global logistics solutions including freight forwarding, supply chain, warehousing, customs, cold chain, distribution and import-export services across international markets.",
              "areaServed": [
                { "@type": "Place", "name": "Middle East" },
                { "@type": "Place", "name": "Asia" }
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://www.saudexglobal.com/#website",
              "url": "https://www.saudexglobal.com/",
              "name": "SAUDEX GLOBAL",
              "publisher": { "@id": "https://www.saudexglobal.com/#organization" }
            },
            {
              "@type": "WebPage",
              "@id": "https://www.saudexglobal.com/#webpage",
              "url": "https://www.saudexglobal.com/",
              "name": "Global Logistics Solutions for Businesses | SAUDEX GLOBAL",
              "description": "Discover global logistics solutions from SAUDEX GLOBAL, combining reliable freight, supply chain expertise and international operations.",
              "isPartOf": { "@id": "https://www.saudexglobal.com/#website" },
              "about": { "@id": "https://www.saudexglobal.com/#organization" }
            },
            {
              "@type": "Service",
              "@id": "https://www.saudexglobal.com/#global-logistics-solutions",
              "name": "Global Logistics Solutions",
              "serviceType": "Global logistics solutions",
              "provider": { "@id": "https://www.saudexglobal.com/#organization" },
              "url": "https://www.saudexglobal.com/",
              "areaServed": [
                { "@type": "Place", "name": "Middle East" },
                { "@type": "Place", "name": "Asia" }
              ],
              "description": "Reliable global logistics solutions for freight forwarding, supply chain management, warehousing, customs, cold chain, distribution and import-export operations."
            }
          ]
        })}
      </script>
    </Helmet>
    <SEO
      title="Global Logistics Solutions for Businesses | SAUDEX GLOBAL"
      description={homeMeta.description}
      keywords={homeMeta.keywords}
      canonical={homeMeta.canonical}
      ogImage={homeMeta.ogImage}
    />
    <section id="home" className="relative min-h-screen flex lg:items-center ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    poster="/hero-poster.webp"
    className="absolute inset-0 w-full h-full object-cover"
  >
<source
    src="https://res.cloudinary.com/dvdcdj8ye/video/upload/f_auto,q_auto,w_1920,c_limit/v1781262356/14437597_1280_720_30fps_s1qysi.mp4"
    type="video/mp4"
  />
    </video>

  <div className="absolute inset-0 bg-[#050F0F]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-8 lg:px-20 pt-44 md:pt-20">
        <div className="max-w-4xl ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SplitText
  text={TEXT.hero.headline}
  className="
     text-[#F7FAF8]
  font-clash
  font-regular
  text-left
  leading-[1.2]
  pb-2
  tracking-[-0.03em]
  text-[clamp(3rem,8vw,7rem)]
  "
  delay={80}
  duration={0.8}
/>
          </motion.div>
</div>
          <div className="flex justify-end sm:items-centerlg:mr-18">
  <motion.p
    className="
      lg:mt-10
      mt-14
      max-w-2xl
      lg:text-right 
      text-center
      text-xl
      md:text-2xl
      text-[#F7FAF8]/80
      font-archivo
      font-regular
      tracking-wide
    "
  >
    {TEXT.hero.subheadline}
  </motion.p>
</div>
        </div>
    </section>
    </>
  );
}
