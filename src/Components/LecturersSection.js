import { useMemo } from 'react';
import Lecturer from './Lecturer';
import SectionDivider from './SectionDivider';
import { AnimatePresence, motion } from 'framer-motion';
import RevealText from './RevealText';
import { useYear } from '../Components/providers/YearContext';
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
          className="flex flex-col items-center py-20 gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
        >
          {/* Ghost avatar row */}
          <motion.div
            className="flex gap-4 md:gap-10"
            variants={{
              hidden:  {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {[
              'conic-gradient(from 0deg,   #db9bd5, #ffffff, #db9bd5, #772F6F, #3d1a57, #772F6F, #db9bd5)',
              'conic-gradient(from 120deg, #db9bd5, #ffffff, #db9bd5, #772F6F, #3d1a57, #772F6F, #db9bd5)',
              'conic-gradient(from 240deg, #db9bd5, #ffffff, #db9bd5, #772F6F, #3d1a57, #772F6F, #db9bd5)',
              'conic-gradient(from 60deg,  #db9bd5, #ffffff, #db9bd5, #772F6F, #3d1a57, #772F6F, #db9bd5)',
            ].map((gradient, i) => (
              <motion.div
                key={i}
                className="relative h-[90px] w-[90px] md:h-[120px] md:w-[120px] rounded-full flex-shrink-0"
                variants={{
                  hidden:  { opacity: 0, scale: 0.7, filter: 'blur(10px)' },
                  visible: { opacity: 1, scale: 1,   filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                style={{ filter: 'drop-shadow(0 0 10px rgba(219,155,213,0.35))' }}
              >
                {/* spinning ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ background: gradient, animation: 'ring-spin 4s linear infinite', willChange: 'transform' }}
                />
                {/* cutout */}
                <div className="absolute rounded-full bg-[#261539]" style={{ inset: 5, zIndex: 1 }} />
                {/* question mark */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
                  <span className="text-2xl md:text-3xl font-thin text-[#db9bd5] opacity-60 select-none">?</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Text */}
          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl font-thin text-white tracking-widest uppercase"
            variants={{
              hidden:  { opacity: 0, y: 18, filter: 'blur(8px)' },
              visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            Uskoro
          </motion.p>
          <motion.p
            className="text-sm font-thin text-[#db9bd5] tracking-wide -mt-5"
            variants={{
              hidden:  { opacity: 0, y: 12, filter: 'blur(6px)' },
              visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            Predavači PEPKonf {selectedYear} bit će objavljeni uskoro.
          </motion.p>
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
                  <RevealText>Panelisti</RevealText>
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
                  <RevealText>Radionica</RevealText>
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
                  <RevealText>Predavači</RevealText>
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
                  <RevealText>Moderatorice</RevealText>
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
