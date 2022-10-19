/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "card": "hsl(var(--cardBG))",
        "very-dark-blue-line": "hsl(var(--very-dark-blue-line))",
        "soft-blue": "hsl(var(--soft-blue))",
        "cyan": "hsl(var(--cyan))",
      }
    },
  },
  plugins: [],
}
