import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionDivider from './SectionDivider'

const themes = [
  'Odnosi s javnošću',
  'Event menadžment',
  'Novinarstvo',
  'Karijerni put',
  'Poduzetništvo',
  'Self branding',
  'Javni nastup',
]

const ThemeItem = ({ theme, index, isInView }) => (
  <motion.div
    initial={{ y: 24, opacity: 0 }}
    animate={isInView ? { y: 0, opacity: 1 } : {}}
    transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.06 }}
    className="flex items-baseline gap-4 py-6 border-t border-b border-white/10"
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
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })

  return (
    <>
      <SectionDivider label="PEP 2026" labelPosition="left" className="px-4" />
      <section ref={ref} className="min-h-screen flex flex-col justify-center py-16 font-main">

        <div className="px-8 lg:px-20 pb-10">
          <h2 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            PEP teme:
          </h2>
        </div>

        <div className="px-8 lg:px-20 grid grid-cols-1 md:grid-cols-2 md:gap-x-20">
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
