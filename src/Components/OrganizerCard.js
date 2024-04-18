import React, {useRef} from 'react'
import aboutUsImg from "../assets/images/aboutUs.png"
import { motion, useInView } from "framer-motion"

const OrganizerCard = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  return (
    <>
    <div className='flex flex-col px-8 lg:px-10 pt-8 pb-8 border-b-2 border-[#772F6F] lg:flex-row w-full overflow-hidden'>
        <div className='lg:w-[50%]'>
            <motion.div 
            className='h-[350px] w-[350px] rounded-full bg-black border-[#772F6F] border-[13px] mx-auto'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
            }}
            >
                    <img className='object-cover w-full h-full rounded-full' src={aboutUsImg} alt="" />
            </motion.div>
        </div>
        <div className='pt-10 lg:w-[50%]'>
            <motion.h2 
            className='pb-10 text-3xl text-white span'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
            }}
            >{props.name}
            </motion.h2>
            <motion.p 
            className='text-lg text-white'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}
            >
                Lorem Ipsum je jednostavno probni tekst koji se koristi u tiskarskoj i slovoslagarskoj industriji. Lorem Ipsum postoji kao industrijski standard još od 16-og stoljeća,
                kada je nepoznati tiskar uzeo tiskarsku galiju slova i posložio ih da bi napravio knjigu s uzorkom tiska. 
                Taj je tekst ne samo preživio pet stoljeća, već se i vinuo u svijet elektronskog slovoslagarstva, ostajući u suštini nepromijenjen.
            </motion.p>
        </div>
    </div>
    </>
  )
}

export default OrganizerCard