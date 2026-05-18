import type { Metadata } from 'next';
import { PageBody, Lede, SectionHeading, Two, Card, CTARow, CTA, Callout, InlineLink } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Unge og voksne — Overblik' };

export default async function UngeOgVoksneOverblikPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lp = (p: string) => locale === 'kl' ? `/kl${p}` : p;

  return (
    <PageBody>
      <Lede>
        Ordblindhed opdages ikke altid i skoletiden. Mange unge og voksne lever
        med uopdagede læse- og skrivevanskeligheder — og der er hjælp at hente.
      </Lede>

      <SectionHeading>Find den rette hjælp</SectionHeading>
      <Two>
        <Card title="Er du ordblind?" href={lp('/tests/screening-for-ordblindhed')}>
          Tag en gratis screening og find ud af, om dine vanskeligheder med
          læsning og skrivning kan skyldes ordblindhed.
        </Card>
        <Card title="Digitale hjælpemidler" href={lp('/ressourcer/laese-og-skriveteknologi')}>
          IntoWords kan hjælpe dig med at læse tekster op og skrive bedre —
          på jobbet, i uddannelsen og i hverdagen.
        </Card>
        <Card title="Støtte i hverdagen" href={lp('/maalgrupper/unge-og-voksne/stoette-i-hverdagen')}>
          Læs om hvilke rettigheder du har og hvilken støtte du kan søge
          som ung eller voksen med ordblindhed.
        </Card>
        <Card title="På arbejdspladsen" href={lp('/maalgrupper/unge-og-voksne/stoette-paa-arbejdspladsen')}>
          Din arbejdsgiver har mulighed for at tilbyde hjælpemidler. Læs
          om hvordan du tager samtalen.
        </Card>
      </Two>

      <SectionHeading>Du er ikke alene</SectionHeading>
      <p>
        Ordblindhed er ikke et tegn på lav intelligens — det er en neurologisk
        variation i, hvordan hjernen bearbejder sprog. Mange mennesker med
        ordblindhed klarer sig godt i uddannelse og arbejdsliv med den rette støtte.
      </p>
      <CTARow>
        <CTA primary href={lp('/tests/screening-for-ordblindhed')}>Tag en screening</CTA>
        <CTA href={lp('/vidensomraader/ordblindhed')}>Læs om ordblindhed</CTA>
      </CTARow>

      <Callout>
        Videnscenteret tilbyder personlig vejledning. Skriv eller ring — vi taler
        kalaallisut og dansk.{' '}
        <InlineLink href={lp('/videnscenteret/kontakt')}>Kontakt os</InlineLink>.
      </Callout>
    </PageBody>
  );
}
