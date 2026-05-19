import { redirect } from 'next/navigation';

// Redirect old "Skriv til os" URL to the merged Kontakt os page
export default async function KontaktBeskedRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(locale === 'kl' ? '/kl/videnscenteret/kontakt' : '/videnscenteret/kontakt');
}
