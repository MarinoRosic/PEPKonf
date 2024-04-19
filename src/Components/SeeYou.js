import {React, useRef} from 'react'
import stolice from "../assets/images/stoliceBG.png"
import { motion, useInView } from 'framer-motion'

const SeeYou = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
  return (
    <>
        <section className='flex flex-col items-center justify-center overflow-hidden '>
            <div className='relative w-full h-full content-center '>
                <img className='w-full xl:h-[800px]' src={stolice} alt="" />   
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
                <h1 className='text-white text-5xl'>Vidimo se!</h1>
            </motion.div>
        </section>
    </>
  )
}

export default SeeYou
