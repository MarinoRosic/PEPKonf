import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WWWCard = (props) => {
  const pitanje = props.question
  const odgovor = props.answer
  const delay = props.delay ?? 0
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className='content-center'>

      {/* Question + underline draw */}
      <div className='relative inline-block pb-4'>
        <motion.h1
          className='text-[#772F6F] text-3xl md:text-4xl lg:text-5xl font-extrabold'
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: delay }}
        >
          {pitanje}
        </motion.h1>

        {/* underline that draws left → right */}
        <motion.div
          className='absolute bottom-1 left-0 h-[3px] w-full rounded-full'
          style={{
            background: 'linear-gradient(to right, #db9bd5, #772F6F)',
            originX: 0,
          }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.4, ease: 'easeInOut', delay: delay + 0.35 }}
        />
      </div>

      {/* Answer fades in after underline finishes */}
      <motion.p
        className='text-white text-lg md:text-2xl lg:text-3xl font-extrabold overflow-hidden'
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut', delay: delay + 0.7 }}
      >
        {odgovor}
      </motion.p>

    </div>
  )
}

export default WWWCard
