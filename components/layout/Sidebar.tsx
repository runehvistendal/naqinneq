'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { NAV } from '@/lib/nav';

interface SidebarProps {
  locale: string;
  pathname: string; // stripped of locale prefix
}

function localePath(locale: string, path: string) {
  return locale === 'kl' ? `/kl${path}` : path;
}

export function Sidebar({ locale, pathname }: SidebarProps) {
  const t = useTranslations('sidebar');

  const section = NAV.find(s => pathname.startsWith('/' + s.id));
  // Fallback: match by path prefix
  const activeSection = section ?? NAV.find(s =>
    (s.children ?? s.groups?.flatMap(g => g.children) ?? [])
      .some(c => pathname.startsWith(c.path))
  );

  if (!activeSection) {
    // Generic section list (e.g. on forside — sidebar hidden there anyway)
    return (
      <aside className="sidebar">
        <div className="sb-title">{t('omraader')}</div>
        <ul className="sb-list">
          {NAV.map(s => (
            <li key={s.id}>
              <Link href={localePath(locale, s.path)}>{locale === 'kl' ? s.kl : s.da}</Link>
            </li>
          ))}
        </ul>
      </aside>
    );
  }

  return (
    <aside className="sidebar">
      <div className="sb-title">{locale === 'kl' ? activeSection.kl : activeSection.da}</div>

      {activeSection.children && (
        <ul className="sb-list">
          {activeSection.children.map(child => (
            <li key={child.id}>
              <Link
                href={localePath(locale, child.path)}
                className={pathname === child.path ? 'is-active' : ''}
              >
                {locale === 'kl' ? child.kl : child.da}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {activeSection.groups?.map(group => (
        <div key={group.id} className="sb-group">
          <div className="sb-group-h">{locale === 'kl' ? group.kl : group.da}</div>
          <ul className="sb-list">
            {group.children.map(child => (
              <li key={child.id}>
                <Link
                  href={localePath(locale, child.path)}
                  className={pathname === child.path ? 'is-active' : ''}
                >
                  {locale === 'kl' ? child.kl : child.da}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="sb-tip">
        <div className="sb-tip-eyebrow">{t('brugForHjaelp')}</div>
        <p>{t('brugForHjaelpTekst')}</p>
        <Link href={localePath(locale, '/videnscenteret/kontakt')} className="sb-tip-btn">
          {t('kontaktVidenscenteret')}
        </Link>
      </div>
    </aside>
  );
}
