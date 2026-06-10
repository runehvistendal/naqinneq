import { NYHEDER } from './nyheder';

export interface SearchEntry {
  id: string;
  title: string;
  hint: string;
  path: string;
}

const STATIC_PAGES: SearchEntry[] = [
  { id: 'ordblindhed',     title: 'Hvad er ordblindhed?',                  hint: 'Vidensområder',     path: '/vidensomraader/ordblindhed' },
  { id: 'skriftsprog',     title: 'Skriftsprogsvanskeligheder',             hint: 'Vidensområder',     path: '/vidensomraader/skriftsprogsvanskeligheder' },
  { id: 'sprogforstaaelse', title: 'Sprogforståelse',                       hint: 'Vidensområder',     path: '/vidensomraader/sprogforstaaelse' },
  { id: 'tests-screening', title: 'Screening for ordblindhed',              hint: 'Tests og screening', path: '/tests/screening-for-ordblindhed' },
  { id: 'tests-gl',        title: 'Den grønlandske ordblindetest',          hint: 'Tests og screening', path: '/tests/den-groenlandske-ordblindetest' },
  { id: 'tests-dk',        title: 'Den danske ordblindetest',               hint: 'Tests og screening', path: '/tests/den-danske-ordblindetest' },
  { id: 'res-intowords',   title: 'IntoWords — læse- og skriveteknologi',   hint: 'Ressourcer',        path: '/ressourcer/laese-og-skriveteknologi' },
  { id: 'res-vejledninger', title: 'Vejledninger',                          hint: 'Ressourcer',        path: '/ressourcer/vejledninger' },
  { id: 'res-materialer',  title: 'Materialer',                             hint: 'Ressourcer',        path: '/ressourcer/materialer' },
  { id: 'res-rapporter',   title: 'Rapporter',                              hint: 'Ressourcer',        path: '/ressourcer/rapporter' },
  { id: 'res-podcasts',    title: 'Podcasts om ordblindhed',                hint: 'Ressourcer',        path: '/ressourcer/podcasts' },
  { id: 'res-videoer',     title: 'Videoer',                                hint: 'Ressourcer',        path: '/ressourcer/videoer' },
  { id: 'res-kurser',      title: 'Kurser for lærere',                      hint: 'Ressourcer',        path: '/ressourcer/kurser' },
  { id: 'fs-overblik',     title: 'Folkeskolen — overblik',                 hint: 'Folkeskolen',       path: '/maalgrupper/folkeskolen/overblik' },
  { id: 'fs-stoette',      title: 'Støtte i undervisningen',                hint: 'Folkeskolen',       path: '/maalgrupper/folkeskolen/stoette-i-undervisningen' },
  { id: 'fs-lovgivning',   title: 'Lovgivning · Folkeskolen',               hint: 'Folkeskolen',       path: '/maalgrupper/folkeskolen/lovgivning' },
  { id: 'uv-arbejde',      title: 'Støtte på arbejdspladsen',               hint: 'Unge og voksne',    path: '/maalgrupper/unge-og-voksne/stoette-paa-arbejdspladsen' },
  { id: 'uv-lovgivning',   title: 'Lovgivning · Unge og voksne',            hint: 'Unge og voksne',    path: '/maalgrupper/unge-og-voksne/lovgivning' },
  { id: 'vc-om',           title: 'Om videnscenteret',                      hint: 'Videnscenteret',    path: '/videnscenteret/om-os' },
  { id: 'vc-indsats',      title: 'Indsatsområder',                         hint: 'Videnscenteret',    path: '/videnscenteret/indsatsomraader' },
  { id: 'vc-kontakt',      title: 'Kontakt',                                hint: 'Videnscenteret',    path: '/videnscenteret/kontakt' },
];

const NEWS_ENTRIES: SearchEntry[] = NYHEDER.map(n => ({
  id: `nyhed-${n.slug}`,
  title: n.title,
  hint: `${n.tag} · ${n.date}`,
  path: `/nyheder/${n.slug}`,
}));

export const SEARCH_INDEX: SearchEntry[] = [...STATIC_PAGES, ...NEWS_ENTRIES];
