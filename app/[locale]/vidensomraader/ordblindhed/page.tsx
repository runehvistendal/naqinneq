import type { Metadata } from 'next';
import { PageBody, Lede, SectionHeading, Two, Card, Callout, InlineLink } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Ordblindhed' };

export default async function OrdblindhedPage({ params }: { params: Promise<{ locale: string }> }) {
  await params;

  return (
    <PageBody>
      <Lede>
        Ordblindhed er en varig funktionsnedsættelse. Den gør det svært at
        koble bogstav og lyd — og derfor svært at læse og stave. Ordblindhed
        findes i mange grader, fra let til svær.
      </Lede>

      <SectionHeading>Hvad er ordblindhed?</SectionHeading>
      <p>
        Ordblindhed er en indlæringsvanskelighed. Den påvirker evnen til at
        afkode skriftsprog. Det er krævende — men ikke umuligt — for ordblinde
        at udvikle gode læse- og skrivekompetencer.
      </p>
      <p>
        Det kræver målrettet undervisning og brug af læse- og skriveteknologi.
        Ordblindhed viser sig forskelligt fra person til person. Nogle har også
        vanskeligheder med sprogforståelse, hvilket kan gøre det sværere at få
        fuldt udbytte af digitale hjælpemidler som oplæsning.
      </p>
      <p>
        Åbenhed og inkluderende miljøer i skole, uddannelse og arbejde gør det
        lettere for ordblinde at trives og deltage på lige fod med andre.
      </p>

      <SectionHeading>Tegn på ordblindhed</SectionHeading>
      <Two>
        <Card title="Hos børn">
          <ul className="bullets">
            <li>Bytter rundt på bogstaver og lyde</li>
            <li>Læser langsomt og bruger meget energi</li>
            <li>Undgår at læse højt</li>
            <li>Stavefejl gentager sig på samme måde</li>
          </ul>
        </Card>
        <Card title="Hos voksne">
          <ul className="bullets">
            <li>Læser sjældent for fornøjelsen</li>
            <li>Tager lang tid om e-mails og blanketter</li>
            <li>Foretrækker at få information mundtligt</li>
            <li>Har strategier til at skjule læsevanskeligheder</li>
          </ul>
        </Card>
      </Two>

      <Callout>
        Teksten er stillet til rådighed af{' '}
        <InlineLink href="https://nvol.dk">NVOL.dk</InlineLink>.
      </Callout>
    </PageBody>
  );
}
