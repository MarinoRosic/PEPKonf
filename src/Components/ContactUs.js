import React from 'react'
import { FaInstagram, FaFacebook} from 'react-icons/fa'


const ContactUs = () => {
  return (
    <>
        <section className='h-[100vh] flex flex-col'>
            <header className='pt-20 mx-auto lg:pt-32'>
                <h1 className='font-extrabold text-white text-7xl'>Kontakt</h1>
            </header>
            <div className='flex flex-col items-center pt-20 mx-auto gap-y-20'>
                <div className='text-white '>
                    <a className='ikona' href="https://www.facebook.com/pep.konf"><FaFacebook size={90}/></a>
                </div>
                <div className='text-white'>
                    <a className='ikona' href="https://www.instagram.com/pep.konf/"><FaInstagram size={90}/></a>
                </div>
                <div className='text-white'>
                    <p className='text-2xl lg:text-6xl'>pep.konferencija@gmail.com</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactUs
