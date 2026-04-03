import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionDivider from './SectionDivider'
import prvoImg from '../assets/images/PRvo-odgovornost.png'

const themes = [
  'Odnosi s javnošću',
  'Event menadžment',
  'Novinarstvo',
  'Karijerni put',
  'Odgovorno komuniciranje',
  'Self branding',
  'Javni nastup',
  'Influencing'
]

const ThemeItem = ({ theme, index, isInView }) => (
  <motion.div
    initial={{ y: 24, opacity: 0 }}
    animate={isInView ? { y: 0, opacity: 1 } : {}}
    transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94], delay: 1.1 + index * 0.07 }}
    className="flex items-baseline gap-4 py-6 border-t border-white/10"
  >
    <span
      className="text-xs font-bold shrink-0 select-none tabular-nums tracking-widest"
      style={{ color: 'rgba(219, 155, 213, 0.4)' }}
    >
      {String(index + 2).padStart(2, '0')}
    </span>
    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-main leading-snug">
      {theme}
    </span>
  </motion.div>
)

const PEPThemes = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })

  return (
    <>
      <SectionDivider label="PEP 2026" labelPosition="left" className="px-4" />
      <section ref={ref} className="min-h-screen flex flex-col justify-center py-16 font-main">

        {/* Title */}
        <div className="px-8 lg:px-20 pb-10">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl font-bold text-white md:text-6xl lg:text-7xl"
          >
            PEP teme:
          </motion.h2>
        </div>

        {/* #1 Main Theme */}
        <div className="px-8 lg:px-20 mb-2">

          {/* PRvo: label */}
          <motion.div
            initial={{ x: -16, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.25 }}
            className="flex items-center gap-2 mb-4"
          >
            <span
              className="text-xs font-bold tabular-nums tracking-widest select-none"
              style={{ color: 'rgba(219, 155, 213, 0.4)' }}
            >
              01
            </span>
            <span className="text-sm font-bold tracking-widest">
              <span style={{ color: 'rgba(219, 155, 213, 1)' }}>PR</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.45)' }}>vo:</span>
            </span>
          </motion.div>

          {/* Hero row */}
          <motion.div
            initial={{ y: 32, opacity: 0 }}
            animate={isInView
              ? {
                  y: 0,
                  opacity: 1,
                  boxShadow: [
                    '0 0 20px rgba(219,155,213,0.1), 0 0 40px rgba(219,155,213,0.05)',
                    '0 0 55px rgba(219,155,213,0.35), 0 0 90px rgba(219,155,213,0.15)',
                    '0 0 20px rgba(219,155,213,0.1), 0 0 40px rgba(219,155,213,0.05)',
                  ],
                }
              : { y: 32, opacity: 0 }}
            transition={{
              y: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.38 },
              opacity: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.38 },
              boxShadow: { duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1 },
            }}
            className="relative overflow-hidden border border-white/10 py-8 sm:py-10"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover"
              style={{ backgroundImage: `url(${prvoImg})`, backgroundPosition: 'center 25%' }}
            />

            {/* Dark vignette overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.55) 100%)',
              }}
            />

            {/* ODGOVORNOST */}
            <div className="relative flex items-center justify-center">
              <motion.span
                animate={{ opacity: [0.82, 1, 0.82], scale: [1, 1.045, 1] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-[0.2em] uppercase font-main select-none"
              >
                ODGOVORNOST
              </motion.span>
            </div>
          </motion.div>
        </div>

        {/* Remaining themes — single column */}
        <div className="px-8 lg:px-20 grid grid-cols-1">
          {themes.map((theme, i) => (
            <ThemeItem key={theme} theme={theme} index={i} isInView={isInView} />
          ))}
        </div>

      </section>
      <SectionDivider className="px-4 mt-8" labelPosition="right" label="Odnosi s javnošću" />
    </>
  )
}

export default PEPThemes
