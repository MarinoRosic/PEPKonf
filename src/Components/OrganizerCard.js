import { motion } from 'framer-motion';
import RevealText from './RevealText';
import SectionDivider from './SectionDivider';
import RotatingAvatar from './RotatingAvatar';

// Outer card — fires whileInView, then orchestrates children via stagger.
// The card itself has no visual animation (no opacity/transform on it);
// it's purely an orchestration container.
const cardVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.22,
    },
  },
};

// Same treatment as AboutUsCard — scale + blur + fade.
// All circular portrait photos animate the same way throughout the site.
const imageVariants = {
  hidden: { opacity: 0, scale: 0.82, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

// Used by the description text — same fade-up as body paragraphs elsewhere.
// No blur on text, no horizontal slide.
const textVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const OrganizerCard = ({ name, img, text }) => {
  return (
    // overflow-hidden removed from this div intentionally —
    // filter: blur(10px) renders slightly outside the element's layout box.
    // overflow-hidden would hard-clip that blur, giving the photo a sharp-edged
    // cutoff instead of a soft fade. The parent section still has overflow-hidden
    // so nothing leaks outside the page.
    <>
    <motion.div
      className='flex flex-col px-8 lg:px-10 py-8 lg:flex-row w-full'
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='lg:w-[50%]'>
        <motion.div
          variants={imageVariants}
          className="w-[310px] h-[310px] mx-auto"
        >
          <RotatingAvatar img={img} />
        </motion.div>
      </div>

      <div className='pt-10 lg:w-[50%]'>
        {/* Name — RevealText can't join the variant system (it's not a motion element),
            so it gets a manual delay that slots it between image (0.1s) and description (0.25s).
            delay: 0.2s → words start appearing just as the image is resolving. */}
        <h2 className='pb-10 text-4xl text-white span'>
          <RevealText delay={0.3}>{name}</RevealText>
        </h2>

        {/* Description — second variant child (stagger index 1), fires at 0.25s.
            Fades up after the name has started revealing — follows reading order. */}
        <motion.p
          className='text-2xl text-white'
          variants={textVariants}
        >
          {text}
        </motion.p>
      </div>
    </motion.div>
    <SectionDivider />
    </>
  );
};

export default OrganizerCard;
