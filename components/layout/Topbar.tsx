'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { BrandMark } from '@/components/ui/BrandMark';
import { IconSpeaker, IconAcc, IconCaret } from '@/components/ui/Icons';
import { NAV } from '@/lib/nav';

interface TopbarProps {
  locale: string;
  pathname: string;
  ttsActive: boolean;
  onTTS: () => void;
  onOpenAccess: () => void;
  onMenu: () => void;
}

function getLocalePath(locale: string, path: string) {
  if (locale === 'kl') return `/kl${path}`;
  return path;
}

function getOtherLocale(locale: string) {
  return locale === 'da' ? 'kl' : 'da';
}

export function Topbar({ locale, pathname, ttsActive, onTTS, onOpenAccess, onMenu }: TopbarProps) {
  const t = useTranslations();
  const [openId, setOpenId] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const router = useRouter();

  const otherLocale = getOtherLocale(locale);
  const otherPath = otherLocale === 'kl' ? `/kl${pathname}` : pathname.replace(/^\/kl/, '') || '/';

  // Determine active top-level section
  const cleanPath = pathname.replace(/^\/kl/, '') || '/';
  const activeSection = NAV.find(s => cleanPath.startsWith('/' + s.id.split('_').join('-')))?.id
    ?? NAV.find(s => cleanPath.startsWith(s.path.split('/').slice(0, 2).join('/')))?.id
    ?? null;

  return (
    <header className="topbar">
      {/* Strip */}
      <div className="topbar-strip">
        <div className="topbar-strip-inner">
          <Link href={getLocalePath(locale, '/videnscenteret/kontakt')} className="strip-link">
            {t('topbar.kontakt')}
          </Link>
          <span className="strip-spacer" />
          <button
            className={'strip-btn' + (ttsActive ? ' strip-btn-on' : '')}
            onClick={onTTS}
            aria-label={t('topbar.laesOp')}
            aria-pressed={ttsActive}
          >
            <IconSpeaker />
            <span className="strip-btn-label">{t('topbar.laesOp')}</span>
          </button>
          <button
            className="strip-btn"
            onClick={onOpenAccess}
            aria-label={t('topbar.tilgaengelighed')}
          >
            <IconAcc />
            <span className="strip-btn-label">{t('topbar.tilgaengelighed')}</span>
          </button>
          <div className="lang">
            <button
              className={locale === 'kl' ? 'lang-on' : ''}
              onClick={() => {
                document.cookie = 'NEXT_LOCALE=kl; path=/; SameSite=Lax';
                router.push(getLocalePath('kl', cleanPath));
              }}
            >
              KL
            </button>
            <span>/</span>
            <button
              className={locale === 'da' ? 'lang-on' : ''}
              onClick={() => {
                document.cookie = 'NEXT_LOCALE=da; path=/; SameSite=Lax';
                router.push(cleanPath || '/');
              }}
            >
              DA
            </button>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="topbar-main">
        <div className="topbar-main-inner">
          <Link href={getLocalePath(locale, '/')} className="brand">
            <BrandMark />
            <div className="brand-tx">
              <div className="brand-name">
                Naqinneq<span className="brand-tld">.gl</span>
              </div>
              <div className="brand-sub">{t('brand.undertitel')}</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="mainnav" ref={navRef} aria-label="Primær navigation">
            {NAV.map((section) => {
              const sectionPath = '/' + (
                section.id === 'vidensomraader' ? 'vidensomraader' :
                section.id === 'tests' ? 'tests' :
                section.id === 'ressourcer' ? 'ressourcer' :
                section.id === 'maalgrupper' ? 'maalgrupper' :
                'videnscenteret'
              );
              const isActive = cleanPath.startsWith(sectionPath);

              return (
                <div
                  key={section.id}
                  className={'mainnav-item' + (openId === section.id ? ' is-open' : '')}
                >
                  <button
                    className={'mainnav-btn' + (isActive ? ' is-active' : '')}
                    onClick={() => setOpenId(openId === section.id ? null : section.id)}
                    aria-expanded={openId === section.id}
                    aria-haspopup="true"
                  >
                    {locale === 'kl' ? section.kl : section.da}
                    <IconCaret />
                  </button>

                  {/* Always rendered — shown by CSS :hover or .is-open for keyboard users */}
                  <div className="dropdown" role="menu">
                    {section.children?.map((child) => (
                      <button
                        key={child.id}
                        role="menuitem"
                        onClick={() => { router.push(getLocalePath(locale, child.path)); setOpenId(null); }}
                      >
                        {locale === 'kl' ? child.kl : child.da}
                      </button>
                    ))}
                    {section.groups?.map((group) => (
                      <div key={group.id} className="dd-group">
                        <div className="dd-group-h">{locale === 'kl' ? group.kl : group.da}</div>
                        {group.children.map((child) => (
                          <button
                            key={child.id}
                            role="menuitem"
                            onClick={() => { router.push(getLocalePath(locale, child.path)); setOpenId(null); }}
                          >
                            {locale === 'kl' ? child.kl : child.da}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Mobile hamburger — shown via CSS at <768px */}
          <button className="hamburger" onClick={onMenu} aria-label="Åbn menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
