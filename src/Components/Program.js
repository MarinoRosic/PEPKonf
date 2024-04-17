import {React } from 'react'
import headerImg from "../assets/images/program.png"
import Table from "./Table"
import { motion } from 'framer-motion'

const Program = () => {
  return (
    <>
        <section className='flex flex-col w-full h-full gap-8'>
            <motion.header
            className='pt-16 mx-auto'
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{opacity:1, scale: 0.9}}
            viewport={{once: true}}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
            >
                <h1 className='absolute z-20 text-6xl font-bold text-white lg:text-8xl'>PRogram:</h1>
                <div className='pt-12 lg:pt-20'>
                    <img className="rotate-180 w-[270px] lg:w-[440px]" src={headerImg} alt="" />
                </div>
            </motion.header>
            <Table datum="25.4 Četvrtak" partyTime="21:00h - 02:00h" partyLocation="PARTY U LOVE BARA"/>
            <Table datum="26.4 Petak"/>
        </section>
    </>
  )
}

export default Program
