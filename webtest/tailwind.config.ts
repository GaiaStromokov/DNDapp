import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        customBg: '#f9e8d2', // Lighter version of #f4e1c1
        customText: '#4a3a2b', // Lighter version of #3a2a1b
        customDarkBg: '#4a3a2b', // Lighter version of #3a2a1b
        customDarkText: '#f9e8d2', // Lighter version of #f4e1c1
      },
    },
  },
  plugins: [],
} satisfies Config;