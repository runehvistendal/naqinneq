import type { Metadata } from 'next';
import Link from 'next/link';
import { NYHEDER } from '@/lib/nyheder';
import { PageBody, Lede } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Nyheder' };

export default async function NyhederPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lp = (p: string) => locale === 'kl' ? `/kl${p}` : p;

  return (
    <PageBody>
      <Lede>Nyheder og opdateringer fra Naqinneq — Videnscenteret for ordblindhed og læse- og skrivevanskeligheder.</Lede>
      <div className="nyhed-list">
        {NYHEDER.map(n => (
          <Link key={n.slug} href={lp(`/nyheder/${n.slug}`)} className="nyhed-item">
            <div className="nyhed-meta">
              <span className={`ntag ntag-${n.tag === 'Nyhed' ? 'teal' : n.tag === 'Ressource' ? 'navy' : 'amber'}`}>
                {n.tag}
              </span>
              <time dateTime={n.dateIso} className="nyhed-date">{n.date}</time>
            </div>
            <div className="nyhed-title">{locale === 'kl' && n.titleKl ? n.titleKl : n.title}</div>
            <p className="nyhed-excerpt">{locale === 'kl' && n.excerptKl ? n.excerptKl : n.excerpt}</p>
            <span className="ncm">Læs mere</span>
          </Link>
        ))}
      </div>
    </PageBody>
  );
}
