import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { BrandMark } from '@/components/ui/BrandMark';

interface FooterProps {
  locale: string;
}

function lp(locale: string, path: string) {
  return locale === 'kl' ? `/kl${path}` : path;
}

export async function Footer({ locale }: FooterProps) {
  const t = await getTranslations({ locale, namespace: 'footer' });

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <BrandMark />
          <div>
            <div className="footer-name">Naqinneq.gl</div>
            <div className="footer-tag">{t('undertitel')}</div>
          </div>
        </div>
        <div className="footer-cols">
          <div>
            <div className="footer-h">{t('genveje')}</div>
            <Link href={lp(locale, '/')}>{t('forside')}</Link>
            <Link href={lp(locale, '/tests/screening-for-ordblindhed')}>{t('startScreening')}</Link>
            <Link href={lp(locale, '/ressourcer/laese-og-skriveteknologi')}>{t('hentIntoWords')}</Link>
          </div>
          <div>
            <div className="footer-h">{t('om')}</div>
            <Link href={lp(locale, '/videnscenteret/om-os')}>{t('videnscenteret')}</Link>
            <Link href={lp(locale, '/videnscenteret/indsatsomraader')}>{t('indsatsomraader')}</Link>
            <Link href={lp(locale, '/videnscenteret/kontakt')}>{t('kontakt')}</Link>
          </div>
          <div>
            <div className="footer-h">{t('tilgaengelighed')}</div>
            <a href="#">{t('tilgaengelighedserklæring')}</a>
            <a href="#">{t('cookies')}</a>
            <a href="#">{t('persondata')}</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{t('copyright')}</span>
        <span>{t('adresse')}</span>
      </div>
    </footer>
  );
}
