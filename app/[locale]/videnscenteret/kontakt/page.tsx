import type { Metadata } from 'next';
import { PageBody, Lede, SectionHeading, PersonCard, PersonGrid, Callout, InlineLink } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Kontakt' };

export default function KontaktPage() {
  return (
    <PageBody>
      <Lede>
        Vi er her for at hjælpe — skriv, ring eller kom forbi. Vi taler
        kalaallisut og dansk.
      </Lede>

      <SectionHeading>Vejledere</SectionHeading>
      <PersonGrid>
        <PersonCard
          name="Aviâja Olsen"
          title="Specialvejleder, ordblindhed"
          phone="+299 34 50 11"
          email="ao@nanoq.gl"
          initials="AO"
        />
        <PersonCard
          name="Poul Erik Hansen"
          title="Konsulent, læse- og skriveteknologi"
          phone="+299 34 50 14"
          email="peh@nanoq.gl"
          initials="PH"
        />
        <PersonCard
          name="Nivi Fleischer"
          title="Koordinator, kurser og events"
          phone="+299 34 50 17"
          email="nf@nanoq.gl"
          initials="NF"
        />
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
