import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  outdir: 'styled-system',
  include: ['./app/**/*.{js,jsx,ts,tsx}'],
  jsxFramework: 'react',
  theme: {
    extend: {},
  },
  exclude: [],
})
