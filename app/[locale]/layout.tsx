import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { AccessibilityProvider } from '@/components/providers/AccessibilityProvider';
import { SiteShell } from '@/components/layout/SiteShell';
import { Footer } from '@/components/layout/Footer';
import '@/app/globals.css';

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export const metadata: Metadata = {
  title: { default: 'Naqinneq.gl', template: '%s | Naqinneq.gl' },
  description: 'Videnscenter for ordblindhed og læse- og skrivevanskeligheder — Uddannelsesstyrelsen, Naalakkersuisut',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'da' | 'kl')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <AccessibilityProvider>
            <SiteShell locale={locale} footer={<Footer locale={locale} />}>
              {children}
            </SiteShell>
          </AccessibilityProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
