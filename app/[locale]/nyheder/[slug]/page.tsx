import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNyhed, NYHEDER } from '@/lib/nyheder';
import { PageBody, PageVideo } from '@/components/ui/PageBody';

export async function generateStaticParams() {
  return NYHEDER.map(n => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: getNyhed(slug)?.title ?? 'Nyhed' };
}

export default async function NyhedPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const nyhed = getNyhed(slug);
  if (!nyhed) notFound();

  const lp = (p: string) => locale === 'kl' ? `/kl${p}` : p;
  const accentClass = nyhed.tag === 'Nyhed' ? 'teal' : nyhed.tag === 'Ressource' ? 'navy' : 'amber';

  const isKl = locale === 'kl';
  const body = isKl && nyhed.bodyKl ? nyhed.bodyKl : nyhed.body;

  return (
    <PageBody>
      <div className="article-meta">
        <span className={`ntag ntag-${accentClass}`}>{nyhed.tag}</span>
        <time dateTime={nyhed.dateIso} className="nyhed-date">{nyhed.date}</time>
      </div>

      {nyhed.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={nyhed.image}
          alt={nyhed.imageAlt ?? ''}
          style={{ width: '100%', maxWidth: 560, borderRadius: 8, margin: '8px 0 20px' }}
        />
      )}

      {body.map((para, i) => (
        <p key={i}>{para}</p>
      ))}

      {nyhed.attachment && (
        <p style={{ marginTop: 24 }}>
          <a href={nyhed.attachment.href} className="inline-link" download>
            ⬇ {isKl && nyhed.attachment.labelKl ? nyhed.attachment.labelKl : nyhed.attachment.label}
          </a>
        </p>
      )}

      {nyhed.videoUrl && (
        <PageVideo
          src={nyhed.videoUrl}
          title={nyhed.videoTitle ?? 'Video'}
        />
      )}

      <div className="article-back">
        <Link href={lp('/nyheder')} className="inline-link">← Alle nyheder</Link>
      </div>
    </PageBody>
  );
}
