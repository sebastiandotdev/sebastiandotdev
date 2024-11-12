import { defineConfig } from '@pandacss/dev'
import { tokens } from './themes/tokens'

export default defineConfig({
  preflight: true,
  outdir: 'styled-system',
  include: ['./app/**/*.{js,jsx,ts,tsx}'],
  jsxFramework: 'react',
  theme: {
    extend: { tokens },
  },
  exclude: [],
})
