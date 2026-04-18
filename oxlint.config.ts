import { defineConfig } from 'oxlint'

export default defineConfig({
  plugins: ['unicorn', 'typescript', 'oxc'],

  categories: {
    correctness: 'warn',
  },
  rules: {
    'eslint/no-unused-vars': 'error',
  },
})
