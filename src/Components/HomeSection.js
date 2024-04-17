import {React, useRef} from 'react'
import pepLogo from "../assets/images/PEPLogo3.png"
import { motion, useInView } from 'framer-motion'

const HomeSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
  return (
    <>
        <section className='bg-stolice-BG h-[100dvh] overflow-hidden bg-center md:bg-cover flex flex-col items-center gap-y-10'>
            <motion.div 
            className='mx-auto h-[33%] content-center'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
            }}
            >
                <img className='h-[200px] w-[200px]' src={pepLogo} alt="" />
            </motion.div>
            <motion.div 
            className='h-[33%] content-center'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.85, 1) 0.4s"
            }}
            >
                <h1 className='sporka text-5xl md:text-7xl  lg:text-9xl mx-auto text-center'>Iskustvo i znanje <br /> iz PRve ruke.</h1>    
            </motion.div>
            <motion.div 
            className='h-[33%] content-center'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateY(100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.85, 1) 0.7s"
            }}
            >
                <p className='text-2xl font-thin text-white italic text-center'>25. - 26. travnja 2024. <br /> Sveučilišni kampus u Dubrovniku</p>
            </motion.div>
        </section>
    </>
  )
}

export default HomeSection
