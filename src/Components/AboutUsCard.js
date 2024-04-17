import React, {useRef} from 'react'
import aboutUsImg from "../assets/images/aboutUs.png"
import { motion, useInView } from "framer-motion"

const AboutUsCard = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  return (
    <>
    <div 
    className='pt-12'
    >
        <motion.div 
        className='h-[350px] w-[350px] rounded-full bg-black border-[#772F6F] border-[13px]  mx-auto'
        ref={ref}
        style={{
            transform: isInView ? "none" : "translateX(100%)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
        }}
        >
            <img className='object-cover w-full h-full rounded-full' src={aboutUsImg} alt="" />
        </motion.div>
        <motion.p 
        className='pt-8 px-8 text-xl lg:text-2xl font-bold text-center text-white lg:w-[400px] mx-auto'
        ref={ref}
        style={{
            transform: isInView ? "none" : "translateX(-100%)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
        }}
        >Studenti Sveučilišta u Dubrovniku, Odjel za komunikologiju Odnosi s javnostima</motion.p>
    </div>
    </>
  )
}

export default AboutUsCard
