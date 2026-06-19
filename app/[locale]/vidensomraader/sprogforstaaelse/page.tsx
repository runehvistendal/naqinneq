import type { Metadata } from 'next';
import { PageBody, Lede, SectionHeading, Two, Card, Callout, InlineLink } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Sprogforståelse' };

export default function SprogforstaaelsePage() {
  return (
    <PageBody>
      <Lede>
        Sprogforståelse er nøglen til læring, trivsel og deltagelse. Elever med
        sprogforståelsesvanskeligheder har brug for tidlig og målrettet støtte —
        så de får mulighed for at udvikle sig på lige fod med andre.
      </Lede>

      <SectionHeading>Hvad er sprogforståelse?</SectionHeading>
      <p>
        Sprogforståelse handler om evnen til at forstå betydningen af ord,
        sætninger og tekster. Det er en grundlæggende færdighed, der gør det
        muligt at lære nyt, kommunikere og deltage i fællesskaber — både i og
        uden for skolen.
      </p>
      <p>
        Elever med sprogforståelsesvanskeligheder kan have svært ved at følge
        med i undervisningen, forstå instruktioner og udtrykke sig klart. Det
        påvirker både faglig udvikling, selvtillid og trivsel.
      </p>

      <SectionHeading>Hvorfor er det vigtigt?</SectionHeading>
      <p>
        God sprogforståelse er en forudsætning for at lære at læse og skrive.
        Elever, der begynder i skolen med stærke sproglige færdigheder, har
        lettere ved at forstå tekster og følge med i undervisningen.
      </p>
      <p>
        Elever med sprogforståelsesvanskeligheder kan få svært ved at koble ord
        og betydning — og det kan føre til læsevanskeligheder senere.
        Vanskelighederne kan skyldes et begrænset sprogligt miljø derhjemme
        eller sproglige indlæringsvanskeligheder som DLD.
      </p>

      <SectionHeading>DLD — den mest udbredte udviklingsvanskelighed</SectionHeading>
      <p>
        DLD (Developmental Language Disorder) er den mest udbredte
        udviklingsvanskelighed hos børn, unge og voksne — og alligevel er det
        noget de fleste aldrig har hørt om.
      </p>
      <p>
        Personer med DLD har svært ved at lære, forstå, bruge og producere
        sprog. Vanskelighederne kan se meget forskellige ud: nogle har svært
        ved at huske ord, andre ved at forstå sætninger, fortælle
        sammenhængende eller følge komplekse instruktioner.
      </p>

      <SectionHeading>Hvordan viser det sig?</SectionHeading>
      <p>
        Sprogforståelsesvanskeligheder er ikke altid synlige. Mange med DLD
        taler flydende, men forstår ikke altid betydningen bag de ord og
        sætninger, de hører eller læser. Det kan føre til:
      </p>
      <ul className="bullets">
        <li>Vanskeligheder med at følge med i samtaler</li>
        <li>Problemer med at forstå tekster og instruktioner</li>
        <li>Udfordringer i sociale sammenhænge</li>
        <li>Begrænset ordforråd og uklare forklaringer</li>
      </ul>
      <p>
        Når kravene til forståelse og formulering stiger, bliver
        vanskelighederne ofte mere tydelige.
      </p>

      <SectionHeading>Indsatser og støtte</SectionHeading>
      <p>
        DLD og sprogforståelsesvanskeligheder kan ikke fjernes — men eleverne
        kan udvikle sig markant med den rette støtte. Indsatser bør fokusere på
        tre områder:
      </p>
      <Two>
        <Card title="Direkte sprogarbejde">
          Målrettet træning i ordforråd, sætninger og fortælling.
        </Card>
        <Card title="Tilpasninger i undervisningen">
          Tydelig struktur, visuel støtte og korte, klare instruktioner.
        </Card>
        <Card title="Inkluderende læringsmiljøer">
          Sproget understøttes aktivt, og alle elever får mulighed for at
          deltage.
        </Card>
      </Two>

      <Callout>
        Teksten er stillet til rådighed af{' '}
        <InlineLink href="https://nvol.dk">NVOL.dk</InlineLink>.
      </Callout>
    </PageBody>
  );
}
