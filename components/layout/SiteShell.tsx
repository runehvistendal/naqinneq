'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Topbar } from './Topbar';
import { Sidebar } from './Sidebar';
import { Breadcrumb } from './Breadcrumb';
import { AccessPanel } from './AccessPanel';
import { MobileDrawer } from './MobileDrawer';
import { TtsStrip } from './TtsStrip';
import { PageFoot } from './PageFoot';
import { useAccessibility } from '@/components/providers/AccessibilityProvider';
import { PAGE_MAP } from '@/lib/nav';
import { getStaticNyhed } from '@/lib/nyheder';
import { getStaticKursus } from '@/lib/kurser';
import { speakDanish, stopDanish, initDaSelectionPopup } from '@/lib/da-tts';
import { initMartha, readElement, clearTTS as clearMartha, onMarthaStop } from '@/lib/martha-tts';

interface SiteShellProps {
  locale: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}

function stripLocalePrefix(pathname: string): string {
  if (pathname.startsWith('/kl/')) return pathname.slice(3);
  if (pathname === '/kl') return '/';
  return pathname;
}

export function SiteShell({ locale, children, footer }: SiteShellProps) {
  const { settings } = useAccessibility();
  const t = useTranslations();

  const [accessOpen, setAccessOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ttsActive, setTtsActive] = useState(false);

  const rawPath = usePathname();
  const pathname = stripLocalePrefix(rawPath);
  const isHome = pathname === '/';
  const page = PAGE_MAP.get(pathname);

  function getDynamicTitle(): string | null {
    if (pathname.startsWith('/nyheder/')) return getStaticNyhed(pathname.slice('/nyheder/'.length))?.title ?? 'Nyhed';
    if (pathname.startsWith('/ressourcer/kurser/')) return getStaticKursus(pathname.slice('/ressourcer/kurser/'.length))?.title ?? 'Kursus';
    return null;
  }
  const dynamicTitle = !page ? getDynamicTitle() : null;
  const showSidebar = !isHome;

  // Initialise the appropriate TTS engine for the current locale
  useEffect(() => {
    if (locale === 'kl') {
      initMartha();
      onMarthaStop(() => setTtsActive(false));
    } else {
      initDaSelectionPopup({
        onStart: () => setTtsActive(true),
        onEnd:   () => setTtsActive(false),
      });
    }
    return () => {
      stopDanish();
      if (locale === 'kl') clearMartha();
    };
  }, [locale]);

  const onTTS = useCallback(() => {
    if (ttsActive) {
      if (locale === 'kl') {
        clearMartha(); // fires onMarthaStop → setTtsActive(false)
      } else {
        stopDanish();
        setTtsActive(false);
      }
      return;
    }

    // Target only the article body — skips breadcrumb and page-foot
    const el = document.getElementById('page-article') ?? document.getElementById('main-content');
    if (!el) return;

    if (locale === 'kl') {
      readElement(el);
      setTtsActive(true);
    } else {
      const text = el.innerText ?? '';
      if (!text.trim()) return;
      speakDanish(text, { onEnd: () => setTtsActive(false) });
      setTtsActive(true);
    }
  }, [ttsActive, locale]);

  const rootClass = [
    'naq',
    `f-${settings.font}`,
    `sz-${settings.size}`,
    `ln-${settings.line}`,
    `tm-${settings.theme}`,
    ttsActive ? 'tts-on' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={rootClass}>
      <a href="#main-content" className="skip-nav">
        {t('topbar.skipToContent')}
      </a>

      <Topbar
        locale={locale}
        pathname={pathname}
        ttsActive={ttsActive}
        onTTS={onTTS}
        onOpenAccess={() => setAccessOpen(true)}
        onMenu={() => setMenuOpen(true)}
      />

      <div className="site-scroller">
        {isHome ? (
          <main id="main-content" className="main main-home">
            {children}
          </main>
        ) : (
          <div className="layout">
            {showSidebar && (
              <Sidebar locale={locale} pathname={pathname} />
            )}
            <main id="main-content" className="main">
              {/* Breadcrumb is excluded from TTS (outside #page-article) */}
              <Breadcrumb locale={locale} pathname={pathname} />
              <article id="page-article" className="martha-article">
                {(page || dynamicTitle) && (
                  <h1 className="page-title">{page ? (locale === 'kl' ? page.kl : page.da) : dynamicTitle}</h1>
                )}
                <button
                  className={'page-tts-btn martha-skip' + (ttsActive ? ' is-active' : '')}
                  onClick={onTTS}
                  aria-pressed={ttsActive}
                >
                  {ttsActive
                    ? (locale === 'kl' ? '⏹ Stop' : '⏹ Stop')
                    : (locale === 'kl' ? '🔊 Atuarneq' : '🔊 Læs op')}
                </button>
                {children}
              </article>
              {/* PageFoot excluded from TTS */}
              <PageFoot />

            </main>
          </div>
        )}
        {footer}
      </div>

      <AccessPanel open={accessOpen} onClose={() => setAccessOpen(false)} />
      <MobileDrawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        locale={locale}
        pathname={pathname}
      />
      {/* DA: show our TtsStrip. KL: Martha injects its own seekable controls bar. */}
      {ttsActive && locale !== 'kl' && <TtsStrip onStop={onTTS} />}
    </div>
  );
}

