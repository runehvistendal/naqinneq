import type { Metadata } from 'next';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = { title: 'Støtte i hverdagen' };
export default function StoetteIHverdagenPage() {
  return (
    <StubPage lede="Her finder du viden om støtte i hverdagen for unge og voksne med læse- og skrivevanskeligheder.">
      <p>
        Indholdet udarbejdes løbende i takt med, at indsatserne implementeres —
        fx udrulningen af læse- og skriveteknologi til alle borgere.
      </p>
    </StubPage>
  );
}
