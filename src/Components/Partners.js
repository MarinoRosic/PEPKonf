import React from 'react'
import { Link } from 'react-router-dom'
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
                    <a href='https://www.huoj.hr/' target='_blank' rel='noreferrer'><img className='h-[250px] xl:h-[300px] w-[250px] xl:w-[300px]' src={UdrugaZaOSJ} alt="" /></a>
                </div>
                <div className='flex items-center content-center justify-center'>
                    <a href='https://www.scdu.hr/' target='_blank' rel='noreferrer'><img className='h-[100px] w-full my-2 xl:h-[180px] xl:w-[650px]' src={studentskiCentarDU} alt="" /></a>
                </div>
                <div className='content-center mx-auto'>
                    <a href='https://www.instagram.com/szdu_unidu/' target='_blank' rel='noreferrer'><img className='h-[220px] xl:h-[300px] w-[200px] xl:w-[300px]' src={SZDU} alt="" /></a>
                </div>
            </div>
            <div className='flex flex-col content-center xl:flex-row xl:gap-x-36 gap-y-3'>
                <div className='content-center mx-auto'>
                    <a href='https://light-media.hr/' target='_blank' rel='noreferrer'><img className='h-[220px] xl:h-[300px] w-[300px] xl:w-[380px]' src={lightMedija} alt="" /></a>
                </div>
                <div className='content-center mx-auto'>
                    <a href='https://www.unidu.hr/' target='_blank' rel='noreferrer'><img className='mb-10 h-[120px] xl:h-[150px] w-[270px] xl:w-[300px]' src={sveucilisteDu} alt="" /></a>
                </div>
                <div className='flex items-center content-center justify-center'>
                    <a href='http://fotostar.hr/' target='_blank' rel='noreferrer'><img className='h-[210px] w-[250px] xl:h-[250px] xl:w-[250px]' src={fotostar} alt="" /></a>
                </div>
            </div>
            <div className='flex flex-col content-center xl:flex-row xl:gap-x-36 gap-y-3'>
                <div className='content-center mx-auto'>
                   <a href='https://www.slatkokaocukar.com/' target='_blank' rel='noreferrer'><img className='h-[270px] xl:h-[300px] w-[400px] xl:w-[500px]' src={slatkoKaoCukar} alt="" /></a>
                </div>
                <div className='content-center mx-auto'>
                    <a href='https://www.dubrovnikmed.com/honeydu/' target='_blank' rel='noreferrer'><img className='h-[330px] xl:h-[300px] w-[320px] xl:w-[300px]' src={Medardo} alt="" /></a>
                </div>
                <div className='content-center mx-auto'>
                    <a href='https://maritimo-recycling.com/' target='_blank' rel='noreferrer'><img className='lg:mb-0 mb-20 h-[280px] xl:h-[300px] w-[400px] xl:w-[400px]' src={maritimo} alt="" /></a>
                </div>
            </div>
            <div className='absolute bottom-0 h-[50px] border-t-[#261539] border-t-2 w-full bg-[#261539] px-2'>
                <div className='flex flex-row items-center content-center justify-center flex-grow h-full'>
                    <p className='text-sm span font-thin w-[33%] justify-center text-left content-center items-center normal-font'>
                        <Link onClick={() => { setTimeout(() => {window.scroll(0,0);}, 500)  }} to='/privacypolicy'>Privacy Policy</Link></p>
                    <p className='w-[33%] text-sm span text-center justify-center content-center items-center normal-font'>Copyright © 2025 PEP Konf</p>
                    <p className='span font-thin text-sm w-[33%] justify-center text-right content-center items-center normal-font'>Made by <a href="https://www.afdu.dev"><span className='text-[#F0E2FF]'>AFDU</span></a></p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Partners
