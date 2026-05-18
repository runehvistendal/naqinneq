import type { Metadata } from 'next';
import { PageBody, Lede, Two, Card, SectionHeading, Steps, Step } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Den grønlandske ordblindetest' };

export default function GroenlandskeOrdblindetesteTest() {
  return (
    <PageBody>
      <Lede>
        Den grønlandske ordblindetest er udviklet af Uddannelsesstyrelsen
        sammen med læsevejledere i Grønland. Testen tager højde for at
        kalaallisut har en anden lyd- og stavningsstruktur end dansk.
      </Lede>
      <SectionHeading>Hvem kan tage testen?</SectionHeading>
      <Two>
        <Card title="Folkeskolen" tag="Fra 3. klasse">
          Bestilles af skolen gennem læsevejlederen. Resultatet bruges som
          grundlag for støtte i undervisningen.
        </Card>
        <Card title="Unge og voksne" tag="Fra 15 år">
          Kan tages via voksenuddannelsesvejleder, jobcenter eller egen
          henvendelse til videnscenteret.
        </Card>
      </Two>
      <SectionHeading>Sådan foregår testen</SectionHeading>
      <Steps>
        <Step n="1" title="Henvendelse">
          Du eller en pårørende kontakter en testvejleder.
        </Step>
        <Step n="2" title="Forsamtale">
          En kort snak om baggrund og motivation.
        </Step>
        <Step n="3" title="Selve testen">
          Ca. 90 minutter — fordeles ofte over to dage.
        </Step>
        <Step n="4" title="Tilbagemelding">
          Skriftlig rapport og samtale om resultatet.
        </Step>
      </Steps>
    </PageBody>
  );
}
