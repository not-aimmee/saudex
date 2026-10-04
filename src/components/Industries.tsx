import { motion } from 'motion/react'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { SEO } from './SEO';
import { industriesMeta } from '../pages/data/seoMeta';

/* ─── FlowingMenu (exact ReactBits implementation) ───────────── */

interface MenuItem {
  link: string
  text: string
  image: string
}

interface FlowingMenuProps {
  items?: MenuItem[]
  speed?: number
  textColor?: string
  bgColor?: string
  marqueeBgColor?: string
  marqueeTextColor?: string
  borderColor?: string
}

function FlowingMenu({
  items = [],
  speed = 15,
  textColor = '#fff',
  bgColor = '#120F17',
  marqueeBgColor = '#fff',
  marqueeTextColor = '#120F17',
  borderColor = '#fff',
}: FlowingMenuProps) {
  return (
    <div style={{ backgroundColor: bgColor, width: '100%', height: '100%', overflow: 'hidden' }}>
      <nav style={{ display: 'flex', flexDirection: 'column', height: '100%', margin: 0, padding: 0 }}>
        {items.map((item, idx) => (
          <FlowingMenuItem
            key={idx}
            {...item}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
            isFirst={idx === 0}
          />
        ))}
      </nav>
    </div>
  )
}

function FlowingMenuItem({
  link,
  text,
  image,
  speed,
  textColor,
  marqueeBgColor,
  marqueeTextColor,
  borderColor,
  isFirst,
}: MenuItem & {
  speed: number
  textColor: string
  marqueeBgColor: string
  marqueeTextColor: string
  borderColor: string
  isFirst: boolean
}) {
  const itemRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const marqueeInnerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)
  const [repetitions, setRepetitions] = useState(4)

  const animationDefaults = { duration: 0.6, ease: 'expo' }

  const distMetric = (x: number, y: number, x2: number, y2: number) => {
    const xDiff = x - x2
    const yDiff = y - y2
    return xDiff * xDiff + yDiff * yDiff
  }

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0)
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height)
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom'
  }

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return
      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee__part') as HTMLElement
      if (!marqueeContent) return
      const contentWidth = marqueeContent.offsetWidth
      const viewportWidth = window.innerWidth
      const needed = Math.ceil(viewportWidth / contentWidth) + 2
      setRepetitions(Math.max(4, needed))
    }
    calculateRepetitions()
    window.addEventListener('resize', calculateRepetitions)
    return () => window.removeEventListener('resize', calculateRepetitions)
  }, [text, image])

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return
      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee__part') as HTMLElement
      if (!marqueeContent) return
      const contentWidth = marqueeContent.offsetWidth
      if (contentWidth === 0) return
      if (animationRef.current) animationRef.current.kill()
      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: 'none',
        repeat: -1,
      })
    }
    const timer = setTimeout(setupMarquee, 50)
    return () => {
      clearTimeout(timer)
      if (animationRef.current) animationRef.current.kill()
    }
  }, [text, image, repetitions, speed])

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    const rect = itemRef.current.getBoundingClientRect()
    const x = ev.clientX - rect.left
    const y = ev.clientY - rect.top
    const edge = findClosestEdge(x, y, rect.width, rect.height)
    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0)
  }

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    const rect = itemRef.current.getBoundingClientRect()
    const x = ev.clientX - rect.left
    const y = ev.clientY - rect.top
    const edge = findClosestEdge(x, y, rect.width, rect.height)
    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
  }

  return (
    <div
      ref={itemRef}
      style={{
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        borderTop: isFirst ? 'none' : `1px solid ${borderColor}`,
      }}
    >
      <a
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          position: 'relative',
          cursor: 'pointer',
          textTransform: 'uppercase',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          fontWeight: 600,
          fontSize: '4vh',
          color: textColor,
        }}
      >
        {text}
      </a>

      <div
        ref={marqueeRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          transform: 'translate3d(0, 101%, 0)',
          backgroundColor: marqueeBgColor,
        }}
      >
        <div style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
          <div
            ref={marqueeInnerRef}
            aria-hidden="true"
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              height: '100%',
              width: 'fit-content',
              willChange: 'transform',
            }}
          >
            {[...Array(repetitions)].map((_, idx) => (
              <div
                className="marquee__part"
                key={idx}
                style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
              >
                <span
                  style={{
                    whiteSpace: 'nowrap',
                    textTransform: 'uppercase',
                    fontWeight: 400,
                    fontSize: '4vh',
                    lineHeight: 1,
                    padding: '0 1vw',
                    color: marqueeTextColor,
                  }}
                >
                  {text}
                </span>
                <div
  role="img"
  aria-label={text}
  style={{
    width: 200,
    height: '7vh',
    margin: '2em 2vw',
    padding: '1em 0',
    borderRadius: 50,
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    flexShrink: 0,
  }}
/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Page ────────────────────────────────────────────────────── */

const demoItems: MenuItem[] = [
  { link: '/industries/fmcg-industry/', text: 'FMCG', image: '/images/in32.webp' },
  { link: '/industries/horeca/', text: 'HoReCa', image: '/images/horeca.webp' },
  { link: '/industries/e-commerce/', text: 'E-Commerce', image: '/images/s33.webp' },
  { link: '/industries/food-beverages/', text: 'Food & Beverages', image:'/images/i1.webp'},
  { link: '/industries/retail/', text: 'Retail & Wholesale ', image: '/images/retail.webp' },
  { link: '/industries/agriculture/', text: 'Agri-Commodities', image: '/images/i37.webp' },
]

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries | SAUDEX GLOBAL"
        description={industriesMeta.description}
        keywords={industriesMeta.keywords}
        canonical={industriesMeta.canonical}
        ogImage={industriesMeta.ogImage}
      />
      <section id="industries" className="py-9 bg-[#77aca2]/50 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase text-[#254d58] text-center text-lg md:text-xl font-generalsans font-medium tracking-[0.1em] md:tracking-[0.4em] mb-6">
            Industries We Serve
          </p>
          <h1 className="font-sentient font-regular"
  style={{
    fontSize: 'clamp(2.5rem, 3.75vw, 4.5rem)',
    lineHeight: 1.35,
    letterSpacing: '0.05em',
    color: '#031926',
  }}>
            Logistics Solutions across diverse sectors
          </h1>
          <p className="mt-12 text-[#031926]/70 text-center text-lg md:text-xl font-generalsans font-regular mb-6">
            Every industry has different shipping challenges. Whether you're in retail, e-commerce,
            cold chain, or food & beverage, we provide customized logistics solutions designed
            around your needs.
          </p>
          <p className="mx-auto max-w-5xl text-[#031926]/70 text-center text-base md:text-lg font-generalsans font-regular mb-6">
            Retail and wholesale operations need dependable replenishment, store delivery, and flexible handling for mixed loads. E-commerce businesses rely on coordinated fulfilment, accurate order handling, and returns support, while FMCG distribution depends on frequent deliveries and consistent product availability.
          </p>
          <p className="mx-auto max-w-5xl text-[#031926]/70 text-center text-base md:text-lg font-generalsans font-regular mb-6">
            Food, beverage, and hospitality supply chains require careful scheduling and product handling. Cold-chain shipments need temperature-aware transport and storage, while agricultural commodities call for suitable bulk movement and clear coordination from origin to destination. Our solutions are shaped around each sector's cargo, route, and delivery requirements.
          </p>
          <p className="mx-auto max-w-5xl text-[#031926]/70 text-center text-base md:text-lg font-generalsans font-regular mb-6">
            We work with businesses to coordinate sourcing, transport, storage, and delivery as one connected flow. Whether products need frequent replenishment, careful temperature control, or movement across borders, our team helps plan around the operational details that matter to each industry.
          </p>
          <p className="mx-auto max-w-5xl text-[#031926]/70 text-center text-base md:text-lg font-generalsans font-regular mb-6">
            This includes aligning shipment schedules with receiving windows, arranging appropriate handling, and keeping suppliers and delivery teams informed as goods move through the supply chain.
          </p>
        </motion.div>
      </div>

      <div className="font-sentient font-light" style={{ height: '400px', position: 'relative' }}>
        <FlowingMenu
          items={demoItems}
          speed={15}
          textColor="#031926"
          bgColor="#bbd6d1"
          marqueeBgColor="#f4e9cd"
          marqueeTextColor="#254d58"
          borderColor="#bbd6d1"
        />
      </div>

    </section>
    </>
  )
}
