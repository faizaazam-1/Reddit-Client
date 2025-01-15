// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fdfa", // Background
          100: "#ccfbf1", // Card background
          200: "#99f6e4", // Hover states
          500: "#14b8a6", // Main accent
          600: "#0d9488", // Darker accent for hover
        },
        neutral: {
          100: "#f8fafc", // Alternative background
          200: "#e2e8f0", // Borders
          300: "#cbd5e1", // Dividers
          500: "#64748b", // Secondary text
          700: "#334155", // Primary text
        },
      },
    },
  },
  plugins: [],
};
