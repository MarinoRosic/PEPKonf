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
import transition from '../Transition'
import ComingSoon from '../Components/ComingSoon';

const Home = () => {
  return (
    <>
      <ComingSoon />
      {/* <HomeSection />
      <Presentation />
      <AboutPEPSection />
      <WWWSection />
      <PEPThemes />
      <LecturersSection />
      <Program />
      <AboutUsSection />
      <Organizers />
      <ContactUs />
      <SeeYou />

      <ScrollToTop /> */}
      <Partners />
    </>
  )
}

export default transition(Home);
