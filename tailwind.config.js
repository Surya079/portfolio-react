/** @type {import('tailwindcss').Config} */
import tailwindcssMotion from "tailwindcss-motion";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#e0f7fa",
        "sky-blue": "#80d8ff",
        "ocean-blue": "#0288d1",
        "soft-gray": "#f8f9fa",
        "dark-gray": "#333333",
      },
      gradientColorStops: {
        "gradient-start": "#e0f7fa", // Light Blue
        "gradient-middle": "#80d8ff", // Sky Blue
        "gradient-end": "#0288d1", // Ocean Blue
      },
    },
  },
  plugins: [tailwindcssMotion],
};
