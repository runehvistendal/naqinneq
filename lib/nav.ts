export type Locale = 'da' | 'kl';

export interface NavChild {
  id: string;
  da: string;
  kl: string;
  path: string;
}

export interface NavGroup {
  id: string;
  da: string;
  kl: string;
  children: NavChild[];
}

export interface NavSection {
  id: string;
  da: string;
  kl: string;
  path: string; // path of the section's first child (where clicking the top nav goes)
  children?: NavChild[];
  groups?: NavGroup[];
}

export const NAV: NavSection[] = [
  {
    id: 'vidensomraader',
    da: 'Vidensområder',
    kl: 'Ilisimasalinniaqtussat',
    path: '/vidensomraader/ordblindhed',
    children: [
      { id: 'ordblindhed',      da: 'Ordblindhed',                   kl: 'Naqinneq',                              path: '/vidensomraader/ordblindhed' },
      { id: 'skriftsprog',      da: 'Skriftsprogsvanskeligheder',    kl: 'Allakkatigut nalunngissutissarsiorneq', path: '/vidensomraader/skriftsprogsvanskeligheder' },
      { id: 'sprogforstaaelse', da: 'Sprogforståelse',               kl: 'Oqaatsit paasisinnaaneq',               path: '/vidensomraader/sprogforstaaelse' },
    ],
  },
  {
    id: 'tests',
    da: 'Tests og screening',
    kl: 'Misilitsineq',
    path: '/tests/screening-for-ordblindhed',
    children: [
      { id: 'tests-screening', da: 'Screening for ordblindhed',        kl: 'Naqinnerit pillugit nalilersorneq',            path: '/tests/screening-for-ordblindhed' },
      { id: 'tests-gl',        da: 'Den grønlandske ordblindetest',    kl: 'Kalaallisut naqinnerit pillugit nalilersorneq', path: '/tests/den-groenlandske-ordblindetest' },
      { id: 'tests-dk',        da: 'Den danske ordblindetest',         kl: 'Dansk naqinnerit pillugit nalilersorneq',      path: '/tests/den-danske-ordblindetest' },
    ],
  },
  {
    id: 'ressourcer',
    da: 'Ressourcer',
    kl: 'Atortut',
    path: '/ressourcer/laese-og-skriveteknologi',
    children: [
      { id: 'res-intowords',    da: 'Læse- og skriveteknologi (IntoWords)', kl: 'Atuissaanermik allassanermillu teknologia (IntoWords)', path: '/ressourcer/laese-og-skriveteknologi' },
      { id: 'res-vejledninger', da: 'Vejledninger',                          kl: 'Nalunaarusiissinerit',                                  path: '/ressourcer/vejledninger' },
      { id: 'res-materialer',   da: 'Materialer',                            kl: 'Atortussiat',                                          path: '/ressourcer/materialer' },
      { id: 'res-rapporter',    da: 'Rapporter',                             kl: 'Nalunaarusiit',                                        path: '/ressourcer/rapporter' },
      { id: 'res-podcasts',     da: 'Podcasts',                              kl: 'Podcasts',                                             path: '/ressourcer/podcasts' },
      { id: 'res-videoer',      da: 'Videoer',                               kl: 'Videot',                                               path: '/ressourcer/videoer' },
      { id: 'res-kurser',       da: 'Kurser',                                kl: 'Kursissat',                                            path: '/ressourcer/kurser' },
    ],
  },
  {
    id: 'maalgrupper',
    da: 'Målgrupper',
    kl: 'Tunngavissat',
    path: '/maalgrupper/folkeskolen/overblik',
    groups: [
      {
        id: 'folkeskolen',
        da: 'Folkeskolen',
        kl: 'Atuarfimmut tunngassumik',
        children: [
          { id: 'fs-overblik',   da: 'Overblik',               kl: 'Nalunaarusiissinerit',              path: '/maalgrupper/folkeskolen/overblik' },
          { id: 'fs-lovgivning', da: 'Lovgivning',              kl: 'Inatsisitigut nalunaarusiissinerit', path: '/maalgrupper/folkeskolen/lovgivning' },
          { id: 'fs-opdagelse',  da: 'Opdagelse og screening',  kl: 'Nalilersorneq',                    path: '/maalgrupper/folkeskolen/opdagelse-og-screening' },
          { id: 'fs-stoette',    da: 'Støtte i undervisningen', kl: 'Ilinniartitsinerani ikiorsissineq', path: '/maalgrupper/folkeskolen/stoette-i-undervisningen' },
          { id: 'fs-ressourcer', da: 'Ressourcer',              kl: 'Atortussiat',                      path: '/maalgrupper/folkeskolen/ressourcer' },
        ],
      },
      {
        id: 'unge-voksne',
        da: 'Unge og voksne',
        kl: 'Inuiaqatigiinni',
        children: [
          { id: 'uv-overblik',   da: 'Overblik',                  kl: 'Nalunaarusiissinerit',              path: '/maalgrupper/unge-og-voksne/overblik' },
          { id: 'uv-lovgivning', da: 'Lovgivning',                 kl: 'Inatsisitigut nalunaarusiissinerit', path: '/maalgrupper/unge-og-voksne/lovgivning' },
          { id: 'uv-hverdag',    da: 'Støtte i hverdagen',         kl: 'Ullormut inuiaqatigiissitsisoq',    path: '/maalgrupper/unge-og-voksne/stoette-i-hverdagen' },
          { id: 'uv-arbejde',    da: 'Støtte på arbejdspladsen',   kl: 'Suliassarsiorfiginerani ikiorsissineq', path: '/maalgrupper/unge-og-voksne/stoette-paa-arbejdspladsen' },
          { id: 'uv-ressourcer', da: 'Ressourcer',                 kl: 'Atortussiat',                      path: '/maalgrupper/unge-og-voksne/ressourcer' },
        ],
      },
    ],
  },
  {
    id: 'videnscenteret',
    da: 'Videnscenteret',
    kl: 'Ilisimasalimmik tigummivik',
    path: '/videnscenteret/om-os',
    children: [
      { id: 'vc-om',      da: 'Om os',          kl: 'Pillugut',                    path: '/videnscenteret/om-os' },
      { id: 'vc-indsats', da: 'Indsatsområder', kl: 'Inissisimanngitsoornerit',    path: '/videnscenteret/indsatsomraader' },
      { id: 'vc-nyheder', da: 'Nyheder',        kl: 'Nalunaarusiit nutaat',         path: '/nyheder' },
      { id: 'vc-kontakt',        da: 'Kontakt',        kl: 'Attavissaq',                  path: '/videnscenteret/kontakt' },
      { id: 'vc-kontakt-besked', da: 'Skriv til os',  kl: 'Allakkiuk',                   path: '/videnscenteret/kontakt/besked' },
    ],
  },
];

// Flat page map: path → page metadata
export interface PageMeta {
  id: string;
  da: string;
  kl: string;
  path: string;
  sectionId: string;
  sectionDa: string;
  sectionKl: string;
  groupDa?: string;
  groupKl?: string;
}

function buildPageMap(): Map<string, PageMeta> {
  const map = new Map<string, PageMeta>();
  for (const section of NAV) {
    if (section.children) {
      for (const child of section.children) {
        map.set(child.path, {
          id: child.id,
          da: child.da,
          kl: child.kl,
          path: child.path,
          sectionId: section.id,
          sectionDa: section.da,
          sectionKl: section.kl,
        });
      }
    }
    if (section.groups) {
      for (const group of section.groups) {
        for (const child of group.children) {
          map.set(child.path, {
            id: child.id,
            da: child.da,
            kl: child.kl,
            path: child.path,
            sectionId: section.id,
            sectionDa: section.da,
            sectionKl: section.kl,
            groupDa: group.da,
            groupKl: group.kl,
          });
        }
      }
    }
  }
  return map;
}

export const PAGE_MAP = buildPageMap();

/** Returns the NavSection for a given pathname, or null */
export function getSectionForPath(pathname: string): NavSection | null {
  if (pathname.startsWith('/vidensomraader')) return NAV.find(n => n.id === 'vidensomraader') ?? null;
  if (pathname.startsWith('/tests'))          return NAV.find(n => n.id === 'tests') ?? null;
  if (pathname.startsWith('/ressourcer'))     return NAV.find(n => n.id === 'ressourcer') ?? null;
  if (pathname.startsWith('/maalgrupper'))    return NAV.find(n => n.id === 'maalgrupper') ?? null;
  if (pathname.startsWith('/videnscenteret')) return NAV.find(n => n.id === 'videnscenteret') ?? null;
  return null;
}

/** Strips locale prefix from pathname (e.g. /kl/tests/... → /tests/...) */
export function stripLocale(pathname: string): string {
  if (pathname.startsWith('/kl/')) return pathname.slice(3);
  if (pathname === '/kl') return '/';
  return pathname;
}
