import React from 'react'
import WWWCard from './WWWCard'

const WWWSection = () => {
  return (
    <>
        <section className='flex h-[100svh] font-main overflow-hidden'>
            <div className='flex flex-col px-8 mx-auto md:px-20 content-center justify-center gap-y-12 md:gap-y-16 lg:gap-y-20'>
                <WWWCard delay={0}   question="ŠTO?" answer="PEP konferencija je događaj koji okuplja istaknute predavače iz područja odnosa s javnošću i novinarstva kako bi podijelili svoje znanje, iskustvo i najnovije trendove sa studentima i mladima." />
                <WWWCard delay={0.2} question="KAD?" answer="Vidimo se u 2027.!" />
                <WWWCard delay={0.4} question="GDJE?" answer="Sveučilišni kampus, Ulica branitelja Dubrovnika 41, Dubrovnik" />
            </div>
        </section>
    </>
  )
}

export default WWWSection
