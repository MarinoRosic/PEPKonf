import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import RevealText from './RevealText';
import SectionDivider from './SectionDivider';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { embargoRelease, embargoReplies } from '../data/embargoData';

// Flip to false to hide the entire section (e.g. once lecturers and the program are back on).
export const SHOW_EMBARGO = true;

const isField = (segment) => typeof segment === 'object';

const fields = [embargoRelease.meta, ...embargoRelease.paragraphs].flat().filter(isField);
const trackedFields = fields.filter((field) => !field.permanent);
const revealedCount = trackedFields.filter((field) => field.value).length;
const allRevealed = revealedCount === trackedFields.length;
const barCount = fields
  .filter((field) => !field.value)
  .reduce((total, field) => total + field.mask.length, 0);

// The bars get drawn one by one as the paper scrolls in, then the stamp lands.
const BAR_START = 0.45;
const BAR_STAGGER = 0.09;
const BAR_DURATION = 0.32;
const STAMP_DELAY = BAR_START + barCount * BAR_STAGGER + BAR_DURATION;

// A span rather than a <button>: browsers force buttons to inline-block, which stops
// the bars wrapping like words and makes every line with a bar taller than the rest.
const RedactedField = ({ mask, firstBar, isInView, reduceMotion, onPoke }) => (
  <span
    role="button"
    tabIndex={0}
    onClick={onPoke}
    onKeyDown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onPoke(event);
      }
    }}
    aria-label="Podatak pod embargom"
    className="py-1 rounded-sm cursor-pointer group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#772f6f]"
  >
    {mask.map((width, i) => (
      <motion.span
        key={i}
        data-bar
        className="inline-block h-[0.95em] align-[-0.1em] rounded-[1px] bg-[#261539] transition-colors duration-150 group-hover:bg-[#772f6f] mr-[0.3em] last:mr-0"
        style={{ width: `${width}ch`, originX: 0 }}
        initial={reduceMotion ? false : { scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{
          duration: BAR_DURATION,
          ease: [0.65, 0, 0.35, 1],
          delay: BAR_START + (firstBar + i) * BAR_STAGGER,
        }}
      />
    ))}
  </span>
);

const ReplyBubble = ({ x, top, paperWidth, text }) => {
  const bubbleRef = useRef(null);
  const [left, setLeft] = useState(x);

  // Keep the bubble inside the paper. The pointer still aims at the clicked bar.
  useLayoutEffect(() => {
    const halfWidth = bubbleRef.current.offsetWidth / 2;
    setLeft(Math.min(Math.max(x, halfWidth + 8), paperWidth - halfWidth - 8));
  }, [x, paperWidth, text]);

  return (
    <div
      ref={bubbleRef}
      aria-hidden="true"
      className="absolute z-20 w-max max-w-[15rem] pb-2.5 -translate-x-1/2 -translate-y-full pointer-events-none"
      style={{ left, top }}
    >
      <motion.div
        className="relative px-3.5 py-2 text-sm font-semibold text-center text-white rounded-lg shadow-lg bg-[#772f6f]"
        initial={{ opacity: 0, y: 6, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 4, scale: 0.96 }}
        transition={{ duration: 0.14, ease: 'easeOut' }}
      >
        {text}
        <span
          className="absolute top-full -mt-1.5 h-2.5 w-2.5 -translate-x-1/2 rotate-45 bg-[#772f6f]"
          style={{ left: `calc(50% + ${x - left}px)` }}
        />
      </motion.div>
    </div>
  );
};

const EmbargoSection = () => {
  const reduceMotion = useReducedMotion();
  const paperRef = useRef(null);
  const pokes = useRef(0);
  // Waits for a quarter of the sheet, so the bars are drawn while people can see them.
  const isInView = useInView(paperRef, { once: true, amount: 0.25 });
  const [bubble, setBubble] = useState(null);

  useEffect(() => {
    if (!bubble) return;
    const timer = setTimeout(() => setBubble(null), 2400);
    return () => clearTimeout(timer);
  }, [bubble]);

  if (!SHOW_EMBARGO) return null;

  const handlePoke = (event) => {
    // Keyboard clicks target the button itself, so fall back to its first bar.
    const bar = event.target.closest('[data-bar]') ?? event.currentTarget.querySelector('[data-bar]');
    const barRect = bar.getBoundingClientRect();
    const paperRect = paperRef.current.getBoundingClientRect();
    const id = pokes.current++;

    setBubble({
      id,
      text: embargoReplies[id % embargoReplies.length],
      x: barRect.left + barRect.width / 2 - paperRect.left,
      top: barRect.top - paperRect.top,
      paperWidth: paperRect.width,
    });
  };

  // Reset on every render, so each bar always gets the same place in the drawing order.
  let nextBar = 0;
  const renderSegments = (segments) =>
    segments.map((segment, i) => {
      // The word joiner keeps punctuation on the same line as the bar in front of it.
      if (!isField(segment)) return /^[,.;:!?]/.test(segment) ? `⁠${segment}` : segment;
      if (segment.value) {
        return (
          <mark key={i} className="px-1 text-inherit rounded-sm bg-[#db9bd5]/50 [box-decoration-break:clone]">
            {segment.value}
          </mark>
        );
      }
      const firstBar = nextBar;
      nextBar += segment.mask.length;
      return (
        <RedactedField
          key={i}
          mask={segment.mask}
          firstBar={firstBar}
          isInView={isInView}
          reduceMotion={reduceMotion}
          onPoke={handlePoke}
        />
      );
    });

  return (
    <>
      <SectionDivider className="px-4" label="Korporativno komuniciranje" labelPosition="right" />
      <section id="embargo" className="flex flex-col items-center justify-center px-4 py-12 overflow-hidden lg:py-20 min-h-svh">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold text-white md:text-6xl lg:text-8xl">
            <RevealText>Što se PRiča?</RevealText>
          </h1>
          <p className="mt-4 text-lg roza md:text-2xl">
            Službeno priopćenje za PEP 2027. <span className="block sm:inline">Uz manje izmjene.</span>
          </p>
        </header>

        <motion.div
          className="relative w-full max-w-3xl mt-10 isolate lg:mt-14"
          initial={reduceMotion ? false : { opacity: 0, y: 48 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Second sheet peeking out from under the page */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 rotate-[1.5deg] rounded-sm bg-[#db9bd5]/30" />

          <article
            ref={paperRef}
            className="relative p-6 rounded-sm sm:p-10 md:p-14 bg-[#F0E2FF] text-[#261539] shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
          >
            <motion.div
              className="absolute top-6 right-5 sm:top-10 sm:right-10 md:top-14 md:right-14 px-3 py-1.5 md:px-5 md:py-2 text-xs sm:text-sm md:text-xl font-bold tracking-[0.12em] uppercase whitespace-nowrap border-[3px] md:border-4 rounded-md border-[#772f6f] text-[#772f6f] select-none pointer-events-none"
              initial={reduceMotion ? { rotate: -7 } : { opacity: 0, scale: 1.8, rotate: -16 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: -7 } : {}}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: 'spring', stiffness: 520, damping: 26, delay: STAMP_DELAY }
              }
            >
              {allRevealed ? 'Embargo skinut' : 'Pod embargom'}
            </motion.div>

            <p className="text-2xl font-extrabold leading-none md:text-4xl">
              PEP
              <br />
              KONF
            </p>
            <p className="mt-5 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">Priopćenje za javnost</p>

            <div className="flex flex-wrap items-baseline justify-between py-3 mt-4 text-sm border-y normal-font gap-x-6 gap-y-1 md:text-base border-[#261539]/25">
              <p>{renderSegments(embargoRelease.meta)}</p>
              <p>
                Otkriveno: {revealedCount} od {trackedFields.length}
              </p>
            </div>

            <h2 className="mt-8 text-[1.65rem] sm:text-3xl font-extrabold leading-tight whitespace-pre-line md:text-5xl text-balance">
              {embargoRelease.headline}
            </h2>

            <div className="mt-6 space-y-5 text-base normal-font md:text-xl leading-[1.75] md:leading-[1.75]">
              {embargoRelease.paragraphs.map((paragraph, i) => (
                <p key={i}>{renderSegments(paragraph)}</p>
              ))}
            </div>

            <p aria-hidden="true" className="mt-8 text-center tracking-[0.4em]">###</p>
            <p className="mt-4 text-xs text-center normal-font md:text-sm text-[#261539]/70">
              {embargoRelease.editorsNote}
            </p>

            <AnimatePresence mode="wait">
              {bubble && (
                <ReplyBubble
                  key={bubble.id}
                  x={bubble.x}
                  top={bubble.top}
                  paperWidth={bubble.paperWidth}
                  text={bubble.text}
                />
              )}
            </AnimatePresence>
            <p role="status" className="sr-only">{bubble?.text}</p>
          </article>
        </motion.div>

        <motion.a
          href="https://www.instagram.com/pep.konf/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-5 sm:px-8 py-3.5 mt-10 text-xs sm:text-sm font-bold tracking-widest text-center text-white uppercase rounded-full lg:mt-14 bg-[#772f6f] transition-colors duration-300 hover:bg-[#db9bd5] hover:text-[#261539]"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : STAMP_DELAY + 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <FaInstagram size={20} className="shrink-0" />
          Embargo skidamo na Instagramu
        </motion.a>
      </section>
    </>
  );
};

export default EmbargoSection;
