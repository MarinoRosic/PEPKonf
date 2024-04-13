import React from 'react'
import rasporedSlika from "../assets/images/rasporedStrana.png"

const Table = (props) => {
  return (
    <>
        <section className='flex flex-col w-full lg:h-[100vh]'>
            <h1 className='text-[#772F6F] text-4xl lg:text-6xl mx-auto pt-20 lg:pt-32 font-extrabold'>{props.datum}</h1>
            <div className='flex flex-col items-start px-12 pt-5 lg:mx-52 lg:pt-24'>
                <p className='pb-3 text-2xl text-white lg:text-4xl'><b>16:30</b> - okupljanje / ćakula </p>
                <p className='pb-3 text-2xl text-white lg:text-4xl'><b>17:00</b> - početak PEP </p>
                <p className='pb-3 text-2xl text-white lg:text-4xl'><b>17:10- PANEL </b> - novinari i poduzetnici</p>
                <p className='pb-3 text-2xl text-white lg:text-4xl'><b>18:10 - PREDAVANJE </b>- Ante Kovačić - Strast ili biznis?</p>
                <p className='pb-3 text-2xl text-white lg:text-4xl'><b>19:00 - KVIZ/KRAJ </b></p>     
            </div>
            <div className='z-10 pt-12 mx-auto font-extrabold md:pt-32 lg:pt-40'>
                <h1 className='text-2xl text-center text-white lg:text-5xl'>{props.partyTime}</h1>
                <h1 className='text-2xl font-bold text-white lg:text-5xl'>{props.partyLocation}</h1>
            </div>
            <div className='absolute pt-64 lg:pt-16'>
                <img className='lg:h-full lg:w-full h-[350px] w-[350px]' src={rasporedSlika} alt="" />
            </div>
            <div className='absolute right-0 pt-64 lg:pt-16'>
                <img className='lg:h-full lg:w-full h-[350px] w-[350px] img-hor' src={rasporedSlika} alt="" />
            </div>
        </section>
    </>
  )
}

export default Table
