import AboutPEPSection from './Components/AboutPEPSection';
import AboutUsSection from './Components/AboutUsSection';
import ContactUs from './Components/ContactUs';
import HeroSection from './Components/HeroSection';
import LecturersSection from './Components/LecturersSection';
import Program from './Components/Program';
import WWWSection from './Components/WWWSection';

function App() {
  return (
    <>
    <div className='h-full w-full'>
      <HeroSection />
      <AboutPEPSection />
      <WWWSection />
      <LecturersSection />
      {/* <Program /> */}
      {/* <AboutUsSection /> */}
      <ContactUs />
      </div>
    </>
  );
}

export default App;
