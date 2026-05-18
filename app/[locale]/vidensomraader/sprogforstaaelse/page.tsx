import type { Metadata } from 'next';
import Link from 'next/link';
import { PageBody, Lede, SectionHeading, Callout, InlineLink } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Sprogforståelse' };

export default async function SprogforstaaelsePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lp = (p: string) => locale === 'kl' ? `/kl${p}` : p;

  return (
    <PageBody>
      <Lede>
        Sprogforståelse er fundamentet under al læsning. Uden et solidt
        ordforråd og en fornemmelse for hvordan sætninger bygges, bliver det
        svært at forstå det man læser — også selv om man kan afkode ordene.
      </Lede>
      <SectionHeading>Tre dimensioner</SectionHeading>
      <ol className="numbered">
        <li><b>Ordforråd.</b> Antallet og dybden af de ord man kender.</li>
        <li><b>Sætningsforståelse.</b> Evnen til at gribe hvordan sætninger sammensættes.</li>
        <li><b>Tekstforståelse.</b> Evnen til at se sammenhænge mellem afsnit og hele tekster.</li>
      </ol>
      <Callout>
        Materiale på vej. Se i mellemtiden vores{' '}
        <InlineLink href={lp('/ressourcer/vejledninger')}>vejledninger</InlineLink>.
      </Callout>
    </PageBody>
  );
}
