import React from 'react'
import aboutUsImg from "../assets/images/aboutUs.png"

const OrganizerCard = (props) => {
  return (
    <>
    <div className='flex flex-col px-8 lg:px-10 pt-8 pb-8 border-b-2 border-[#772F6F] lg:flex-row w-full'>
        <div className='lg:w-[50%]'>
            <div className='h-[350px] w-[350px] rounded-full bg-black border-[#772F6F] border-[13px]  mx-auto'>
                    <img className='object-cover w-full h-full rounded-full' src={aboutUsImg} alt="" />
            </div>
        </div>
        <div className='pt-10 lg:w-[50%]'>
            <h2 className='pb-10 text-3xl font-extrabold text-white span'>{props.name}</h2>
            <p className='text-2xl font-medium text-white font-main'>
                Lorem Ipsum je jednostavno probni tekst koji se koristi u tiskarskoj i slovoslagarskoj industriji. Lorem Ipsum postoji kao industrijski standard još od 16-og stoljeća,
                kada je nepoznati tiskar uzeo tiskarsku galiju slova i posložio ih da bi napravio knjigu s uzorkom tiska. 
                Taj je tekst ne samo preživio pet stoljeća, već se i vinuo u svijet elektronskog slovoslagarstva, ostajući u suštini nepromijenjen.
            </p>
        </div>
    </div>
    </>
  )
}

export default OrganizerCard