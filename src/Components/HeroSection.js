import React from 'react'
import testSvg from "../assets/images/test.svg"
import pepLogo from "../assets/images/PEPLogo2.png"
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
    hidden: { opacity: 0, scale: 0.3 },
    show: { opacity: 1, scale: 1,
      transition:{
        duration: 0.2,
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
        className='grid lg:grid-rows-3 lg:grid-cols-3 place-items-center mx-auto h-[100dvh] w-full overflow-hidden'
        variants={container}
        initial="hidden"
        animate="show"
        >
            {/* <div className='absolute w-full h-full -z-20'>
                <img src={testSvg} className='mx-[400px] rotate-90 h-[950px]' alt="" />
            </div> */}
            {/* <motion.p variants={item} className='font-semibold text-3xl md:text-5xl roza text-opacity-40'>PR</motion.p>
            <motion.p variants={item} className='font-semibold text-3xl md:text-5xl span text-opacity-90'>NOVINARSTVO</motion.p>
            <motion.p variants={item} className='font-semibold text-2xl md:text-4xl roza text-opacity-10'>KARIJERNI PUT</motion.p>
            <motion.p variants={item} className='font-semibold text-3xl md:text-4xl span'>POLITIKA I PR</motion.p> */}
            <div className='max-sm:hidden'></div>
            <div className='max-sm:hidden'></div> 
            <div className='max-sm:hidden'></div>
            <div className='max-sm:hidden'></div>
            <motion.img 
            className="z-50" src={pepLogo}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.1,
              ease: "easeIn",
              duration: 1.5,
              type: "spring"
            }} 
            ></motion.img>
            {/* <motion.p variants={item} className='font-semibold text-3xl md:text-4xl roza text-opacity-25'>DRUŠTVENE MREŽE</motion.p>
            <motion.p variants={item} className='font-semibold text-3xl md:text-4xl span text-opacity-60 text-center'>EVENT MENADŽMENT</motion.p>
            <motion.p variants={item} className='font-semibold text-3xl md:text-4xl roza text-opacity-5'>NETWORKING</motion.p>
            <motion.p variants={item} className='font-semibold text-3xl md:text-4xl span text-center text-opacity-10'>JAVNI NASTUP</motion.p> */}
        </motion.section>
    </>
  )
}

export default HeroSection
