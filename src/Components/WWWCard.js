import React from 'react'

const WWWCard = (props) => {
    const pitanje = props.question
    const odgovor = props.answer
  return (
    <>
        <div className='content-center px-7'>
            <h1 className='text-[#772F6F] text-5xl pb-4 font-extrabold'>
                {pitanje}
            </h1>
            <p className='text-[#F0E2FF] text-2xl lg:text-3xl font-extrabold pb-20 overflow-hidden'>
                {odgovor}
            </p>
        </div>
    </>
  )
}

export default WWWCard
