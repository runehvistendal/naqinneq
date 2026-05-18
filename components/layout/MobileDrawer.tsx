'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { NAV } from '@/lib/nav';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  locale: string;
  pathname: string; // stripped of locale prefix
}

function lp(locale: string, path: string) {
  return locale === 'kl' ? `/kl${path}` : path;
}

export function MobileDrawer({ open, onClose, locale, pathname }: MobileDrawerProps) {
  const t = useTranslations();
  const router = useRouter();

  // Find active section to pre-open it
  const activeSection = NAV.find(s =>
    (s.children ?? s.groups?.flatMap(g => g.children) ?? [])
      .some(c => pathname === c.path)
  );
  const [openId, setOpenId] = useState<string | null>(activeSection?.id ?? null);

  if (!open) return null;

  return (
    <div className="drawer-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={t('drawer.menu')}>
      <div className="drawer" onClick={e => e.stopPropagation()}>
        <div className="drawer-h">
          <span>{t('drawer.menu')}</span>
          <button onClick={onClose} aria-label="Luk menu">✕</button>
        </div>

        <Link
          href={lp(locale, '/')}
          className="drawer-top"
          style={{ display: 'flex', textDecoration: 'none', color: 'var(--ink)' }}
          onClick={onClose}
        >
          {locale === 'kl' ? 'Saqqaa' : 'Forside'}
        </Link>

        {NAV.map(section => (
          <div key={section.id}>
            <button
              className="drawer-top"
              onClick={() => setOpenId(openId === section.id ? null : section.id)}
              aria-expanded={openId === section.id}
            >
              {locale === 'kl' ? section.kl : section.da}
              <span>{openId === section.id ? '−' : '+'}</span>
            </button>

            {openId === section.id && (
              <div className="drawer-kids">
                {section.children?.map(child => (
                  <Link
                    key={child.id}
                    href={lp(locale, child.path)}
                    onClick={onClose}
                  >
                    {locale === 'kl' ? child.kl : child.da}
                  </Link>
                ))}
                {section.groups?.map(group => (
                  <div key={group.id}>
                    <div className="drawer-group-h">{locale === 'kl' ? group.kl : group.da}</div>
                    {group.children.map(child => (
                      <Link
                        key={child.id}
                        href={lp(locale, child.path)}
                        onClick={onClose}
                      >
                        {locale === 'kl' ? child.kl : child.da}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
