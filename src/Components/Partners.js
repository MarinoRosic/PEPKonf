import React from 'react'
import loveBarLogo from "../assets/images/loveBar.png"
import sveucilisteDu from "../assets/images/sveucilisteDubrovnik.png"
import lightMedija from "../assets/images/light_Media.png"

const Partners = () => {
  return (
    <>
        <section className='relative h-full xl:h-[350px] w-full bg-white flex flex-col justify-center items-center'>
            <div className='flex flex-col content-center xl:flex-row xl:gap-x-36'>
                <div className='flex items-center content-center justify-center'>
                    <img className='h-[180px] w-[180px] xl:h-[250px] xl:w-[250px]' src={loveBarLogo} alt="" />
                </div>
                <div className='content-center mx-auto'>
                    <img className='h-[120px] xl:h-[150px] w-[270px] xl:w-[300px]' src={sveucilisteDu} alt="" />
                </div>
                <div className='content-center mx-auto'>
                    <img className='h-[220px] xl:h-[300px] w-[300px] xl:w-[380px]' src={lightMedija} alt="" />
                </div>
            </div>
            <div className='absolute bottom-0 h-[50px] border-t-[#261539] border-t-2 w-full bg-[#261539] px-2'>
                <div className='flex flex-row flex-grow h-full '>
                    <p className='text-sm span font-thin w-[33%] justify-center text-left content-center'><a href="">Privacy Policy</a></p>
                    <p className='w-[33%] text-sm span text-center justify-center content-center'>Copyright © 2024 PEP Konf</p>
                    <p className='span font-thin text-sm w-[33%] justify-center text-right content-center'>Made by <a href="https://afdu.dev"><span className='text-[#F0E2FF]'>AFDU</span></a></p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Partners
