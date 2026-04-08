import React from 'react'
import { Link } from 'react-router-dom'
import UdrugaZaOSJ from "../assets/images/UdrugaZaOSJ.webp"
import fotostar from "../assets/images/fotostar.webp"
import sveucilisteDu from "../assets/images/sveucilisteDubrovnik.webp"
import lightMedija from "../assets/images/light_Media.webp"
import SZDU from "../assets/images/SZDU.webp"
import maritimo from "../assets/images/maritimo.webp"
import slatkoKaoCukar from "../assets/images/slatkoKaoCukar.webp"
import POPUPDecorations from "../assets/images/POP-UP-Decorations.webp"
import Medardo from "../assets/images/DubrovnikMed.webp"
import RagusaSpirits from "../assets/images/RagusaSpirits.webp"
import HoneyDU from "../assets/images/HoneyDU.webp"
import DubManuf from "../assets/images/DubrovackaManufaktura.webp"
import UNIDUMediji from "../assets/images/UNIDU_Mediji_logo.webp"

// All logos use object-contain so each image scales to its natural aspect ratio
// within a fixed-height cell — nothing gets cropped or stretched.
// Wide logos stay wide, square logos stay square; only the height is normalised.
const Logo = ({ href, src, alt = '', tall = false, xl = false, className = '' }) => (
  <a href={href} target='_blank' rel='noreferrer' className={`flex items-center justify-center ${className}`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`max-w-full object-contain ${xl ? 'h-24 sm:h-32 lg:h-40' : tall ? 'h-28 sm:h-36' : 'h-24 sm:h-32'}`}
    />
  </a>
)

const Partners = () => {
  var currentYear = new Date().getFullYear();
  return (
    <section className='relative w-full bg-white flex flex-col items-center gap-y-10 pt-10 pb-[70px]'>

      {/* Main partners — 4-in-a-row on lg+, 2×2 on smaller */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6 px-8'>
        <Logo href='https://www.unidu.hr/kom/'             src={UNIDUMediji}   xl />
        <Logo href='https://www.huoj.hr/'                  src={UdrugaZaOSJ}   xl />
        <Logo href='https://www.instagram.com/szdu_unidu/' src={SZDU}          xl />
        <Logo href='https://www.unidu.hr/'                 src={sveucilisteDu} xl />
      </div>


      {/* Secondary + remaining partners — 5-in-a-row on lg+; POP-UP alone then 2×2 on smaller */}
      <div className='grid grid-cols-2 lg:grid-cols-5 gap-x-12 gap-y-6 px-8'>
        <Logo href='https://light-media.hr/'             src={lightMedija}   />
        <Logo href='http://fotostar.hr/'                 src={fotostar}      />
        <Logo href='https://www.slatkokaocukar.com/'     src={slatkoKaoCukar} />
        <Logo href='https://maritimo-recycling.com/'     src={maritimo}       />
        <Logo href='https://www.instagram.com/pop_up.decorations/'                                  src={POPUPDecorations} className='col-span-2 lg:col-span-1' xl/>
      </div>

      {/* Product/brand partners — 4-in-a-row on lg+, 2×2 on smaller */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6 px-8'>
        <Logo href='https://www.dubrovnikmed.com/honeydu/' src={Medardo}       />
        <Logo href='https://www.dubrovnikmed.com/honeydu/' src={RagusaSpirits} />
        <Logo href='https://www.dubrovnikmed.com/honeydu/' src={HoneyDU}       />
        <Logo href='https://www.dubrovnikmed.com/honeydu/' src={DubManuf}      />
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
