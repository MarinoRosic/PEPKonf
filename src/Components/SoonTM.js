import {React } from 'react'
import pepLogo from "../assets/images/PEPLogo3.png"
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebook} from 'react-icons/fa'

const SoonTM = () => {
  return (
    <>
        <section className='flex h-[100vh] flex-col overflow-hidden'>
        <motion.div 
            className='mx-auto h-[30%] content-center'
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{opacity:1, scale: 1}}
            viewport={{once: true}}
            transition={{
              duration: 0.2,
              ease: [0, 0.80, 0.2, 1.01],
              scale: {
                type: "tween",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
            >
                <img className='h-[280px] w-[280px]' src={pepLogo} alt="" />
            </motion.div>

            <div className='flex flex-col h-[400px] lg:h-[450px] items-center justify-center gap-y-10 lg:gap-y-16'>
            <motion.div className='h-[30%] content-center flex flex-row mx-auto items-center'>
                    <motion.h1 
                    className='text-6xl lg:text-9xl text-white text-center roza'
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{
                    ease: "linear",
                    duration: 0.9,
                    x: { duration: 0.9, type: "tween" }
                    }}
                        >
                        USKORO
                    </motion.h1>
                    <motion.p 
                    className='text-6xl lg:text-9xl text-white roza'
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    ease: "linear",
                    duration: 0.1,
                    x: { duration: 0.1, type: "tween" },
                    delay: 1
                    }}
                    >.</motion.p>
                    <motion.p 
                    className='text-6xl lg:text-9xl text-white roza'
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    ease: "linear",
                    duration: 0.1,
                    x: { duration: 0.1, type: "tween" },
                    delay: 1.1
                    }}
                    >.</motion.p>
                    <motion.p 
                    className='text-6xl lg:text-9xl text-white roza'
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    ease: "linear",
                    duration: 0.1,
                    x: { duration: 0.1, type: "tween" },
                    delay: 1.2
                    }}
                    >.</motion.p>
            </motion.div>
            <div className='flex h-[30px] top-0 flex-row justify-center gap-x-8 items-center'>
                <motion.div 
                    className='text-white'
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                    ease: "linear",
                    duration: 0.5,
                    x: { duration: 0.5, type: "tween" }
                    }}
                    >
                        <a className='ikona' href="https://www.instagram.com/pep.konf/"><FaInstagram size={60}/></a>
                </motion.div>
                <motion.div 
                    className='text-white'
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                    ease: "linear",
                    duration: 0.5,
                    x: { duration: 0.5, type: "tween" }
                    }}
                    >
                        <a className='ikona' href="https://www.facebook.com/pep.konf"><FaFacebook size={60}/></a>
                </motion.div>
            </div>
            </div>

            
        </section>
    </>
  )
}

export default SoonTM
