import type { Metadata } from 'next';
import { Homepage } from '@/components/home/Homepage';

export const metadata: Metadata = {
  title: 'Naqinneq.gl — Videnscenter for ordblindhed',
  description: 'Nationalt grønlandsk videnscenter for ordblindhed og læse- og skrivevanskeligheder under Uddannelsesstyrelsen, Naalakkersuisut.',
};

export default async function ForsidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <Homepage locale={locale} />;
}
