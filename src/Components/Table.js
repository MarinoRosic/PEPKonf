import { motion } from 'framer-motion';
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

const Table = ({ datum, day }) => {
  return (
    <section className='flex flex-col w-full mb-20'>
      <h1 className='text-[#772F6F] text-3xl md:text-4xl lg:text-6xl mx-auto pt-16 lg:pt-20 lg:pb-5 font-extrabold'>
        <RevealText>{datum}</RevealText>
      </h1>

      <div className='flex flex-col content-center px-8 pt-12 mx-auto lg:pt-12'>
        {day.map((items, index) => {
          const { time, tema, prikazi, fullName, lecturerData, moderator } = items;
          // Cap stagger at 0.32s so rows that are already visible don't wait too long.
          const delay = Math.min(index * 0.08, 0.32);
          return (
            <motion.div
              className='z-50 pb-3 text-white text-base md:text-xl lg:text-3xl'
              key={index}
              custom={delay}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
            >
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Table;
