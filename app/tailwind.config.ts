import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
				sans: [...fontFamily.sans],
				poppins: ['"Poppins"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"]
			}
    }
  },
//@ts-ignore
  plugins: [require("@tailwindcss/typography")],
} as Config;
