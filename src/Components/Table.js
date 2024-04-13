import React from 'react'


const Table = () => {
  return (
    <>
        <section className='flex flex-col'>
            <h1 className='text-[#772F6F] text-6xl mx-auto pt-32 font-extrabold'>25.4. Četvrtak</h1>
            <div className='flex flex-col mx-52 pt-14'>
                <p className='text-white text-4xl pb-3'><b>16:30</b> - okupljanje / ćakula </p>
                <p className='text-white text-4xl pb-3'><b>17:00</b> - početak PEP </p>
                <p className='text-white text-4xl pb-3'><b>17:10- PANEL </b> - novinari i poduzetnici</p>
                <p className='text-white text-4xl pb-3'><b>18:10 - PREDAVANJE </b>- Ante Kovačić - Strast ili biznis?</p>
                <p className='text-white text-4xl pb-3'><b>19:00 - KVIZ/KRAJ </b></p>     
            </div>
            <div className='mx-auto pt-52 font-extrabold'>
                <h1 className='text-6xl text-white text-center'>21:00h - 02:00H</h1>
                <h1 className='text-6xl text-white font-bold'>PARTY U LOVE BARA </h1>
            </div>
        </section>
    </>
  )
}

export default Table
