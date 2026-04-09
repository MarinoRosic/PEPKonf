import { motion } from "framer-motion";

const STRIPS = 5;
const DURATION = 0.55;
const STAGGER = 0.06;

const ease = [0.22, 1, 0.36, 1];

const stripBase = (i) => ({
  position: 'fixed',
  top: 0,
  left: `${(i / STRIPS) * 100}%`,
  width: `${100 / STRIPS}%`,
  height: '100vh',
  background: 'linear-gradient(to bottom, #772F6F, #9b4a8a)',
  zIndex: 999,
  pointerEvents: 'none',
});

const transition = (OgComponent) => {
  return (props) => (
    <>
      <OgComponent {...props} />

      {/* Cover: sweeps left → right on exit */}
      {[...Array(STRIPS)].map((_, i) => (
        <motion.div
          key={`cover-${i}`}
          style={{ ...stripBase(i), transformOrigin: 'bottom' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: DURATION, ease, delay: i * STAGGER }}
        />
      ))}

      {/* Reveal: sweeps right → left on enter */}
      {[...Array(STRIPS)].map((_, i) => (
        <motion.div
          key={`reveal-${i}`}
          style={{ ...stripBase(i), transformOrigin: 'top' }}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: DURATION, ease, delay: (STRIPS - 1 - i) * STAGGER }}
        />
      ))}
    </>
  );
};

export default transition;
