import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getKursus, getKurser } from '@/lib/kurser';
import { PageBody, Lede, SectionHeading, Callout } from '@/components/ui/PageBody';
import { KursusTilmelding } from '@/components/ui/KursusTilmelding';

export async function generateStaticParams() {
  const kurser = await getKurser();
  return kurser.map(k => ({ slug: k.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const kursus = await getKursus(slug);
  return { title: kursus?.title ?? 'Kursus' };
}

export default async function KursusPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const kursus = await getKursus(slug);
  if (!kursus) notFound();

  return (
    <PageBody>
      <div className="kursus-header">
        <div className="kursus-header-meta">
          <div className="kursus-header-stat">
            <span className="kursus-header-stat-label">Dato</span>
            <span className="kursus-header-stat-value">{kursus.date}</span>
          </div>
          <div className="kursus-header-stat">
            <span className="kursus-header-stat-label">Sted</span>
            <span className="kursus-header-stat-value">{kursus.location}</span>
          </div>
          <div className="kursus-header-stat">
            <span className="kursus-header-stat-label">Varighed</span>
            <span className="kursus-header-stat-value">{kursus.duration}</span>
          </div>
          <div className="kursus-header-stat">
            <span className="kursus-header-stat-label">Tilmeldingsfrist</span>
            <span className="kursus-header-stat-value">{kursus.deadline}</span>
          </div>
        </div>
      </div>

      <Lede>{kursus.excerpt}</Lede>

      <div className="kursus-info-grid">
        <div className="kv">
          <div>Målgruppe</div><div>{kursus.targetGroup}</div>
          {kursus.maxParticipants > 0 && (
            <><div>Maks. deltagere</div><div>{kursus.maxParticipants}</div></>
          )}
        </div>
      </div>

      <SectionHeading>Om kurset</SectionHeading>
      {kursus.description.map((para, i) => <p key={i}>{para}</p>)}

      {kursus.program.length > 0 && (
        <>
          <SectionHeading>Program</SectionHeading>
          <div className="kursus-program">
            {kursus.program.map((item, i) => (
              <div key={i} className="kursus-program-row">
                <div className="kursus-program-time">{item.time}</div>
                <div className="kursus-program-item">{item.item}</div>
              </div>
            ))}
          </div>
        </>
      )}

      <SectionHeading>Tilmeld dig</SectionHeading>
      <KursusTilmelding kursusTitle={kursus.title} />

      <Callout>
        Har du spørgsmål om kurset? Skriv til os på{' '}
        <a href="mailto:naqinneq@nanoq.gl">naqinneq@nanoq.gl</a> eller ring på{' '}
        (+299) 34 50 00.
      </Callout>
    </PageBody>
  );
}
