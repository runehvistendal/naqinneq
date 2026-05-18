import type { Metadata } from 'next';
import { PageBody, Lede, Callout, InlineLink } from '@/components/ui/PageBody';
import { KontaktForm } from '@/components/ui/KontaktForm';

export const metadata: Metadata = { title: 'Skriv til os' };

export default function KontaktBeskedPage() {
  return (
    <PageBody>
      <Lede>
        Udfyld formularen herunder, så vender vi tilbage inden for 2 hverdage.
        Vi besvarer henvendelser på kalaallisut og dansk.
      </Lede>

      <KontaktForm />

      <Callout>
        Foretrækker du at ringe? Vores hovednummer er{' '}
        <a href="tel:+299345000" style={{ color: 'var(--primary)' }}>(+299) 34 50 00</a>
        {' '}— åbent mandag–fredag 09–15.{' '}
        <InlineLink href="/videnscenteret/kontakt">Se alle kontaktpersoner</InlineLink>.
      </Callout>
    </PageBody>
  );
}
