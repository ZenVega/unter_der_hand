import type { Config } from "tailwindcss";

const config: Config = {
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
    extend: {
      spacing: {
        "1/2": "50%",
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
