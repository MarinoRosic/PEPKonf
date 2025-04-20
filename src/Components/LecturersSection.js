import React from 'react'
import Lecturer from './Lecturer'
//Panelisti
import Nevena from "../assets/images/Nevena.jpg"
import Martina from "../assets/images/MartinaPavlekovic.jpeg"
import Gordan from "../assets/images/GordanTurkovic.jpg"
import IvanaMedo from "../assets/images/IvanaMedo.jpg"
import Antonija from "../assets/images/Antonija Blaće.jpeg"
import Romana from "../assets/images/RomanaKnezevic.jpg"
import Pinija from "../assets/images/PinijaPoljakovic.jpg"
import Ermina from "../assets/images/ErminaDuraj.jpg"
import AnamarijaLucic from "../assets/images/AnamarijaLucic.jpeg"
import AndreaCovic from "../assets/images/AndreaCovic.jpg"
import LukaSipic from "../assets/images/LukaSipic.jpg"
import Damira from "../assets/images/Damira.jpg"
import Mislav from "../assets/images/Mislav.jpg"
import Karla from "../assets/images/KarlaSabljic.jpeg"
import Sara from "../assets/images/SaraKalogjera.jpeg"
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
              <Lecturer img={Nevena} lecturer="Nevena Rendeli" title="Novinarka, televizijska voditeljica, PR stručnjakinja i event menadžerica" 
              web="https://womensweekend.eu/en/team/" 
              linkedIN="https://www.linkedin.com/in/nevena-rendeli-vejzovic-58276467/" borderColor='purple'/>
              <Lecturer img={IvanaMedo} lecturer="Ivana Medo Bogdanović" title="Ravnateljica Dubrovačkih ljetnih igara" 
              web="https://www.dubrovnik-festival.hr/en" borderColor='purple'/>
              <Lecturer img={Martina} lecturer="Martina Pavleković" borderColor='purple' title="Vlasnica agencije za organizaciju vjenčanja YES-I-DU." 
              web="https://yes-i-du.net/" linkedIN="https://www.linkedin.com/in/martina-pavlekovi%C4%87-4331681a/" />
              <Lecturer img={Gordan} lecturer="Gordan Turković" borderColor='purple' title="Izvršni direktor i suvlasnik u agenciji CTA komunikacije" 
              linkedIN="https://www.linkedin.com/in/gordan-turkovi%C4%87/" web="https://ctakomunikacije.hr/"/>
              <Lecturer img={LukaSipic} lecturer="Luka Šipić" borderColor='purple' title="Vlasnik PR agencije Vrh komunikacije" 
              linkedIN="https://www.linkedin.com/in/luka-%C5%A1ipi%C4%87-845aaa112/" web="https://vrhkomunikacije.com/"/>
                <Lecturer img={AndreaCovic} lecturer="Andrea Čović Vidović" borderColor='purple' title="Voditeljica medija Europske komisije u Hrvatskoj" 
              linkedIN="https://www.linkedin.com/in/andreacovic/" web="https://croatia.representation.ec.europa.eu/o-nama/nas-tim_hr" />
                <Lecturer img={Antonija} lecturer="Antonija Blaće" borderColor='purple' title="Voditeljica i kreativna producentica" 
              linkedIN="https://www.linkedin.com/in/antonija-blace-b56521290/" />
                <Lecturer img={Damira} lecturer="Damira Gregoret" borderColor='purple' title="Novinarka, urednica i voditeljica informativnog programa RTL-a" 
              linkedIN="https://www.linkedin.com/company/rtl-hrvatska/posts/?feedView=all" />
                <Lecturer img={Mislav} lecturer="Mislav Ćimić (moderator)" borderColor='pink' title="Novinar HRT Radio Dubrovnik"
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
                Radionica:
            </motion.h1>
            <div className='flex flex-row flex-wrap pt-20 pb-12 border-b-2 border-b-[#db9bd5] gap-x-24 gap-y-10 lg:gap-y-20'>
              <Lecturer img={Pinija} lecturer="Pinija Poljaković" title="Trenerica javnih i medijskih nastupa • Voditeljica i moderatorica (MC)" 
              linkedIN="https://www.linkedin.com/in/pinija-poljakovic/" web="https://www.pinija.eu/"
              borderColor='purple'/>
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
              <Lecturer img={Nevena} lecturer="Nevena Rendeli" title="Novinarka, televizijska voditeljica, PR stručnjakinja i event menadžerica" 
                web="https://womensweekend.eu/en/team/" 
              linkedIN="https://www.linkedin.com/in/nevena-rendeli-vejzovic-58276467/" borderColor='purple'/>
              <Lecturer img={Gordan} lecturer="Gordan Turković" borderColor='purple' title="Izvršni direktor i suvlasnik u agenciji CTA komunikacije" 
              linkedIN="https://www.linkedin.com/in/gordan-turkovi%C4%87/" web="https://ctakomunikacije.hr/"/>
              <Lecturer img={Ermina} lecturer="Ermina Duraj" title="Pročelnica Upravnog odjela za poslove Župana, Primorsko-goranska županija" 
              linkedIN="https://www.linkedin.com/in/ermina-duraj-71a351202/" web="https://www.pgz.hr/objave/ermina-duraj-nova-je-procelnica-uo-za-poslove-zupana-i-zupanijske-skupstine-pgz/"
              borderColor='purple'/>
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
                Moderatorice:
            </motion.h1>
            <div className='flex flex-row flex-wrap pt-20 pb-12 border-b-2 border-b-[#db9bd5] gap-x-24 gap-y-10 lg:gap-y-20'>
              <Lecturer img={AnamarijaLucic} lecturer="Anamarija Lučić" title="Moderatorica konferencije, diplomski studij Odnosi s javnostima"
              borderColor='purple'/>
              <Lecturer img={Romana} lecturer="Romana Knežević" borderColor='purple' title="Moderatorica konferencije, diplomski studij Odnosi s javnostima"/>
              <Lecturer img={Karla} lecturer="Karla Sabljić" title="Moderatorica konferencije, prijediplomski studij Mediji i kultura društva"
              borderColor='purple'/>
              <Lecturer img={Sara} lecturer="Sara Kalogjera" title="Moderatorica konferencije, diplomski studij Odnosi s javnostima"
              borderColor='purple'/>
            </div>
          </div>
      </section>
    </>
  )
}

export default LecturersSection
