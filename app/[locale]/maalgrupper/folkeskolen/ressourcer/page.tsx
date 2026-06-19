import type { Metadata } from 'next';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = { title: 'Ressourcer — Folkeskolen' };
export default function FolkeskolenRessourcerPage() {
  return (
    <StubPage lede="Her samler vi ressourcer målrettet folkeskolen — til lærere, læsevejledere og forældre.">
      <p>
        Ressourcerne tilføjes løbende i takt med, at materialer, vejledninger
        og værktøjer bliver klar.
      </p>
    </StubPage>
  );
}
