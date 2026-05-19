import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNyhed, getNyheder } from '@/lib/nyheder';
import { PageBody } from '@/components/ui/PageBody';

export async function generateStaticParams() {
  const nyheder = await getNyheder();
  return nyheder.map(n => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const nyhed = await getNyhed(slug);
  return { title: nyhed?.title ?? 'Nyhed' };
}

export default async function NyhedPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const nyhed = await getNyhed(slug);
  if (!nyhed) notFound();

  const lp = (p: string) => locale === 'kl' ? `/kl${p}` : p;
  const accentClass = nyhed.tag === 'Nyhed' ? 'teal' : nyhed.tag === 'Ressource' ? 'navy' : 'amber';

  return (
    <PageBody>
      <div className="article-meta">
        <span className={`ntag ntag-${accentClass}`}>{nyhed.tag}</span>
        <time dateTime={nyhed.dateIso} className="nyhed-date">{nyhed.date}</time>
      </div>

      {nyhed.body.map((para, i) => (
        <p key={i}>{para}</p>
      ))}

      <div className="article-back">
        <Link href={lp('/nyheder')} className="inline-link">← Alle nyheder</Link>
      </div>
    </PageBody>
  );
}
