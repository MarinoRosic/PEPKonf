import { useYear } from '../Components/YearContext';
import {  motion } from 'framer-motion';

const YEARS = [2026, 2025, 2024, 2023]; // adjust as needed

export default function YearButtons() {
  const { selectedYear, setSelectedYear } = useYear();

  return (
    <>
        <section className='h-full pt-8 border-t-2 border-t-[#db9bd5] overflow-hidden'>
            <motion.div 
            className='overflow-hidden'>
                <h1 
                className='content-center text-3xl font-bold text-center text-white md:text-6xl xl:text-7xl lg:mt-8'
                >PEP Konf po godinama:</h1>
            </motion.div>
            <div className="relative py-8 md:py-12 flex justify-center items-center">
            {/* Optional subtle background glow – kept but smaller */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-950/15 via-indigo-950/5 to-purple-950/15 blur-lg opacity-60 rounded-full max-w-xs sm:max-w-lg mx-auto" />

            <div className="relative flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 px-4">
                {YEARS.map((year) => {
                const isActive = selectedYear === year;

                return (
                    <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`
                        min-w-[68px] px-4 py-2.5 sm:min-w-[80px] sm:px-5 sm:py-3
                        rounded-full font-medium text-base sm:text-lg md:text-xl tracking-wide
                        transition-all duration-300 ease-out
                        border-2
                        ${isActive
                        ? 'border-[#db9bd5] text-white bg-gradient-to-br from-[#db9bd5]/25 to-purple-800/20 shadow-[0_0_20px_rgba(219,155,213,0.4)] scale-105'
                        : 'border-purple-700/50 text-purple-200/90 hover:text-white hover:border-[#db9bd5]/70 hover:bg-purple-950/30 hover:shadow-[0_0_12px_rgba(219,155,213,0.3)]'
                        }
                        backdrop-blur-[3px]
                    `}
                    >
                    {year}
                    </button>
                );
                })}
            </div>
            </div>
        </section>
    </>
  );
}