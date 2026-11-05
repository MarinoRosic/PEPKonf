import { useState, useMemo } from "react"
import Lightbox from "yet-another-react-lightbox"
import { slike } from "../data/slike"
import "yet-another-react-lightbox/styles.css"
import Coverflow from "../Components/Coverflow"
import { Zoom } from "yet-another-react-lightbox/plugins"
import { useYear } from '../Components/providers/YearContext'
import SectionDivider from "./SectionDivider"
import { SHOW_LECTURERS, lecturersByYear } from "../data/lecturersData"

const Gallery = () => {
  const [index, setIndex] = useState(-1)
  const { selectedYear } = useYear()
  const data = useMemo(() => slike[selectedYear] ?? [], [selectedYear])

  const hasLecturers = useMemo(() => {
    const ld = lecturersByYear[selectedYear]
    return SHOW_LECTURERS && !!(ld && (ld.panelisti?.length || ld.radionica?.length || ld.predavaci?.length || ld.moderatorice?.length))
  }, [selectedYear])

  if (data.length === 0) {
    return (
      <section className="flex flex-col items-center px-4 pt-16 text-center pb-28 gap-y-6">
        <h1 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">Galerija</h1>
        <p className="text-lg roza md:text-2xl">Još nema slika. Prvo moramo održati konferenciju.</p>
      </section>
    )
  }

  return (
    <>
      <section className="relative overflow-x-hidden min-h-screen flex flex-col pt-16 pb-28">
        <h1 className="text-5xl font-bold text-center text-white md:text-6xl lg:text-7xl w-full px-4">
          Galerija
        </h1>
        <div className="flex-1 flex items-center justify-center px-2">
          <div className="w-full">
            <Coverflow data={data} onImageClick={setIndex} />
          </div>
        </div>
        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={data}
          plugins={[Zoom]}
        />
      </section>
      {hasLecturers && <SectionDivider className="px-4" />}
    </>
  )
}

export default Gallery
