import {React } from 'react'
import headerImg from "../assets/images/program.png"
import Table from "./Table"
import { motion } from 'framer-motion'

const Program = () => {
  const day1 = [
    { time: '16:30', tema: 'Okupljanje + kava'},
    { time: '17:00', tema: 'Otvaranje PEP Konferencije' },
    { time: '17:15', tema: 'PANEL "Priča iza scene: Kako PR oblikuje vrhunske događaje"', prikazi: true, 
    predavaci: ['Nevena Rendeli, Prime komunikacije, Womens Weekend', 'Ivana Medo Bogdanović, Dubrovnik Summer Festival', 'Martina Pavleković, agencija za vjenčanja “Yes I Du”',
  'Moderator: Mislav Ćimić, novinar HRT Radio Dubrovnik']},
    { time: '18:20', tema: 'RADIONICA - "Bye bye strahu u javnom nastupu!"', prikazi: true, predavaci: ['Pinija Poljaković, trenerica javnog nastupa']},
    { time: '19:20', tema: 'KRAJ - Networking i druženje'}
  ] 
  const day2 = [
    { time: '9:30', tema: 'Okupljanje + kava' }, 
    { time: '10:00', tema: 'PANEL - Splitski cluster - snaga kreativnosti u OSJ', prikazi: true, 
  predavaci: ['Gordan Turković, CTA komunikacije', 'Luka Šipić, Vrh komunikacije', 'Andrea Čović Vidović, Europska komisija u Hrvatskoj', 'Moderatorica: Romana Knežević, studentica']}, 
    { time: '11:00', tema: '1:1 Iskustvo i rad u eventu, PR, iskustvo, priča...', prikazi: true, 
    predavaci: ['Nevena Rendeli - Women’s Weekend, Prime komunikacije', 'Moderatorica: Anamarija Lučić, studentica']},
    { time: '11:50 - 12:20', tema: 'PAUZA - kava' },
    { time: '12:20', tema: 'PANEL - mediji', prikazi: true, 
    predavaci: ['Damira Gregoret, novinarka, urednica i voditeljica informativnog programa RTL-a', 'Antonija Blaće, voditeljica i kreativna producentica', 'Moderatorica: Andrea Čović Vidović, Europska komisija u Hrvatskoj']},
    { time: '13:20', tema: '“Kampanje koje se pamte”', prikazi: true, predavaci: ['Gordan Turković, CTA komunikacije']}, 
    { time: '14:05', tema: 'Self-branding i PR - „Tko sam ja i tko si ti da lakše budemo MI“', prikazi: true, predavaci: ['Ermina Duraj, pročelnica Upravnog odjela za poslove Župana, Primorsko-goranska županija'] },
    { time: '14:50', tema: 'KRAJ - Catering & see you on another PEP!' }]
    return (
    <>
        <section className='flex flex-col w-full h-full'>
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
                <h1 className='absolute z-20 text-5xl font-bold text-white lg:text-8xl'>PRogram:</h1>
                <div className='pt-12 lg:pt-20'>
                    <img className="rotate-180 w-[240px] lg:w-[480px]" src={headerImg} alt="" />
                </div>
            </motion.header>
            <Table datum="24.4. Četvrtak" day={day1}/>
            <Table datum="25.4. Petak" day={day2}/>
        </section>
    </>
  )
}

export default Program
