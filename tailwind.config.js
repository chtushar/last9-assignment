/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/images/hero.jpg')"
      },
      colors: {
        primary: {
          100: "#0F172A"
        },
        secondary: {
          100: "#475569"
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}