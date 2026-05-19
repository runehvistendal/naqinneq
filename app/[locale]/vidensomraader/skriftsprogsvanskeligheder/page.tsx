import type { Metadata } from 'next';
import { PageBody, Lede, SectionHeading, Two, Card, Callout, InlineLink } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Skriftsprogsvanskeligheder' };

export default function SkriftsprogPage() {
  return (
    <PageBody>
      <Lede>
        Skriftsprogsvanskeligheder betyder, at man har svært ved at forstå,
        læse eller skrive tekster. Det kan handle om afkodning, forståelse
        eller skriftlig fremstilling — eller en kombination.
      </Lede>

      <SectionHeading>Hvad er skriftsprogsvanskeligheder?</SectionHeading>
      <p>
        Vanskelighederne kan være lette eller omfattende. De kan være
        midlertidige eller varige. Hvor store udfordringer man oplever, afhænger
        af kravene i omgivelserne og af personens sproglige forudsætninger.
      </p>
      <p>
        Skriftsprogsvanskeligheder opstår, når kravene til læsning og skrivning
        bliver større end de færdigheder, man har.
      </p>
      <p>
        To faktorer har særlig betydning: det sproglige miljø og sproglige
        indlæringsvanskeligheder.
      </p>

      <SectionHeading>Det sproglige miljø</SectionHeading>
      <p>
        Det miljø, man vokser op og lærer i, har stor betydning for sproglig
        udvikling. Et godt sprogligt miljø giver ro og struktur til læring.
        Det giver mulighed for, at alle kan være sprogligt aktive.
      </p>
      <p>
        Det handler også om samspillet. For eksempel når voksne læser højt for
        børn, eller bruger billeder og kropssprog til at støtte forståelsen.
      </p>

      <SectionHeading>Sproglige indlæringsvanskeligheder</SectionHeading>
      <p>
        Sproglige indlæringsvanskeligheder er medfødte og vedvarende problemer
        med at lære og bruge sprog.
      </p>
      <Two>
        <Card title="Ordblindhed">
          Man har svært ved at koble bogstaver og lyde. Det gør læsning og
          stavning vanskeligere.
        </Card>
        <Card title="Sprogforstyrrelser">
          Problemer med at forstå, bruge eller producere talt sprog. Den mest
          almindelige type er DLD (Developmental Language Disorder).
        </Card>
      </Two>

      <SectionHeading>Læringsmiljøer og undervisning</SectionHeading>
      <p>
        Børn, unge og voksne med skriftsprogsvanskeligheder er lige så
        forskellige som alle andre. Deres behov varierer meget — i skole,
        arbejde og fritid.
      </p>
      <p>
        Fagpersoner bør skabe inkluderende læringsmiljøer, hvor alle kan
        udvikle sig og deltage på lige fod. Undervisningen skal tilpasses den
        enkeltes behov og tage højde for de konkrete vanskeligheder.
      </p>

      <Callout>
        Teksten er stillet til rådighed af{' '}
        <InlineLink href="https://nvol.dk">NVOL.dk</InlineLink>.
      </Callout>
    </PageBody>
  );
}
