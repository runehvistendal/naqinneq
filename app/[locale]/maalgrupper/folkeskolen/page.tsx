import { redirect } from 'next/navigation';

export default async function FolkeskolenIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect(locale === 'kl' ? '/kl/maalgrupper/folkeskolen/overblik' : '/maalgrupper/folkeskolen/overblik');
}
