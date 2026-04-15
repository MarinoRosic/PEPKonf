import { useMemo, useRef, useState } from 'react';
import Lecturer from './Lecturer';
import SectionDivider from './SectionDivider';
import { motion } from 'framer-motion';
import RevealText from './RevealText';
import { useYear } from '../Components/providers/YearContext';
import { lecturersByYear } from '../data/lecturersData';
import RotatingAvatar from './RotatingAvatar';
import LecturerModal from './LecturerModal';
import { useReducedMotion } from '../hooks/useReducedMotion';

const CURRENT_YEAR = new Date().getFullYear();

// Static constants — defined outside so Framer Motion gets stable object references
const GHOST_GRADIENTS = [
  'conic-gradient(from 0deg,   #db9bd5, #ffffff, #db9bd5, #772F6F, #3d1a57, #772F6F, #db9bd5)',
  'conic-gradient(from 120deg, #db9bd5, #ffffff, #db9bd5, #772F6F, #3d1a57, #772F6F, #db9bd5)',
  'conic-gradient(from 240deg, #db9bd5, #ffffff, #db9bd5, #772F6F, #3d1a57, #772F6F, #db9bd5)',
  'conic-gradient(from 60deg,  #db9bd5, #ffffff, #db9bd5, #772F6F, #3d1a57, #772F6F, #db9bd5)',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const ghostRowVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const ghostItemVariants = {
  hidden:  { opacity: 0, scale: 0.7, filter: 'blur(10px)' },
  visible: { opacity: 1, scale: 1,   filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const ghostTextVariants = {
  hidden:  { opacity: 0, y: 18, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.5,  ease: [0.16, 1, 0.3, 1] } },
};

const ghostSubtextVariants = {
  hidden:  { opacity: 0, y: 12, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};


// ── Avatar-only grid for the current year ────────────────────────────────────
const AvatarGrid = ({ data, year }) => {
  const reduceMotion = useReducedMotion();
  const [selected, setSelected] = useState(null);
  const lastSelected = useRef(null);
  if (selected) lastSelected.current = selected;

  // On weak devices drop blur — it's the most expensive filter operation
  const ghostItem = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : ghostItemVariants;
  const ghostText = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : ghostTextVariants;
  const ghostSubtext = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : ghostSubtextVariants;

  const allGroups = useMemo(() => [
    ...(data.panelisti    ?? []),
    ...(data.radionica    ?? []),
    ...(data.predavaci    ?? []),
    ...(data.moderatorice ?? []),
  ], [data]);

  const allPersons = useMemo(() =>
    allGroups.flatMap(item => item.members ?? [item]),
  [allGroups]);

  return (
    <>
      <LecturerModal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        {...(lastSelected.current || {})}
      />

      {allPersons.length > 0 && (
        <h1 className="text-5xl text-center text-white md:text-6xl lg:text-7xl w-full px-8 lg:px-20">
          <RevealText>PRedavači</RevealText>
        </h1>
      )}
      <div className="flex-1 flex items-center">
        {allPersons.length > 0 ? (
          <div className="w-full">
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-x-8 gap-y-6 sm:gap-x-6 sm:gap-y-5 lg:gap-x-8 lg:gap-y-7 px-8 lg:px-20 pt-8 lg:pt-16 pb-16 lg:pb-28 [&>*:last-child]:col-start-2 sm:[&>*:last-child]:col-start-auto">
              {allPersons.map((person, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-full min-h-[2rem] sm:min-h-[2.25rem] flex items-end justify-center px-1 pb-1.5">
                    <p className="text-[9px] sm:text-[11px] text-[#db9bd5]/70 text-center leading-tight font-light tracking-wide">
                      {person.lecturer}
                    </p>
                  </div>
                  <div className="w-full h-3 sm:h-4 border-t border-l border-r border-[#db9bd5]/30 rounded-t mb-1.5" />
                  <motion.div
                    className="relative aspect-square cursor-pointer w-full"
                    initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.75 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: reduceMotion ? 0 : i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ willChange: reduceMotion ? 'auto' : 'transform, opacity' }}
                    onClick={() => setSelected(person)}
                  >
                    <RotatingAvatar img={person.img} name={person.lecturer} borderColor={person.borderColor} />
                    <div className="absolute bottom-0 right-0 h-5 w-5 sm:h-7 sm:w-7 rounded-full bg-[#db9bd5] flex items-center justify-center shadow-lg shadow-[#db9bd5]/30 z-10">
                      <span className="text-[#261539] font-bold leading-none text-[10px] sm:text-sm">i</span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        ) : (
        /* Empty state — ghost avatars + "Uskoro" */
        <motion.div
          className="w-full flex flex-col items-center justify-center gap-12 pb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="flex gap-3 md:gap-10 w-full px-6 sm:px-16 md:w-auto md:px-0"
            variants={ghostRowVariants}
          >
            {GHOST_GRADIENTS.map((gradient, i) => (
              <motion.div
                key={i}
                className="relative flex-1 aspect-square md:flex-none md:h-[200px] md:w-[200px] rounded-full"
                variants={ghostItem}
                style={{ filter: 'drop-shadow(0 0 10px rgba(219,155,213,0.35))' }}
              >
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ background: gradient, animation: reduceMotion ? 'none' : 'ring-spin 4s linear infinite', willChange: reduceMotion ? 'auto' : 'transform' }}
                />
                <div className="absolute rounded-full bg-[#261539]" style={{ inset: 5, zIndex: 1 }} />
                <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
                  <span className="text-2xl md:text-3xl font-thin text-[#db9bd5] opacity-60 select-none">?</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="text-3xl lg:text-5xl font-thin text-white tracking-widest uppercase"
            variants={ghostText}
          >
            Uskoro
          </motion.p>
          <motion.p
            className="text-lg lg:text-4xl text-[#db9bd5] tracking-wide -mt-5 text-center max-w-2xl lg:max-w-6xl px-6"
            variants={ghostSubtext}
          >
            PRedavači PEPKonf {year} bit će objavljeni uskoro.
          </motion.p>
        </motion.div>
        )}
      </div>
    </>
  );
};
// ─────────────────────────────────────────────────────────────────────────────

const LecturersSection = () => {
  const { selectedYear } = useYear();

  const data = lecturersByYear[selectedYear] || {
    panelisti: [], radionica: [], predavaci: [], moderatorice: [],
  };

  const hasPanelisti  = data.panelisti?.length > 0;
  const hasRadionica  = data.radionica?.length > 0;
  const hasPredavaci  = data.predavaci?.length > 0;
  const hasContent    = hasPanelisti || hasRadionica || hasPredavaci || data.moderatorice?.length > 0;

  const isCurrentYear = selectedYear === CURRENT_YEAR;
  if (!isCurrentYear && !hasContent) return null;

  return (
    <section className={`relative flex flex-col ${isCurrentYear ? 'min-h-screen' : ''} pt-16 overflow-hidden`}>
      {isCurrentYear && <AvatarGrid data={data} year={selectedYear} />}

      {!isCurrentYear && hasContent && (
        <>
          {hasPanelisti && (
            <div>
              <h1 className="text-5xl text-center text-white md:text-6xl lg:text-7xl">
                <RevealText>Panelisti</RevealText>
              </h1>
              <div className="flex flex-row flex-wrap pt-20 pb-12 gap-y-10 lg:gap-y-20">
                {data.panelisti.map((props, i) => (
                  <Lecturer key={i} index={i} {...props} />
                ))}
              </div>
              {(hasRadionica || hasPredavaci) && <SectionDivider className="px-4" />}
            </div>
          )}

          {hasRadionica && (
            <div className="pt-14">
              <h1 className="text-5xl text-center text-white md:text-6xl lg:text-7xl">
                <RevealText>Radionica</RevealText>
              </h1>
              <div className="flex flex-row flex-wrap pt-20 pb-12 gap-y-10 lg:gap-y-20">
                {data.radionica.map((props, i) => (
                  <Lecturer key={i} index={i} {...props} />
                ))}
              </div>
              {hasPredavaci && <SectionDivider className="px-4" />}
            </div>
          )}

          {hasPredavaci && (
            <div className="pt-14">
              <h1 className="text-5xl text-center text-white md:text-6xl lg:text-7xl">
                <RevealText>Predavači</RevealText>
              </h1>
              <div className="flex flex-row flex-wrap pt-20 pb-12 gap-y-10 lg:gap-y-20">
                {data.predavaci.map((props, i) => (
                  <Lecturer key={i} index={i} {...props} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default LecturersSection;
