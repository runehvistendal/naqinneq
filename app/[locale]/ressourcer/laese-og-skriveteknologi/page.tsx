import type { Metadata } from 'next';
import { PageBody, Lede, SectionHeading, Two, Card, CTARow, CTA, Callout } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Læse- og skriveteknologi (IntoWords)' };

export default function IntoWordsPage() {
  return (
    <PageBody>
      <Lede>
        IntoWords er et kompenserende it-redskab til borgere med læse- og
        skrivevanskeligheder.
      </Lede>

      <SectionHeading>Hvem har adgang?</SectionHeading>
      <p>
        Adgangen til IntoWords rulles ud i faser. Den første gruppe — skoler og
        uddannelser — har allerede fået adgang. Derefter følger arbejdsmarkedet
        og privatpersoner.
      </p>
      <ul className="bullets">
        <li>Skoler og uddannelser: adgang allerede givet</li>
        <li>Arbejdsmarkedet: forventet forår 2027</li>
        <li>Enkeltborgere: forventet efterår 2027</li>
      </ul>

      <SectionHeading>Hvad kan IntoWords?</SectionHeading>
      <Two>
        <Card title="Oplæsning" tag="Kalaallisut · Dansk · Engelsk">
          IntoWords kan læse tekst op i flere sprog.
        </Card>
        <Card title="Ordforslag" tag="Mens du skriver">
          Programmet foreslår ord ud fra de første bogstaver, så det bliver
          lettere at skrive korrekt.
        </Card>
        <Card title="Scanning" tag="Foto af tekst">
          Tag et billede af en bog eller et brev — IntoWords læser det op.
        </Card>
        <Card title="Til alle enheder" tag="Mac · Win · iOS · Android">
          IntoWords kan bruges på telefon, tablet og computer.
        </Card>
      </Two>
      <p>
        Programmet understøtter allerede en lang række fremmedsprog. Grønlandsk
        sprog og grønlandske kompenserende redskaber implementeres løbende.
      </p>

      <CTARow>
        <CTA primary href="https://www.vitec-mv.com/programmer/download/?f0=12194">Hent IntoWords</CTA>
        <CTA href="/ressourcer/vejledninger">Vejledninger</CTA>
      </CTARow>

      <Callout>
        Har du spørgsmål om adgang eller brug af IntoWords? Kontakt os via{' '}
        <a href="/videnscenteret/kontakt" className="inline-link">kontaktsiden</a>.
      </Callout>
    </PageBody>
  );
}
