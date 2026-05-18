import { redirect } from 'next/navigation';

export default async function VidensomraaderIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect(locale === 'kl' ? '/kl/vidensomraader/ordblindhed' : '/vidensomraader/ordblindhed');
}
