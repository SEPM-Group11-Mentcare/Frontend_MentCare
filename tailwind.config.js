/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#F5F3F7",
        primaryBlue: "#2B50D8",
        strokeColor: "#E4E4E7",
      },
      screens: {
        phone: "240px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }
        tablet: "750px",
        desktop: "1440px",
      },
    }, // Close the extend object
  }, // Close the theme object
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
  daisyui: {
    themes: ["light"],
  },
};
