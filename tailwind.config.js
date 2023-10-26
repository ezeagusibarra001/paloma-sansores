import { getTailwindColors } from "./src/constants/Colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...getTailwindColors(),
      },
      backgroundImage: {
        banner: "url('/img/banner.png')",
        paloma: "url('/img/paloma.png')",
        speaker: "url('/img/speaker.png')",
        bannerSobreMi: "url('/img/banner-sobre-mi.png')",
        sobreMi: "url('/img/sobre-mi.png')",
        micro: "url('/img/micro.png')",
        elipse: "url('/img/elipse.png')",
        wem: "url('/img/wem.png')",
        women: "url('/img/women.png')",
        celular: "url('/img/celular.png')",
      },
    },
  },
  plugins: [],
};
