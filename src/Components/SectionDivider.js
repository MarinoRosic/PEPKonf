import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SplitText from './SplitText'

const SectionDivider = ({ label, labelPosition = 'left', className = '' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })

  const shortSide = 'flex-[1]'
  const longSide  = 'flex-[5]'
  const leftFlex  = labelPosition === 'left' ? shortSide : longSide
  const rightFlex = labelPosition === 'left' ? longSide  : shortSide

  // Lines start expanding roughly halfway through the label stagger
  const lineDelay = label ? (label.length * 0.04) * 0.6 : 0

  if (!label) {
    return (
      <div ref={ref} className={`flex items-center w-full py-1 ${className}`}>
        <motion.div
          className="flex-1 h-px bg-gradient-to-r from-transparent via-[#db9bd5] to-transparent"
          style={{ originX: 0.5 }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    )
  }

  return (
    <div ref={ref} className={`flex items-center gap-3 w-full py-1 ${className}`}>
      {/* Left line — grows outward from label (originX: 1 = right edge, adjacent to label) */}
      <motion.div
        className={`${leftFlex} h-px bg-gradient-to-r from-transparent to-[#db9bd5]`}
        style={{ originX: 1 }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: lineDelay }}
      />

      <span className="text-[#db9bd5] text-[10px] tracking-[0.35em] uppercase font-medium whitespace-nowrap shrink-0">
        <SplitText stagger={0.04}>{label}</SplitText>
      </span>

      {/* Right line — grows outward from label (originX: 0 = left edge, adjacent to label) */}
      <motion.div
        className={`${rightFlex} h-px bg-gradient-to-l from-transparent to-[#db9bd5]`}
        style={{ originX: 0 }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: lineDelay }}
      />
    </div>
  )
}

export default SectionDivider
