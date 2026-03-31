import {React, useRef} from 'react'
import { motion, useInView } from 'framer-motion'
import SectionDivider from './SectionDivider'

const PEPThemes = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
  return (
    <>
        <SectionDivider label="PEP 2026" labelPosition="left" className="px-4" />
        <section className='grid h-[600px] lg:h-[100vh] lg:grid-cols-3 lg:grid-rows-3 mx-auto auto-cols-fr overflow-hidden py-10'>
            <div className='max-sm:hidden'></div>
            <motion.div
            className='overflow-hidden'>
                <h1 
                className='content-center text-5xl font-bold text-center text-white md:text-6xl xl:text-7xl lg:mt-8'
                >PEP teme:</h1>
            </motion.div>
            <div className='max-sm:hidden'></div>
            <motion.p 
            className='pl-5 text-3xl font-semibold text-center max-sm:pt-8 xl:text-6xl span lg:ml-24 lg:text-left text-opacity-15'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
            }}
            >Odnosi s javnošću</motion.p>
            <motion.p 
            className='text-3xl font-bold text-center align-text-top xl:text-6xl roza lg:text-center lg:content-center lg:pb-10 text-opacity-45'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
            >Event menadžment</motion.p>
            <motion.p 
            className='pl-8 text-3xl font-semibold text-center align-text-top xl:text-6xl span lg:pr-16 lg:pb-52'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}
            >Novinarstvo</motion.p>
            <motion.p 
            className='ml-16 text-3xl text-center text-white max-sm:text-left xl:text-6xl font-extralight lg:mb-44'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
            }}
            >Karijerni put</motion.p>
            <motion.p 
            className='pl-16 text-3xl font-normal text-center xl:text-6xl span lg:content-center lg:pb-32 text-opacity-55'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            >Poduzetništvo</motion.p>
            <motion.p 
            className='pr-20 text-3xl font-bold text-center xl:text-5xl roza lg:content-center'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
            }}
            >Self branding</motion.p>
            <div className='max-sm:hidden'></div>
            <motion.p 
            className='text-3xl font-semibold text-center align-text-top xl:text-6xl span lg:pr-16 lg:pb-52'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}
            >Javni nastup</motion.p>
            <div className='max-sm:hidden'></div>
        </section>
        <SectionDivider className="px-4 mt-8" labelPosition='right' label="Odnosi s javnošću"/>
    </>
  )
}

export default PEPThemes
