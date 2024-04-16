import React from 'react'
import OrganizerCard from "./OrganizerCard"

const Organizers = () => {
  return (
    <>
        <section className='flex flex-col w-full h-full overflow-hidden'>
            <header className='pt-32 mx-auto'>
                <h1 className='pb-10 text-5xl font-extrabold text-white lg:text-8xl font-main'>
                    Organizatori:
                </h1>
            </header>
            <OrganizerCard name="Leonarda Tikvica"/>
            <OrganizerCard name="Andrea Batinić"/>
            <OrganizerCard name="Organizator 3"/>
        </section>
    </>
  )
}

export default Organizers