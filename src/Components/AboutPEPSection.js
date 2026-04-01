import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import stoliceMob from "../assets/images/PEP-naslovna-mob.jpg"
import stoliceDesktop from "../assets/images/PEP-naslovna.jpg"

// Wraps each line in overflow-hidden so text slides up into view
const MaskLine = ({ children, delay, isInView, className = '' }) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      initial={{ y: '105%' }}
      animate={isInView ? { y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </motion.div>
  </div>
)

const AboutPEPSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })

  return (
    <section ref={ref} className='relative flex flex-col h-[100vh] font-main w-full overflow-hidden'>

      {/* Background: scales in + blur lifts on scroll into view */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.08, filter: 'blur(8px)' }}
        animate={isInView ? { scale: 1, filter: 'blur(0px)' } : {}}
        transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <picture>
          <source media="(max-width: 1023px)" srcSet={stoliceMob} />
          <img
            src={stoliceDesktop}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </picture>
      </motion.div>

      <div className='flex flex-col my-auto'>

        {/* Headline — split into two masked lines */}
        <div className='flex flex-col w-full px-8 pb-20 mx-auto lg:px-20'>
          <h1 className='text-3xl font-extrabold leading-snug text-white md:text-7xl text-balance'>
            <MaskLine delay={0.3} isInView={isInView}>
              Prva studentska konferencija u
            </MaskLine>
            <MaskLine delay={0.44} isInView={isInView}>
              <u className='roza'><span className='roza'>Dubrovniku</span></u> koja okuplja medijske i komunikacijske profesionalce.
            </MaskLine>
          </h1>
        </div>

        <div className='px-8 pb-5 lg:px-20'>
          <MaskLine delay={0.58} isInView={isInView}>
            <p className='text-xl font-semibold text-white md:text-3xl'>
              <span className='roza'>PR | novinarstvo | iskustvo | PRiče</span>
            </p>
          </MaskLine>
        </div>

        <div className='px-8 pb-5 lg:px-20'>
          <MaskLine delay={0.70} isInView={isInView}>
            <p className='text-xl font-extrabold text-white md:text-3xl'>
              <span className='roza'>16. i 17. TRAVNJA 2026.</span>
            </p>
          </MaskLine>
        </div>

        <div className='px-8 pb-5 lg:px-20'>
          <MaskLine delay={0.82} isInView={isInView}>
            <p className='text-xl font-extrabold text-white md:text-3xl'>
              <span className='roza'>Sveučilišni kampus, ulica branitelja Dubrovnika 41, Dubrovnik</span>
            </p>
          </MaskLine>
        </div>

      </div>
    </section>
  )
}

export default AboutPEPSection
