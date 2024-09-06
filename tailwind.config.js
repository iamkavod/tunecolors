/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: '#001466',
        white: '#fff',
        deepYellow: '#f7d005',
        gray: '#768a0',
        marianaBlue: '#07232f',
        tuneColorRed: '#960065',
        tuneColorRedB: '#7C0062',
      }
    },
  },
  plugins: [],
}

