/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "dark-primary": "var(--dark-primary)",
        "light-primary": "var(--light-primary)",
        secondary: "var(--secondary)",
        black: "var(--black)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
};
