import type { Localized } from '../i18n/ui';

// Bekezdések HTML-ként (inline <strong>, &amp;), a komponens set:html-lel rendereli.
// Megbízható, statikus tartalom, ezért biztonságos.
export const about: Localized<string[]> = {
  hu: [
    'Senior Backend Fejlesztő és Symfony Specialista vagyok, <strong>10+ év</strong> tapasztalattal, alapvetően komplex, nagyvállalati webalkalmazások fejlesztésében, ügynökségi környezetben. Az utóbbi években React és Flutter irányba is kiterjesztettem a tudásomat, így erős full-stack látásmóddal rendelkezem, és szívesen dolgozom a teljes stacken, ha a projekt ezt igényli.',
    'Jelenleg nyitott vagyok új lehetőségekre — freelance együttműködésekre, termékvezérelt cégekre, vagy startup kezdeményezésekre —, előnyben részesítve a kisebb, fókuszált csapatokat a nagy multinacionális vállalatokkal szemben.',
  ],
  en: [
    'Senior Backend Engineer &amp; Symfony Specialist with <strong>10+ years</strong> of experience, primarily built around high-performance web applications in agency environments. In recent years, I have expanded my skillset into React and Flutter, allowing me to bring a strong full-stack vision and work across the entire stack when a project calls for it.',
    "I'm currently open to new opportunities — freelance collaborations, product-driven teams, or startup ventures — with a clear preference for smaller, focused teams over large multinational corporations.",
  ],
};
