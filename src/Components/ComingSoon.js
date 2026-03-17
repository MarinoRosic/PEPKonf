import React, { useEffect, useRef } from 'react';
import pepLogo from "../assets/images/PEPLogo3.png";

export default function ComingSoon() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    let angle = 0;
    const speed = 0.005;

    const animate = () => {
      angle += speed;

      const x = 50 + Math.cos(angle) * 18;
      const y = 50 + Math.sin(angle * 1.4) * 12;

      spotlight.style.setProperty('--spot-x', `${x}%`);
      spotlight.style.setProperty('--spot-y', `${y}%`);

      requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <div className="min-h-screen bg-[#261539] text-white flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Spotlight layer */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(
              ellipse 260px 180px at var(--spot-x) var(--spot-y),
              rgba(255, 245, 200, 0.22) 0%,
              rgba(255, 245, 200, 0.09) 50%,
              transparent 80%
            ),
            radial-gradient(
              ellipse 600px 400px at var(--spot-x) var(--spot-y),
              transparent 20%,
              rgba(0,0,0,0.75) 75%
            )
          `,
          mixBlendMode: 'screen',
        }}
      />

      {/* Vignette overlay */}
      <div className="absolute inset-0 pointer-events-none z-[2] bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.9)_100%)]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl w-full flex flex-col items-center">
        <div className="mb-10 md:mb-12">
          <img
            src={pepLogo}
            alt="PEP Logo"
            className="
              max-w-[280px] sm:max-w-[320px] md:max-w-[360px] w-full h-auto
              brightness-110 drop-shadow-[0_0_35px_rgba(240,240,255,0.2)]
              animate-gentle-breathe animate-float
            "
          />
        </div>

        <h1 className="
          text-xl sm:text-2xl md:text-3xl
          font-light tracking-[0.35em] uppercase
          bg-gradient-to-r from-indigo-200 via-white to-indigo-100
          bg-clip-text text-transparent bg-[length:300%]
          animate-shine
          mb-4 md:mb-6
        ">
          Save the date
        </h1>

        <h1 className="
          text-4xl sm:text-5xl md:text-7xl lg:text-8xl
          font-light tracking-wide
          mb-3 md:mb-4
        ">
          16. & 17.4.2026.
        </h1>

        <h1 className="
          text-3xl sm:text-5xl md:text-6xl lg:text-7xl
          font-light
        ">
          Stay tuned!
        </h1>
      </div>
    </div>
  );
}