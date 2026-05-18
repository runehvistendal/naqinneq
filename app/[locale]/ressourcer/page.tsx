import { redirect } from 'next/navigation';

export default async function RessourcerIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect(locale === 'kl' ? '/kl/ressourcer/laese-og-skriveteknologi' : '/ressourcer/laese-og-skriveteknologi');
}
