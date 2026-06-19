import type { Metadata } from 'next';
import { PageBody, Lede, SectionHeading, PersonCard, PersonGrid } from '@/components/ui/PageBody';
import { KontaktForm } from '@/components/ui/KontaktForm';

export const metadata: Metadata = { title: 'Kontakt os' };

export default function KontaktPage() {
  return (
    <PageBody>
      <Lede>
        Vi er her for at hjælpe — skriv, ring eller kom forbi. Vi taler
        kalaallisut og dansk.
      </Lede>

      <SectionHeading>Medarbejdere</SectionHeading>
      <PersonGrid>
        <PersonCard
          name="Mette Larsen Lyberth"
          title="Fg. afdelingschef for pædagogisk udvikling"
          phone="+299 34 62 78"
          email="mell@nanoq.gl"
          initials="ML"
        />
        <PersonCard
          name="Karina Meincke"
          title="Skolekonsulent Dysleksi"
          phone="+299 34 62 99"
          email="kame@nanoq.gl"
          initials="KM"
        />
        <PersonCard
          name="Parnûna K. Lynge"
          title="Projektkonsulent, dysleksi"
          phone="+299 34 62 56"
          email="prly@nanoq.gl"
          initials="PL"
        />
        <PersonCard
          name="Birthe Lyberth"
          title="Projektkonsulent, dysleksi"
          phone="+299 34 62 53"
          email="bily@nanoq.gl"
          initials="BL"
        />
      </PersonGrid>

      <SectionHeading>Videnscenteret</SectionHeading>
      <div className="kv" style={{ maxWidth: 380, marginBottom: 40 }}>
        <div>Adresse</div><div>Imaneq 4, 3900 Nuuk</div>
        <div>Hovednummer</div><div><a href="tel:+299345000" style={{ color: 'var(--primary)' }}>(+299) 34 50 00</a></div>
        <div>E-mail</div><div><a href="mailto:naqinneq@nanoq.gl" style={{ color: 'var(--primary)' }}>naqinneq@nanoq.gl</a></div>
        <div>Åbningstid</div><div>Mandag–fredag 09–15</div>
        <div>Under</div><div>Uddannelsesstyrelsen, Grønland</div>
      </div>

      <SectionHeading>Skriv til os</SectionHeading>
      <p style={{ marginBottom: 24 }}>
        Udfyld formularen herunder, så vender vi tilbage inden for 2 hverdage.
        Vi besvarer henvendelser på kalaallisut og dansk.
      </p>
      <KontaktForm />
    </PageBody>
  );
}
