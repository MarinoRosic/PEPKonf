import { motion } from 'framer-motion';
import headerImg from "../assets/images/program.png";
import Table from "./Table";
import RevealText from './RevealText';
import SectionDivider from './SectionDivider';

// Flip to true once the program is ready to show.
const SHOW_PROGRAM = false;

const Program = () => {
  const day1 = [
    { time: '16:30', tema: 'Okupljanje + kava' },
    { time: '17:00', tema: 'Otvaranje PEP Konferencije' },
    { time: '17:15', tema: 'PANEL "Priča iza scene: Kako PR oblikuje vrhunske događaje"', prikazi: true,
      predavaci: [
        'Nevena Rendeli, Prime komunikacije, Womens Weekend',
        'Ivana Medo Bogdanović, Dubrovnik Summer Festival',
        'Martina Pavleković, agencija za vjenčanja "Yes I Du"',
        'Moderator: Mislav Ćimić, novinar HRT Radio Dubrovnik',
      ]},
    { time: '18:20', tema: 'RADIONICA - "Bye bye strahu u javnom nastupu!"', prikazi: true,
      predavaci: ['Pinija Poljaković, trenerica javnog nastupa'] },
    { time: '19:20', tema: 'KRAJ - Networking i druženje' },
  ];

  const day2 = [
    { time: '9:30',  tema: 'Okupljanje + kava' },
    { time: '10:00', tema: 'PANEL - Splitski cluster - snaga kreativnosti u OSJ', prikazi: true,
      predavaci: [
        'Gordan Turković, CTA komunikacije',
        'Luka Šipić, Vrh komunikacije',
        'Andrea Čović Vidović, Voditeljica medija Europske komisije u Hrvatskoj',
        'Moderatorica: Romana Knežević, studentica',
      ]},
    { time: '11:00', tema: '1:1 Iskustvo i rad u eventu, PR, iskustvo, priča...', prikazi: true,
      predavaci: [
        'Nevena Rendeli - Women\'s Weekend, Prime komunikacije',
        'Moderatorica: Anamarija Lučić, studentica',
      ]},
    { time: '11:50 - 12:20', tema: 'PAUZA - kava' },
    { time: '12:20', tema: 'PANEL - mediji', prikazi: true,
      predavaci: [
        'Damira Gregoret, novinarka, urednica i voditeljica informativnog programa RTL-a',
        'Antonija Blaće, voditeljica i kreativna producentica',
        'Moderatorica: Andrea Čović Vidović, Voditeljica medija Europske komisije u Hrvatskoj',
      ]},
    { time: '13:20', tema: '"Kampanje koje se pamte"', prikazi: true,
      predavaci: ['Gordan Turković, CTA komunikacije'] },
    { time: '14:05', tema: 'Self-branding i PR - „Tko sam ja i tko si ti da lakše budemo MI"', prikazi: true,
      predavaci: ['Ermina Duraj, pročelnica Upravnog odjela za poslove Župana, Primorsko-goranska županija'] },
    { time: '14:50', tema: 'KRAJ - Catering & see you on another PEP!' },
  ];

  return (
    <>
    <SectionDivider label="Karijerni put" labelPosition='right'/>
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
