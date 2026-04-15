import React, { useEffect, useRef } from 'react';
import pepLogo from "../assets/images/PEPLogo3.png";
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function ComingSoon() {
  const reduceMotion  = useReducedMotion();
  const spotlightRef  = useRef(null);
  const rafRef        = useRef(null);   // stores the frame ID so we can cancel it correctly

  useEffect(() => {
    const el = spotlightRef.current;
    // Skip the RAF loop entirely on weak/accessibility-sensitive devices.
    // The spotlight overlay simply stays hidden (opacity kept at 0 via inline style below).
    if (!el || reduceMotion) return;

    let angle = 0;
    const speed = 0.005;

    const tick = () => {
      angle += speed;
      const x = 50 + Math.cos(angle) * 18;
      const y = 50 + Math.sin(angle * 1.4) * 12;
      el.style.setProperty('--spot-x', `${x}%`);
      el.style.setProperty('--spot-y', `${y}%`);
      rafRef.current = requestAnimationFrame(tick);   // store the ID, not the function
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);  // cancel by ID — this actually works
  }, [reduceMotion]);

  return (
    <div className="min-h-[100svh] bg-[#261539] text-white flex flex-col items-center justify-center relative overflow-hidden px-5 sm:px-8 lg:px-12">
      {/* Single centered spotlight — hidden on reduced-motion devices */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          opacity: reduceMotion ? 0 : 1,
          background: `
            radial-gradient(
              ellipse 260px 180px at var(--spot-x, 50%) var(--spot-y, 50%),
              rgba(255, 245, 200, 0.22) 0%,
              rgba(255, 245, 200, 0.09) 50%,
              transparent 80%
            ),
            radial-gradient(
              ellipse 600px 400px at var(--spot-x, 50%) var(--spot-y, 50%),
              transparent 20%,
              rgba(0,0,0,0.75) 75%
            )
          `,
          mixBlendMode: 'screen',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none z-[2] bg-[radial-gradient(circle_at_center,transparent_38%,rgba(0,0,0,0.88)_100%)]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl w-full flex flex-col items-center">
        <div className="mb-8 md:mb-12 lg:mb-16">
          <img
            src={pepLogo}
            alt="PEP Logo"
            className={`
              max-w-[220px] xs:max-w-[260px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[340px]
              w-full h-auto
              brightness-110
              drop-shadow-[0_0_40px_rgba(240,240,255,0.22)]
              ${reduceMotion ? '' : 'animate-logo-motion'}
            `}
          />
        </div>

        <h1 className={`
          text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl
          font-light tracking-[0.3em] uppercase
          bg-gradient-to-r from-indigo-200 via-white to-indigo-100
          bg-clip-text text-transparent bg-[length:300%]
          ${reduceMotion ? '' : 'animate-shine'}
          mb-4 md:mb-6
        `}>
          Save the date
        </h1>

        <h1 className="
          text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl
          font-light tracking-wide leading-tight
          mb-3 md:mb-5
        ">
          16. & 17.4.2026.
        </h1>

        <h1 className="
          text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl
          font-light
        ">
          Stay tuned!
        </h1>
      </div>
    </div>
  );
}
