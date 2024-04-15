import React from 'react'
// import testSvg from "../assets/images/test.svg"
import pepLogo from "../assets/images/PEPLogo.png"
import { motion } from "framer-motion"

const HeroSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, scale: 0.1 },
    show: { opacity: 1, scale: 1,
      transition:{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 6,
          stiffness: 90,
          restDelta: 0.001
        }
      } }
  }
  
  return (
    <>
        <motion.section 
        className='grid lg:grid-rows-3 lg:grid-cols-3 place-items-center mx-auto h-[100vh] w-full overflow-hidden'
        variants={container}
        initial="hidden"
        animate="show"
        >
            {/* <div className='absolute w-full h-full -z-20'>
                <img src={testSvg} className='mx-[400px] rotate-90 h-[950px]' alt="" />
            </div> */}
            <motion.p variants={item} className='font-semibold text-4xl md:text-5xl text-[#db9bd5] text-center text-opacity-70'>PR</motion.p>
            <div className='max-sm:hidden'></div>
            <motion.p variants={item} className='font-semibold text-3xl md:text-4xl span text-center'>NOVINARSTVO</motion.p>
            <div className='max-sm:hidden'></div>
            <motion.img 
            className="" src={pepLogo}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 2.2,
              ease: "easeIn",
              duration: 2.2,
              type: "spring"
            }} 
            ></motion.img>
            <div className='max-sm:hidden'></div>
            <motion.p variants={item} className='font-semibold text-3xl md:text-4xl text-[#db9bd5] text-opacity-60 text-center'>EVENT MENADŽMENT</motion.p>
            <div className='max-sm:hidden'></div>
            <motion.p variants={item} className='font-semibold text-3xl md:text-4xl span text-center text-opacity-20'>JAVNI NASTUP</motion.p>
        </motion.section>
    </>
  )
}

export default HeroSection
