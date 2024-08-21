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
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-left": "slide 60s linear infinite",
        "slide-right": "slide 60s linear infinite reverse",
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
