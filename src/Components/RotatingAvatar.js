// Conic gradient rotates via transform: rotate() — compositor-only, no repaints.
// Previously used filter: drop-shadow animation which triggered a repaint every frame.

const gradientPresets = {
  pink:   'conic-gradient(from 0deg, #db9bd5, #ffffff, #db9bd5, #772F6F, #3d1a57, #772F6F, #db9bd5)',
  purple: 'conic-gradient(from 0deg, #772F6F, #db9bd5, #ffffff, #db9bd5, #772F6F, #3d1a57, #772F6F)',
};

const glowPresets = {
  pink:   'drop-shadow(0 0 10px rgba(219,155,213,0.45))',
  purple: 'drop-shadow(0 0 10px rgba(119,47,111,0.55))',
};

// Fills its parent — size the parent from outside (w-[310px] h-[310px] etc.).
// borderColor: 'pink' | 'purple'
// borderThickness: px gap between ring and image (default 6)
const RotatingAvatar = ({ img, alt = '', borderColor = 'pink', borderThickness = 6 }) => {
  const gradient = gradientPresets[borderColor] ?? gradientPresets.pink;
  const glow     = glowPresets[borderColor]     ?? glowPresets.pink;

  return (
    <div
      className="relative w-full h-full rounded-full"
      style={{ filter: glow }}
    >
      <style>{`
        @keyframes ring-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* rotating conic gradient ring — bright comet sweeps around */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: gradient,
          animation: 'ring-spin 4s linear infinite',
          willChange: 'transform',
        }}
      />
      {/* dark cutout — controls border thickness */}
      <div
        className="absolute rounded-full"
        style={{ inset: borderThickness, background: '#261539', zIndex: 1 }}
      />
      {/* image */}
      <img
        className="object-cover absolute rounded-full"
        src={img}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{
          inset: borderThickness,
          width: `calc(100% - ${borderThickness * 2}px)`,
          height: `calc(100% - ${borderThickness * 2}px)`,
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default RotatingAvatar;
