import React from 'react'
import Lecturer from './Lecturer'
import { AnimatePresence, motion } from 'framer-motion';
import { useYear } from '../Components/YearContext';
import { lecturersByYear } from '../data/lecturersData'; 

const LecturersSection = () => {
  const { selectedYear } = useYear();

  const data = lecturersByYear[selectedYear] || {
    panelisti: [], radionica: [], predavaci: [], moderatorice: []
  };

  const hasContent =
    data.panelisti?.length > 0 ||
    data.radionica?.length > 0 ||
    data.predavaci?.length > 0 ||
    data.moderatorice?.length > 0;

  return (
    <section className="flex flex-col h-full pt-16 border-t-2 border-t-[#db9bd5] overflow-hidden">
      {!hasContent ? (
        <motion.div
          className="text-center text-white text-2xl py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Coming soon... PEPKonf {selectedYear}
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}                     // ← important: triggers animation on year change
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],           // similar to your page transition curve
            }}
            className="w-full"
          >
            {data.panelisti?.length > 0 && (
              <div>
                <motion.h1
                  className="text-5xl text-center text-white xl:text-7xl"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
                >
                  Panelisti:
                </motion.h1>
                <div className="flex flex-row flex-wrap pt-20 pb-12 border-b-2 border-b-[#db9bd5] gap-y-10 lg:gap-y-20">
                  {data.panelisti.map((props, i) => (
                    <Lecturer key={i} {...props} />
                  ))}
                </div>
              </div>
            )}

            {data.radionica?.length > 0 && (
              <div className="pt-14">  {/* ← added pt-14 like in your original */}
                <motion.h1
                  className="text-5xl text-center text-white xl:text-7xl"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
                >
                  Radionica:
                </motion.h1>
                <div className="flex flex-row flex-wrap pt-20 pb-12 border-b-2 border-b-[#db9bd5] gap-y-10 lg:gap-y-20">
                  {data.radionica.map((props, i) => (
                    <Lecturer key={i} {...props} />
                  ))}
                </div>
              </div>
            )}

            {data.predavaci?.length > 0 && (
              <div className="pt-14">
                <motion.h1
                  className="text-5xl text-center text-white xl:text-7xl"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
                >
                  Predavači:
                </motion.h1>
                <div className="flex flex-row flex-wrap pt-20 pb-12 border-b-2 border-b-[#db9bd5] gap-y-10 lg:gap-y-20">
                  {data.predavaci.map((props, i) => (
                    <Lecturer key={i} {...props} />
                  ))}
                </div>
              </div>
            )}

            {data.moderatorice?.length > 0 && (
              <div className="pt-14">
                <motion.h1
                  className="text-5xl text-center text-white xl:text-7xl"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
                >
                  Moderatorice:
                </motion.h1>
                <div className="flex flex-row flex-wrap pt-20 pb-12 border-b-2 border-b-[#db9bd5] gap-y-10 lg:gap-y-20">
                  {data.moderatorice.map((props, i) => (
                    <Lecturer key={i} {...props} />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};

export default LecturersSection
