import type { Metadata } from 'next';
import { PageBody, Lede, Two, Card, CTARow, CTA } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Læse- og skriveteknologi (IntoWords)' };

export default function IntoWordsPage() {
  return (
    <PageBody>
      <Lede>
        IntoWords er det officielle læse- og skriveprogram for grønlandske
        borgere med ordblindhed. Det læser tekst op, hjælper med stavning og
        kan bruges på telefon, tablet og computer.
      </Lede>
      <Two>
        <Card title="Oplæsning" tag="Kalaallisut · Dansk · Engelsk">
          IntoWords kan læse tekst op i flere sprog — også blandet i samme
          dokument.
        </Card>
        <Card title="Ordforslag" tag="Mens du skriver">
          Programmet foreslår ord ud fra de første par bogstaver, så det
          bliver lettere at skrive korrekt.
        </Card>
        <Card title="Scanning" tag="Foto af tekst">
          Tag et billede af en bog eller et brev — IntoWords læser det op.
        </Card>
        <Card title="Til alle enheder" tag="Mac · Win · iOS · Android">
          Hent IntoWords gratis hvis du er borger eller elev i Grønland.
        </Card>
      </Two>
      <CTARow>
        <CTA primary>Hent IntoWords (aktiveres 1. august 2026)</CTA>
        <CTA>Vejledning til skoler</CTA>
        <CTA>Vejledning til voksne</CTA>
      </CTARow>
    </PageBody>
  );
}
