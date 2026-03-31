import { motion } from 'framer-motion';
import { FaLinkedin, FaGlobe } from 'react-icons/fa';
import RevealText from './RevealText';
import RotatingAvatar from './RotatingAvatar';

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

const Lecturer = ({ img, borderColor, lecturer, title, linkedIN, web, index = 0 }) => {
  return (
    <motion.div
      className="w-full sm:flex-1"
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Photo — no separate animation, it IS the card. Appears with the blur+fade. */}
      <div className="h-[250px] w-[250px] lg:h-[320px] lg:w-[320px] mx-auto">
        <RotatingAvatar img={img} borderColor={borderColor} />
      </div>

      <div className="flex flex-col">
        {/* Name — RevealText manages its own animation (word-by-word slide-up from a mask).
            It can't join the variant/staggerChildren system since it's not a motion element.
            Instead we give it a manually computed delay:
              index * 0.08  → same base delay as the card itself (card 0 = 0s, card 1 = 0.08s)
              + 0.2         → starts 0.2s after the card begins, so name appears while card
                              is still settling (feels like content filling in, not two separate events)
            The title (below) starts at index * 0.08 + 0.3 via delayChildren,
            so the name leads by 0.1s — enough to read it before the title arrives. */}
        <p className="pt-5 text-lg font-medium text-center text-white">
          <RevealText delay={index * 0.12 + 0.25}>{lecturer}</RevealText>
        </p>

        {/* Title — first staggerChildren variant child.
            Starts at: card_delay + delayChildren = index*0.08 + 0.3
            framer-motion finds this as the first motion descendant with matching variants
            and assigns it stagger index 0. */}
        <motion.p
          className="text-md font-thin text-center text-[#db9bd5] px-10"
          variants={textVariants}
        >
          {title}
        </motion.p>
      </div>

      {/* Icons — second staggerChildren variant child, stagger index 1.
          Starts at: index*0.08 + 0.3 + 0.1 = index*0.08 + 0.4
          framer-motion propagates the "visible"/"hidden" state through the plain <div>
          wrappers above — it traverses the full React tree, not just direct children. */}
      <motion.div className="flex" variants={iconVariants}>
        <div className="flex flex-row pt-3 mx-auto">
          <div className="text-white h-[50px] w-[40px]">
            <a className="ikona" href={web}><FaGlobe size={30} /></a>
          </div>
          <div className="text-white h-[50px] w-[40px]">
            <a className="ikona" href={linkedIN}><FaLinkedin size={30} /></a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Lecturer;
