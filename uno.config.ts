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
      /* options */
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    spacing: { DEFAULT: '4px' },
    text: {
      '2xs': { fontSize: '0.6875rem' }, // 11px
      '3xs': { fontSize: '0.625rem' }, // 10px
      '4xs': { fontSize: '0.5625rem' }, // 9px
      '5xs': { fontSize: '0.5rem' }, // 8px
    },
    colors: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
    },
  },
})
