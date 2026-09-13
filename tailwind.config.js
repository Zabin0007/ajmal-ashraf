/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        cream: '#e8d4c0',
        gray: '#a8a8a8',
        dark: '#050a15',
      },
      spacing: {
        8: '2rem',
      },
      tracking: {
        8: '0.2em',
        widest: '0.25em',
      },
      animation: {
        fadeInDown: 'fadeInDown 0.8s ease-out',
        sealPulse: 'sealPulse 2s ease-in-out infinite',
        slideInUp: 'slideInUp 0.8s ease-out',
      },
    },
  },
  plugins: [],
}
