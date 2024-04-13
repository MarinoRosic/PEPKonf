import React from 'react'

const AboutPEPSection = () => {
  return (
    <>
        <section className='bg-about-Mobitel bg-cover bg-center bg-no-repeat lg:bg-about-BG flex flex-col h-[100vh] font-main w-full'>
            <div className='flex flex-col my-auto'>
                <div className='flex flex-col mx-auto pb-20 px-8 lg:px-20 w-full'>
                    <h1 className='text-white text-3xl md:text-7xl font-extrabold leading-normal overflow-hidden text-balance'>
                        Prva  konferencija u <br /> <u>Dubrovniku</u> koja okuplja medijske i komunikacijske profesionalce.
                    </h1>
                </div>
                <div className='pb-5 px-8 lg:px-20'>
                    <p className='text-white text-3xl font-semibold'>
                        PR | novinarstvo | iskustvo | PRiče
                    </p>
                </div>
                <div className='pb-5 px-8 lg:px-20'>
                    <p className='text-white text-3xl font-extrabold'>TRAVANJ 25.-26. 2024 </p>
                </div>
                <div className='pb-5 px-8 lg:px-20'>
                    <p className='text-white text-3xl font-extrabold'>• Sveučilišni kampus</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutPEPSection
