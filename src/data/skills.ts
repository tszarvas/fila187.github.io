import type { Text } from '../i18n/ui';

export type Badge = { label: Text; core?: boolean };
export type SkillGroup = { title: Text; badges: Badge[] };

export const skills: SkillGroup[] = [
  {
    title: 'Backend',
    badges: [
      { label: 'PHP 5.4–8.5', core: true },
      { label: 'Symfony 2.7–8.0', core: true },
      { label: 'Ibexa DXP / eZ Publish 5+', core: true },
      { label: 'API Platform' },
    ],
  },
  {
    title: { hu: 'AI-asszisztált fejlesztés', en: 'AI-Assisted Development' },
    badges: [
      { label: { hu: 'Spec-driven fejlesztés', en: 'Spec-driven development' }, core: true },
    ],
  },
  {
    title: 'Frontend',
    badges: [
      { label: 'React (Symfony UX)' },
      { label: 'TypeScript' },
      { label: 'Vanilla JS', core: true },
      { label: 'jQuery' },
      { label: 'Bootstrap / SCSS', core: true },
    ],
  },
  {
    title: { hu: 'Mobil', en: 'Mobile' },
    badges: [{ label: 'Flutter' }, { label: 'BLoC' }],
  },
  {
    title: { hu: 'Adatbázis', en: 'Database' },
    badges: [
      { label: 'MySQL / MariaDB', core: true },
      { label: 'Doctrine ORM', core: true },
    ],
  },
  {
    title: 'DevOps',
    badges: [
      { label: 'Docker', core: true },
      { label: 'DDEV', core: true },
      { label: 'Linux', core: true },
      { label: 'Platform.sh / Upsun', core: true },
      { label: 'GitLab CI/CD' },
    ],
  },
  {
    title: { hu: 'Egyéb', en: 'Other' },
    badges: [{ label: 'Solr' }, { label: 'Fastly' }, { label: 'n8n' }],
  },
];
