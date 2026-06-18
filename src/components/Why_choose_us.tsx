import { motion } from 'motion/react';
import { Network, Smartphone, Shield, Users, TrendingUp, BaggageClaimIcon } from 'lucide-react';
import { TEXT } from '../constants';
import { SEO } from './SEO';
import { whyChooseUsMeta } from '../pages/data/seoMeta';
import BorderGlow from '../../components/borderglow'
export default function WhyChooseUs() {

  const reasons = [
    {
      icon: Network,
      title: TEXT.whyUs.network.title,
      description: TEXT.whyUs.network.description
    },
    {
      icon: Smartphone,
      title: TEXT.whyUs.technology.title,
      description: TEXT.whyUs.technology.description
    },
    {
      icon: Shield,
      title: TEXT.whyUs.compliance.title,
      description: TEXT.whyUs.compliance.description
    },
    {
      icon: Users,
      title: TEXT.whyUs.customerCentric.title,
      description: TEXT.whyUs.customerCentric.description
    },
    {
      icon: TrendingUp,
      title: TEXT.whyUs.scalable.title,
      description: TEXT.whyUs.scalable.description
    },
    {
      icon: BaggageClaimIcon,
      title: TEXT.whyUs.industryexpertise.title,
      description: TEXT.whyUs.industryexpertise.description
    }
  ];

  return (
    <>
    <SEO
        
        description={whyChooseUsMeta.description}
        keywords={whyChooseUsMeta.keywords}
        canonical={whyChooseUsMeta.canonical}
        ogImage={whyChooseUsMeta.ogImage}
      />
    <section id="why-us" className="py-24 bg-[#050F0F] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
            
          <h2 className="text-4xl md:text-5xl font-clash font-semibold text-[#F7FAF8] mb-4">
            {TEXT.whyUs.title}
          </h2>
          <p className="text-xl text-gray-300 font-archivo font-regular max-w-3xl mx-auto">
            {TEXT.whyUs.subtitle}
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <BorderGlow
      edgeSensitivity={30}
      glowColor="40 80 80"
      backgroundColor="#050F0F"
      borderRadius={28}
      glowRadius={40}
      glowIntensity={1}
      coneSpread={25}
      animated={false}
      colors={['#14543A', '#58C28A', '#F7FAF8']}
      className="h-full"  // important — fills the motion.div
    >
      <div className="backdrop-blur-sm p-8 rounded-full transition-all group h-full">
        <div className="mb-4">
          <div className="w-14 h-14 bg-transparent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <reason.icon className="w-7 h-7 text-[#F7FAF8]" />
          </div>
        </div>
        <h3 className="text-2xl text-[#F7FAF8] font-archivo font-medium mb-3">
          {reason.title}
        </h3>
        <p className="text-gray-300 tex-xl font-archivo font-regular leading-relaxed">
          {reason.description}
        </p>
      </div>
    </BorderGlow>
  </motion.div>
))}
          
        </div>
      </div>
      
    </section>
    </>
  );
}
