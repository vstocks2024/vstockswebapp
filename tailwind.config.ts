import { Lusitana } from "next/font/google";
import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme");
import  flowbite from "flowbite-react/tailwind";


const config = {
  darkMode: ["class"],
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    flowbite.content(),
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        
        '2xl': '1400px',
        '3xl':'1700px',
        
        
      },
    },
    extend: {
      screens:{
        
      },
      fontFamily:{
        sans: ["var(--font-sans)","var(--font-lusitana)", ...fontFamily.sans],
        poppins600: ['var(--font-poppins600)'],
        poppins400: ['var(--font-poppins400)'],
        montserrat400:['var(--font-montserrat400)'],
        roboto500:['var(--font-roboto500)']
        
      },
      boxShadow: {
        category: '-9px 10px 25px 0px rgba(0, 0, 0, 0.25)',
        headershadow: '0px 4px 166px 0px rgba(0, 0, 0, 0.15)',
        cardshadow: '0px 0px 33px 0px rgba(0, 0, 0, 0.13)',
        projectcard: '0px 0px 81px 0px rgba(0, 0, 0, 0.18)',
        projectcardimage:'0px 0px 33px 0px rgba(0, 0, 0, 0.13)',
        templatedropdown:'0px 0px 236px 0px ,rgba(0,0,0,0.25)'
      },
      opacity: {
        '20': '.20',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        mycolor1: "rgba(255,255,255,.20)",
        mycolor2: "rgba(255,255,255,.07)",
        mycolor3:"rgba(94, 92, 238, 0.20)",
        mycolor4:"rgba(255, 255, 255, 0.86)",
        mycolor5:"rgba(0,0,0,0.79)"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("flowbite/plugin"),
    flowbite.plugin(),
  ],
} satisfies Config

export default config