import React from 'react'
import {FaTwitter, FaLinkedin} from 'react-icons/fa'

const Lecturer = (props) => {
    const image = props.img
  return (
    <div className='pb-24 flex-1'>
        <div className='h-[400px] w-[400px] rounded-full bg-black border-[#772F6F] border-[13px] mx-auto'>
            <img className='h-full w-full object-cover rounded-full' src={image} alt="" />
        </div>
        <div>
            <p className='text-white text-3xl text-center pt-10 font-bold'>{props.lecturer}</p>
        </div>
        <div className='flex'>
            <div className='mx-auto flex flex-row gap-x-3 pt-3'>
                <div className='text-white h-[50px] w-[50px]'>
                    <a className='ikona' href='#'><FaTwitter size={50} /> </a> 
                </div>
                <div className='text-white h-[50px] w-[50px]'>
                    <a className='ikona' href='#'><FaLinkedin size={50} /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lecturer
