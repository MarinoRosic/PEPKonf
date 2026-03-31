import { motion } from 'framer-motion';
import AboutUsCard from './AboutUsCard';
import RevealText from './RevealText';
import SectionDivider from './SectionDivider';

// Orchestrates the two paragraphs — fires once in view, then staggers children.
// staggerChildren: 0.15 means paragraph 2 starts 0.15s after paragraph 1.
const textContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.22 } },
};

// Each paragraph fades up by 24px.
// No blur here — blurring long readable body text during transition looks messy.
// No horizontal slide — body copy should feel grounded, not flying in from somewhere.
const paraVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const AboutUsSection = () => {
  return (
    <>
      <SectionDivider className='px-4' label="Poduzetništvo" />
      <section className='flex flex-col h-full lg:h-[980px] py-12 lg:pt-8 overflow-hidden'>
      <header className='pt-10 mx-auto'>
        <h1 className='text-6xl font-extrabold text-white lg:text-8xl'>
          <RevealText>O nama</RevealText>
        </h1>
      </header>

      <div className='flex flex-col flex-1 lg:flex-row'>
        <div className='mx-auto my-auto sm:pt-10 lg:w-[40%]'>
          <AboutUsCard />
        </div>

        {/* Text container — whileInView fires when this block enters the viewport,
            then staggerChildren cascades the two paragraphs with a 0.15s gap.
            amount: 0.2 — fires when 20% of the text block is visible. */}
        <motion.div
          className='mx-auto my-auto lg:w-[60%]'
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className='px-8 pt-10 text-lg text-white lg:text-2xl text-balance font-main'
            variants={paraVariants}
          >
            Početkom 2022. ekipa studenata Odjela za komunikologiju na Sveučilištu u Dubrovniku, odlučila je zagrebati ispod površine PR-a.
            Odlučili su otići do Zagreba s projektom "Posjet u PR agencije - PR iz prve ruke". Ali, to nije bilo dovoljno.
            Na jednoj kavi, jedna od članica je dobila ideju - <u>donijeti iskustvo</u> u Dubrovnik.
          </motion.p>

          <motion.p
            className='px-8 pt-8 text-lg text-white lg:text-2xl text-balance font-main'
            variants={paraVariants}
          >
            I eto ih danas, s <span className='span'>PEP Konferencijom</span>, gdje ludilo i hrabrost rastu iz godine u godinu. Ideja koja je prerasla iz šalice kave sada osvaja Dubrovnik!
          </motion.p>
        </motion.div>
      </div>
    </section>
    <SectionDivider />
    </>
  );
};

export default AboutUsSection;
