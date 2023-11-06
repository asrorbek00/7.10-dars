/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      'sm': '300px',
      

      'md': '600px',
      

      'lg': '1000px',
      
    }
    
  },
 
  plugins: [require("daisyui")],
}

