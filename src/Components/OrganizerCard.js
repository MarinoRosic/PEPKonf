import React, {useRef} from 'react'
import { motion, useInView } from "framer-motion"

const OrganizerCard = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  return (
    <>
    <div className='flex flex-col px-8 lg:px-10 py-8 border-b-2 border-b-[#db9bd5] lg:flex-row w-full overflow-hidden'>
        <div className='lg:w-[50%]'>
            <motion.div 
            className='h-[310px] w-[310px] rounded-full border-[#772F6F] border-[13px] mx-auto'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
            }}
            >
                    <img className='object-cover w-full h-full rounded-full' src={props.img} alt="" />
            </motion.div>
        </div>
        <div className='pt-10 lg:w-[50%]'>
            <motion.h2 
            className='pb-10 text-4xl text-white span'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
            }}
            >{props.name}
            </motion.h2>
            <motion.p 
            className='text-2xl text-white'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}
            >
                {props.text}
            </motion.p>
        </div>
    </div>
    </>
  )
}

export default OrganizerCard