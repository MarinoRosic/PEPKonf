import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGlobe, FaTimes } from 'react-icons/fa';
import { useLenis } from 'lenis/react';
import RotatingAvatar from './RotatingAvatar';

const LecturerModal = ({ isOpen, onClose, img, borderColor, lecturer, title, bio, linkedIN, web }) => {
  const lenis = useLenis();

  useEffect(() => {
    if (!isOpen) return;
    lenis?.stop();
    return () => { lenis?.start(); };
  }, [lenis, isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Positioning wrapper */}
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none">
            <motion.div
              className="relative w-full sm:max-w-md pointer-events-auto bg-[#261539] border border-[#db9bd5]/25 border-b-0 sm:border-b rounded-t-3xl sm:rounded-3xl overflow-hidden"
              variants={{
                hidden:  { y: '100%', opacity: 0 },
                visible: { y: 0, opacity: 1,       transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] } },
                exit:    { y: '100%', opacity: 0,   transition: { duration: 0.28, ease: [0.4, 0, 1, 1] } },
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Gradient top stripe */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#772F6F] via-[#db9bd5] to-[#772F6F] z-10" />

              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-10"
                onClick={onClose}
                aria-label="Close"
              >
                <FaTimes size={18} />
              </button>

              <div className="px-6 pt-5 pb-10">
                {/* Fixed header — image, name, title, icons */}
                <div className="h-[130px] w-[130px] mx-auto">
                  <RotatingAvatar img={img} name={lecturer} borderColor={borderColor} />
                </div>
                <h2 className="text-xl font-semibold text-white text-center mt-5">{lecturer}</h2>
                <p className="text-sm font-thin text-[#db9bd5] text-center mt-2 px-4 leading-snug">{title}</p>
                <div className="flex justify-center gap-6 mt-6">
                  {web && (
                    <a href={web} target="_blank" rel="noreferrer" className="ikona text-white">
                      <FaGlobe size={26} />
                    </a>
                  )}
                  {linkedIN && (
                    <a href={linkedIN} target="_blank" rel="noreferrer" className="ikona text-white">
                      <FaLinkedin size={26} />
                    </a>
                  )}
                </div>

                {bio && (
                  <textarea
                    readOnly
                    rows={10}
                    value={bio}
                    data-lenis-prevent
                    onWheel={e => e.stopPropagation()}
                    onTouchMove={e => e.stopPropagation()}
                    className="normal-font mt-6 w-full bg-transparent text-sm text-white text-justify leading-relaxed resize-none outline-none border-none overflow-y-scroll pr-3 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#772F6F] [&::-webkit-scrollbar-thumb]:rounded-full"
                  />
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default LecturerModal;
