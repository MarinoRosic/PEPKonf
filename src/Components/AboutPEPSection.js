import {React, useRef} from 'react'
import { motion, useInView } from 'framer-motion'
import stoliceMob from "../assets/images/PEP-naslovna-mob.jpg"
import stoliceDesktop from "../assets/images/PEP-naslovna.jpg"

const AboutPEPSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
  return (
    <>
        <section className='relative flex flex-col h-[100vh] font-main w-full overflow-hidden'>
          {/* <picture> loads only the right image for the viewport — no wasted bytes.
              As an <img> it gets lazy loading and async decoding, unlike CSS background-image. */}
          <picture>
            <source media="(max-width: 1023px)" srcSet={stoliceMob} />
            <img
              src={stoliceDesktop}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center -z-10"
            />
          </picture>
            <div className='flex flex-col my-auto'>
                <motion.div 
                className='flex flex-col w-full px-8 pb-20 mx-auto lg:px-20'
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateX(-100%)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1)"
                }}
                >
                    <h1 className='overflow-hidden text-3xl font-extrabold leading-snug text-white md:text-7xl text-balance'>
                        Prva studentska konferencija u <br /> <u className='roza'><span className='roza'>Dubrovniku</span></u> koja okuplja medijske i komunikacijske profesionalce.
                    </h1>
                </motion.div>
                <motion.div 
                className='px-8 pb-5 lg:px-20'
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateX(100%)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1)"
                }}>
                    <p className='text-xl font-semibold text-white md:text-3xl'>
                     <span className='roza'>PR | novinarstvo | iskustvo | PRiče</span>
                    </p>
                </motion.div>
                <motion.div 
                className='px-8 pb-5 lg:px-20'ref={ref}
                style={{
                    transform: isInView ? "none" : "translateX(-100%)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                }}>
                    <p className='text-xl font-extrabold text-white md:text-3xl'><span className='roza'>24. i 25. TRAVNJA 2025. </span></p>
                </motion.div>
                <motion.div 
                className='px-8 pb-5 lg:px-20'
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateX(-100%)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
                }}>
                    <p className='text-xl font-extrabold text-white md:text-3xl'><span className='roza'> Sveučilišni kampus, ulica branitelja Dubrovnika 41, Dubrovnik </span></p>
                </motion.div>
            </div>
        </section>
    </>
  )
}

export default AboutPEPSection
