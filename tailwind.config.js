/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}' //包含了src文件夹下所有的vue,js等等文件
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        theme: '#479478',
        yellow: '#F56E0D',
        hui: '#798196',
        green: '#b1dccc',
        'green-10': '#E0F1EB'
      },
      maxWidth: {
        page: '1288px'
      }
    }
  },
  plugins: []
}
