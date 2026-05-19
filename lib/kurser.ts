import { wpQuery, formatDato, contentToParagraphs } from './wp';

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

// ── GraphQL ────────────────────────────────────────────────────────────────

const KURSER_QUERY = /* GraphQL */ `
  query GetKurser {
    kurser(first: 100, where: { status: PUBLISH }) {
      nodes {
        slug
        title
        excerpt
        content
        kursus {
          dato
          sted
          varighed
          deadline
          maksDeltagere
          maalgruppe
          program
        }
      }
    }
  }
`;

interface WpKurserData {
  kurser: {
    nodes: Array<{
      slug: string;
      title: string;
      excerpt: string | null;
      content: string | null;
      kursus: {
        dato: string | null;
        sted: string | null;
        varighed: string | null;
        deadline: string | null;
        maksDeltagere: number | null;
        maalgruppe: string | null;
        program: string | null;
      } | null;
    }>;
  };
}

function parseProgram(text: string | null): { time: string; item: string }[] {
  if (!text) return [];
  return text
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const match = line.match(/^(\d{1,2}[:.]\d{2}(?:\s*[–-]\s*\d{1,2}[:.]\d{2})?|Dag\s*\d[^:]*)\s*[–:-]\s*(.+)$/);
      if (match) return { time: match[1].trim(), item: match[2].trim() };
      return { time: '', item: line };
    });
}

function mapWpKursus(node: WpKurserData['kurser']['nodes'][0]): Kursus {
  const k = node.kursus;
  const dato = k?.dato ?? null;
  const dateIso = dato
    ? `${dato.slice(0, 4)}-${dato.slice(4, 6)}-${dato.slice(6, 8)}`
    : '';

  return {
    slug: node.slug,
    title: node.title,
    date: dato ? formatDato(dato) : '',
    dateIso,
    location: k?.sted ?? '',
    duration: k?.varighed ?? '',
    targetGroup: k?.maalgruppe ?? '',
    excerpt: node.excerpt ? node.excerpt.replace(/<[^>]+>/g, '').trim() : '',
    description: node.content ? contentToParagraphs(node.content) : [],
    program: parseProgram(k?.program ?? null),
    maxParticipants: k?.maksDeltagere ?? 0,
    deadline: k?.deadline ?? '',
  };
}

export async function getKurser(): Promise<Kursus[]> {
  try {
    const data = await wpQuery<WpKurserData>(KURSER_QUERY);
    const nodes = data?.kurser?.nodes ?? [];
    if (nodes.length === 0) return STATIC_KURSER;
    return nodes.map(mapWpKursus);
  } catch {
    return STATIC_KURSER;
  }
}

export async function getKursus(slug: string): Promise<Kursus | undefined> {
  const all = await getKurser();
  return all.find(k => k.slug === slug);
}

// ── Static fallback ────────────────────────────────────────────────────────

export const STATIC_KURSER: Kursus[] = [
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
      'Dette kursus giver dig praktiske redskaber til at opdage og støtte elever med ordblindhed eller andre læse- og skrivevanskeligheder.',
      'Kurset veksler mellem oplæg, gruppearbejde og øvelser. Du tager hjem med en konkret handleplan for, hvordan du kan styrke din praksis.',
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
      'IntoWords er et digitalt læse- og skrivehjælpemiddel, der kan gøre en stor forskel for elever med ordblindhed.',
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

/** @deprecated Brug getKurser() */
export const KURSER = STATIC_KURSER;

/** Synkront opslag i statisk data — kun til client components (breadcrumb, sidetitel) */
export function getStaticKursus(slug: string) {
  return STATIC_KURSER.find(k => k.slug === slug);
}
