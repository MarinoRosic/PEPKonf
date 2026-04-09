import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from 'lenis/react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  // Use lenis.scrollTo — window.scrollTo is bypassed by Lenis
  const scrollToTop = () => {
    lenis?.scrollTo(0, { duration: 1.8 });
  };

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 1000);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed right-2 bottom-12 z-20 w-12 h-12 rounded-full bg-[#772F6F] flex items-center justify-center cursor-pointer border border-transparent hover:border-[#db9bd5] transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.12, boxShadow: '0 0 22px 6px rgba(219,155,213,0.35)' }}
          whileTap={{ scale: 0.92 }}
          aria-label="Scroll to top"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
