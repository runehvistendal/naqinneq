import { wpQuery } from './wp';

export interface Kontaktperson {
  slug: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  initials: string;
  photoUrl?: string;
}

// ── GraphQL ────────────────────────────────────────────────────────────────

const KONTAKTPERSONER_QUERY = /* GraphQL */ `
  query GetKontaktpersoner {
    kontaktpersoner(first: 50, where: { status: PUBLISH }) {
      nodes {
        slug
        title
        featuredImage {
          node {
            sourceUrl(size: MEDIUM)
          }
        }
        kontaktperson {
          stilling
          telefon
          email
        }
      }
    }
  }
`;

interface WpKontaktpersonerData {
  kontaktpersoner: {
    nodes: Array<{
      slug: string;
      title: string;
      featuredImage: { node: { sourceUrl: string } } | null;
      kontaktperson: {
        stilling: string | null;
        telefon: string | null;
        email: string | null;
      } | null;
    }>;
  };
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function mapWpKontaktperson(
  node: WpKontaktpersonerData['kontaktpersoner']['nodes'][0],
): Kontaktperson {
  return {
    slug: node.slug,
    name: node.title,
    title: node.kontaktperson?.stilling ?? '',
    phone: node.kontaktperson?.telefon ?? '',
    email: node.kontaktperson?.email ?? '',
    initials: getInitials(node.title),
    photoUrl: node.featuredImage?.node?.sourceUrl ?? undefined,
  };
}

export async function getKontaktpersoner(): Promise<Kontaktperson[]> {
  try {
    const data = await wpQuery<WpKontaktpersonerData>(KONTAKTPERSONER_QUERY);
    const nodes = data?.kontaktpersoner?.nodes ?? [];
    if (nodes.length === 0) return STATIC_KONTAKTPERSONER;
    return nodes.map(mapWpKontaktperson);
  } catch {
    return STATIC_KONTAKTPERSONER;
  }
}

// ── Static fallback ────────────────────────────────────────────────────────

export const STATIC_KONTAKTPERSONER: Kontaktperson[] = [
  {
    slug: 'aviaja-olsen',
    name: 'Aviâja Olsen',
    title: 'Specialvejleder, ordblindhed',
    phone: '+299 34 50 11',
    email: 'ao@nanoq.gl',
    initials: 'AO',
  },
  {
    slug: 'poul-erik-hansen',
    name: 'Poul Erik Hansen',
    title: 'Konsulent, læse- og skriveteknologi',
    phone: '+299 34 50 14',
    email: 'peh@nanoq.gl',
    initials: 'PH',
  },
  {
    slug: 'nivi-fleischer',
    name: 'Nivi Fleischer',
    title: 'Koordinator, kurser og events',
    phone: '+299 34 50 17',
    email: 'nf@nanoq.gl',
    initials: 'NF',
  },
];
