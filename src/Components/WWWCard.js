import React from 'react'

const WWWCard = (props) => {
    const pitanje = props.question
    const odgovor = props.answer
  return (
    <>
        <div className='px-7 content-center'>
            <h1 className='text-[#772F6F] text-5xl pb-4 font-extrabold'>
                {pitanje}
            </h1>
            <p className='text-[#F0E2FF] text-3xl font-extrabold pb-20 overflow-hidden'>
                {odgovor}
            </p>
        </div>
    </>
  )
}

export default WWWCard
