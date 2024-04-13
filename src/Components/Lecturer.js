import React from 'react'
import { FaLinkedin, FaGlobe } from 'react-icons/fa'

const Lecturer = (props) => {
    const image = props.img
  return (
    <div className='flex-1 pb-20'>
        <div className='h-[300px] w-[300px] rounded-full bg-black border-[#772F6F] border-[13px] mx-auto'>
            <img className='object-cover w-full h-full rounded-full' src={image} alt="" />
        </div>
        <div>
            <p className='pt-5 text-xl font-bold text-center text-white'>{props.lecturer}</p>
        </div>
        <div className='flex'>
            <div className='flex flex-row pt-3 mx-auto'>
                <div className='text-white h-[50px] w-[40px]'>
                    <a className='ikona' href='#'><FaGlobe size={30} /> </a> 
                </div>
                <div className='text-white h-[50px] w-[40px]'>
                    <a className='ikona' href='#'><FaLinkedin size={30} /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lecturer
