/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      'sm': '400px',
      

      'md': '700px',
      

      'lg': '1000px',
      
    }
    
  },
 
  plugins: [require("daisyui")],
}

