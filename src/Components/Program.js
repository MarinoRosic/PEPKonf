import React from 'react'
import headerImg from "../assets/images/program.png"
import Table from "../Components/Table"
import rasporedSlika from "../assets/images/rasporedStrana.png"
const Program = () => {
  return (
    <>
        <section className='flex flex-col min-h-[100vh]'>
            <header className='mx-auto pt-20'>
                <h1 className='text-white text-8xl font-bold absolute z-20'>PRogram:</h1>
                <div className='pt-20'>
                    <img className="rotate-180 w-[440px]" src={headerImg} alt="" />
                </div>
            </header>
            <Table />
            <div className='absolute pt-72'>
                <img className='h-full' src={rasporedSlika} alt="" />
            </div>
            <div className='absolute pt-72 right-0'>
                <img className='h-full img-hor' src={rasporedSlika} alt="" />
            </div>
        </section>
    </>
  )
}

export default Program
