import React, {useRef} from 'react'
import AboutUsCard from './AboutUsCard'
import { motion, useInView } from "framer-motion"
const AboutUsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
  return (
    <>
        <section className='flex flex-col h-full lg:h-[100vh] pt-32 lg:pt-8 overflow-hidden'>
            <header className='pt-32 mx-auto'>
                <h1 className='font-extrabold text-white text-7xl lg:text-8xl'>O nama</h1>
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
                    <p className='px-10 pt-10 text-xl text-white text-balance font-main'>Početkom 2022. ekipa studenata s Odjela za komunikologiju na Sveučilištu u Dubrovniku, odlučila je zagrebati ispod površine PR-a. Tako su skoknuli do Zagreba s projektom “Posjet u PR agencije - PR iz prve ruke”. Ali, to nije bilo dovoljno. 
                        Na jednoj kavi,  jedna od članica je dobila ideju - <u>donijeti iskustvo</u>  u Dubrovnik. 
                        </p> 
                        <br /><br />
                    <p className='px-10 text-xl text-white text-balance font-main'>
                        I eto ih danas, s PEP Konferencijom, gdje ludilo i hrabrost rastu iz godine u godinu. Ideja koja je prerasla iz šalice kave sada osvaja Dubrovnik!
                    </p>    
                </motion.div>
            </div>
        </section>    
    </>
  )
}

export default AboutUsSection
