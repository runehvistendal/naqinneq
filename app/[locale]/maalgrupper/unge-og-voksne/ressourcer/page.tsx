import type { Metadata } from 'next';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = { title: 'Ressourcer — Unge og voksne' };
export default function UngeOgVoksneRessourcerPage() {
  return (
    <StubPage lede="Her samler vi ressourcer målrettet unge og voksne med læse- og skrivevanskeligheder.">
      <p>
        Ressourcerne tilføjes løbende i takt med, at materialer, vejledninger
        og værktøjer bliver klar.
      </p>
    </StubPage>
  );
}
