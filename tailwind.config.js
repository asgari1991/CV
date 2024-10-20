/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        darkmodeBg: '#333333',
        lightmodeBg: '#e2e2e2'
      },
      fontFamily:{
        "EstedadBold":"Estedad Bold",
        "EstedadRegular":"Estedad Regular"
      }
    },
  },
  plugins: [
    function ({addVariant}){
      addVariant('child','&>*')
      addVariant('child-hover','&>*:hover')
    }
  ],
}

