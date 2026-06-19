import { motion } from 'motion/react'
import { SEO } from './SEO';
import { industriesMeta } from '../pages/data/seoMeta';
import FlowingMenu from '../../components/flowing_menu'

export default function Industries (){
   const demoItems = [
  { link: '/industries/food_beverages', text: 'Food & Beverages', image: '/images/i1.webp' },
  { link: '/industries/horeca', text: 'HoReCa', image: '/images/horeca.webp' },
  { link: '/industries/FMCG', text: 'FMCG', image: '/images/in32.webp' },
  { link: '/industries/e_commerce', text: 'E-Commerce', image: '/images/s33.webp' },
  { link: '/industries/cold_chain', text: 'Cold Chain', image: '/images/in3.webp' },
  { link: '/industries/retail', text: 'Retail & Wholesale ', image: '/images/retail.webp' }

];



    return (
      <>
      <SEO

        description={industriesMeta.description}
        keywords={industriesMeta.keywords}
        canonical={industriesMeta.canonical}
        ogImage={industriesMeta.ogImage}
      />
        <section id="industries" className="py-24 bg-[#050F0F] relative overflow-hidden">
            

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
              initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
            <p className="uppercase 
    text-[#228B5A]
    font-archivo
    text-center
    text-xl
    font-medium
    tracking-[0.4em]
    mb-6">
                        Industries We Serve 
                      </p>
                      <h2 className="text-white
    font-clash
    text-center
    text-4xl
    font-bold">
                       Logistics solutions across diverse sectors
                      </h2>
                      <p className="
                      mt-12 
    text-[#F7FAF8]/60
    font-archivo
    text-center
    text-xl
    font-medium
    mb-6">
          Every industry has different shipping challenges. Whether you're in retail, e-commerce, cold chain, or food & beverage, we provide customized logistics solutions designed around your needs.
                      </p>

              </motion.div>
            </div>
            <div style={{ height: '400px', position: 'relative' }} >
              
                <FlowingMenu items={demoItems}
  speed={15}
  textColor="#F7FAF8"
  bgColor="#050F0F"
  marqueeBgColor="#58C28A"
  marqueeTextColor="#120F17"
  borderColor="#050F0F"
/>
            </div>

        </section>
    </>
    );
}