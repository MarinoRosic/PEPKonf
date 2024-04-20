import {React, useRef} from 'react'
// import rasporedSlika from "../assets/images/rasporedStrana.png"
import { motion, useInView } from 'framer-motion'

const Table = ({datum, day, partyTime, partyLocation}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
  return (
    <>
        <section className='flex flex-col w-full lg:h-[100vh]'>
            <motion.h1 
            className='text-[#772F6F] text-3xl lg:text-6xl mx-auto pt-16 lg:pt-28 font-extrabold'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            >{datum}</motion.h1>
            <motion.div 
            className='flex flex-col items-start px-12 pt-12 lg:mx-52 lg:pt-12'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateY(100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            >
                {day.map((items, index) => {
                    const {time, tema} = items
                    return <p className='z-50 pb-3 text-white text-md lg:text-3xl' key={index}>{time} - <span className='text-md lg:text-2xl roza'>{tema}</span></p>
                })}
            </motion.div>
            <motion.div 
            className='z-10 pt-12 pb-5 border-b-[#db9bd5] border-b-4 mx-auto font-extrabold md:pt-32 lg:pt-36'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            >
                <h1 className='font-bold text-[#db9bd5] text-md lg:text-5xl'>{partyLocation}</h1>
                <h1 className='text-center text-[#db9bd5] text-md lg:text-5xl'>{partyTime}</h1>
            </motion.div>
            {/* <div className='absolute pt-80 lg:pt-20'>
                <img className='lg:h-full lg:w-full h-[350px] w-[350px]' src={rasporedSlika} alt="" />
            </div>
            <div className='absolute right-0 pt-80 lg:pt-20'>
                <img className='lg:h-full lg:w-full h-[350px] w-[350px] img-hor' src={rasporedSlika} alt="" />
            </div> */}
        </section>
    </>
  )
}

export default Table
