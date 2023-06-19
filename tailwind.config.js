/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      colors: {
        "primary-900": "#08090b",
        "primary-800": "#0f1013",
        "primary-700": "#222831",
        "primary-400": "#3e4149",
        "primary-300": "#5e616b",
        "secondary-900": "#00494F",
        "secondary-800": "#007877",
        "secondary-700": "#00ADB5",
        "secondary-400": "#33C1C9",
        "secondary-300": "#66D6DF",
      },
    },
  },
  plugins: [],
};
