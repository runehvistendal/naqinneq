import { redirect } from 'next/navigation';

export default async function TestsIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect(locale === 'kl' ? '/kl/tests/screening-for-ordblindhed' : '/tests/screening-for-ordblindhed');
}
