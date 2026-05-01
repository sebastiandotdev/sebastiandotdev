import { createExternalPackageIconLoader } from '@iconify/utils/lib/loader/external-pkg'
import {
  defineConfig,
  presetIcons,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'forced-color-adjust': 'preserve-parent-color',
      },
      warn: true,
      scale: 1.2,
      collections: createExternalPackageIconLoader(
        '@iconify-json/solar/icons.json',
      ),
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  shortcuts: [
    // buttons
    [
      'btn',
      'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold ring-offset-background transition-all active:translate-x-1 active:translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-4 border-black',
    ],
    ['btn-default', 'bg-glacier text-black'],
    ['btn-destructive', 'bg-coral text-white'],
    ['btn-outline', 'border-black bg-transparent text-black'],
    ['btn-secondary', 'bg-bubblegum text-black'],
    ['btn-ghost', 'border-transparent text-black'],
    [
      'btn-link',
      'text-primary underline-offset-4 hover:underline border-transparent',
    ],
    ['btn-default-size', 'h-10 px-4 py-2'],
    ['btn-sm', 'h-9 rounded-md px-3'],
    ['btn-lg', 'h-12 rounded-xl px-8 text-lg'],
    ['btn-icon', 'h-10 w-10'],

    // Neu-Brutalism
    ['brutal-border', 'border-4 border-black dark:border-white'],
    ['brutal-border-thick', 'border-[5px] border-black dark:border-white'],
    ['brutal-corner-h', 'absolute w-10 h-1 bg-black dark:bg-white'],
    ['brutal-corner-v', 'absolute h-10 w-1 bg-black dark:bg-white'],
  ],
  theme: {
    spacing: { DEFAULT: '4px' },
    font: {
      mono: "'Geist Mono', 'IBM Plex Sans Arabic', monospace",
      sans: "'Geist', 'IBM Plex Sans Arabic', system-ui, -apple-system, sans-serif",
    },
    text: {
      '2xs': { fontSize: '0.6875rem' }, // 11px
      '3xs': { fontSize: '0.625rem' }, // 10px
      '4xs': { fontSize: '0.5625rem' }, // 9px
      '5xs': { fontSize: '0.5rem' }, // 8px
    },
    colors: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      sunlight: 'var(--sunlight)',
      glacier: 'var(--glacier)',
      bubblegum: 'var(--bubblegum)',
      orchid: 'var(--orchid)',
      coral: 'var(--coral)',

      border: {
        DEFAULT: 'var(--border)',
        subtle: 'var(--border-subtle)',
        hover: 'var(--border-hover)',
      },
    },
  },
})
