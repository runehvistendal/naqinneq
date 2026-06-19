import type { Metadata } from 'next';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = { title: 'Vejledninger' };
export default function VejledningerPage() {
  return (
    <StubPage lede="Her samler vi vejledninger til elever, forældre og fagpersoner.">
      <p>
        Vi udarbejder løbende nye vejledninger i takt med, at indsatserne i
        handlingsplanen implementeres — fx vejledninger til IntoWords,
        screeningsværktøjerne og den kommende grønlandske ordblindetest.
      </p>
      <p>Siden opdateres, hver gang en ny vejledning er klar.</p>
    </StubPage>
  );
}
