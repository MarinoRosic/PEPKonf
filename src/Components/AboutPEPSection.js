import React from 'react'

const AboutPEPSection = () => {
  return (
    <>
        <section className='bg-about-Mobitel bg-cover bg-center bg-no-repeat lg:bg-about-BG flex flex-col h-[100vh] font-main w-full'>
            <div className='flex flex-col my-auto'>
                <div className='flex flex-col w-full px-8 pb-20 mx-auto lg:px-20'>
                    <h1 className='overflow-hidden text-3xl font-extrabold leading-normal text-white md:text-7xl text-balance'>
                        Prva  konferencija u <br /> <u className='span'><span className='span'>Dubrovniku</span></u> koja okuplja medijske i komunikacijske profesionalce.
                    </h1>
                </div>
                <div className='px-8 pb-5 lg:px-20'>
                    <p className='text-3xl font-semibold text-white'>
                     <span className='span'>PR </span> | novinarstvo | iskustvo | <span className='span'>PR</span>iče
                    </p>
                </div>
                <div className='px-8 pb-5 lg:px-20'>
                    <p className='text-3xl font-extrabold text-white'>TRAVANJ 25.-26. 2024 </p>
                </div>
                <div className='px-8 pb-5 lg:px-20'>
                    <p className='text-3xl font-extrabold text-white'>• Sveučilišni kampus</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutPEPSection
