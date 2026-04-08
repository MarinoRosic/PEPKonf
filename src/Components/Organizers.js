import RevealText from './RevealText';
import OrganizerCard from "./OrganizerCard";
import SectionDivider from "./SectionDivider";
import LZux from "../assets/images/LZUX.webp";
import Marija from "../assets/images/MarijaMamic.webp";
import Anamarija from "../assets/images/AnamarijaLucic.webp";
import Andrea from "../assets/images/Andrea_Batinic.webp";
import Karla from "../assets/images/KarlaSabljic.webp";
import Romana from "../assets/images/Romana_John.webp";

const Organizers = () => {
  return (
    <>
    <section className='flex flex-col w-full h-full overflow-hidden'>
      <header className='pt-24 mx-auto'>
        <h1 className='text-center pb-16 text-5xl font-extrabold text-white md:text-6xl lg:text-8xl font-main'>
          <RevealText>Organizatori</RevealText>
        </h1>
      </header>
      <OrganizerCard name="Leonarda Tikvica" img={LZux}      text="Osnivačica i voditeljica projektnih aktivnosti i programa (alumna)" />
      <OrganizerCard name="Andrea Batinić"   img={Andrea}    text="" objectPosition="center 10%" />
      <OrganizerCard name="Anamarija Lučić"  img={Anamarija} text="Organizatorica i koordinatorica ponuda, nabave, cateringa i programa" />
      <OrganizerCard name="Marija Mamić"     img={Marija}    text="Organizatorica i voditeljica društvenih mreža" />
      <OrganizerCard name="Karla Sabljić"    img={Karla}     text="" noDivider />
      <SectionDivider label="Mentorica" labelPosition="left" />
      <OrganizerCard name="Doc. dr. sc. Romana John" img={Romana} text="" subtitle="Dekanica Fakulteta za medije i odnose s javnošću" borderColor="purple" />
    </section>
    </>
  );
};

export default Organizers;
