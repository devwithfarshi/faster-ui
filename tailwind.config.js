/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        paragraph: "var(--paragraph)",
        borderSecondary: "var(--border-secondary)",
        borderAccent: "var(--border-accent)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
