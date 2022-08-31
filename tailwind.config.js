/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'Roboto'
      ],
      mediumSerifItalic: ['CharterItalic'],
      mediumSerif: ['Charter'],
    },
    extend: {},
  },
  plugins: [],
}
