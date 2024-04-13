import React from 'react'
import AboutUsCard from './AboutUsCard'

const AboutUsSection = () => {
  return (
    <>
        <section className='h-full flex flex-col'>
            <header className='mx-auto pt-32'>
                <h1 className='text-white text-9xl font-extrabold'>O nama</h1>
            </header>
            <div className='flex flex-col lg:flex-row'>
                <div className='my-auto flex-1/3 mx-auto sm:pt-10'>
                    <AboutUsCard />
                </div>
                <div className='mx-auto my-auto flex-2/3'>
                    <p className='text-white text-3xl text-clip mx-10 font-main font-extralight pt-20'>Početkom 2022. ekipa studenata s Odjela za komunikologiju na Sveučilištu u Dubrovniku, odlučila je zagrebati ispod površine PR-a. Tako su skoknuli do Zagreba s projektom “Posjet u PR agencije - PR iz prve ruke”. Ali, to nije bilo dovoljno. 
                        Na jednoj kavi,  jedna od članica je dobila ideju - <u>donijeti iskustvo</u>  u Dubrovnik. <br /><br />
                        I eto ih danas, s PEP Konferencijom, gdje ludilo i hrabrost rastu iz godine u godinu. Ideja koja je prerasla iz šalice kave sada osvaja Dubrovnik!</p>
                </div>
            </div>
        </section>    
    </>
  )
}

export default AboutUsSection
