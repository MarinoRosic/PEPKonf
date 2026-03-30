import { motion } from 'framer-motion';
import RevealText from './RevealText';

// Fires when the row container enters view, then cascades each row downward.
// staggerChildren: 0.06 — tight stagger so the whole table builds in ~0.4s.
// A schedule should feel snappy, not slow. This isn't decoration — it's content.
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// Each row fades up by 16px. No blur — dense text rows look messy when blurred.
// Small y offset (16px vs 30px on cards) because rows are compact content units,
// not standalone visual elements.
const rowVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const Table = ({ datum, day }) => {
  return (
    <section className='flex flex-col w-full mb-20'>
      <h1 className='text-[#772F6F] text-3xl lg:text-6xl mx-auto pt-16 lg:pt-20 lg:pb-5 font-extrabold'>
        <RevealText>{datum}</RevealText>
      </h1>

      {/* Container orchestrates the row stagger.
          amount: 0.1 — fires when just 10% of the container is visible.
          The table can be tall (8 rows), so a low threshold ensures the animation
          starts as soon as the user reaches the top of the table, not halfway through. */}
      <motion.div
        className='flex flex-col content-center px-8 pt-12 mx-auto lg:pt-12'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {day.map((items, index) => {
          const { time, tema, prikazi, predavaci } = items;
          return (
            // Each row is a variant child — receives "hidden"/"visible" state
            // propagated from the container, staggered by index * 0.06s.
            <motion.div
              className='z-50 pb-3 text-white text-md lg:text-3xl'
              key={index}
              variants={rowVariants}
            >
              <span>{time} - </span>
              <span className='text-md lg:text-2xl roza'>{tema}</span>
              {prikazi && predavaci.map((item, key) => (
                <ul key={key} className='mx-10 my-3 text-sm text-white list-disc lg:text-lg'>
                  <li>{item}</li>
                </ul>
              ))}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Table;
