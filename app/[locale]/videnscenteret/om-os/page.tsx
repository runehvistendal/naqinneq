import type { Metadata } from 'next';
import { PageBody, Lede, SectionHeading, Two, Card, Callout, InlineLink } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Om os' };

export default function OmOsPage() {
  return (
    <PageBody>
      <Lede>
        Naqinneq omsætter viden til værdi for personer med ordblindhed og andre
        læse- og skrivevanskeligheder. Det gør vi gennem rådgivning, udvikling
        og praksis. Vi er organisatorisk forankret under Uddannelsesstyrelsen.
      </Lede>

      <SectionHeading>Baggrund</SectionHeading>
      <p>
        Naqinneq er etableret som en del af den nationale handlingsplan mod
        ordblindhed og læse- og skrivevanskeligheder 2025–2029. I handlingsplanen
        har man fokus på ordblindhed i første omgang. Efterhånden igangsættes
        initiativer for andre læse- og skrivevanskeligheder.
      </p>

      <SectionHeading>Det arbejder vi for</SectionHeading>
      <ul className="bullets">
        <li>Indsamle og dele viden om ordblindhed og andre læsevanskeligheder.</li>
        <li>
          Støtte lærere og vejledere i at undervise og hjælpe personer med
          ordblindhed og læsevanskeligheder.
        </li>
        <li>Rådgive og vejlede fagfolk.</li>
        <li>Udbrede viden i samfundet, så flere forstår, hvad ordblindhed er.</li>
      </ul>

      <SectionHeading>Det arbejder vi med</SectionHeading>
      <Two>
        <Card title="Undervisning og viden">
          Vi laver og deler materiale til lærere, skoler og kommuner. Det
          bygger på viden og erfaring fra både Grønland og andre lande.
        </Card>
        <Card title="Rådgivning">
          Vi rådgiver skoler, institutioner og fagfolk. Der mangler faste
          støttetilbud i Grønland — det vil vi ændre.
        </Card>
        <Card title="Videnscenter">
          Vi samler viden om ordblindhed og deler den med fagfolk, skoler og
          myndigheder. Vi holder øje med, hvad der virker bedst i kommunerne.
        </Card>
        <Card title="IT og faglig støtte">
          Vi hjælper med faglige spørgsmål og teknisk support til test og
          hjælpemidler.
        </Card>
      </Two>

      <SectionHeading>Hvem arbejder vi for?</SectionHeading>
      <Two>
        <Card title="Fagpersoner">
          Vi hjælper de fagfolk, der arbejder med ordblindhed — lærere,
          vejledere, rådgivere og kommunale konsulenter. De får viden, støtte
          og redskaber til at hjælpe børn, unge og voksne, der har svært ved at
          læse og skrive.
        </Card>
        <Card title="Uddannelser">
          Vi samarbejder med dagtilbud, folkeskoler, ungdomsuddannelser og
          voksenuddannelser. Vi laver både fælles indsatser på tværs og
          målrettede indsatser til hver gruppe.
        </Card>
        <Card title="Børn, unge og familier">
          Vi støtter børn og unge med ordblindhed — og deres forældre og
          pårørende — så hverdagen bliver lettere.
        </Card>
        <Card title="Samfundet">
          Vi arbejder også for myndigheder, arbejdsgivere og beslutningstagere.
          De spiller en vigtig rolle i at skabe gode vilkår for mennesker med
          ordblindhed.
        </Card>
      </Two>

      <SectionHeading>Kort sagt</SectionHeading>
      <p>
        Vi vil skabe bedre muligheder for mennesker med ordblindhed — både i
        skolen, på jobbet og i hverdagen.
      </p>

      <Callout>
        Læs mere om vores arbejde i{' '}
        <InlineLink href="/videnscenteret/indsatsomraader">indsatsområderne</InlineLink>{' '}
        eller find ressourcer til din målgruppe.
      </Callout>
    </PageBody>
  );
}
