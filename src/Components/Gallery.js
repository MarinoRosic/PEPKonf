import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import { slike } from "../data/slike"
import "yet-another-react-lightbox/styles.css"
import Coverflow from "../Components/Coverflow"
import transition from '../Transition'
import { Zoom } from "yet-another-react-lightbox/plugins"
import { AnimatePresence, motion } from 'framer-motion'
import { useYear } from '../Components/YearContext'

const Gallery = () => {
  const [index, setIndex] = useState(-1)
  const { selectedYear } = useYear()
  const data = slike[selectedYear] || []

  return (
    <>
      {data.length > 0 && (
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <section className="overflow-x-hidden py-10">
              <motion.div className="overflow-hidden">
                <h1 className="content-center text-5xl font-bold text-center text-white md:text-6xl lg:text-7xl lg:mt-8">
                  Galerija
                </h1>
              </motion.div>
              <div className="pt-10 px-2">
                <Coverflow data={data} onImageClick={(i) => setIndex(i)} />
              </div>

              <Lightbox
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={data}
                plugins={[Zoom]}
              />
            </section>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  )
}

export default transition(Gallery)
