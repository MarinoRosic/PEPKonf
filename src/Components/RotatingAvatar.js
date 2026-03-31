import { motion } from 'framer-motion';

const gradientPresets = {
  pink: 'conic-gradient(from 0deg, #db9bd5, #772F6F, #261539, #db9bd5)',
  purple: 'conic-gradient(from 0deg, #772F6F, #db9bd5, #261539, #772F6F)',
};

const shadowPresets = {
  pink: '0 0 28px 8px rgba(219,155,213,0.25)',
  purple: '0 0 28px 8px rgba(119,47,111,0.25)',
};

// Fills its parent — size the parent from outside (w-[310px] h-[310px] etc.).
// borderColor: 'pink' | 'purple'
// borderThickness: px gap between ring and image (default 6)
const RotatingAvatar = ({ img, alt = '', borderColor = 'pink', borderThickness = 6 }) => {
  const gradient = gradientPresets[borderColor] ?? gradientPresets.pink;
  const shadow = shadowPresets[borderColor] ?? shadowPresets.pink;

  return (
    <div className="relative w-full h-full rounded-full">
      {/* spinning conic gradient ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full"
        style={{ background: gradient, boxShadow: shadow }}
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
