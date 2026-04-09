import Organizers from '../Components/Organizers';
import AboutPEPSection from '../Components/AboutPEPSection';
import AboutUsSection from '../Components/AboutUsSection';
import ContactUs from '../Components/ContactUs';
import LecturersSection from '../Components/LecturersSection';
import Program from '../Components/Program';
import WWWSection from '../Components/WWWSection';
import PEPThemes from '../Components/PEPThemes';
import ScrollToTop from '../Components/ScrollToTop';
import Presentation from '../Components/Presentation';
import HomeSection from '../Components/HomeSection';
import SeeYou from '../Components/SeeYou';
import Partners from '../Components/Partners';
import transition from '../Transition';
import ComingSoon from '../Components/ComingSoon';
import { YearProvider, useYear } from '../Components/providers/YearContext';
import YearButtons from '../Components/YearButtons';
import Gallery from '../Components/Gallery';
import LenisProvider from '../Components/providers/LenisProvider';
import { AnimatePresence, motion } from 'framer-motion';
import SectionDivider from '../Components/SectionDivider';

const YearTransition = ({ children }) => {
  const { selectedYear } = useYear();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedYear}
        initial={{ opacity: 0, y: 40, scale: 0.98, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0,  scale: 1,    filter: 'blur(0px)' }}
        exit={{    opacity: 0, y: -40, scale: 0.98, filter: 'blur(8px)' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const Home = () => {
  return (
    <LenisProvider>
    <YearProvider>
      {/* <ComingSoon /> */}
        <HomeSection />
        <Presentation />
        <AboutPEPSection />
        <WWWSection />
        <PEPThemes />
        {/* ── This wrapper controls the sticky lifetime ── */}
        <div id="year-content-start" className="relative year-dependent-content">
          <YearButtons />           {/* ← sticky inside this wrapper */}
          <SectionDivider className='px-4' label="Event menadžment" />
          <YearTransition>
            <Gallery />
            <LecturersSection />
          </YearTransition>
        </div>
        {/* Everything after is NOT year-dependent → bar should no longer stick here */}
        <Program />
        <AboutUsSection />
        <Organizers />
        <ContactUs />
        <SeeYou />
        <Partners />
        <ScrollToTop />
    </YearProvider>
    </LenisProvider>
  )
}

export default transition(Home);
