import { motion } from 'motion/react';
import { TEXT } from '../constants';
import { SEO } from './SEO';
import { homeMeta } from '../pages/data/seoMeta';
import { defaultSiteMeta } from '../pages/data/seoMeta';
import SplitText from "../../components/splittext";

export default function Hero() {
  return (
    <>
    <SEO
        description={homeMeta.description}
        keywords={homeMeta.keywords}
        canonical={homeMeta.canonical}
        ogImage={homeMeta.ogImage}
      />
    <SEO
        
        description={defaultSiteMeta.description}
        keywords={defaultSiteMeta.keywords}
        canonical={defaultSiteMeta.canonical}
        ogImage={defaultSiteMeta.ogImage}
      />
    <section id="home" className="relative min-h-screen flex items-center">
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
      <div className="relative z-10 w-full px-8 lg:px-20 pt-20">
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
  font-bold
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
          <div className="flex justify-end mr-18">
  <motion.p
    className="
      mt-10
      max-w-2xl
      text-right 
      text-xl
      md:text-2xl
      text-[#F7FAF8]/80
      font-archivo
      font-medium
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
