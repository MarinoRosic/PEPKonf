import Organizers from './Components/Organizers';
import AboutPEPSection from './Components/AboutPEPSection';
import AboutUsSection from './Components/AboutUsSection';
import ContactUs from './Components/ContactUs';
// import HeroSection from './Components/HeroSection';
import LecturersSection from './Components/LecturersSection';
import Program from './Components/Program';
import WWWSection from './Components/WWWSection';
import PEPThemes from './Components/PEPThemes';
import ScrollToTop from './Components/ScrollToTop';
import Presentation from './Components/Presentation';
import HomeSection from './Components/HomeSection';
import SeeYou from './Components/SeeYou';
import Partners from './Components/Partners';
// import SoonTM from './Components/SoonTM';

function App() {
  return (
    <>
    <div className='w-full h-full'>
      {/* <SoonTM /> */}
      {/* <HeroSection /> */}
      <HomeSection />
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
      <Partners />
      <ScrollToTop />
      </div>
    </>
  );
}

export default App;
