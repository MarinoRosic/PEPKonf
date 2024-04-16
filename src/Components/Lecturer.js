import {React, useRef} from 'react'
import { FaLinkedin, FaGlobe } from 'react-icons/fa'
import { motion, useInView } from 'framer-motion'

const Lecturer = (props) => {
    const image = props.img
    const ref = useRef(null);
    const isInView = useInView(ref);
  return (
    <motion.div 
    className='flex-1 pb-20'
    ref={ref}
    style={{
        transform: isInView ? "none" : "translateX(-100%)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
    }}
    >
        <div className='h-[300px] w-[300px] rounded-full bg-black border-[#772F6F] border-[13px] mx-auto'>
            <img className='object-cover w-full h-full rounded-full' src={image} alt="" />
        </div>
        <div>
            <p className='pt-5 text-xl font-bold text-center text-white'>{props.lecturer}</p>
        </div>
        <div className='flex'>
            <div className='flex flex-row pt-3 mx-auto'>
                <div className='text-white h-[50px] w-[40px]'>
                    <a className='ikona' href='#'><FaGlobe size={30} /> </a> 
                </div>
                <div className='text-white h-[50px] w-[40px]'>
                    <a className='ikona' href='#'><FaLinkedin size={30} /></a>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Lecturer
