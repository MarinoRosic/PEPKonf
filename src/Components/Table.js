import {React} from 'react'
import { motion } from 'framer-motion'

const Table = ({datum, day, partyTime, partyLocation}) => {
  return (
    <>
        <section className='flex flex-col w-full'>
            <motion.h1 
            className='text-[#772F6F] text-3xl lg:text-6xl mx-auto pt-16 lg:pt-28 font-extrabold'
            >{datum}</motion.h1>
            <motion.div 
            className='flex flex-col justify-center px-12 pt-12 lg:mx-auto lg:pt-12'
            >
                {day.map((items, index) => {
                    const {time, tema} = items
                    return <p className='z-50 pb-3 text-white text-md lg:text-3xl' key={index}>{time} - <span className='text-md lg:text-2xl roza'>{tema}</span></p>
                })}
            </motion.div>
            <motion.div 
            className='z-10 pt-12 pb-5 border-b-[#db9bd5] border-b-4 mx-auto font-extrabold md:pt-32 lg:pt-36'
            >
                <h1 className='font-bold text-[#db9bd5] text-xl lg:text-5xl'>{partyLocation}</h1>
                <h1 className='text-center text-[#db9bd5] text-xl lg:text-5xl'>{partyTime}</h1>
            </motion.div>
        </section>
    </>
  )
}

export default Table
