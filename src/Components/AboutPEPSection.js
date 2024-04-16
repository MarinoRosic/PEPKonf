import {React, useRef} from 'react'
import { motion, useInView } from 'framer-motion'

const AboutPEPSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
  return (
    <>
        <section className='bg-about-Mobitel bg-cover bg-center bg-no-repeat lg:bg-about-BG flex flex-col h-[100vh] font-main w-full overflow-hidden'>
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
                    <h1 className='overflow-hidden text-3xl font-extrabold leading-normal text-white md:text-7xl text-balance'>
                        Prva  konferencija u <br /> <u className='span'><span className='span'>Dubrovniku</span></u> koja okuplja medijske i komunikacijske profesionalce.
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
                    <p className='text-3xl font-semibold text-white'>
                     <span className='span'>PR </span> | novinarstvo | iskustvo | <span className='span'>PR</span>iče
                    </p>
                </motion.div>
                <motion.div 
                className='px-8 pb-5 lg:px-20'ref={ref}
                style={{
                    transform: isInView ? "none" : "translateX(-100%)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                    <p className='text-3xl font-extrabold text-white'><span className='span'>TRAVANJ</span> 25.-26. 2024 </p>
                </motion.div>
                <motion.div 
                className='px-8 pb-5 lg:px-20'
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateX(-100%)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                }}>
                    <p className='text-3xl font-extrabold text-white'>• Sveučilišni kampus</p>
                </motion.div>
            </div>
        </section>
    </>
  )
}

export default AboutPEPSection
