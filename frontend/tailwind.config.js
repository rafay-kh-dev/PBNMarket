/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pbnred: {
          DEFAULT: '#DC2626',
          light: '#FEF2F2',
          dark: '#E50914',
        },
        pbndark: '#0F172A',
        pbnmuted: '#64748B',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        instrument: ['Instrument Serif', 'serif'],
      },
      boxShadow: {
        'premium': '0 16px 48px -16px rgba(0, 0, 0, 0.12)',
        'float': '0 24px 60px -24px rgba(220, 38, 38, 0.25)',
      },
      letterSpacing: {
        tightest: '-0.03em',
      }
    },
  },
  plugins: [],
}