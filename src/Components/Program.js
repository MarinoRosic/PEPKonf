import React from 'react'
import headerImg from "../assets/images/program.png"
import Table from "./Table"

const Program = () => {
  return (
    <>
        <section className='flex flex-col w-full h-full gap-8'>
            <header className='pt-16 mx-auto'>
                <h1 className='absolute z-20 text-6xl font-bold text-white lg:text-8xl'>PRogram:</h1>
                <div className='pt-12 lg:pt-20'>
                    <img className="rotate-180 w-[270px] lg:w-[440px]" src={headerImg} alt="" />
                </div>
            </header>
            <Table datum="25.4 Četvrtak" partyTime="21:00h - 02:00h" partyLocation="PARTY U LOVE BARA"/>
            <Table datum="26.4 Petak"/>
        </section>
    </>
  )
}

export default Program
