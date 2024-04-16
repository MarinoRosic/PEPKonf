import React from 'react'
import Lecturer from './Lecturer'
import testPredavaca from "../assets/images/testPredavaca.png"
import testPredavaca2 from "../assets/images/predavac2.png"
import testPredavaca3 from "../assets/images/predavac3.png"

const LecturersSection = () => {
  return (
    <>
        <section className='flex flex-row flex-wrap justify-between h-full gap-x-32 font-main lg:px-10 pt-40 md:pt-32 overflow-hidden'>
            <Lecturer img={testPredavaca} lecturer="LZux"/>
            <Lecturer img={testPredavaca2} lecturer="Predavač 2"/>
            <Lecturer img={testPredavaca3} lecturer="Predavač 3"/>
            <Lecturer img={testPredavaca} lecturer="Predavač 4"/>
            <Lecturer img={testPredavaca2} lecturer="Predavač 5"/>
            <Lecturer img={testPredavaca3} lecturer="Predavač 6"/>
        </section>
    </>
  )
}

export default LecturersSection
