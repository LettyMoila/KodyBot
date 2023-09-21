/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'kodyorange': '#ef6a36',
        'kodyblack': '#000000',
        'kodygrey': '#3C4B50',
        'airf': '#A3CAE9',
      },
    },
  },
  plugins: [],
}

