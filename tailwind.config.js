/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'onest-regular': 'var(--font-onest-regular)',
        'onest-bold': 'var(--font-onest-bold)',
      },
      colors: {
        primary: '#F5F5F7',
        secondary: '#A1A1AA',
        tertiary: '#46A4F6',
        background: '#111215',
      },
    },
  },
  plugins: [],
}
