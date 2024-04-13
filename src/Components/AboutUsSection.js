import React from 'react'
import AboutUsCard from './AboutUsCard'

const AboutUsSection = () => {
  return (
    <>
        <section className='flex flex-col h-full lg:h-[100vh] pt-32 lg:pt-8'>
            <header className='pt-32 mx-auto'>
                <h1 className='font-extrabold text-white text-7xl lg:text-8xl'>O nama</h1>
            </header>
            <div className='flex flex-col flex-1 lg:flex-row'>
                <div className='mx-auto my-auto sm:pt-10 lg:w-[40%]'>
                    <AboutUsCard />
                </div>
                <div className='mx-auto my-auto lg:w-[60%]'>
                    <p className='px-10 pt-10 text-2xl text-white text-balance font-main '>Početkom 2022. ekipa studenata s Odjela za komunikologiju na Sveučilištu u Dubrovniku, odlučila je zagrebati ispod površine PR-a. Tako su skoknuli do Zagreba s projektom “Posjet u PR agencije - PR iz prve ruke”. Ali, to nije bilo dovoljno. 
                        Na jednoj kavi,  jedna od članica je dobila ideju - <u>donijeti iskustvo</u>  u Dubrovnik. <br /><br />
                        I eto ih danas, s PEP Konferencijom, gdje ludilo i hrabrost rastu iz godine u godinu. Ideja koja je prerasla iz šalice kave sada osvaja Dubrovnik!</p>
                </div>
            </div>
        </section>    
    </>
  )
}

export default AboutUsSection
