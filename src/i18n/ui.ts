import { getRelativeLocaleUrl } from 'astro:i18n';

export const languages = { hu: 'Magyar', en: 'English' } as const;

// Az egyetlen hely, ahol a Lang típus definiálva van; mindenhol innen importáljuk.
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'hu';

// Open Graph és schema.org nyelvkódok.
export const ogLocales: Record<Lang, string> = { hu: 'hu_HU', en: 'en_US' };
export const bcp47: Record<Lang, string> = { hu: 'hu-HU', en: 'en-US' };

// Kötelezően mindkét nyelven megadott mező.
export type Localized<T = string> = Record<Lang, T>;
// Sima string = nyelvfüggetlen érték, Localized = nyelvenként eltér.
export type Text = string | Localized;

export function localize(value: Text, lang: Lang): string {
  return typeof value === 'string' ? value : value[lang];
}

const hu = {
  'nav.about': 'Rólam',
  'nav.skills': 'Skillek',
  'nav.experience': 'Tapasztalat',
  'nav.projects': 'Projektek',
  'nav.contact': 'Kapcsolat',
  'hero.tagline':
    'Backend architekt mély PHP/Symfony gyökerekkel, React és Flutter szakértelemmel kiegészítve, hogy a teljes fejlesztési folyamatot végig tudjam vinni.',
  'cta.contact': 'kapcsolat()',
  'cta.projects': 'projektek_megtekintese()',
  'cv.download': 'cv_letoltese()',
  'cv.href': 'cv-szarvas-tamas-hu.pdf',
  'cookie.text':
    'Ez az oldal sütiket használ a látogatottság mérésére (Google Analytics). Adatgyűjtés csak elfogadás után indul.',
  'cookie.decline': 'elutasítom()',
  'cookie.accept': 'elfogadom()',
  'aria.home': 'Kezdőlap',
  'aria.langToggle': 'Nyelv váltása',
  'aria.themeToggle': 'Téma váltása',
  'aria.menu': 'Menü',
  'aria.cookieConsent': 'Cookie-hozzájárulás',
  'meta.title': 'Tamás Szarvas — Senior Symfony Engineer',
  'meta.description':
    'Szarvas Tamás — Senior Symfony fejlesztő. PHP/Symfony háttér, React és Flutter tudással kiegészítve. Portfólió és önéletrajz, Budapest.',
  'person.jobTitle': 'Senior Symfony fejlesztő',
  'person.description':
    'Senior Backend Fejlesztő és Symfony Specialista 10+ év tapasztalattal, alapvetően nagy teljesítményű webalkalmazások fejlesztésében, ügynökségi környezetben.',
  '404.title': 'Az oldal nem található',
  '404.text': 'A keresett oldal nem létezik vagy áthelyezésre került.',
  '404.home': 'vissza_a_kezdolapra()',
} as const;

export type UiKey = keyof typeof hu;

// A Record típus miatt a fordító kikényszeríti, hogy minden kulcs szerepeljen angolul is.
const en: Record<UiKey, string> = {
  'nav.about': 'About',
  'nav.skills': 'Skills',
  'nav.experience': 'Experience',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',
  'hero.tagline':
    'Backend architect with deep roots in PHP/Symfony, complemented by React and Flutter expertise to drive entire development pipelines.',
  'cta.contact': 'contact()',
  'cta.projects': 'view_projects()',
  'cv.download': 'download_cv()',
  'cv.href': 'cv-szarvas-tamas-en.pdf',
  'cookie.text':
    'This site uses cookies to measure traffic (Google Analytics). No data is collected until you accept.',
  'cookie.decline': 'decline()',
  'cookie.accept': 'accept()',
  'aria.home': 'Home',
  'aria.langToggle': 'Switch language',
  'aria.themeToggle': 'Toggle theme',
  'aria.menu': 'Menu',
  'aria.cookieConsent': 'Cookie consent',
  'meta.title': 'Tamás Szarvas — Senior Symfony Engineer',
  'meta.description':
    'Tamás Szarvas — Senior Symfony Engineer. PHP/Symfony background, extended into React and Flutter. Portfolio & CV, Budapest.',
  'person.jobTitle': 'Senior Symfony Engineer',
  'person.description':
    'Senior Backend Engineer & Symfony Specialist with 10+ years of experience, primarily built around high-performance web applications in agency environments.',
  '404.title': 'Page not found',
  '404.text': 'The page you are looking for does not exist or has been moved.',
  '404.home': 'back_to_home()',
};

const ui: Record<Lang, Record<UiKey, string>> = { hu, en };

export function useTranslations(lang: Lang) {
  // Hiányzó kulcs esetén a magyar szöveg a fallback.
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first in languages ? (first as Lang) : defaultLang;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'hu' ? 'en' : 'hu';
}

export function getAlternateUrl(lang: Lang, path = ''): string {
  return getRelativeLocaleUrl(otherLang(lang), path);
}
