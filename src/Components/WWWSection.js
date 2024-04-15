import React from 'react'
import WWWCard from './WWWCard'

const WWWSection = () => {
  return (
    <>
        <section className='flex h-[100vh] font-main overflow-hidden'>
            <div className='px-8 mx-auto my-auto md:px-20'>
                <WWWCard question="ŠTO?" answer="PR | novinarstvo | iskustvo | PRiče" />
                <WWWCard question="KAD?" answer="Četvrtak & Petak | Travanj 25.-26. 2024 " />
                <WWWCard question="GDJE?" answer="• Sveučilišni kampus, Ulica branitelja Dubrovnika 41, Dubrovnik, Croatia" />
            </div>
        </section>
    </>
  )
}

export default WWWSection
