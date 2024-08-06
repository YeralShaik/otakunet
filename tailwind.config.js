/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Añadir jsx, ts, y tsx si los usas
  theme: {
    extend: {
      colors: {
        'primary': '#0027B0',   // Añadir #
        'secondary': '#3F87FF', // Añadir #
        'text': '#001366',      // Añadir #
        'white': '#E5F4FF',  
        'black': '#0000'  
      }
    },
  },
  plugins: [],
}
