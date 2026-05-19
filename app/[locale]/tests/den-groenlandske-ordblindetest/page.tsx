import type { Metadata } from 'next';
import { PageBody, Lede, SectionHeading, Callout } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Den grønlandske ordblindetest' };

export default function GroenlandskeOrdblindetestPage() {
  return (
    <PageBody>
      <Lede>
        Den grønlandske ordblindetest er under udvikling i perioden 2025–2027.
        Når den er klar, lægges alle relevante informationer her.
      </Lede>

      <SectionHeading>Hvorfor er testen nødvendig?</SectionHeading>
      <p>
        Der er et akut behov for udredningsmaterialer til ordblindhed og andre
        læsevanskeligheder. Grønlandsksprogede testmaterialer har været
        efterspurgt i mange år — og det ses tydeligt i politiske målsætninger
        og i befolkningens stemme.
      </p>
      <p>
        En ordblindediagnose kan være afgørende for, at folk får den rette
        hjælp og kan deltage aktivt i samfundet. En ordblindediagnose
        anerkender, at visse personer oplever indlæringsvanskeligheder, og
        skaber grundlag for målrettet støtte.
      </p>
      <p>
        I dag er mulighederne for hjælp og støtte meget begrænsede uden adgang
        til de rette udredningsmaterialer. For eksempel kræver støtte via
        Handicaploven en dokumenteret funktionsnedsættelse — og der eksisterer
        endnu ikke en grønlandsk ordblindetest, der kan levere den
        dokumentation.
      </p>

      <SectionHeading>Hvad sker der frem mod 2027?</SectionHeading>
      <p>
        Vores undersøgelser viser, at kravene til en digital ordblindetest og
        screeningsværktøjer er ens. Derfor udvikles de som ét samlet system i
        perioden 2025–2027. Den grønlandske ordblindetest forventes at sættes i
        drift i løbet af 2027.
      </p>

      <Callout>
        Har du spørgsmål om testen eller testprocessen? Kontakt os via{' '}
        <a href="/videnscenteret/kontakt" className="inline-link">kontaktsiden</a>.
      </Callout>
    </PageBody>
  );
}
