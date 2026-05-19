import type { Metadata } from 'next';
import { getKontaktpersoner } from '@/lib/kontaktpersoner';
import { PageBody, Lede, SectionHeading, PersonCard, PersonGrid, Callout, InlineLink } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Kontakt' };

export default async function KontaktPage() {
  const kontaktpersoner = await getKontaktpersoner();

  return (
    <PageBody>
      <Lede>
        Vi er her for at hjælpe — skriv, ring eller kom forbi. Vi taler
        kalaallisut og dansk.
      </Lede>

      <SectionHeading>Vejledere</SectionHeading>
      <PersonGrid>
        {kontaktpersoner.map(p => (
          <PersonCard
            key={p.slug}
            name={p.name}
            title={p.title}
            phone={p.phone}
            email={p.email}
            initials={p.initials}
          />
        ))}
      </PersonGrid>

      <SectionHeading>Videnscenteret</SectionHeading>
      <div className="kv" style={{ maxWidth: 380, marginBottom: 24 }}>
        <div>Adresse</div><div>Imaneq 4, 3900 Nuuk</div>
        <div>Hovednummer</div><div>(+299) 34 50 00</div>
        <div>E-mail</div><div><a href="mailto:naqinneq@nanoq.gl" style={{ color: 'var(--primary)' }}>naqinneq@nanoq.gl</a></div>
        <div>Åbningstid</div><div>Mandag–fredag 09–15</div>
        <div>Under</div><div>Uddannelsesstyrelsen, Grønland</div>
      </div>

      <Callout>
        Har du en generel henvendelse? Brug vores{' '}
        <InlineLink href="/videnscenteret/kontakt/besked">kontaktformular</InlineLink>{' '}
        — vi svarer inden for 2 hverdage.
      </Callout>
    </PageBody>
  );
}
