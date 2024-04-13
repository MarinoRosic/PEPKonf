import React from 'react'
import aboutUsImg from "../assets/images/aboutUs.png"

const AboutUsCard = (props) => {
  return (
    <>
    <div className='pt-12'>
        <div className='h-[350px] w-[350px] rounded-full bg-black border-[#772F6F] border-[13px]  mx-auto'>
                <img className='object-cover w-full h-full rounded-full' src={aboutUsImg} alt="" />
        </div>
        <p className='pt-8 px-8 text-xl lg:text-2xl font-bold text-center text-white lg:w-[400px] mx-auto'>Studenti Sveučilišta u Dubrovniku, Odjel za komunikologiju Odnosi s javnostima</p>
    </div>
    </>
  )
}

export default AboutUsCard
