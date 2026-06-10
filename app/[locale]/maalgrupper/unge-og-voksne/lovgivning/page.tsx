import type { Metadata } from 'next';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = { title: 'Lovgivning — Unge og voksne' };
export default function UngeOgVoksneLovgivningPage() {
  return (
    <StubPage lede="Her finder du viden om dine rettigheder som ung eller voksen med ordblindhed eller andre læse- og skrivevanskeligheder.">
      <p>
        Der findes i dag ingen specifik lovgivning i Grønland, der sikrer
        rettigheder for personer med ordblindhed — og lovgivningen er især
        uklar for unge og voksne. Et nyt lovtiltag er en del af handlingsplanen.
      </p>
      <p>Vi opdaterer siden, når der er konkret lovgivning på området.</p>
    </StubPage>
  );
}
