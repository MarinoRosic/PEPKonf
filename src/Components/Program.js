import { motion } from 'framer-motion';
import headerImg from "../assets/images/program.webp";
import Table from "./Table";
import RevealText from './RevealText';
import SectionDivider from './SectionDivider';

// Flip to true once the program is ready to show.
const SHOW_PROGRAM = true;

const Program = () => {
  const day1 = [
    { time: '16:30h', tema: 'Okupljanje' },
    { time: '17:00h', tema: 'OTVARANJE KONFERENCIJE', prikazi: true,
      fullName: [''],
      lecturerData: ['uvodni govor - Sveučilište, Fakultet, HUOJ'] },
    { time: '17:15h', tema: '1 na 1: Fireside chat: PR unplugged - razgovor bez filtera', prikazi: true,
      fullName: ['Luka Šipić | Ivan Perišić'],
      lecturerData: ['PRo-kreativna agencija Vrh Komunikacije'],
      moderator: '' },
    { time: '18:20h', tema: '1 na 1: Eko je novi trend / „Otpad kao resurs: komunikacija održivosti u praksi”', prikazi: true,
      fullName: ['Marjan Žitnik'],
      lecturerData: ['Maritimo Recycling'],
      moderator: 'Moderatorica: Anamarija Lučić, studentica 2. godine DS OSJ' },
    { time: '20:15h', tema: 'KRAJ - Networking i druženje - LOVE BAR' },
  ];

  const day2 = [
    { time: '9:30h',  tema: 'Okupljanje' },
    { time: '10:00h - 10:45h', tema: '1 na 1: Mediji iz prve ruke - iskustvo, izazovi i odgovornost', prikazi: true,
      fullName: [
        'Mario Jurič',
      ],
      lecturerData: [
        'Reporter, urednik i voditelj - RTL | alumni Fakulteta za medije i odnose s javnošću UNIDU',
      ],
      moderator: 'Moderatorica: Dora Vulić, studentica 2. godine preddipomskog studija MIKD'},
    { time: '10:50h - 11:30h', tema: 'Iza digitalnih kampanja: strategija, praksa i odgovornost', prikazi: true,
      fullName: [
        'Ivana Bilić',
      ],
      lecturerData: [
        "Viši specijalist za digitalni marketing u Atlantic Grupi (Cedevita) | predavačica na Algebra Bernays",
      ]
    },
    { time: '11:30h - 11:45h', tema: 'kava pauza' },
    { time: '11:50h - 12:50h', tema: 'Odgovornost u PR-u: izazovi agencijskog rada', prikazi: true,
      fullName: [
        'Krešimir Macan',
        'Valentina Mezdić',
        'Jerko Trogrlić',
      ],
      lecturerData: [
        'vlasnik i osnivač agencije Manjgura',
        'voditeljica poslovanja s klijentima u CTA komunikacijama',
        'direktor agencije za odnose s javnošću VAJT d.o.o.',
      ],
      moderator: 'Moderatorica: Karla Sabljić, studentica 1. godine DS OSJ'},
    { time: '12:50h - 13:30h', tema: '1 na 1: Komunikacija u javnom sektoru: odgovornost i praksa', prikazi: true,
      fullName: ['Andrijana Biskup'],
      lecturerData: ['glasnogovornica Policijske uprave DNŽ'],
       moderator: 'Moderatorica: Chiara Agreš, studentica 1. godine preddiplomskog studija MIKD'
    },
    { time: '13:30h - 14:15h', tema: 'CATERING'},
    { time: '14:15h - 14:55h', tema: 'Bez filtera: što znači preuzeti odgovornost za svoj put', prikazi: true,
      fullName: ['Tina Šmanjak'],
      lecturerData: ['poduzetnica Fitzone.hr i Bossy | alumna Fakulteta za medije i odnose s javnošću UNIDU'] },
    { time: '14:55h - 15:55h', tema: 'Iz Dubrovnika do velikih priča i projekata: PR iz prve ruke', prikazi: true,
      fullName: ['Krešimir Macan', 'Tilda Bogdanović'],
      lecturerData: ['vlasnik i osnivač agencije Manjgura', 'vlasnica agencija Dubrovnik PartneR'],
      moderator: 'Moderatorica: Anamarija Lučić, studentica 2. godine DS OSJ'
    },
    { time: '16:00h', tema: 'KRAJ' },
  ];

  return (
    <>
    <SectionDivider label="Korporativno komuniciranje" labelPosition='right'/>
      <section className='flex flex-col w-full min-h-screen'>
        <header className='pt-16 mx-auto'>
          <h1 className='absolute z-20 text-5xl font-bold text-white md:text-6xl lg:text-8xl'>
            <RevealText>PRogram</RevealText>
          </h1>
          <div className='pt-12 lg:pt-20'>
            <img className="rotate-180 w-[240px] lg:w-[480px]" src={headerImg} alt="" loading="lazy" decoding="async" />
          </div>
        </header>
        {SHOW_PROGRAM ? (
          <>
            <Table datum="16.4. Četvrtak" day={day1} />
            <Table datum="17.4. Petak"   day={day2} />
          </>
        ) : (
          <motion.div
            className="flex flex-col items-center justify-center flex-1 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2, delayChildren: 0.15 } },
            }}
          >
            <motion.p
              className="text-3xl lg:text-5xl font-thin text-white tracking-widest uppercase"
              variants={{
                hidden:  { opacity: 0, y: 18, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              Uskoro
            </motion.p>
            <motion.p
              className="text-xl lg:text-5xl text-[#db9bd5] tracking-wide text-center max-w-2xl lg:max-w-6xl px-6"
              variants={{
                hidden:  { opacity: 0, y: 12, filter: 'blur(6px)' },
                visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              PRogram će biti objavljen uskoro.
            </motion.p>
            <motion.div
              className="flex gap-3 pt-2"
              variants={{
                hidden:  { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5 } },
              }}
            >
              {[0, 1, 2].map(i => (
                <motion.span
                  key={i}
                  className="h-2 w-2 rounded-full bg-[#db9bd5]"
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.3, 0.8] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.22, ease: 'easeInOut' }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </section>
    </>
  );
};

export default Program;
