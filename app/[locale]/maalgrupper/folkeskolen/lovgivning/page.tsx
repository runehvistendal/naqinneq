import type { Metadata } from 'next';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = { title: 'Lovgivning — Folkeskolen' };
export default function FolkeskolenLovgivningPage() {
  return (
    <StubPage lede="Her finder du viden om lovgivning om ordblindhed og andre læse- og skrivevanskeligheder i folkeskolen.">
      <p>
        Der findes i dag ingen specifik lovgivning i Grønland, der sikrer
        rettigheder for personer med ordblindhed. Et nyt lovtiltag er en del af
        handlingsplanen.
      </p>
      <p>Vi opdaterer siden, når der er konkret lovgivning på området.</p>
    </StubPage>
  );
}
