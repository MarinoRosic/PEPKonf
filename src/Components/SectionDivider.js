import SplitText from './SplitText'

const SectionDivider = ({ label, labelPosition = 'left', className = '' }) => {
  const shortSide = 'flex-[1]'
  const longSide = 'flex-[5]'

  const leftFlex = labelPosition === 'left' ? shortSide : longSide
  const rightFlex = labelPosition === 'left' ? longSide : shortSide

  if (!label) {
    return (
      <div className={`flex items-center w-full py-1 ${className}`}>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#db9bd5] to-transparent" />
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-3 w-full py-1 ${className}`}>
      <div className={`${leftFlex} h-px bg-gradient-to-r from-transparent to-[#db9bd5]`} />
      <span className="text-[#db9bd5] text-[10px] tracking-[0.35em] uppercase font-medium whitespace-nowrap shrink-0">
        <SplitText stagger={0.04}>{label}</SplitText>
      </span>
      <div className={`${rightFlex} h-px bg-gradient-to-l from-transparent to-[#db9bd5]`} />
    </div>
  )
}

export default SectionDivider
