import type { Config } from "tailwindcss";

const config: Config = {
  purge: [ "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      udh_green: "#789c84",
      udh_dark_green: "#1c4441",
      udh_orange: "#f6c193",
      udh_pink: "#f1bfc4",
      udh_yellow: "#ebd189",
    },
    screens: {
      'md+': '876px',
    },
    extend: {
      spacing: {
        "1/2": "50%",
        "88": "22.5rem"
      },
      flex: {
        "2": "2 2 0%",
        "3": "3 3 0%",
      },
    },
  },
  plugins: [],
};
export default config;
