import type { Metadata } from 'next';
import { PageBody, Lede, SectionHeading, PageVideo } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Videoer' };

export default function VideoerPage() {
  return (
    <PageBody>
      <Lede>
        Videoguider og introduktioner til IntoWords og andre redskaber for
        elever, lærere og vejledere.
      </Lede>

      <SectionHeading>Introduktion til IntoWords</SectionHeading>
      <p>
        Denne video viser, hvordan du kommer i gang med IntoWords — det
        kompenserende læse- og skriveprogram, som er gratis for alle borgere i
        Grønland.
      </p>
      <PageVideo
        src="https://www.youtube.com/embed/bRY2BJCOwaM"
        title="Introduktionsvideo til IntoWords"
      />
    </PageBody>
  );
}
