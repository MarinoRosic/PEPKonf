import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import SplitText from './SplitText'
import RevealText from './RevealText'

// Orchestrates icon pair stagger
const iconsVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

// Orchestrates form fields stagger
const formVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

// Shared blur+fade+rise — same visual language as Lecturer / OrganizerCard
const itemVariants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
}

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_PUBLIC_KEY
    ).then(
      (response) => console.log('SUCCESS!', response.status, response.text),
      (error)    => console.log('FAILED...', error),
    )
    e.target.reset()
  }

  return (
    <section id="kontakt" className='flex flex-col h-[780px] lg:h-full overflow-hidden pb-20 lg:pb-32'>
      <header className='mx-auto pt-14 lg:pt-16'>
        <h1 className='text-5xl font-extrabold text-white md:text-6xl lg:text-7xl'>
          <SplitText stagger={0.06}>Kontakt</SplitText>
        </h1>
      </header>

      <div className='flex flex-col items-center pt-10 mx-auto gap-y-10'>

        {/* Social icons — stagger in, scale on hover */}
        <motion.div
          className='flex flex-row gap-x-6'
          variants={iconsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            className='text-white'
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <a className='ikona' href="https://www.facebook.com/pep.konf"><FaFacebook size={60} /></a>
          </motion.div>
          <motion.div
            className='text-white'
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <a className='ikona' href="https://www.instagram.com/pep.konf/"><FaInstagram size={60} /></a>
          </motion.div>
        </motion.div>

        <h2 className='pt-8 text-3xl text-center text-white lg:text-5xl'>
          <RevealText delay={0.1}>Prijava:</RevealText>
        </h2>

        {/* Form fields — each input rises in one after the other */}
        <form onSubmit={sendEmail}>
          <motion.div
            className='flex flex-col items-center lg:gap-x-4 gap-y-4'
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.input
              className='italic w-[280px] sm:w-[300px] lg:w-[500px] h-12 rounded-3xl text-center'
              type="text" name="name" id="name" placeholder=' Ime' required
              variants={itemVariants}
            />
            <motion.input
              className='italic w-[280px] sm:w-[300px] lg:w-[500px] h-12 rounded-3xl text-center'
              type="text" name="surname" id="surname" placeholder=' Prezime' required
              variants={itemVariants}
            />
            <motion.input
              className='italic w-[280px] sm:w-[300px] lg:w-[500px] h-12 rounded-3xl text-center'
              type="email" name="email" id="email" placeholder=' E-mail' required
              variants={itemVariants}
            />
            <motion.button
              className='tracking-widest h-12 rounded-full w-[200px] bg-[#772F6F] px-[42px] text-white font-semibold outline-none content-center'
              type="submit"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 0 22px 6px rgba(119,47,111,0.55)' }}
              whileTap={{ scale: 0.97 }}
            >
              Dolazim!
            </motion.button>
          </motion.div>
        </form>

        <p className='pt-10 text-lg lg:text-3xl md:pt-0 text-white'>
          <RevealText delay={0.1}>pep.konferencija@gmail.com</RevealText>
        </p>

      </div>
    </section>
  )
}

export default ContactUs
