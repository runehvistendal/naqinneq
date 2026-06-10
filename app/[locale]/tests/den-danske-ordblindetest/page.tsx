import type { Metadata } from 'next';
import { PageBody, Lede, SectionHeading, Callout, InlineLink } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Den danske ordblindetest' };

export default function DanskeOrdblindetestPage() {
  return (
    <PageBody>
      <Lede>
        Grønland har fået adgang til den danske nationale ordblindetest. Vi
        arbejder på, hvordan adgangen tildeles i praksis.
      </Lede>

      <SectionHeading>Hvorfor en dansk ordblindetest?</SectionHeading>
      <p>
        Der er ca. 10.000 dansksprogede borgere i Grønland — herunder mange
        unge og voksne, der rejser til Danmark for at studere eller gå på
        efterskole. Dansk er desuden officielt andet sprog i Grønland.
      </p>
      <p>
        Det er vigtigt, at denne del af befolkningen også har adgang til test
        for ordblindhed og den rette hjælp.
      </p>

      <SectionHeading>Hvor er vi i arbejdet?</SectionHeading>
      <p>
        Grønland har formelt set fået adgang til den danske nationale
        ordblindetest. Vi arbejder nu sammen med de danske styrelser STIL
        (Styrelsen for It og Læring) og STUK (Styrelsen for Undervisning og
        Kvalitet) om, hvordan grønlandske borgere igen får adgang til testen i
        praksis.
      </p>
      <p>
        Arbejdet forventes færdiggjort i perioden 2026–2027. Når adgangen er på
        plads, finder du al relevant information på denne side.
      </p>

      <Callout>
        Har du spørgsmål om den danske ordblindetest? Kontakt os via{' '}
        <InlineLink href="/videnscenteret/kontakt">kontaktsiden</InlineLink>.
      </Callout>
    </PageBody>
  );
}
