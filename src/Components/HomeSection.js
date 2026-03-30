import pepLogo from "../assets/images/PEPLogo3.png";
import { motion } from 'framer-motion';
import SplitText from './SplitText';

const HomeSection = () => {
  return (
    <section className='bg-stolice-BG-Mob lg:bg-stolice-BG h-[100vh] overflow-hidden bg-cover flex flex-col items-center gap-y-10'>

      {/* Logo — `animate` (not whileInView) because the hero is always visible at page load.
          whileInView fires when an element scrolls INTO the viewport, but the hero
          is already there — it would fire immediately and inconsistently.
          animate fires reliably on mount, every time. */}
      <motion.div
        className='mx-auto h-[33%] content-center'
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <img className='h-[200px] w-[200px]' src={pepLogo} alt="" />
      </motion.div>

      {/* Tagline — SplitText, great fit for short punchy display text.
          <br /> removed — SplitText only accepts plain string children.
          JSX elements inside it cause chars to be empty array → renders nothing.
          Text wraps naturally at this size; text-center handles alignment.
          delay={0.4} — starts after logo has mostly appeared (logo takes ~0.8s). */}
      <div className='h-[33%] content-center'>
        <h1 className='mx-auto text-4xl font-extrabold text-center sporka md:text-7xl lg:text-8xl'>
          <SplitText delay={0.3}>Budi i ti dio</SplitText>
          <br />
          <SplitText delay={0.8}>PRedobre PRiče.</SplitText>
        </h1>
      </div>

      {/* Date/location — SplitText with tighter stagger.
          This text is ~55 characters. Default stagger={0.05} would mean
          55 × 0.05s = 2.75s just for the stagger offset — too long.
          stagger={0.025} halves it to ~1.4s stagger, finishing at ~3s total from load.
          delay={1.2} — starts after the tagline has built enough to feel sequenced. */}
      <div className='h-[33%] mx-10 content-center'>
        <p className='text-xl italic font-thin text-center text-white'>
          <SplitText delay={1.2} stagger={0.025}>24. - 25. travnja 2025. Sveučilišni kampus u Dubrovniku</SplitText>
        </p>
      </div>

    </section>
  );
};

export default HomeSection;
