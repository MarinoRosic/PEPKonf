import React from 'react'
import presImageMob from "../assets/images/presentationMob.png"
import { motion } from 'framer-motion'

const Presentation = () => {
  return (
    <>
        <section className='h-[680px] md:h-[100vh] overflow-hidden flex justify-center'>
            <motion.div 
            className='h-full flex items-center my-auto'
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{opacity:1, scale: 0.9}}
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
                <img className='mx-auto' src={presImageMob} alt="" />
            </motion.div>
        </section>
    </>
  )
}

export default Presentation
