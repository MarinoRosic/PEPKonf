import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGlobe } from 'react-icons/fa';
import RevealText from './RevealText';
import RotatingAvatar from './RotatingAvatar';
import LecturerModal from './LecturerModal';

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1],
      delayChildren: 0.35,
      staggerChildren: 0.14,
    },
  }),
};

// Used by the title — subtle y drift (8px, not 30px: we're already inside a card
// that traveled 30px, so internal elements need far less distance to feel like motion).
const textVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

// Used by the icons row — no y movement, just a clean fade.
// Icons are small interactive elements; vertical drift on them looks erratic.
const iconVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const Lecturer = ({ img, borderColor, lecturer, title, bio, linkedIN, web, index = 0 }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <LecturerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        img={img}
        borderColor={borderColor}
        lecturer={lecturer}
        title={title}
        bio={bio}
        linkedIN={linkedIN}
        web={web}
      />

      <motion.div
        className="w-full sm:flex-1"
        variants={cardVariants}
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
      {/* Mobile: row (avatar left, text right). sm+: column (stacked). */}
      <div className="flex flex-row sm:flex-col items-center px-4 sm:px-0">
        {/* Photo — tappable to open modal */}
        <motion.div
          className="relative h-[90px] w-[90px] flex-shrink-0 sm:h-[250px] sm:w-[250px] lg:h-[320px] lg:w-[320px] sm:mx-auto cursor-pointer"
          onClick={() => setModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <RotatingAvatar img={img} borderColor={borderColor} />
          {/* Info badge */}
          <div className="absolute bottom-0 right-0 sm:bottom-1 sm:right-1 h-5 w-5 sm:h-7 sm:w-7 rounded-full bg-[#db9bd5] flex items-center justify-center shadow-lg shadow-[#db9bd5]/30 z-10">
            <span className="text-[#261539] font-bold leading-none text-[10px] sm:text-sm">i</span>
          </div>
        </motion.div>

        {/* Name + title + icons */}
        <div className="flex flex-col ml-4 sm:ml-0 sm:items-center">
          <p className="text-lg font-medium text-white sm:pt-5 sm:text-center">
            <RevealText delay={index * 0.12 + 0.25}>{lecturer}</RevealText>
          </p>

          <motion.p
            className="text-sm font-thin text-[#db9bd5] sm:text-md sm:text-center sm:px-10"
            variants={textVariants}
          >
            {title}
          </motion.p>

          <motion.div className="flex" variants={iconVariants}>
            <div className="flex flex-row pt-1 sm:pt-3 sm:mx-auto">
              <div className="text-white h-[40px] w-[35px] sm:h-[50px] sm:w-[40px]">
                <a className="ikona" href={web}><FaGlobe size={24} /></a>
              </div>
              <div className="text-white h-[40px] w-[35px] sm:h-[50px] sm:w-[40px]">
                <a className="ikona" href={linkedIN}><FaLinkedin size={24} /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Lecturer;
