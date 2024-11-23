/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        '400': '400',
        '500': '500',
      },
      transitionDuration: {
        '2000': '2000ms', // 2 seconds
        '3000': '3000ms',
        '5000': '5000ms',// 3 seconds
      },
    },
  },
  plugins: [],
}

