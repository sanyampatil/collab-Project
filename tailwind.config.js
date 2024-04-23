/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './node_modules/flowbite',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('flowbite/plugin')]
}
