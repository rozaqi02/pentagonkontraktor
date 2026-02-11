/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#f98814",
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12"
        },
        ink: {
          DEFAULT: "#0b1220",
          50: "#f5f7fb",
          100: "#e7edf7",
          200: "#cdd9f0",
          300: "#a9bfe4",
          400: "#7a9bd4",
          500: "#4f76c0",
          600: "#345aa2",
          700: "#27467f",
          800: "#1f3764",
          900: "#162646"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "Apple Color Emoji", "Segoe UI Emoji"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(15, 23, 42, 0.08)",
        glow: "0 0 0 1px rgba(249, 136, 20, 0.18), 0 12px 40px rgba(249, 136, 20, 0.12)"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite"
      }
    },
  },
  plugins: [],
};
