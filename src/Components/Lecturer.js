import {React, useRef} from 'react'
import { FaLinkedin, FaGlobe } from 'react-icons/fa'
import { motion, useInView } from 'framer-motion'

const Lecturer = ({img, borderColor, lecturer, title, linkedIN, web}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const colorVariants = {
        pink: 'border-[#db9bd5]',
        purple: 'border-[#772F6F]'
      }
  return (
    <motion.div 
    className='flex-1'
    ref={ref}
    style={{
        transform: isInView ? "none" : "translateX(-100%)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
    }}
    >
        <div className={`h-[250px] w-[250px] lg:h-[320px] lg:w-[320px] rounded-full bg-black ${colorVariants[borderColor]} border-[13px] mx-auto`}>
            <img className='object-cover w-full h-full rounded-full ' src={img} alt="" />
        </div>
        <div className='flex flex-col'>
            <p className='pt-5 text-lg font-medium text-center text-white'>{lecturer}</p>
            <p className='text-md font-thin text-center text-[#db9bd5] px-10'>{title}</p>
        </div>
        <div className='flex'>
            <div className='flex flex-row pt-3 mx-auto'>
                <div className='text-white h-[50px] w-[40px]'>
                    <a className='ikona' href={web}><FaGlobe size={30} /> </a> 
                </div>
                <div className='text-white h-[50px] w-[40px]'>
                    <a className='ikona' href={linkedIN}><FaLinkedin size={30} /></a>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Lecturer
