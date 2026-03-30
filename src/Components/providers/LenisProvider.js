'use client';

import { ReactLenis } from 'lenis/react';
import { useEffect } from 'react';

export default function LenisProvider({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.8,        // higher = slower, more luxurious feel (1.2 – 2.0 is common)
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // nice default easing
        smoothWheel: true,
        smoothTouch: false,   // usually false on mobile for better native feel
        syncTouch: true,      // helps with touch devices
        lerp: 0.1,            // lower = more inertia (smoother momentum)
      }}
    >
      {children}
    </ReactLenis>
  );
}