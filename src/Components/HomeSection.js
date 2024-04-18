import {React, useRef} from 'react'
import pepLogo from "../assets/images/PEPLogo3.png"
import { motion, useInView } from 'framer-motion'

const HomeSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
  return (
    <>
        <section className='bg-stolice-BG-Mob lg:bg-stolice-BG h-[100vh] overflow-hidden bg-cover flex flex-col items-center gap-y-6'>
            <motion.div 
            className='mx-auto h-[33%] content-center'
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{opacity:1, scale: 1}}
            viewport={{once: true}}
            transition={{
              duration: 0.2,
              ease: [0, 0.80, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
            >
                <img className='h-[200px] w-[200px]' src={pepLogo} alt="" />
            </motion.div>
            <motion.div 
            className='h-[33%] content-center'
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1, type: "tween" }
            }} 
            >
                <h1 className='sporka text-4xl font-bold md:text-7xl lg:text-8xl mx-auto text-center'>Iskustvo i znanje <br /> iz PRve ruke.</h1>    
            </motion.div>
            <motion.div 
            className='h-[33%] content-center'
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 0.9, type: "tween" }
            }} 
            >
                <p className='text-xl font-thin text-white italic text-center'>25. - 26. travnja 2024. <br /> Sveučilišni kampus u Dubrovniku</p>
            </motion.div>
        </section>
    </>
  )
}

export default HomeSection
