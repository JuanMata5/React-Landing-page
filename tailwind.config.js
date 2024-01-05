/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        'xs': '320px',
        
      },
      screens: {
        'xs': '320px',
      },
    },
  },
  plugins: [],
}