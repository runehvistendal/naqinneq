export interface Kursus {
  slug: string;
  title: string;
  date: string;
  dateIso: string;
  location: string;
  duration: string;
  targetGroup: string;
  excerpt: string;
  description: string[];
  program: { time: string; item: string }[];
  maxParticipants: number;
  deadline: string;
}

export const KURSER: Kursus[] = [
  {
    slug: 'ordblindedagogik-foraar-2026',
    title: 'Kursus i ordblindepædagogik',
    date: '22.–23. maj 2026',
    dateIso: '2026-05-22',
    location: 'Nuuk — Ilinniarfissuaq, lok. 204',
    duration: '2 dage (09–16)',
    targetGroup: 'Lærere, vejledere og pædagogisk personale i folkeskolen',
    excerpt: 'Todageskursus med fokus på tidlig opdagelse af læse- og skrivevanskeligheder og konkrete støttestrategier i undervisningen.',
    description: [
      'Dette kursus giver dig praktiske redskaber til at opdage og støtte elever med ordblindhed eller andre læse- og skrivevanskeligheder. Du lærer at anvende de screenings- og testmaterialer, som Naqinneq stiller til rådighed, og arbejder med konkrete cases fra hverdagen.',
      'Kurset veksler mellem oplæg, gruppearbejde og øvelser. Du tager hjem med en konkret handleplan for, hvordan du kan styrke din praksis — uanset om du er lærer, vejleder eller pædagogisk konsulent.',
    ],
    program: [
      { time: 'Dag 1 · 09:00', item: 'Velkomst og introduktion til ordblindhed' },
      { time: 'Dag 1 · 10:00', item: 'Tegn og symptomer — hvad ser vi i klasselokalet?' },
      { time: 'Dag 1 · 12:00', item: 'Frokost' },
      { time: 'Dag 1 · 13:00', item: 'Screeningsmaterialer i praksis' },
      { time: 'Dag 1 · 15:30', item: 'Opsamling og spørgsmål' },
      { time: 'Dag 2 · 09:00', item: 'Støttestrategier i undervisningen' },
      { time: 'Dag 2 · 11:00', item: 'IntoWords og digitale hjælpemidler' },
      { time: 'Dag 2 · 12:00', item: 'Frokost' },
      { time: 'Dag 2 · 13:00', item: 'Cases og gruppeøvelser' },
      { time: 'Dag 2 · 15:00', item: 'Handleplan og afrunding' },
    ],
    maxParticipants: 24,
    deadline: '1. maj 2026',
  },
  {
    slug: 'intowords-for-laerere-2026',
    title: 'IntoWords for lærere — kom godt i gang',
    date: '10. juni 2026',
    dateIso: '2026-06-10',
    location: 'Online (Teams)',
    duration: '3 timer (10:00–13:00)',
    targetGroup: 'Lærere og pædagogisk personale',
    excerpt: 'Kort onlinekursus der viser, hvordan du sætter IntoWords op og bruger det i din undervisning.',
    description: [
      'IntoWords er et digitalt læse- og skrivehjælpemiddel, der kan gøre en stor forskel for elever med ordblindhed. På dette kursus lærer du at installere og konfigurere IntoWords på skolens enheder, og du får konkrete ideer til, hvordan du integrerer det i din daglige undervisning.',
      'Kurset foregår online og varer tre timer. Du behøver ingen teknisk erfaring — vi starter fra bunden.',
    ],
    program: [
      { time: '10:00', item: 'Introduktion til IntoWords' },
      { time: '10:30', item: 'Installation og opsætning — live gennemgang' },
      { time: '11:30', item: 'Pause' },
      { time: '11:45', item: 'IntoWords i undervisningen — cases og ideer' },
      { time: '12:30', item: 'Spørgsmål og fri øvelse' },
    ],
    maxParticipants: 40,
    deadline: '3. juni 2026',
  },
];

export function getKursus(slug: string): Kursus | undefined {
  return KURSER.find(k => k.slug === slug);
}
