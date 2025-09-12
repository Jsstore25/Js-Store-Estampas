/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'brand-yellow': '#ffde59',
        'brand-dark': '#121212',
        'brand-gray': '#1c1c1c',
      },
    },
  },
  plugins: [],
}
