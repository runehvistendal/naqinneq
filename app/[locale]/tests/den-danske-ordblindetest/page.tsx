import type { Metadata } from 'next';
import { PageBody, Lede, SectionHeading, Callout, InlineLink } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Den danske ordblindetest' };

export default function DanskeOrdblindetestPage() {
  return (
    <PageBody>
      <Lede>
        Uddannelsesstyrelsen arbejder på at give adgang til den danske nationale
        ordblindetest for dansksprogede borgere i Grønland.
      </Lede>

      <SectionHeading>Hvorfor en dansk ordblindetest?</SectionHeading>
      <p>
        Der er ca. 10.000 dansksprogede borgere i Grønland — herunder mange
        unge og voksne, der rejser til Danmark for at studere eller gå på
        efterskole. Dansk er desuden officielt andet sprog i Grønland.
      </p>
      <p>
        Det er vigtigt, at denne del af befolkningen også har adgang til test
        for ordblindhed og den rette hjælp.
      </p>

      <SectionHeading>Pilottest og fremtidsplaner</SectionHeading>
      <p>
        Uddannelsesstyrelsen planlægger en pilottest af den danske ordblindetest
        for at vurdere, om den er anvendelig i en grønlandsk kontekst.
      </p>
      <p>
        Hvis resultaterne viser, at testen er nyttig, arbejdes der på vedvarende
        adgang. Testen skal bruges som supplement til de øvrige testmaterialer,
        så dansksprogede borgere i Grønland også har mulighed for hjælp og
        testning. Den vil kunne bruges til udredning af flersprogede borgere og
        dækker børn, unge og voksne.
      </p>

      <SectionHeading>Frit tilgængeligt materiale</SectionHeading>
      <p>
        Der findes dansksprogede testmaterialer, som frit kan anvendes allerede
        nu — fx materialet fra Københavns Universitet:{' '}
        <InlineLink href="https://laes.hum.ku.dk">laes.hum.ku.dk</InlineLink>.
      </p>
      <p>
        Det er de enkelte skoler, uddannelsesinstitutioner og kommuner, der har
        ansvar for at sørge for, at sådanne test bruges korrekt. Skole- og
        uddannelsesledere skal sikre, at der er tilknyttet relevante fagpersoner,
        så testene anvendes på en fagligt forsvarlig måde.
      </p>

      <Callout>
        Har du spørgsmål om den danske ordblindetest? Kontakt os via{' '}
        <InlineLink href="/videnscenteret/kontakt">kontaktsiden</InlineLink>.
      </Callout>
    </PageBody>
  );
}
