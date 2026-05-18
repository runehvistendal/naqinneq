import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['da', 'kl'],
  defaultLocale: 'da',
  localePrefix: 'as-needed',
});
