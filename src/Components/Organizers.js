import React from 'react'
import OrganizerCard from "./OrganizerCard"
import LZux from "../assets/images/LeonardaOrganizator.jpg"
import Marija from "../assets/images/MarijaMamic.jpeg"
import Andrea from "../assets/images/Andrea.jpg"
import Matko from "../assets/images/Matko.jpg"
import Anamarija from "../assets/images/AnamarijaLucic.jpeg"
import { motion } from 'framer-motion'

const Organizers = () => {
  return (
    <>
        <section className='flex flex-col w-full h-full overflow-hidden'>
            <header className='pt-32 mx-auto'>
                <motion.h1 
                className='pb-10 text-5xl font-extrabold text-white lg:text-8xl font-main'
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
                    Organizatori:
                </motion.h1>
            </header>
            <OrganizerCard name="Leonarda Tikvica" img={LZux} text="Osnivačica i voditeljica projektnih aktivnosti i programa (alumna)"/>
            <OrganizerCard name="Anamarija Lučić" img={Anamarija} text="Organizatorica i koordinatorica ponuda, nabave, cateringa i programa"/>
            <OrganizerCard name="Marija Mamić" img={Marija} text="Organizatorica i voditeljica društvenih mreža"/>
        </section>
    </>
  )
}

export default Organizers