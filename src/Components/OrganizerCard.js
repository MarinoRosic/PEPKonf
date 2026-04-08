import { motion } from 'framer-motion';
import RevealText from './RevealText';
import SectionDivider from './SectionDivider';
import RotatingAvatar from './RotatingAvatar';

// ─── Avatar size ────────────────────────────────────────────────────────────
// Tweak these Tailwind classes to resize the avatar across breakpoints.
// Format: w-XX h-XX per breakpoint (they must match so the circle stays round).
const AVATAR_SIZE = 'w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-56 lg:h-56';
// ────────────────────────────────────────────────────────────────────────────

const cardVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.82, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

// subtitle — optional. When provided, renders a pink line below the name.
// noDivider — optional. Suppresses the bottom SectionDivider.
// borderColor — optional. Passed to RotatingAvatar ('pink' | 'purple' | 'gold').
// avatarSize — optional. Tailwind size classes, overrides the default AVATAR_SIZE.
const OrganizerCard = ({ name, img, text, subtitle, noDivider = false, borderColor = 'pink', avatarSize, objectPosition }) => {
  return (
    <>
      <motion.div
        className='flex flex-row items-center gap-x-6 sm:gap-x-8 lg:gap-x-12 px-6 sm:px-10 lg:px-16 py-6 lg:py-8 w-full max-w-6xl mx-auto'
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Avatar — shrink-0 prevents it from squishing; resize via AVATAR_SIZE above */}
        <motion.div
          variants={imageVariants}
          className={`shrink-0 ${avatarSize ?? AVATAR_SIZE}`}
        >
          <RotatingAvatar img={img} borderColor={borderColor} objectPosition={objectPosition} />
        </motion.div>

        <div className='flex flex-col sm:gap-y-8 gap-y-2 justify-center min-w-0'>
          <h2 className='pb-2 text-2xl sm:text-3xl lg:text-4xl text-white span'>
            <RevealText delay={0.2}>{name}</RevealText>
          </h2>

          {/* Dean subtitle — only renders when the subtitle prop is passed */}
          {subtitle && (
            <motion.p
              className='pb-3 text-base sm:text-lg font-semibold'
              style={{ color: '#db9bd5' }}
              variants={textVariants}
            >
              {subtitle}
            </motion.p>
          )}

          <motion.p
            className='text-base sm:text-lg md:text-xl lg:text-2xl text-white'
            variants={textVariants}
          >
            {text}
          </motion.p>
        </div>
      </motion.div>
      {!noDivider && <SectionDivider />}
    </>
  );
};

export default OrganizerCard;
