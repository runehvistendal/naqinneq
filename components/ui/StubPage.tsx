import type { ReactNode } from 'react';
import { PageBody, Lede } from './PageBody';

// Sider hvor det endelige indhold endnu ikke er klar. Hver side leverer sin
// egen lede og brødtekst om, at indholdet udarbejdes løbende.
export function StubPage({ lede, children }: { lede: ReactNode; children?: ReactNode }) {
  return (
    <PageBody>
      <Lede>{lede}</Lede>
      {children}
    </PageBody>
  );
}
