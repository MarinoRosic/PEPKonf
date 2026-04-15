import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionDivider from './SectionDivider'

const allThemes = [
  'Odgovorno komuniciranje',
  'Odnosi s javnošću',
  'Korporativno komuniciranje',
  'Novinarstvo i mediji',
  'Karijerni put',
  'Poslovanje s klijentima',
  'Poduzetništvo',
]

const ThemeItem = ({ theme, index, isInView }) => (
  <motion.div
    initial={{ y: 24, opacity: 0 }}
    animate={isInView ? { y: 0, opacity: 1 } : {}}
    transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.45 + index * 0.09 }}
    className={`flex items-center gap-4 py-6 ${index === 0 ? 'border border-white/20' : 'border-t border-white/10'}`}
  >
    <span
      className="text-xs font-bold shrink-0 select-none tabular-nums tracking-widest"
      style={{ color: 'rgba(219, 155, 213, 0.4)' }}
    >
      {String(index + 1).padStart(2, '0')}
    </span>
    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-main leading-snug">
      {theme}
    </span>
  </motion.div>
)

const PEPThemes = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' })

  return (
    <>
      <SectionDivider label="PEP 2026" labelPosition="left" className="px-4" />
      <section ref={ref} className="min-h-screen flex flex-col justify-start pt-24 pb-16 font-main">

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

        {/* Themes list */}
        <div className="px-8 lg:px-20 grid grid-cols-1">

          {/* "Glavna tema PEP2026" label above first row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            className="flex items-center gap-3 w-full pb-2"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#db9bd5]" />
            <span className="text-[#db9bd5] text-[10px] tracking-[0.35em] uppercase font-medium whitespace-nowrap shrink-0">
              Glavna tema PEP2026
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#db9bd5]" />
          </motion.div>

          {allThemes.map((theme, i) => (
            <ThemeItem key={theme} theme={theme} index={i} isInView={isInView} />
          ))}
        </div>

      </section>
      <SectionDivider className="px-4 mt-8" labelPosition="right" label="Odgovorno komuniciranje" />
    </>
  )
}

export default PEPThemes
