import type { Metadata } from 'next';
import { PageBody, Lede, SectionHeading, Callout } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Screening for ordblindhed' };

export default function ScreeningPage() {
  return (
    <PageBody>
      <Lede>
        En screening giver et hurtigt overblik over, om der er grund til at
        undersøge ordblindhed nærmere. Den er ikke en diagnose — men et godt
        sted at starte.
      </Lede>

      <SectionHeading>Om screeningen</SectionHeading>
      <p>
        Uddannelsesstyrelsen har siden 2014 arbejdet på at styrke
        læseundervisningen i indskolingen. De færdige screeningsværktøjer for
        1.–3. klasse er overdraget til alle kommuner og skoler til brug i
        læsepædagogisk arbejde og tidlig indsats.
      </p>
      <p>
        Nu arbejdes der på at gøre tidlig identifikation af ordblindhed
        lovpligtig.
      </p>
      <SectionHeading>Vi arbejder på at digitalisere screeningen</SectionHeading>
      <p>
        Screeningsværktøjerne findes i dag i papirform. Vi arbejder på at
        digitalisere dem, så testresultaterne bliver mere ensartede, det
        administrative arbejde bliver lettere, og læsenormerne løbende kan
        opdateres.
      </p>
      <p>
        Når den digitale screening er klar, finder du al relevant information
        på denne side.
      </p>

      <Callout>
        Screeningsværktøjer til de yngste klasser ligger allerede i alle skoler
        og i MISI. Kontakt din skoles læsevejleder for at komme i gang.
      </Callout>
    </PageBody>
  );
}
