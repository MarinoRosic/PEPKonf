import { useState, useEffect } from 'react';

/**
 * Returns true when the user has requested reduced motion via their OS/browser
 * accessibility settings (Settings → Accessibility → Reduce Motion / Animation effects).
 *
 * Reactive: updates immediately if the user toggles the setting mid-session
 * without requiring a page reload.
 */
export function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(
    // Lazy initializer — reads the current value synchronously on first render
    // so there's no one-frame flash of the animated state.
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e) => setPrefersReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return prefersReduced;
}
