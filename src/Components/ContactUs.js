import { React, useRef} from 'react'
import { FaInstagram, FaFacebook} from 'react-icons/fa'
import { motion, useInView } from "framer-motion"
import emailjs from "@emailjs/browser"

const ContactUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
      e.target.reset();
    }
  return (
    <>
        <motion.section 
        className='flex flex-col h-[980px] lg:h-full overflow-hidden pb-20 lg:pb-32'
        >
            <motion.header 
            className='mx-auto pt-14 lg:pt-16'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
              }}
            >
                <h1 className='text-5xl font-extrabold text-white lg:text-7xl'>Kontakt</h1>
            </motion.header>
            <motion.div 
            className='flex flex-col items-center pt-10 mx-auto gap-y-10'
            >
              <div className='flex flex-row gap-x-6'>
                <motion.div 
                  className='text-white'
                  ref={ref}
                  style={{
                  transform: isInView ? "none" : "translateX(-100%)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                }}
                  >
                      <a className='ikona' href="https://www.facebook.com/pep.konf"><FaFacebook size={60}/></a>
                  </motion.div>
                  <motion.div 
                  className='text-white'
                  ref={ref}
                  style={{
                      transform: isInView ? "none" : "translateX(-100%)",
                      opacity: isInView ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                  }}
                  >
                      <a className='ikona' href="https://www.instagram.com/pep.konf/"><FaInstagram size={60}/></a>
                  </motion.div>
              </div>
                
                <motion.h1 
                className='pt-8 text-3xl text-center text-white'
                ref={ref}
                  style={{
                      transform: isInView ? "none" : "translateX(-100%)",
                      opacity: isInView ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
                  }}
                >Prijava:</motion.h1>
                <form action="" onSubmit={sendEmail}>
                  <motion.div 
                  className='flex flex-col items-center lg:gap-x-4 gap-y-4'
                  ref={ref}
                  style={{
                      transform: isInView ? "none" : "translateX(-100%)",
                      opacity: isInView ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
                  }}
                  >
                      <input className='italic w-[300px] lg:w-[500px] h-12 rounded-3xl text-center' type="text" name="name" id="name" placeholder=' Ime' required />
                      <input className='italic w-[300px] lg:w-[500px] h-12 rounded-3xl text-center' type="text" name="surname" id="surname" placeholder=' Prezime' required />
                      <input className='italic w-[300px] lg:w-[500px] h-12 rounded-3xl text-center' type="email" name="email" id="email" placeholder=' E-mail' required/>
                      <button className='tracking-widest h-12 rounded-full w-[200px] bg-[#772F6F] px-[42px] text-white  font-semibold outline-none transition-all duration-300 content-center' type="submit">Dolazim!</button>
                  </motion.div>
                </form>
                <motion.div 
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
                  }}
                className='text-white'
                >
                    <p className='pt-10 text-2xl lg:text-3xl md:pt-0'>pep.konferencija@gmail.com</p>
                </motion.div>
            </motion.div>
        </motion.section>
    </>
  )
}

export default ContactUs
