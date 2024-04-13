import React from 'react'
import { FaInstagram, FaFacebook} from 'react-icons/fa'


const ContactUs = () => {
  return (
    <>
        <section className='min-h-[100vh] flex flex-col relative'>
            <header className='mx-auto pt-32'>
                <h1 className='text-white text-7xl font-extrabold'>Kontakt</h1>
            </header>
            <div className='pt-20 mx-auto flex flex-col items-center'>
                <div className='text-white pb-20'>
                    <a className='ikona' href="https://www.facebook.com/pep.konf"><FaFacebook size={90}/></a>
                </div>
                <div className='text-white pb-20'>
                    <a className='ikona' href="https://www.instagram.com/pep.konf/"><FaInstagram size={90}/></a>
                </div>
                <div className='text-white'>
                    <p className='text-3xl px-5 lg:text-6xl'>pep.konferencija@gmail.com</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactUs
