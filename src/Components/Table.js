import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RevealText from './RevealText';

// Each row animates independently when it scrolls into view.
// delay is capped at 0.32s so rows already on screen get a tight stagger
// and rows that arrive later don't wait unnecessarily long.
const rowVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const bgSweepVariants = {
  hidden: { scaleX: 0 },
  visible: (delay) => ({
    scaleX: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: delay + 0.08 },
  }),
};

const Table = ({ datum, day }) => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '0px 0px -5% 0px' });

  return (
    <section className='flex flex-col w-full mb-20'>
      <div ref={headerRef} className='flex items-center gap-4 w-full max-w-5xl mx-auto px-8 pt-16 lg:pt-20 lg:pb-5'>
        <motion.div
          className='flex-1 h-px bg-gradient-to-r from-transparent to-[#db9bd5]/50'
          style={{ originX: 1 }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={headerInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
        <h1 className='text-[#772F6F] text-3xl md:text-4xl lg:text-6xl font-extrabold shrink-0'>
          <RevealText>{datum}</RevealText>
        </h1>
        <motion.div
          className='flex-1 h-px bg-gradient-to-l from-transparent to-[#db9bd5]/50'
          style={{ originX: 0 }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={headerInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </div>

      <div className='flex flex-col gap-2 w-full max-w-5xl px-8 pt-12 mx-auto lg:pt-12'>
        {day.map((items, index) => {
          const { time, tema, prikazi, fullName, lecturerData, moderator } = items;
          // Cap stagger at 0.32s so rows that are already visible don't wait too long.
          const delay = Math.min(index * 0.08, 0.32);
          return (
            <motion.div
              key={index}
              className='relative overflow-hidden border-l-2 border-[#772F6F]/60 rounded-r-md px-4 py-3 text-white text-base md:text-xl lg:text-3xl'
              custom={delay}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
            >
              <motion.div
                className='absolute inset-0 bg-white/[0.04] rounded-r-md'
                variants={bgSweepVariants}
                style={{ originX: 0 }}
              />
              <div className='relative'>
                <span className={!prikazi ? 'roza' : ''}>{time} - </span>
                <span className='text-base md:text-lg lg:text-2xl roza'>{tema}</span>
                {prikazi && fullName && fullName.map((name, key) => (
                  <ul key={key} className='mx-10 my-3 text-sm list-disc lg:text-lg'>
                    <li>
                      {name && <span className='text-[#772F6F]'>{name}</span>}
                      {lecturerData?.[key] && (
                        <span className='text-white'>{name ? ', ' : ''}{lecturerData[key]}</span>
                      )}
                    </li>
                  </ul>
                ))}
                {moderator && (
                  <p className='mx-10 mt-1 text-xs lg:text-sm text-white/80'>
                    {moderator}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Table;
