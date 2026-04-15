import { useState, useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

// Conic gradient rotates via transform: rotate() — compositor-only, no repaints.
// Previously used filter: drop-shadow animation which triggered a repaint every frame.

const gradientPresets = {
  pink:   'conic-gradient(from 0deg, #db9bd5, #ffffff, #db9bd5, #772F6F, #3d1a57, #772F6F, #db9bd5)',
  purple: 'conic-gradient(from 0deg, #772F6F, #772F6F, #3d1a57, #1a0829, #3d1a57, #772F6F, #772F6F)',
};

const glowPresets = {
  pink:   'drop-shadow(0 0 10px rgba(219,155,213,0.45))',
  purple: 'drop-shadow(0 0 10px rgba(119,47,111,0.55))',
};

// Fills its parent — size the parent from outside (w-[310px] h-[310px] etc.).
// borderColor: 'pink' | 'purple'
// borderThickness: px gap between ring and image (default 6)
const getInitials = (name = '') => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const RotatingAvatar = ({ img, name = '', alt = '', borderColor = 'pink', borderThickness = 6, objectPosition = 'center' }) => {
  const reduceMotion = useReducedMotion();
  const [loaded, setLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const containerRef = useRef(null);
  const gradient = gradientPresets[borderColor] ?? gradientPresets.pink;
  const glow     = glowPresets[borderColor]     ?? glowPresets.pink;
  const hasImage = !!img;

  useEffect(() => {
    if (!img) return;
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgSrc(img);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [img]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-full"
      style={{ filter: glow }}
    >
      {/* rotating conic gradient ring — bright comet sweeps around */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: gradient,
          animation: reduceMotion ? 'none' : 'ring-spin 4s linear infinite',
          willChange: reduceMotion ? 'auto' : 'transform',
        }}
      />
      {/* dark cutout — controls border thickness */}
      <div
        className="absolute rounded-full"
        style={{ inset: borderThickness, background: '#261539', zIndex: 1 }}
      />

      {hasImage ? (
        <>
          {/* shimmer — visible until image loads */}
          {!loaded && (
            <div className="img-shimmer absolute rounded-full" style={{ inset: borderThickness, zIndex: 2 }} />
          )}
          {/* image */}
          <img
            className="object-cover absolute rounded-full"
            src={imgSrc}
            alt={alt}
            decoding="async"
            onLoad={() => setLoaded(true)}
            style={{
              inset: borderThickness,
              width: `calc(100% - ${borderThickness * 2}px)`,
              height: `calc(100% - ${borderThickness * 2}px)`,
              zIndex: 3,
              objectPosition,
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          />
        </>
      ) : (
        /* initials fallback */
        <div
          className="absolute rounded-full flex items-center justify-center"
          style={{ inset: borderThickness, zIndex: 2 }}
        >
          <span
            className="font-semibold tracking-wide select-none leading-none"
            style={{ color: '#db9bd5'}}
          >
            {getInitials(name)}
          </span>
        </div>
      )}
    </div>
  );
};

export default RotatingAvatar;
