import type { Metadata } from 'next';
import { PageBody, Lede, Two, Card, CTARow, CTA, SectionHeading } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Screening for ordblindhed' };

export default function ScreeningPage() {
  return (
    <PageBody>
      <Lede>
        En screening er et hurtigt overblik over om der er grund til at
        undersøge ordblindhed nærmere. Screeningen er ikke en diagnose — men
        et godt sted at starte.
      </Lede>
      <Two>
        <Card title="Tager ca. 15 minutter" tag="Online">
          Du kan tage screeningen alene, eller sammen med en lærer eller
          vejleder. Du får svar med det samme.
        </Card>
        <Card title="Tilgængelig på to sprog" tag="Kalaallisut · Dansk">
          Vælg det sprog du er mest fortrolig med. Begge versioner er udviklet
          sammen med Uddannelsesstyrelsen.
        </Card>
      </Two>
      <CTARow>
        <CTA primary>Start screening (aktiveres 1. august 2026)</CTA>
        <CTA>Hent printbar version (PDF)</CTA>
      </CTARow>
      <SectionHeading>Hvad sker der efter screeningen?</SectionHeading>
      <ol className="numbered">
        <li>
          Resultatet viser om der er <b>ingen</b>, <b>mulig</b> eller{' '}
          <b>tydelig</b> indikation af ordblindhed.
        </li>
        <li>
          Ved mulig eller tydelig indikation anbefales en egentlig ordblindetest.
        </li>
        <li>
          Skoler og virksomheder kan kontakte videnscenteret for rådgivning.
        </li>
      </ol>
    </PageBody>
  );
}
