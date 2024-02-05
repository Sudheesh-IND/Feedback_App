/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        clr1:'#AD1FEA',
        clre2:'#4661E6',
        clr3:'#4661E6',
        clr4:'#FFFFFF',
        clr5:'#647196',
        clr6:'#3A4374',
        clr7:'#F7F8FD',
        clr8:'#F2F4FF',
        clr9:'#F49F85',
        clr10:'#62BCFA'
      },
      fontFamily:{
        fam1:'Jost'
      }
    },
  },
  plugins: [],
}

