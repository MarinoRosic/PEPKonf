import pepLogo from "../assets/images/PEPLogo3.png";
import stoliceMob from "../assets/images/PEP-naslovna-mob.jpg";
import stoliceDesktop from "../assets/images/PEP-naslovna.jpg";
import { motion } from 'framer-motion';
import SplitText from './SplitText';

const HomeSection = () => {
  return (
    <section className='relative h-[100vh] overflow-hidden flex flex-col'>

      {/* Ken Burns — slow zoom-out from slight scale over 10s */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'linear' }}
      >
        <picture>
          <source media="(max-width: 1023px)" srcSet={stoliceMob} />
          <img
            src={stoliceDesktop}
            alt=""
            fetchpriority="high"
            className="w-full h-full object-cover object-center"
          />
        </picture>
      </motion.div>

      {/* Cinematic gradient overlay — dark top + bottom, light mid */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/20 to-black/65" />

      {/* Logo — top center, smaller, slides down */}
      <motion.div
        className='flex justify-center pt-10'
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <img className='h-[90px] w-[90px] lg:h-[70px] lg:w-[70px]' src={pepLogo} alt="PEP Logo" />
      </motion.div>

      {/* Main content — left-aligned editorial layout */}
      <div className='flex flex-col justify-center flex-1 px-8 lg:px-20'>

        {/* Eyebrow badge — date + location, fades up before headline */}
        <motion.div
          className='mb-6 inline-flex items-center gap-2.5 border border-white/30 rounded-full px-4 py-1.5 self-start backdrop-blur-sm'
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className='w-1.5 h-1.5 rounded-full bg-[#db9bd5] inline-block' />
          <span className='text-xs font-semibold tracking-widest text-white uppercase'>
            16 – 17 Travnja 2026 · Dubrovnik
          </span>
        </motion.div>

        {/* Headline — SplitText kept, left-aligned, big */}
        <h1 className='text-5xl font-extrabold sporka sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.92] tracking-tight mb-8'>
          <SplitText delay={0.3}>Budi i ti dio</SplitText>
          <br />
          <SplitText delay={0.8}>PRedobre PRiče.</SplitText>
        </h1>

        {/* CTA — scrolls to contact/registration */}
        <motion.a
          href="#kontakt"
          className='inline-flex items-center gap-3 px-8 py-3.5 bg-[#772f6f] text-white font-bold tracking-widest rounded-full text-sm uppercase self-start hover:bg-[#db9bd5] transition-colors duration-300'
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Prijavi se
        </motion.a>
      </div>

      {/* Scroll indicator — animated line pulses down from text */}
      <motion.div
        className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
      >
        <span className='text-[10px] tracking-[0.2em] text-white/50 uppercase font-semibold'>Scroll</span>
        <motion.div
          className='w-px h-8 bg-white/40 origin-top'
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.4 }}
        />
      </motion.div>

    </section>
  );
};

export default HomeSection;
