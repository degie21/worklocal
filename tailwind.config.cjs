/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#fff',
        'grey': '#f8f8f8',
        'text': '#353535',
        'text-placeholder' : '#727272',
        'blue' : '#0655b6',
        'jobsearch-blue': '#007bff',
        'light-grey': "#fafafa",
        'grey-b' : "rgba(0,0,0,.08)"
      },
      backgroundImage:{
        'home': "url('../src/assets/home-bg.jpg')"
      },
      fontFamily:{
        noto: ['"Noto Sans"']
      }
    },
  },
  plugins: [],
}
