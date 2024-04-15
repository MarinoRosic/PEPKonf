import Organizers from './Components/Organizers';
import AboutPEPSection from './Components/AboutPEPSection';
import AboutUsSection from './Components/AboutUsSection';
import ContactUs from './Components/ContactUs';
import HeroSection from './Components/HeroSection';
import LecturersSection from './Components/LecturersSection';
import Program from './Components/Program';
import WWWSection from './Components/WWWSection';
import PEPThemes from './Components/PEPThemes';

function App() {
  return (
    <>
    <div className='w-full h-full'>
      <HeroSection />
      <AboutPEPSection />
      <WWWSection />
      <PEPThemes />
      <LecturersSection />
      <Program />
      <AboutUsSection />
      <Organizers />
      <ContactUs />
      </div>
    </>
  );
}

export default App;
