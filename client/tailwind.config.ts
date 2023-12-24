import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
      'primary': '#65A30D',
      'button-primary': '#3F3D56',
      'button-secondary': '#8e76b4'
     },
     fontFamily: {
      inter: ['var(--font-inter)'],
      epilogue: ['var(--font-epilogue)'],
      fredoka: ['var(--font-fredoka)'],
     }
    },
  },
  plugins: [],
}
export default config
