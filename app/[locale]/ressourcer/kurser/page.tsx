import type { Metadata } from 'next';
import Link from 'next/link';
import { KURSER } from '@/lib/kurser';
import { PageBody, Lede } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Kurser' };

export default async function KurserPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lp = (p: string) => locale === 'kl' ? `/kl${p}` : p;

  return (
    <PageBody>
      <Lede>
        Videnscenteret tilbyder kurser for lærere, vejledere og fagfolk. Kurserne er gratis og
        foregår i Nuuk eller online.
      </Lede>
      <div className="kursus-list">
        {KURSER.map(k => (
          <div key={k.slug} className="kursus-card">
            <div className="kursus-card-meta">
              <span className="kursus-dato">{k.date}</span>
              <span className="kursus-sted">{k.location}</span>
            </div>
            <div className="kursus-card-title">{k.title}</div>
            <p className="kursus-card-excerpt">{k.excerpt}</p>
            <div className="kursus-card-footer">
              <span className="kursus-pris">{k.price}</span>
              <Link href={lp(`/ressourcer/kurser/${k.slug}`)} className="cta cta-primary">
                Se kursus og tilmeld
              </Link>
            </div>
          </div>
        ))}
      </div>
    </PageBody>
  );
}
