/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-brown': '#1E0A05',
        'section-bg-brown': '#513026',
        'section-green': '#B1D9C6',
        'header-purple': '#D6C9F1',
        'logo-hover': '#9E84D6',
      },
      gradientColorStopPositions: {
        80: '80%',
      },
      animation: {
        hbounce: 'hbounce 0.15s ease-in-out',
      },
      keyframes: {
        hbounce: {
          '0%': { letterSpacing: 'normal' },
          '50%': { letterSpacing: '0.05em' },
          '100%': { letterSpacing: 'normal' },
        }
      }
    },
  },
  plugins: [],
}