import type { Metadata } from 'next';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = { title: 'Opdagelse og screening' };
export default function OpdagelseOgScreeningPage() {
  return (
    <StubPage lede="Her finder du viden om, hvordan ordblindhed opdages i folkeskolen — og hvordan screening foregår.">
      <p>
        Indholdet udarbejdes løbende — blandt andet i takt med arbejdet med at
        digitalisere screeningsværktøjerne.
      </p>
    </StubPage>
  );
}
