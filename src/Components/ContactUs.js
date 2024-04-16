import { React, useRef} from 'react'
import { FaInstagram, FaFacebook} from 'react-icons/fa'
import { motion, useInView } from "framer-motion"

const ContactUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
  return (
    <>
        <motion.section 
        className='h-[100vh] flex flex-col'
        >
            <motion.header 
            className='pt-20 mx-auto lg:pt-32'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
              }}
            >
                <h1 className='font-extrabold text-white text-7xl'>Kontakt</h1>
            </motion.header>
            <motion.div 
            className='flex flex-col items-center pt-20 mx-auto gap-y-20'
            >
                <motion.div 
                className='text-white'
                ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
              }}
                >
                    <a className='ikona' href="https://www.facebook.com/pep.konf"><FaFacebook size={90}/></a>
                </motion.div>
                <motion.div 
                className='text-white'
                ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
              }}
                >
                    <a className='ikona' href="https://www.instagram.com/pep.konf/"><FaInstagram size={90}/></a>
                </motion.div>
                <motion.div 
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
                  }}
                className='text-white'
                >
                    <p className='text-2xl lg:text-6xl'>pep.konferencija@gmail.com</p>
                </motion.div>
            </motion.div>
        </motion.section>
    </>
  )
}

export default ContactUs
