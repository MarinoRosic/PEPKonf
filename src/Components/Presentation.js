import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const lines = [
  { text: 'PR.',          pink: false },
  { text: 'PRIČE.',           pink: true  },
  { text: 'ISKUSTVO.',        pink: false },
  { text: 'SVE NA',           pink: false },
  { text: 'JEDNOM MJESTU.',   pink: true  },
]

const MaskLine = ({ children, delay, isInView }) => (
  <div className="overflow-hidden">
    <motion.div
      initial={{ y: '105%' }}
      animate={isInView ? { y: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </motion.div>
  </div>
)

const Presentation = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-150px' })

  return (
    <section
      ref={ref}
      className="flex items-center min-h-screen px-8 lg:px-20 py-24"
    >
      <div className="flex flex-col gap-1 md:gap-2">
        {lines.map(({ text, pink }, i) => (
          <MaskLine key={i} delay={i * 0.14} isInView={isInView}>
            <h2
              className={`
                text-[13vw] sm:text-[11vw] lg:text-[9vw]
                font-extrabold leading-none tracking-tight font-main
                ${pink ? 'text-[#db9bd5]' : 'text-white'}
              `}
            >
              {text}
            </h2>
          </MaskLine>
        ))}
      </div>
    </section>
  )
}

export default Presentation
