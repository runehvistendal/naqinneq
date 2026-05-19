import { wpQuery, formatDato, contentToParagraphs } from './wp';

export interface Nyhed {
  slug: string;
  tag: string;
  title: string;
  date: string;       // formatted: "21. april 2026"
  dateIso: string;    // "2026-04-21"
  excerpt: string;
  body: string[];
}

// ── GraphQL ────────────────────────────────────────────────────────────────

const NYHEDER_QUERY = /* GraphQL */ `
  query GetNyheder {
    nyheder(first: 100, where: { status: PUBLISH }) {
      nodes {
        slug
        title
        date
        excerpt
        content
        nyheder {
          tag
          dato
        }
      }
    }
  }
`;

interface WpNyhederData {
  nyheder: {
    nodes: Array<{
      slug: string;
      title: string;
      date: string;
      excerpt: string | null;
      content: string | null;
      nyheder: { tag: string | null; dato: string | null } | null;
    }>;
  };
}

function mapWpNyhed(node: WpNyhederData['nyheder']['nodes'][0]): Nyhed {
  const dato = node.nyheder?.dato ?? null;
  const dateIso = dato
    ? `${dato.slice(0, 4)}-${dato.slice(4, 6)}-${dato.slice(6, 8)}`
    : node.date.slice(0, 10);

  return {
    slug: node.slug,
    tag: node.nyheder?.tag ?? 'Nyhed',
    title: node.title,
    date: dato ? formatDato(dato) : new Date(node.date).toLocaleDateString('da-DK', { day: 'numeric', month: 'long', year: 'numeric' }),
    dateIso,
    excerpt: node.excerpt ? node.excerpt.replace(/<[^>]+>/g, '').trim() : '',
    body: node.content ? contentToParagraphs(node.content) : [],
  };
}

export async function getNyheder(): Promise<Nyhed[]> {
  try {
    const data = await wpQuery<WpNyhederData>(NYHEDER_QUERY);
    const nodes = data?.nyheder?.nodes ?? [];
    if (nodes.length === 0) return STATIC_NYHEDER;
    return nodes.map(mapWpNyhed);
  } catch {
    return STATIC_NYHEDER;
  }
}

export async function getNyhed(slug: string): Promise<Nyhed | undefined> {
  const all = await getNyheder();
  return all.find(n => n.slug === slug);
}

// ── Static fallback (bruges til Vercel-build hvis WP er nede) ─────────────

export const STATIC_NYHEDER: Nyhed[] = [
  {
    slug: 'handlingsplan-ordblindhed-2025-2029',
    tag: 'Nyhed',
    title: 'Ny handlingsplan for ordblindhed 2025–2029 er offentliggjort',
    date: '21. april 2026',
    dateIso: '2026-04-21',
    excerpt: 'Naalakkersuisut har offentliggjort den nationale handlingsplan mod ordblindhed og læse-/skrivevanskeligheder.',
    body: [
      'Naalakkersuisut har den 21. april 2026 offentliggjort den nationale handlingsplan mod ordblindhed og læse- og skrivevanskeligheder for perioden 2025–2029. Planen fastlægger en ambitiøs retning for det kommende arbejde og sætter Naqinneq — Videnscenteret — i centrum for indsatsen.',
      'Handlingsplanen indeholder en række konkrete initiativer, herunder opbygning af nationale kompetencer, tidlig opdagelse i folkeskolen, bedre adgang til screenings- og testmaterialer på kalaallisut, samt et styrket samarbejde med uddannelsesinstitutioner og arbejdsmarkedet.',
      'Videnscenteret vil i de kommende måneder udsende mere information om, hvordan handlingsplanen omsættes til konkrete tilbud og ressourcer for borgere, fagfolk og institutioner i hele Grønland.',
    ],
  },
  {
    slug: 'groenlandsk-ordblindetest-paa-misiligutit',
    tag: 'Ressource',
    title: 'Grønlandsk ordblindetest nu tilgængelig på Misiligutit',
    date: '3. marts 2026',
    dateIso: '2026-03-03',
    excerpt: 'Den grønlandsksprogede ordblindetest er nu tilgængelig via misiligutit.naqinneq.gl for fagfolk og vejledere.',
    body: [
      'Den grønlandsksprogede ordblindetest er fra marts 2026 tilgængelig for fagfolk og vejledere via platformen Misiligutit.',
      'Adgang til testen kræver registrering som fagperson. Vejledere, lærere og psykologer kan ansøge om adgang via Videnscenteret.',
    ],
  },
  {
    slug: 'kursus-i-ordblindedagogik-2026',
    tag: 'Kursus',
    title: 'Kursus i ordblindepædagogik – tilmelding åben',
    date: '15. februar 2026',
    dateIso: '2026-02-15',
    excerpt: 'Videnscenteret afholder kursus for lærere og vejledere med fokus på tidlig opdagelse og støtte.',
    body: [
      'Videnscenteret afholder i foråret 2026 et kursus i ordblindepædagogik henvendt til lærere, vejledere og pædagogisk personale i folkeskolen.',
      'Tilmelding er åben frem til 1. april 2026. Kurset er gratis for ansatte i den grønlandske folkeskole.',
    ],
  },
];

/** @deprecated Brug getNyheder() */
export const NYHEDER = STATIC_NYHEDER;

/** Synkront opslag i statisk data — kun til client components (breadcrumb, sidetitel) */
export function getStaticNyhed(slug: string) {
  return STATIC_NYHEDER.find(n => n.slug === slug);
}
