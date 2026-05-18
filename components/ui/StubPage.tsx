import { PageBody, Lede, Callout, SectionHeading } from './PageBody';

export function StubPage({ title }: { title: string }) {
  return (
    <PageBody>
      <Lede>
        Indholdet til <b>{title}</b> er under udarbejdelse og publiceres ved
        lanceringen 1. august 2026.
      </Lede>
      <Callout>
        Denne side er en stub. Det endelige indhold udarbejdes af videnscenteret
        sammen med fagpersoner og repræsentanter for målgruppen.
      </Callout>
      <SectionHeading>Hvad vil siden indeholde?</SectionHeading>
      <ul className="bullets">
        <li>Introduktion og nøglepointer</li>
        <li>Konkrete redskaber og vejledninger</li>
        <li>Lovgivning og rettigheder, hvor relevant</li>
        <li>Links til materialer, podcasts og videoer</li>
      </ul>
    </PageBody>
  );
}
