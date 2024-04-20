import React, {useRef} from 'react'
import AboutUsCard from './AboutUsCard'
import { motion, useInView } from "framer-motion"
const AboutUsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
  return (
    <>
        <section className='flex flex-col h-full lg:h-[100vh]  lg:pt-8 overflow-hidden'>
            <header className='pt-10 mx-auto'>
                <motion.h1 
                className='text-6xl font-extrabold text-white lg:text-8xl'
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
                >O nama</motion.h1>
            </header>
            <div className='flex flex-col flex-1 lg:flex-row'>
                <div className='mx-auto my-auto sm:pt-10 lg:w-[40%]'>
                    <AboutUsCard />
                </div>
                <motion.div 
                className='mx-auto my-auto lg:w-[60%]'
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateY(100%)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
                }}
                >
                    <p className='px-8 pt-10 text-lg text-white lg:text-2xl text-balance font-main'>Početkom 2022. ekipa studenata Odjela za komunikologiju na Sveučilištu u Dubrovniku, odlučila je zagrebati ispod površine PR-a. 
                    Odlučili su otići do Zagreba s projektom “Posjet u PR agencije - PR iz prve ruke”. Ali, to nije bilo dovoljno. 
                        Na jednoj kavi,  jedna od članica je dobila ideju - <u>donijeti iskustvo</u>  u Dubrovnik. 
                        </p> 
                        <br /><br />
                    <p className='px-8 text-lg text-white lg:text-2xl text-balance font-main'>
                        I eto ih danas, s <span className='span'>PEP Konferencijom</span>, gdje ludilo i hrabrost rastu iz godine u godinu. Ideja koja je prerasla iz šalice kave sada osvaja Dubrovnik!
                    </p>    
                </motion.div>
            </div>
        </section>    
    </>
  )
}

export default AboutUsSection
