import { PAGE_MAP } from './nav';
import { NYHEDER } from './nyheder';
import { KURSER } from './kurser';

export interface SearchEntry {
  id: string;
  title: string;
  titleKl?: string;
  hint: string;
  hintKl?: string;
  path: string;
}

const PAGE_ENTRIES: SearchEntry[] = Array.from(PAGE_MAP.values()).map(p => ({
  id: p.id,
  title: p.da,
  titleKl: p.kl,
  hint: p.groupDa ? `${p.sectionDa} · ${p.groupDa}` : p.sectionDa,
  hintKl: p.groupKl ? `${p.sectionKl} · ${p.groupKl}` : p.sectionKl,
  path: p.path,
}));

const NEWS_ENTRIES: SearchEntry[] = NYHEDER.map(n => ({
  id: `nyhed-${n.slug}`,
  title: n.title,
  titleKl: n.titleKl,
  hint: `${n.tag} · ${n.date}`,
  path: `/nyheder/${n.slug}`,
}));

const KURSUS_ENTRIES: SearchEntry[] = KURSER.map(k => ({
  id: `kursus-${k.slug}`,
  title: k.title,
  hint: `Kursus · ${k.date}`,
  path: `/ressourcer/kurser/${k.slug}`,
}));

export const SEARCH_INDEX: SearchEntry[] = [
  ...PAGE_ENTRIES,
  ...NEWS_ENTRIES,
  ...KURSUS_ENTRIES,
];
