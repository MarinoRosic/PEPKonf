import React from 'react'
import Organizers from '../Components/Organizers';
import AboutPEPSection from '../Components/AboutPEPSection';
import AboutUsSection from '../Components/AboutUsSection';
import ContactUs from '../Components/ContactUs';
// import HeroSection from './Components/HeroSection';
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
import { YearProvider } from '../Components/YearContext';
import YearButtons from '../Components/YearButtons';
import Gallery from '../Components/Gallery';
import LenisProvider from '../Components/providers/LenisProvider';

const Home = () => {
  return (
    <>
      <LenisProvider>
      <YearProvider>
        <HomeSection />
        <Presentation />
        <AboutPEPSection />
        <WWWSection />
        <PEPThemes />

        {/* ── This wrapper controls the sticky lifetime ── */}
        <div id="year-content-start" className="relative year-dependent-content">

          <YearButtons />           {/* ← sticky inside this wrapper */}
          <Gallery />
          <LecturersSection />

        </div>

        {/* Everything after Gallery is NOT year-dependent → bar should no longer stick here */}
        <Program />
        <AboutUsSection />
        <Organizers />
        <ContactUs />
        <SeeYou />
        <Partners />
        <ScrollToTop />
      </YearProvider>
      </LenisProvider>
    </>
  )
}

export default transition(Home);
