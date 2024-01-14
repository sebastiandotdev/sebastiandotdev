import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'es'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    es: '/pfadnamen',
    en: '/pathnames'
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;