import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGlobe, FaTimes } from 'react-icons/fa';
import RotatingAvatar from './RotatingAvatar';

const LecturerModal = ({ isOpen, onClose, img, borderColor, lecturer, title, bio, linkedIN, web }) => {
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

          {/* Positioning wrapper — items-end on mobile (sheet), items-center on sm+ (modal) */}
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none">
            <motion.div
              className="relative w-full sm:max-w-md pointer-events-auto bg-[#261539] border border-[#db9bd5]/25 border-b-0 sm:border-b rounded-t-3xl sm:rounded-3xl overflow-y-auto max-h-[85vh]"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Gradient top stripe */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#772F6F] via-[#db9bd5] to-[#772F6F]" />

              <div className="px-6 pb-10 pt-5">
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <FaTimes size={18} />
                </button>

                {/* Avatar */}
                <div className="h-[130px] w-[130px] mx-auto">
                  <RotatingAvatar img={img} borderColor={borderColor} />
                </div>

                {/* Name */}
                <h2 className="text-xl font-semibold text-white text-center mt-5">
                  {lecturer}
                </h2>

                {/* Title */}
                <p className="text-sm font-thin text-[#db9bd5] text-center mt-2 px-4 leading-snug">
                  {title}
                </p>

                {/* Bio — optional, add 'bio' field to lecturersData entries to populate */}
                {bio && (
                  <p className="text-sm text-white text-center mt-4 px-2 leading-relaxed">
                    {bio}
                  </p>
                )}

                {/* Socials */}
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
