import type { Metadata } from 'next';
import { PageBody, Lede, Two, Card, Callout } from '@/components/ui/PageBody';

export const metadata: Metadata = { title: 'Skriftsprogsvanskeligheder' };

export default function SkriftsprogPage() {
  return (
    <PageBody>
      <Lede>
        Skriftsprogsvanskeligheder dækker bredere end ordblindhed. Det omfatter
        både besvær med at læse, skrive, stave og forstå tekst — og kan have
        flere forskellige årsager.
      </Lede>
      <Two>
        <Card title="Læseforståelse">
          Når afkodningen virker, men teksten alligevel ikke giver mening.
        </Card>
        <Card title="Skriftlig fremstilling">
          Når det er svært at få sine tanker på papir i en sammenhængende form.
        </Card>
        <Card title="Stavning">
          Stavevanskeligheder kan optræde alene eller sammen med ordblindhed.
        </Card>
        <Card title="Tosprogethed">
          Skriftsprog på et andetsprog stiller særlige krav — også i Grønland.
        </Card>
      </Two>
      <Callout>
        Vidensgrundlag og redskaber til denne side er under udarbejdelse.
        Lanceres 1. august 2026 sammen med resten af platformen.
      </Callout>
    </PageBody>
  );
}
