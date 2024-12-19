/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'xxs': '350px',
        'xs': '450px',
        'sm': '550px',
      },
    },
  },
  plugins: [],
}

