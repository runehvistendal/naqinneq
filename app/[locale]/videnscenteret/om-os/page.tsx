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
        ordblindhed og læse- og skrivevanskeligheder 2023–2029. I handlingsplanen
        har man fokus på ordblindhed i første omgang. Efterhånden igangsættes
        initiativer for andre læse- og skrivevanskeligheder.
      </p>

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
