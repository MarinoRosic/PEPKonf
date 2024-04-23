import {React } from 'react'
import headerImg from "../assets/images/program.png"
import Table from "./Table"
import { motion } from 'framer-motion'

const Program = () => {
  const day1 = [
    { time: '16:30', tema: 'Okupljanje / kava' },
    { time: '17:00', tema: 'Otvaranje PEP Konferencije' },
    { time: '17:10', tema: 'PANEL - Svjetla, kamera, akcija: Novinarstvo u praksi'},
    { time: '18:10', tema: 'Ante Kovačić - "Od PRodavača do zabavljača"'},
    { time: '19:00', tema: 'KVIZ / KRAJ'}
  ] 
  const day2 = [
    { time: '9:30', tema: 'Okupljanje / kava' }, 
    { time: '10:10', tema: 'dr. sc. Kristijan Sedak - PR perspektive | ubojica dosade' }, 
    { time: '10:50', tema: 'Elena Vračarić - Od diplome, preko novinarstava do poduzetništva' },
    { time: '11:30', tema: 'Gloria Mage Gospić - Zašto je važna politička komunikacija' },
    { time: '12:15', tema: 'PAUZA - kava i kroasani - 20 minuta'},
    { time: '12:35', tema: 'Iva Sentić - Društvene mreže kao moćni alat' }, 
    { time: '13:15', tema: 'Ines Nanić - Pet razloga zašto event management ni(je) za tebe' },
    { time: '14:00', tema: 'RADIONICA - dr. sc. Kristijan Sedak - "CJEPIVO PROTIV TREME"' }, 
    { time: '15:00', tema: 'KRAJ' }]
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
            <Table datum="25.4 Četvrtak" day={day1} partyTime="OD 21:00h" partyLocation="ZABAVA U LOVE BARA"/>
            <Table datum="26.4 Petak" day={day2}/>
        </section>
    </>
  )
}

export default Program
