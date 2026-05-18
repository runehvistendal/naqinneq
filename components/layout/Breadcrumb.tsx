'use client';

import Link from 'next/link';
import { NAV, PAGE_MAP } from '@/lib/nav';
import { getNyhed } from '@/lib/nyheder';
import { getKursus } from '@/lib/kurser';

interface BreadcrumbProps {
  locale: string;
  pathname: string; // stripped of locale prefix
}

function lp(locale: string, path: string) {
  return locale === 'kl' ? `/kl${path}` : path;
}

export function Breadcrumb({ locale, pathname }: BreadcrumbProps) {
  const page = PAGE_MAP.get(pathname);
  const forside = { label: locale === 'kl' ? 'Saqqaa' : 'Forside', path: '/' };

  // Dynamic: /nyheder/[slug]
  if (!page && pathname.startsWith('/nyheder/')) {
    const slug = pathname.slice('/nyheder/'.length);
    const nyhed = getNyhed(slug);
    const crumbs = [
      forside,
      { label: locale === 'kl' ? 'Nalunaarusiit nutaat' : 'Nyheder', path: '/nyheder' },
      { label: nyhed?.title ?? 'Nyhed' },
    ];
    return <BreadcrumbNav locale={locale} crumbs={crumbs} />;
  }

  // Dynamic: /ressourcer/kurser/[slug]
  if (!page && pathname.startsWith('/ressourcer/kurser/')) {
    const slug = pathname.slice('/ressourcer/kurser/'.length);
    const kursus = getKursus(slug);
    const ressourcer = NAV.find(s => s.id === 'ressourcer');
    const crumbs = [
      forside,
      { label: locale === 'kl' ? (ressourcer?.kl ?? 'Atortut') : 'Ressourcer', path: '/ressourcer/laese-og-skriveteknologi' },
      { label: locale === 'kl' ? 'Kursissat' : 'Kurser', path: '/ressourcer/kurser' },
      { label: kursus?.title ?? 'Kursus' },
    ];
    return <BreadcrumbNav locale={locale} crumbs={crumbs} />;
  }

  if (!page) return null;

  const section = NAV.find(s => s.id === page.sectionId);
  const crumbs: Array<{ label: string; path?: string }> = [forside];

  if (section) {
    crumbs.push({ label: locale === 'kl' ? section.kl : section.da, path: section.path });
  }
  if (page.groupDa) {
    crumbs.push({ label: locale === 'kl' ? (page.groupKl ?? page.groupDa) : page.groupDa });
  }
  crumbs.push({ label: locale === 'kl' ? page.kl : page.da });

  return <BreadcrumbNav locale={locale} crumbs={crumbs} />;
}

function BreadcrumbNav({ locale, crumbs }: { locale: string; crumbs: Array<{ label: string; path?: string }> }) {
  return (
    <nav className="crumbs" aria-label="Brødkrumme">
      {crumbs.map((c, i) => (
        <span key={i} style={{ display: 'contents' }}>
          {i > 0 && <span className="crumb-sep" aria-hidden="true">/</span>}
          {c.path && i < crumbs.length - 1 ? (
            <Link href={lp(locale, c.path)} className="crumb">{c.label}</Link>
          ) : (
            <span className={i === crumbs.length - 1 ? 'crumb-current' : 'crumb'} aria-current={i === crumbs.length - 1 ? 'page' : undefined}>
              {c.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
