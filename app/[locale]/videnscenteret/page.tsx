import { redirect } from 'next/navigation';

export default async function VidenscenteretIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect(locale === 'kl' ? '/kl/videnscenteret/om-os' : '/videnscenteret/om-os');
}
