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
          DEFAULT: "#ec4a0a",
          50: "#fff6ed",
          100: "#ffead5",
          200: "#fdd599",
          300: "#feb273",
          400: "#fd853a",
          500: "#fb6514",
          600: "#ec4a0a",
          700: "#c4320a",
          800: "#9c2a10",
          900: "#7c2d12"
        },
        ink: {
          DEFAULT: "#121212",
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#121212"
        }
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
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
