import React from 'react'
import aboutUsImg from "../assets/images/aboutUs.png"

const AboutUsCard = (props) => {
  return (
    <>
    <div className='px-32'>
        <div className='h-[450px] w-[450px] rounded-full bg-black border-[#772F6F] border-[13px]  mx-auto'>
                <img className='h-full w-full object-cover rounded-full' src={aboutUsImg} alt="" />
                
        </div>
        <p className='text-white text-2xl text-center pt-8 font-bold'>Studenti Sveučilišta u Dubrovniku, Odjel za komunikologiju Odnosi s javnostima</p>
    </div>
        
    </>
  )
}

export default AboutUsCard
