import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Design-prototyperne i public/designs/ er statiske SPA'er —
  // disse rewrites lader dem svare på pæne stier uden /index.html
  async rewrites() {
    return [
      { source: '/designs/arktisk', destination: '/designs/arktisk/index.html' },
      { source: '/designs/legende', destination: '/designs/legende/index.html' },
    ];
  },
};

export default withNextIntl(nextConfig);
