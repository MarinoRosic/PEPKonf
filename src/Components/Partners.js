import React from 'react'
import { Link } from 'react-router-dom'
import RevealText from './RevealText'
import UdrugaZaOSJ from "../assets/images/UdrugaZaOSJ.webp"
import fotostar from "../assets/images/fotostar.webp"
// import sveucilisteDu from "../assets/images/sveucilisteDubrovnik.webp"
import lightMedija from "../assets/images/light_Media.webp"
import SZDU from "../assets/images/SZDU.webp"
import SCDU from "../assets/images/SCDuLogo.webp"
import maritimo from "../assets/images/maritimo.webp"
import slatkoKaoCukar from "../assets/images/slatkoKaoCukar.webp"
import POPUPDecorations from "../assets/images/POP-UP-Decorations.webp"
import Medardo from "../assets/images/DubrovnikMed.webp"
import RagusaSpirits from "../assets/images/RagusaSpirits.webp"
import HoneyDU from "../assets/images/HoneyDU.webp"
import DubManuf from "../assets/images/DubrovackaManufaktura.webp"
import UNIDUMediji from "../assets/images/UNIDU_Mediji_logo.webp"
import manjgura from "../assets/images/manjguraLogo.webp"
import prijekoPalace from "../assets/images/prijekoPalaceLogo.webp"
import staraLoza from "../assets/images/staraLozaLogo.webp"
import cocaCola from "../assets/images/cocaColaLogo.webp"
import cedevita from "../assets/images/cedevitaLogo.webp"
import loveBar from "../assets/images/loveBarLogo.webp"
import dubPub from "../assets/images/dubPubLogo.webp"
import letunic from "../assets/images/letunicLogo.webp"
import miljas from "../assets/images/miljasLogo.webp"
import libertas from "../assets/images/libertasDULogo.webp"

// All logos use object-contain so each image scales to its natural aspect ratio
// within a fixed-height cell — nothing gets cropped or stretched.
// Wide logos stay wide, square logos stay square; only the height is normalised.
const Logo = ({ href, src, alt = '', xl = false, className = '' }) => (
  <a href={href} target='_blank' rel='noreferrer' className={`flex items-center justify-center ${className}`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`max-w-full object-contain ${xl ? 'h-32 sm:h-36 lg:h-44' : 'h-28 sm:h-36'}`}
    />
  </a>
)

const SectionTitle = ({ children }) => (
  <h2 className='text-2xl font-semibold tracking-wide text-[#261539] uppercase'>
    <RevealText>{children}</RevealText>
  </h2>
)

const Partners = () => {
  var currentYear = new Date().getFullYear();
  return (
    <section className='relative w-full bg-white flex flex-col items-center gap-y-10 pt-10 pb-[70px]'>

      {/* ── POKROVITELJI ── */}
      <SectionTitle>Pokrovitelji</SectionTitle>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6 px-8'>
        <Logo href='https://www.unidu.hr/kom/'             src={UNIDUMediji}   xl />
        <Logo href='https://www.huoj.hr/'                  src={UdrugaZaOSJ}   xl />
        <Logo href='https://www.instagram.com/szdu_unidu/' src={SZDU}          xl />
        <Logo href='https://www.scdu.hr'                   src={SCDU}          xl />
        {/* <Logo href='https://www.unidu.hr/' src={sveucilisteDu} xl /> */}
      </div>

      {/* ── SPONZORI ── */}
      <SectionTitle>Sponzori</SectionTitle>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-6 px-8 [&>*:last-child]:col-span-full [&>*:last-child]:justify-self-center'>
        <Logo href='https://manjgura.hr'                     src={manjgura}       />
        <Logo href='https://prijekopalace.com/hr'            src={prijekoPalace}  />
        <Logo href='https://staraloza.com'                   src={staraLoza}      />
        <Logo href='https://light-media.hr/'                 src={lightMedija}    />
        <Logo href='http://fotostar.hr/'                     src={fotostar}       />
        <Logo href='https://www.cedevita.com'                src={cedevita}       />
        <Logo href='https://www.coca-cola.com/hr/hr'         src={cocaCola}       />
        <Logo href='https://maritimo-recycling.com/'         src={maritimo}       />
        <Logo href='https://www.slatkokaocukar.com/'         src={slatkoKaoCukar} />
        <Logo href='https://www.dubrovnikmed.com/honeydu/'   src={Medardo}        />
        <Logo href='https://www.dubrovnikmed.com/honeydu/'   src={RagusaSpirits}  />
        <Logo href='https://www.dubrovnikmed.com/honeydu/'   src={HoneyDU}        />
        <Logo href='https://www.dubrovnikmed.com/honeydu/'   src={DubManuf}       />
        <Logo href='https://www.instagram.com/pop_up.decorations/' src={POPUPDecorations} />
        <Logo href='https://lovebardubrovnik.com'            src={loveBar}          />
        <Logo href='https://www.instagram.com/dubpubkviz/'   src={dubPub}           />
        <Logo href='https://www.instagram.com/kusaonica_leatus_letunic/'  src={letunic}          />
        <Logo href='https://www.instagram.com/milja.s_dubrovnik/'         src={miljas}           />
        <Logo href='https://www.libertasdubrovnik.hr'        src={libertas}         />
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
