/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        bgVariant: "#1F2937",
        light: "#9CA3AF",  
        "primary-variant": '#6366F1',
        "color-bg-variant": '#1F2937',
      },
      fontFamily : {
        'react-outfit' : 'Outfit'
      }
    },
  },
  plugins: [],
}