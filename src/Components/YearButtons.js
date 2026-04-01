import { useYear } from '../Components/YearContext';
import { motion } from 'framer-motion';
import { useLenis } from 'lenis/react';

const YEARS = [ 2025, 2024, 2023];

export default function YearButtons() {
  const { selectedYear, setSelectedYear } = useYear();
  const lenis = useLenis();

  const handleYearClick = (year) => {
    setSelectedYear(year);

    setTimeout(() => {
      const startElement = document.getElementById('year-content-start');
      if (!startElement) return;

      if (lenis) {
        lenis.scrollTo(startElement, { duration: 1.2 });
      } else {
        // Fallback for mobile (Lenis disabled on touch)
        startElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <section
      className={`
        sticky top-0 z-20
        bg-[#0f0f1a]/92
        backdrop-blur-md
        border-b border-purple-900/50
        shadow-xl shadow-black/40
        pb-5 pt-4 md:pt-6
        transition-all duration-200
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="
            text-center text-2xl md:text-4xl font-bold text-white
            mb-5 md:mb-7
          "
          initial={{ opacity: 0.8, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          PEP Konf po godinama
        </motion.h1>

        <div className="relative flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          {/* optional soft glow */}
          <div
            className="
              absolute inset-0 -z-10
              bg-gradient-to-r from-purple-950/25 via-indigo-950/15 to-purple-950/25
              blur-xl opacity-70 rounded-full
              max-w-xs sm:max-w-md md:max-w-lg mx-auto
              pointer-events-none
            "
          />

          {YEARS.map((year) => {
            const isActive = selectedYear === year;

            return (
              <button
                key={year}
                onClick={() => handleYearClick(year)}
                className={`
                  min-w-[68px] px-4 py-2.5 sm:min-w-[80px] sm:px-5 sm:py-3
                  rounded-full font-medium text-base sm:text-lg md:text-xl tracking-wide
                  transition-all duration-300 ease-out
                  border-2 backdrop-blur-sm
                  ${
                    isActive
                      ? 'border-[#db9bd5] text-white bg-gradient-to-br from-[#db9bd5]/30 to-purple-900/25 shadow-[0_0_24px_rgba(219,155,213,0.5)] scale-105'
                      : 'border-purple-700/60 text-purple-200/90 hover:text-white hover:border-[#db9bd5]/70 hover:bg-purple-950/40 hover:shadow-[0_0_16px_rgba(219,155,213,0.4)]'
                  }
                `}
              >
                {year}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}