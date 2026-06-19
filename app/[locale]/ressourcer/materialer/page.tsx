import type { Metadata } from 'next';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = { title: 'Materialer' };
export default function MaterialerPage() {
  return (
    <StubPage lede="Her samler vi materialer om ordblindhed og andre læse- og skrivevanskeligheder.">
      <p>
        Vi udgiver løbende quick guides, videoguides og andet materiale i takt
        med, at indsatserne i handlingsplanen implementeres.
      </p>
      <p>Siden opdateres, hver gang nyt materiale er klar.</p>
    </StubPage>
  );
}
