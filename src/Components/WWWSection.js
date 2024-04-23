import React from 'react'
import WWWCard from './WWWCard'

const WWWSection = () => {
  return (
    <>
        <section className='flex h-[100vh] font-main overflow-hidden'>
            <div className='flex flex-col px-8 mx-auto md:px-20 content-center justify-center gap-y-12 lg:gap-y-20'>
                <WWWCard question="ŠTO?" answer="PEP konferencija je događaj koji okuplja istaknute predavače iz područja odnosa s javnošću i novinarstva kako bi podijelili svoje znanje, iskustvo i najnovije trendove sa studentima i mladima." />
                <WWWCard question="KAD?" answer="Četvrtak & petak | 25. i 26. travnja 2024." />
                <WWWCard question="GDJE?" answer="Sveučilišni kampus, Ulica branitelja Dubrovnika 41, Dubrovnik" />
            </div>
        </section>
    </>
  )
}

export default WWWSection
