import React from 'react'
import Lecturer from './Lecturer'
//Panelisti
import Jadran from "../assets/images/JadranKapor.jpeg"
import Paula from "../assets/images/Paula Klaić Saulačić.jpg"
import Bruno from "../assets/images/Bruno.jpeg"
import Donna from "../assets/images/Donna.jpeg"
import Mislav from "../assets/images/Mislav.jpg"
//Predavaci
import Kristijan from "../assets/images/KristijanSedak.jpg"
import Glorija from "../assets/images/Gloria-Mage-Gospic.jpg"
import Ines from "../assets/images/Ines.jpg"
import Elena from "../assets/images/Elena.jpeg"
import Iva from "../assets/images/IvaSentic.jpeg"
import Ante from "../assets/images/AnteKovacic.jpg"
//Voditelji
import Anamarija from "../assets/images/Anamarija.jpeg"
import { motion } from 'framer-motion'

const LecturersSection = (props) => {
  return (
    <> 
      <section className='flex flex-col h-full pt-16 border-t-2 border-t-[#db9bd5] overflow-hidden'>
          <div>
            <motion.h1 
            className='text-5xl text-center text-white xl:text-7xl'
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
                Panelisti:
            </motion.h1>
            <div className='flex flex-row flex-wrap pt-20 pb-12 border-b-2  border-b-[#db9bd5] gap-y-10 lg:gap-y-20'>
              <Lecturer img={Paula} lecturer="Paula Klaić Saulačić" title="Dopisnica Nove TV za DNŽ" 
              web="https://novatv.dnevnik.hr/informativni/novinar/paula-klaic-saulacic-dubrovnik" 
              linkedIN="https://www.linkedin.com/in/paula-klaic-saulacic-1bb14065/" borderColor='purple'/>
              <Lecturer img={Jadran} lecturer="Jadran Kapor" title="Glavni urednik Dubrovačkog vijesnika" 
              web="https://hanzamedia.hr/bio/jadran-kapor/" linkedIN="https://www.linkedin.com/in/jadran-kapor-731654b/" 
              borderColor='purple'/>
              <Lecturer img={Donna} lecturer="Donna Diana Prćić" borderColor='purple' title="RTL-ova reporterka" 
              linkedIN="https://www.linkedin.com/in/donna-diana-pr%C4%87i%C4%87-436a8b104/?originalSubdomain=hr" />
              <Lecturer img={Mislav} lecturer="Mislav Ćimić (moderator)" borderColor='pink' title="Urednik HRT - Radio Dubrovnik"
              linkedIN="https://www.linkedin.com/in/mislav-%C4%87imi%C4%87-5676a0226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"/>
            </div>
          </div>
          <div className='pt-14'>
            <motion.h1 
            className='text-5xl text-center text-white xl:text-7xl'
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
                Predavači:
            </motion.h1>
            <div className='flex flex-row flex-wrap pt-20 pb-12 border-b-2 border-b-[#db9bd5] gap-x-24 gap-y-10 lg:gap-y-20'>
              <Lecturer img={Kristijan} lecturer="dr. sc. Kristijan Sedak" title="Profesor na Hrvatskom katoličkom sveučilištu u Zagrebu / Govornička akademija Demosten" 
              linkedIN="https://www.linkedin.com/in/kristijan-sedak/" web="https://umjetnost-komunikacije.hr/nas-tim/kristijan-sedak/"
              borderColor='purple'/>
              <Lecturer img={Glorija} lecturer="Gloria Mage Gospić" title='CEO Komunikativne agencije; komunikacijska savjetnica'  
              linkedIN="https://www.linkedin.com/in/gloria-mage-gospi%C4%87-0ab71442/?originalSubdomain=hr"
              borderColor='purple'/>
              <Lecturer img={Ines} lecturer="Ines Nanić" title='Vlasnica agencije za vjenčanja "Dubrovnik Event"' 
              borderColor='purple' linkedIN="https://www.linkedin.com/in/weddingsindubrovnik/?originalSubdomain=hr" web="https://dubrovnikevent.com/"/>
              <Lecturer img={Elena} lecturer="Elena Vračarić" title='Vlasnica studija "Slatko kao cukar"' 
              linkedIN="https://www.linkedin.com/in/elena-vra%C4%8Dari%C4%87-45aa001a0/?originalSubdomain=hr" web="https://www.instagram.com/slatkokaocukar.hr/"
              borderColor='purple'/>
              <Lecturer img={Iva} lecturer="Iva Sentić" title='Menadžerica digitalnog marketinga / vlasnica agencije "Relaxed Dubrovnik"'  borderColor='purple'
              linkedIN="https://www.linkedin.com/in/iva-sentic/?originalSubdomain=hr" web="https://www.instagram.com/relaxeddubrovnik/"/>
              <Lecturer img={Ante} lecturer="Ante Kovačić" title='Osnivač i pokretač "DubPub kviz"' 
              borderColor='purple' linkedIN="https://www.linkedin.com/in/ante-kovacic-91172a260/" web="https://www.instagram.com/dubpubkviz/"/>
            </div>
          </div>
          <div className='pt-14'>
            <motion.h1 
            className='text-5xl text-center text-white xl:text-7xl'
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
                Moderatori PEP konferencije:
            </motion.h1>
            <div className='flex flex-row flex-wrap pt-20 pb-12 border-b-2 border-b-[#db9bd5] gap-x-24 gap-y-10 lg:gap-y-20'>
              <Lecturer img={Anamarija} lecturer="Anamarija Lučić" title="Moderatorica konferencije, preddiplomski studij Mediji i kultura društva"
              borderColor='purple'/>
              <Lecturer img={Bruno} lecturer="Bruno Dedo" title='Moderator konferencije, preddiplomski studij Mediji i kultura društva'
              borderColor='purple'/>
            </div>
          </div>
      </section>
    </>
  )
}

export default LecturersSection
