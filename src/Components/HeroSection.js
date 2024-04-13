import React from 'react'
// import testSvg from "../assets/images/test.svg"
import pepLogo from "../assets/images/PEPLogo.png"

const HeroSection = () => {
  return (
    <>
        <section className='flex flex-col mx-auto h-[100vh] w-full'>
            {/* <div className='absolute w-full h-full -z-20'>
                <img src={testSvg} className='mx-[400px] rotate-90 h-[950px]' alt="" />
            </div> */}
            <header className='flex mx-auto my-auto'>
                {/* <p className='font-extrabold text-white text-9xl'>PEP</p>
                <p className='font-semibold text-white text-9xl'>KONF</p> */}
                <img className='' src={pepLogo}></img>
            </header>
        </section>
    </>
  )
}

export default HeroSection
