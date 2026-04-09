import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const lines = [
  { text: 'PR.',            pink: false, sentence: 0 },
  { text: 'PRIČE.',         pink: true,  sentence: 1 },
  { text: 'ISKUSTVO.',      pink: false, sentence: 2 },
  { text: 'SVE NA',         pink: false, sentence: 3 },
  { text: 'JEDNOM MJESTU.', pink: true,  sentence: 3 },
]

const sentences = [...new Set(lines.map(l => l.sentence))]
const lastSentence = sentences[sentences.length - 1]
const penultimate = sentences[sentences.length - 2]
const getDelay = (sentence) =>
  sentence === lastSentence ? penultimate * 0.15 + 0.9 : sentence * 0.15

const MaskLine = ({ children, delay, isInView }) => (
  <div className="overflow-hidden">
    <motion.div
      initial={{ y: '105%' }}
      animate={isInView ? { y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </motion.div>
  </div>
)

const Presentation = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <section
      ref={ref}
      className="flex items-center min-h-screen px-8 lg:px-20 py-24"
    >
      <div className="flex flex-col gap-1 md:gap-2">
        {lines.map(({ text, pink, sentence }, i) => (
          <MaskLine
            key={i}
            delay={getDelay(sentence)}
            isInView={isInView}
          >
            <h2
              className={`
                text-[13vw] sm:text-[11vw] lg:text-[9vw]
                font-extrabold leading-tight sm:leading-none tracking-tight font-main
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
