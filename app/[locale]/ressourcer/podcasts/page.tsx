import type { Metadata } from 'next';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = { title: 'Podcasts' };
export default function PodcastsPage() {
  return <StubPage title="Podcasts" />;
}
