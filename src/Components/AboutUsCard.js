import { motion } from 'framer-motion';
import aboutUsImg from "../assets/images/aboutUs.png";
import RevealText from './RevealText';
import RotatingAvatar from './RotatingAvatar';

// Scale up from 85% + blur sharpening + fade.
// Works particularly well on circles — feels like the portrait is materializing into focus.
// 0.85 is subtle enough not to look like a "pop", but noticeable enough to feel intentional.
const imageVariants = {
  hidden: { opacity: 0, scale: 0.82, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const AboutUsCard = () => {
  return (
    <div className='pt-12'>
      <motion.div
        className='h-[300px] w-[300px] mx-auto'
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        // amount: 0.3 — waits until 30% of the circle is visible.
        // A circle is tall; without this it could fire before the user even sees it.
        viewport={{ once: true, amount: 0.3 }}
      >
        <RotatingAvatar img={aboutUsImg} borderColor="purple" />
      </motion.div>

      {/* Caption — RevealText fires once the image has mostly settled.
          delay: 0.4s — the ease curve [0.16, 1, 0.3, 1] means the image is visually
          ~90% complete at 0.4s even though the full duration is 0.7s.
          So the caption starts appearing just as the image finishes landing. */}
      <p className='pt-8 px-8 text-xl lg:text-2xl font-bold text-center text-white lg:w-[400px] mx-auto'>
        <RevealText delay={0.3}>
          Studenti Sveučilišta u Dubrovniku, Fakultet medija i odnosa s javnošću
        </RevealText>
      </p>
    </div>
  );
};

export default AboutUsCard;
