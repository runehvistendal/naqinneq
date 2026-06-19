import type { Metadata } from 'next';
import { PageBody, Lede, SectionHeading, Two, Card, CTARow, CTA, Callout, InlineLink } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Folkeskolen — Overblik' };

export default async function FolkeskolenOverblikPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lp = (p: string) => locale === 'kl' ? `/kl${p}` : p;

  return (
    <PageBody>
      <Lede>
        Naqinneq støtter folkeskolen i at opdage og hjælpe elever med ordblindhed
        og andre læse- og skrivevanskeligheder — fra tidlig screening til konkrete
        støttestrategier i undervisningen.
      </Lede>

      <SectionHeading>Hvad kan Naqinneq hjælpe med?</SectionHeading>
      <Two>
        <Card title="Screening og test" href={lp('/tests/screening-for-ordblindhed')}>
          Screeningsværktøjer til de yngste klasser findes på alle skoler og i
          MISI — og vi arbejder på at digitalisere dem.
        </Card>
        <Card title="Vejledninger til lærere" href={lp('/ressourcer/vejledninger')}>
          Praktiske vejledninger til undervisning af elever med læse- og
          skrivevanskeligheder — på kalaallisut og dansk.
        </Card>
        <Card title="Digitale hjælpemidler" href={lp('/ressourcer/laese-og-skriveteknologi')}>
          IntoWords og andre hjælpemidler kan gøre en stor forskel for elever
          der kæmper med læsning og skrivning.
        </Card>
        <Card title="Kurser for fagfolk" href={lp('/ressourcer/kurser')}>
          Videnscenteret tilbyder kurser i ordblindepædagogik for lærere og
          vejledere.
        </Card>
      </Two>

      <SectionHeading>Sådan kommer du i gang</SectionHeading>
      <p>
        Har du en mistanke om at en elev har læse- og skrivevanskeligheder?
        Start med en screening — kontakt skolens læsevejleder for at komme i
        gang.
      </p>
      <CTARow>
        <CTA primary href={lp('/tests/screening-for-ordblindhed')}>Læs om screening</CTA>
        <CTA href={lp('/maalgrupper/folkeskolen/opdagelse-og-screening')}>
          Læs om opdagelse og screening
        </CTA>
      </CTARow>

      <Callout>
        Har du spørgsmål? Videnscenteret tilbyder vejledning til lærere og
        skoleledere.{' '}
        <InlineLink href={lp('/videnscenteret/kontakt')}>Kontakt os her</InlineLink>.
      </Callout>
    </PageBody>
  );
}
