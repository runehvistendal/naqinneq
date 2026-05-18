import type { Metadata } from 'next';
import { PageBody, Lede, SectionHeading, Two, Card } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Om os' };

export default function OmOsPage() {
  return (
    <PageBody>
      <Lede>
        Naqinneq er Grønlands nationale videnscenter for ordblindhed og læse-
        og skrivevanskeligheder. Vi hører under Uddannelsesstyrelsen i
        Naalakkersuisut.
      </Lede>
      <SectionHeading>Vores opdrag</SectionHeading>
      <p>
        Videnscenteret blev oprettet som en del af den nationale handlingsplan{' '}
        <em>
          Indsats for at afhjælpe ordblindhed og andre læse- og
          skrivevanskeligheder blandt børn, unge og voksne 2025–2029
        </em>
        . Vi permanentgør den tidligere afdeling for dysleksitiltag og samler
        viden, vejledning, testmateriale og digitale hjælpemidler ét sted.
      </p>
      <SectionHeading>Det gør vi</SectionHeading>
      <Two>
        <Card title="Samler viden">
          Forskning, erfaringer og data fra hele landet.
        </Card>
        <Card title="Tilbyder tests">
          Den grønlandske og den danske ordblindetest.
        </Card>
        <Card title="Udvikler materialer">
          Vejledninger, kurser, podcasts og videoer.
        </Card>
        <Card title="Rådgiver">
          Skoler, virksomheder, vejledere og borgere.
        </Card>
      </Two>
    </PageBody>
  );
}
