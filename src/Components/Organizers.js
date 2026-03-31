import RevealText from './RevealText';
import OrganizerCard from "./OrganizerCard";
import LZux from "../assets/images/LZUX.jpg";
import Marija from "../assets/images/MarijaMamic.jpeg";
import Anamarija from "../assets/images/AnamarijaLucic.jpeg";

const Organizers = () => {
  return (
    <>
    <section className='flex flex-col w-full h-full overflow-hidden'>
      <header className='pt-32 mx-auto'>
        <h1 className='pb-10 text-5xl font-extrabold text-white lg:text-8xl font-main'>
          <RevealText>Organizatori:</RevealText>
        </h1>
      </header>
      <OrganizerCard name="Leonarda Tikvica" img={LZux}      text="Osnivačica i voditeljica projektnih aktivnosti i programa (alumna)" />
      <OrganizerCard name="Anamarija Lučić"  img={Anamarija} text="Organizatorica i koordinatorica ponuda, nabave, cateringa i programa" />
      <OrganizerCard name="Marija Mamić"     img={Marija}    text="Organizatorica i voditeljica društvenih mreža" />
    </section>
    </>
  );
};

export default Organizers;
