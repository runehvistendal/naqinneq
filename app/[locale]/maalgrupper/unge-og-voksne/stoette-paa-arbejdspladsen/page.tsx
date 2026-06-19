import type { Metadata } from 'next';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = { title: 'Støtte på arbejdspladsen' };
export default function StoettePaaArbejdsladsenPage() {
  return (
    <StubPage lede="Her finder du viden om støtte på arbejdspladsen for medarbejdere med læse- og skrivevanskeligheder.">
      <p>
        Indholdet udarbejdes løbende — blandt andet i takt med, at IntoWords
        rulles ud til arbejdsmarkedet.
      </p>
    </StubPage>
  );
}
