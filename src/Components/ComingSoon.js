import React, { useEffect, useRef } from 'react';
import '../ComingSoon.css';
import pepLogo from "../assets/images/PEPLogo3.png"

export default function ComingSoon() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    let angle = 0;
    const speed = 0.005; // slower = calmer

    const animate = () => {
      angle += speed;

      // Small orbit around center → stays focused on logo/text
      const x = 50 + Math.cos(angle) * 18;     // narrow horizontal range
      const y = 50 + Math.sin(angle * 1.4) * 12; // even narrower vertical + phase offset

      spotlight.style.setProperty('--spot-x', `${x}%`);
      spotlight.style.setProperty('--spot-y', `${y}%`);

      requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <div className="coming-soon">
      <div className="hero-content">
        <div className="logo-wrapper">
          <img
            src={pepLogo} // ← your actual logo path
            alt="Brand Logo"
            className="logo"
          />
          {/* <div className="logo-placeholder">LOGO</div> */}
        </div>
        <h1 className="godina">2026</h1>
        <h1 className="coming-soon-text">Coming soon...</h1>
      </div>

      <div ref={spotlightRef} className="spotlight" />

      <div className="vignette" />
    </div>
  );
}