import type { Metadata } from 'next';
import Link from 'next/link';
import { PageBody, Lede, SectionHeading, Two, Card, CTARow, CTA, Callout, InlineLink } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Ordblindhed' };

export default async function OrdblindhedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lp = (p: string) => locale === 'kl' ? `/kl${p}` : p;

  return (
    <PageBody>
      <Lede>
        Ordblindhed (dysleksi) er en vedvarende vanskelighed ved at lære at
        omsætte bogstaver til lyd — og lyd tilbage til bogstaver. Ordblindhed
        forsvinder ikke, men med den rette støtte og de rette redskaber kan man
        klare sig fint i uddannelse og arbejdsliv.
      </Lede>

      <SectionHeading>Tegn på ordblindhed</SectionHeading>
      <Two>
        <Card title="Hos børn">
          <ul className="bullets">
            <li>Bytter rundt på bogstaver og lyde</li>
            <li>Læser langsomt og bruger meget energi</li>
            <li>Undgår at læse højt</li>
            <li>Stavefejl gentager sig på samme måde</li>
          </ul>
        </Card>
        <Card title="Hos voksne">
          <ul className="bullets">
            <li>Læser sjældent for fornøjelsen</li>
            <li>Tager lang tid om e-mails og blanketter</li>
            <li>Foretrækker at få information mundtligt</li>
            <li>Har strategier til at skjule læsevanskeligheder</li>
          </ul>
        </Card>
      </Two>

      <SectionHeading>Hvad gør jeg, hvis jeg har en mistanke?</SectionHeading>
      <p>
        Du kan tage en uforpligtende screening — den fortæller om der er grund
        til at gå videre med en egentlig ordblindetest. Screeningen tager
        omkring 15 minutter og kan tages på grønlandsk eller dansk.
      </p>
      <CTARow>
        <CTA primary href={lp('/tests/screening-for-ordblindhed')}>Start screening</CTA>
        <CTA href={lp('/tests/den-groenlandske-ordblindetest')}>
          Læs om den grønlandske ordblindetest
        </CTA>
      </CTARow>

      <Callout>
        Naqinneq.gl tilbyder også vejledning til forældre, lærere og
        arbejdsgivere. Find indgang via{' '}
        <InlineLink href={lp('/maalgrupper/folkeskolen/overblik')}>Målgrupper</InlineLink>.
      </Callout>
    </PageBody>
  );
}
