import React from 'react'
import WWWCard from './WWWCard'

const WWWSection = () => {
  return (
    <>
        <section className='flex h-[100vh] font-main'>
            <div className='mx-auto my-auto'>
                <WWWCard question="ŠTO?" answer="PR | novinarstvo | iskustvo | PRiče" />
                <WWWCard question="KAD?" answer="Četvrtak & Petak | Travanj 25.-26. 2024 " />
                <WWWCard question="GDJE?" answer="• Sveučilišni kampus, Ulica branitelja Dubrovnika 41, Dubrovnik, Croatia" />
            </div>
        </section>
    </>
  )
}

export default WWWSection
