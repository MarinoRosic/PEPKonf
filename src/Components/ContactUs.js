import { useState } from 'react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { motion, AnimatePresence } from "framer-motion"
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

// Shared fade+rise — same visual language as Lecturer / OrganizerCard
const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
}

const ContactUs = () => {
  const [toast, setToast] = useState(null) // 'success' | 'error' | null

  const showToast = (type) => {
    setToast(type)
    setTimeout(() => setToast(null), 3000)
  }

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_PUBLIC_KEY
    ).then(
      () => { e.target.reset(); showToast('success') },
      ()  => showToast('error'),
    )
  }

  return (
    <section id="kontakt" className='flex flex-col min-h-screen overflow-hidden'>

      {/* Toast notification */}
      {/* DEV-ONLY toast tester — invisible in production builds */}
      {/* {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center gap-3 py-2" style={{ background: 'rgba(26,13,46,0.92)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(119,47,111,0.3)' }}>
          <span className="text-[10px] tracking-widest text-white/40 uppercase font-semibold">Dev</span>
          <button
            onClick={() => showToast('success')}
            className="px-4 py-1 rounded-full text-xs font-bold text-white"
            style={{ background: '#772F6F' }}
          >
            ✓ Success toast
          </button>
          <button
            onClick={() => showToast('error')}
            className="px-4 py-1 rounded-full text-xs font-bold text-white bg-red-700"
          >
            ✗ Error toast
          </button>
        </div>
      )} */}

      <AnimatePresence>
        {toast && (
          <div className="fixed top-12 sm:top-14 left-0 right-0 flex justify-center z-50 px-4">
            <motion.div
              key={toast}
              className="w-full max-w-sm relative overflow-hidden rounded-2xl shadow-2xl"
              style={{
                background: '#1a0d2e',
                border: '1px solid rgba(119,47,111,0.35)',
                boxShadow: toast === 'success'
                  ? '0 0 32px 4px rgba(119,47,111,0.35), 0 8px 32px rgba(0,0,0,0.5)'
                  : '0 0 32px 4px rgba(220,38,38,0.25), 0 8px 32px rgba(0,0,0,0.5)',
              }}
              initial={{ opacity: 0, y: -48, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -48, scale: 0.9 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Gradient top accent line — same motif as WWWCard underline */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: toast === 'success'
                  ? 'linear-gradient(to right, #db9bd5, #772F6F)'
                  : 'linear-gradient(to right, #f87171, #dc2626)' }}
              />

              <div className="flex items-center gap-3 px-4 sm:px-5 py-4">
                {/* Icon circle */}
                <div
                  className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: toast === 'success' ? 'rgba(119,47,111,0.25)' : 'rgba(220,38,38,0.2)' }}
                >
                  {toast === 'success' ? (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3.5 9.5L7 13L14.5 5.5" stroke="#db9bd5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M5 5L13 13M13 5L5 13" stroke="#f87171" strokeWidth="2.2" strokeLinecap="round"/>
                    </svg>
                  )}
                </div>

                {/* Message */}
                <p className="text-white text-sm sm:text-base font-semibold leading-snug">
                  {toast === 'success'
                    ? 'Prijava uspješna! Vidimo se na PEP-u!'
                    : 'Ups, nešto je pošlo po krivu. Pokušaj ponovno.'}
                </p>
              </div>

              {/* Progress bar — drains over 3.5 s showing time left */}
              <motion.div
                className="absolute bottom-0 left-0 h-[3px] rounded-full"
                style={{ background: toast === 'success'
                  ? 'linear-gradient(to right, #db9bd5, #772F6F)'
                  : 'linear-gradient(to right, #f87171, #dc2626)' }}
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 3, ease: 'linear' }}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <header className='mx-auto pt-14 lg:pt-16'>
        <h1 className='text-5xl font-extrabold text-white md:text-6xl lg:text-7xl'>
          <SplitText stagger={0.06}>Kontakt</SplitText>
        </h1>
      </header>

      <div className='flex flex-col flex-1 items-center justify-evenly mx-auto w-full pb-12'>

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

        <h2 className='text-3xl text-center text-white lg:text-5xl'>
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
              className='italic w-[320px] sm:w-[360px] lg:w-[500px] h-12 rounded-3xl text-center'
              type="text" name="name" id="name" placeholder=' Ime' required
              variants={itemVariants}
            />
            <motion.input
              className='italic w-[320px] sm:w-[360px] lg:w-[500px] h-12 rounded-3xl text-center'
              type="text" name="surname" id="surname" placeholder=' Prezime' required
              variants={itemVariants}
            />
            <motion.input
              className='italic w-[320px] sm:w-[360px] lg:w-[500px] h-12 rounded-3xl text-center'
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

        <a href='mailto:pep.konferencija@gmail.com' className='text-lg lg:text-3xl text-white hover:text-[#db9bd5] transition-colors duration-200'>
          <RevealText>pep.konferencija@gmail.com</RevealText>
        </a>

      </div>
    </section>
  )
}

export default ContactUs
