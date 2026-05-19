import type { Metadata } from 'next';
import { PageBody, Lede, SectionHeading, PageVideo } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Podcasts' };

export default function PodcastsPage() {
  return (
    <PageBody>
      <Lede>
        Podcast-episoder med Naqinneqs medarbejdere og samarbejdspartnere om
        ordblindhed og læse- og skrivevanskeligheder.
      </Lede>

      <SectionHeading>Podcast med Naqinneqs dysleksiafdeling</SectionHeading>
      <p>
        I denne episode fortæller medarbejdere fra dysleksiafdelingen om
        arbejdet med at styrke læse- og skrivekompetencer i Grønland —
        herunder IntoWords, kompetenceudvikling og den kommende grønlandske
        ordblindetest.
      </p>
      <PageVideo
        src="https://www.youtube.com/embed/SRFrjCga8yM"
        title="Podcast med Naqinneqs dysleksiafdeling"
      />
    </PageBody>
  );
}
