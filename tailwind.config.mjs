import fluid, { extract, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", extract],
  theme: {
    fluid: ({ theme }) => {
      defaultScreens: [theme("screens.md"), theme("screens.lg")];
    },
    extend: {
      screens,
      colors: {
        "soft-orange": "hsl(35, 77%, 62%)",
        "soft-red": "hsl(5, 85%, 63%)",
        "off-white": "hsl(36, 100%, 99%)",
        "gray-blue": "hsl(233, 8%, 79%)",
        "dark-gray-blue": "hsl(236, 13%, 42%)",
        "dark-blue": "hsl(240, 100%, 5%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        paragraph: "15px",
      },
    },
  },
  plugins: [fluid],
};
