import type { Localized, Text } from '../i18n/ui';

export type ExperienceItem = {
  date: string;
  role: Text;
  company: string;
  description: Localized;
};

export const experience: ExperienceItem[] = [
  {
    date: '2017–2026',
    role: 'Senior Web Developer',
    company: 'Webtown',
    description: {
      hu: 'Senior backend fejlesztőként dolgozom egy körülbelül tucatnyi ügyfélprojektből álló portfólión PHP és Symfony alapokon, a teljesen új, zöldmezős projektektől kezdve a nagyméretű legacy platformokig. Feladatköröm magában foglalja az architektúra tervezését, az adatbázis-sémák kialakítását és a meglévő kódbázisok modernizálását egy agilis csapaton belül. Az idő előrehaladtával a backend fókuszú tudásomat React és Flutter ismeretekkel egészítettem ki, ami erős full-stack látásmódot biztosít, és segít áthidalni a fejlesztési szakadékokat, ha a projekt úgy kívánja.',
      en: 'Senior backend engineer working on a portfolio of about a dozen client applications built on PHP and Symfony, ranging from brand new greenfield projects to high-scale legacy platforms. Responsible for architecture design, database schema planning, and modernizing existing codebases within an agile team. Over time, complemented my core backend expertise with React and Flutter to maintain a strong full-stack vision and bridge development gaps when needed.',
    },
  },
  {
    date: '2014–2017',
    role: 'Web Software Engineer / Web Developer',
    company: 'Bemind',
    description: {
      hu: 'Natív PHP és WordPress-alapú webfejlesztéssel kezdtem, ami az itt töltött időm nagy részét kitette. Idővel sikeresen léptem át a modern, objektumorientált fejlesztés világába, ahogy a cég elkezdte bevezetni a Symfony keretrendszert.',
      en: 'Started with core PHP and WordPress-based web development, which made up the majority of my tenure. Over time, successfully transitioned into modern, object-oriented development as the company began adopting the Symfony framework.',
    },
  },
  {
    date: '2013–2016',
    role: { hu: 'Korai karrier', en: 'Early career' },
    company: 'Pannon Egyetem',
    description: {
      hu: 'Egyetemi éveim alatt szereztem meg az első szakmai tapasztalataimat. Kari gyakornoki program keretében részt vettem egy JavaScript-alapú munkafolyamat-szerkesztő fejlesztésében, valamint egy külön megbízásos (contract) projekt keretében dolgoztam a hallgatók sportteljesítményét nyilvántartó alkalmazás karbantartásán és javításán.',
      en: 'Gained initial professional experience during my university years. Assisted in developing a JavaScript-based workflow editor during a faculty internship, and worked on a separate contract project maintaining and improving a student sports-performance tracking application.',
    },
  },
];
