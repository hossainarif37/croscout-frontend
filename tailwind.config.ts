import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#022533",
        secondary: "#3A4E55",
        accent: "#25F299",
        "primary-50": "#182237",
        "secondary-50": "#b7bac1",
        "white-50": "#F5F5F5"
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
export default config;
