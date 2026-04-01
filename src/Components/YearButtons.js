import { motion } from 'framer-motion'
import { useYear } from '../Components/YearContext'
import { useLenis } from 'lenis/react'

const YEARS = [2026, 2025, 2024, 2023]

export default function YearButtons() {
  const { selectedYear, setSelectedYear } = useYear()
  const lenis = useLenis()

  const handleYearClick = (year) => {
    setSelectedYear(year)
    setTimeout(() => {
      const startElement = document.getElementById('year-content-start')
      if (!startElement) return
      if (lenis) {
        lenis.scrollTo(startElement, { duration: 1.2 })
      } else {
        startElement.scrollIntoView({ behavior: 'smooth' })
      }
    }, 150)
  }

  return (
    <section className="sticky top-0 z-20 flex justify-center py-3 sm:py-5">
      <motion.div
        initial={{ y: -64, opacity: 0, scale: 0.9 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 340, damping: 26 }}
        className="
          relative flex items-center gap-0.5 sm:gap-1
          p-1 sm:p-1.5
          bg-white/[0.06] backdrop-blur-2xl
          border border-white/[0.08]
          rounded-full
          shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_0_0.5px_rgba(255,255,255,0.05)]
        "
      >
        {YEARS.map((year) => {
          const isActive = selectedYear === year
          return (
            <button
              key={year}
              onClick={() => handleYearClick(year)}
              className={`
                relative px-5 py-2 sm:px-7 sm:py-2.5 rounded-full
                text-sm sm:text-base font-semibold tracking-wide
                transition-colors duration-200
                ${isActive ? 'text-[#261539]' : 'text-white/50 hover:text-white/80'}
              `}
            >
              {isActive && (
                <motion.div
                  layoutId="year-pill"
                  className="absolute inset-0 rounded-full bg-[#db9bd5] shadow-[0_0_20px_rgba(219,155,213,0.35)]"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <span className="relative z-10">{year}</span>
            </button>
          )
        })}
      </motion.div>
    </section>
  )
}
