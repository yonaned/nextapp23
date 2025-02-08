import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme"; // Import fontFamily

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans], // Add Poppins
        geist: ['var(--font-geist-sans)', ...fontFamily.sans], // Optional: Add Geist
        'geist-mono': ['var(--font-geist-mono)', ...fontFamily.mono], // Optional: Add Geist Mono
      },
    },
  },
  plugins: [],
} satisfies Config;