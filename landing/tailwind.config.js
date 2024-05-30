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
      },
      gradientColorStopPositions: {
        80: '80%',
      }
    },
  },
  plugins: [],
}