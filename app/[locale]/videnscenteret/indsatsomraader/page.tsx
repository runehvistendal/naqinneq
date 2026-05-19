import type { Metadata } from 'next';
import { PageBody, Lede, SectionHeading, Card, Two, Callout, InlineLink } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Indsatsområder' };

export default function IndsatsomraaderPage() {
  return (
    <PageBody>
      <Lede>
        Målet er at have fokus på ordblindhed i de første år. Efterhånden som
        ressourcer og kompetencer opbygges, igangsættes initiativer, der også
        retter sig mod andre former for læse- og skrivevanskeligheder.
      </Lede>

      <SectionHeading>Udvikling af udredningsmaterialer</SectionHeading>
      <p>
        Der er et akut behov for udredningsmaterialer til ordblindhed og andre
        læsevanskeligheder. Grønlandsksprogede testmaterialer har været
        efterspurgt i mange år. Uden disse er mulighederne for hjælp og støtte
        meget begrænsede — og det gør det svært at opfylde kravene til
        dokumentation, som fx Handicaploven stiller.
      </p>
      <p>Indsatsområdet omfatter følgende initiativer:</p>
      <ul className="bullets">
        <li>Udvikling af en grønlandsksproget ordblindetest</li>
        <li>Digitalisering af screeningsværktøjer til yngstetrinnet</li>
        <li>Udvikling af udredningsmaterialer til skrive- og læsevanskeligheder</li>
        <li>Adgang til den danske nationale ordblindetest</li>
      </ul>

      <SectionHeading>Udvikling af grønlandsksprogede hjælpemidler</SectionHeading>
      <p>
        Der er behov for at udvikle grønlandsksprogede materialer — især læse-
        og skriveteknologi til ordblinde. Dansksprogede og engelsksprogede
        teknologier hjælper allerede mange, men grønlandsksprogede værktøjer er
        nødvendige for reel ligestilling.
      </p>
      <p>
        Nye løsninger skal være enkle og brugervenlige, og der skal gives
        tydelig vejledning.
      </p>
      <p>Indsatsområdet omfatter følgende initiativer:</p>
      <ul className="bullets">
        <li>
          Implementering af understøttende læse- og skriveværktøjer med
          funktioner, der kan anvendes i flere sprog
        </li>
        <li>
          Deltagelse i et forskningssamarbejde om AiRO — et læringsværktøj med
          dokumenteret effekt på tidlig stavning og ordblindhed — med henblik på
          at udvikle en grønlandsk version
        </li>
        <li>
          Evaluering af AI-baseret talegenkendelse til borgere i Grønland
        </li>
      </ul>

      <SectionHeading>Øget vidensniveau og kompetenceløft</SectionHeading>
      <p>
        Der mangler fagpersonale med viden om ordblindhed og andre læse- og
        skrivevanskeligheder. Det gør det svært at nå de politiske mål.
        Kompetenceudvikling skal styrkes på tværs af skoler, arbejdspladser og
        andre relevante områder.
      </p>
      <p>Indsatserne retter sig mod:</p>
      <Two>
        <Card title="Uddannelsesinstitutioner">
          Pædagog- og læreruddannelser, herunder Institut for Læring
          (Ilinniarfissuaq).
        </Card>
        <Card title="Praktikere">
          Undervisere og vejledere på tværs af uddannelser med
          kompetenceudviklingsforløb.
        </Card>
      </Two>
      <p>Indsatsområdet omfatter følgende initiativer:</p>
      <ul className="bullets">
        <li>
          Styrkelse af fagligheden vedrørende skriftsprogsvanskeligheder ved
          Institut for Læring (Ilinniarfissuaq)
        </li>
        <li>Læsevejlederkursus (fagspecifikt kursus)</li>
        <li>
          Kompetenceudviklingsforløb for undervisere på tværs af uddannelser
          og vejledere
        </li>
        <li>Oplysningskampagne med ledelses- og forvaltningsspor</li>
      </ul>

      <Callout>
        Læs mere om vores baggrund og organisation på{' '}
        <InlineLink href="/videnscenteret/om-os">Om os</InlineLink>.
      </Callout>
    </PageBody>
  );
}
