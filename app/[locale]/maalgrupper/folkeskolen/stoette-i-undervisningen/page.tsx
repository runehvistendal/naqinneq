import type { Metadata } from 'next';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = { title: 'Støtte i undervisningen' };
export default function StoetteIUndervisningenPage() {
  return (
    <StubPage lede="Her finder du viden om støtte i undervisningen til elever med ordblindhed og andre læse- og skrivevanskeligheder.">
      <p>
        Indholdet udarbejdes løbende sammen med fagpersoner i takt med, at
        indsatserne i handlingsplanen implementeres.
      </p>
    </StubPage>
  );
}
