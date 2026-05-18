import { redirect } from 'next/navigation';

export default async function UngeOgVoksneIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect(locale === 'kl' ? '/kl/maalgrupper/unge-og-voksne/overblik' : '/maalgrupper/unge-og-voksne/overblik');
}
