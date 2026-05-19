import type { Metadata } from 'next';
import { PageBody, Lede, SectionHeading, Two, Card, CTARow, CTA, Callout } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Screening for ordblindhed' };

export default function ScreeningPage() {
  return (
    <PageBody>
      <Lede>
        En screening giver et hurtigt overblik over, om der er grund til at
        undersøge ordblindhed nærmere. Den er ikke en diagnose — men et godt
        sted at starte.
      </Lede>

      <SectionHeading>Om screeningen</SectionHeading>
      <p>
        Uddannelsesstyrelsen har siden 2014 arbejdet på at styrke
        læseundervisningen i indskolingen. De færdige screeningsværktøjer for
        1.–3. klasse er overdraget til alle kommuner og skoler til brug i
        læsepædagogisk arbejde og tidlig indsats.
      </p>
      <p>
        Nu arbejdes der på at gøre tidlig identifikation af ordblindhed
        lovpligtig og på at digitalisere de eksisterende screeningsværktøjer.
        Digitaliseringen gør det lettere at opdatere læsenormer og sikrer mere
        ensartede resultater. De digitale screeningsværktøjer forventes klar i
        løbet af 2027.
      </p>
      <Two>
        <Card title="Tager ca. 15 minutter" tag="Online">
          Du kan tage screeningen alene eller sammen med en lærer eller
          vejleder. Du får svar med det samme.
        </Card>
        <Card title="Tilgængelig på to sprog" tag="Kalaallisut · Dansk">
          Vælg det sprog du er mest fortrolig med. Begge versioner er udviklet
          i samarbejde med Uddannelsesstyrelsen.
        </Card>
      </Two>
      <CTARow>
        <CTA primary>Start screening (aktiveres i løbet af 2027)</CTA>
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
          Skoler og institutioner kan kontakte videnscenteret for rådgivning om
          næste skridt.
        </li>
      </ol>

      <Callout>
        Screeningsværktøjer til de yngste klasser ligger allerede i alle skoler
        og i MISI. Kontakt din skoles læsevejleder for at komme i gang.
      </Callout>
    </PageBody>
  );
}
