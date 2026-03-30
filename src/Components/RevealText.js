import { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

// Splits text into words, each sliding up from a hidden overflow mask.
//
// Standalone use (not inside a scroll-driven parent):
//   <RevealText>Hello world</RevealText>
//
// Inside a scroll-driven opacity parent — pass the parent's opacity MotionValue
// so the reveal fires when the text is actually visible, not just in the DOM:
//   <RevealText trigger={someOpacityMotionValue}>Hello world</RevealText>
export default function RevealText({ children, className, delay = 0, stagger = 0.13, trigger }) {
  const containerRef = useRef(null);
  // once: true → animation fires once and stays; words won't re-animate on scroll back up
  const isInView     = useInView(containerRef, { once: true });
  const [triggered, setTriggered] = useState(false);

  // When a trigger MotionValue is provided, fire at 50% opacity; reset below 20%
  useEffect(() => {
    if (!trigger) return;
    return trigger.on('change', (v) => {
      if (v >= 0.5) setTriggered(true);
      if (v < 0.2)  setTriggered(false);
    });
  }, [trigger]);

  const shouldAnimate = trigger ? triggered : isInView;

  // useMemo: only re-split the string when children actually changes.
  // Without this, children.split(' ') runs on every single render (scroll, hover, etc.)
  const words = useMemo(
    () => (typeof children === 'string' ? children.split(' ') : []),
    [children]
  );

  return (
    <span ref={containerRef} className={className}>
      {words.map((word, i) => (
        // Each word gets a clipping container.
        // overflow: hidden masks everything below the baseline, hiding the word at y: 110%
        // verticalAlign: bottom aligns the clipping box to the text baseline
        // paddingBottom: 0.1em gives a tiny extra room so descenders (g, p, y) aren't clipped
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', paddingBottom: '0.1em' }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            // 110% instead of 100% — ensures the word is fully hidden even for tall descenders
            initial={{ y: '110%' }}
            animate={shouldAnimate ? { y: 0 } : { y: '110%' }}
            transition={{
              duration: 0.85,
              // delay + i * stagger: each word starts slightly after the previous
              // e.g. word 0 at 0s, word 1 at 0.1s, word 2 at 0.2s (with default stagger=0.1)
              delay: delay + i * stagger,
              // cubic-bezier [x1, y1, x2, y2] — these are the two control handles of the curve
              // [0.16, 1, 0.3, 1] = fast initial burst that smoothly decelerates to a stop
              // visually similar to a spring but fully deterministic (no bounce/overshoot)
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* \u00A0 = non-breaking space appended after every word except the last.
                We split on ' ' so spaces are gone — this puts them back as a render character. */}
            {word}{i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
