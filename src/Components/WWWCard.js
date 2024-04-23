import {React, useRef} from 'react'
import { motion, useInView } from 'framer-motion'

const WWWCard = (props) => {
    const pitanje = props.question
    const odgovor = props.answer
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
  return (
    <>
        <motion.div 
        className='content-center'
        ref={ref}
        style={{
            transform: isInView ? "none" : "translateX(100%)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
        }}
        >
            <motion.h1 
            className='text-[#772F6F] text-3xl lg:text-5xl pb-4 font-extrabold'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
            }}
            >
                {pitanje}
            </motion.h1>
            <p className='text-[#F0E2FF] text-lg md:text-2xl lg:text-3xl font-extrabold pb-20 overflow-hidden'>
                {odgovor}
            </p>
        </motion.div>
    </>
  )
}

export default WWWCard
