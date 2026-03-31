const gradientPresets = {
  pink: 'conic-gradient(from 0deg, #db9bd5, #772F6F, #261539, #db9bd5)',
  purple: 'conic-gradient(from 0deg, #772F6F, #db9bd5, #261539, #772F6F)',
};

const glowPresets = {
  pink: 'rgba(219,155,213,',
  purple: 'rgba(119,47,111,',
};

// Fills its parent — size the parent from outside (w-[310px] h-[310px] etc.).
// borderColor: 'pink' | 'purple'
// borderThickness: px gap between ring and image (default 6)
const RotatingAvatar = ({ img, alt = '', borderColor = 'pink', borderThickness = 6 }) => {
  const gradient = gradientPresets[borderColor] ?? gradientPresets.pink;
  const glow = glowPresets[borderColor] ?? glowPresets.pink;
  const animName = `glow-pulse-${borderColor}`;

  return (
    <div
      className="relative w-full h-full rounded-full"
      style={{ animation: `${animName} 3s ease-in-out infinite`, willChange: 'filter' }}
    >
      <style>{`
        @keyframes ${animName} {
          0%, 100% { filter: drop-shadow(0 0 6px  ${glow}0.35)); }
          50%       { filter: drop-shadow(0 0 18px ${glow}0.85)); }
        }
      `}</style>

      {/* static conic gradient ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ background: gradient }}
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
