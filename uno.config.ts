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
        '@iconify-json/circle-flags/icons.json',
      ),
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  shortcuts: [
    [
      'btn',
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] px-4 py-2 max-w-min',
    ],
    [
      'btn-default',
      'bg-black hover:bg-black/90 text-white dark:bg-white dark:hover:bg-white/90 dark:text-black',
    ],
  ],
  theme: {
    spacing: { DEFAULT: '4px' },
    font: {
      mono: "'Geist Mono', 'IBM Plex Sans Arabic', monospace",
    },
    text: {
      '2xs': { fontSize: '0.6875rem' }, // 11px
      '3xs': { fontSize: '0.625rem' }, // 10px
      '4xs': { fontSize: '0.5625rem' }, // 9px
      '5xs': { fontSize: '0.5rem' }, // 8px
    },
  },
})
