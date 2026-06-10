import type { ReactNode } from 'react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Search } from './Search';
import { IconArrow } from '@/components/ui/Icons';
import { NYHEDER } from '@/lib/nyheder';

type NewsAccent = 'teal' | 'navy' | 'amber';

interface HomepageProps {
  locale: string;
}

function lp(locale: string, path: string) {
  return locale === 'kl' ? `/kl${path}` : path;
}

function NewsCard({
  accent,
  tag,
  title,
  date,
  excerpt,
  href,
  readMore = 'Læs mere',
  image,
  imageAlt,
}: {
  accent: NewsAccent;
  tag: string;
  title: string;
  date: string;
  excerpt: string;
  href: string;
  readMore?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <article className="nc">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <div className="nc-thumb"><img src={image} alt={imageAlt ?? ''} /></div>
      ) : (
        <div className={`nc-thumb nc-thumb-placeholder-${accent}`} />
      )}
      <div className="ncb">
        <span className={`ntag ntag-${accent}`}>{tag}</span>
        <div className="nct">{title}</div>
        <div className="ncd">{date}</div>
        <p className="nce">{excerpt}</p>
        <Link href={href} className="ncm">{readMore}</Link>
      </div>
    </article>
  );
}

function ShortcutCard({
  icon,
  title,
  body,
  href,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  href: string;
}) {
  return (
    <Link href={href} className="shortcut">
      <div className="shortcut-icon">{icon}</div>
      <div className="shortcut-title">{title}</div>
      <div className="shortcut-body">{body}</div>
      <div className="shortcut-go">
        <IconArrow />
      </div>
    </Link>
  );
}

function LatestCard({
  kind,
  date,
  title,
  duration,
}: {
  kind: string;
  date: string;
  title: string;
  duration: string;
}) {
  return (
    <article className="latest-card">
      <div className="latest-thumb" aria-hidden="true">
        <span className="latest-thumb-tx">{kind}-pladsholder</span>
      </div>
      <div className="latest-kind">
        {kind}<span>·</span>{date}
      </div>
      <div className="latest-title">{title}</div>
      <div className="latest-dur">{duration}</div>
    </article>
  );
}

export async function Homepage({ locale }: HomepageProps) {
  const t = await getTranslations({ locale, namespace: 'home' });

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-eyebrow">{t('eyebrow')}</div>
          <h1 className="hero-title">
            {t('heroTitle')}
            <span className="hero-sub">{t('heroSub')}</span>
          </h1>
          <Search locale={locale} />
        </div>
      </section>

      {/* Find vej */}
      <section className="shortcuts">
        <div className="section-h">
          <h2>{t('findVej')}</h2>
        </div>
        <div className="shortcut-grid">
          <ShortcutCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>}
            title={t('sc1Title')}
            body={t('sc1Body')}
            href={lp(locale, '/videnscenteret/kurser')}
          />
          <ShortcutCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>}
            title={t('sc2Title')}
            body={t('sc2Body')}
            href={lp(locale, '/maalgrupper/folkeskolen/overblik')}
          />
          <ShortcutCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
            title={t('sc3Title')}
            body={t('sc3Body')}
            href={lp(locale, '/maalgrupper/unge-og-voksne/overblik')}
          />
        </div>
      </section>

      {/* Aktuelle nyheder */}
      <section className="news">
        <div className="section-label">
          {t('aktuelleNyheder')}
          <Link href={lp(locale, '/nyheder')} className="section-label-link">{t('seAlle')}</Link>
        </div>
        <div className="news-grid">
          {NYHEDER.slice(0, 3).map(nyhed => {
            const accent: NewsAccent =
              nyhed.tag === 'Nyhed' ? 'teal' :
              nyhed.tag === 'Ressource' ? 'navy' : 'amber';
            const isKl = locale === 'kl';
            return (
              <NewsCard
                key={nyhed.slug}
                accent={accent}
                tag={nyhed.tag}
                title={isKl && nyhed.titleKl ? nyhed.titleKl : nyhed.title}
                date={nyhed.date}
                excerpt={isKl && nyhed.excerptKl ? nyhed.excerptKl : nyhed.excerpt}
                href={lp(locale, '/nyheder/' + nyhed.slug)}
                readMore={isKl ? 'Atuaruk' : 'Læs mere'}
                image={nyhed.image}
                imageAlt={nyhed.imageAlt}
              />
            );
          })}
        </div>
      </section>

      {/* Nyeste materialer */}
      <section className="latest">
        <div className="section-h">
          <h2>{t('nyesteMaterialer')}</h2>
          <Link href={lp(locale, '/ressourcer/materialer')} className="section-h-link">
            {t('seAlleRessourcer')}
          </Link>
        </div>
        <div className="latest-grid">
          <LatestCard
            kind="Podcast"
            date="14. maj 2026"
            title="Når læsning gør ondt — to grønlandske unge fortæller"
            duration="32 min"
          />
          <LatestCard
            kind="Vejledning"
            date="06. maj 2026"
            title="Sådan tilrettelægger du undervisningen for elever med læse- og skrivevanskeligheder"
            duration="PDF · 18 sider"
          />
          <LatestCard
            kind="Video"
            date="28. apr 2026"
            title="IntoWords i klasselokalet — på 5 minutter"
            duration="5:12"
          />
          <LatestCard
            kind="Rapport"
            date="14. apr 2026"
            title="Ordblindhed i Grønland 2025 — status og udvikling"
            duration="PDF · 64 sider"
          />
        </div>
      </section>

      {/* CTA band */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <div>
            <div className="cta-band-eyebrow">{t('ctaBandEyebrow')}</div>
            <h2>{t('ctaBandH2')}</h2>
          </div>
          <div className="cta-band-actions">
            <Link href={lp(locale, '/videnscenteret/indsatsomraader')} className="cta cta-primary">
              {t('ctaBandBtn1')}
            </Link>
            <Link href={lp(locale, '/videnscenteret/om-os')} className="cta">
              {t('ctaBandBtn2')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
