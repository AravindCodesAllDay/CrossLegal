// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeOut: "fadeOut 1.5s ease-out",
      },
      colors: {
        primary: "#181a22",
        secondary: "#b9967e",
      },
      fontFamily: {
        marcellus: ["Marcellus", "serif"],
      },
      backgroundImage: {
        statue: "url('/app/_assets/statue.jpg')",
      },
    },
  },
  plugins: [],
};

export default config;
