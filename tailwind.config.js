/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Añadir jsx, ts, y tsx si los usas
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
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
