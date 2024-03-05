import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'header-img': 'url("/assets/aurora.png")'
      },
      colors: {
        'primary':'#0065fe',
        'secondary': '#1E3548',
        'circle': '#E4EFFF',
        'platform': '#F9FBFD',
    },
    

    }
  },
  plugins: [],
};
export default config;
