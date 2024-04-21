import {React, useRef} from 'react'
import stolice from "../assets/images/stoliceBG.jpg"
import { motion, useInView } from 'framer-motion'

const SeeYou = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
  return (
    <>
        <section className='flex flex-col items-center justify-center overflow-hidden '>
            <div className='relative content-center w-full h-full '>
                <img className='w-full md:h-[700px]' src={stolice} alt="" />   
            </div>
            <motion.div 
            className='absolute flex items-center overflow-hidden'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}
            >
                <h1 className='text-5xl text-white'>Vidimo se!</h1>
            </motion.div>
        </section>
    </>
  )
}

export default SeeYou
