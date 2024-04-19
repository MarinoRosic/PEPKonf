import React from 'react'
import loveBarLogo from "../assets/images/loveBar.png"
import sveucilisteDu from "../assets/images/sveucilisteDubrovnik.png"
import lightMedija from "../assets/images/light_Media.png"

const Partners = () => {
  return (
    <>
        <section className='relative h-full xl:h-[500px] w-full bg-white flex flex-col justify-center items-center'>
            <div className=' flex flex-col xl:flex-row content-center '>
                <div className='content-center flex justify-center'>
                    <img className='h-[280px] w-[280px] xl:h-[350px] xl:w-[350px]' src={loveBarLogo} alt="" />
                </div>
                <div className='content-center mx-auto'>
                    <img className='h-[200px] xl:h-[250px] w-full xl:w-[520px]' src={sveucilisteDu} alt="" />
                </div>
                <div className='content-center mx-auto'>
                    <img className='h-[280px] xl:h-[350px] w-full xl:w-[380px]' src={lightMedija} alt="" />
                </div>
            </div>
            <div className='absolute bottom-0 h-[50px] border-t-[#261539] border-t-2 w-full bg-[#261539] px-2'>
                <div className='flex flex-row flex-grow h-full '>
                    <p className='span font-thin w-[33%] justify-center text-left content-center'><a href="">Privacy Policy</a></p>
                    <p className='w-[33%] span text-center justify-center content-center'>Copyright © 2024 PEP Konf</p>
                    <p className='span font-thin w-[33%] justify-center text-right content-center'>Made by <a href=""><span className='text-black'>AFDU</span></a></p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Partners
