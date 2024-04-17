import {React, useRef} from 'react'
import { motion, useInView } from 'framer-motion'

const PEPThemes = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
  return (
    <>
        <section className='grid h-[680px] lg:h-[100vh] lg:grid-cols-3 lg:grid-rows-3 mx-auto auto-cols-fr overflow-hidden'>
            <div className='max-sm:hidden'></div>
            <motion.div 
            className='overflow-hidden'>
                <h1 className='text-white text-6xl lg:text-7xl font-bold text-center  content-center lg:pt-24'>PEP teme:</h1>
            </motion.div>
            <div className='max-sm:hidden'></div>
            <motion.p 
            className='text-3xl span font-semibold pl-5 lg:pl-36 lg:text-left text-center text-opacity-15'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
            >Odnosi s javnošću</motion.p>
            <motion.p 
            className='text-3xl roza font-bold align-text-top lg:text-center text-center lg:content-center lg:pb-10 text-opacity-45'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
            }}
            >Event menadžment</motion.p>
            <motion.p 
            className='text-3xl span font-semibold lg:pr-16 align-text-top pl-8 lg:pb-52 text-center'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
            }}
            >Novinarstvo</motion.p>
            <motion.p 
            className='text-3xl text-white font-extralight pl-16 text-left lg:pb-52'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
            }}
            >Društvene mreže</motion.p>
            <motion.p 
            className='text-3xl lg:text-5xl span font-normal pl-16 text-center lg:content-center lg:pb-32 text-opacity-55'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
            }}
            >Poduzetništvo</motion.p>
            <motion.p 
            className='text-3xl roza font-bold text-center lg:content-center'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
            }}
            >Politika i PR</motion.p>
        </section>
    </>
  )
}

export default PEPThemes
