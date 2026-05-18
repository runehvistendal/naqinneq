import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'Naqinneq.gl', template: '%s | Naqinneq.gl' },
  description: 'Videnscenter for ordblindhed og læse- og skrivevanskeligheder — Uddannelsesstyrelsen, Naalakkersuisut',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
