import type { Metadata } from 'next';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = { title: 'Rapporter' };
export default function RapporterPage() {
  return (
    <StubPage lede="Her samler vi rapporter og undersøgelser om ordblindhed og læse- og skrivevanskeligheder i Grønland.">
      <p>
        Vi offentliggør løbende rapporter, evalueringer og undersøgelser i takt
        med, at arbejdet under handlingsplanen skrider frem.
      </p>
    </StubPage>
  );
}
