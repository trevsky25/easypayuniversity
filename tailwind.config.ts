import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        easypay: {
          green: "#00D4AA",
          "green-dark": "#00B894",
          "green-light": "#1DD1A1",
          teal: "#00D4AA",
          gray: {
            50: "#F8F9FA",
            100: "#F1F3F4", 
            200: "#E8EAED",
            300: "#DADCE0",
            400: "#BDC1C6",
            500: "#9AA0A6",
            600: "#80868B",
            700: "#5F6368",
            800: "#3C4043",
            900: "#202124",
            sidebar: "#F8F9FA",
          }
        }
      },
    },
  },
  plugins: [],
};

export default config;