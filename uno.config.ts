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
  theme: {
    spacing: { DEFAULT: '4px' },
    font: {
      sans: "'Geist', sans-serif",
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
