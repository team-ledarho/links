/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        vk: 'rgb(69, 102, 142)',
        telega: 'rgb(0, 136, 204)'
      }
    },
  },
  plugins: [],
}