import { AnimatePresence } from 'framer-motion';
import Home from './Pages/Home'
import PrivacyPolicy from './Pages/PrivacyPolicy';
import { Route, Routes, useLocation } from 'react-router-dom';
// import SoonTM from './Components/SoonTM';

function App() {
  const location = useLocation();
  return (
    <>
    <div className='w-full h-full'>
      {/* <SoonTM /> */}
      {/* <HeroSection /> */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        </Routes>
      </AnimatePresence>
      </div>
    </>
  );
}

export default App;
