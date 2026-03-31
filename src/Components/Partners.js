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
import Medardo from "../assets/images/DubrovnikMed.png"
import RagusaSpirits from "../assets/images/RagusaSpirits.png"
import HoneyDU from "../assets/images/HoneyDU.png"
import DubManuf from "../assets/images/DubrovackaManufaktura.png"

// All logos use object-contain so each image scales to its natural aspect ratio
// within a fixed-height cell — nothing gets cropped or stretched.
// Wide logos stay wide, square logos stay square; only the height is normalised.
const Logo = ({ href, src, alt = '', tall = false }) => (
  <a href={href} target='_blank' rel='noreferrer' className='flex items-center justify-center'>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`w-auto object-contain ${tall ? 'h-36' : 'h-32'}`}
    />
  </a>
)

const Partners = () => {
  var currentYear = new Date().getFullYear();
  return (
    <section className='relative w-full bg-white flex flex-col items-center gap-y-10 pt-10 pb-[70px]'>

      {/* Main partners — taller row, more visual weight */}
      <div className='flex flex-wrap justify-center items-center gap-x-12 gap-y-6 px-8'>
        <Logo href='https://www.huoj.hr/'                    src={UdrugaZaOSJ}       tall />
        <Logo href='https://www.scdu.hr/'                    src={studentskiCentarDU} tall />
        <Logo href='https://www.instagram.com/szdu_unidu/'   src={SZDU}               tall />
      </div>

      {/* Secondary partners */}
      <div className='flex flex-wrap justify-center items-center gap-x-12 gap-y-6 px-8'>
        <Logo href='https://light-media.hr/'  src={lightMedija}   />
        <Logo href='https://www.unidu.hr/'    src={sveucilisteDu} />
        <Logo href='http://fotostar.hr/'      src={fotostar}      />
      </div>

      {/* Product/brand partners */}
      <div className='flex flex-wrap justify-center items-center gap-x-10 gap-y-6 px-8'>
        <Logo href='https://www.dubrovnikmed.com/honeydu/' src={Medardo}       />
        <Logo href='https://www.dubrovnikmed.com/honeydu/' src={RagusaSpirits} />
        <Logo href='https://www.dubrovnikmed.com/honeydu/' src={HoneyDU}       />
        <Logo href='https://www.dubrovnikmed.com/honeydu/' src={DubManuf}      />
      </div>

      {/* Remaining partners */}
      <div className='flex flex-wrap justify-center items-center gap-x-12 gap-y-6 px-8'>
        <Logo href='https://www.slatkokaocukar.com/'  src={slatkoKaoCukar} />
        <Logo href='https://maritimo-recycling.com/'  src={maritimo}       />
      </div>

      {/* Footer bar */}
      <div className='absolute bottom-0 h-[50px] border-t-[#261539] border-t-2 w-full bg-[#261539] px-2'>
        <div className='flex flex-row items-center content-center justify-center flex-grow h-full'>
          <p className='text-sm span font-thin w-[33%] justify-center text-left content-center items-center normal-font'>
            <Link onClick={() => { setTimeout(() => { window.scroll(0, 0); }, 500) }} to='/privacypolicy'>Privacy Policy</Link>
          </p>
          <p className='w-[33%] text-sm span text-center justify-center content-center items-center normal-font'>Copyright © {currentYear} PEP Konf</p>
          <p className='span font-thin text-sm w-[33%] justify-center text-right content-center items-center normal-font'>Made by <a href="/#"><span className='text-[#F0E2FF]'>PRIT</span></a></p>
        </div>
      </div>

    </section>
  )
}

export default Partners
