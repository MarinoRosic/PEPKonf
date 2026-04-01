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

const ThemeRow = ({ theme, index, isInView }) => (
  <div className="overflow-hidden flex-1 flex flex-col">
    <motion.div
      className="flex-1 flex flex-col"
      initial={{ y: '100%', opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.07 }}
    >
      <motion.div
        className="relative flex-1 overflow-hidden border-t border-white/10 cursor-default"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* Hover fill — slides in from left */}
        <motion.div
          className="absolute inset-0 pointer-events-none origin-left"
          style={{ backgroundColor: 'rgba(219, 155, 213, 0.06)' }}
          variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        <div className="relative h-full flex items-center gap-3 md:gap-5 px-8 lg:px-20 min-h-[64px]">
          <span
            className="text-3xl md:text-4xl font-bold shrink-0 w-10 md:w-14 select-none"
            style={{ color: 'rgba(219, 155, 213, 0.2)' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <motion.span
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-white font-main"
            variants={{ rest: { x: 0 }, hover: { x: 10 } }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {theme}
          </motion.span>

          {/* <motion.span
            className="ml-auto text-2xl md:text-3xl shrink-0"
            style={{ color: 'rgba(219, 155, 213, 0.5)' }}
            variants={{ rest: { x: -10, opacity: 0 }, hover: { x: 0, opacity: 1 } }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            →
          </motion.span> */}
        </div>
      </motion.div>
    </motion.div>
  </div>
)

const PEPThemes = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })

  return (
    <>
      <SectionDivider label="PEP 2026" labelPosition="left" className="px-4" />
      <section ref={ref} className="min-h-screen flex flex-col py-10 font-main">

        <div className="px-8 pb-8 lg:px-20">
          <h2 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            PEP teme:
          </h2>
        </div>

        <div className="flex-1 flex flex-col border-b border-white/10">
          {themes.map((theme, i) => (
            <ThemeRow key={theme} theme={theme} index={i} isInView={isInView} />
          ))}
        </div>

      </section>
      <SectionDivider className="px-4 mt-8" labelPosition="right" label="Odnosi s javnošću" />
    </>
  )
}

export default PEPThemes
