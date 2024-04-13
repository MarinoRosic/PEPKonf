import React from 'react'
// import testSvg from "../assets/images/test.svg"

const HeroSection = () => {
  return (
    <>
        <section className='flex flex-col mx-auto h-[100vh] w-full'>
            {/* <div className=' w-full h-full absolute -z-20'>
                <img src={testSvg} className='mx-[400px] rotate-90 h-[950px]' alt="" />
            </div> */}
            <header className='mx-auto my-auto flex flex-col'>
                <p className='text-white text-9xl font-extrabold'>PEP</p>
                <p className='text-white text-9xl font-semibold'>KONF</p>
            </header>
        </section>
    </>
  )
}

export default HeroSection
