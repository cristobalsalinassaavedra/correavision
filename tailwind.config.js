/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        petroleum: '#0D2B3E',
        industrial: '#1A5276',
        accent: '#1ABC9C',
        'accent-dark': '#17A589',
        'cv-text': '#1C2B33',
        'cv-muted': '#5A6A72',
        'cv-border': '#D0D8DC',
        'cv-bg': '#F4F6F8',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
