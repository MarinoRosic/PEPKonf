import { useMemo } from 'react';
import Lecturer from './Lecturer';
import SectionDivider from './SectionDivider';
import { AnimatePresence, motion } from 'framer-motion';
import RevealText from './RevealText';
import { useYear } from '../Components/YearContext';
import { lecturersByYear } from '../data/lecturersData';

const LecturersSection = () => {
  const { selectedYear } = useYear();

  const data = lecturersByYear[selectedYear] || {
    panelisti: [], radionica: [], predavaci: [], moderatorice: [],
  };

  const hasContent =
    data.panelisti?.length > 0 ||
    data.radionica?.length > 0 ||
    data.predavaci?.length > 0 ||
    data.moderatorice?.length > 0;

  // Checked once at mount — we don't need to respond to resize since layout
  // doesn't meaningfully change mid-session on a conference site.
  // On mobile: year transitions use opacity-only (no x-axis slide).
  // Horizontal slides on mobile can cause overflow glitches and fight
  // against the vertical scroll direction. On desktop the x-slide
  // makes semantic sense — switching years feels like turning a page.
  const isMobile = useMemo(
    () => window.matchMedia('(max-width: 768px)').matches,
    []
  );

  return (
    <>
        <SectionDivider className='px-4' label="Event menadžment"/>
    <section className="flex flex-col h-full pt-16 overflow-hidden">
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
            key={selectedYear}
            // On mobile: pure fade (no x movement).
            // On desktop: slide from right on enter, slide to left on exit.
            // isMobile ? 0 : 60 — ternary picks the x value at runtime.
            initial={{ opacity: 0, x: isMobile ? 0 : 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isMobile ? 0 : -60 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >

            {data.panelisti?.length > 0 && (
              <div>
                <h1 className="text-5xl text-center text-white md:text-6xl lg:text-7xl">
                  <RevealText>Panelisti:</RevealText>
                </h1>

                <div className="flex flex-row flex-wrap pt-20 pb-12 gap-y-10 lg:gap-y-20">
                  {data.panelisti.map((props, i) => (
                    <Lecturer key={i} index={i} {...props} />
                  ))}
                </div>
                <SectionDivider className="px-4" label="Novinarstvo" labelPosition='right'/>
              </div>
            )}

            {data.radionica?.length > 0 && (
              <div className="pt-14">
                <h1 className="text-5xl text-center text-white md:text-6xl lg:text-7xl">
                  <RevealText>Radionica:</RevealText>
                </h1>
                <div className="flex flex-row flex-wrap pt-20 pb-12 gap-y-10 lg:gap-y-20">
                  {data.radionica.map((props, i) => (
                    <Lecturer key={i} index={i} {...props} />
                  ))}
                </div>
                <SectionDivider className="px-4" />
              </div>
            )}

            {data.predavaci?.length > 0 && (
              <div className="pt-14">
                <h1 className="text-5xl text-center text-white md:text-6xl lg:text-7xl">
                  <RevealText>Predavači:</RevealText>
                </h1>
                <div className="flex flex-row flex-wrap pt-20 pb-12 gap-y-10 lg:gap-y-20">
                  {data.predavaci.map((props, i) => (
                    <Lecturer key={i} index={i} {...props} />
                  ))}
                </div>
                <SectionDivider className="px-4" />
              </div>
            )}

            {data.moderatorice?.length > 0 && (
              <div className="pt-14">
                <h1 className="text-5xl text-center text-white md:text-6xl lg:text-7xl">
                  <RevealText>Moderatorice:</RevealText>
                </h1>
                <div className="flex flex-row flex-wrap pt-20 pb-12 gap-y-10 lg:gap-y-20">
                  {data.moderatorice.map((props, i) => (
                    <Lecturer key={i} index={i} {...props} />
                  ))}
                </div>
                <SectionDivider className="px-4" />
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      )}
    </section>
    </>
  );
};

export default LecturersSection;
