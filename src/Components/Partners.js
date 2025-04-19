import React from 'react'
import studentskiCentarDU from "../assets/images/SCDuLogo.jpg"
import UdrugaZaOSJ from "../assets/images/UdrugaZaOSJ.jpg"
import fotostar from "../assets/images/fotostar.png"
import sveucilisteDu from "../assets/images/sveucilisteDubrovnik.png"
import lightMedija from "../assets/images/light_Media.png"
import SZDU from "../assets/images/SZDU.png"
import maritimo from "../assets/images/maritimo.jpg"
import slatkoKaoCukar from "../assets/images/slatkoKaoCukar.png"
import Medardo from "../assets/images/Medardo.png"

const Partners = () => {
  return (
    <>
        <section className='relative xl:h-[1000px] w-full bg-white flex flex-col justify-normal items-center'>
            <div className='flex flex-col content-center xl:flex-row xl:gap-x-36'>
                <div className='content-center mx-auto'>
                    <img className='h-[250px] xl:h-[300px] w-[250px] xl:w-[300px]' src={UdrugaZaOSJ} alt="" />
                </div>
                <div className='flex items-center content-center justify-center'>
                    <img className='h-[100px] w-full my-2 xl:h-[180px] xl:w-[650px]' src={studentskiCentarDU} alt="" />
                </div>
                <div className='content-center mx-auto'>
                    <img className='h-[220px] xl:h-[300px] w-[200px] xl:w-[300px]' src={SZDU} alt="" />
                </div>
            </div>
            <div className='flex flex-col content-center xl:flex-row xl:gap-x-36 gap-y-3'>
                <div className='content-center mx-auto'>
                    <img className='h-[220px] xl:h-[300px] w-[300px] xl:w-[380px]' src={lightMedija} alt="" />
                </div>
                <div className='content-center mx-auto'>
                    <img className='mb-10 h-[120px] xl:h-[150px] w-[270px] xl:w-[300px]' src={sveucilisteDu} alt="" />
                </div>
                <div className='flex items-center content-center justify-center'>
                    <img className='h-[210px] w-[150px] xl:h-[250px] xl:w-[250px]' src={fotostar} alt="" />
                </div>
            </div>
            <div className='flex flex-col content-center xl:flex-row xl:gap-x-36 gap-y-3'>
                <div className='content-center mx-auto'>
                    <img className='h-[250px] xl:h-[300px] w-[350px] xl:w-[380px]' src={slatkoKaoCukar} alt="" />
                </div>
                <div className='content-center mx-auto'>
                    <img className='h-[310px] xl:h-[300px] w-[310px] xl:w-[300px]' src={Medardo} alt="" />
                </div>
                <div className='content-center mx-auto'>
                    <img className='lg:mb-0 mb-20 h-[280px] xl:h-[300px] w-[330px] xl:w-[300px]' src={maritimo} alt="" />
                </div>
            </div>
            <div className='absolute bottom-0 h-[50px] border-t-[#261539] border-t-2 w-full bg-[#261539] px-2'>
                <div className='flex flex-row content-center flex-grow h-full'>
                    <p className='text-sm span font-thin w-[33%] justify-center text-left content-center'><a href="">Privacy Policy</a></p>
                    <p className='w-[33%] text-sm span text-center justify-center content-center'>Copyright © 2025 PEP Konf</p>
                    <p className='span font-thin text-sm w-[33%] justify-center text-right content-center'>Made by <a href="https://www.afdu.dev"><span className='text-[#F0E2FF]'>AFDU</span></a></p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Partners
