import {React, useRef} from 'react'
import { motion, useInView } from 'framer-motion'

const PEPThemes = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
  return (
    <>
        <section className='grid h-[100vh] lg:grid-cols-3 lg:grid-rows-3 mx-auto auto-cols-fr overflow-hidden'>
            <div className='max-sm:hidden'></div>
            <motion.div 
            className='overflow-hidden'>
                <h1 className='text-white text-5xl lg:text-7xl font-extrabold text-center  content-center lg:pt-32'>PEP teme:</h1>
            </motion.div>
            <div className='max-sm:hidden'></div>
            <motion.p 
            className='text-4xl span font-bold pl-10 lg:pl-20 lg:text-right text-opacity-15'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}
            >Odnosi s javnošću</motion.p>
            <motion.p 
            className='text-4xl text-[#db9bd5] font-bold pl-20 align-text-top lg:text-center lg:content-center lg:pb-10 text-opacity-45'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
            }}
            >Event menadžment</motion.p>
            <motion.p 
            className='text-6xl span font-semibold lg:pl-20 align-text-top pl-8 lg:pb-52'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 1.3s"
            }}
            >Novinarstvo</motion.p>
            <motion.p 
            className='text-5xl text-white font-light pl-16 text-center lg:pb-52'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 2s"
            }}
            >Društvene mreže</motion.p>
            <motion.p 
            className='text-4xl lg:text-6xl span font-bold pl-20 text-center lg:content-center lg:pb-32 text-opacity-55'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 2.5s"
            }}
            >Poduzetništvo</motion.p>
            <motion.p 
            className='text-6xl text-[#db9bd5] font-bold text-center lg:content-center'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 3s"
            }}
            >Politika i PR</motion.p>
        </section>
    </>
  )
}

export default PEPThemes
