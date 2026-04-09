import { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

// Splits text into individual characters, each animating in with a stagger.
// - Repeats every time the element enters view (not just once).
// - Supports trigger prop for scroll-driven opacity parents.
export default function SplitText({ children, className, delay = 0, stagger = 0.04, trigger }) {
  const containerRef = useRef(null);
  const isInView     = useInView(containerRef, { once: true, margin: '0px 0px -15% 0px' });
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    return trigger.on('change', (v) => {
      if (v >= 0.5) setTriggered(true);
      if (v < 0.2)  setTriggered(false);
    });
  }, [trigger]);

  const shouldAnimate = trigger ? triggered : isInView;

  // useMemo: only re-split the string when children changes.
  // For a long string like "Budi i ti dio PRedobre PRiče." this runs once, not on every render.
  const chars = useMemo(
    () => (typeof children === 'string' ? children.split('') : []),
    [children]
  );

  return (
    <span ref={containerRef} className={className} style={{ display: 'inline' }}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          style={{
            display: 'inline-block',
            // whiteSpace: 'pre' preserves space characters as renderable glyphs.
            // Without this, inline-block spans collapse ' ' to nothing — words run together.
            whiteSpace: 'pre',
          }}
          initial={{ opacity: 0, y: 18 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{
            duration: 0.5,
            // stagger = 0.03s per character by default.
            // For "Hello" (5 chars): H at 0s, e at 0.03s, l at 0.06s, l at 0.09s, o at 0.12s
            delay: delay + i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
