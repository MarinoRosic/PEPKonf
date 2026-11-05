import { useRef, useState } from 'react';
import { easeInOut, motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useLenis } from 'lenis/react';
import SectionDivider from './SectionDivider';
import { useReducedMotion } from '../hooks/useReducedMotion';

// Flip to false to hide the entire section (e.g. once lecturers and the program are back on).
const SHOW_NEXT_EDITION = true;

// The 6 starts rolling into the 7 when the top of the section is this far down the screen.
const ROLL_START = 0.45;
// How far through the scroll the 7 counts as landed: just before the end of the pin.
const LAND_AT = 0.97;
// The digits dissolve as they leave the line instead of being cut off, so both show mid-roll.
const DIGIT_MASK = 'linear-gradient(to bottom, transparent 10%, black 25%, black 80%, transparent 97%)';
const STOP_TUCK = '-0.2em';
const RECENTER = '0.1em';

const NextEditionContent = () => {
  const reduceMotion = useReducedMotion();
  const lenis = useLenis();
  const sectionRef = useRef(null);
  const [done, setDone] = useState(false);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: [`start ${ROLL_START}`, 'end end'] });

  // Removes the pinned scroll distance for good, and takes the same distance off the scroll
  // position so nothing on screen moves.
  const releasePin = () => {
    const section = sectionRef.current;
    if (!section) return;

    const root = document.documentElement;
    const scrollY = window.scrollY;
    const top = section.getBoundingClientRect().top + scrollY;
    const heightBefore = section.offsetHeight;

    // Some browsers correct the scroll position by themselves when content above the screen
    // shrinks. Switching that off keeps the correction below the only one, in every browser.
    root.style.overflowAnchor = 'none';
    section.style.height = '100svh';
    const removed = heightBefore - section.offsetHeight;

    const next = scrollY <= top ? scrollY : Math.max(top, scrollY - removed);
    if (lenis) {
      lenis.resize();
      lenis.scrollTo(next, { immediate: true, force: true });
    } else {
      window.scrollTo(0, next);
    }
    requestAnimationFrame(() => {
      root.style.overflowAnchor = '';
    });
  };

  // Follows the scroll until the 7 has landed, then locks at 1, so scrolling back up can't undo it.
  const progress = useMotionValue(0);
  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    if (reduceMotion || progress.get() === 1) return;
    if (value < LAND_AT) {
      progress.set(value);
      return;
    }

    // The 7 has landed, so the section is done and the pin has no more work to do.
    progress.set(1);
    setDone(true);
    // Moving the page under a finger can make phones jump, so that one case waits for the lift.
    if (lenis?.isTouching) {
      window.addEventListener('touchend', releasePin, { once: true });
      return;
    }
    releasePin();
    // Hold the page still while the sentence appears. Its onAnimationComplete lets go again.
    lenis?.stop();
  });

  // The 6 and the 7 are stacked, so sliding the stack up by half swaps them.
  const rollY = useTransform(progress, [0, 1], ['0%', '-50%'], { ease: easeInOut });
  // A 7 is narrower than a 6, so the full stop tucks in and the number re-centres. This waits
  // until the top bar of the 7 has risen past the full stop, so the two never touch.
  const stopX = useTransform(progress, [0.6, 1], ['0em', STOP_TUCK], { ease: easeInOut });
  const numberX = useTransform(progress, [0.6, 1], ['0em', RECENTER], { ease: easeInOut });

  return (
    <>
      <SectionDivider className="px-4" label="Korporativno komuniciranje" labelPosition="right" />
      {/* The extra height is the scroll distance the number stays pinned for on the first pass */}
      <section ref={sectionRef} className={`relative ${reduceMotion ? '' : 'h-[130svh]'}`}>
        <div className={`flex flex-col items-center justify-center overflow-hidden h-[100svh] gap-y-6 ${reduceMotion ? '' : 'sticky top-0'}`}>
          <motion.h2
            aria-label="2027."
            className="flex font-extrabold leading-none tracking-tight text-white"
            style={{ fontSize: 'min(30vw, 60svh)', x: reduceMotion ? RECENTER : numberX }}
          >
            <span aria-hidden="true">202</span>
            {/* The padding gives the soft edges room outside the line, and the margin cancels it out */}
            <span
              aria-hidden="true"
              style={{ height: '1.4em', margin: '-0.2em 0', padding: '0.2em 0', maskImage: DIGIT_MASK, WebkitMaskImage: DIGIT_MASK }}
            >
              <motion.span
                className="flex flex-col"
                style={{ y: reduceMotion ? '-50%' : rollY, willChange: reduceMotion ? 'auto' : 'transform' }}
              >
                <span>6</span>
                <span className="roza">7</span>
              </motion.span>
            </span>
            <motion.span aria-hidden="true" style={{ x: reduceMotion ? STOP_TUCK : stopX }}>.</motion.span>
          </motion.h2>

          <div className="overflow-hidden">
            <motion.p
              className="pb-[0.15em] text-2xl leading-tight text-center text-white md:text-4xl lg:text-5xl"
              initial={false}
              animate={{ y: reduceMotion || done ? 0 : '105%' }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onAnimationComplete={() => lenis?.start()}
            >
              PRiča se nastavlja.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

const NextEdition = () => (SHOW_NEXT_EDITION ? <NextEditionContent /> : null);

export default NextEdition;
