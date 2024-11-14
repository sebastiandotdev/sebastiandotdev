import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  outdir: 'styled-system',
  include: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  jsxFramework: 'react',
  jsxFactory: 'panda',
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          current: { value: 'currentColor' },
          background: { value: '#161616' },
          black: { value: '#000' },
          white: { value: '#fff' },

          neutral: {
            50: { value: '#f6f6f6' },
            100: { value: '#e7e7e7' },
            200: { value: '#d1d1d1' },
            300: { value: '#b0b0b0' },
            400: { value: '#888888' },
            500: { value: '#6d6d6d' },
            600: { value: '#5d5d5d' },
            700: { value: '#4f4f4f' },
            800: { value: '#454545' },
            900: { value: '#3d3d3d' },
            950: { value: '#212121' },
          },
        },
      },
    },
  },
})
