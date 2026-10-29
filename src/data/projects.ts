import type { Localized, Text } from '../i18n/ui';

export type Tag = { label: Text; variant?: 'core' | 'beta' };
export type Project = {
  title: Text;
  featured?: boolean;
  description: Localized;
  tags: Tag[];
};

export const projects: Project[] = [
  {
    title: { hu: 'Futóverseny nevezési platform', en: 'Race registration platform' },
    featured: true,
    description: {
      hu: '2022 óta futó, visszatérő egyedi megbízás, amely minden évben új üzleti igényekkel bővül. A projekt magában foglalja a teljes nevezési felület és az online fizetési rendszer fejlesztését, valamint a háttérfolyamatokat támogató backoffice rendszert. Tiszta Symfony alapú fejlesztés, amely erős termékszemléletet és hosszú távú tervezést igényel.',
      en: 'A recurring custom contract running since 2022, expanding with new business requirements every year. The project covers the complete registration portal, online payment gateway integration, and comprehensive backoffice support. Built on native Symfony, requires a strong product-driven mindset and long-term architectural planning.',
    },
    tags: [
      { label: 'PHP', variant: 'core' },
      { label: 'Symfony', variant: 'core' },
      { label: { hu: 'online fizetés', en: 'online payment' } },
    ],
  },
  {
    title: 'Saudipedia — Enterprise Content Platform',
    featured: true,
    description: {
      hu: 'Többrétegű nagyvállalati projekt: egyedi Ibexa DXP-alapú CMS platform fejlesztése, valamint több mint 30 000 többnyelvű cikk (a teljes fordításokkal együtt) migrálása egy dokumentáció nélküli, legacy adatbázis-dumpból. A feladat során a nulláról rekonstruáltam az adatszerkezetet és a tartalmi kapcsolatokat. A platformhoz egy React/Flutter alapú mobil companion app is fejlesztés alatt áll.',
      en: 'A multi-layered enterprise project involving custom Ibexa DXP-based CMS development and the complex migration of 30,000+ multilingual articles from an undocumented legacy database dump. Successfully reconstructed the entire data structure and content relationships from scratch. The platform also includes a React/Flutter-based mobile companion app currently in beta.',
    },
    tags: [
      { label: 'PHP', variant: 'core' },
      { label: 'Symfony', variant: 'core' },
      { label: 'Ibexa DXP', variant: 'core' },
      { label: 'n8n' },
      { label: 'React / Flutter · beta', variant: 'beta' },
    ],
  },
  {
    title: {
      hu: 'Hallgatói sportteljesítmény-nyilvántartó',
      en: 'Student Sports Performance Tracking Platform',
    },
    description: {
      hu: 'Eredetileg natív PHP-ban írt egyetemi sportteljesítmény-követő alkalmazás, amelyet egy későbbi, egyedi megbízás keretében teljesen modernizáltam. A projekt legfőbb mérföldköve a legacy kódbázis szisztematikus átmigrálása és teljes újraírása volt modern Symfony architektúrára, garantálva a meglévő adatok folytonosságát és a rendszer stabilitását.',
      en: 'A student sports-performance tracking application originally written in native PHP, later fully modernized under a dedicated contract. The core milestone of the project was systematically migrating and rewriting the legacy codebase into a modern Symfony architecture, ensuring data continuity and system stability.',
    },
    tags: [
      { label: 'PHP', variant: 'core' },
      { label: 'Symfony', variant: 'core' },
      { label: 'Legacy Migration' },
      { label: 'Database Refactoring' },
    ],
  },
];
